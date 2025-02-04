import { useState } from "react";
import MoodSelector from "./components/MoodSelector";
import MoodList from "./components/MoodList";

function App() {
  const [moods, setMoods] = useState([]);
  const [lastDeletedMood, setLastDeletedMood] = useState(null);

  const addMood = (mood) => {
    setMoods([...moods, mood]);
  };

  const deleteMood = (index) => {
    setLastDeletedMood(moods[index]);
    setMoods(moods.filter((_, i) => i !== index));
  };

  const clearMoods = () => {
    setLastDeletedMood([...moods]);
    setMoods([]);
  };

  const undoLastAction = () => {
    if (Array.isArray(lastDeletedMood)) {
      setMoods(lastDeletedMood);
    } else if (lastDeletedMood) {
      setMoods([...moods, lastDeletedMood]);
    }
    setLastDeletedMood(null);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-4">Mood Tracker</h1>
      <MoodSelector onAddMood={addMood} />
      <MoodList moods={moods} onDeleteMood={deleteMood} onClear={clearMoods} onUndo={undoLastAction} />
    </div>
  );
}

export default App;
