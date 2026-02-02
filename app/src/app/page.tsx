import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          Restaurant Cash Flow Manager
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Weekly cash flow and financial position management for your restaurants
        </p>
        <div className="mt-8 flex gap-4 justify-center">
          <Link
            href="/login"
            className="rounded-md bg-primary-600 px-4 py-2 text-white hover:bg-primary-700 transition-colors"
          >
            Sign In
          </Link>
          <Link
            href="/dashboard"
            className="rounded-md border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
          >
            View Demo
          </Link>
        </div>
      </div>
    </div>
  );
}
