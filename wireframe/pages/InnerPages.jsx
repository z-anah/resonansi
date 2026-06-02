// Inner pages — About, Services, Activities, Library, Contact

const PageHeader = ({ eyebrow, title, sub, tone='yellow' }) => (
  <section style={{
    background: tone==='yellow' ? 'linear-gradient(180deg, var(--yellow) 0%, var(--yellow-soft) 100%)'
              : tone==='pink'   ? 'linear-gradient(180deg, var(--pink-soft) 0%, var(--bg) 100%)'
              : tone==='navy'   ? 'var(--navy)'
              : 'linear-gradient(180deg, var(--sky) 0%, var(--sky-50) 100%)',
    color: tone==='navy' ? '#FFF9E8' : 'var(--navy-900)',
    padding: 'var(--gap-5) 0',
    borderBottom: '1px solid var(--line)',
  }}>
    <div className="app">
      <div className="eyebrow" style={{ color: tone==='navy' ? 'var(--yellow)' : 'var(--navy-900)', opacity: tone==='navy' ? 1 : 0.7 }}>{eyebrow}</div>
      <h1 style={{
        margin:'14px 0 0', fontFamily:'var(--font-display)', fontWeight: 700,
        fontSize:'clamp(42px, 6vw, 88px)', lineHeight: 0.98, letterSpacing:'-0.035em',
      }}>{title}</h1>
      {sub && <p style={{ margin:'20px 0 0', maxWidth: 640, fontSize: 19, lineHeight: 1.5, opacity: 0.85 }}>{sub}</p>}
    </div>
  </section>
);

