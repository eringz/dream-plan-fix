"use client";
import { useEffect, useState } from "react";
import "./globals.css";
import SideNav from "@/components/shared/SideNav";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const hour = new Date().getHours();
    const currentTheme = hour >= 6 && hour < 18 ? "light" : "dark";
    setTheme(currentTheme);
    document.documentElement.setAttribute("data-theme", currentTheme);
  }, []);

  return (
    <html lang="en" data-theme={theme}>
      <body className="antialiased overflow-hidden">
        {/* --- AUGMENTED BACKGROUND LAYER --- */}
        <div className="fixed inset-0 z-[-1] bg-grid-tech opacity-30"></div>
        <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent/10 blur-[150px] rounded-full z-[-1]"></div>
        
        <div className="flex h-screen w-screen overflow-hidden">
          {/* Sidebar: Desktop (Left) / Mobile (Bottom) */}
          <SideNav />
          
          {/* Main Workspace */}
          <main className="flex-1 overflow-y-auto no-scrollbar relative">
            {/* Top HUD Decor */}
            <div className="sticky top-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent z-50"></div>
            
            <div className="p-4 md:p-10 pb-28 md:pb-10 max-w-[1600px] mx-auto">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}