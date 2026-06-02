// Resonansi wordmark (original, not a real logo — placeholder mark)
const Wordmark = ({ size = 28, mono = false }) => {
  const nav = mono ? 'currentColor' : 'var(--navy)';
  const accent = mono ? 'currentColor' : 'var(--yellow)';
  return (
    <div style={{ display:'inline-flex', alignItems:'center', gap: 10, color: nav }}>
      {/* star fill icon */}
      <svg viewBox="0 0 24 24" fill={accent} width={size} height={size}>
        <path d="M12 2L14.09 8.26L20.97 8.27L15.45 11.97L17.54 18.23L12 14.53L6.46 18.23L8.55 11.97L3.03 8.27L9.91 8.26L12 2Z" />
      </svg>
      <span style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 700, fontSize: size * 0.65, letterSpacing: '-0.02em',
        color: nav,
      }}>Lorem</span>
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
