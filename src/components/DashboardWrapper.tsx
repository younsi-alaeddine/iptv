"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

interface DashboardWrapperProps {
  children: React.ReactNode;
}

export function DashboardWrapper({ children }: DashboardWrapperProps) {
  const pathname = usePathname();
  
  // Masquer header et footer pour toutes les pages du dashboard
  const isDashboard = pathname.startsWith('/dashboard');
  
  if (isDashboard) {
    return <>{children}</>;
  }
  
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
