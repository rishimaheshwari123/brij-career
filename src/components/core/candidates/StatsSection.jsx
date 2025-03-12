export default function StatsSection() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-900 py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
        {/* Stat Item */}
        <div>
          <h2 className="text-4xl font-bold">10+</h2>
          <p className="text-lg uppercase opacity-80">Years</p>
        </div>

        <div>
          <h2 className="text-4xl font-bold">1,00,000+</h2>
          <p className="text-lg uppercase opacity-80">Profiles</p>
        </div>

        <div>
          <h2 className="text-4xl font-bold">20+</h2>
          <p className="text-lg uppercase opacity-80">Countries</p>
        </div>

        <div>
          <h2 className="text-4xl font-bold">250+</h2>
          <p className="text-lg uppercase opacity-80">Employment Partners</p>
        </div>
      </div>
    </section>
  );
}
