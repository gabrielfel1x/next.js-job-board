export default function Hero() {
  return (
    <section className="py-12">
      <h1 className="text-4xl font-bold text-center">
        Find Your Perfect <br />
        Job Match
      </h1>
      <p className="text-center text-gray-500">
        Where Experience Meets Opportunity
      </p>
      <form className="container flex gap-2 mt-4 max-w-2xl mx-auto">
        <input
          type="search"
          className="border border-gray-400 w-full py-2 px-3 rounded-md"
          placeholder="Find a job name..."
        />
        <button className="py-2 px-4 rounded-md font-semibold bg-green-400 text-white">
          Search
        </button>
      </form>
    </section>
  );
}
