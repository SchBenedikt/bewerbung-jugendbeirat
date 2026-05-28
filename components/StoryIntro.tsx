export default function StoryIntro() {
  return (
    <section className="section section--warm panel" aria-label="Unsere Geschichte">
      <div className="section__inner">
        <div className="section__label stagger"># Unsere Bewerbung</div>
        <h2 className="section__title stagger">Bewerbung</h2>

        <div className="comic-panel panel stagger">
          <p style={{ fontSize: '1.05rem', lineHeight: 2, color: '#333' }}>
            Vor zwei Jahren haben wir zusammen den <strong>deutschen Multimediapreis</strong> mit
            unserem Projekt <strong>&bdquo;Meum Diarium – Ein Feldherr als Influencer&rdquo;</strong> gewonnen.
            Hierfür haben wir eine Website erstellt, in der
            <strong> Gaius Julius Caesar</strong> aus seiner subjektiven Sicht ein Tagebuch über
            seine Feldzüge und andere Ereignisse geschrieben hat. Mit viel Liebe zum Detail haben
            wir unter anderem eine <strong>KI implementiert</strong>, die so antwortet, wie
            es Caesar vermutlich gemacht hätte.
          </p>

          <p className="mt-16" style={{ fontSize: '1.05rem', lineHeight: 2, color: '#333' }}>
            Und genau dafür interessieren wir uns am meisten: Mit
            <strong> neuen digitalen Medien</strong>, technischen Fortschritten und mit KI,
            speziell aber auch im Bereich <strong>Self-Hosting</strong>. Wir haben zuhause von
            Grund auf unseren eigenen Server mit eigener Cloud-Instanz &mdash; genauso wie
            Google Drive oder iCloud &mdash; und mehreren Webseiten mit viel Liebe aufgebaut.
          </p>

          <div
            style={{
              width: '60px',
              height: '3px',
              background: 'var(--red)',
              margin: '20px 0',
              borderRadius: 2,
            }}
          />

          <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--red)', fontWeight: 700, fontStyle: 'italic' }}>
            Genau das – und hoffentlich auch diese Seite – zeigt am besten, wie sehr wir uns für neue, digitale Medien und kreative multimediale Projekte interessieren.
          </p>
        </div>
      </div>
    </section>
  );
}
