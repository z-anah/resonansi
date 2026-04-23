// Library page (short) + Mobile frame

const LibraryPage = ({ t, lang }) => {
  const books = [
    { t:'Orang-Orang Oetimu', a:'Felix K. Nesi', tone:'yellow' },
    { t:'Di Bawah Bendera Revolusi', a:'Soekarno', tone:'pink' },
    { t:'Korupsi: Sebuah Pengantar', a:'Syed Hussein Alatas', tone:'navy' },
    { t:'Cerita dari Blora', a:'Pramoedya A. Toer', tone:'green' },
    { t:'Dari Hari ke Hari', a:'Mahbub Djunaidi', tone:'yellow' },
    { t:'Laporan dari Bawah', a:'Mochtar Lubis', tone:'pink' },
  ];
  return (
    <div>
      <PageHeader
        eyebrow={lang==='id'?'Perpustakaan':'Library'}
        title={lang==='id'?'2.400 buku. Meja panjang. Lampu kuning.':'2,400 books. Long tables. Warm lamps.'}
        sub={lang==='id'?'Buka untuk umum. Pinjam gratis untuk anggota. Sewa rak untuk komunitas.':'Open to the public. Free loans for members. Shelf rental for communities.'}
        tone="pink"/>
      <section className="app" style={{ padding:'var(--gap-5) var(--gap-4)' }}>
        <div className="r-grid-3" style={{ marginBottom:'var(--gap-5)' }}>
          {[
            { t:{id:'Koleksi', en:'Collection'}, n:'2.412', d:{id:'Buku, zine, dan rilis laporan.', en:'Books, zines, and report releases.'} },
            { t:{id:'Rak sewa', en:'Shelf rental'}, n:'18 / 24', d:{id:'Rak aktif bulan ini, dikelola komunitas.', en:'Active shelves this month, community-run.'} },
            { t:{id:'Klub baca', en:'Reading clubs'}, n:'6', d:{id:'Pertemuan mingguan, tema berputar.', en:'Weekly meetings, rotating themes.'} },
          ].map((s,i)=>(
            <div key={i} className="card" style={{ padding: 28 }}>
              <div className="eyebrow">{s.t[lang]}</div>
              <div style={{ marginTop: 10, fontFamily:'var(--font-display)', fontWeight: 700, fontSize: 48, color:'var(--navy)', letterSpacing:'-0.03em' }}>{s.n}</div>
              <p style={{ margin:'8px 0 0', fontSize: 14, color:'var(--muted)' }}>{s.d[lang]}</p>
            </div>
          ))}
        </div>
        <SectionHeader eyebrow={lang==='id'?'Pilihan rak minggu ini':'Shelf picks this week'} title={lang==='id'?'Baca dulu, ngobrol nanti':'Read first, talk later'}/>
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
