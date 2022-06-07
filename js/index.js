window.sr =ScrollReveal();

    sr.reveal('#navbar', {
        duration: 1200,
        origin: 'bottom',
        distance: '-200px'
    });
    sr.reveal('.scroll-banner', {
        duration: 1300,
        origin: 'top',
        distance: '-200px'
    });
    sr.reveal('.scroll-banner1', {
        duration: 1300,
        origin: 'left',
        distance: '-50px',
        opacity: 0
    });
    sr.reveal('.scroll-footer', {
        duration: 1800,
        origin: 'bottom',
        distance: '200px',
        delay: 500,
    });

    sr.reveal('.row.primaria', {
        duration: 1300,
        origin: 'left',
        distance: '-500px',
    });

    sr.reveal('.row.bachillerato', {
        duration: 1300,
        origin: 'right',
        distance: '-500px',
    });

    sr.reveal('div.col-6.p-5.bordeRegistro', {
        duration: 1400,
        // origin: 'left',
        // distance: '-50px',
        opacity: 0
    });

    sr.reveal('main', {
        duration: 1400,
        // origin: 'left',
        // distance: '-50px',
        opacity: 0
    });