// Top navigation bar — responsive (hamburger on mobile)
const Nav = ({ page, setPage, lang, setLang, t }) => {
  const [open, setOpen] = React.useState(false);
  const items = [
    { id:'about',      label: t.nav.resonansi },
    { id:'services',   label: t.nav.services },
    { id:'activities', label: t.nav.activities },
    { id:'library',    label: t.nav.library },
    { id:'contact',    label: t.nav.contact },
  ];
  const go = (id) => { setPage(id); setOpen(false); };
  return (
    <div style={{
      position:'sticky', top: 0, zIndex: 40,
      background: 'rgba(250,247,240,0.88)',
      backdropFilter: 'saturate(140%) blur(14px)',
      borderBottom: '1px solid var(--line)',
    }}>
      <div className="app" style={{
        display:'flex', alignItems:'center', justifyContent:'space-between',
        padding: '16px 0', gap: 12,
      }}>
        <div onClick={() => setPage('home')} style={{ cursor:'pointer', flexShrink: 0 }}>
          <Wordmark />
        </div>

        {/* Desktop nav */}
        <nav className="nav-desktop" style={{ alignItems:'center', gap: 4 }}>
          {items.map(it => (
            <button key={it.id} onClick={() => setPage(it.id)} style={{
              background: page === it.id ? 'rgba(0,74,120,0.08)' : 'transparent',
              border: 'none', color: 'var(--navy)',
              fontFamily: 'var(--font-display)',
              fontSize: 14, fontWeight: page === it.id ? 600 : 500,
              padding: '10px 14px', borderRadius: 999, cursor: 'pointer',
              transition: 'background .15s',
            }}
            onMouseEnter={e=>e.currentTarget.style.background='rgba(0,74,120,0.06)'}
            onMouseLeave={e=>e.currentTarget.style.background= page === it.id ? 'rgba(0,74,120,0.08)' : 'transparent'}
            >{it.label}</button>
          ))}
        </nav>

        <div style={{ display:'flex', alignItems:'center', gap: 8, flexShrink: 0 }}>
          <button onClick={() => setLang(lang === 'id' ? 'en' : 'id')} className="mono" style={{
            background:'transparent', border:'1px solid var(--line)',
            color:'var(--navy)', padding:'8px 12px', borderRadius: 999,
            fontSize: 11, letterSpacing:'0.1em', cursor:'pointer',
          }} aria-label="Switch language">
            LOREM . IPSUM
          </button>
          <button onClick={() => setPage('join')} className="btn btn-accent" style={{ padding:'12px 16px', fontSize: 13 }}>
            <span className="nav-cta-text">{t.nav.join}</span>
            <Icon name="arrow-ne" />
          </button>

          {/* Mobile hamburger */}
          <button className="nav-mobile-toggle" onClick={()=>setOpen(true)} aria-label="Open menu" style={{
            display:'none', alignItems:'center', justifyContent:'center',
            width: 42, height: 42, borderRadius: 12,
            background:'transparent', border:'1px solid var(--line)',
            color:'var(--navy)', cursor:'pointer',
          }}>
            <Icon name="menu" size={20}/>
          </button>
        </div>
      </div>

      {/* Drawer */}
      {open && (
        <div className="nav-drawer" onClick={()=>setOpen(false)}>
          <div className="nav-drawer-panel" onClick={e=>e.stopPropagation()}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom: 20 }}>
              <Wordmark />
              <button onClick={()=>setOpen(false)} aria-label="Close" style={{
                width: 40, height: 40, borderRadius:'50%',
                background:'var(--bg-2)', border:'none', cursor:'pointer',
                color:'var(--navy)', display:'flex', alignItems:'center', justifyContent:'center',
              }}><Icon name="close" size={18}/></button>
            </div>
            {items.map(it => (
              <button key={it.id} onClick={()=>go(it.id)} className="nav-drawer-item" data-active={page === it.id}>
                <span>{it.label}</span>
                <Icon name="arrow" size={16}/>
              </button>
            ))}
            <div style={{ marginTop: 20, paddingTop: 20, borderTop:'1px dashed var(--line)', display:'flex', flexDirection:'column', gap: 10 }}>
              <button onClick={()=>go('join')} className="btn btn-accent" style={{ justifyContent:'center' }}>
                {t.nav.join} <Icon name="arrow-ne"/>
              </button>
              <button onClick={()=>{ setLang(lang === 'id' ? 'en' : 'id'); }} className="btn btn-ghost" style={{ justifyContent:'center' }}>
                {lang === 'id' ? 'Switch to English' : 'Ganti ke Bahasa Indonesia'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

window.Nav = Nav;
