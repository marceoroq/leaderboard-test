"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { FaStream } from "react-icons/fa";
import { FaChartSimple } from "react-icons/fa6";
import { HiTicket, HiTrophy } from "react-icons/hi2";

const links = [
  { url: "/brackets", Icon: FaStream, label: "brackets" },
  { url: "/tickets", Icon: HiTicket, label: "tickets" },
  { url: "/activity", Icon: FaChartSimple, label: "activity" },
  { url: "/ranks", Icon: HiTrophy, label: "ranks" },
];

export default function NavLinks() {
  const pathname = usePathname().split("/").at(-1);

  return (
    <div className="flex gap-8">
      {links.map(({ url, Icon, label }) => (
        <Link
          key={label}
          className={`capitalize flex flex-col items-center gap-2 font-bold hover:scale-120 transition-all hover:text-auburn ${
            label === pathname ? "text-auburn scale-110" : "text-[#b08551]"
          }`}
          href={url}>
          <Icon className="w-7 h-7" />
          {label}
        </Link>
      ))}
    </div>
  );
}
