const filmes = {
    jan: [
        {
            title: "Catch Me If You Can",
            poster: "https://www.themoviedb.org/t/p/w600_and_h900_face/pSaqcj3pwTKt34cyn6NrBE7V4eH.jpg"
        },
        {
            title: "American Psycho",
            poster: "https://www.themoviedb.org/t/p/w600_and_h900_face/d3U7k4hBYgFW7pv4hXUVwkMvum0.jpg"
        },
        {
            title: "Matrix",
            poster: "https://www.themoviedb.org/t/p/w600_and_h900_face/dqFTOD2Al6ovvDi046mQqnLBLwc.jpg"
        },
        {
            title: "Bring Them Down",
            poster: "https://www.themoviedb.org/t/p/w600_and_h900_face/2jskL5eOFTQknpRalJ4chVYyuFo.jpg"
        }
    ],

    fev: [],
    mar: [],
    abr: [],
    mai: [],
    jun: [],
    jul: [],
    ago: [],
    set: [],
    out: [],
    nov: [],
    dez: []
};

for (const mes in filmes) {
    const container = document.getElementById(mes);

    filmes[mes].forEach(filme => {
        const wrapper = document.createElement('div');
        wrapper.classList.add('movie');
        wrapper.dataset.title = filme.title;

        const img = document.createElement('img');
        img.src = filme.poster;
        img.loading = 'lazy';

        wrapper.appendChild(img);
        container.appendChild(wrapper);
    });
}