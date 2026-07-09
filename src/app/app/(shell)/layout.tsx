import Sidebar from "@/components/app/Sidebar";

export default function ShellLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-full bg-brand-cream">
      <Sidebar />
      <div className="flex-1">{children}</div>
    </div>
  );
}
