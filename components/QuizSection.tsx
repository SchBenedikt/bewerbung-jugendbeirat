'use client';

import { useState } from 'react';

const questions = [
  {
    question: 'Welchen Multimedia-Preis haben Vinzenz & Benedikt noch gewonnen?',
    options: [
      { text: 'Crossmedia-Wettbewerb des BR' },
      { text: 'Jugend forscht' },
      { text: 'Bundeswettbewerb Informatik' },
      { text: 'Deutscher Kurzfilmpreis' },
    ],
    correct: 0,
    explanation: 'Wir haben auch den Crossmedia-Wettbewerb des Bayerischen Rundfunks mehrmals gewonnen. Das zeigt nochmal ganz klar, wie sehr wir multimediale Projekte lieben!',
  },
  {
    question: 'Wie heißt unser Projekt über Caesar?',
    options: [
      { text: "Caesar's Chronicle" },
      { text: 'Meum Diarium' },
      { text: 'Acta Caesaris' },
      { text: 'De Bello Gallico' },
    ],
    correct: 1,
    explanation: '"Meum Diarium – Gaius Juluius Caesar als Influencer" ist unser Projekt. Es verbindet alte Geschichte, subjektive Wahrnehmungen und unterhaltsamen Inhalt mit neuen Technologien.',
  },
  {
    question: 'Womit beschäftigen wir uns leidenschaftlich?',
    options: [
      { text: 'Minecraft-Server' },
      { text: 'Eigene Cloud & Server' },
      { text: 'Crypto-Mining' },
      { text: 'Streaming-Plattform' },
    ],
    correct: 1,
    explanation: 'Zuhause läuft bei uns unser eigener Server mit eigener Cloud. Während andere Computerspiele spielen, tüfteln wir lieber an Servern und Software herum. Zudem programmieren wir leidenschaftlich gerne!',
  },

];

const baseBtn: Record<string, string | number> = {
  width: '100%',
  borderWidth: 3,
  borderStyle: 'solid',
  borderColor: 'var(--black)',
  borderRadius: 12,
  padding: '14px 20px',
  textAlign: 'left',
  fontSize: '0.95rem',
  fontWeight: 500,
  cursor: 'pointer',
  transition: 'all 0.2s',
  fontFamily: 'inherit',
  background: 'white',
  color: '#333',
  boxShadow: '3px 3px 0 var(--black)',
};

export default function QuizSection() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const q = questions[current];
  const percent = finished ? Math.round((score / questions.length) * 100) : 0;
  const resultText =
    percent === 100
      ? 'Perfekt! Du kennst uns schon ziemlich gut!'
      : percent >= 80
        ? 'Fast perfekt! Du bist echt gut informiert.'
        : percent >= 60
          ? 'Gar nicht schlecht! Du weißt schon einiges über uns.'
          : percent >= 40
            ? 'Na immerhin die Hälfte – weiter so!'
            : 'Lies dir die Seite am Besten nochmal durch!. ;)';

  function handleSelect(idx: number) {
    if (selected !== null) return;
    setSelected(idx);
    if (idx === q.correct) setScore((s) => s + 1);
  }

  function handleNext() {
    if (current < questions.length - 1) {
      setCurrent((c) => c + 1);
      setSelected(null);
    } else {
      setFinished(true);
    }
  }

  function handleRestart() {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  }

  return (
    <section id="quiz" className="section section--warm panel" aria-label={finished ? 'Quiz Ergebnis' : 'Quiz'}>
      <div className="section__inner">
        <div style={{ textAlign: 'center' }}>
          <div className="section__label stagger"># Quiz</div>
          <h2 className="section__title stagger">Was wisst ihr &uuml;ber uns?</h2>

          {finished ? (
            <div className="comic-panel panel stagger" style={{ maxWidth: 500, margin: '0 auto', padding: '40px 36px' }}>
              <div style={{ fontFamily: 'var(--font-bangers), cursive', fontSize: '3rem', color: 'var(--red)', lineHeight: 1, marginBottom: 8 }}>
                {score}/{questions.length}
              </div>
              <div style={{ width: 60, height: 4, background: 'var(--red)', margin: '0 auto 20px', borderRadius: 2 }} />
              <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#555', marginBottom: 24 }}>{resultText}</p>
              <button onClick={handleRestart} className="btn">&#8635; Nochmal spielen</button>
            </div>
          ) : (
            <div className="comic-panel panel stagger" style={{ padding: '32px 36px', maxWidth: 640, margin: '0 auto' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 20,
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-bangers), cursive',
                    fontSize: '0.85rem',
                    color: 'var(--red)',
                    letterSpacing: 2,
                  }}
                >
                  Frage {current + 1} / {questions.length}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-bangers), cursive',
                    fontSize: '0.85rem',
                    color: '#999',
                    letterSpacing: 1,
                  }}
                >
                  Punkte: {score}
                </span>
              </div>

              <p
                style={{
                  fontSize: 'clamp(1.05rem, 2vw, 1.2rem)',
                  fontWeight: 700,
                  lineHeight: 1.5,
                  color: 'var(--dark)',
                  marginBottom: 24,
                }}
              >
                {q.question}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {q.options.map((opt, idx) => {
                  let style = { ...baseBtn };

                  if (selected !== null) {
                    style.boxShadow = 'none';
                    if (idx === q.correct) {
                      style.background = '#d4edda';
                      style.borderColor = '#28a745';
                      style.color = '#155724';
                      style.fontWeight = 700;
                    } else if (idx === selected) {
                      style.background = '#f8d7da';
                      style.borderColor = '#dc3545';
                      style.color = '#721c24';
                    } else {
                      style.background = '#f8f8f8';
                      style.borderColor = '#ccc';
                      style.color = '#999';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelect(idx)}
                      disabled={selected !== null}
                      style={style}
                      onMouseEnter={(e) => {
                        if (selected === null) {
                          e.currentTarget.style.transform = 'translate(-2px, -2px)';
                          e.currentTarget.style.boxShadow = '5px 5px 0 var(--black)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (selected === null) {
                          e.currentTarget.style.transform = 'none';
                          e.currentTarget.style.boxShadow = '3px 3px 0 var(--black)';
                        }
                      }}
                    >
                      {String.fromCharCode(65 + idx)}. {opt.text}
                      {selected !== null && idx === q.correct && ' ✓'}
                      {selected !== null && idx === selected && idx !== q.correct && ' ✗'}
                    </button>
                  );
                })}
              </div>

              {selected !== null && (
                <div
                  style={{
                    marginTop: 20,
                    background: '#fffbe6',
                    border: '3px solid var(--yellow)',
                    borderRadius: 12,
                    padding: '16px 20px',
                    fontSize: '0.9rem',
                    lineHeight: 1.6,
                    color: '#555',
                  }}
                >
                  <span style={{ fontFamily: 'var(--font-bangers), cursive', color: 'var(--red)', fontSize: '0.85rem', letterSpacing: 1, display: 'block', marginBottom: 4 }}>
                    {selected === q.correct ? '✓ RICHTIG' : '✗ LEIDER FALSCH'}
                  </span>
                  {q.explanation}
                </div>
              )}

              {selected !== null && (
                <button
                  onClick={handleNext}
                  className="btn"
                  style={{ marginTop: 20, width: '100%', textAlign: 'center' }}
                >
                  {current < questions.length - 1 ? 'Nächste Frage →' : 'Ergebnis anzeigen →'}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
