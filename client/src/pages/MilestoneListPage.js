import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function MilestoneListPage() {
  const [milestones, setMilestones] = useState([]);

  useEffect(() => {
    const fetchMilestones = async () => {
      const token = localStorage.getItem("token");

      try {
        const res = await fetch("http://localhost:5000/api/milestones", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();
        setMilestones(data);
      } catch (err) {
        console.error("Error fetching milestones:", err);
      }
    };

    fetchMilestones();
  }, []);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">📆 My Milestone Timeline</h2>
      <ul className="space-y-4">
        {milestones.map((m) => (
          <li
            key={m._id}
            className="border border-gray-200 p-4 rounded shadow-sm bg-white"
          >
            <h3 className="text-lg font-medium">{m.title}</h3>
            <p className="text-sm text-gray-600">
              📅 {new Date(m.date).toDateString()}
            </p>
            {m.notes && <p className="mt-1">{m.notes}</p>}
            {m.week && (
              <p className="mt-1 text-sm text-indigo-500">
                🤰 You were around <b>week {m.week}</b> when this happened.
              </p>
            )}

            <Link
              to={`/tips/${m._id}`}
              className="text-blue-600 mt-2 inline-block hover:underline"
            >
              💡 View Tips / Contribute
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
