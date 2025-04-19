'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

// TODO: show "login" only for unauthorized only, and show "logout" for authorized

export default function NavMenu() {

  const [menuOpen, setMenuOpen] = useState(false);
  const loginPage = usePathname() === '/login';

  {/** block scroll when menu is opened */}
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    }
  }, [menuOpen]);

  {/** close menu if go back/forward in browser */}
  useEffect(() => {
    const handlePop = () => {
      setMenuOpen(prev => false)
    }
    window.addEventListener("popstate", handlePop)

    return () => document.removeEventListener("popstate", handlePop)
  },[]);

  const navItems = [
    { label: 'desserts' ,href:'/recipes/dessert' },
    { label: 'breakfast' ,href:'/recipes/breakfast' },
    { label: 'pasta' ,href:'/recipes/pasta' },
    { label: 'side' ,href:'/recipes/side' },
    { label: 'starter' ,href:'/recipes/starter' },
    { label: 'seafood' ,href:'/recipes/seafood' },
  ];

  return (
    <>
    {/** desktop menu */}
    <ul className="hidden md:flex gap-6 w-full">
      {navItems.map(({label, href}, index) => (
        <li key={index}>
          <Link href={href}>{label}</Link>
        </li>
      ))}
      <li className="ml-auto">
        {!loginPage && <Link href="/login">login</Link>}
      </li>
    </ul>

    {/** mobile burger menu */}
    <button onClick={()=>{setMenuOpen(prev => !prev)}} className="md:hidden text-2xl z-20 relative ml-auto">
      {menuOpen ? <X /> : <Menu />}
    </button>
      <>
        {/** backdrop for mobile menu */}
        <div className={`fixed inset-0 bg-black transition-opacity duration-300 z-30 ${menuOpen ? 'opacity-50 pointer-events-auto' : 'opacity-0 pointer-events-none'} `}
            onClick={() => setMenuOpen(prev => false)} 
        />
        {/** mobile menu list */}
        <div className={`fixed top-16 left-0 w-full bg-white z-40 shadow-md py-4 transition-all transform ${menuOpen ? 'duration-300 opacity-100 translate-y-0' : 'duration-0 opacity-0 -translate-y-4 pointer-events-none'}`}>
          <ul className="flex flex-col items-center gap-4">
            {navItems.map(({label, href}, index) => (
              <li key={index}>
                <Link href={href} onClick={() => setMenuOpen(prev => false)}>
                  {label}
                </Link>
              </li>
            ))}
            <li>
              {!loginPage && <Link href="/login" onClick={() => setMenuOpen(prev => false)}>login</Link>}
            </li>
          </ul>
        </div>
      </>
    </>
  );
}