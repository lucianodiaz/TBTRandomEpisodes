document.addEventListener("DOMContentLoaded", function() {
    const chapters = [
        // Agregar aquí los capítulos de The Big Bang Theory
        {season: 1, episode: 1, title: "Pilot"},
    ];

    function getRandomChapter() {
        const randomIndex = Math.floor(Math.random() * chapters.length);
        const randomChapter = chapters[randomIndex];
        const chapterDisplay = document.getElementById("chapter-display");
        chapterDisplay.textContent = `Temporada ${randomChapter.season}, Episodio ${randomChapter.episode}: ${randomChapter.title}`;
    }

    window.getRandomChapter = getRandomChapter;
});