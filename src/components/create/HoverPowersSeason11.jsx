import React from "react";
import {
  bossPowers11Top,
  bossPowers11Bottom,
  bossPowers11Left,
  bossPowers11Right,
  bossPowers11MidLeft,
  bossPowers11MidTop,
  bossPowers11MidBottom,
  bossPowers11MidRight,
} from "@/constants";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { selectBossPowers, updateBossPowers } from "@/lib/redux/slice";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Image from "next/image";

const HoverPowersSeason11 = ({ open, onClose, slot, onSelectPower }) => {
  const dispatch = useAppDispatch();
  const bossPowers = useAppSelector(selectBossPowers);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [filteredPowers, setFilteredPowers] = React.useState([]);

  const getPowersList = (slot) => {
    switch (slot) {
      case "top":
        return bossPowers11Top;
      case "bottom":
        return bossPowers11Bottom;
      case "left":
        return bossPowers11Left;
      case "right":
        return bossPowers11Right;
      case "catalyst1":
        return bossPowers11MidLeft;
      case "catalyst2":
        return bossPowers11MidTop;
      case "catalyst3":
        return bossPowers11MidBottom;
      case "catalyst4":
        return bossPowers11MidRight;
      default:
        return [];
    }
  };

  React.useEffect(() => {
    if (open) {
      const powers = getPowersList(slot);
      setSearchTerm("");
      setFilteredPowers(powers);
    }
  }, [open, slot]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    const powers = getPowersList(slot);
    setFilteredPowers(
      value
        ? powers.filter((p) =>
            p.label.toLowerCase().includes(value.toLowerCase())
          )
        : powers
    );
  };

  const handleSelectPower = (power) => {
    onSelectPower(power);
    const bp = bossPowers.find((b) => b.slot === slot);
    dispatch(
      updateBossPowers({
        id: bp?.id || 1,
        newBossPowers: power,
        slot,
      })
    );
    onClose();
  };

  const handleUnequip = () => {
    const bp = bossPowers.find((b) => b.slot === slot);
    dispatch(
      updateBossPowers({
        id: bp?.id || 1,
        newBossPowers: { label: "", image: "" },
        slot,
      })
    );
    onClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative w-[90%] max-w-2xl bg-[#1f1f27] rounded-2xl shadow-2xl overflow-hidden border border-[#333645]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#282a36] border-b border-[#444757]">
          <div className="flex items-center gap-3">
            <Search className="w-5 h-5 text-gray-400" />
            <Input
              placeholder="Rechercher un pouvoir..."
              value={searchTerm}
              onChange={handleSearch}
              className="bg-[#3b3e51] border-none text-white w-64"
            />
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={handleUnequip}
              className="px-4 py-2 bg-[#4f5365] hover:bg-[#5b5f73] rounded text-sm"
            >
              Uniquip
            </button>
            <button
              onClick={onClose}
              className="text-white text-2xl font-light"
            >
              ×
            </button>
          </div>
        </div>

        {/* List */}
        <div className="max-h-[70vh] overflow-y-auto p-4 space-y-3">
          {filteredPowers.map((power) => (
            <HoverCard key={power.id} openDelay={150} closeDelay={200}>
              <HoverCardTrigger asChild>
                <div
                  onClick={() => handleSelectPower(power)}
                  className="flex items-center gap-4 p-4 bg-[#2c2f3a] hover:bg-[#3b3e4a] rounded-lg cursor-pointer transition-all"
                >
                  <div className="w-14 h-14 bg-[#1a1b1f] rounded-lg border border-[#444757] flex items-center justify-center flex-shrink-0">
                    <Image
                      src={power.image}
                      alt={power.label}
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <p className="text-white font-medium">{power.label}</p>
                </div>
              </HoverCardTrigger>

              {/* THIS IS THE TOOLTIP ON HOVER */}
              <HoverCardContent
                side="center"
                align="start"
                className="w-96 bg-[#0f0f14] border border-[#444] px-5 shadow-2xl"
              >
                {/* Header with icon + name */}
                <div className="flex items-center gap-4 mx-auto ">
                  <Image
                    src={power.image}
                    alt={power.label}
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                  <div>
                    <h3 className=" font-bold text-white">{power.label}</h3>
                    <p className="text-yellow-400 text-sm">
                      Divine Gift •{" "}
                      <span className="text-gray-400">Every Class</span>
                    </p>
                  </div>
                </div>

                {/* Rewards */}
                <div className="mt-4 pt-4 border-t border-[#333645]">
                  <p className="text-gray-200 font-semibold mb-2">Récompense</p>
                  <div className="text-gray-300 text-sm space-y-1">
                    {power.rewards.map((reward, index) => {
                      // Capitaliser la première lettre
                      const capitalizedReward =
                        reward.charAt(0).toUpperCase() + reward.slice(1);

                      // Si la ligne contient <b>...</b>, on utilise dangerouslySetInnerHTML
                      if (reward.includes("<b>")) {
                        return (
                          <div
                            key={index}
                            dangerouslySetInnerHTML={{
                              __html: capitalizedReward,
                            }}
                          />
                        );
                      }

                      return <div key={index}>{capitalizedReward}</div>;
                    })}
                  </div>
                </div>

                {/* Purified */}
                <div className="py-1 border-t border-[#333645] bg-[#1e2a1e]/20 flex gap-4">
                  {/* <span className="text-green-400 text-3xl">Purified</span> */}
                  <div>
                    <p className="text-yellow-600 font-semibold">Don purifié</p>
                    <p className="text-gray-300 text-sm mt-1">
                      {power.purified}
                    </p>
                  </div>
                </div>

                {/* Corrupted */}
                <div className="py-1 border-t border-[#333645] bg-[#2d1b1b]/30 flex gap-4">
                  {/* <span className="text-red-500 text-3xl">Corrupted</span> */}
                  <div>
                    <p className="text-red-400 font-semibold">Don corrompu</p>
                    <p className="text-gray-300 text-sm mt-1">
                      {power.corrupted}
                    </p>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-[#282a36] border-t border-[#444757] text-center text-gray-400 text-sm">
          {filteredPowers.length} résultat{filteredPowers.length > 1 ? "s" : ""}
        </div>
      </div>
    </div>
  );
};

export default HoverPowersSeason11;
