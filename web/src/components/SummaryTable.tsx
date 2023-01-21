import { generateDatesFromYearBegging } from "../utils/generate-dates-from-year-begging";
import HabitDay from "./HabitDay";

const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];
const datesFromYearBegging = generateDatesFromYearBegging();

const minimumDatesSize = 18 * 7;
const amountOfDaysToFill = minimumDatesSize - datesFromYearBegging.length;

export default function SummaryTable() {
  return (
    <div className="w-full flex gap-3">
      <WeekTable />
      <DaysTable />
    </div>
  );
}

function DaysTable() {
  return (
    <div className="grid grid-rows-7 grid-flow-col gap-3">
      {datesFromYearBegging.map(date => (
        <HabitDay amount={100} completed={0} key={date.toDateString()} />
      ))}
      {amountOfDaysToFill > 0 &&
        Array.from({ length: amountOfDaysToFill }).map((_, i) => (
          <HabitDay key={i} />
        ))}
    </div>
  );
}

function WeekTable() {
  return (
    <div className="flex flex-col gap-3 text-zinc-400 text-xl font-bold">
      {weekDays.map((weekDay, i) => (
        <div
          key={`${weekDay}-${i}`}
          className="h-10 w-10 flex items-center justify-center"
        >
          {weekDay}
        </div>
      ))}
    </div>
  );
}
