import { BookOpen, Sparkles, RefreshCw } from 'lucide-react';
import { useFetch } from '../components/Task/hooks/useFetch';
import { quranAPI } from '../services/quranApi';

export default function QuranAyah() {
  const { data: ayah, loading, refetch } = useFetch(
    () => quranAPI.getAyahOfTheDay(),
    []
  );

  return (
    <div className="mb-8 relative overflow-hidden">
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 rounded-2xl shadow-2xl p-8 text-white relative">
        <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full -ml-16 -mb-16"></div>

        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-yellow-300" />
                  Ayah of the Moment
                </h3>
                {ayah && (
                  <p className="text-emerald-100 text-sm">
                    Surah {ayah.surah} ({ayah.surahNumber}:{ayah.numberInSurah})
                  </p>
                )}
              </div>
            </div>

            <button
              onClick={refetch}
              disabled={loading}
              className="p-3 bg-white/20 hover:bg-white/30 rounded-full transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed group"
              aria-label="Refresh Ayah"
            >
              <RefreshCw className={`w-5 h-5 ${loading ? 'animate-spin' : 'group-hover:rotate-180 transition-transform duration-500'}`} />
            </button>
          </div>

          {loading && !ayah && (
            <div className="text-center py-8">
              <div className="inline-block animate-pulse">
                <BookOpen className="w-12 h-12 mx-auto mb-3 opacity-50" />
                <p className="text-emerald-100">Loading ayah...</p>
              </div>
            </div>
          )}

          {ayah && (
            <div className="space-y-5 animate-fadeIn">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <p className="text-2xl md:text-3xl leading-loose text-center mb-4 font-arabic" dir="rtl">
                  {ayah.textArabic}
                </p>
                <div className="w-16 h-1 bg-yellow-300 mx-auto my-4 rounded-full"></div>
                <p className="text-base md:text-lg leading-relaxed font-light text-center italic">
                  "{ayah.textEnglish}"
                </p>
              </div>

              <div className="flex items-center justify-center gap-2 text-emerald-100 text-sm flex-wrap">
                <span className="px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">
                  {ayah.surahArabic}
                </span>
                <span>•</span>
                <span className="px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">
                  {ayah.surah}
                </span>
                <span>•</span>
                <span className="px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">
                  Verse {ayah.numberInSurah}
                </span>
              </div>
            </div>
          )}

          {!loading && !ayah && (
            <div className="text-center py-8">
              <p className="text-emerald-100">Unable to load ayah. Please try refreshing.</p>
              <button
                onClick={refetch}
                className="mt-4 px-6 py-2 bg-white/20 hover:bg-white/30 rounded-full transition-all duration-300"
              >
                Try Again
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
