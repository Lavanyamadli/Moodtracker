const MoodList = ({ moods, onDeleteMood, onClear, onUndo }) => {
  return (
    <div className="mt-4 bg-white p-5 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-3">Your Mood Log</h2>
      {moods.length === 0 ? (
        <p className="text-gray-500">No moods recorded yet.</p>
      ) : (
        <>
          <ul className="space-y-2">
            {moods.map((mood, index) => (
              <li key={index} className={`p-3 rounded-lg shadow-md flex justify-between items-center ${mood.color}`}>
                <span>{mood.date}</span>
                <span className="text-xl">{mood.emoji}</span>
                <span className="font-medium">{mood.text}</span>
                <button
                  className="ml-2 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                  onClick={() => onDeleteMood(index)}
                >
                  ❌
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex gap-2">
            <button
              className="bg-red-500 text-white px-4 py-2 rounded flex-1 hover:bg-red-600"
              onClick={onClear}
            >
              Clear All
            </button>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded flex-1 hover:bg-blue-600"
              onClick={onUndo}
              disabled={!moods.length}
            >
              Undo
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default MoodList;
