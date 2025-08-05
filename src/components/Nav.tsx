import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const links = [
  { href: '/#chi-siamo', label: 'Chi siamo' },
  { href: '/#menu', label: 'Menu' },
  { href: '/#contatti', label: 'Contatti' },
  { href: '/prenotazione', label: 'Prenota' }
];

const Nav = () => {
  return (
    <nav className="w-full">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-5xl md:text-5xl font-bold font-secondary">
          Little Lemon
          <span className="uppercase block font-sans text-sm">restaurant</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="space-x-4">
              {links.map((link) => (
                <NavigationMenuItem key={link.href}>
                  <NavigationMenuLink
                    href={link.href}
                    className={cn(
                      link.label === 'Prenota'
                        ? 'bg-secondary text-primary px-3 py-2 font-bold rounded-lg text-lg hover:bg-secondary/80 transition'
                        : linkStyle
                    )}
                  >
                    {link.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="m-0 p-0 size-10" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="bg-primary text-white border-0"
            >
              <SheetHeader className="px-4">
                <SheetTitle className="text-5xl text-white font-semibold font-secondary p-0">
                  Menu
                </SheetTitle>
              </SheetHeader>
              <ul className="px-4 py-8 mt-4 space-y-4 bg-green-950 h-screen">
                {links.map((link) => (
                  <li key={link.href} className='py-6 '>
                    <a
                      href={link.href}
                      className="block text-2xl font-medium hover:text-primary border-b-1 border-white pb-2"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

const linkStyle = cn(
  'text-xl font-medium transition-colors hover:text-primary'
);

export default Nav;
