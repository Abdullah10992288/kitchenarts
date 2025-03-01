import "./Button.css";

export default function Button({
  title,
  styles,
}: {
  title: string;
  styles?: string;
}) {
  return (
    <div
      className={`btn uppercase font-bold tracking-wider px-4 py-1.5 min-[840px]:px-6 min-[840px]:py-2 ${styles}`}
    >
      {title}
    </div>
  );
}
