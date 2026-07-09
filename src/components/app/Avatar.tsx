const PALETTE = [
  "bg-brand-navy",
  "bg-brand-blue",
  "bg-brand-orange",
  "bg-emerald-600",
  "bg-purple-600",
];

function hashIndex(input: string, length: number) {
  let hash = 0;
  for (let i = 0; i < input.length; i++) hash = (hash * 31 + input.charCodeAt(i)) % length;
  return Math.abs(hash);
}

export default function Avatar({
  name,
  size = "md",
}: {
  name: string;
  size?: "sm" | "md";
}) {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
  const color = PALETTE[hashIndex(name, PALETTE.length)];
  const sizeClass = size === "sm" ? "h-8 w-8 text-xs" : "h-10 w-10 text-sm";

  return (
    <span
      className={`flex shrink-0 items-center justify-center rounded-full font-heading text-white ${color} ${sizeClass}`}
    >
      {initials}
    </span>
  );
}
