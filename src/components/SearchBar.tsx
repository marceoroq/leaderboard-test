import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  return (
    <div className="flex gap-1 items-center p-4">
      <FaSearch className="text-auburn text-2xl" />
      <input
        type="text"
        placeholder="Search games"
        className="w-98 px-1 bg-[#ffefbe] border-2 border-auburn rounded-sm text-auburn font-semibold italic outline-none placeholder-[#c19a8a]"
      />
    </div>
  );
}
