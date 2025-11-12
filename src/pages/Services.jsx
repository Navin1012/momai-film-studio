import services from "../data/services";

export default function Services() {
  return (
    <section className="py-16 px-6 bg-[#0D0D0D]">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold tracking-wide text-white">
          Our <span className="text-[#D4AF37]">Services</span>
        </h2>
        <p className="text-[#F5EDE3]/80 max-w-xl mx-auto mt-3 text-lg">
          We provide beautifully curated photography experiences designed to
          preserve your most meaningful moments.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-3">
        {services.map((s) => (
          <div
            key={s.id}
            className="group bg-[#F5EDE3] rounded-xl overflow-hidden shadow-[0_0_25px_rgba(212,175,55,0.15)] hover:shadow-[0_0_45px_rgba(212,175,55,0.35)] transition-all duration-500"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={s.image}
                alt={s.name}
                className="w-full h-56 object-cover group-hover:scale-110 transition-all duration-700"
              />
            </div>

            {/* Content */}
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold text-[#1A1A1A] tracking-wide">
                {s.name}
              </h3>
              <p className="text-[#4A4A4A] mt-3 text-sm leading-relaxed">
                {s.description}
              </p>

              <button className="mt-6 px-5 py-2 border border-[#D4AF37] text-[#D4AF37] font-semibold rounded-md tracking-wide hover:bg-[#D4AF37] hover:text-black transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
