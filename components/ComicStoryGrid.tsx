export default function ComicStoryGrid() {
  return (
    <section className="section section--warm panel">
      <div className="section__inner">
        <div className="section__label stagger"># Unsere Geschichte</div>
        <h2 className="section__title stagger">Bewerbung als Comic</h2>

        {/* Cover / Intro Panel - full width */}
        <div className="comic-cover panel stagger" data-delay="1">
          <div className="comic-cover__halftone" aria-hidden="true" />
          <span className="comic-cover__burst" aria-hidden="true">★</span>
          <div className="comic-cover__content">
            <h3 className="comic-cover__title">BEWERBUNG</h3>
            <span className="comic-cover__subtitle">JUGENDBEIRAT 2026</span>
            <div className="comic-cover__divider" />
            <p className="comic-cover__author">Vinzenz &amp; Benedikt Schächner</p>
            <div className="comic-cover__tags">
              <span>★ Deutscher Multimediapreis ★</span>
            </div>
          </div>
          <svg className="comic-cover__logo" viewBox="0 0 200 120" aria-hidden="true">
            <rect x="20" y="10" width="160" height="30" fill="#b80f6c" stroke="black" strokeWidth="2" rx="4" />
            <text x="100" y="28" fill="white" fontSize="8" fontWeight="bold" textAnchor="middle">MULTIMEDIAPREIS</text>
            <path d="M 85 55 L 115 55 L 110 85 L 90 85 Z" fill="#f6e05e" stroke="black" strokeWidth="2" />
            <rect x="85" y="85" width="30" height="8" fill="#4a5568" stroke="black" strokeWidth="2" />
            <path d="M 80 58 C 75 58 75 68 85 68" fill="none" stroke="black" strokeWidth="2" />
            <path d="M 120 58 C 125 58 125 68 115 68" fill="none" stroke="black" strokeWidth="2" />
            <circle cx="50" cy="70" r="8" fill="#fbd38d" stroke="black" strokeWidth="2" />
            <path d="M 45 78 L 55 78 L 55 105 L 45 105 Z" fill="#e2e8f0" stroke="black" strokeWidth="2" />
            <circle cx="150" cy="70" r="8" fill="#fbd38d" stroke="black" strokeWidth="2" />
            <path d="M 145 78 L 155 78 L 155 105 L 145 105 Z" fill="#2d3748" stroke="black" strokeWidth="2" />
          </svg>
        </div>

        <div className="comic-grid stagger">
          {/* Panel 1 - Wer sind wir? */}
          <article className="cpanel panel" data-delay="1">
            <div className="cpanel-badge">1</div>
            <div className="cpanel-header">
              <span>WER SIND WIR?</span>
            </div>
            <div className="cpanel-content">
              <div className="cspeech">
                <strong>Hi!</strong> Wir sind <strong>Vinzenz &amp; Benedikt</strong>, 17, Zwillinge — und wir lieben Technik!
              </div>
              <div className="cspeech cspeech--right">
                König-Karlmann-Gymnasium Altötting, Bayern.
              </div>
              <svg className="csvg" viewBox="0 0 200 120">
                <rect x="10" y="80" width="180" height="40" fill="#a0aec0" rx="4" stroke="black" strokeWidth="2" />
                <rect x="30" y="40" width="140" height="40" fill="#cbd5e0" stroke="black" strokeWidth="2" />
                <text x="100" y="65" fontSize="10" fontWeight="bold" textAnchor="middle">König-Karlmann-Gymnasium</text>
                <text x="100" y="75" fontSize="9" textAnchor="middle">Altötting</text>
                <circle cx="80" cy="20" r="10" fill="#fbd38d" stroke="black" strokeWidth="2" />
                <circle cx="120" cy="20" r="10" fill="#fbd38d" stroke="black" strokeWidth="2" />
                <rect x="72" y="30" width="16" height="16" fill="#E63946" stroke="black" strokeWidth="2" />
                <rect x="112" y="30" width="16" height="16" fill="#1D3557" stroke="black" strokeWidth="2" />
              </svg>
            </div>
            <div className="cpanel-footer">Zwei Brüder mit Leidenschaft für Neues.</div>
          </article>

          {/* Panel 2 - Preisgekrönt */}
          <article className="cpanel cpanel--featured panel" data-delay="2">
            <div className="cpanel-badge">2</div>
            <div className="cpanel-header cpanel-header--accent">
              <span>PREISGEKRÖNT!</span>
            </div>
            <div className="cpanel-content">
              <div className="csound" style={{ color: '#b80f6c' }}>★ HURRA! ★</div>
              <svg className="csvg" viewBox="0 0 200 120">
                <rect x="20" y="10" width="160" height="30" fill="#b80f6c" stroke="black" strokeWidth="2" rx="3" />
                <text x="100" y="28" fill="white" fontSize="8" fontWeight="bold" textAnchor="middle">DEUTSCHER MULTIMEDIAPREIS</text>
                <path d="M 85 55 L 115 55 L 110 85 L 90 85 Z" fill="#f6e05e" stroke="black" strokeWidth="2" />
                <rect x="85" y="85" width="30" height="8" fill="#4a5568" stroke="black" strokeWidth="2" />
                <path d="M 80 58 C 75 58 75 68 85 68" fill="none" stroke="black" strokeWidth="2" />
                <path d="M 120 58 C 125 58 125 68 115 68" fill="none" stroke="black" strokeWidth="2" />
                <circle cx="50" cy="70" r="8" fill="#fbd38d" stroke="black" strokeWidth="2" />
                <path d="M 45 78 L 55 78 L 55 105 L 45 105 Z" fill="#e2e8f0" stroke="black" strokeWidth="2" />
                <circle cx="150" cy="70" r="8" fill="#fbd38d" stroke="black" strokeWidth="2" />
                <path d="M 145 78 L 155 78 L 155 105 L 145 105 Z" fill="#2d3748" stroke="black" strokeWidth="2" />
              </svg>
              <div className="cspeech" style={{ fontSize: '0.75rem' }}>
                Gewonnen — als Team!
              </div>
            </div>
            <div className="cpanel-footer">2 Jahre zuvor — ein unvergesslicher Moment!</div>
          </article>

          {/* Panel 3 - Meum Diarium */}
          <article className="cpanel panel" data-delay="3">
            <div className="cpanel-badge">3</div>
            <div className="cpanel-header">
              <span>MEUM DIARIUM</span>
            </div>
            <div className="cpanel-content">
              <div className="cspeech">Wir schreiben ein Tagebuch für Caesar...</div>
              <div className="cspeech cspeech--right">...so hätte er getwittert!</div>
              <div className="csound" style={{ color: '#e53e3e' }}>KLICK!</div>
              <svg className="csvg" viewBox="0 0 200 120">
                <rect x="15" y="30" width="75" height="50" fill="#edf2f7" stroke="black" strokeWidth="2" rx="3" />
                <line x1="52" y1="80" x2="52" y2="95" stroke="black" strokeWidth="3" />
                <line x1="40" y1="95" x2="65" y2="95" stroke="black" strokeWidth="3" />
                <circle cx="52" cy="50" r="10" fill="#cbd5e0" stroke="black" strokeWidth="1.5" />
                <path d="M 45 68 C 45 58 60 58 60 68 Z" fill="#718096" stroke="black" strokeWidth="1.5" />
                <rect x="110" y="30" width="75" height="50" fill="#1a202c" stroke="black" strokeWidth="2" rx="3" />
                <line x1="147" y1="80" x2="147" y2="95" stroke="black" strokeWidth="3" />
                <line x1="135" y1="95" x2="160" y2="95" stroke="black" strokeWidth="3" />
                <line x1="118" y1="40" x2="145" y2="40" stroke="#f6e05e" strokeWidth="2" />
                <line x1="118" y1="48" x2="165" y2="48" stroke="#68d391" strokeWidth="2" />
                <line x1="118" y1="56" x2="135" y2="56" stroke="#63b3ed" strokeWidth="2" />
              </svg>
            </div>
            <div className="cpanel-footer">Wir haben Cäsars Tagebuch mit KI zum Leben erweckt.</div>
          </article>

          {/* Panel 4 - Self-Hosting */}
          <article className="cpanel panel" data-delay="1">
            <div className="cpanel-badge">4</div>
            <div className="cpanel-header">
              <span>SELF-HOSTING</span>
            </div>
            <div className="cpanel-content">
              <svg className="csvg" viewBox="0 0 200 120">
                <path d="M 50 45 C 40 45 35 55 45 65 C 40 75 55 80 65 75 C 75 80 90 75 85 65 C 95 55 85 45 75 45 Z" fill="#ebf8ff" stroke="#3182ce" strokeWidth="2" />
                <text x="63" y="65" fill="#2b6cb0" fontSize="8" fontWeight="bold">CLOUD</text>
                <rect x="120" y="25" width="55" height="65" fill="#e2e8f0" stroke="black" strokeWidth="2" rx="2" />
                <rect x="125" y="32" width="45" height="8" fill="#4a5568" stroke="black" strokeWidth="1" />
                <circle cx="132" cy="36" r="1.5" fill="#48bb78" />
                <rect x="125" y="45" width="45" height="8" fill="#4a5568" stroke="black" strokeWidth="1" />
                <circle cx="132" cy="49" r="1.5" fill="#48bb78" />
                <rect x="125" y="58" width="45" height="8" fill="#4a5568" stroke="black" strokeWidth="1" />
                <circle cx="132" cy="62" r="1.5" fill="#e53e3e" />
                <rect x="125" y="71" width="45" height="8" fill="#4a5568" stroke="black" strokeWidth="1" />
                <circle cx="132" cy="75" r="1.5" fill="#48bb78" />
                <path d="M 85 60 L 120 60" stroke="#4a5568" strokeDasharray="3,3" strokeWidth="2" />
              </svg>
              <div className="cspeech">Unser eigener Server. Eigene Cloud. Zuhause aufgebaut.</div>
              <div className="csound" style={{ color: '#3182ce' }}>BZZZ!</div>
            </div>
            <div className="cpanel-footer">Vom Server-Keller in die digitale Welt — zu zweit!</div>
          </article>

          {/* Panel 5 - KI & Medien */}
          <article className="cpanel cpanel--featured panel" data-delay="2">
            <div className="cpanel-badge">5</div>
            <div className="cpanel-header cpanel-header--accent">
              <span>KI &amp; MEDIEN</span>
            </div>
            <div className="cpanel-content">
              <div className="csound" style={{ color: '#805ad5' }}>✦ NEU ✦</div>
              <svg className="csvg" viewBox="0 0 200 120">
                <circle cx="100" cy="50" r="35" fill="#ebf8ff" stroke="#3182ce" strokeWidth="2" />
                <text x="100" y="45" fill="#2b6cb0" fontSize="9" fontWeight="bold" textAnchor="middle">KÜNSTLICHE</text>
                <text x="100" y="58" fill="#2b6cb0" fontSize="9" fontWeight="bold" textAnchor="middle">INTELLIGENZ</text>
                <circle cx="55" cy="85" r="12" fill="#fbd38d" stroke="black" strokeWidth="2" />
                <circle cx="145" cy="85" r="12" fill="#fbd38d" stroke="black" strokeWidth="2" />
                <text x="55" y="88" fontSize="8" fontWeight="bold" textAnchor="middle">🤖</text>
                <text x="145" y="88" fontSize="8" fontWeight="bold" textAnchor="middle">💻</text>
                <line x1="67" y1="85" x2="88" y2="70" stroke="black" strokeWidth="1.5" strokeDasharray="2,2" />
                <line x1="133" y1="85" x2="112" y2="70" stroke="black" strokeWidth="1.5" strokeDasharray="2,2" />
              </svg>
              <div className="cspeech cspeech--right">
                KI ist unser Steckenpferd — von Chatbots bis zu generativen Modellen!
              </div>
            </div>
            <div className="cpanel-footer">Digitale Medien und KI begeistern uns.</div>
          </article>

          {/* Panel 6 - Motivation */}
          <article className="cpanel panel" data-delay="3">
            <div className="cpanel-badge">6</div>
            <div className="cpanel-header">
              <span>JUGENDBEIRAT 2026</span>
            </div>
            <div className="cpanel-content">
              <div className="cspeech" style={{ fontWeight: 700 }}>
                Wir möchten etwas zurückgeben und mitgestalten!
              </div>
              <svg className="csvg" viewBox="0 0 200 120">
                <rect x="20" y="20" width="160" height="60" fill="#2d3748" stroke="black" strokeWidth="2" />
                <polygon points="20,20 60,80 20,80" fill="#4a5568" opacity="0.5" />
                <polygon points="180,20 140,80 180,80" fill="#4a5568" opacity="0.5" />
                <rect x="75" y="30" width="50" height="30" fill="#b80f6c" rx="2" />
                <text x="100" y="48" fill="white" fontSize="6" fontWeight="bold" textAnchor="middle">MEDIA</text>
                <circle cx="40" cy="105" r="8" fill="#2d3748" />
                <circle cx="80" cy="100" r="9" fill="#1a202c" />
                <circle cx="120" cy="102" r="8" fill="#2d3748" />
                <circle cx="160" cy="105" r="9" fill="#1a202c" />
                <rect x="25" y="112" width="30" height="20" fill="#2d3748" rx="5" />
                <rect x="65" y="108" width="30" height="20" fill="#1a202c" rx="5" />
                <rect x="105" y="110" width="30" height="20" fill="#2d3748" rx="5" />
                <rect x="145" y="112" width="30" height="20" fill="#1a202c" rx="5" />
              </svg>
            </div>
            <div className="cpanel-footer">Für die Zukunft der Multimediaprojekte!</div>
          </article>
        </div>

        {/* Footer note */}
        <div className="comic-outro panel stagger" data-delay="1">
          <span className="comic-outro__end">★ ENDE ★</span>
          <p>Bewerbung Jugendbeirat 2026 — Vinzenz &amp; Benedikt Schächner</p>
        </div>
      </div>
    </section>
  );
}
