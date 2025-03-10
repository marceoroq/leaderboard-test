import Image from "next/image";
import logo from "@/assets/images/logo.png";
import SearchBar from "@/components/SearchBar";
import Avatar from "@/components/Avatar";
import NavLinks from "@/components/NavLinks";
import Wallet from "@/components/Wallet";

export default function GlobalNav() {
  return (
    <div className="flex w-full items-center justify-between py-3 px-5 border-b-2 border-b-auburn bg-[#f7e08d] font-mono">
      <div className="flex gap-2">
        <Image className="w-22" src={logo} alt="Logo" />
        <SearchBar />
      </div>
      <NavLinks />
      <Wallet />
      <div className="flex gap-2">
        <div className="notifications">
          <p>🛎️</p>
        </div>
        <div className="profile">
          <Avatar size="sm" />
        </div>
      </div>
    </div>
  );
}
