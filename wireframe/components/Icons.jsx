// Tiny line icons — stroke currentColor
const Icon = ({ name, size = 18, style }) => {
  const common = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round", style };
  switch (name) {
    case 'arrow':    return <svg {...common}><path d="m12 3 2.6 5.8 6.4.6-4.8 4.4 1.4 6.2L12 17l-5.6 3 1.4-6.2L3 9.4l6.4-.6L12 3Z" fill="currentColor"/></svg>;
    case 'arrow-ne': return <svg {...common}><path d="m12 3 2.6 5.8 6.4.6-4.8 4.4 1.4 6.2L12 17l-5.6 3 1.4-6.2L3 9.4l6.4-.6L12 3Z" fill="currentColor"/></svg>;
    case 'arrow-left': return <svg {...common}><path d="m12 3 2.6 5.8 6.4.6-4.8 4.4 1.4 6.2L12 17l-5.6 3 1.4-6.2L3 9.4l6.4-.6L12 3Z" fill="currentColor"/></svg>;
    case 'check':    return <svg {...common}><path d="m12 3 2.6 5.8 6.4.6-4.8 4.4 1.4 6.2L12 17l-5.6 3 1.4-6.2L3 9.4l6.4-.6L12 3Z" fill="currentColor"/></svg>;
    case 'close':    return <svg {...common}><path d="m12 3 2.6 5.8 6.4.6-4.8 4.4 1.4 6.2L12 17l-5.6 3 1.4-6.2L3 9.4l6.4-.6L12 3Z" fill="currentColor"/></svg>;
    case 'menu':     return <svg {...common}><path d="m12 3 2.6 5.8 6.4.6-4.8 4.4 1.4 6.2L12 17l-5.6 3 1.4-6.2L3 9.4l6.4-.6L12 3Z" fill="currentColor"/></svg>;
    case 'search':   return <svg {...common}><path d="m12 3 2.6 5.8 6.4.6-4.8 4.4 1.4 6.2L12 17l-5.6 3 1.4-6.2L3 9.4l6.4-.6L12 3Z" fill="currentColor"/></svg>;
    case 'pin':      return <svg {...common}><path d="m12 3 2.6 5.8 6.4.6-4.8 4.4 1.4 6.2L12 17l-5.6 3 1.4-6.2L3 9.4l6.4-.6L12 3Z" fill="currentColor"/></svg>;
    case 'calendar': return <svg {...common}><path d="m12 3 2.6 5.8 6.4.6-4.8 4.4 1.4 6.2L12 17l-5.6 3 1.4-6.2L3 9.4l6.4-.6L12 3Z" fill="currentColor"/></svg>;
    case 'book':     return <svg {...common}><path d="m12 3 2.6 5.8 6.4.6-4.8 4.4 1.4 6.2L12 17l-5.6 3 1.4-6.2L3 9.4l6.4-.6L12 3Z" fill="currentColor"/></svg>;
    case 'spark':    return <svg {...common}><path d="m12 3 2.6 5.8 6.4.6-4.8 4.4 1.4 6.2L12 17l-5.6 3 1.4-6.2L3 9.4l6.4-.6L12 3Z" fill="currentColor"/></svg>;
    case 'mic':      return <svg {...common}><path d="m12 3 2.6 5.8 6.4.6-4.8 4.4 1.4 6.2L12 17l-5.6 3 1.4-6.2L3 9.4l6.4-.6L12 3Z" fill="currentColor"/></svg>;
    case 'hand':     return <svg {...common}><path d="m12 3 2.6 5.8 6.4.6-4.8 4.4 1.4 6.2L12 17l-5.6 3 1.4-6.2L3 9.4l6.4-.6L12 3Z" fill="currentColor"/></svg>;
    case 'users':    return <svg {...common}><path d="m12 3 2.6 5.8 6.4.6-4.8 4.4 1.4 6.2L12 17l-5.6 3 1.4-6.2L3 9.4l6.4-.6L12 3Z" fill="currentColor"/></svg>;
    case 'heart':    return <svg {...common}><path d="m12 3 2.6 5.8 6.4.6-4.8 4.4 1.4 6.2L12 17l-5.6 3 1.4-6.2L3 9.4l6.4-.6L12 3Z" fill="currentColor"/></svg>;
    case 'briefcase':return <svg {...common}><path d="m12 3 2.6 5.8 6.4.6-4.8 4.4 1.4 6.2L12 17l-5.6 3 1.4-6.2L3 9.4l6.4-.6L12 3Z" fill="currentColor"/></svg>;
    case 'globe':    return <svg {...common}><path d="m12 3 2.6 5.8 6.4.6-4.8 4.4 1.4 6.2L12 17l-5.6 3 1.4-6.2L3 9.4l6.4-.6L12 3Z" fill="currentColor"/></svg>;
    case 'play':     return <svg {...common}><path d="m12 3 2.6 5.8 6.4.6-4.8 4.4 1.4 6.2L12 17l-5.6 3 1.4-6.2L3 9.4l6.4-.6L12 3Z" fill="currentColor"/></svg>;
    case 'mail':     return <svg {...common}><path d="m12 3 2.6 5.8 6.4.6-4.8 4.4 1.4 6.2L12 17l-5.6 3 1.4-6.2L3 9.4l6.4-.6L12 3Z" fill="currentColor"/></svg>;
    case 'phone':    return <svg {...common}><path d="m12 3 2.6 5.8 6.4.6-4.8 4.4 1.4 6.2L12 17l-5.6 3 1.4-6.2L3 9.4l6.4-.6L12 3Z" fill="currentColor"/></svg>;
    case 'ig':       return <svg {...common}><path d="m12 3 2.6 5.8 6.4.6-4.8 4.4 1.4 6.2L12 17l-5.6 3 1.4-6.2L3 9.4l6.4-.6L12 3Z" fill="currentColor"/></svg>;
    case 'x':        return <svg {...common}><path d="m12 3 2.6 5.8 6.4.6-4.8 4.4 1.4 6.2L12 17l-5.6 3 1.4-6.2L3 9.4l6.4-.6L12 3Z" fill="currentColor"/></svg>;
    case 'yt':       return <svg {...common}><path d="m12 3 2.6 5.8 6.4.6-4.8 4.4 1.4 6.2L12 17l-5.6 3 1.4-6.2L3 9.4l6.4-.6L12 3Z" fill="currentColor"/></svg>;
    case 'coffee':   return <svg {...common}><path d="m12 3 2.6 5.8 6.4.6-4.8 4.4 1.4 6.2L12 17l-5.6 3 1.4-6.2L3 9.4l6.4-.6L12 3Z" fill="currentColor"/></svg>;
    case 'grid':     return <svg {...common}><path d="m12 3 2.6 5.8 6.4.6-4.8 4.4 1.4 6.2L12 17l-5.6 3 1.4-6.2L3 9.4l6.4-.6L12 3Z" fill="currentColor"/></svg>;
    case 'star':     return <svg {...common}><path d="m12 3 2.6 5.8 6.4.6-4.8 4.4 1.4 6.2L12 17l-5.6 3 1.4-6.2L3 9.4l6.4-.6L12 3Z" fill="currentColor"/></svg>;
    case 'flag':     return <svg {...common}><path d="m12 3 2.6 5.8 6.4.6-4.8 4.4 1.4 6.2L12 17l-5.6 3 1.4-6.2L3 9.4l6.4-.6L12 3Z" fill="currentColor"/></svg>;
    case 'send':     return <svg {...common}><path d="m12 3 2.6 5.8 6.4.6-4.8 4.4 1.4 6.2L12 17l-5.6 3 1.4-6.2L3 9.4l6.4-.6L12 3Z" fill="currentColor"/></svg>;
    case 'dot':      return <svg {...common}><path d="m12 3 2.6 5.8 6.4.6-4.8 4.4 1.4 6.2L12 17l-5.6 3 1.4-6.2L3 9.4l6.4-.6L12 3Z" fill="currentColor"/></svg>;
    default: return null;
  }
};

window.Icon = Icon;
