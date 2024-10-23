import { BrandLogo } from "@/components/BrandLogo";
import Link from "next/link";

export function Navbar(){
    return <header>
        <nav className="flex items-center gap-10 container font-semibold">
            <Link href='' className="mr-auto"></Link>
            <BrandLogo />
        </nav>
    </header>
}