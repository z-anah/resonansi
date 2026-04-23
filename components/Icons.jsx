// Tiny line icons — stroke currentColor
const Icon = ({ name, size = 18, style }) => {
  const common = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round", style };
  switch (name) {
    case 'arrow':    return <svg {...common}><path d="M5 12h14M13 6l6 6-6 6"/></svg>;
    case 'arrow-ne': return <svg {...common}><path d="M7 17 17 7M9 7h8v8"/></svg>;
    case 'arrow-left': return <svg {...common}><path d="M19 12H5M11 6 5 12l6 6"/></svg>;
    case 'check':    return <svg {...common}><path d="m5 12 5 5L20 7"/></svg>;
    case 'close':    return <svg {...common}><path d="M6 6l12 12M18 6 6 18"/></svg>;
    case 'menu':     return <svg {...common}><path d="M4 7h16M4 12h16M4 17h10"/></svg>;
    case 'search':   return <svg {...common}><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>;
    case 'pin':      return <svg {...common}><path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11Z"/><circle cx="12" cy="10" r="2.5"/></svg>;
    case 'calendar': return <svg {...common}><rect x="3" y="5" width="18" height="16" rx="3"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>;
    case 'book':     return <svg {...common}><path d="M4 5a2 2 0 0 1 2-2h12v16H6a2 2 0 0 0-2 2V5Z"/><path d="M4 19a2 2 0 0 1 2-2h12"/></svg>;
    case 'spark':    return <svg {...common}><path d="M12 3v6M12 15v6M3 12h6M15 12h6M6 6l3 3M15 15l3 3M18 6l-3 3M6 18l3-3"/></svg>;
    case 'mic':      return <svg {...common}><rect x="9" y="3" width="6" height="12" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/></svg>;
    case 'hand':     return <svg {...common}><path d="M7 11V5a1.5 1.5 0 0 1 3 0v5M10 10V4a1.5 1.5 0 0 1 3 0v6M13 10V5a1.5 1.5 0 0 1 3 0v8M16 10a1.5 1.5 0 0 1 3 0v5a7 7 0 0 1-7 7 7 7 0 0 1-7-7v-3"/></svg>;
    case 'users':    return <svg {...common}><circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3 2.7-5 6-5s6 2 6 5"/><circle cx="17" cy="9" r="2.6"/><path d="M15 20c0-2.4 2-4 4.5-4"/></svg>;
    case 'heart':    return <svg {...common}><path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10Z"/></svg>;
    case 'briefcase':return <svg {...common}><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18"/></svg>;
    case 'globe':    return <svg {...common}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/></svg>;
    case 'play':     return <svg {...common}><path d="M8 5v14l11-7L8 5Z"/></svg>;
    case 'mail':     return <svg {...common}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>;
    case 'phone':    return <svg {...common}><path d="M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"/></svg>;
    case 'ig':       return <svg {...common}><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.8" fill="currentColor"/></svg>;
    case 'x':        return <svg {...common}><path d="M4 4l16 16M20 4 4 20"/></svg>;
    case 'yt':       return <svg {...common}><rect x="3" y="6" width="18" height="12" rx="3"/><path d="m11 9 4 3-4 3V9Z" fill="currentColor"/></svg>;
    case 'coffee':   return <svg {...common}><path d="M4 8h12v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8Z"/><path d="M16 10h2a2 2 0 0 1 0 4h-2M8 3v2M12 3v2"/></svg>;
    case 'grid':     return <svg {...common}><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>;
    case 'star':     return <svg {...common}><path d="m12 3 2.6 5.8 6.4.6-4.8 4.4 1.4 6.2L12 17l-5.6 3 1.4-6.2L3 9.4l6.4-.6L12 3Z"/></svg>;
    case 'flag':     return <svg {...common}><path d="M4 21V4h12l-2 4 2 4H4"/></svg>;
    case 'send':     return <svg {...common}><path d="M4 20 21 12 4 4v6l10 2-10 2v6Z"/></svg>;
    case 'dot':      return <svg {...common}><circle cx="12" cy="12" r="4" fill="currentColor"/></svg>;
    default: return null;
  }
};

window.Icon = Icon;
