'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const navLinks = [
  { href: '/#description', label: 'ABOUT' },
  { href: '/glasses', label: 'GLASSES' },
  { href: '/app', label: 'APP' },
  { href: '/news', label: 'NEWS' },
  { href: '/contact', label: 'CONTACT' },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#D9D9D9] backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/images/companyIcon.png"
              alt="Neurodrishti Logo"
              width={100}
              height={50}
              className="h-auto w-20 sm:w-24 md:w-28"
              priority
            />
          </Link>

          {/* Desktop Navigation Centered */}
          <div className="hidden md:flex flex-1 justify-center">
            <NavigationMenu>
              <NavigationMenuList>
                {navLinks.map((link) => (
                  <NavigationMenuItem key={link.href}>
                    <NavigationMenuLink asChild>
                      <Link href={link.href} className={navigationMenuTriggerStyle() + " bg-transparent text-black hover:bg-black/10 hover:text-black uppercase tracking-wide"}>
                        {link.label}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Pre-Book Button Right */}
          <div className="hidden md:flex">
            <Button asChild className="bg-black text-white hover:bg-gray-800">
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeaWuSjh3ujG79BTLUjWYdp2dfoQ0k1HlxBy6L5hFRIfIeuQw/viewform?usp=header" target="_blank" rel="noopener noreferrer">Pre-Book Now</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-black hover:bg-black/10">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[320px] bg-white">
                <SheetHeader className="border-b pb-4">
                  <SheetTitle className="text-left text-xl font-semibold">Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-2 mt-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-base font-medium uppercase tracking-wide text-gray-800 hover:text-orange-500 hover:bg-gray-50 transition-all px-4 py-3 rounded-lg"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Button asChild className="mt-6 bg-black text-white hover:bg-gray-800 py-6 text-base font-semibold">
                    <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeaWuSjh3ujG79BTLUjWYdp2dfoQ0k1HlxBy6L5hFRIfIeuQw/viewform?usp=header" target="_blank" rel="noopener noreferrer">Pre-Book Now</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
