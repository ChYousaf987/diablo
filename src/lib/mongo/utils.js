export function generateQuery(filterParams, paramsUseregexp) {
  const query = {};

  for (const [key, value] of Object.entries(filterParams)) {
    if (!value || value === null || value === '') {
      continue;
    }
    if (paramsUseregexp.includes(key) ) {
      query[key] = { $regex: new RegExp(value, 'i') }; // Case-insensitive search
    } else {
      query[key] = value;
    }
  }

  return query;
}