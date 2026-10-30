import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  PawPrint,
  Search,
  Heart,
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const submitSearch = (event) => {
    event.preventDefault();
    setMenuOpen(false);
    setSearchOpen(false);
    navigate(`/find-a-pet?search=${encodeURIComponent(search)}`);
  };

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Find a Pet", href: "/find-a-pet" },
    { label: "Our Promise", href: "/our-promise" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[#183b2b]/[0.07] bg-[#fffefa]/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between gap-3 px-4 sm:px-8 lg:px-14">
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="group flex shrink-0 items-center gap-2.5"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#183b2b] text-white shadow-md transition group-hover:-rotate-6 group-hover:bg-[#d98651]">
            <PawPrint size={24} />
          </span>

          <span className="leading-none">
            <span className="block text-[21px] font-black tracking-tight text-[#183b2b]">
              pawfect<span className="text-[#d98651]">.</span>
            </span>
            <span className="mt-1.5 block text-[9px] font-bold uppercase tracking-[2.6px] text-[#7c897e]">
              A world of love
            </span>
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="rounded-full px-4 py-3 text-[15px] font-semibold text-[#59665b] transition hover:bg-[#183b2b]/[0.06] hover:text-[#183b2b]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* ACTIONS */}
        <div className="flex shrink-0 items-center gap-2">
        
          <Link
            to="/find-a-pet"
            className="hidden items-center gap-2 rounded-full bg-[#183b2b] px-5 py-3 text-[13px] font-bold text-white transition hover:bg-[#d98651] sm:flex"
          >
            Meet your match
            <ArrowUpRight size={16} />
          </Link>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#183b2b]/10 text-[#183b2b] lg:hidden"
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="border-t border-[#183b2b]/10 bg-[#fffefa] px-5 pb-6 pt-3 lg:hidden">
          <nav className="mx-auto flex max-w-xl flex-col">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between border-b border-[#183b2b]/[0.07] py-4 text-sm font-semibold text-[#183b2b]"
              >
                {item.label}
                <ArrowUpRight size={16} className="text-[#d98651]" />
              </Link>
            ))}

            <Link
              to="/find-a-pet"
              onClick={() => setMenuOpen(false)}
              className="mt-5 flex items-center justify-center gap-2 rounded-full bg-[#183b2b] px-5 py-4 text-sm font-bold text-white"
            >
              <PawPrint size={18} />
              Find your companion
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}