
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  Heart,
  ShieldCheck,
  Stethoscope,
  HandHeart,
  House,
  ArrowRight,
  PawPrint,
  Sparkles,
} from "lucide-react";

const promises = [
  {
    icon: <Stethoscope size={24} />,
    title: "Health Comes First",
    description:
      "Every pet deserves a healthy beginning. We believe in responsible health checks, vaccination awareness and proper care before adoption.",
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "Responsible Adoption",
    description:
      "We encourage thoughtful adoption by helping pets find families whose lifestyle, environment and love match their needs.",
  },
  {
    icon: <HandHeart size={24} />,
    title: "Lifetime Support",
    description:
      "Our relationship doesn't end when a pet finds a home. We believe every new pet parent deserves guidance and support along the way.",
  },
  {
    icon: <House size={24} />,
    title: "A Safe & Loving Home",
    description:
      "Every animal deserves kindness, safety, patience and a place where they can feel truly at home.",
  },
];


export default function OurPromise() {

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const timer = setTimeout(() => {
        document
          .getElementById(location.hash.slice(1))
          ?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
      }, 200);

      return () => clearTimeout(timer);
    }
  }, [location.pathname, location.hash]);
  return (
    <main className="overflow-hidden bg-[#f8f5ef] text-[#302820]">

      <section className="px-5 pb-16 pt-10 sm:px-8 sm:pb-24 sm:pt-14 lg:px-10 lg:pb-28">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* HERO CONTENT */}
          <div className="order-2 lg:order-1">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#e9e4d9] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#526b55] sm:text-xs">
              <Heart size={14} />
              What We Believe In
            </span>

            <h1 className="mt-5 max-w-xl text-4xl font-semibold leading-[1.12] tracking-tight text-[#302820] sm:text-5xl md:text-6xl lg:mt-6 lg:text-7xl">
              Every paw deserves a
              <span className="block font-serif italic text-[#71866a]">
                promise of love.
              </span>
            </h1>

            <p className="mt-5 max-w-lg text-sm leading-7 text-[#81766b] sm:mt-6 sm:text-base sm:leading-8">
              Finding a pet a home is just the beginning. Our promise is to
              make every adoption thoughtful, every beginning safe and every
              bond full of love.
            </p>

            <Link
              to="/find-a-pet"
              className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#253b32] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#3b5848] sm:mt-8 sm:py-4"
            >
              Find Your Companion
              <ArrowRight size={17} />
            </Link>
          </div>

          {/* ADOPTION IMAGE */}
          <div className="relative order-1 lg:order-2">
            <div className="overflow-hidden rounded-[25px] shadow-xl sm:rounded-[35px]">
              <img
                src="https://images.unsplash.com/photo-1552053831-71594a27632d?w=1200&auto=format&fit=crop&q=85"
                alt="Golden retriever with its human companion"
                className="h-[280px] w-full object-cover object-center sm:h-[420px] md:h-[480px] lg:h-[530px]"
              />
            </div>

            {/* FLOATING CARD */}
            <div className="absolute -bottom-6 left-3 max-w-[200px] rounded-2xl bg-white p-4 shadow-xl sm:-bottom-7 sm:left-6 sm:max-w-[200px] sm:p-6 lg:-left-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#e9eee5] text-[#526b55]">
                <PawPrint size={20} />
              </div>

              <p className="font-serif text-lg font-semibold text-[#302820] sm:text-xl">
                Love changes everything.
              </p>

              <p className="mt-2 text-xs leading-5 text-[#81766b] sm:text-sm">
                A loving home can make a world of difference.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="px-5 py-10 sm:px-8 sm:py-10 lg:px-10 lg:py-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#71866a] sm:text-xs">
            Our Commitment
          </span>

          <h2 className="mt-5 font-serif text-3xl leading-tight sm:text-4xl md:text-5xl">
            More than adoption.
            <span className="block italic text-[#71866a]">
              A responsibility for life.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#81766b] sm:mt-7 sm:text-base sm:leading-8">
            We believe pets are family, not just companions. Every adoption
            should begin with care, continue with responsibility and grow
            into a lifelong relationship built on trust.
          </p>
        </div>
      </section>

      {/* PROMISE CARDS */}
      <section className="bg-[#eeeae1] px-5 py-10 sm:px-8 sm:py-10 lg:px-10 lg:py-10">
        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#71866a] sm:text-xs">
              The PawHaven Difference
            </span>

            <h2 className="mt-5 font-serif text-3xl leading-tight sm:text-4xl md:text-5xl">
              Promises that guide
              <span className="italic text-[#71866a]">
                {" "}everything we do.
              </span>
            </h2>
          </div>

          <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
            {promises.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-3xl bg-[#f8f5ef] p-6 sm:p-7"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#253b32] text-[#e7c49c] sm:h-12 sm:w-12">
                  {item.icon}
                </div>

                <h3 className="mt-6 text-lg font-semibold sm:mt-7 sm:text-xl">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#81766b] sm:mt-4">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGE AND MESSAGE */}
      <section className="px-5 py-10 sm:px-8 sm:py-10 lg:px-10 lg:py-10">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-10">

          {/* PET IMAGES */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <img
              src="https://images.unsplash.com/photo-1551717743-49959800b1f6?auto=format&fit=crop&w=700&q=85"
              alt="Happy dog outdoors"
              loading="lazy"
              className="mt-8 h-56 w-full rounded-2xl object-cover sm:mt-10 sm:h-80 sm:rounded-3xl"
            />

            <img
              src="https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=700&q=85"
              alt="Cat resting comfortably"
              loading="lazy"
              className="h-56 w-full rounded-2xl object-cover sm:h-80 sm:rounded-3xl"
            />
          </div>

          {/* CONTENT */}
          <div>
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#e9eee5] text-[#526b55] sm:h-10 sm:w-10">
              <Sparkles size={23} />
            </div>

            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#71866a] sm:text-xs">
              A Promise That Matters
            </span>

            <h2 className="mt-5 font-serif text-3xl leading-tight sm:text-4xl md:text-5xl">
              Because they deserve more than just a place to stay.
            </h2>

            <p className="mt-6 text-sm leading-7 text-[#81766b] sm:mt-7 sm:text-base sm:leading-8">
              They deserve a family that understands them, a home where they
              feel safe and people who choose them every single day. That's
              the kind of future we want every pet to have.
            </p>

            <p className="mt-5 font-serif text-lg italic text-[#71866a] sm:text-xl">
              Every adoption is a promise. Let's make it a beautiful one.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#253b32] px-5 py-10 text-center text-white sm:px-8 sm:py-10 lg:px-10 lg:py-10">
        <div className="mx-auto max-w-3xl">

          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-[#e7c49c] sm:h-14 sm:w-14">
            <Heart size={26} />
          </div>

          <h2 className="mt-7 font-serif text-3xl leading-tight sm:text-5xl md:text-6xl">
            Ready to make a
            <span className="block italic text-[#e7c49c]">
              promise of your own?
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
            Your new best friend could be waiting for you. Explore our pets
            and take the first step towards a beautiful bond.
          </p>

          <Link
            to="/find-a-pet"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#e7c49c] px-7 py-4 text-sm font-semibold text-[#253b32] transition duration-300 hover:bg-white sm:mt-9 sm:px-8"
          >
            Meet Your Companion
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      {/* Responsible Pet Care */}
      <section
        id="responsible-pet-care"
        className="scroll-mt-28 py-20 bg-[#f6f8f3]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Heading */}
          <div className="max-w-2xl mx-auto text-center mb-14">
            <span className="inline-block px-4 py-2 rounded-full bg-[#e5eee5] text-[#315b40] text-sm font-semibold tracking-wide mb-5">
              CARE BEYOND ADOPTION
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#183b2b] leading-tight">
              Responsible Pet Care
              <span className="text-[#82a879]"> Starts With Love.</span>
            </h2>

            <p className="mt-5 text-slate-600 text-base sm:text-lg leading-8">
              Every pet deserves a happy, healthy and safe life. Give your furry
              companion the care, attention and love they need every single day.
            </p>
          </div>

          {/* Care Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-7 border border-[#e8eee5] hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-[#edf4e9] flex items-center justify-center text-3xl mb-6">
                🥗
              </div>
              <h3 className="text-xl font-bold text-[#183b2b] mb-3">
                Proper Nutrition
              </h3>
              <p className="text-slate-600 text-sm leading-7">
                Provide balanced meals and fresh drinking water to keep your pet
                active, strong and healthy.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-7 border border-[#e8eee5] hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-[#edf4e9] flex items-center justify-center text-3xl mb-6">
                🏡
              </div>
              <h3 className="text-xl font-bold text-[#183b2b] mb-3">
                Safe Environment
              </h3>
              <p className="text-slate-600 text-sm leading-7">
                Create a comfortable, clean and secure space where your pet feels
                protected and loved.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-7 border border-[#e8eee5] hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-[#edf4e9] flex items-center justify-center text-3xl mb-6">
                🐕
              </div>
              <h3 className="text-xl font-bold text-[#183b2b] mb-3">
                Daily Exercise
              </h3>
              <p className="text-slate-600 text-sm leading-7">
                Make time for walks, playtime and physical activities to support
                your pet's fitness and happiness.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-2xl p-7 border border-[#e8eee5] hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-[#edf4e9] flex items-center justify-center text-3xl mb-6">
                🩺
              </div>
              <h3 className="text-xl font-bold text-[#183b2b] mb-3">
                Regular Health Care
              </h3>
              <p className="text-slate-600 text-sm leading-7">
                Schedule routine veterinary checkups, vaccinations and timely
                medical care for your companion.
              </p>
            </div>

          </div>

          {/* Bottom Message */}
          <div className="mt-12 bg-[#183b2b] rounded-3xl px-7 py-8 sm:px-10 sm:py-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Love is a lifelong commitment.
              </h3>
              <p className="mt-3 text-white/75 leading-7">
                Be their safe place, their best friend and their forever family.
              </p>
            </div>

            <div className="text-5xl sm:text-6xl">
              🐾
            </div>
          </div>

        </div>
      </section>

      {/* Adoption Checklist */}
      <section
        id="adoption-checklist"
        className="scroll-mt-28 py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left Content */}
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-[#edf4e9] text-[#315b40] text-sm font-semibold mb-5">
                YOUR ADOPTION JOURNEY
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#183b2b] leading-tight">
                Ready to Welcome a
                <span className="text-[#82a879]"> New Best Friend?</span>
              </h2>

              <p className="mt-5 text-slate-600 text-base leading-8">
                Bringing a pet home is a beautiful experience and a lifelong
                commitment. A little preparation can make your new companion's
                transition easier, safer and happier.
              </p>

              <div className="mt-8 bg-[#f5f8f2] rounded-2xl p-6 border border-[#e6eee1]">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">💚</span>
                  <h3 className="text-lg font-bold text-[#183b2b]">
                    Remember
                  </h3>
                </div>
                <p className="text-slate-600 text-sm leading-7">
                  Adoption is not just about bringing a pet home. It's about
                  giving them a forever home filled with care, patience and love.
                </p>
              </div>
            </div>

            {/* Right Checklist */}
            <div className="bg-[#f6f8f3] rounded-3xl p-6 sm:p-9">

              <div className="flex items-center justify-between gap-4 mb-7">
                <div>
                  <p className="text-sm font-semibold text-[#82a879] uppercase tracking-wider">
                    Before You Adopt
                  </p>
                  <h3 className="text-2xl font-bold text-[#183b2b] mt-2">
                    Your Checklist
                  </h3>
                </div>
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-3xl shadow-sm">
                  📋
                </div>
              </div>

              <div className="space-y-4">

                {[
                  "Be ready for a long-term responsibility.",
                  "Prepare a safe and comfortable space.",
                  "Arrange food, water bowls and basic supplies.",
                  "Plan regular veterinary checkups.",
                  "Give your new companion time and patience.",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 bg-white p-4 rounded-xl border border-[#e8eee5] hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-7 h-7 shrink-0 rounded-full bg-[#e8f1e3] flex items-center justify-center text-[#527b4e] font-bold text-sm">
                      ✓
                    </div>
                    <p className="text-slate-700 text-sm sm:text-base leading-6">
                      {item}
                    </p>
                  </div>
                ))}

              </div>

              <p className="mt-6 text-sm text-[#527b4e] font-medium text-center">
                A little preparation makes a big difference! 🐾
              </p>

            </div>
          </div>
        </div>
      </section>


      {/* Pet Wellness */}
      <section
        id="pet-wellness"
        className="scroll-mt-28 py-20 bg-[#f6f8f3]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <div className="max-w-3xl mx-auto text-center mb-14">

            <span className="inline-block px-4 py-2 rounded-full bg-white text-[#527b4e] text-sm font-semibold mb-5">
              HAPPY PETS, HEALTHY LIVES
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#183b2b] leading-tight">
              A Healthier Life for Your
              <span className="text-[#82a879]"> Furry Friend.</span>
            </h2>

            <p className="mt-5 text-slate-600 text-base sm:text-lg leading-8">
              Your pet's wellness is about more than just good health.
              It's about creating a balanced lifestyle filled with nutrition,
              activity, comfort and affection.
            </p>

          </div>

          {/* Wellness Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Nutrition */}
            <div className="group bg-white rounded-2xl overflow-hidden border border-[#e8eee5] hover:shadow-xl transition-all duration-300">
              <div className="h-2 bg-[#a7c795]"></div>
              <div className="p-7">
                <div className="w-16 h-16 rounded-2xl bg-[#edf4e9] flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                  🥕
                </div>
                <h3 className="text-xl font-bold text-[#183b2b] mb-3">
                  Healthy Nutrition
                </h3>
                <p className="text-slate-600 text-sm leading-7">
                  Choose nutritious, balanced meals and provide fresh water
                  every day to support your pet's health.
                </p>
              </div>
            </div>

            {/* Exercise */}
            <div className="group bg-white rounded-2xl overflow-hidden border border-[#e8eee5] hover:shadow-xl transition-all duration-300">
              <div className="h-2 bg-[#a7c795]"></div>
              <div className="p-7">
                <div className="w-16 h-16 rounded-2xl bg-[#edf4e9] flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                  ⚽
                </div>
                <h3 className="text-xl font-bold text-[#183b2b] mb-3">
                  Active Lifestyle
                </h3>
                <p className="text-slate-600 text-sm leading-7">
                  Daily walks, playtime and exercise help your furry friend
                  stay fit, energetic and mentally active.
                </p>
              </div>
            </div>

            {/* Grooming */}
            <div className="group bg-white rounded-2xl overflow-hidden border border-[#e8eee5] hover:shadow-xl transition-all duration-300">
              <div className="h-2 bg-[#a7c795]"></div>
              <div className="p-7">
                <div className="w-16 h-16 rounded-2xl bg-[#edf4e9] flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                  🛁
                </div>
                <h3 className="text-xl font-bold text-[#183b2b] mb-3">
                  Regular Grooming
                </h3>
                <p className="text-slate-600 text-sm leading-7">
                  Keep your pet clean with regular bathing, brushing,
                  nail trimming and proper hygiene.
                </p>
              </div>
            </div>

            {/* Veterinary Care */}
            <div className="group bg-white rounded-2xl overflow-hidden border border-[#e8eee5] hover:shadow-xl transition-all duration-300">
              <div className="h-2 bg-[#a7c795]"></div>
              <div className="p-7">
                <div className="w-16 h-16 rounded-2xl bg-[#edf4e9] flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                  🩺
                </div>
                <h3 className="text-xl font-bold text-[#183b2b] mb-3">
                  Veterinary Care
                </h3>
                <p className="text-slate-600 text-sm leading-7">
                  Regular health checkups, vaccinations and timely medical
                  attention keep your companion healthy.
                </p>
              </div>
            </div>

          </div>

          {/* Bottom Banner */}
          <div className="mt-12 rounded-3xl bg-[#183b2b] p-8 sm:p-10 text-center">
            <div className="text-4xl mb-4">🐾</div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Their Health. Their Happiness. Your Love.
            </h3>

            <p className="mt-4 text-white/75 max-w-2xl mx-auto leading-7">
              Every little act of care makes your pet's life better.
              Give them the healthy and happy life they deserve.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
