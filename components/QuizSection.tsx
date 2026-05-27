'use client';

import { useState } from 'react';

const questions = [
  {
    question: 'Welchen Multimedia-Preis haben Vinzenz & Benedikt gewonnen?',
    options: [
      { text: 'Crossmedia-Wettbewerb des BR', explanation: 'Genau! Wir haben den Crossmedia-Wettbewerb des Bayerischen Rundfunks gewonnen. Das zeigt: Wir kennen die Medienlandschaft, wissen wie Storytelling funktioniert und haben bewiesen, dass wir junge Perspektiven multimedial umsetzen können – genau das braucht der Jugendbeirat.' },
      { text: 'Jugend forscht', explanation: 'Nicht ganz – Naturwissenschaften sind weniger unser Ding. Unser Fokus liegt auf Medien und Technik. Deshalb passt der Jugendbeirat perfekt zu uns: Wir wollen genau diese Medienkompetenz einbringen.' },
      { text: 'Bundeswettbewerb Informatik', explanation: 'Informatik liegt uns zwar (wir programmieren leidenschaftlich), aber unseren Preis haben wir im Multimedia-Bereich gewonnen. Genau diese Kombination aus Technik und Medien macht uns stark für den Jugendbeirat.' },
      { text: 'Deutscher Kurzfilmpreis', explanation: 'Film ist spannend, aber wir sind breiter aufgestellt: Multimedia bedeutet für uns Text, Bild, Code und KI. Der Jugendbeirat profitiert von dieser Vielfalt.' },
    ],
    correct: 0,
  },
  {
    question: 'Wie heißt ihr Schulfach-Projekt über Caesar?',
    options: [
      { text: "Caesar's Chronicle", explanation: 'Nicht ganz – aber der Name klingt ähnlich. Unser Projekt zeigt, wie wir Geschichte mit KI und digitalen Medien neu erzählen. Der Jugendbeirat braucht genau solche frischen Ideen, um den Multimediapreis zeitgemäß zu gestalten.' },
      { text: 'Meum Diarium', explanation: 'Richtig! Meum Diarium – Cäsars Tagebuch, mit KI zum Leben erweckt. Dieses Projekt verbindet Geschichte, Technik und Kreativität. Genau diese interdisziplinäre Denkweise wollen wir in den Jugendbeirat einbringen: Medienbildung neu denken.' },
      { text: 'Acta Caesaris', explanation: 'Knapp daneben! Unser Projekt heißt Meum Diarium. Es zeigt, wie wir komplexe Themen einfach und kreativ aufbereiten können – eine Fähigkeit, die im Jugendbeirat Gold wert ist, wenn es um Öffentlichkeitsarbeit geht.' },
      { text: 'De Bello Gallico', explanation: 'Das ist das Original von Caesar – unser Projekt hat einen kreativeren Ansatz gewählt. Wir haben gezeigt, dass wir klassische Inhalte in moderne, multimediale Formate übersetzen können. Genau das macht uns geeignet für den Jugendbeirat.' },
    ],
    correct: 1,
  },
  {
    question: 'Was betreiben sie zuhause auf eigener Hardware?',
    options: [
      { text: 'Minecraft-Server', explanation: 'Auch lustig, aber nein! Wir hosten unsere eigene Cloud und Server-Infrastruktur. Das zeigt: Wir übernehmen Verantwortung, verstehen Technik im Detail und können Projekte eigenständig umsetzen – ideale Voraussetzungen für den Jugendbeirat.' },
      { text: 'Eigene Cloud & Server', explanation: 'Genau! Unser eigener Server läuft zuhause – mit Cloud, Diensten und voller Kontrolle. Self-Hosting bedeutet: Wir sind technisch versiert, lösungsorientiert und scheuen uns nicht vor komplexen Projekten. Das bringt der Jugendbeirat braucht!' },
      { text: 'Crypto-Mining', explanation: 'Nein, Mining ist nicht unser Ding. Aber wir verstehen, wie Technik im Kern funktioniert. Diese technische Grundlage hilft uns, den Multimediapreis auch in Zukunft digital und innovativ zu denken.' },
      { text: 'Streaming-Plattform', explanation: 'Fast! Wir streamen zwar nicht, aber wir hosten eigene Webdienste. Medien zu konsumieren ist eine Sache – sie selbst zu betreiben eine andere. Diese aktive Gestaltung wollen wir in den Jugendbeirat einbringen.' },
    ],
    correct: 1,
  },
  {
    question: 'Womit beschäftigen sie sich am liebsten?',
    options: [
      { text: 'Künstliche Intelligenz', explanation: 'Ja! KI ist unser großes Thema – von Chatbots bis zu generativen Modellen. Wir verstehen, wie diese Technologie funktioniert und wie man sie sinnvoll einsetzt. Der Jugendbeirat profitiert von diesem Wissen, besonders bei der Bewertung von Multimedia-Projekten mit KI-Bezug.' },
      { text: 'Game Development', explanation: 'Spieleprogrammierung ist spannend, aber unser Fokus liegt auf KI und Webentwicklung. Wir wollen im Jugendbeirat vor allem unsere Medien- und Technikkompetenz einbringen – und die liegt klar im Multimedia-Bereich.' },
      { text: '3D-Druck', explanation: '3D-Druck ist cool, aber nicht unsere Hauptleidenschaft. Wir sind digital unterwegs: Code, KI, Web, Medien. Der Jugendbeirat dreht sich um Multimedia – da passen unsere Skills perfekt.' },
      { text: 'Robotik', explanation: 'Robotik ist interessant, aber wir sind eher in der digitalen Welt zuhause. Unsere Stärke liegt in Software, KI und Medienproduktion – genau das, was der Jugendbeirat braucht, um den Multimediapreis weiterzuentwickeln.' },
    ],
    correct: 0,
  },
  {
    question: 'In welcher Schule sind sie zuhause?',
    options: [
      { text: 'München', explanation: 'Große Stadt, aber wir kommen vom Land! Am König-Karlmann-Gymnasium in Altötting haben wir gelernt, dass man auch abseits der Metropolen Großes erreichen kann. Der Jugendbeirat braucht genau diese Perspektive: Medienkompetenz für alle Regionen.' },
      { text: 'Altötting', explanation: 'Stimmt! König-Karlmann-Gymnasium Altötting. Wir kommen aus einer kleineren Stadt und haben trotzdem (oder gerade deshalb) den Multimediapreis gewonnen. Wir zeigen: Medienbildung ist überall möglich – und das wollen wir im Jugendbeirat fördern.' },
      { text: 'Passau', explanation: 'Nah dran, aber nicht ganz! Wir gehen in Altötting zur Schule. Unsere Region ist ländlich geprägt – und genau das ist unsere Stärke: Wir bringen die Perspektive junger Menschen aus ganz Bayern in den Jugendbeirat.' },
      { text: 'Salzburg', explanation: 'Salzburg ist schön, aber wir sind auf der bayerischen Seite der Grenze zuhause! Unser Schulstandort Altötting zeigt: Man muss nicht in der Großstadt sein, um multimedial Großes zu leisten.' },
    ],
    correct: 1,
  },
  {
    question: 'Welches Framework nutzen sie am liebsten?',
    options: [
      { text: 'Vue.js', explanation: 'Nicht ganz – Vue ist gut, aber wir schwören auf React und Next.js. Wir haben diese Seite damit gebaut! Unsere Webentwicklung-Skills zeigen: Wir können nicht nur über Medien reden, sondern sie selbst gestalten. Das ist genau das Mindset des Jugendbeirats.' },
      { text: 'React / Next.js', explanation: 'Richtig! React und Next.js sind unsere Werkzeuge – diese Bewerbungsseite ist der beste Beweis. Wir können nicht nur Konzepte entwickeln, sondern sie auch technisch umsetzen. Der Jugendbeirat profitiert von dieser Hands-on-Mentalität.' },
      { text: 'Angular', explanation: 'Zu enterprise für uns! Wir setzen auf moderne, flexible Frameworks wie Next.js. Unsere Herangehensweise: schnell, kreativ, praktisch – genau das braucht es, um den Multimediapreis für Jugendliche relevant zu halten.' },
      { text: 'Svelte', explanation: 'Svelte ist spannend, aber wir arbeiten lieber mit dem React-Ökosystem. Wichtig ist: Wir haben die Wahl und verstehen, welches Tool für welches Projekt passt. Diese Entscheidungskompetenz bringen wir in den Jugendbeirat ein.' },
    ],
    correct: 1,
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

  if (finished) {
    const percent = Math.round((score / questions.length) * 100);
    let text = '';
    if (percent === 100) text = 'Perfekt! Du kennst uns besser als wir uns selbst!';
    else if (percent >= 80) text = 'Fast perfekt! Du bist echt gut informiert.';
    else if (percent >= 60) text = 'Gar nicht schlecht! Du weißt schon einiges über uns.';
    else if (percent >= 40) text = 'Na immerhin die Hälfte – weiter so!';
    else text = 'Hmm, da gibt es noch Nachholbedarf. ;)';

    return (
      <section className="section section--warm panel" aria-label="Quiz Ergebnis">
        <div className="section__inner" style={{ textAlign: 'center' }}>
          <div className="comic-panel panel stagger" style={{ maxWidth: 500, margin: '0 auto', padding: '40px 36px' }}>
            <div style={{ fontFamily: 'var(--font-bangers), cursive', fontSize: '3rem', color: 'var(--red)', lineHeight: 1, marginBottom: 8 }}>
              {score}/{questions.length}
            </div>
            <div style={{ width: 60, height: 4, background: 'var(--red)', margin: '0 auto 20px', borderRadius: 2 }} />
            <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#555', marginBottom: 24 }}>{text}</p>
            <button onClick={handleRestart} className="btn">&#8635; Nochmal spielen</button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="quiz" className="section section--warm panel" aria-label="Quiz">
      <div className="section__inner">
        <div className="section__label stagger"># Quiz</div>
        <h2 className="section__title stagger">Was wisst ihr &uuml;ber uns?</h2>

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
                  {selected !== null && idx === q.correct && ' \u2713'}
                  {selected !== null && idx === selected && idx !== q.correct && ' \u2717'}
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
                {selected === q.correct ? '\u2713 RICHTIG' : '\u2717 LEIDER FALSCH'}
              </span>
              {q.options[selected!].explanation}
            </div>
          )}

          {selected !== null && (
            <button
              onClick={handleNext}
              className="btn"
              style={{ marginTop: 20, width: '100%', textAlign: 'center' }}
            >
              {current < questions.length - 1 ? 'N\u00e4chste Frage \u2192' : 'Ergebnis anzeigen \u2192'}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
