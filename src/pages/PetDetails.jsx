import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Heart,
  MapPin,
  PawPrint,
  ShieldCheck,
  Venus,
  Weight,
} from "lucide-react";
import { pets } from "../data/pets";

export default function PetDetails() {
  const { slug } = useParams();
  const pet = pets.find((item) => item.slug === slug);

  if (!pet) {
    return (
      <main className="flex min-h-[60vh] flex-col items-center justify-center px-5 text-center">
        <PawPrint size={42} className="text-[#a47b55]" />
        <h1 className="mt-4 text-2xl font-bold text-[#302820]">
          Pet not found
        </h1>
        <Link
          to="/find-a-pet"
          className="mt-5 rounded-full bg-[#253b32] px-6 py-3 text-sm font-semibold text-white"
        >
          Back to pets
        </Link>
      </main>
    );
  }

  const details = [
    { label: "Breed", value: pet.breed, icon: PawPrint },
    { label: "Age", value: pet.age, icon: Heart },
    { label: "Gender", value: pet.gender, icon: Venus },
    { label: "Size", value: pet.size, icon: Weight },
    { label: "Vaccinated", value: pet.vaccinated, icon: ShieldCheck },
    { label: "Health", value: pet.health, icon: Heart },
  ];

  return (
    <main className="min-h-screen bg-[#fbfaf7]">
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10">
        <Link
          to="/find-a-pet"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#66594d] transition hover:text-[#a47b55]"
        >
          <ArrowLeft size={17} />
          Back to all pets
        </Link>

        <div className="mt-7 grid gap-8 lg:grid-cols-2 lg:gap-14">
          <div>
            <div className="overflow-hidden rounded-3xl">
              <img
                src={pet.image}
                alt={pet.name}
                className="h-[340px] w-full object-cover sm:h-[500px]"
              />
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4">
              {pet.gallery.map((image, index) => (
                <div key={index} className="overflow-hidden rounded-2xl">
                  <img
                    src={image}
                    alt={`${pet.name} ${index + 1}`}
                    loading="lazy"
                    className="h-36 w-full object-cover sm:h-44"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="lg:py-5">
            <span className="inline-flex rounded-full bg-[#eae4d8] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#806344]">
              {pet.category} · Available for adoption
            </span>

            <h1 className="mt-5 text-4xl font-semibold text-[#302820] sm:text-6xl">
              Meet {pet.name}
              <span className="block font-serif italic text-[#a47b55]">
                your future friend.
              </span>
            </h1>

            <p className="mt-3 flex items-center gap-2 text-sm text-[#81766b]">
              <MapPin size={17} />
              {pet.location}
            </p>

            <p className="mt-6 text-sm leading-7 text-[#81766b] sm:text-base">
              {pet.description}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {details.map(({ label, value, icon: Icon }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-[#e8e1d6] bg-white p-4"
                >
                  <Icon size={19} className="text-[#a47b55]" />
                  <p className="mt-3 text-xs text-[#9a8c7e]">{label}</p>
                  <p className="mt-1 text-sm font-semibold text-[#302820]">
                    {value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-[#eae4d8] p-5">
              <h2 className="text-lg font-bold text-[#302820]">
                Personality
              </h2>
              <p className="mt-2 text-sm leading-6 text-[#66594d]">
                {pet.personality}
              </p>
            </div>

            <Link
              to={`/meet-your-match/${pet.slug}`}
              className="mt-7 flex w-full items-center justify-center gap-3 rounded-full bg-[#253b32] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#a47b55]"
            >
              Meet Your Match
              <ArrowRight size={18} />
            </Link>

            <p className="mt-3 text-center text-xs text-[#9a8c7e]">
              Take the first step towards a loving friendship.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}