interface HabitDayProps {
  isPlaceholder?: boolean;
}

export default function HabitDay({ isPlaceholder }: HabitDayProps) {
  return (
    <>
      {!isPlaceholder ? (
        <div className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg cursor-pointer" />
      ) : (
        <div className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-30 cursor-not-allowed" />
      )}
    </>
  );
}
