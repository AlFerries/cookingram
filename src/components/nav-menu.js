'use client'

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function NavMenu() {

  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = [
    { label: 'desserts' ,href:'/recipes/dessert' },
    { label: 'breakfast' ,href:'/recipes/breakfast' },
    { label: 'pasta' ,href:'/recipes/pasta' },
    { label: 'side' ,href:'/recipes/side' },
    { label: 'starter' ,href:'/recipes/starter' },
    { label: 'seafood' ,href:'/recipes/seafood' },
  ]

  return (
    <>
    <ul className="hidden md:flex gap-6 w-full">
      {navItems.map(({label, href}, index) => (
        <li key={index}>
          <Link href={href}>{label}</Link>
        </li>
      ))}
      <li className="ml-auto">
        <Link href="/login">login</Link>
      </li>
    </ul>
    <button onClick={()=>{setMenuOpen(prev => !prev)}} className="md:hidden text-2xl z-20 relative ml-auto">
      {menuOpen ? <X /> : <Menu />}
    </button>
    {menuOpen && (
      <div className="absolute top-full left-0 w-full bg-white z-40 shadow-md py-4">
        <ul className="flex flex-col items-center gap-4">
          {navItems.map(({label, href}, index) => (
            <li key={index}>
              <Link href={href} onClick={() => setMenuOpen(prev => false)}>
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/login" onClick={() => setMenuOpen(prev => false)}>login</Link>
          </li>
        </ul>
      </div>
    )}
    </>
  )
}