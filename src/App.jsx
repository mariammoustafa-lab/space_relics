import { useState, useEffect } from 'react'
import { ITEMS, GROUPS, RANKS, VO, RESOURCES_URL } from './data.js'

const KEY = 'nasa-relics-v2'
const VKEY = 'nasa-relics-voice'
const load = () => { try { return JSON.parse(localStorage.getItem(KEY)) || {} } catch { return {} } }

// ===== Voiceover: the browser reads the text aloud in English =====
const synth = typeof window !== 'undefined' ? window.speechSynthesis : null
const pickVoice = () => {
  const v = synth.getVoices().filter(x => x.lang && x.lang.toLowerCase().startsWith('en'))
  return v.find(x => /natural|google us|samantha|aria|jenny|daniel/i.test(x.name)) || v.find(x => x.lang === 'en-US') || v[0]
}
const stopVoice = () => { if (synth) synth.cancel() }
const say = text => {
  if (!synth) return
  synth.cancel()
  const u = new SpeechSynthesisUtterance(text)
  u.lang = 'en-US'
  u.rate = 0.95
  const v = pickVoice()
  if (v) u.voice = v
  synth.speak(u)
}
function Narrate({ text, voice }) {
  const { on, ready, tick } = voice
  useEffect(() => {
    if (!on || !ready || !text) return
    const t = setTimeout(() => say(text), 80)
    return () => { clearTimeout(t); stopVoice() }
  }, [text, on, ready, tick])
  return null
}

function Astronaut() {
  return (
    <svg className="astro" viewBox="0 0 220 250" role="img" aria-label="An astronaut waving hello">
      <defs>
        <linearGradient id="visor" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#13204d" /><stop offset="1" stopColor="#2f7f8f" /></linearGradient>
      </defs>
      <g className="float">
        <rect x="58" y="92" width="84" height="84" rx="16" fill="#9aa6cf" />
        <rect x="76" y="168" width="22" height="56" rx="10" fill="#e8ecf8" />
        <rect x="104" y="168" width="22" height="56" rx="10" fill="#e8ecf8" />
        <rect x="72" y="214" width="30" height="16" rx="7" fill="#ff7a59" />
        <rect x="100" y="214" width="30" height="16" rx="7" fill="#ff7a59" />
        <rect x="70" y="94" width="62" height="86" rx="22" fill="#f3f5fc" />
        <rect x="88" y="118" width="26" height="18" rx="4" fill="#2a3560" />
        <circle cx="96" cy="127" r="3" fill="#5de2c9" /><circle cx="106" cy="127" r="3" fill="#ff7a59" />
        <g transform="rotate(14 74 104)"><rect x="52" y="98" width="22" height="58" rx="11" fill="#e8ecf8" /><circle cx="63" cy="160" r="12" fill="#c9d1e8" /></g>
        <circle cx="101" cy="62" r="40" fill="#f3f5fc" stroke="#c9d1e8" strokeWidth="3" />
        <ellipse cx="101" cy="64" rx="29" ry="23" fill="url(#visor)" />
        <ellipse cx="91" cy="55" rx="9" ry="5" fill="#fff" opacity=".35" />
        <path d="M89 72 Q101 82 113 72" stroke="#5de2c9" strokeWidth="3" fill="none" strokeLinecap="round" />
        <g className="wave"><rect x="122" y="54" width="22" height="58" rx="11" fill="#e8ecf8" /><circle cx="133" cy="50" r="12" fill="#c9d1e8" /></g>
      </g>
    </svg>
  )
}

function Mission({ item, onDone, onBack, voice }) {
  const [step, setStep] = useState(0)
  const [pick, setPick] = useState(null)
  const [bad, setBad] = useState(false)
  const q = item.quiz
  const ok = pick === q.a
  const text = step === 0 ? `${item.name}. ${item.desc}`
    : step === 1 ? (pick === null ? `Question. ${q.q}` : `${ok ? 'Correct!' : 'Not quite.'} ${item.desc}`)
    : ok ? 'Site logged. You earned one hundred points.' : 'Site logged. You can replay it to earn the points.'
  return (
    <section className="mission">
      <button className="link" onClick={onBack}>← Back to the map</button>
      <header><span className="big">{item.icon}</span><div><h2>{item.name}</h2><p>{item.group}</p></div></header>
      <ol className="steps">{['Story', 'Challenge', 'Result'].map((s, i) => <li key={s} className={i === step ? 'on' : i < step ? 'ok' : ''}>{s}</li>)}</ol>

      {step === 0 && (
        <div className="panel">
          <figure className="fig">
            {bad ? <div className="noimg">The image could not load here.</div>
              : <img src={item.img} alt={item.alt} referrerPolicy="no-referrer" onError={() => setBad(true)} />}
            <figcaption>Image: NASA. Source: <a href={item.src.url} target="_blank" rel="noreferrer">{item.src.label}</a></figcaption>
          </figure>
          <p className="fact">{item.desc}</p>
          <div className="row"><span className="muted">{item.group}</span><button className="btn" onClick={() => setStep(1)}>Take the challenge</button></div>
        </div>
      )}

      {step === 1 && (
        <div className="panel">
          <h3>{q.q}</h3>
          <div className="opts">
            {q.o.map((t, i) => (
              <button key={i} disabled={pick !== null} onClick={() => setPick(i)}
                className={'opt' + (pick !== null ? (i === q.a ? ' good' : i === pick ? ' bad' : '') : '')}>{t}</button>
            ))}
          </div>
          {pick !== null && (
            <div className="fb" role="status">
              <p><b>{ok ? 'Correct! +100 points.' : 'Not quite.'}</b> {item.desc}</p>
              <button className="btn" onClick={() => setStep(2)}>See result</button>
            </div>
          )}
        </div>
      )}

      {step === 2 && (
        <div className="panel center">
          <div className="stars" aria-label={ok ? 'Site completed' : 'Site not yet completed'}><span className={ok ? 'lit' : ''}>★</span></div>
          <h3>{ok ? '100 points' : '0 points'}</h3>
          <p className="muted">{ok ? 'Site completed.' : 'You can replay this site to earn the points.'}</p>
          <button className="btn" onClick={() => onDone({ xp: ok ? 100 : 0 })}>Log this site</button>
        </div>
      )}
      <Narrate text={text} voice={voice} />
    </section>
  )
}

