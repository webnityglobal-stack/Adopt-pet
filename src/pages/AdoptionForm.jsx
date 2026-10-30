import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, CheckCircle, PawPrint, Send } from "lucide-react";
import { pets } from "../data/pets";

export default function AdoptionForm() {
  const { slug } = useParams();
  const pet = pets.find((item) => item.slug === slug);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    homeType: "",
    experience: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  if (!pet) {
    return (
      <main className="flex min-h-[60vh] flex-col items-center justify-center px-5 text-center">
        <h1 className="text-2xl font-bold text-[#302820]">
          Pet not found
        </h1>
        <Link to="/find-a-pet" className="mt-4 text-[#a47b55] underline">
          Explore pets
        </Link>
      </main>
    );
  }

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = `Adoption Enquiry for ${pet.name}`;

    const body = `
New Adoption Enquiry

Pet Name: ${pet.name}
Pet Breed: ${pet.breed}

Applicant Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
City: ${form.city}
Home Type: ${form.homeType}
Previous Pet Experience: ${form.experience}

Message:
${form.message}
    `;

    const mailtoLink = `mailto:hello@pawfectworld.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setSubmitted(true);
    window.location.href = mailtoLink;
  };

  if (submitted) {
    return (
      <main className="flex min-h-[65vh] items-center justify-center bg-[#fbfaf7] px-5 py-14">
        <div className="max-w-lg text-center">
          <CheckCircle size={55} className="mx-auto text-[#253b32]" />
          <h1 className="mt-5 text-3xl font-bold text-[#302820]">
            Your enquiry is ready!
          </h1>
          <p className="mt-3 text-sm leading-7 text-[#81766b]">
            Your email application should open with your adoption enquiry.
            Please send the email to complete the demo submission.
          </p>
          <Link
            to="/find-a-pet"
            className="mt-6 inline-flex rounded-full bg-[#253b32] px-6 py-3 text-sm font-semibold text-white"
          >
            Explore more pets
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f4f0e8] px-5 py-10 sm:py-14">
      <div className="mx-auto max-w-3xl">
        <Link
          to={`/find-a-pet/${pet.slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#66594d]"
        >
          <ArrowLeft size={17} />
          Back to {pet.name}
        </Link>

        <div className="mt-7 overflow-hidden rounded-3xl bg-white shadow-lg">
          <div className="bg-[#183b2b] px-6 py-8 text-white sm:px-10 sm:py-10">
            <div className="flex items-center gap-3 text-[#e7c49c]">
              <PawPrint size={22} />
              <span className="text-xs font-bold uppercase tracking-[0.2em]">
                Adoption enquiry
              </span>
            </div>

            <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Meet Your Match
            </h1>

            <p className="mt-3 text-sm leading-6 text-white/70">
              Tell us a little about yourself and your plans to welcome a
              new family member.
            </p>

            <div className="mt-6 flex items-center gap-4 rounded-2xl border border-white/15 bg-white/10 p-3">
              <img
                src={pet.image}
                alt={pet.name}
                className="h-16 w-16 rounded-xl object-cover"
              />
              <div>
                <p className="font-bold">{pet.name}</p>
                <p className="mt-1 text-xs text-white/70">
                  {pet.breed} · {pet.age}
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 p-6 sm:p-10">
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#302820]">
                Your full name *
              </label>
              <input
                required
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full rounded-xl border border-[#e8e1d6] bg-[#fbfaf7] px-4 py-3 text-sm outline-none transition focus:border-[#253b32]"
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#302820]">
                  Email address *
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-[#e8e1d6] bg-[#fbfaf7] px-4 py-3 text-sm outline-none focus:border-[#253b32]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#302820]">
                  Phone number *
                </label>
                <input
                  required
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  pattern="[0-9+\-\s()]{10,15}"
                  placeholder="Enter phone number"
                  className="w-full rounded-xl border border-[#e8e1d6] bg-[#fbfaf7] px-4 py-3 text-sm outline-none focus:border-[#253b32]"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-[#302820]">
                Your city *
              </label>
              <input
                required
                name="city"
                value={form.city}
                onChange={handleChange}
                placeholder="Enter your city"
                className="w-full rounded-xl border border-[#e8e1d6] bg-[#fbfaf7] px-4 py-3 text-sm outline-none focus:border-[#253b32]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-[#302820]">
                What type of home do you live in? *
              </label>
              <select
                required
                name="homeType"
                value={form.homeType}
                onChange={handleChange}
                className="w-full rounded-xl border border-[#e8e1d6] bg-[#fbfaf7] px-4 py-3 text-sm outline-none focus:border-[#253b32]"
              >
                <option value="">Select your home type</option>
                <option value="Apartment">Apartment</option>
                <option value="Independent house">Independent house</option>
                <option value="Villa">Villa</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-[#302820]">
                Have you owned a pet before? *
              </label>
              <select
                required
                name="experience"
                value={form.experience}
                onChange={handleChange}
                className="w-full rounded-xl border border-[#e8e1d6] bg-[#fbfaf7] px-4 py-3 text-sm outline-none focus:border-[#253b32]"
              >
                <option value="">Select an option</option>
                <option value="Yes">Yes</option>
                <option value="No">No, this will be my first pet</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-[#302820]">
                Tell us why you would love to adopt {pet.name}
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                placeholder="Write your message..."
                className="w-full resize-y rounded-xl border border-[#e8e1d6] bg-[#fbfaf7] px-4 py-3 text-sm outline-none focus:border-[#253b32]"
              />
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-3 rounded-full bg-[#253b32] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#a47b55]"
            >
              Submit Adoption Enquiry
              <Send size={17} />
            </button>

            <p className="text-center text-xs leading-5 text-[#9a8c7e]">
              By submitting, you agree to be contacted regarding your
              adoption enquiry.
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}