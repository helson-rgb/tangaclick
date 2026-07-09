import Topbar from "@/components/app/Topbar";
import ClientiTable from "@/components/app/ClientiTable";

export default function Clienti() {
  return (
    <>
      <Topbar title="Clienti" />
      <div className="p-8">
        <ClientiTable />
      </div>
    </>
  );
}