export default function App() {
  const [scr, setScr] = useState('intro')
  const [cur, setCur] = useState(null)
  const [prog, setProg] = useState(load)
  const [on, setOn] = useState(() => { try { return localStorage.getItem(VKEY) !== 'off' } catch { return true } })
  const [ready, setReady] = useState(false)
  const [tick, setTick] = useState(0)
  const voice = { on, ready, tick }
  useEffect(() => { try { localStorage.setItem(KEY, JSON.stringify(prog)) } catch { /* ignore */ } }, [prog])
  useEffect(() => { try { localStorage.setItem(VKEY, on ? 'on' : 'off') } catch { /* ignore */ } }, [on])
  const toggleVoice = () => { if (!ready) { setReady(true); setOn(true) } else setOn(o => !o) }
  const total = Object.values(prog).reduce((s, p) => s + p.xp, 0)
  const done = Object.keys(prog).length
  const rank = RANKS.find(r => total >= r[0])[1]
  const save = r => {
    setProg(p => ({ ...p, [cur.id]: { xp: Math.max(r.xp, p[cur.id]?.xp || 0) } }))
    setScr('map')
  }
  const vtext = scr === 'intro' ? VO.intro
    : scr === 'map' ? (done === ITEMS.length ? VO.mapDone : VO.map)
    : scr === 'final' ? VO.final(total) : null
  return (
    <main>
      <div className="sky" aria-hidden="true" />
      <div className="vbar">
        <button className="btn sm" onClick={toggleVoice}>{ready && on ? '🔇 Mute voice' : '🔊 Turn on voice'}</button>
        {ready && on && <button className="btn sm" onClick={() => setTick(t => t + 1)}>🔁 Replay</button>}
      </div>
      {scr === 'intro' && (
        <section className="intro">
          <div className="hello"><Astronaut /><p className="bubble" lang="en">Hello, space archaeologist!</p></div>
          <p className="muted">NASA Space Apps · NASA's Discarded Equipment Storytelling</p>
          <h1>Space Relics</h1>
          <p className="lead">NASA left spacecraft, rovers and landers on the Moon, on Mars and in deep space. You are a space archaeologist. Visit all {ITEMS.length} sites and learn what was left behind.</p>
          <button className="btn big-btn" onClick={() => { setReady(true); setScr('map') }}>Start the expedition</button>
        </section>
      )}
      {scr === 'map' && (
        <section>
          <header className="bar">
            <div><h2>Site map</h2><p className="muted">Rank: {rank}</p></div>
            <div className="score"><b>{total}</b><span>points · {done}/{ITEMS.length} sites</span></div>
          </header>
          {GROUPS.map(g => (
            <div key={g}>
              <h3 className="grp">{g}</h3>
              <div className="grid">
                {ITEMS.filter(it => it.group === g).map(it => (
                  <button key={it.id} className={'card' + (prog[it.id] ? ' done' : '')} onClick={() => { setCur(it); setScr('mission') }}>
                    <img src={it.img} alt="" loading="lazy" referrerPolicy="no-referrer" onError={e => { e.currentTarget.style.display = 'none' }} />
                    <strong>{it.icon} {it.name}</strong>
                    <small>{prog[it.id] ? (prog[it.id].xp ? '★ Completed' : 'Visited') : 'Not visited'}</small>
                  </button>
                ))}
              </div>
            </div>
          ))}
          {done === ITEMS.length && <div className="center"><button className="btn big-btn" onClick={() => setScr('final')}>Mission certificate</button></div>}
        </section>
      )}
      {scr === 'mission' && cur && <Mission key={cur.id} item={cur} onDone={save} onBack={() => setScr('map')} voice={voice} />}
      {scr === 'final' && (
        <section className="intro">
          <h1>Mission complete</h1>
          <p className="lead">Your rank: <b>{rank}</b>, with {total} of {ITEMS.length * 100} points.</p>
          <p className="muted">All facts come from the Resources tab of the NASA Space Apps challenge. <a href={RESOURCES_URL} target="_blank" rel="noreferrer">Open the resources page</a></p>
          <button className="btn" onClick={() => setScr('map')}>Back to the map</button>
        </section>
      )}
      <Narrate text={vtext} voice={voice} />
      <footer>A NASA Space Apps Challenge project. All facts from the challenge Resources tab; images from the linked NASA pages. NASA does not endorse this project.</footer>
    </main>
  )
}