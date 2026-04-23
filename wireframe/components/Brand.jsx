// Resonansi wordmark (original, not a real logo — placeholder mark)
const Wordmark = ({ size = 28, mono = false }) => {
  const nav = mono ? 'currentColor' : 'var(--navy)';
  const accent = mono ? 'currentColor' : 'var(--yellow)';
  return (
    <div style={{ display:'inline-flex', alignItems:'center', gap: 10, color: nav }}>
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
        {/* concentric arcs — resonance metaphor */}
        <circle cx="20" cy="20" r="16" stroke={nav} strokeWidth="1.6" fill={mono ? 'transparent' : 'var(--sky-50)'}/>
        <circle cx="20" cy="20" r="10" stroke={nav} strokeWidth="1.6" fill="none"/>
        <circle cx="20" cy="20" r="4" fill={accent} stroke={nav} strokeWidth="1.6"/>
        <path d="M20 4 V 10 M20 30 V 36 M4 20 H 10 M30 20 H 36" stroke={nav} strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
      <span style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 700, fontSize: size * 0.65, letterSpacing: '-0.02em',
        color: nav,
      }}>Resonansi</span>
    </div>
  );
};

// ICW co-sign
const IcwMark = ({ dark = false }) => (
  <div className="mono" style={{
    display:'inline-flex', alignItems:'center', gap: 8,
    fontSize: 10, letterSpacing: '0.14em', textTransform:'uppercase',
    color: dark ? 'rgba(255,249,232,0.8)' : 'var(--muted)',
  }}>
    <span style={{
      width: 18, height: 18, borderRadius: 4,
      background: dark ? 'rgba(255,255,255,0.14)' : 'var(--navy)',
      color: dark ? '#FFF9E8' : '#FFF9E8',
      display:'inline-flex', alignItems:'center', justifyContent:'center',
      fontWeight: 800, fontSize: 9,
    }}>LOREM</span>
    <span> ipsum dolor sit amet consectetur adipiscing elit</span>
  </div>
);

window.Wordmark = Wordmark;
window.IcwMark = IcwMark;
