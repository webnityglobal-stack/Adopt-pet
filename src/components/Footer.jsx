
import {
  PawPrint,
  ArrowUpRight,
  Heart,
  Mail,
  MapPin,
  MoveUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = {
  Explore: [
    { label: "Home", href: "/" },
    { label: "Meet the pets", href: "/find-a-pet" },
    { label: "Our promise", href: "/our-promise" },
  ],
  Helpful: [
    { label: "Responsible pet care", href: "/our-promise" },
    { label: "Adoption checklist", href: "/our-promise" },
    { label: "Pet wellness", href: "/our-promise" },
  ],
};

function FacebookIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M24 12a12 12 0 1 0-13.875 11.85v-8.38H7.078V12h3.047V9.356c0-3.007 1.792-4.668 4.533-4.668 1.312 0 2.686.234 2.686.234v2.953h-1.513c-1.49 0-1.956.925-1.956 1.874V12h3.328l-.532 3.47h-2.796v8.38A12.002 12.002 0 0 0 24 12Z" />
    </svg>
  );
}

function InstagramIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle
        cx="17.5"
        cy="6.5"
        r="1"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="overflow-hidden bg-[#122c20] text-white">
      {/* TOP CTA */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-6 px-5 py-9 sm:px-8 sm:py-12 md:flex-row md:items-center lg:px-14 lg:py-14">
          <div className="max-w-2xl">
            <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#e9b18c]">
              <Heart size={15} />
              Every paw deserves love
            </p>

            <h2 className="text-3xl font-black leading-tight tracking-tight sm:text-4xl">
              Your next favourite hello
              <br className="hidden sm:block" /> could have four paws.
            </h2>
          </div>

          <Link
            to="/find-a-pet"
            className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-[#f4e8d8] px-6 py-4 text-sm font-extrabold text-[#183b2b] transition hover:bg-white"
          >
            Find your companion
            <ArrowUpRight
              size={18}
              className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>

      {/* FOOTER CONTENT */}
      <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-x-5 gap-y-9 px-5 py-10 sm:gap-x-8 sm:gap-y-12 sm:px-8 sm:py-12 md:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_0.9fr_1.2fr] lg:gap-10 lg:px-14 lg:py-14">
        {/* BRAND */}
        <div className="col-span-2 lg:col-span-1">
          <Link to="/" className="inline-flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f4e8d8] text-[#183b2b] sm:h-12 sm:w-12">
              <PawPrint size={25} />
            </span>

            <span>
              <span className="block text-2xl font-black tracking-tight">
                pawfect<span className="text-[#e9b18c]">.</span>
              </span>
              <span className="mt-1 block text-[9px] font-bold uppercase tracking-[2.5px] text-white/45">
                A world of love
              </span>
            </span>
          </Link>

          <p className="mt-4 max-w-sm text-xs leading-6 text-white/60 sm:mt-6 sm:text-sm sm:leading-7">
            Helping people discover the joy of companionship and make
            thoughtful, responsible choices for animals who need a loving home.
          </p>

          {/* SOCIAL ICONS */}
          <div className="mt-5 flex items-center gap-3 sm:mt-6">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition hover:border-[#e9b18c] hover:bg-[#e9b18c] hover:text-[#183b2b]"
            >
              <InstagramIcon size={18} />
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition hover:border-[#e9b18c] hover:bg-[#e9b18c] hover:text-[#183b2b]"
            >
              <FacebookIcon size={18} />
            </a>

            <a
              href="mailto:hello@pawfectworld.com"
              aria-label="Email us"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition hover:border-[#e9b18c] hover:bg-[#e9b18c] hover:text-[#183b2b]"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* FOOTER LINKS */}
        {Object.entries(footerLinks).map(([heading, links]) => (
          <div key={heading}>
            <h3 className="text-sm font-extrabold">{heading}</h3>

            <ul className="mt-4 space-y-3 sm:mt-6 sm:space-y-4">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="group inline-flex items-center gap-1.5 text-xs leading-5 text-white/60 transition hover:text-[#f4c9a8] sm:gap-2 sm:text-sm"
                  >
                    {link.label}
                    <MoveUpRight
                      size={13}
                      className="shrink-0 opacity-0 transition group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* CONTACT */}
        <div className="col-span-2 lg:col-span-1">
          <h3 className="text-sm font-extrabold">Stay connected</h3>

          <p className="mt-4 max-w-sm text-xs leading-6 text-white/60 sm:mt-5 sm:text-sm sm:leading-7">
            Questions about responsible pet care or our demo listings? Get in
            touch with us.
          </p>

          <a
            href="mailto:hello@pawfectworld.com"
            className="mt-4 flex items-start gap-3 text-xs text-white/75 transition hover:text-[#f4c9a8] sm:mt-5 sm:text-sm"
          >
            <Mail size={18} className="mt-0.5 shrink-0 text-[#e9b18c]" />
            <span className="break-all">hello@pawfectworld.com</span>
          </a>

          <div className="mt-4 flex items-start gap-3 text-xs leading-6 text-white/60 sm:text-sm">
            <MapPin size={18} className="mt-0.5 shrink-0 text-[#e9b18c]" />
            Connecting loving homes with furry friends
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-3 px-5 py-5 text-xs text-white/45 sm:px-8 sm:py-6 md:flex-row md:items-center md:justify-between lg:px-14">
          <p>© {new Date().getFullYear()} Pawfect World. Made with love.</p>

          <p className="flex items-center gap-1.5">
            Every little paw matters
            <Heart size={13} className="fill-[#e9b18c] text-[#e9b18c]" />
          </p>
        </div>
      </div>
    </footer>
  );
}
