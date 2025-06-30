// import { data } from "autoprefixer";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function sumScores(skills) {
  let totalScore = 0;
  skills.forEach((skill) => {
    totalScore += skill.rank ?? 0;
    if (skill.options) totalScore += sumScores(skill.options);
    if (skill.children) totalScore += sumScores(skill.children);
    if (skill.secondOptions) totalScore += sumScores(skill.secondOptions);
  });
  return totalScore;
}

export const generateConnections = (skillsData) => {
  // Initialize all connection arrays
  let connections = [];
  let connectionChild = [];
  let ConectionOptions = [];
  let ConectionSecondOptions = [];
  let SecondOptionChild = [];

  // Iterate through each category in skillsData
  skillsData.forEach((category) => {
    const fromNodeId = category.id.toString();

    // Handle main category connections
    if (category.next_id) {
      const toNodeId = category.next_id.toString();
      const connectionId = `connection_${fromNodeId}_${toNodeId}`;
      connections.push({
        from: `node${fromNodeId}`,
        to: `node${toNodeId}`,
        id: connectionId,
        child: false,
      });
    }

    // Handle main options and their connections
    category.options?.forEach((option) => {
      const optionNodeId = option.id.toString();
      const optionConnectionId = `connection_${fromNodeId}_${optionNodeId}`;

      // Add connection from category to option
      ConectionOptions.push({
        from: `node${fromNodeId}`,
        to: `node${optionNodeId}`,
        id: optionConnectionId,
        child: true,
      });

      // Handle option's next connections if they exist
      if (option.next_id) {
        const nextNodeId = option.next_id.toString();
        const nextConnectionId = `connection_${optionNodeId}_${nextNodeId}`;

        ConectionOptions.push({
          from: `node${optionNodeId}`,
          to: `node${nextNodeId}`,
          id: nextConnectionId,
        });
      }

      // Handle option's children connections
      option.children?.forEach((child) => {
        const childParentId = child.parent_id.toString();
        const childNodeId = child.id.toString();
        const childConnectionId = `connection_${childParentId}_${childNodeId}`;

        connectionChild.push({
          from: `node${childParentId}`,
          to: `node${childNodeId}`,
          id: childConnectionId,
        });
      });

      // Handle option's connections to secondOptions
    });

    // Handle secondOptions and their connections
    category.secondOptions?.forEach((secondOption) => {
      const secondOptionId = secondOption.id.toString();

      // 1. Connect category to secondOption
      if (!secondOption.parent_id) {
        const secondOptionConnectionId = `connection_${fromNodeId}_${secondOptionId}`;
        ConectionOptions.push({
          from: `node${fromNodeId}`,
          to: `node${secondOptionId}`,
          id: secondOptionConnectionId,
          child: true,
        });
      }

      // 2. Handle secondOption children
      secondOption.children?.forEach((child) => {
        const childNodeId = child.id.toString();
        const childParentId = child.parent_id.toString();

        // a) Connect child to its secondOption parent
        // const childConnectionId = `second_child_connection_${childParentId}_${childNodeId}`;
        // SecondOptionChild.push({
        //   from: `node${childParentId}`,
        //   to: `node${childNodeId}`,
        //   id: childConnectionId,
        //   isSecondOptionChild: true,
        // });
        // a) Connect child to its secondOption parent if can have multiple parents, check if it's a string then use already implemented connection otherwise get parent_id as array
        if (typeof child.parent_id === "string") {
          const childConnectionId = `second_child_connection_${childParentId}_${childNodeId}`;
          SecondOptionChild.push({
            from: `node${childParentId}`,
            to: `node${childNodeId}`,
            id: childConnectionId,
            isSecondOptionChild: true,
          });
        } else {
          const parentIds = Array.isArray(child.parent_id)
            ? child.parent_id
            : [child.parent_id];
          parentIds.forEach((parentId) => {
            const childConnectionId = `second_child_connection_${parentId}_${childNodeId}`;
            SecondOptionChild.push({
              from: `node${parentId}`,
              to: `node${childNodeId}`,
              id: childConnectionId,
              isSecondOptionChild: true,
            });
          });
        }

        // b) Connect child to another option (if linkedOptionId exists)
        if (Array.isArray(child.linkedOptionId)) {
          const linkedOptionIds = child.linkedOptionId.map((id) =>
            id.toString()
          );
          linkedOptionIds.forEach((linkedNodeId) => {
            const linkedConnectionId = `linked_option_connection_${childNodeId}_${linkedNodeId}`;
            ConectionOptions.push({
              from: `node${childNodeId}`,
              to: `node${linkedNodeId}`,
              id: linkedConnectionId,
              isLinkedOption: true,
            });
          });
        }

        if (Array.isArray(child.connectedChildIds)) {
          child.connectedChildIds.forEach((connectedChildId) => {
            const connectedChildConnectionId = `child_to_child_connection_${childNodeId}_${connectedChildId}`;
            SecondOptionChild.push({
              from: `node${childNodeId}`,
              to: `node${connectedChildId}`,
              id: connectedChildConnectionId,
              isChildToChild: true,
            });
          });
        }
        if (Array.isArray(child.linkedSecondOptionIds)) {
          child.linkedSecondOptionIds.forEach((linkedSecondOptionId) => {
            if (linkedSecondOptionId) {
              const linkedSecondOptionConnectionId = `child_to_secondOption_connection_${childNodeId}_${linkedSecondOptionId}`;
              ConectionOptions.push({
                from: `node${childNodeId}`,
                to: `node${linkedSecondOptionId}`,
                id: linkedSecondOptionConnectionId,
                isLinkedToSecondOption: true,
              });
            }
          });
        }
      });

      // 3. Connect secondOption to its next option (if exists)
      if (secondOption.next_id) {
        const nextNodeId = secondOption.next_id.toString();
        const nextConnectionId = `connection_${secondOptionId}_${nextNodeId}`;
        ConectionOptions.push({
          from: `node${secondOptionId}`,
          to: `node${nextNodeId}`,
          id: nextConnectionId,
        });
      }
    });
  });

  // Return all connection types
  return {
    connections: connections, // Category to category connections
    Child: connectionChild, // Option children connections
    Options: ConectionOptions, // Category to option connections
    SecondOptions: ConectionSecondOptions, // Option to secondOption connections
    SecondOptionChild: SecondOptionChild, // SecondOption children connections
  };
};

