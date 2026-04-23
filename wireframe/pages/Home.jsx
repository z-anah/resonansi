// Homepage — supports 3 hero variants (A/B/C) driven from Tweaks
const Home = ({ t, lang, setPage, heroVariant }) => {
  const h = t.home;
  return (
    <div>
      {heroVariant === 'A' && <HeroEditorialGrid t={t} lang={lang} setPage={setPage}/>}
      {heroVariant === 'B' && <HeroSplit         t={t} lang={lang} setPage={setPage}/>}
      {heroVariant === 'C' && <HeroTypography    t={t} lang={lang} setPage={setPage}/>}

      <SectionEvents t={t} lang={lang} setPage={setPage}/>
      <SectionSpace t={t} lang={lang} setPage={setPage}/>
      <SectionVoices t={t} lang={lang}/>
      <SectionValues t={t} lang={lang}/>
      <SectionFind t={t} lang={lang}/>
      <SectionJoinCTA t={t} lang={lang} setPage={setPage}/>
    </div>
  );
};

/* ---------- Hero A: Editorial grid ---------- */
const HeroEditorialGrid = ({ t, lang, setPage }) => {
  const h = t.home;
  return (
    <section className="app" style={{ paddingTop:'var(--gap-4)', paddingBottom:'var(--gap-5)' }}>
      <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom: 24 }}>
        <div className="eyebrow">{h.eyebrow}</div>
        <div className="mono" style={{ fontSize: 11, color:'var(--muted)' }}>
          <span style={{ display:'inline-block', width: 8, height: 8, borderRadius:'50%', background:'var(--green)', marginRight: 8, verticalAlign:'middle' }}/>
          {lang==='id' ? 'Ruang sedang dibuka · 09.00–21.00' : 'Open now · 09:00–21:00'}
        </div>
      </div>

      {/* Headline */}
      <h1 style={{
        margin: 0,
        fontFamily: 'var(--font-display)', fontWeight: 700,
        fontSize: 'clamp(44px, 7vw, 96px)',
        lineHeight: 0.98, letterSpacing: '-0.035em',
        color: 'var(--navy)',
        maxWidth: 1200,
      }}>
        {h.h1pre}{' '}
        <span style={{
          fontFamily:'var(--font-serif)', fontStyle:'italic', fontWeight: 400,
          background:'linear-gradient(180deg, transparent 64%, var(--yellow) 64%)',
          padding:'0 6px',
        }}>{h.h1accent}</span>{' '}
        {h.h1post}
      </h1>

      <div className="r-split" style={{ marginTop: 28, alignItems:'end' }}>
        <p style={{
          margin:0, maxWidth: 560,
          fontSize: 18, lineHeight: 1.55, color:'var(--ink-2)',
        }}>{h.sub}</p>
        <div style={{ display:'flex', gap: 12, justifyContent:'flex-end', flexWrap:'wrap' }}>
          <button className="btn btn-primary" onClick={()=>setPage('about')}>
            {h.cta1} <Icon name="arrow"/>
          </button>
          <button className="btn btn-ghost" onClick={()=>setPage('activities')}>
            {h.cta2}
          </button>
        </div>
      </div>

      {/* Editorial tile grid */}
      <div className="r-hero-grid" style={{
        marginTop: 40,
      }}>
        {/* Big hero image */}
        <div style={{ gridRow:'span 2', position:'relative', borderRadius: 'var(--radius-lg)', overflow:'hidden' }}>
          <div className="placeholder" data-tone="navy" style={{ position:'absolute', inset:0, borderRadius:'var(--radius-lg)' }}>
            <div style={{
              position:'absolute', top: 20, left: 20,
              display:'flex', alignItems:'center', gap: 8, padding:'8px 12px',
              background:'rgba(0,74,120,0.55)', borderRadius: 999,
              color:'#FFF9E8', fontFamily:'var(--font-mono)', fontSize: 11, letterSpacing:'0.1em',
            }}>
              <span style={{ width: 6, height: 6, borderRadius:'50%', background:'#FF6B6B', animation:'pulse 2s infinite' }}/>
              {lang==='id' ? 'SIARAN LANGSUNG · Diskusi APBD' : 'LIVE · Budget discussion'}
            </div>
            <div className="ph-label">foto-utama-aula.jpg · 1600×1200</div>
            <div style={{
              position:'absolute', bottom: 0, left: 0, right: 0,
              padding: 24,
              background:'linear-gradient(0deg, rgba(0,50,79,0.8), transparent)',
              color:'#FFF9E8',
            }}>
              <div style={{ fontFamily:'var(--font-serif)', fontStyle:'italic', fontSize: 32, lineHeight: 1.15, maxWidth: 420 }}>
                {lang==='id'
                  ? '"Ruang publik bukan sekadar alamat. Ia sikap."'
                  : '"A public space is not just an address. It is a stance."'}
              </div>
              <div className="mono" style={{ marginTop: 12, fontSize: 11, opacity: 0.75, letterSpacing:'0.1em' }}>
                — Danang Widoyoko, ICW
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming tile */}
        <div style={{
          background:'var(--yellow)', borderRadius:'var(--radius-lg)',
          padding: 22, position:'relative', overflow:'hidden',
        }}>
          <div className="eyebrow" style={{ color:'var(--navy-900)', opacity:1 }}>
            {lang==='id' ? 'Nanti malam · 19.00' : 'Tonight · 7PM'}
          </div>
          <div style={{
            marginTop: 10,
            fontFamily:'var(--font-display)', fontWeight: 700, fontSize: 22, lineHeight: 1.2,
            color: 'var(--navy-900)',
          }}>
            {EVENTS[0].title[lang]}
          </div>
          <div style={{ position:'absolute', bottom: 16, right: 16, display:'flex', alignItems:'center', gap: 6, color:'var(--navy-900)' }}>
            <span className="mono" style={{ fontSize: 11 }}>{EVENTS[0].seats}</span>
            <Icon name="arrow-ne" size={14}/>
          </div>
          {/* Decorative shapes */}
          <svg viewBox="0 0 120 120" style={{ position:'absolute', top:-20, right:-20, width: 120, height: 120, opacity: 0.3 }}>
            <circle cx="60" cy="60" r="50" fill="none" stroke="var(--navy-900)" strokeWidth="1.5"/>
            <circle cx="60" cy="60" r="30" fill="none" stroke="var(--navy-900)" strokeWidth="1.5"/>
            <circle cx="60" cy="60" r="10" fill="var(--navy-900)"/>
          </svg>
        </div>

        {/* Values tile */}
        <div style={{
          background:'var(--pink-soft)', borderRadius:'var(--radius-lg)', padding: 22,
          display:'flex', flexDirection:'column', justifyContent:'space-between',
        }}>
          <div className="eyebrow" style={{ color:'#7A2E4B', opacity:1 }}>{lang==='id' ? 'Nilai' : 'Values'}</div>
          <div style={{
            fontFamily:'var(--font-serif)', fontStyle:'italic', fontSize: 26, lineHeight: 1.15,
            color:'#5A1C35',
          }}>
            {lang==='id' ? 'Terbuka. Aman. Kolaboratif. Kreatif.' : 'Open. Safe. Collaborative. Creative.'}
          </div>
        </div>

        {/* Stats tile */}
        <div style={{
          background:'var(--sky)', borderRadius:'var(--radius-lg)', padding: 22,
          color: 'var(--navy-900)',
        }}>
          <div className="eyebrow" style={{ color:'var(--navy-900)', opacity: 0.7 }}>{h.statsLabel}</div>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap: 14, marginTop: 12 }}>
            {h.stats.slice(0,4).map((s,i) => (
              <div key={i}>
                <div style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize: 28, letterSpacing:'-0.02em' }}>{s.n}</div>
                <div style={{ fontSize: 11, opacity: 0.75 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Room tile */}
        <div style={{ position:'relative', borderRadius:'var(--radius-lg)', overflow:'hidden' }}>
          <div className="placeholder" data-tone="green" style={{ position:'absolute', inset:0, borderRadius:'var(--radius-lg)' }}>
            <div className="ph-label">ruang-garuda.jpg</div>
            <div style={{ position:'absolute', bottom: 14, left: 14, right: 14, display:'flex', justifyContent:'space-between', alignItems:'flex-end' }}>
              <div>
                <div className="mono" style={{ fontSize: 11, color:'#1F5D39' }}>{lang==='id' ? 'Ruang Garuda' : 'Garuda Hall'}</div>
                <div style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize: 18, color:'#1F5D39', marginTop: 2 }}>60 {lang==='id' ? 'orang' : 'seats'}</div>
              </div>
              <div style={{
                background:'#FFF9E8', color:'var(--navy)', padding:'8px 12px', borderRadius: 999,
                fontFamily:'var(--font-mono)', fontSize: 11, letterSpacing:'0.08em',
              }}>{lang==='id' ? 'Pesan →' : 'Book →'}</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.4); }
        }
      `}</style>
    </section>
  );
};

/* ---------- Hero B: Split ---------- */
const HeroSplit = ({ t, lang, setPage }) => {
  const h = t.home;
  return (
    <section className="app" style={{ paddingTop:'var(--gap-4)', paddingBottom:'var(--gap-5)' }}>
      <div className="r-split" style={{ alignItems:'center', minHeight: 560 }}>
        <div>
          <div className="eyebrow">{h.eyebrow}</div>
          <h1 style={{
            margin:'18px 0 0', fontFamily:'var(--font-display)', fontWeight: 700,
            fontSize: 'clamp(40px, 5vw, 80px)', lineHeight: 0.98, letterSpacing:'-0.035em',
            color:'var(--navy)',
          }}>
            {h.h1pre}{' '}
            <span style={{ fontFamily:'var(--font-serif)', fontStyle:'italic', fontWeight:400,
              background:'linear-gradient(180deg, transparent 64%, var(--yellow) 64%)', padding:'0 6px' }}>{h.h1accent}</span>{' '}
            {h.h1post}
          </h1>
          <p style={{ marginTop: 22, fontSize: 18, lineHeight: 1.55, color:'var(--ink-2)', maxWidth: 540 }}>{h.sub}</p>
          <div style={{ marginTop: 28, display:'flex', gap: 12 }}>
            <button className="btn btn-primary" onClick={()=>setPage('about')}>{h.cta1} <Icon name="arrow"/></button>
            <button className="btn btn-ghost" onClick={()=>setPage('activities')}>{h.cta2}</button>
          </div>
          <div className="r-grid-4" style={{
            marginTop: 40, paddingTop: 24, borderTop:'1px dashed var(--line)',
          }}>
            {h.stats.map((s,i)=>(
              <div key={i}>
                <div style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize: 28, color:'var(--navy)' }}>{s.n}</div>
                <div className="mono" style={{ fontSize: 11, color:'var(--muted)', marginTop: 2 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ position:'relative', height: 600 }}>
          <div className="placeholder" data-tone="navy" style={{ position:'absolute', inset:'0 0 80px 40px', borderRadius:'var(--radius-lg)' }}>
            <div className="ph-label">hero-aula.jpg · 1200×1600</div>
          </div>
          <div style={{
            position:'absolute', bottom: 0, left: 0, width: 260, padding: 20,
            background:'var(--yellow)', borderRadius:'var(--radius-lg)',
            transform:'rotate(-2deg)',
          }}>
            <div className="mono" style={{ fontSize: 11, color:'var(--navy-900)' }}>{lang==='id' ? 'Kutipan' : 'Quote'}</div>
            <div style={{ marginTop: 8, fontFamily:'var(--font-serif)', fontStyle:'italic', fontSize: 18, color:'var(--navy-900)', lineHeight: 1.3 }}>
              {lang==='id' ? '"Bisa ngobrol soal korupsi sambil minum kopi."' : '"We can talk corruption over coffee."'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------- Hero C: Typography-first ---------- */
const HeroTypography = ({ t, lang, setPage }) => {
  const h = t.home;
  return (
    <section style={{ background:'var(--navy)', color:'#FFF9E8', padding:'var(--gap-5) 0 var(--gap-6)' }}>
      <div className="app">
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
          <div className="eyebrow" style={{ color:'var(--sky)', opacity:1 }}>{h.eyebrow}</div>
          <div className="mono" style={{ fontSize: 11, color:'var(--sky)' }}>
            RESO · 001 / {lang==='id' ? 'EDISI PEMBUKAAN' : 'OPENING EDITION'}
          </div>
        </div>
        <h1 style={{
          margin:'40px 0 0', fontFamily:'var(--font-display)', fontWeight: 700,
          fontSize:'clamp(52px, 9vw, 140px)', lineHeight: 0.9, letterSpacing:'-0.045em', color:'#FFF9E8',
        }}>
          {h.h1pre} <span style={{ fontFamily:'var(--font-serif)', fontStyle:'italic', fontWeight: 400, color:'var(--yellow)' }}>{h.h1accent}</span><br/>
          {h.h1post}
        </h1>
        <div style={{ marginTop: 48, display:'grid', gridTemplateColumns:'1fr', gap: 32 }} className="r-split-type">
          <p style={{ margin:0, fontSize: 17, lineHeight: 1.55, color:'rgba(255,249,232,0.8)' }}>{h.sub}</p>
          <div style={{ display:'flex', alignItems:'flex-end', gap: 12 }}>
            <button className="btn btn-accent" onClick={()=>setPage('about')}>{h.cta1} <Icon name="arrow"/></button>
            <button className="btn" style={{ background:'transparent', color:'#FFF9E8', border:'1px solid rgba(255,255,255,0.3)' }} onClick={()=>setPage('activities')}>{h.cta2}</button>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap: 12, alignItems:'end' }}>
            {h.stats.slice(0,2).map((s,i) => (
              <div key={i}>
                <div style={{ fontSize: 36, fontWeight: 700, color:'var(--yellow)' }}>{s.n}</div>
                <div className="mono" style={{ fontSize: 11, color:'var(--sky)' }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

window.Home = Home;
