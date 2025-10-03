import { useState } from "react";
import { useFetch } from "./hooks/useFetch";

export default function QuranViewer() {
  const [surah, setSurah] = useState(2);
  const [ayah, setAyah] = useState(255);

  const { data, loading, error } = useFetch(
    () =>
      fetch(`https://api.alquran.cloud/v1/ayah/${surah}:${ayah}`)
        .then((res) => res.json())
        .then((json) => json.data),
    [surah, ayah]
  );

  return (
    <div className="p-6 bg-white rounded-xl shadow">
      <h2 className="text-xl font-bold mb-2">Quran Viewer</h2>

      {loading && <p className="text-gray-500">Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      {data && (
        <>
          <p className="text-2xl mb-4">{data.text}</p>
          <p className="text-sm text-gray-600">
            {data.surah.englishName} – Ayah {data.numberInSurah}
          </p>
        </>
      )}

      <div className="mt-4 flex gap-2">
        <button
          onClick={() => setAyah((a) => Math.max(a - 1, 1))}
          className="px-3 py-2 bg-gray-200 rounded"
        >
          Prev
        </button>
        <button
          onClick={() => setAyah((a) => a + 1)}
          className="px-3 py-2 bg-gray-200 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
}
