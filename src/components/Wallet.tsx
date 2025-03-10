export default function Wallet() {
  return (
    <div className="flex items-center gap-2 text-sm">
      <div className="h-12 pt-1 px-2 flex gap-1 border-2 rounded-xs border-auburn bg-[#FAE8C8]">
        <div className="text-center">
          <div className="bg-auburn text-[#42acbc] font-bold px-1 py-0 rounded">$ 8.95</div>
          <p className="text-auburn font-bold mt-1 text-xs">PORTFOLIO</p>
        </div>

        <div className="text-center">
          <div className="bg-auburn text-[#42acbc] font-bold px-1 py-0 rounded">$ 5.53</div>
          <p className="text-auburn font-bold mt-1 text-xs">CASH</p>
        </div>
      </div>

      <button className="h-12 px-6 py-2 bg-[#42acbc] border-2 border-auburn text-white font-bold italic text-lg rounded-xs cursor-pointer">
        DEPOSIT
      </button>
    </div>
  );
}
