import { Lily_Script_One } from "next/font/google";
import Link from "next/link";

const lilyFont = Lily_Script_One({subsets:['latin'], weight:['400']});

const Header = () => (
  <nav className="py-4 px-8 flex items-baseline relative">
    <h1 className={`${lilyFont.className} antialiased text-3xl font-extrabold pr-16`}><Link href="/">Cookingram</Link></h1>
    <ul className="flex gap-4">
      <li><Link href="/recipes/dessert">desserts</Link></li>
      <li><Link href="/recipes/breakfast">breakfast</Link></li>
      <li><Link href="/recipes/pasta">pasta</Link></li>
      <li><Link href="/recipes/side">side</Link></li>
      <li><Link href="/recipes/starter">starter</Link></li>
      <li><Link href="/recipes/seafood">seafood</Link></li>
    </ul>
    <button className="ml-auto"><Link href="/login">login</Link></button>
  </nav>
);

export default Header;