/* ============== ABOUT ============== */
const AboutPage = ({ t, lang }) => (
  <div>
    <PageHeader
      eyebrow={lang==='id'?'Lorem Ipsum':'Lorem Ipsum'}
      title={lang==='id' ? 'Lorem Ipsum Dolor Sit Amet.' : 'Lorem Ipsum Dolor Sit Amet.'}
      sub={lang==='id'
        ? 'Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet.'
        : 'Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet.'}
      tone="yellow"/>

    {/* Story */}
    <section className="app" style={{ padding:'var(--gap-5) var(--gap-4)' }}>
      <div className="r-split-tall" style={{ gap: 48 }}>
        <div>
          <div className="eyebrow">Lorem Ipsum</div>
          <div style={{ marginTop: 14, fontFamily:'var(--font-serif)', fontStyle:'italic', fontSize: 34, lineHeight: 1.2, color:'var(--navy)' }}>
            {lang==='id' ? 'Lorem Ipsum Dolor Sit Amet. Lorem Ipsum Dolor Sit Amet.' : 'Lorem Ipsum Dolor Sit Amet. Lorem Ipsum Dolor Sit Amet.'}
          </div>
        </div>
        <div style={{ fontSize: 17, lineHeight: 1.6, color:'var(--ink-2)' }}>
          <p style={{ marginTop: 0 }}>
            {lang==='id'
              ? 'Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet.'
              : 'Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet.'}
          </p>
          <p>
            {lang==='id'
              ? 'Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet.'
              : 'Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet.'}
          </p>
        </div>
      </div>

      {/* Timeline */}
      <div className="r-grid-4" style={{ marginTop: 64, gap: 14, position:'relative' }}>
        <div style={{ position:'absolute', top: 18, left: 30, right: 30, height: 1, background:'var(--line)', zIndex: 0 }}/>
        {[
          { y:'2022', t:{id:'Lorem Ipsum', en:'Lorem Ipsum'} },
          { y:'2023', t:{id:'Lorem Ipsum Dolor', en:'Lorem Ipsum Dolor'} },
          { y:'2024', t:{id:'Lorem Ipsum Dolor Sit', en:'Lorem Ipsum Dolor Sit'} },
          { y:'2026', t:{id:'Lorem Ipsum Dolor Sit Amet', en:'Lorem Ipsum Dolor Sit Amet'} },
        ].map((m,i)=>(
          <div key={i} style={{ position:'relative', paddingTop: 40, zIndex: 1 }}>
            <div style={{ position:'absolute', top: 10, left: 0, width: 18, height: 18, borderRadius:'50%', background:'var(--yellow)', border:'2px solid var(--navy)' }}/>
            <div className="mono" style={{ fontSize: 11, color:'var(--muted)' }}>{m.y}</div>
            <div style={{ marginTop: 6, fontWeight: 600, fontSize: 16, color:'var(--navy)' }}>{m.t[lang]}</div>
          </div>
        ))}
      </div>
    </section>

    {/* Team */}
    <section className="app" style={{ padding:'var(--gap-5) var(--gap-4)' }}>
      <SectionHeader eyebrow={'LOREM IPSUM, DOLOR SIT AMET'} title={'Lorem ipsum dolor sit amet'}/>
      <div className="r-grid-4" style={{ marginTop: 32 }}>
        {[
          { n:'Lorem Ipsum', r:{id:'Lorem Ipsum', en:'Lorem Ipsum'}, tone:'sky' },
          { n:'Lorem Ipsum', r:{id:'Lorem Ipsum', en:'Lorem Ipsum'}, tone:'sky' },
          { n:'Lorem Ipsum', r:{id:'Lorem Ipsum', en:'Lorem Ipsum'}, tone:'sky' },
          { n:'Lorem Ipsum', r:{id:'Lorem Ipsum', en:'Lorem Ipsum'}, tone:'sky' },
        ].map((p,i)=>(
          <div key={i}>
            <div style={{
              background: p.tone==='yellow'?'var(--yellow-soft)':p.tone==='pink'?'var(--pink-soft)':p.tone==='green'?'var(--green-soft)':'var(--sky-100)',
              borderRadius:'var(--radius-lg)', aspectRatio:'1', position:'relative', overflow:'hidden',
            }}>
              <div className="placeholder" data-tone={p.tone} style={{ position:'absolute', inset:0, borderRadius:'var(--radius-lg)' }}>
                <span className="ph-label">LOREM · LID</span>
              </div>
            </div>
            <div style={{ marginTop: 14, fontWeight: 700, fontSize: 17, color:'var(--navy)' }}>{p.n}</div>
            <div className="mono" style={{ fontSize: 11, color:'var(--muted)', marginTop: 4 }}>{p.r[lang]}</div>
          </div>
        ))}
      </div>
    </section>

    {/* Partners strip */}
    <section style={{ background:'var(--bg-2)', padding:'var(--gap-4) 0', borderTop:'1px solid var(--line)', borderBottom:'1px solid var(--line)' }}>
      <div className="app">
        <div className="eyebrow" style={{ textAlign:'center' }}>{'Lorem ipsum'}</div>
        <div style={{ marginTop: 24, display:'flex', justifyContent:'space-around', alignItems:'center', flexWrap:'wrap', gap: 40 }}>
          {['LOREM IPSUM','LOREM IPSUM','LOREM IPSUM','LOREM IPSUM','LOREM IPSUM','LOREM IPSUM'].map(p=>(
            <div key={p} className="mono" style={{ fontSize: 12, letterSpacing:'0.15em', color:'var(--muted)', fontWeight: 600 }}>{p}</div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

/* ============== SERVICES ============== */
const ServicesPage = ({ t, lang, setPage }) => (
  <div>
    <PageHeader
      eyebrow={lang==='id'?'Lorem Ipsum':'Lorem Ipsum'}
      title={'Lorem Ipsum Dolor Sit Amet.'}
      sub={'Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet.'}
      tone="sky"/>

    {/* Rooms grid */}
    <section className="app" style={{ padding:'var(--gap-5) var(--gap-4)' }}>
      <SectionHeader eyebrow={lang==='id'?'Lorem Ipsum Lorem':'Lorem Ipsum Lorem'} title={lang==='id'?'Lorem Ipsum Dolor Sit':'Lorem Ipsum Dolor Sit'}/>
      <div className="r-grid-3" style={{ marginTop: 32, gap: 18 }}>
        {ROOMS.map(r => (
          <div key={r.id} style={{
            background:'var(--paper)', border:'1px solid var(--line)', borderRadius:'var(--radius-lg)', overflow:'hidden',
            transition:'transform .2s, box-shadow .2s', cursor:'pointer',
          }}
            onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-3px)'; e.currentTarget.style.boxShadow='var(--shadow)'; }}
            onMouseLeave={e=>{ e.currentTarget.style.transform='none'; e.currentTarget.style.boxShadow='none'; }}
          >
            <div className="placeholder" style={{ height: 180 }}>
              <span className="ph-label">lorem.jpg</span>
            </div>
            <div style={{ padding: 20 }}>
              <span className="tag"><span className="dot"/>Lorem Ipsum</span>
              <div style={{ marginTop: 10, fontFamily:'var(--font-display)', fontWeight: 700, fontSize: 22, color:'var(--navy)' }}>Lorem Ipsum</div>
              <div style={{ marginTop: 6, fontSize: 13, color:'var(--muted)' }}>
                Lorem Ipsum Lorem
              </div>
              <div style={{ marginTop: 16, display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                <div>
                  <div style={{ fontFamily:'var(--font-display)', fontWeight: 700, fontSize: 18, color:'var(--navy)' }}>
                    Lorem <span className="mono" style={{ fontSize: 11, color:'var(--muted)', fontWeight: 400 }}>/ Lorem Ipsum</span>
                  </div>
                </div>
                <button className="btn btn-ghost" style={{ padding:'10px 14px', fontSize: 13 }}>Lorem Ipsum <Icon name="arrow-ne" size={12}/></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Membership */}
    <section style={{ background:'var(--bg-2)', padding:'var(--gap-5) 0', borderTop:'1px solid var(--line)' }}>
      <div className="app">
        <SectionHeader eyebrow={'Lorem'} title={'Lorem Ipsum Dolor Sit Amet'}/>
        <div className="r-grid-3" style={{ marginTop: 32, gap: 18 }}>
          {[
            { n:{id:'Pelajar', en:'Student'}, p:'Rp 0', per:{id:'/bulan', en:'/month'}, tone:'yellow',
              f: [{id:'Bebas pakai Perpustakaan', en:'Free library access'},
                  {id:'2× pesan ruang per bulan', en:'2× room bookings/mo'},
                  {id:'Akses Resocircle', en:'Resocircle access'}] },
            { n:{id:'Warga', en:'Citizen'},  p:'Rp 75K', per:{id:'/bulan', en:'/month'}, tone:'navy', feat:true,
              f: [{id:'Semua fitur Pelajar', en:'All Student perks'},
                  {id:'5× pesan ruang per bulan', en:'5× room bookings/mo'},
                  {id:'Diskon 20% di Beranda Kopi', en:'20% off at Beranda Kopi'},
                  {id:'Undangan fellowship', en:'Fellowship invites'}] },
            { n:{id:'Organisasi', en:'Organization'}, p:'Rp 600K', per:{id:'/bulan', en:'/month'}, tone:'pink',
              f: [{id:'Hingga 10 anggota', en:'Up to 10 members'},
                  {id:'Sewa rak perpustakaan', en:'Library shelf rental'},
                  {id:'Logo di papan mitra', en:'Logo on partner wall'},
                  {id:'Studio podcast 4 jam', en:'Podcast studio 4h/mo'}] },
          ].map((m,i)=>(
            <div key={i} style={{
              background: m.feat ? 'var(--navy)' : 'var(--paper)',
              color: m.feat ? '#FFF9E8' : 'var(--ink)',
              borderRadius:'var(--radius-lg)', padding: 28,
              border: m.feat ? '1px solid var(--navy)' : '1px solid var(--line)',
              position:'relative',
              transform: m.feat ? 'scale(1.03)' : 'none',
              boxShadow: m.feat ? 'var(--shadow-lg)' : 'none',
            }}>
              {m.feat && <div style={{
                position:'absolute', top:-12, left: 28, background:'var(--yellow)', color:'var(--navy-900)',
                padding:'5px 12px', borderRadius: 999, fontFamily:'var(--font-mono)', fontSize: 10, letterSpacing:'0.12em', fontWeight: 700,
              }}>{'Lorem Ipsum'}</div>}
              <div className="eyebrow" style={{ color: m.feat ? 'var(--yellow)' : 'var(--navy)', opacity: m.feat ? 1 : 0.7 }}>Lorem Ipsum</div>
              <div style={{ marginTop: 14, display:'flex', alignItems:'baseline', gap: 6 }}>
                <span style={{ fontFamily:'var(--font-display)', fontWeight: 700, fontSize: 44, letterSpacing: '-0.03em' }}>Lorem</span>
                <span className="mono" style={{ fontSize: 12, opacity: 0.7 }}>Lorem Ipsum</span>
              </div>
              <ul style={{ listStyle:'none', padding: 0, margin:'24px 0 0', display:'flex', flexDirection:'column', gap: 10 }}>
                {m.f.map((x,j)=>(
                  <li key={j} style={{ display:'flex', gap: 10, alignItems:'start', fontSize: 14 }}>
                    <Icon name="check" size={16} style={{ color: m.feat ? 'var(--yellow)' : 'var(--green)', flexShrink: 0, marginTop: 2 }}/>
                    <span>Lorem Ipsum</span>
                  </li>
                ))}
              </ul>
              <button className={m.feat ? 'btn btn-accent' : 'btn btn-primary'} style={{ width:'100%', marginTop: 28, justifyContent:'center' }} onClick={()=>setPage('join')}>
                Lorem Ipsum <Icon name="arrow"/>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

/* ============== ACTIVITIES ============== */
const ActivitiesPage = ({ t, lang }) => {
  const [filter, setFilter] = React.useState('all');
  const types = [
    { k:'all',      l:{id:'Lorem', en:'Lorem'} },
    { k:'Diskusi Publik', l:{id:'Lorem Ipsum', en:'Lorem Ipsum'} },
    { k:'Kelas Seni',     l:{id:'Lorem Ipsum', en:'Lorem Ipsum'} },
    { k:'Klub Baca',      l:{id:'Lorem Ipsum', en:'Lorem Ipsum'} },
    { k:'Aksi Solidaritas', l:{id:'Lorem Ipsum', en:'Lorem Ipsum'} },
  ];
  const filtered = filter === 'all' ? EVENTS : EVENTS.filter(e => e.type.id === filter);
  return (
    <div>
      <PageHeader
        eyebrow={'Lorem'}
        title={'Lorem ipsum dolor sit amet.'}
        sub={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
        tone="pink"/>

      <section className="app" style={{ padding:'var(--gap-5) var(--gap-4)' }}>
        {/* Filters */}
        <div style={{ display:'flex', gap: 8, flexWrap:'wrap', marginBottom: 32 }}>
          {types.map(tp=>(
            <button key={tp.k} onClick={()=>setFilter(tp.k)} style={{
              padding:'10px 18px', borderRadius: 999,
              border:'1px solid ' + (filter===tp.k ? 'var(--navy)' : 'var(--line)'),
              background: filter===tp.k ? 'var(--navy)' : 'transparent',
              color: filter===tp.k ? '#FFF9E8' : 'var(--navy)',
              fontFamily:'var(--font-display)', fontSize: 14, fontWeight: 500,
              cursor:'pointer', transition: 'all .15s',
            }}>{tp.l[lang]}</button>
          ))}
        </div>

        <div className="r-grid-2">
          {filtered.map((e, i) => (
            <div key={i} className="r-activity" style={{
              background:'var(--paper)', border:'1px solid var(--line)', borderRadius:'var(--radius-lg)',
              overflow:'hidden',
            }}>
              <div className="placeholder" data-tone={e.tone} style={{ minHeight: 220 }}>
                <div style={{ textAlign:'center', color:'inherit' }}>
                  <div className="mono" style={{ fontSize: 10, opacity: 0.7 }}>{e.date.split(' · ')[0]}</div>
                  <div style={{ fontFamily:'var(--font-display)', fontWeight: 700, fontSize: 36, marginTop: 4 }}>{e.date.split(' · ')[1]}</div>
                  <div className="mono" style={{ fontSize: 10, marginTop: 4, opacity: 0.7 }}>{e.time}</div>
                </div>
              </div>
              <div style={{ padding: 22 }}>
                <span className="tag" data-tone={e.tone}><span className="dot"/>{e.type[lang]}</span>
                <div style={{ marginTop: 10, fontFamily:'var(--font-display)', fontWeight: 700, fontSize: 19, lineHeight: 1.2, color:'var(--navy)' }}>{e.title[lang]}</div>
                <div style={{ marginTop: 8, fontSize: 13, color:'var(--muted)' }}>{e.speakers}</div>
                <div style={{ marginTop: 16, paddingTop: 14, borderTop:'1px dashed var(--line)', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                  <div className="mono" style={{ fontSize: 11, color:'var(--ink-2)' }}>{e.room} · {e.seats}</div>
                  <button className="btn btn-primary" style={{ padding:'10px 16px', fontSize: 13 }}>RSVP <Icon name="arrow" size={12}/></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

/* ============== CONTACT ============== */
const ContactPage = ({ t, lang }) => {
  const [sent, setSent] = React.useState(false);
  return (
    <div>
      <PageHeader
        eyebrow={'Lorem'}
        title={'Lorem ipsum dolor sit amet.'}
        sub={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
        tone="navy"/>
      <section className="app" style={{ padding:'var(--gap-5) var(--gap-4)' }}>
        <div className="r-split-map" style={{ gap: 48 }}>
          <form onSubmit={e=>{ e.preventDefault(); setSent(true); }} style={{
            background:'var(--paper)', border:'1px solid var(--line)', borderRadius:'var(--radius-lg)', padding: 32,
          }}>
            {sent ? (
              <div style={{ textAlign:'center', padding:'40px 0' }}>
                <div style={{
                  width: 72, height: 72, borderRadius:'50%', background:'var(--green-soft)',
                  margin:'0 auto', display:'flex', alignItems:'center', justifyContent:'center',
                  color:'#1F5D39',
                }}><Icon name="check" size={32}/></div>
                <div style={{ marginTop: 20, fontFamily:'var(--font-serif)', fontStyle:'italic', fontSize: 28, color:'var(--navy)' }}>
                  {lang==='id'?'Pesan terkirim. Terima kasih!':'Message sent. Thank you!'}
                </div>
                <p style={{ margin:'10px 0 0', color:'var(--muted)' }}>
                  {lang==='id'?'Kami akan membalas ke surel yang kamu cantumkan.':"We'll reply to the email you provided."}
                </p>
                <button type="button" onClick={()=>setSent(false)} className="btn btn-ghost" style={{ marginTop: 24 }}>
                  {lang==='id'?'Kirim lagi':'Send another'}
                </button>
              </div>
            ) : <>
              <FormField label="Lorem" placeholder={'Lorem'}/>
              <FormField label="Lorem" placeholder={'Lorem'}/>
              <FormField label="Lorem" placeholder={'Lorem'}/>
              <FormField label="Lorem" placeholder="..." textarea/>
              <button type="submit" className="btn btn-primary" style={{ marginTop: 10 }}>
                <Icon name="send" size={14}/> {'Lorem Ipsum'}
              </button>
            </>}
          </form>
          <div style={{ display:'flex', flexDirection:'column', gap: 20 }}>
            <InfoBlock icon="mail" title={'Lorem'} v="lorem@ipsum.dolor" tone="sky"/>
            <InfoBlock icon="phone" title={'Lorem'} v="+62 812 3456 7890" tone="sky"/>
            <InfoBlock icon="pin" title={'Lorem'} v={t.footer.address} tone="sky"/>
            <InfoBlock icon="calendar" title={'Lorem'} v={t.footer.open} tone="sky"/>
          </div>
        </div>
      </section>
    </div>
  );
};

const FormField = ({ label, placeholder, type='text', textarea }) => {
  const [val, setVal] = React.useState('');
  const [focus, setFocus] = React.useState(false);
  const style = {
    width:'100%', padding:'14px 16px', borderRadius: 14,
    border:'1px solid ' + (focus ? 'var(--navy)' : 'var(--line)'),
    background: 'var(--bg)',
    fontFamily:'var(--font-display)', fontSize: 15, color:'var(--ink)',
    outline:'none', resize:'vertical',
    transition:'border-color .15s',
  };
  return (
    <div style={{ marginBottom: 18 }}>
      <label className="mono" style={{ fontSize: 11, color:'var(--muted)', letterSpacing:'0.08em', textTransform:'uppercase' }}>{label}</label>
      {textarea
        ? <textarea value={val} onChange={e=>setVal(e.target.value)} onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)} placeholder={placeholder} rows={5} style={{ ...style, marginTop: 6 }}/>
        : <input value={val} onChange={e=>setVal(e.target.value)} onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)} type={type} placeholder={placeholder} style={{ ...style, marginTop: 6 }}/>}
    </div>
  );
};

const InfoBlock = ({ icon, title, v, tone }) => (
  <div style={{
    background: tone==='yellow'?'var(--yellow-soft)':tone==='pink'?'var(--pink-soft)':tone==='green'?'var(--green-soft)':'var(--sky-100)',
    borderRadius:'var(--radius-lg)', padding: 20, display:'flex', gap: 14, alignItems:'start',
  }}>
    <div style={{ width: 40, height: 40, borderRadius: 12, background:'var(--navy)', color:'var(--yellow)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink: 0 }}>
      <Icon name={icon}/>
    </div>
    <div>
      <div className="mono" style={{ fontSize: 11, color:'var(--muted)', textTransform:'uppercase', letterSpacing:'0.08em' }}>{title}</div>
      <pre style={{ margin:'6px 0 0', whiteSpace:'pre-wrap', fontFamily:'var(--font-display)', fontSize: 15, color:'var(--navy)', fontWeight: 500 }}>{v}</pre>
    </div>
  </div>
);

Object.assign(window, { AboutPage, ServicesPage, ActivitiesPage, ContactPage, PageHeader });
