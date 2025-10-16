"use client";

import Link from "next/link";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ShoppingCart, Globe, Menu, Search, Phone, Mail } from "lucide-react";
import { contactInfo } from "@/lib/data";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/ipTV", label: "Abonnement TV" },
  { href: "/sharing-apollo", label: "Sharing & Apollo" },
  { href: "/box-android", label: "Box Android" },
  { href: "/recepteur-hd", label: "Récepteur HD" },
  { href: "/bein-sports", label: "Bein Sports" },
  { href: "/netflix", label: "Netflix Official" },
  { href: "/accessoires", label: "Accessoires" },
  { href: "/contact", label: "Contact" },
];

// Barre de logo supérieure
function LogoBar() {
  return (
    <div className="bg-gradient-to-r from-primary to-primary/90 text-white py-3">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30">
                <span className="text-white font-bold text-xl">ES</span>
              </div>
              <div>
                <div className="font-bold text-xl tracking-tight">Electro Satellite</div>
                <div className="text-sm opacity-90 flex items-center gap-1">Tunisie - Développé <span className="text-red-400">❤️</span> Younsi Alaeddine</div>
              </div>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2 text-sm hover:text-accent transition-colors cursor-pointer">
              <Phone className="w-4 h-4" />
              <span>{contactInfo.phone}</span>
            </div>
            <div className="flex items-center gap-2 text-sm hover:text-accent transition-colors cursor-pointer">
              <Mail className="w-4 h-4" />
              <span>{contactInfo.email}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Menu principal responsive
function MainMenu() {
  const [query, setQuery] = useState("");

  return (
    <header className="sticky top-0 z-50 w-full bg-white/98 backdrop-blur-md border-b border-gray-100 shadow-lg">
      <div className="container mx-auto px-4">
        {/* Menu principal */}
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Menu hamburger mobile */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                  <Menu className="h-6 w-6 text-primary" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80">
                <SheetHeader>
                  <SheetTitle className="text-left">Menu de navigation</SheetTitle>
                </SheetHeader>
                <nav className="grid gap-2 mt-6">
                  {links.map((l) => (
                    <Link 
                      key={l.href} 
                      href={l.href} 
                      className="text-sm font-medium hover:text-accent transition-colors py-3 px-2 rounded-lg hover:bg-primary/5"
                    >
                      {l.label}
                    </Link>
                  ))}
                </nav>
                
                {/* Recherche mobile */}
                <div className="mt-8">
                  <div className="relative">
                    <Input
                      placeholder="Rechercher..."
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      className="pl-10"
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Navigation desktop */}
          <div className="hidden lg:flex items-center gap-8">
            <nav className="flex items-center gap-8">
              {links.map((l) => (
                <Link 
                  key={l.href} 
                  href={l.href} 
                  className="text-sm font-medium text-gray-700 hover:text-primary transition-colors relative group py-4"
                >
                  {l.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Actions droite */}
          <div className="flex items-center gap-3">
            {/* Recherche desktop */}
            <div className="hidden md:flex items-center gap-2">
              <div className="relative">
                <Input
                  placeholder="Rechercher un produit..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-64 rounded-full border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary/20 pl-10"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>
              <Button variant="default" className="rounded-full bg-primary hover:bg-primary/90 px-4">
                Rechercher
              </Button>
            </div>

            {/* Icônes */}
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="hover:bg-primary/10 text-gray-600 relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-accent text-primary text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  0
                </span>
              </Button>
              
              <Button variant="ghost" size="icon" className="hover:bg-primary/10 text-gray-600">
                <Globe className="h-5 w-5" />
              </Button>
              
              <Avatar className="border-2 border-primary/20">
                <AvatarFallback className="bg-primary/10 text-primary font-semibold">ES</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>

        {/* Barre de recherche mobile */}
        <div className="md:hidden pb-3">
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <Input
                placeholder="Rechercher un produit..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="rounded-full border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary/20 pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
            <Button variant="default" className="rounded-full bg-primary hover:bg-primary/90 px-4">
              <Search className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

export function Header() {
  return (
    <>
      <LogoBar />
      <MainMenu />
    </>
  );
}


