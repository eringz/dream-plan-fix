"use client";
import { LayoutDashboard, Zap, Compass, Wrench } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideNav() {
  const pathname = usePathname();
  const items = [
    { name: "Hub", icon: <LayoutDashboard />, path: "/" },
    { name: "Dream", icon: <Zap />, path: "/dream" },
    { name: "Plan", icon: <Compass />, path: "/plan" },
    { name: "Fix", icon: <Wrench />, path: "/fix" },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-24 flex-col items-center py-10 glass-panel border-r">
        <div className="text-accent font-bold mb-12 text-2xl tracking-tighter">DPF</div>
        <div className="flex flex-col gap-8">
          {items.map((item) => (
            <Link key={item.path} href={item.path} 
              className={`p-4 rounded-2xl transition-all ${pathname === item.path ? "bg-accent text-black shadow-[0_0_15px_var(--accent-color)]" : "text-zinc-500 hover:text-accent"}`}>
              {item.icon}
            </Link>
          ))}
        </div>
      </aside>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-6 left-6 right-6 h-16 glass-panel rounded-2xl border flex justify-around items-center z-50">
        {items.map((item) => (
          <Link key={item.path} href={item.path} 
            className={`p-2 ${pathname === item.path ? "text-accent" : "text-zinc-500"}`}>
            {item.icon}
          </Link>
        ))}
      </nav>
    </>
  );
}