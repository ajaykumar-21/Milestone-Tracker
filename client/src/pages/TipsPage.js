import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function TipsPage() {
  const { milestoneId } = useParams();
  const [tips, setTips] = useState([]);
  const [newTip, setNewTip] = useState("");

  useEffect(() => {
    const fetchTips = async () => {
      const token = localStorage.getItem("token");

      try {
        const res = await fetch(
          `http://localhost:5000/api/tips/${milestoneId}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        const data = await res.json();
        setTips(data);
      } catch (err) {
        console.error("Error loading tips:", err);
      }
    };

    fetchTips();
  }, [milestoneId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    try {
      const res = await fetch("http://localhost:5000/api/tips", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ milestoneId, tip: newTip }),
      });

      const data = await res.json();
      setTips((prev) => [...prev, data]);
      setNewTip("");
    } catch (err) {
      console.error("Failed to submit tip:", err);
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">💡 Tips for this Milestone</h2>

      <ul className="space-y-2 mb-6">
        {tips.map((t) => (
          <li key={t._id} className="bg-gray-100 p-2 rounded shadow-sm">
            {t.tip} <br />
            <span className="text-xs text-gray-500">— {t.contributedBy}</span>
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit} className="space-y-2">
        <textarea
          value={newTip}
          onChange={(e) => setNewTip(e.target.value)}
          placeholder="Add a helpful tip..."
          className="w-full p-2 border rounded"
          rows={3}
          required
        ></textarea>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          ➕ Submit Tip
        </button>
      </form>
    </div>
  );
}
