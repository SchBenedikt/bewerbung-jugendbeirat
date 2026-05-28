"use client";

export default function ComicStoryGrid() {
  return (
    <section className="section section--warm panel">
      <div className="section__inner">
        <div className="section__label"># Unsere Geschichte</div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px' }} className="mb-24">
          <h2 className="section__title" style={{ margin: 0 }}>Bewerbung als Comic</h2>
        </div>

        <div style={{ textAlign: 'center' }}>
          <img
            src="/comic.png"
            alt="Bewerbung Comic"
            style={{ maxWidth: '100%', height: 'auto', border: '4px solid #1A1A1A' }}
          />
        </div>
      </div>
    </section>
  );
}
