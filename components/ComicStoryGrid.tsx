export default function ComicStoryGrid() {
  return (
    <section className="section section--warm panel" aria-label="Bewerbung als Comic">
      <div className="section__inner">
        <div className="section__label"># Unsere Geschichte</div>
        <h2 className="section__title">Bewerbung als Comic</h2>

        <div className="comic-image-wrap panel stagger">
          <img
            src="/comic.png"
            alt="Comic-Bewerbung von Vinzenz &amp; Benedikt Schächner für den Jugendbeirat 2026"
            className="comic-image"
          />
        </div>
      </div>
    </section>
  );
}
