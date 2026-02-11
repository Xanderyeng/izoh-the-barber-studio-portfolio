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

  const tickerItems = items.flatMap((item) => [
    { key: `${item}-a`, label: item },
    { key: `${item}-b`, label: item },
  ]);

  return (
    <div className="bg-gold overflow-hidden py-2 whitespace-nowrap">
      <div className="inline-block animate-ticker">
        {tickerItems.map((item) => (
          <span
            key={item.key}
            className="text-sm font-bold tracking-wider uppercase text-black mx-8"
          >
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
}
