export default function HeroSection() {
  return (
    <section id="hero" className="hero-section" aria-label="Hero Bereich">
      <div className="hero-halftone" aria-hidden="true">
        {Array.from({ length: 6 }).map((_, i) => (
          <div className="dot-row" key={i}>
            {Array.from({ length: 12 }).map((_, j) => (
              <span className="dot" key={j} />
            ))}
          </div>
        ))}
      </div>

      <div className="hero-burst" aria-hidden="true">
        {Array.from({ length: 12 }).map((_, i) => (
          <span className="burst-ray" key={i} />
        ))}
      </div>

      <span className="onomatopoeia onomatopoeia--boom" aria-hidden="true">ZUKUNFT!</span>
      <span className="onomatopoeia onomatopoeia--wow" aria-hidden="true">KREATIV!</span>
      <span className="onomatopoeia onomatopoeia--preis" aria-hidden="true">PREIS!</span>
      <span className="onomatopoeia onomatopoeia--wir" aria-hidden="true">WIR!</span>
      <span className="onomatopoeia onomatopoeia--start" aria-hidden="true">START!</span>
      <span className="onomatopoeia onomatopoeia--media" aria-hidden="true">MEDIA!</span>

      <span className="sparkle" aria-hidden="true" />
      <span className="sparkle" aria-hidden="true" />
      <span className="sparkle" aria-hidden="true" />
      <span className="sparkle" aria-hidden="true" />
      <span className="sparkle" aria-hidden="true" />

      <div className="hero-content">
        <h1 className="hero-title" aria-label="Bewerbung Jugendbeirat 2026">
          BEWERBUNG<br />JUGENDBEIRAT 2026
        </h1>
        <div className="hero-badge">&#9733; Deutscher Multimediapreis &#9733;</div>
      </div>
    </section>
  );
}
