function smoothAnchorScrolls() {
    const anchors = Array.from(document.body.querySelectorAll('a')).filter(a => {
        const href = a.getAttribute('href');
        return href && href.includes('#') && href.length > 1;
    });
    const regex = /#(.)+/gm;
    anchors.forEach((anchor: Element) => {
        anchor.addEventListener('click', function (e) {
            const part = anchor.getAttribute('href');
            if (!part) {
                return;
            }
            const hash = part.match(regex);
            if (!hash || hash.length < 1) {
                return;
            }
            const theWhat = document.body.querySelector(hash[0]);
            if (!theWhat) {
                return;
            }
            e.preventDefault();
            const yOffset = -150;
            const scrollCoords = theWhat.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({
                top: scrollCoords,
                behavior: 'smooth'
            });
        });
    });
}
