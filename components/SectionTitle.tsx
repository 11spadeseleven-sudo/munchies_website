import MunchiesIcon from "@/components/MunchiesIcon";

type Props = {
  eyebrow?: string;
  title: string;
  body?: string;
};

function iconForEyebrow(eyebrow?: string) {
  const value = (eyebrow || "").toLowerCase();

  if (value.includes("buyer")) return "buyer" as const;
  if (value.includes("seller")) return "store" as const;
  if (value.includes("trust") || value.includes("safety")) return "shield" as const;
  if (value.includes("contact") || value.includes("question")) return "support" as const;
  if (value.includes("how")) return "how" as const;

  return "snack" as const;
}

export default function SectionTitle({ eyebrow, title, body }: Props) {
  return (
    <div className="section-title">
      {eyebrow ? (
        <div className="section-eyebrow-row">
          <span className="section-title-icon">
            <MunchiesIcon name={iconForEyebrow(eyebrow)} size={16} />
          </span>
          <div className="eyebrow">{eyebrow}</div>
        </div>
      ) : null}
      <h2>{title}</h2>
      {body ? <p>{body}</p> : null}
    </div>
  );
}
