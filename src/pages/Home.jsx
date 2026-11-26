
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Heart,
  PawPrint,
  Play,
  ShieldCheck,
  Sparkles,
  MapPin,
} from "lucide-react";

/* ---------------- VIDEO COMPONENT ---------------- */


function VideoPlayer({ src, className = "" }) {
  const videoSrc = `${import.meta.env.BASE_URL}${src.replace(/^\/+/, "")}`;

  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      className={`block h-full w-full object-cover ${className}`}
    >
      <source src={videoSrc} type="video/mp4" />
      Your browser does not support HTML video.
    </video>
  );
}
/* ---------------- SECTION LABEL ---------------- */

function SectionLabel({ children, light = false }) {
  return (
    <div
      className={`mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] sm:text-xs ${
        light ? "text-white/70" : "text-[#9b7655]"
      }`}
    >
      <span className="h-px w-6 bg-current" />
      {children}
    </div>
  );
}

/* ---------------- HERO SECTION ---------------- */

function CinematicHero() {
  return (
    <section className="relative min-h-[570px] overflow-hidden bg-[#17251e] sm:min-h-[640px] lg:min-h-[700px]">
      <div className="absolute inset-0">
        <VideoPlayer src="/videos/lease-dog.mp4" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-[#101a17]/90 via-[#101a17]/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#101a17]/60 via-transparent to-black/20" />

      <div className="relative mx-auto flex min-h-[570px] max-w-7xl items-center px-5 py-16 sm:min-h-[640px] sm:px-8 lg:min-h-[700px] lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2.5 text-xs text-white backdrop-blur-md sm:mb-6 sm:text-sm">
            <PawPrint size={15} />
            A little love changes everything
          </div>

          <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-5xl">
            Find Your
            <br />
            <span className="font-serif italic text-[#e7c49c]">
              Forever Friend.
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-7 text-white/80 sm:mt-6 sm:text-base lg:text-lg">
            Every pet has a story. Maybe you are the beautiful next chapter
            they have been waiting for.
          </p>

          <div className="mt-7 flex flex-wrap gap-3 sm:mt-8 sm:gap-4">
            <Link
              to="/find-a-pet"
              className="flex items-center gap-2 rounded-full bg-[#e5bd91] px-5 py-3 text-xs font-semibold text-[#2e261f] transition hover:bg-white sm:px-7 sm:py-3.5 sm:text-sm"
            >
              Find Your Companion
              <ArrowRight size={16} />
            </Link>

            <a
              href="#find-a-pet"
              className="flex items-center gap-2 rounded-full border border-white/50 px-5 py-3 text-xs font-semibold text-white transition hover:bg-white hover:text-[#253b32] sm:px-7 sm:py-3.5 sm:text-sm"
            >
              Explore More
              <Play size={15} />
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-6 right-6 hidden items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/70 md:flex">
        <span className="h-px w-12 bg-white/60" />
        Love begins here
      </div>
    </section>
  );
}

/* ---------------- FIND A PET PREVIEW ---------------- */

function FindPetPreview() {
  return (
    <section
      id="find-a-pet"
      className="bg-[#f4f0e8] px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionLabel>Discover PawHaven</SectionLabel>

            <h2 className="max-w-xl text-3xl font-semibold leading-tight text-[#302820] sm:text-4xl lg:text-5xl">
              Your new best friend
              <span className="font-serif italic text-[#a47b55]">
                {" "}is waiting.
              </span>
            </h2>

            <p className="mt-4 max-w-lg text-sm leading-7 text-[#81766b] sm:text-base sm:leading-8">
              From playful dogs to adorable cats, discover loving companions
              who are ready to become a part of your family.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/find-a-pet?category=Dogs"
                className="inline-flex items-center gap-2 rounded-full border border-[#d8cbb9] bg-white px-5 py-3 text-sm font-semibold text-[#253b32] transition hover:bg-[#253b32] hover:text-white"
              >
                🐶 Explore Dogs
                <ArrowRight size={15} />
              </Link>

              <Link
                to="/find-a-pet?category=Cats"
                className="inline-flex items-center gap-2 rounded-full border border-[#d8cbb9] bg-white px-5 py-3 text-sm font-semibold text-[#253b32] transition hover:bg-[#253b32] hover:text-white"
              >
                🐱 Explore Cats
                <ArrowRight size={15} />
              </Link>
            </div>

            <Link
              to="/find-a-pet"
              className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#253b32] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#9b7655]"
            >
              View All Pets
              <ArrowRight size={17} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative h-[260px] overflow-hidden rounded-3xl sm:h-[350px] lg:h-[390px]">
              <VideoPlayer src="/videos/ball-dog.mp4" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

              <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full border border-white/30 bg-black/25 px-4 py-2.5 text-xs text-white backdrop-blur-md sm:bottom-7 sm:left-7 sm:text-sm">
                <PawPrint size={15} />
                Meet your new companion
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- MEET OUR LOVELY PETS ---------------- */

function LovelyPetsSection() {
  const featuredPets = [
    {
      name: "Cooper",
      breed: "Golden Retriever",
      category: "Dog",
      location: "Delhi",
      image:
        "https://images.unsplash.com/photo-1552053831-71594a27632d?w=700&q=85",
    },
    {
      name: "Luna",
      breed: "British Shorthair",
      category: "Cat",
      location: "Noida",
      image:
        "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=700&q=85",
    },
    {
      name: "Milo",
      breed: "Cocker Spaniel",
      category: "Dog",
      location: "Jaipur",
      image:
        "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=700&q=85",
    },
  ];

  return (
    <section className="bg-[#fbfaf7] px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-7xl">

        {/* SECTION INTRO */}
        <div className="grid items-end gap-4 sm:grid-cols-2 sm:gap-8">
          <div>
            <SectionLabel>Meet Our Lovely Pets</SectionLabel>

            <h2 className="text-3xl font-semibold leading-tight text-[#302820] sm:text-4xl lg:text-5xl">
              Beautiful hearts,
              <span className="block font-serif italic text-[#a47b55]">
                waiting for you.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-[#81766b] sm:justify-self-end sm:text-base">
            Meet our adorable dogs and cats, each with their own little
            personality and plenty of love to share. Your new best friend
            might be just a paw away.
          </p>
        </div>

        {/* VIDEO + PET MESSAGE */}
        <div className="mt-8 grid overflow-hidden rounded-3xl bg-[#253b32] lg:grid-cols-[1.1fr_0.9fr]">

          <div className="relative h-[260px] overflow-hidden sm:h-[360px] lg:h-[410px]">
            <VideoPlayer src="/videos/brown-dog.mp4" />

            <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />

            <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full border border-white/30 bg-black/25 px-4 py-2.5 text-xs text-white backdrop-blur-md sm:bottom-7 sm:left-7 sm:text-sm">
              <Sparkles size={15} />
              So much love to give
            </div>
          </div>

          <div className="flex flex-col justify-center px-6 py-8 sm:px-9 sm:py-10 lg:px-12">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-[#e7c49c]">
              <Heart size={22} />
            </div>

            <h3 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
              More paws.
              <br />
              <span className="font-serif italic text-[#e7c49c]">
                More happiness.
              </span>
            </h3>

            <p className="mt-4 text-sm leading-7 text-white/75 sm:text-base">
              We have lovely furry companions with wonderful personalities.
              Some are playful, some are gentle and some are full of
              mischief. But they all have one thing in common — they deserve
              a caring and loving family.
            </p>

            <Link
              to="/find-a-pet"
              className="mt-6 inline-flex w-fit items-center gap-3 rounded-full bg-[#e5bd91] px-6 py-3.5 text-sm font-semibold text-[#302820] transition hover:bg-white"
            >
              Meet All Our Pets
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>

      </div>  
    </section>
  );
}

/* ---------------- OUR PROMISE PREVIEW ---------------- */

function PromisePreview() {
  return (
    <section className="bg-[#eae4d8] px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-7xl">

        <div className="grid items-center gap-9 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">

          {/* LEFT IMAGE */}
          <div className="relative group">
            <div className="relative h-[280px] overflow-hidden rounded-3xl shadow-xl sm:h-[400px] lg:h-[490px]">

              <img
                src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=1200&auto=format&fit=crop&q=85"
                alt="Happy dog enjoying a loving home"
                className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-105"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#17251e]/75 via-transparent to-transparent" />

              {/* Bottom Text */}
              <div className="absolute bottom-6 left-6 right-6 sm:bottom-9 sm:left-9">
                <div className="mb-3 flex items-center gap-2 text-sm font-medium text-white">
                  <Heart size={18} className="fill-[#e7c49c] text-[#e7c49c]" />
                  A promise of love
                </div>

                <h3 className="max-w-md font-serif text-2xl italic text-white sm:text-3xl lg:text-4xl">
                  Every little life deserves a little more love.
                </h3>
              </div>
            </div>

            {/* Decorative Badge */}
            <div className="absolute -bottom-4 -right-2 rounded-2xl bg-[#253b32] px-5 py-3 text-white shadow-lg sm:-right-5 sm:px-7 sm:py-4">
              <p className="font-serif text-xl italic">Love. Care. Home.</p>
              <p className="mt-1 text-[10px] tracking-widest text-[#e7c49c]">
                ADOPT • DON'T SHOP
              </p>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="pt-3 lg:pt-0">

            <SectionLabel>Our Promise</SectionLabel>

            <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#302820] sm:text-4xl lg:text-5xl">
              Every pet deserves
              <span className="block font-serif italic text-[#71866a]">
                a forever home.
              </span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#81766b] sm:text-base sm:leading-8">
              We believe adoption is a promise of care, safety and
              unconditional love. Every little life deserves a family
              that treats them as one of their own.
            </p>

            <div className="mt-6 space-y-4">

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#253b32] text-[#e7c49c]">
                  <Heart size={19} />
                </div>
                <span className="text-sm font-semibold text-[#302820]">
                  Love, care and compassion
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#253b32] text-[#e7c49c]">
                  <ShieldCheck size={19} />
                </div>
                <span className="text-sm font-semibold text-[#302820]">
                  Responsible and safe adoption
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#253b32] text-[#e7c49c]">
                  <PawPrint size={19} />
                </div>
                <span className="text-sm font-semibold text-[#302820]">
                  A lifelong bond with your pet
                </span>
              </div>

            </div>

            <Link
              to="/our-promise"
              className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#253b32] px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#9b7655]"
            >
              Read Our Promise
              <ArrowRight size={17} />
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- MAIN HOME PAGE ---------------- */

export default function Home() {
  return (
    <main className="w-full overflow-hidden bg-[#fbfaf7]">
      <CinematicHero />
      <FindPetPreview />
      <LovelyPetsSection />
      <PromisePreview />
    </main>
  );
}
