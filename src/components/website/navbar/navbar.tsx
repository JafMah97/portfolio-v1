import DesktopMenu from "./desktop-menu";
import MobileMenu from "./mobile-menu";
import Link from "next/link";

export default async function Navbar() {
  return (
    <nav className="w-full border-b border-foreground/20 backdrop-blur-sm z-50 shadow-sm transition-colors relative">
      <div className="bg-primary/10">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between w-full h-16">
            <Link className="font-bold text-xl text-primary" href={"/"}>
              Devfolio&trade;
            </Link>
            <DesktopMenu />
            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  );
}
