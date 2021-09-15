export default class SecondaryStickyNav {
    constructor() {}

    init() {

        const secondaryNav = document.querySelector('#sw-secondary-nav');

        if(secondaryNav) {

            const observedSection = secondaryNav.nextSibling;

            const secondaryNavIntersectionHandler = function(entries, observer) {
                entries.forEach((entry, index) => {
                    if(entry.isIntersecting) {
                        secondaryNav.style.position = 'sticky';
                        secondaryNav.style.top = '0';
                        observer.unobserve(observedSection);
                    } else {
                        secondaryNav.style.position = 'static';
                        secondaryNav.style.top = '0';
                    }
                });
            }

            const secondaryNavObserver = new IntersectionObserver(secondaryNavIntersectionHandler, {
                threshold: 1
            });

            secondaryNavObserver.observe(observedSection);
            
        }
    }

}
