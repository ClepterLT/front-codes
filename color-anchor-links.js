function colorActiveAnchorLink () {
  const anchorLinks = document.querySelectorAll(".js-anchor-link");
  const textParagraphs = document.querySelectorAll(".js-anchored-text-paragraph");
  
  const options = {
        root: null,
        threshold: 1,
  }
  
  const handleIntersection = function(entries) {
        entries.forEach(function(entry) {
            if(entry.isIntersecting) {
                const intersectingParagraph = entry.target;
                const intersectingParagraphId = `#${intersectingParagraph.getAttribute('id')}`;
                anchorLinks.forEach(function(link) {
                    const linkHref = link.getAttribute('href');
                    link.classList.remove("anchor-link--active");
                    if(intersectingParagraphId === linkHref) {
                        link.classList.add("anchor-link--active");
                    }
                });
            }
        });
    }
  
  const linkObserver = new IntersectionObserver(handleIntersection, options);
  
  textParagraphs.forEach(function(p) {
        const paragraphId = p.getAttribute('id');
        if(paragraphId) {
            linkObserver.observe(p);
        }
    });
}
