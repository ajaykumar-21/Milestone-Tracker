import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">
        👶 BabySteps Milestone Tracker
      </h1>
      <p className="mb-4">
        Track and share your pregnancy milestones with helpful tips.
      </p>
      <Link
        to="/add"
        className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
      >
        ➕ Add a Milestone
      </Link>
      <Link
        to="/milestones"
        className="block mt-4 text-blue-600 hover:underline"
      >
        📅 View My Milestones
      </Link>
    </div>
  );
}
