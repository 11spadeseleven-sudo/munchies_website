type Props = {
  dark?: boolean;
  compact?: boolean;
};

function AppleMark() {
  return (
    <svg viewBox="0 0 384 512" aria-hidden="true">
      <path
        fill="currentColor"
        d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5 4 299.7 8.8 326.8 18.4 354c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.7-17.9 31.7 0 48.2 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.6-89-61.6-91.2Zm-58.5-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3Z"
      />
    </svg>
  );
}

function PlayMark() {
  return (
    <svg viewBox="0 0 512 512" aria-hidden="true">
      <path fill="#00d2ff" d="M45 22 286 256 45 490c-9-8-14-20-14-34V56c0-14 5-26 14-34Z" />
      <path fill="#00f076" d="m45 22 285 165-44 69L45 22Z" />
      <path fill="#ffdf00" d="m286 256 44 69L45 490l241-234Z" />
      <path fill="#ff3a44" d="m330 187 118 68c16 9 16 24 0 33l-118 68-44-100 44-69Z" />
    </svg>
  );
}

export default function StoreBadges({ dark = false, compact = false }: Props) {
  return (
    <div className={`store-badge-set ${compact ? "compact" : ""}`}>
      <div className={`store-badge ${dark ? "light-badge" : ""}`}>
        <AppleMark />
        <div>
          <small>Coming soon on the</small>
          <strong>App Store</strong>
        </div>
      </div>

      <div className={`store-badge ${dark ? "light-badge" : ""}`}>
        <PlayMark />
        <div>
          <small>Coming soon on</small>
          <strong>Google Play</strong>
        </div>
      </div>
    </div>
  );
}
