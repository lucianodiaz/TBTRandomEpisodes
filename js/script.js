let chapters = [];

document.addEventListener("DOMContentLoaded", function() {
    function loadCSV(seriesFile) {
        $.ajax({
            url: seriesFile,
            dataType: 'text',
        }).done(function(data) {
            chapters = $.csv.toObjects(data);
            const chapterDisplay = document.getElementById("chapter-display");
            chapterDisplay.textContent = ""
        }).fail(function(jqXHR, textStatus, errorThrown) {
            console.error('Error al cargar el archivo CSV:', textStatus, errorThrown);
        });
    }

    function getRandomChapter() {
        if (chapters.length === 0) {
            console.error('Episode list is empty');
            return;
        }
        const randomIndex = Math.floor(Math.random() * chapters.length);
        const randomChapter = chapters[randomIndex];
        const chapterDisplay = document.getElementById("chapter-display");
        chapterDisplay.textContent = `Season ${randomChapter.season}, Episode ${randomChapter.episode_num_in_season}: ${randomChapter.title}`;
    }

    function onSeriesChange() {
        const seriesSelect = document.getElementById('series-select');
        const selectedSeries = seriesSelect.value;
        loadCSV(selectedSeries);
 
    }

    const seriesSelect = document.getElementById('series-select');
    seriesSelect.addEventListener('change', onSeriesChange);

    // Load the initially selected series
    onSeriesChange();

    window.getRandomChapter = getRandomChapter;
});