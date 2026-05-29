export default function StoryIntro() {
  return (
    <section className="section section--warm panel" aria-label="Unsere Geschichte">
      <div className="section__inner">
        <div className="section__label stagger"># Unsere Bewerbung</div>
        <h2 className="section__title stagger">Bewerbung</h2>

        <div className="comic-panel panel stagger">
          <p style={{ fontSize: '1.05rem', lineHeight: 2, color: '#333' }}>
            Vor zwei Jahren haben wir - Vinzenz und Benedikt Schächner - mit
            unserem Projekt <strong>&bdquo;Meum Diarium – Ein Feldherr als Influencer&rdquo;</strong> zusammen den <strong>deutschen Multimediapreis</strong>  gewonnen.
            Hierfür haben wir eine Website erstellt, in der
            <strong> Gaius Julius Caesar</strong> aus seiner subjektiven Sicht ein unterhaltsames Tagebuch über
            seine Feldzüge und andere tatsächlich stattgefundenen historischen Ereignisse geschrieben hat. Mit viel Liebe zum Detail haben
            wir unter anderem eine <strong>KI implementiert</strong>, die so antwortet, wie
            es Caesar vermutlich gemacht hätte.
          </p>

          <p className="mt-16" style={{ fontSize: '1.05rem', lineHeight: 2, color: '#333' }}>
            Genau das ist immer noch eine große Leidenschaft von uns: Egal ob wir privat etwas mit
            <strong> digitalen Medien</strong> machen, als Technik-Team an unserer Schule Verantsaltungen organisieren oder selbst auf der Bühne stehen: Wir lieben es, Projekte umzusetzten oder uns über kreative Ideen auszutauschen.
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
            Als ehemalige Preisträger würden wir - Benedikt und Vinzenz - uns sehr freuen, wenn wir uns als Jugendbeirat in den Wettbewerb einbringen und mithelfen können. 
          </p>
        </div>
      </div>
    </section>
  );
}
