import { useState } from "react";

export default function AddMilestonePage() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");
  const [week, setWeek] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const milestone = { title, date, notes, week: Number(week) };

    try {
      const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:5000/api/milestones", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(milestone),
      });

      const data = await res.json();
      console.log("Milestone saved:", data);
      alert("Milestone added!");
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">➕ Add New Milestone</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Title (e.g., First ultrasound)"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          placeholder="Notes (optional)"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Week of pregnancy (optional)"
          value={week}
          onChange={(e) => setWeek(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Save Milestone
        </button>
      </form>
    </div>
  );
}
