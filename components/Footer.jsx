// Footer
const Footer = ({ t, lang, setPage }) => {
  const f = t.footer;
  const nav = t.nav;
  return (
    <footer style={{
      background: 'var(--navy)',
      color: '#FFF9E8',
      marginTop: 'var(--gap-6)',
      borderTop: '1px solid rgba(255,255,255,0.1)',
    }}>
      <div className="app" style={{ padding:'var(--gap-5) var(--gap-4)' }}>
        {/* Top row: brand + newsletter */}
        <div className="r-footer-top" style={{
          paddingBottom:'var(--gap-4)',
          borderBottom:'1px dashed rgba(255,255,255,0.2)',
        }}>
          <div>
            <Wordmark mono={true}/>
            <p style={{
              marginTop: 16, maxWidth: 420,
              fontFamily: 'var(--font-serif)', fontStyle:'italic',
              fontSize: 22, lineHeight: 1.35, color:'#FFF9E8',
            }}>
              {f.tag}
            </p>
            <div style={{ marginTop: 22 }}>
              <IcwMark dark={true}/>
            </div>
          </div>
          <div>
            <div className="eyebrow" style={{ color:'var(--yellow)', opacity:1 }}>{f.newsletter}</div>
            <p style={{ marginTop: 8, color:'rgba(255,249,232,0.75)', fontSize: 15, maxWidth: 400 }}>{f.newsletterDesc}</p>
            <form onSubmit={(e)=>e.preventDefault()} style={{
              marginTop: 16, display:'flex', gap: 8,
              background:'rgba(255,255,255,0.08)',
              border:'1px solid rgba(255,255,255,0.16)',
              borderRadius: 999, padding: 6, maxWidth: 440,
            }}>
              <input type="email" placeholder={lang==='id' ? 'alamat@surel.id' : 'you@email.com'} style={{
                flex:1, background:'transparent', border:'none', outline:'none',
                color:'#FFF9E8', padding:'10px 16px', fontFamily:'var(--font-display)', fontSize: 14,
              }}/>
              <button type="submit" className="btn btn-accent" style={{ padding:'10px 18px', fontSize: 13 }}>
                {f.subscribe}
                <Icon name="arrow" size={14}/>
              </button>
            </form>
          </div>
        </div>

        {/* Cols */}
        <div className="r-footer-cols" style={{
          padding:'var(--gap-4) 0',
        }}>
          <div>
            <div className="eyebrow" style={{ color:'var(--sky)', opacity:1 }}>{lang==='id' ? 'Alamat' : 'Address'}</div>
            <pre style={{
              margin:'10px 0 0', whiteSpace:'pre-wrap',
              fontFamily:'var(--font-display)', fontSize: 15, lineHeight: 1.55,
              color:'rgba(255,249,232,0.9)',
            }}>{f.address}</pre>
            <div className="mono" style={{ marginTop: 14, fontSize: 12, color:'var(--sky)' }}>{f.open}</div>
            <div style={{ display:'flex', gap: 10, marginTop: 18 }}>
              {['ig','x','yt'].map(i => (
                <a key={i} href="#" style={{
                  width: 36, height: 36, borderRadius: '50%',
                  display:'inline-flex', alignItems:'center', justifyContent:'center',
                  border:'1px solid rgba(255,255,255,0.2)', color:'#FFF9E8',
                }}><Icon name={i} size={14}/></a>
              ))}
            </div>
          </div>
          <div>
            <div className="eyebrow" style={{ color:'var(--sky)', opacity:1 }}>{f.links}</div>
            <ul style={{ listStyle:'none', padding:0, margin:'10px 0 0', display:'flex', flexDirection:'column', gap: 10 }}>
              {['about','services','activities','library'].map(p => (
                <li key={p}><a onClick={(e)=>{e.preventDefault(); setPage(p);}} href="#" style={{
                  color:'rgba(255,249,232,0.85)', textDecoration:'none', fontSize: 15,
                }}>{nav[p === 'about' ? 'resonansi' : p]}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="eyebrow" style={{ color:'var(--sky)', opacity:1 }}>{nav.participation}</div>
            <ul style={{ listStyle:'none', padding:0, margin:'10px 0 0', display:'flex', flexDirection:'column', gap: 10 }}>
              {['join','contact'].map(p => (
                <li key={p}><a onClick={(e)=>{e.preventDefault(); setPage(p);}} href="#" style={{
                  color:'rgba(255,249,232,0.85)', textDecoration:'none', fontSize: 15,
                }}>{p === 'join' ? nav.join : nav.contact}</a></li>
              ))}
              <li><a href="#" style={{ color:'rgba(255,249,232,0.85)', textDecoration:'none', fontSize: 15 }}>{f.publications}</a></li>
              <li><a href="#" style={{ color:'rgba(255,249,232,0.85)', textDecoration:'none', fontSize: 15 }}>{f.faq}</a></li>
            </ul>
          </div>
          <div>
            <div className="eyebrow" style={{ color:'var(--sky)', opacity:1 }}>{lang==='id' ? 'Hubungi' : 'Reach us'}</div>
            <ul style={{ listStyle:'none', padding:0, margin:'10px 0 0', display:'flex', flexDirection:'column', gap: 10, fontSize: 15 }}>
              <li style={{ display:'flex', alignItems:'center', gap: 8, color:'rgba(255,249,232,0.9)' }}>
                <Icon name="mail" size={14}/> resonansi@antikorupsi.org
              </li>
              <li style={{ display:'flex', alignItems:'center', gap: 8, color:'rgba(255,249,232,0.9)' }}>
                <Icon name="phone" size={14}/> +62 21 7901 885
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mono r-footer-bottom" style={{
          display:'flex', justifyContent:'space-between', alignItems:'center',
          paddingTop: 20, borderTop:'1px dashed rgba(255,255,255,0.2)',
          color:'rgba(255,249,232,0.6)', fontSize: 12,
          gap: 12, flexWrap: 'wrap',
        }}>
          <div>{f.legal}</div>
          <div>{lang==='id' ? 'Dirancang dengan prinsip akses setara · WCAG 2.1 AA' : 'Designed for equal access · WCAG 2.1 AA'}</div>
        </div>
      </div>
    </footer>
  );
};

window.Footer = Footer;
