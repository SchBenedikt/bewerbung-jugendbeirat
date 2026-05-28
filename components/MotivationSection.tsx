export default function MotivationSection() {
  return (
    <section id="motivation" className="section section--accent panel" aria-label="Motivation">
      <div className="section__inner">
        <div className="section__label stagger" style={{ color: 'rgba(255,255,255,0.7)' }}>
          # Warum wir?
        </div>
        <h2 className="section__title stagger" style={{ color: 'var(--yellow)' }}>
          Unsere Motivation
        </h2>

        <div className="comic-panel panel stagger">
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 20,
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-bangers), cursive',
                fontSize: '2rem',
                color: 'var(--red)',
                lineHeight: 1,
                flexShrink: 0,
              }}
            >
              &#8220;
            </span>
            <p
              style={{
                fontSize: 'clamp(1rem, 1.8vw, 1.1rem)',
                lineHeight: 2,
                color: '#333',
                margin: 0,
                fontStyle: 'italic',
              }}
            >
              Wir w&uuml;rden uns freuen, Teil des Jugendbeirats 2026 zu werden,
              und bei einem Wettbewerb mitzuhelfen, der andere f&uuml;r gro&szlig;artige,
              multimediale Projekte auszeichnet. Wir w&uuml;rden gerne mithelfen, den Deutschen
              Multimediapreis bekannter zu machen, sowohl beim Abschlussevent als
              auch bei der Weiterentwicklung des Wettbewerbs, damit
              auch in Zukunft so tolle multimediale Projekte mit ihrem teils riesigen Potential
              eine mindestens genauso sch&ouml;ne und einmalige Veranstaltung erleben k&ouml;nnen
              <strong style={{ color: 'var(--red)' }}> wie wir</strong> damals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
