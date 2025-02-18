import "./Button.css";

export default function Button({ title }: { title: string }) {
  return (
    <div className="btn uppercase font-bold tracking-wider px-4 py-1.5 min-[840px]:px-6 min-[840px]:py-2">
      {title}
    </div>
  );
}
