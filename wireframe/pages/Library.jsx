// Library page (short) + Mobile frame

const LibraryPage = ({ t, lang }) => {
  const books = [
    { t:'Lorem Ipsum Dolor', a:'Lorem. Ipsum Dolor', tone:'sky' },
    { t:'Lorem Ipsum Dolor', a:'Lorem. Ipsum Dolor', tone:'sky' },
    { t:'Lorem Ipsum Dolor', a:'Lorem. Ipsum Dolor', tone:'sky' },
    { t:'Lorem Ipsum Dolor', a:'Lorem. Ipsum Dolor', tone:'sky' },
    { t:'Lorem Ipsum Dolor', a:'Lorem. Ipsum Dolor', tone:'sky' },
    { t:'Lorem Ipsum Dolor', a:'Lorem. Ipsum Dolor', tone:'sky' },
  ];
  return (
    <div>
      <PageHeader
        eyebrow={'LOREM IPSUM'}
        title={'Lorem ipsum dolor sit amet.'}
        sub={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
        tone="pink"/>
      <section className="app" style={{ padding:'var(--gap-5) var(--gap-4)' }}>
        <div className="r-grid-3" style={{ marginBottom:'var(--gap-5)' }}>
          {[
            { t:{id:'Lorem', en:'Lorem'}, n:'1.234', d:{id:'Lorem ipsum dolor sit amet.', en:'Lorem ipsum dolor sit amet.'} },
            { t:{id:'Lorem', en:'Lorem'}, n:'1.234', d:{id:'Lorem ipsum dolor sit amet.', en:'Lorem ipsum dolor sit amet.'} },
            { t:{id:'Lorem', en:'Lorem'}, n:'1.234', d:{id:'Lorem ipsum dolor sit amet.', en:'Lorem ipsum dolor sit amet.'} },
          ].map((s,i)=>(
            <div key={i} className="card" style={{ padding: 28 }}>
              <div className="eyebrow">{s.t[lang]}</div>
              <div style={{ marginTop: 10, fontFamily:'var(--font-display)', fontWeight: 700, fontSize: 48, color:'var(--navy)', letterSpacing:'-0.03em' }}>{s.n}</div>
              <p style={{ margin:'8px 0 0', fontSize: 14, color:'var(--muted)' }}>{s.d[lang]}</p>
            </div>
          ))}
        </div>
        <SectionHeader eyebrow={'Lorem Ipsum'} title={'Lorem ipsum dolor sit amet.'}/>
        <div className="r-grid-6" style={{ marginTop: 32 }}>
          {books.map((b, i) => (
            <div key={i}>
              <div className="placeholder" data-tone={b.tone} style={{ aspectRatio:'2/3', borderRadius: 10, padding: 12 }}>
                <div style={{ position:'absolute', inset: 10, border:'1px solid rgba(0,0,0,0.08)', borderRadius: 6, display:'flex', alignItems:'end' }}>
                  <div style={{ padding: 8, fontFamily:'var(--font-serif)', fontStyle:'italic', fontSize: 13, lineHeight: 1.2, color:'var(--navy)' }}>{b.t}</div>
                </div>
              </div>
              <div style={{ marginTop: 10, fontSize: 13, fontWeight: 600, color:'var(--navy)' }}>{b.t}</div>
              <div className="mono" style={{ fontSize: 10, color:'var(--muted)', marginTop: 2 }}>{b.a}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

window.LibraryPage = LibraryPage;
