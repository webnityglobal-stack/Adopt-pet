
import { useMemo, useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowRight, MapPin, PawPrint, Search } from "lucide-react";
import { pets } from "../data/pets";

export default function FindAPet() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Read category and search directly from URL
  const categoryFromUrl = searchParams.get("category");
  const searchFromUrl = searchParams.get("search") || "";

  const [category, setCategory] = useState(
    ["Dogs", "Cats"].includes(categoryFromUrl)
      ? categoryFromUrl
      : "All"
  );

  const [search, setSearch] = useState(searchFromUrl);

  // Update category when URL changes
  useEffect(() => {
    const urlCategory = searchParams.get("category");

    setCategory(
      ["Dogs", "Cats"].includes(urlCategory)
        ? urlCategory
        : "All"
    );

    setSearch(searchParams.get("search") || "");
  }, [searchParams]);

  // Update URL when category button is clicked
  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);

    const params = new URLSearchParams(searchParams);

    if (newCategory === "All") {
      params.delete("category");
    } else {
      params.set("category", newCategory);
    }

    setSearchParams(params);
  };

  const filteredPets = useMemo(() => {
    return pets.filter((pet) => {
      const matchesCategory =
        category === "All" || pet.category === category;

      const term = search.toLowerCase().trim();

      const matchesSearch =
        pet.name.toLowerCase().includes(term) ||
        pet.breed.toLowerCase().includes(term) ||
        pet.location.toLowerCase().includes(term);

      return matchesCategory && matchesSearch;
    });
  }, [category, search]);

  return (
    <main className="min-h-screen bg-[#fbfaf7]">
      <section className="bg-[#183b2b] px-5 py-14 text-center text-white sm:py-20">
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#e7c49c]">
          <PawPrint size={15} />
          Find your forever friend
        </span>

        <h1 className="mt-4 text-4xl font-semibold sm:text-6xl">
          Meet your new
          <span className="block font-serif italic text-[#e7c49c]">
            best friend.
          </span>
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/70">
          Every pet has a unique personality and a story. Explore our
          adorable companions and find the one who belongs in your family.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14 lg:px-10">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a47b55]">
              Our furry friends
            </p>

            <h2 className="mt-2 text-3xl font-semibold text-[#302820]">
              Pets looking for love
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {["All", "Dogs", "Cats"].map((item) => (
              <button
                key={item}
                onClick={() => handleCategoryChange(item)}
                className={`rounded-full px-6 py-3 text-sm font-semibold transition ${
                  category === item
                    ? "bg-[#253b32] text-white"
                    : "border border-[#ded7cc] bg-white text-[#66594d] hover:border-[#253b32]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-7 flex items-center gap-3 rounded-full border border-[#e8e1d6] bg-white px-5 py-3.5">
          <Search size={18} className="shrink-0 text-[#9a795c]" />

          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search by pet name, breed or city..."
            className="w-full bg-transparent text-sm text-[#302820] outline-none placeholder:text-[#a69b90]"
          />
        </div>

        <div className="mt-5 flex items-center justify-between text-sm text-[#81766b]">
          <span>{filteredPets.length} pets found</span>
          <span>{category === "All" ? "All pets" : category}</span>
        </div>

        {filteredPets.length > 0 ? (
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredPets.map((pet) => (
              <Link
                to={`/find-a-pet/${pet.slug}`}
                key={pet.id}
                className="group overflow-hidden rounded-2xl border border-[#e8e1d6] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={pet.image}
                    alt={pet.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-[#473a30]">
                    {pet.category}
                  </span>
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-xl font-bold text-[#302820]">
                      {pet.name}
                    </h3>

                    <span className="text-xs text-[#9a795c]">
                      {pet.age}
                    </span>
                  </div>

                  <p className="mt-1 text-sm text-[#81766b]">
                    {pet.breed}
                  </p>

                  <p className="mt-3 flex items-center gap-2 text-xs text-[#81766b]">
                    <MapPin size={14} />
                    {pet.location}
                  </p>

                  <div className="mt-5 flex items-center justify-between border-t border-[#eee8df] pt-4 text-sm font-semibold text-[#253b32]">
                    View details

                    <ArrowRight
                      size={17}
                      className="transition group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="py-16 text-center">
            <PawPrint className="mx-auto text-[#a47b55]" size={35} />

            <h3 className="mt-4 text-xl font-semibold text-[#302820]">
              No pets found
            </h3>

            <p className="mt-2 text-sm text-[#81766b]">
              Try another name, breed or category.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