export const findItemsInBordByIds = (optionSParagon, ids) => {
  const foundItems = [];

  for (const id of ids) {
    for (const item of optionSParagon) {
      for (const row of item.bord) {
        for (const bordItem of row) {
          if (bordItem.id === id) {
            foundItems.push(bordItem);
          }
        }
      }
    }
  }

  return foundItems;
};

export const countActiveAndInactive = (paragons) => {
  let activeCount = 0;
  let inactiveCount = 0;
  let nullCount = 0;

  paragons.forEach((paragon) => {
    paragon.bord.forEach((row) => {
      row.forEach((node) => {
        if (node.active === true) {
          activeCount++;
        } else if (node.active === false) {
          return;
        } else {
          return;
        }
      });
    });
  });
  activeCount = activeCount;

  return { activeCount, inactiveCount, nullCount };
};

export const extractActiveDataParagon = (data) => {
  const result = [];

  data.forEach((item) => {
    if (item.is_active) {
      item.bord.forEach((row) => {
        row.forEach((node) => {
          if (node.active !== null && node.active !== false)
            result.push({ id: node.id, active: node.active });
        });
      });
    }
  });

  return result;
};

export const extractIdAndRankSkillTree = (items) => {
  let results = [];

  items.forEach((item) => {
    // Check if rank is defined and not null
    if (item.rank !== undefined && item.rank !== null && item.rank > 0) {
      results.push({ id: item.id, rank: item.rank });
    }

    // Recursively process children, options, and secondOptions if they exist
    if (item.children && item.children.length > 0) {
      results = results.concat(extractIdAndRankSkillTree(item.children));
    }

    if (item.options && item.options.length > 0) {
      results = results.concat(extractIdAndRankSkillTree(item.options));
    }

    if (item.secondOptions && item.secondOptions.length > 0) {
      results = results.concat(extractIdAndRankSkillTree(item.secondOptions));
    }
  });

  return results;
};

export function debounce(fn, delay) {
  let timeoutId;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

export function hasParentRank(skills, item) {
  if (!item.parent_id) return true; // No parent, assume clickable (e.g., root nodes)
  for (const skill of skills) {
    if (skill.id === item.parent_id && skill.rank > 0) return true;
    if (skill.options) {
      const parent = skill.options.find((opt) => opt.id === item.parent_id);
      if (parent && parent.rank > 0) return true;
      for (const opt of skill.options) {
        if (opt.children) {
          const parentChild = opt.children.find(
            (ch) => ch.id === item.parent_id
          );
          if (parentChild && parentChild.rank > 0) return true;
        }
      }
    }
    if (skill.secondOptions) {
      const parent = skill.secondOptions.find(
        (opt) => opt.id === item.parent_id
      );
      if (parent && parent.rank > 0) return true;
      for (const opt of skill.secondOptions) {
        if (opt.children) {
          const parentChild = opt.children.find(
            (ch) => ch.id === item.parent_id
          );
          if (parentChild && parentChild.rank > 0) return true;
        }
      }
    }
  }
  return false;
}