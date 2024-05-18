import { CalendarDays } from "lucide-react";
const Date = ({ date }: { date: Date }) => {
  return (
    <div className="flex flex-row gap-1 items-center justify-center flex-wrap">
      <CalendarDays size={20} />
      <div className="text-xs xs:text-base text-end">{date.toDateString()}</div>
    </div>
  );
};

export default Date;
