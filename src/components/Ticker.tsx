export function Ticker() {
  const items = [
    "Skin Fades",
    "Caucasian Hair",
    "Curly Taper Fades",
    "Braids + Fade",
    "Pompadours",
    "Asian Hair",
    "Precision Cuts",
    "Beard Design",
    "Scissor Work",
    "Colour & Balayage",
    "Mixed Textures",
    "Head Shaves",
  ];

  return (
    <div className="bg-[#c9a84c] overflow-hidden py-2 whitespace-nowrap">
      <div className="inline-block animate-[ticker_18s_linear_infinite]">
        {/* biome-ignore lint/suspicious/noArrayIndexKey: intentional duplication for infinite scroll */}
        {[...items, ...items].map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="text-[11px] font-bold tracking-[3px] uppercase text-black mx-8"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
