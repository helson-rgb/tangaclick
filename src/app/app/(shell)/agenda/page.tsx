import Topbar from "@/components/app/Topbar";
import AgendaCalendar from "@/components/app/AgendaCalendar";

export default function Agenda() {
  return (
    <>
      <Topbar title="Agenda" />
      <div className="p-8">
        <AgendaCalendar />
      </div>
    </>
  );
}
