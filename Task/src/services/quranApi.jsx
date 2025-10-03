export const quranAPI = {
    async getRandomAyah() {
      try {
        const randomAyahNumber = Math.floor(Math.random() * 6236) + 1;
  
        const [arabicResponse, englishResponse] = await Promise.all([
          fetch(`https://api.alquran.cloud/v1/ayah/${randomAyahNumber}`),
          fetch(`https://api.alquran.cloud/v1/ayah/${randomAyahNumber}/en.sahih`)
        ]);
  
        const arabicData = await arabicResponse.json();
        const englishData = await englishResponse.json();
  
        if (arabicData.code === 200 && englishData.code === 200) {
          const arabicAyah = arabicData.data;
          const englishAyah = englishData.data;
  
          return {
            textArabic: arabicAyah.text,
            textEnglish: englishAyah.text,
            surah: arabicAyah.surah.englishName,
            surahArabic: arabicAyah.surah.name,
            numberInSurah: arabicAyah.numberInSurah,
            ayahNumber: arabicAyah.number,
            surahNumber: arabicAyah.surah.number,
          };
        }
        throw new Error('Failed to fetch ayah');
      } catch (error) {
        console.error('Error fetching ayah:', error);
        return null;
      }
    },
  
    async getAyahOfTheDay() {
      return this.getRandomAyah();
    },
  };
  