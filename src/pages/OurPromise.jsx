
import { Link } from "react-router-dom";
import { motion } from "motion/react";
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
  return (
    <main className="overflow-hidden bg-[#f8f5ef] text-[#302820]">

      {/* HERO SECTION */}
      <section className="px-5 pb-10 pt-10 sm:px-8 sm:pb-28 sm:pt-10 lg:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-10">

          {/* HERO CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-[#e9e4d9] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#526b55] sm:text-xs">
              <Heart size={14} />
              What We Believe In
            </span>

            <h1 className="mt-6 max-w-xl text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Every paw deserves a
              <span className="block font-serif italic text-[#71866a]">
                promise of love.
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-sm leading-7 text-[#81766b] sm:mt-7 sm:text-base sm:leading-8">
              Finding a pet a home is just the beginning. Our promise is to
              make every adoption thoughtful, every beginning safe and every
              bond full of love.
            </p>

            <Link
              to="/find-a-pet"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#253b32] px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-[#3b5848]"
            >
              Find Your Companion
              <ArrowRight size={17} />
            </Link>
          </motion.div>

          {/* RUNNING DOG VIDEO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative overflow-hidden rounded-[25px] sm:rounded-[35px]">
              <video
                src="/videos/running-dog.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="h-[300px] w-full object-cover sm:h-[430px] md:h-[500px] lg:h-[560px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
            </div>

            {/* FLOATING CARD */}
            <div className="absolute -bottom-7 left-4 max-w-[235px] rounded-2xl bg-white p-4 shadow-xl sm:-left-7 sm:max-w-[270px] sm:p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#e9eee5] text-[#526b55]">
                <PawPrint size={20} />
              </div>

              <p className="font-serif text-lg font-semibold sm:text-xl">
                Love changes everything.
              </p>

              <p className="mt-2 text-xs leading-5 text-[#81766b] sm:text-sm">
                A loving home can make a world of difference.
              </p>
            </div>
          </motion.div>
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
    </main>
  );
}
