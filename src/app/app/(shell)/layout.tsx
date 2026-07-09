import Link from "next/link";
import Logo from "@/components/Logo";
import Sidebar from "@/components/app/Sidebar";
import MobileNav from "@/components/app/MobileNav";

export default function ShellLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen bg-brand-cream">
      <Sidebar />
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between border-b border-black/5 bg-white px-6 py-4 lg:hidden">
          <Link href="/app/dashboard">
            <Logo />
          </Link>
        </div>
        <div className="pb-20 lg:pb-0">{children}</div>
      </div>
      <MobileNav />
    </div>
  );
}
