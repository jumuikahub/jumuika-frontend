import Link from "next/link";

export default function Home() {
  return (
    <section className="min-h-screen bg-white text-gray-800 flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-3xl text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Jumuika Hub KE
        </h1>
        <p className="text-lg md:text-xl text-gray-700">
          Your WhatsApp-First Smart Business Toolkit
        </p>
        <p className="text-base md:text-lg text-gray-600">
          Connect vendors and buyers through WhatsApp. Automate bookings,
          purchases, rewards, referrals, and payments — all in one simple flow.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center pt-4">
          <Link href="https://wa.me/254700915610?text=I%20want%20to%20buy%20items%20via%20Jumuika">
            <button className="w-full md:w-auto px-6 py-3 text-white bg-green-600 hover:bg-green-700 rounded-lg">
              Buy Items via WhatsApp →
            </button>
          </Link>
          <Link href="https://wa.me/254700915610?text=I%20want%20to%20book%20a%20service%20via%20Jumuika">
            <button className="w-full md:w-auto px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg">
              Book Services via WhatsApp →
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
