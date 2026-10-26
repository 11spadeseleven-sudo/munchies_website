type IconName =
  | "how"
  | "sell"
  | "shield"
  | "contact"
  | "download"
  | "buyer"
  | "store"
  | "support"
  | "snack";

type Props = {
  name: IconName;
  size?: number;
  className?: string;
};

export default function MunchiesIcon({
  name,
  size = 18,
  className = "",
}: Props) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.9,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    "aria-hidden": true,
  };

  if (name === "how") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M8.5 12h7M12 8.5l3.5 3.5L12 15.5" />
      </svg>
    );
  }

  if (name === "sell" || name === "store") {
    return (
      <svg {...common}>
        <path d="M4 9h16l-1.4-4H5.4L4 9Z" />
        <path d="M5 9v10h14V9" />
        <path d="M9 19v-5h6v5" />
        <path d="M4 9c0 1.2 1 2 2.2 2S8.5 10.2 8.5 9c0 1.2 1 2 2.2 2S13 10.2 13 9c0 1.2 1 2 2.2 2S17.5 10.2 17.5 9c0 1.2 1 2 2.2 2" />
      </svg>
    );
  }

  if (name === "shield") {
    return (
      <svg {...common}>
        <path d="M12 3 19 6v5c0 4.8-3 8.3-7 10-4-1.7-7-5.2-7-10V6l7-3Z" />
        <path d="m9.2 12 1.8 1.8 3.8-4" />
      </svg>
    );
  }

  if (name === "contact" || name === "support") {
    return (
      <svg {...common}>
        <path d="M4 5.5h16v11H8l-4 3v-14Z" />
        <path d="M8 9h8M8 12.5h5" />
      </svg>
    );
  }

  if (name === "download") {
    return (
      <svg {...common}>
        <path d="M12 3v11" />
        <path d="m8 10 4 4 4-4" />
        <path d="M5 18.5h14" />
      </svg>
    );
  }

  if (name === "buyer") {
    return (
      <svg {...common}>
        <path d="M5 6h2l1.2 8h8.6L19 8H8" />
        <circle cx="10" cy="18" r="1.2" />
        <circle cx="17" cy="18" r="1.2" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M4 12c2.2-4.7 13.8-4.7 16 0-2.2 4.7-13.8 4.7-16 0Z" />
      <circle cx="9" cy="12" r="1" fill="currentColor" stroke="none" />
      <circle cx="15" cy="12" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
