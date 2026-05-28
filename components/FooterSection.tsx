export default function FooterSection() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner">
        <div className="footer__burst" aria-hidden="true">
          {Array.from({ length: 8 }).map((_, i) => (
            <span className="footer__ray" key={i} />
          ))}
        </div>

        <div className="footer__halftone" aria-hidden="true" />

        <div className="footer__content">
          <div className="footer__badge">&#9733; Danke f&uuml;rs Anschauen &#9733;</div>

          <h4 className="footer__title">BEWERBUNG</h4>
          <span className="footer__subtitle">JUGENDBEIRAT 2026</span>

          <div className="footer__divider" aria-hidden="true" />

          <div className="footer__names">Vinzenz &amp; Benedikt Sch&auml;chner</div>
          <div className="footer__links" aria-label="Websites">
            <a className="footer__link" href="https://vinzenz.schächner.de" target="_blank" rel="noreferrer">
              vinzenz.schächner.de
            </a>
            <a className="footer__link" href="https://benedikt.schächner.de" target="_blank" rel="noreferrer">
              benedikt.schächner.de
            </a>
          </div>
          <p className="footer__school">K&ouml;nig-Karlmann-Gymnasium Alt&ouml;tting &middot; Bayern</p>

          <div className="footer__divider" aria-hidden="true" />

          <div className="copyright">&copy; 2026 Vinzenz &amp; Benedikt Sch&auml;chner.</div>
        </div>
      </div>
    </footer>
  );
}
