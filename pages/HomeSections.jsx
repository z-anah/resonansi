// Home page sections — events, space, voices, values, find, join CTA

const SectionEvents = ({ t, lang, setPage }) => {
  const h = t.home;
  const [active, setActive] = React.useState(0);
  return (
    <section style={{ background:'var(--bg-2)', padding:'var(--gap-5) 0', borderTop:'1px solid var(--line)', borderBottom:'1px solid var(--line)' }}>
      <div className="app">
        <SectionHeader eyebrow={lang==='id' ? '04 / 2026' : '04 / 2026'} title={h.sectionEvents} sub={h.sectionEventsSub}
          action={<button className="btn btn-ghost" onClick={()=>setPage('activities')}>{lang==='id'?'Agenda lengkap':'Full agenda'} <Icon name="arrow"/></button>}/>
        <div className="r-grid-2" style={{ marginTop: 32 }}>
          {EVENTS.map((e, i) => (
            <div key={i}
              onMouseEnter={()=>setActive(i)}
              className="r-event-card"
              style={{
                background:'var(--paper)', borderRadius:'var(--radius-lg)', padding: 24,
                border:'1px solid var(--line)',
                gap: 20, alignItems:'start',
                transition:'transform .2s, box-shadow .2s',
                transform: active === i ? 'translateY(-2px)' : 'none',
                boxShadow: active === i ? 'var(--shadow)' : 'var(--shadow-sm)',
                cursor:'pointer',
              }}>
              <div style={{
                padding: 12, borderRadius: 14,
                background: e.tone==='navy' ? 'var(--navy)' : e.tone==='yellow' ? 'var(--yellow)' : e.tone==='pink' ? 'var(--pink-soft)' : 'var(--green-soft)',
                color: e.tone==='navy' ? '#FFF9E8' : 'var(--navy-900)',
                textAlign:'center',
              }}>
                <div className="mono" style={{ fontSize: 10, opacity: 0.7 }}>{e.date.split(' · ')[0]}</div>
                <div style={{ fontFamily:'var(--font-display)', fontWeight: 700, fontSize: 22, marginTop: 2 }}>{e.date.split(' · ')[1]}</div>
                <div className="mono" style={{ fontSize: 10, marginTop: 2, opacity: 0.7 }}>{e.time}</div>
              </div>
              <div>
                <span className="tag" data-tone={e.tone}><span className="dot"/>{e.type[lang]}</span>
                <div style={{ marginTop: 10, fontFamily:'var(--font-display)', fontWeight: 700, fontSize: 20, lineHeight: 1.2, color:'var(--navy)' }}>
                  {e.title[lang]}
                </div>
                <div style={{ marginTop: 6, fontSize: 13, color:'var(--muted)' }}>{e.speakers}</div>
                <div style={{ marginTop: 12, display:'flex', gap: 14, fontSize: 12, color:'var(--ink-2)' }} className="mono">
                  <span><Icon name="pin" size={11} style={{ verticalAlign:'-2px', marginRight:4 }}/>{e.room}</span>
                  <span><Icon name="users" size={11} style={{ verticalAlign:'-2px', marginRight:4 }}/>{e.seats}</span>
                </div>
              </div>
              <div style={{
                width: 40, height: 40, borderRadius:'50%', background:'var(--navy)', color:'#FFF9E8',
                display:'flex', alignItems:'center', justifyContent:'center',
                transform: active === i ? 'rotate(-45deg)' : 'none', transition:'transform .2s',
              }}><Icon name="arrow" size={16}/></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SectionSpace = ({ t, lang, setPage }) => {
  const h = t.home;
  return (
    <section className="app" style={{ padding:'var(--gap-5) var(--gap-4)' }}>
      <SectionHeader eyebrow={lang==='id' ? 'Tujuh ruangan' : 'Seven rooms'} title={h.sectionSpace} sub={h.sectionSpaceSub}
        action={<button className="btn btn-ghost" onClick={()=>setPage('services')}>{lang==='id'?'Lihat semua fasilitas':'See all facilities'} <Icon name="arrow"/></button>}/>
      <div className="r-grid-4" style={{ marginTop: 32, gap: 14 }}>
        {ROOMS.slice(0,4).map((r,i) => (
          <div key={r.id} style={{ borderRadius:'var(--radius-lg)', overflow:'hidden', position:'relative', height: 260 }}>
            <div className="placeholder" data-tone={r.tone} style={{ position:'absolute', inset:0, borderRadius:'var(--radius-lg)' }}>
              <div className="ph-label">{r.id}.jpg</div>
            </div>
            <div style={{
              position:'absolute', left: 12, right: 12, bottom: 12,
              background:'rgba(250,247,240,0.94)', backdropFilter:'blur(8px)',
              borderRadius: 14, padding: '12px 14px',
            }}>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                <div>
                  <div style={{ fontFamily:'var(--font-display)', fontWeight: 700, fontSize: 16, color:'var(--navy)' }}>{r.name}</div>
                  <div className="mono" style={{ fontSize: 10, color:'var(--muted)', marginTop: 2 }}>{r.type[lang]} · {r.cap}</div>
                </div>
                <div style={{ width: 28, height: 28, borderRadius:'50%', background:'var(--navy)', color:'#FFF9E8', display:'flex', alignItems:'center', justifyContent:'center' }}>
                  <Icon name="arrow-ne" size={12}/>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const SectionVoices = ({ t, lang }) => {
  const h = t.home;
  return (
    <section style={{ background:'var(--navy)', color:'#FFF9E8', padding:'var(--gap-5) 0' }}>
      <div className="app">
        <SectionHeader dark eyebrow={lang==='id'?'Testimoni':'Testimonials'} title={h.sectionVoices} sub={h.sectionVoicesSub}/>
        <div className="r-grid-3" style={{ marginTop: 32, gap: 18 }}>
          {TESTIMONIALS.map((v, i) => (
            <div key={i} style={{
              background: v.tone==='yellow' ? 'var(--yellow)' : v.tone==='pink' ? 'var(--pink-soft)' : 'var(--green-soft)',
              color:'var(--navy-900)',
              padding: 26, borderRadius:'var(--radius-lg)',
              transform: `rotate(${[-1.5, 0.8, -0.6][i]}deg)`,
              boxShadow:'0 20px 40px rgba(0,0,0,0.2)',
              position:'relative',
            }}>
              <div style={{ fontFamily:'var(--font-serif)', fontSize: 64, lineHeight: 0.6, color:'var(--navy)', opacity: 0.25 }}>"</div>
              <p style={{ margin:'0 0 22px', fontFamily:'var(--font-serif)', fontStyle:'italic', fontSize: 20, lineHeight: 1.35 }}>
                {v.quote[lang]}
              </p>
              <div style={{ display:'flex', alignItems:'center', gap: 12, paddingTop: 16, borderTop:'1px dashed rgba(0,74,120,0.3)' }}>
                <div className="placeholder" data-tone={v.tone} style={{ width: 40, height: 40, borderRadius:'50%' }}>
                  <span className="ph-label" style={{ padding:'1px 5px', fontSize: 8 }}>{v.name.split(' ').map(x=>x[0]).join('')}</span>
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14 }}>{v.name}</div>
                  <div className="mono" style={{ fontSize: 10, opacity: 0.7 }}>{v.role[lang]}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SectionValues = ({ t, lang }) => {
  const h = t.home;
  return (
    <section className="app" style={{ padding:'var(--gap-5) var(--gap-4)' }}>
      <SectionHeader eyebrow={lang==='id'?'Prinsip ruang':'Principles'} title={h.sectionValues}/>
      <div className="r-grid-4" style={{ marginTop: 32 }}>
        {VALUES.map((v, i) => {
          const tones = ['yellow','pink','green','sky'];
          const bg = { yellow:'var(--yellow-soft)', pink:'var(--pink-soft)', green:'var(--green-soft)', sky:'var(--sky-100)' }[tones[i]];
          return (
            <div key={i} style={{
              background: bg, borderRadius:'var(--radius-lg)', padding: 26, minHeight: 220,
              display:'flex', flexDirection:'column', justifyContent:'space-between',
              border:'1px solid rgba(0,74,120,0.08)',
            }}>
              <div className="mono" style={{ fontSize: 11, color:'var(--navy)', opacity: 0.5 }}>0{i+1}</div>
              <div>
                <div style={{ fontFamily:'var(--font-display)', fontWeight: 700, fontSize: 28, color:'var(--navy)', letterSpacing:'-0.02em' }}>{v.t[lang]}</div>
                <p style={{ margin:'10px 0 0', fontSize: 14, lineHeight: 1.5, color:'var(--ink-2)' }}>{v.d[lang]}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

const SectionFind = ({ t, lang }) => {
  const h = t.home;
  return (
    <section className="app" style={{ padding:'var(--gap-5) var(--gap-4)' }}>
      <SectionHeader eyebrow={lang==='id'?'Peta':'Map'} title={h.sectionFind} sub={h.sectionFindSub}/>
      <div className="r-split-map" style={{ marginTop: 32 }}>
        {/* Stylized map */}
        <div style={{ borderRadius:'var(--radius-lg)', overflow:'hidden', background:'var(--sky-50)', height: 420, position:'relative' }}>
          <svg viewBox="0 0 800 420" style={{ width:'100%', height:'100%' }}>
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0,74,120,0.1)" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="800" height="420" fill="url(#grid)"/>
            {/* Roads */}
            <path d="M 0 180 L 800 240" stroke="#FFF" strokeWidth="18"/>
            <path d="M 0 180 L 800 240" stroke="var(--sky)" strokeWidth="2" strokeDasharray="8 8"/>
            <path d="M 320 0 L 380 420" stroke="#FFF" strokeWidth="14"/>
            <path d="M 600 0 L 650 420" stroke="#FFF" strokeWidth="10"/>
            {/* Blocks */}
            <rect x="40" y="60" width="220" height="90" rx="10" fill="var(--green-soft)" opacity="0.7"/>
            <rect x="420" y="60" width="140" height="120" rx="10" fill="var(--yellow-soft)" opacity="0.7"/>
            <rect x="420" y="260" width="160" height="140" rx="10" fill="var(--pink-soft)" opacity="0.7"/>
            <rect x="60" y="280" width="200" height="100" rx="10" fill="var(--sky-100)" opacity="0.9"/>
            {/* Stations */}
            <circle cx="700" cy="220" r="10" fill="var(--navy)"/>
            <text x="720" y="215" fill="var(--navy)" fontFamily="var(--font-mono)" fontSize="11">Kalibata Stn.</text>
            {/* Resonansi pin */}
            <g transform="translate(370, 210)">
              <circle r="34" fill="var(--yellow)" opacity="0.3"/>
              <circle r="22" fill="var(--yellow)" opacity="0.5"/>
              <circle r="10" fill="var(--navy)"/>
              <circle r="3" fill="var(--yellow)"/>
            </g>
            <g transform="translate(410, 196)">
              <rect x="0" y="0" width="130" height="44" rx="8" fill="var(--navy)"/>
              <text x="12" y="18" fill="var(--yellow)" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="1">RESONANSI</text>
              <text x="12" y="34" fill="#FFF9E8" fontFamily="var(--font-display)" fontSize="12" fontWeight="700">Kalibata Tmr IV D</text>
            </g>
          </svg>
          <div className="mono" style={{ position:'absolute', top: 14, left: 14, fontSize: 10, color:'var(--navy)', background:'#FFF9E8', padding:'4px 8px', borderRadius: 999 }}>
            JAKARTA SELATAN
          </div>
        </div>
        {/* Info card */}
        <div style={{
          background:'var(--navy)', color:'#FFF9E8', borderRadius:'var(--radius-lg)', padding: 28,
          display:'flex', flexDirection:'column', justifyContent:'space-between',
        }}>
          <div>
            <div className="eyebrow" style={{ color:'var(--yellow)', opacity:1 }}>{lang==='id'?'Kunjungan':'Visit'}</div>
            <div style={{ fontFamily:'var(--font-serif)', fontStyle:'italic', fontSize: 32, lineHeight: 1.15, marginTop: 10 }}>
              {lang==='id'?'Pintu kami tidak terkunci.':'Our door is unlocked.'}
            </div>
            <pre style={{ margin:'22px 0 0', whiteSpace:'pre-wrap', fontFamily:'var(--font-display)', fontSize: 15, lineHeight: 1.55, color:'rgba(255,249,232,0.85)' }}>
{t.footer.address}
            </pre>
            <div className="mono" style={{ marginTop: 14, fontSize: 11, color:'var(--sky)' }}>{t.footer.open}</div>
          </div>
          <div style={{ display:'flex', gap: 10, marginTop: 24 }}>
            <button className="btn btn-accent" style={{ flex: 1, justifyContent:'center' }}>
              {lang==='id'?'Petunjuk arah':'Directions'} <Icon name="arrow-ne" size={14}/>
            </button>
            <button className="btn" style={{ background:'transparent', color:'#FFF9E8', border:'1px solid rgba(255,255,255,0.3)' }}>
              <Icon name="phone" size={14}/> {lang==='id'?'Telepon':'Call'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const SectionJoinCTA = ({ t, lang, setPage }) => (
  <section className="app" style={{ padding:'0 var(--gap-4) var(--gap-5)' }}>
    <div style={{
      borderRadius:'var(--radius-xl)', padding: '56px 48px',
      background: 'linear-gradient(135deg, var(--yellow) 0%, var(--pink-soft) 60%, var(--sky) 100%)',
      position:'relative', overflow:'hidden',
      display:'grid', gridTemplateColumns:'1fr', gap: 32, alignItems:'center',
    }}
    className="r-join-cta">
      <div>
        <div className="eyebrow" style={{ color:'var(--navy-900)', opacity:1 }}>RESOCIRCLE · {lang==='id'?'Keanggotaan':'Membership'}</div>
        <div style={{ marginTop: 14, fontFamily:'var(--font-display)', fontWeight: 700, fontSize: 'clamp(30px, 4vw, 52px)', lineHeight: 1.05, color:'var(--navy-900)', letterSpacing:'-0.03em' }}>
          {lang==='id' ? 'Gabung gerakan yang tahu kapan harus bicara, dan kapan harus mendengar.' : "Join a movement that knows when to speak, and when to listen."}
        </div>
        <p style={{ margin:'16px 0 0', fontSize: 16, color:'var(--navy-900)', maxWidth: 620, opacity: 0.8 }}>
          {lang==='id'
            ? 'Empat langkah, lima menit. Gratis untuk mahasiswa dan pelajar.'
            : 'Four steps, five minutes. Free for students.'}
        </p>
      </div>
      <button onClick={()=>setPage('join')} className="btn btn-primary" style={{ padding:'20px 28px', fontSize: 16 }}>
        {t.nav.join} <Icon name="arrow"/>
      </button>
    </div>
  </section>
);

const SectionHeader = ({ eyebrow, title, sub, action, dark }) => (
  <div style={{ display:'flex', justifyContent:'space-between', alignItems:'end', gap: 32, flexWrap:'wrap' }}>
    <div style={{ maxWidth: 720 }}>
      <div className="eyebrow" style={{ color: dark ? 'var(--yellow)' : 'var(--navy)', opacity: dark ? 1 : 0.75 }}>{eyebrow}</div>
      <h2 style={{
        margin:'14px 0 0',
        fontFamily:'var(--font-display)', fontWeight: 700, letterSpacing:'-0.028em',
        fontSize: 'clamp(30px, 3.5vw, 48px)', lineHeight: 1.05,
        color: dark ? '#FFF9E8' : 'var(--navy)',
      }}>{title}</h2>
      {sub && <p style={{ margin:'12px 0 0', fontSize: 17, color: dark ? 'rgba(255,249,232,0.75)' : 'var(--muted)', lineHeight: 1.5 }}>{sub}</p>}
    </div>
    {action && <div>{action}</div>}
  </div>
);

Object.assign(window, { SectionEvents, SectionSpace, SectionVoices, SectionValues, SectionFind, SectionJoinCTA, SectionHeader });
