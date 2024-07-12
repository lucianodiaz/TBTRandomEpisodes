document.addEventListener("DOMContentLoaded", function() {
    let chapters = [];

    function loadCSV() {
        $.ajax({
            url: 'big_bang_theory_episodes.csv',
            dataType: 'text',
        }).done(function(data) {
            chapters = $.csv.toObjects(data);
        }).fail(function(jqXHR, textStatus, errorThrown) {
            console.error('Error al cargar el archivo CSV:', textStatus, errorThrown);
        });
    }

    function getRandomChapter() {
        if (chapters.length === 0) {
            console.error('La lista de capítulos está vacía.');
            return;
        }
        const randomIndex = Math.floor(Math.random() * chapters.length);
        const randomChapter = chapters[randomIndex];
        const chapterDisplay = document.getElementById("chapter-display");
        chapterDisplay.textContent = `Temporada ${randomChapter.season}, Episodio ${randomChapter.episode_num_in_season}: ${randomChapter.title}`;
    }

    loadCSV();
    window.getRandomChapter = getRandomChapter;
});