import React from "react";
import { bossPowers } from "@/constants";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const HoverPowers = ({ open, onClose }) => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [filteredPowers, setFilteredPowers] = React.useState(bossPowers);

  const handleSearch = (value) => {
    setSearchTerm(value);
    setFilteredPowers(
      value
        ? bossPowers.filter((power) =>
            power.label.toLowerCase().includes(value.toLowerCase())
          )
        : bossPowers
    );
  };
  React.useEffect(() => {
    setSearchTerm("");
    setFilteredPowers(bossPowers);
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative z-10 w-[90%] sm:w-[60%] md:w-[50%] lg:w-[40%] !h-[90vh] bg-[#1f2025]  p-0 rounded-xl shadow-lg overflow-y-auto">
        <div className="flex items-center justify-between h-[8vh] mb-4 border-b border-b-[#444757] py-2 px-3">
          {/* Search*/}
          <div className="flex items-center bg-[#444757] w-[280px] px-2 rounded-sm">
            <Search size={18} className="text-white " />
            <Input
              className="placeholder:text-[#76788b] font-normal w-auto border-transparent outline-transparent bg-[#76788b] bg-transparent text-white "
              placeholder="Rechercher "
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
          <div className="flex justify-end items-center gap-5">
            <button
              onClick={onClose}
              className=" bg-[#4f5365] text-white text-sm h-[37px] py-1 px-4 rounded w-full"
            >
              Uniquip
            </button>
            {/* {close icon svg} */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#ffffff"
              onClick={onClose}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>

        <div className="flex flex-col mt-4 !max-h-[74vh] overflow-y-auto ">
          {filteredPowers.map((power) => (
            <div
              key={power.id}
              className="flex items-center gap-3 h-[100px] hover:bg-[#444757] cursor-pointer px-3 py-1"
              onClick={() => {
                // Handle power click logic here
                // console.log(`Clicked on ${power.label}`);
                onClose();
              }}
            >
              <div className="bg-[#1a1b1f] h-[60px] w-[60px] flex justify-center items-center rounded-sm">
                <img src={power.image} alt={power.label} className="w-8 h-8" />
              </div>
              <div>
                <span className="text-white">{power.label}</span>
                <p className="text-[#b87939]">Boss Powers</p>
              </div>
            </div>
          ))}
        </div>

        <div classname=" w-full h-[8vh] bg-[#444757] !text-[#747579] border-t border-t-white border-opacity-70 flex justify-center items-center mt-4">
          <p className="text-[#747579] text-center">
            Showing {filteredPowers.length} Boss Power Results
          </p>
        </div>
      </div>
    </div>
  );
};

export default HoverPowers;
