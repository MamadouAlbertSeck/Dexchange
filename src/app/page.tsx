'use client';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 gap-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Bienvenue sur DEXCHANGE SAAS</h1>
      <p className="text-gray-600 mb-6">Choisissez une page pour commencer :</p>

      <div className="flex flex-col md:flex-row gap-4">
        <Link href="/dashboard">
          <button className="bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-600 transition">
            Dashboard
          </button>
        </Link>

        <Link href="/table">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition">
            Table
          </button>
        </Link>

        <Link href="/auth">
          <button className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition">
            Auth
          </button>
        </Link>
      </div>
    </div>
  );
}
