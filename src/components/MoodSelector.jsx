import { useState } from "react";

const moodsList = [
  { emoji: "😊", text: "Joyful", color: "bg-yellow-300" },
  { emoji: "😔", text: "Thoughtful", color: "bg-blue-300" },
  { emoji: "😠", text: "Frustrated", color: "bg-red-300" },
  { emoji: "😴", text: "Sleepy", color: "bg-gray-300" },
];

const MoodSelector = ({ onAddMood }) => {
  const [selectedMood, setSelectedMood] = useState(null);
  
  const handleAddMood = () => {
    if (!selectedMood) return;
    const newMood = {
      ...selectedMood,
      date: new Date().toLocaleString(),
    };
    onAddMood(newMood);
    setSelectedMood(null);
  };

  return (
    <div className="bg-white p-5 rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold mb-2">Select Emoji</h2>
      <div className="flex gap-2">
        {moodsList.map((mood) => (
          <button
            key={mood.text}
            className={`px-4 py-2 rounded-full shadow-md ${selectedMood?.text === mood.text ? "ring-2 ring-blue-500" : "opacity-80 hover:opacity-100"} ${mood.color}`}
            onClick={() => setSelectedMood(mood)}
          >
            {mood.emoji} {mood.text}
          </button>
        ))}
      </div>
      <button
        className="mt-4 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
        onClick={handleAddMood}
        disabled={!selectedMood}
      >
        Add Mood
      </button>
    </div>
  );
};

export default MoodSelector;
