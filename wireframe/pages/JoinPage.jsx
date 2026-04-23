// Signature piece: Resocircle multi-step join flow

const STEPS = [
  { id: 'who',   t:{id:'Kenalan', en:'Hello'} },
  { id: 'tier',  t:{id:'Tingkat', en:'Tier'} },
  { id: 'interest', t:{id:'Minat', en:'Interests'} },
  { id: 'pledge', t:{id:'Komitmen', en:'Pledge'} },
  { id: 'done',  t:{id:'Selamat datang', en:'Welcome'} },
];

const INTERESTS = [
  { k:'diskusi', id:'Diskusi publik', en:'Public discussion', tone:'yellow' },
  { k:'seni',    id:'Seni & kreatif', en:'Arts & creative', tone:'pink' },
  { k:'riset',   id:'Riset & data',   en:'Research & data', tone:'navy' },
  { k:'perpus',  id:'Klub baca',      en:'Reading club', tone:'green' },
  { k:'advokasi',id:'Advokasi warga', en:'Civic advocacy', tone:'yellow' },
  { k:'podcast', id:'Podcast & media',en:'Podcast & media', tone:'pink' },
  { k:'volunteer',id:'Relawan acara', en:'Event volunteer', tone:'green' },
  { k:'fellow',  id:'Fellowship',     en:'Fellowship', tone:'navy' },
];

const PLEDGES = [
  { id:'Saya akan bicara dengan hormat, bahkan ketika tidak setuju.', en:'I will speak with respect, even when I disagree.' },
  { id:'Saya akan menjaga ruang aman dari intimidasi & pelecehan.',   en:'I will keep this space safe from intimidation & harassment.' },
  { id:'Saya memahami bahwa Resonansi bebas dari kepentingan partai.', en:'I understand Resonansi is free of party interests.' },
];

const JoinPage = ({ t, lang, setPage }) => {
  const [step, setStep] = React.useState(0);
  const [data, setData] = React.useState({
    name: '', email: '', city: 'Jakarta',
    tier: 'warga',
    interests: [],
    pledges: [false, false, false],
  });
  const next = () => setStep(s => Math.min(s + 1, STEPS.length - 1));
  const back = () => setStep(s => Math.max(s - 1, 0));
  const set = (patch) => setData(d => ({ ...d, ...patch }));
  const canNext = () => {
    if (step === 0) return data.name.trim().length > 1 && /@/.test(data.email);
    if (step === 1) return !!data.tier;
    if (step === 2) return data.interests.length > 0;
    if (step === 3) return data.pledges.every(Boolean);
    return true;
  };

  return (
    <div style={{ background:'var(--bg-2)', minHeight:'calc(100vh - 80px)', padding:'var(--gap-5) 0' }}>
      <div className="app">
        {/* Progress rail */}
        <div style={{ maxWidth: 860, margin:'0 auto 32px' }}>
          <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom: 10 }}>
            <div className="eyebrow">RESOCIRCLE · {lang==='id'?'Bergabung':'Join'}</div>
            <div className="mono" style={{ fontSize: 11, color:'var(--muted)' }}>
              {lang==='id'?'Langkah':'Step'} {Math.min(step+1, STEPS.length)} / {STEPS.length}
            </div>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:`repeat(${STEPS.length}, 1fr)`, gap: 8 }}>
            {STEPS.map((s, i) => (
              <div key={s.id} style={{
                height: 6, borderRadius: 3,
                background: i <= step ? 'var(--navy)' : 'rgba(0,74,120,0.12)',
                transition:'background .3s',
              }}/>
            ))}
          </div>
          <div style={{ display:'grid', gridTemplateColumns:`repeat(${STEPS.length}, 1fr)`, gap: 8, marginTop: 10 }}>
            {STEPS.map((s, i) => (
              <div key={s.id} className="mono" style={{
                fontSize: 10, letterSpacing:'0.08em', textTransform:'uppercase',
                color: i <= step ? 'var(--navy)' : 'var(--muted)',
                opacity: i === step ? 1 : 0.6,
              }}>{s.t[lang]}</div>
            ))}
          </div>
        </div>

        {/* Step card */}
        <div style={{
          maxWidth: 860, margin:'0 auto',
          background: step === STEPS.length - 1 ? 'var(--navy)' : 'var(--paper)',
          color: step === STEPS.length - 1 ? '#FFF9E8' : 'var(--ink)',
          border:'1px solid ' + (step === STEPS.length - 1 ? 'var(--navy)' : 'var(--line)'),
          borderRadius:'var(--radius-xl)',
          padding: 48,
          boxShadow:'var(--shadow-lg)',
          minHeight: 520,
          display:'flex', flexDirection:'column',
        }}>
          {step === 0 && <StepWho   lang={lang} data={data} set={set}/>}
          {step === 1 && <StepTier  lang={lang} data={data} set={set}/>}
          {step === 2 && <StepInterest lang={lang} data={data} set={set}/>}
          {step === 3 && <StepPledge lang={lang} data={data} set={set}/>}
          {step === 4 && <StepDone  lang={lang} data={data} setPage={setPage}/>}

          {step < STEPS.length - 1 && (
            <div style={{
              marginTop: 'auto', paddingTop: 32,
              borderTop:'1px dashed var(--line)',
              display:'flex', justifyContent:'space-between', alignItems:'center',
            }}>
              <button onClick={back} disabled={step === 0} className="btn btn-ghost"
                style={{ opacity: step === 0 ? 0.4 : 1 }}>
                <Icon name="arrow-left" size={14}/> {lang==='id'?'Kembali':'Back'}
              </button>
              <button onClick={next} disabled={!canNext()} className="btn btn-primary"
                style={{ opacity: canNext() ? 1 : 0.4, cursor: canNext() ? 'pointer' : 'not-allowed' }}>
                {step === STEPS.length - 2 ? (lang==='id'?'Selesaikan':'Finish') : (lang==='id'?'Lanjut':'Continue')}
                <Icon name="arrow" size={14}/>
              </button>
            </div>
          )}
        </div>

        {/* Side note */}
        {step === 0 && (
          <div style={{ maxWidth: 860, margin:'24px auto 0', textAlign:'center' }}>
            <div className="mono" style={{ fontSize: 11, color:'var(--muted)' }}>
              {lang==='id'
                ? 'Data kamu dienkripsi dan hanya dipakai untuk keanggotaan. Kami tidak menjual data — pernah.'
                : 'Your data is encrypted and used only for membership. We never sell it — ever.'}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

/* --- Step 1: Who --- */
const StepWho = ({ lang, data, set }) => (
  <div>
    <h2 style={{ margin: 0, fontFamily:'var(--font-display)', fontWeight: 700, fontSize: 44, letterSpacing:'-0.03em', color:'var(--navy)', lineHeight: 1.05 }}>
      {lang==='id'?'Kenalkan, siapa kamu?' : "First — who are you?"}
    </h2>
    <p style={{ marginTop: 12, fontSize: 17, color:'var(--muted)', maxWidth: 540 }}>
      {lang==='id'
        ? 'Cukup dua baris. Kami akan pakai nama ini untuk menyapa kamu di ruang.'
        : "Just two lines. We'll use this name to greet you in the room."}
    </p>
    <div className="r-grid-2" style={{ marginTop: 36, gap: 16 }}>
      <JoinInput label={lang==='id'?'Nama panggilan':'Preferred name'} val={data.name} onChange={v=>set({ name: v })} placeholder={lang==='id'?'Misal: Dinda':'e.g. Dinda'} autoFocus/>
      <JoinInput label="Surel" val={data.email} onChange={v=>set({ email: v })} placeholder="lorem@ipsum.dolor" type="email"/>
      <JoinInput label={lang==='id'?'Kota':'City'} val={data.city} onChange={v=>set({ city: v })} placeholder="Jakarta"/>
      <JoinInput label={lang==='id'?'Kata sandi':'Password'} val={data.pw||''} onChange={v=>set({ pw: v })} placeholder="••••••••" type="password"/>
    </div>
  </div>
);

const JoinInput = ({ label, val, onChange, placeholder, type='text', autoFocus }) => {
  const [focus, setFocus] = React.useState(false);
  return (
    <div>
      <label className="mono" style={{ fontSize: 11, color:'var(--muted)', letterSpacing:'0.08em', textTransform:'uppercase' }}>{label}</label>
      <input autoFocus={autoFocus} value={val} onChange={e=>onChange(e.target.value)} onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)}
        type={type} placeholder={placeholder} style={{
          width:'100%', padding:'14px 16px', borderRadius: 14, marginTop: 6,
          border:'1px solid ' + (focus ? 'var(--navy)' : 'var(--line)'),
          background:'var(--bg)', fontFamily:'var(--font-display)', fontSize: 16, color:'var(--ink)',
          outline:'none', transition:'border-color .15s',
        }}/>
    </div>
  );
};

/* --- Step 2: Tier --- */
const StepTier = ({ lang, data, set }) => {
  const tiers = [
    { k:'pelajar', n:{id:'Pelajar', en:'Student'}, p:'Rp 0', per:{id:'/bulan', en:'/month'}, tone:'yellow', d:{id:'Gratis untuk mahasiswa & pelajar aktif.', en:'Free for active students.'} },
    { k:'warga',   n:{id:'Warga',   en:'Citizen'}, p:'Rp 75K', per:{id:'/bulan', en:'/month'}, tone:'navy', d:{id:'Paling populer. Akses penuh.', en:'Most popular. Full access.'} },
    { k:'organisasi', n:{id:'Organisasi', en:'Organization'}, p:'Rp 600K', per:{id:'/bulan', en:'/month'}, tone:'pink', d:{id:'Untuk lembaga & komunitas.', en:'For organisations & communities.'} },
  ];
  return (
    <div>
      <h2 style={{ margin: 0, fontFamily:'var(--font-display)', fontWeight: 700, fontSize: 44, letterSpacing:'-0.03em', color:'var(--navy)', lineHeight: 1.05 }}>
        {lang==='id'?'Pilih tingkatan kamu':'Pick your tier'}
      </h2>
      <p style={{ marginTop: 12, fontSize: 17, color:'var(--muted)' }}>
        {lang==='id'?'Bisa diubah kapan saja, tanpa denda.':'Change anytime, no fees.'}
      </p>
      <div className="r-grid-3" style={{ marginTop: 32, gap: 14 }}>
        {tiers.map(tier => {
          const selected = data.tier === tier.k;
          return (
            <button key={tier.k} onClick={()=>set({ tier: tier.k })} style={{
              textAlign:'left', cursor:'pointer',
              padding: 22, borderRadius:'var(--radius-lg)',
              background: selected ? (tier.tone==='navy'?'var(--navy)':tier.tone==='yellow'?'var(--yellow)':'var(--pink-soft)') : 'var(--bg)',
              color: selected && tier.tone==='navy' ? '#FFF9E8' : 'var(--ink)',
              border:'2px solid ' + (selected ? 'var(--navy)' : 'var(--line)'),
              transition: 'all .15s',
              position:'relative',
            }}>
              {selected && (
                <div style={{
                  position:'absolute', top: 14, right: 14,
                  width: 22, height: 22, borderRadius:'50%',
                  background:'var(--navy)', color:'var(--yellow)',
                  display:'flex', alignItems:'center', justifyContent:'center',
                }}><Icon name="check" size={14}/></div>
              )}
              <div className="mono" style={{ fontSize: 11, opacity: 0.7, letterSpacing:'0.1em' }}>{tier.n[lang]}</div>
              <div style={{ marginTop: 14, display:'flex', alignItems:'baseline', gap: 4 }}>
                <span style={{ fontFamily:'var(--font-display)', fontWeight: 700, fontSize: 32, letterSpacing:'-0.03em' }}>{tier.p}</span>
                <span className="mono" style={{ fontSize: 11, opacity: 0.7 }}>{tier.per[lang]}</span>
              </div>
              <p style={{ margin:'12px 0 0', fontSize: 13, opacity: 0.8, lineHeight: 1.4 }}>{tier.d[lang]}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
};

/* --- Step 3: Interests --- */
const StepInterest = ({ lang, data, set }) => {
  const toggle = (k) => {
    const has = data.interests.includes(k);
    set({ interests: has ? data.interests.filter(x => x !== k) : [...data.interests, k] });
  };
  return (
    <div>
      <h2 style={{ margin: 0, fontFamily:'var(--font-display)', fontWeight: 700, fontSize: 44, letterSpacing:'-0.03em', color:'var(--navy)', lineHeight: 1.05 }}>
        {lang==='id'?'Apa yang menarik buat kamu?':'What draws you in?'}
      </h2>
      <p style={{ marginTop: 12, fontSize: 17, color:'var(--muted)' }}>
        {lang==='id'?'Pilih 1 atau lebih. Ini mengatur undangan yang kamu terima.':'Pick 1 or more. This shapes the invites you get.'}
      </p>
      <div className="r-grid-4" style={{ marginTop: 32, gap: 12 }}>
        {INTERESTS.map(it => {
          const active = data.interests.includes(it.k);
          return (
            <button key={it.k} onClick={()=>toggle(it.k)} style={{
              padding: '22px 18px', cursor:'pointer', textAlign:'left',
              borderRadius:'var(--radius)', border:'2px solid ' + (active ? 'var(--navy)' : 'var(--line)'),
              background: active
                ? (it.tone==='yellow'?'var(--yellow)':it.tone==='pink'?'var(--pink-soft)':it.tone==='green'?'var(--green-soft)':'var(--navy)')
                : 'var(--bg)',
              color: active && it.tone==='navy' ? '#FFF9E8' : 'var(--navy-900)',
              transition:'all .15s',
              minHeight: 100,
              display:'flex', flexDirection:'column', justifyContent:'space-between',
            }}>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'start' }}>
                <div style={{ fontFamily:'var(--font-display)', fontWeight: 600, fontSize: 15, lineHeight: 1.25 }}>{it[lang]}</div>
                {active && <Icon name="check" size={16}/>}
              </div>
              <div className="mono" style={{ fontSize: 10, opacity: 0.5, letterSpacing:'0.08em' }}>#{it.k}</div>
            </button>
          );
        })}
      </div>
      <div className="mono" style={{ marginTop: 20, fontSize: 11, color:'var(--muted)' }}>
        {data.interests.length} {lang==='id'?'dipilih':'selected'}
      </div>
    </div>
  );
};

/* --- Step 4: Pledge --- */
const StepPledge = ({ lang, data, set }) => {
  const toggle = (i) => {
    const next = [...data.pledges];
    next[i] = !next[i];
    set({ pledges: next });
  };
  return (
    <div>
      <h2 style={{ margin: 0, fontFamily:'var(--font-display)', fontWeight: 700, fontSize: 44, letterSpacing:'-0.03em', color:'var(--navy)', lineHeight: 1.05 }}>
        {lang==='id'?'Janji kecil sebelum masuk':'A small pledge before entering'}
      </h2>
      <p style={{ marginTop: 12, fontSize: 17, color:'var(--muted)', maxWidth: 620 }}>
        {lang==='id'?'Bukan kontrak. Cuma tiga hal yang membuat ruangan ini bisa bertahan.':'Not a contract. Just three things that keep this room alive.'}
      </p>
      <div style={{ marginTop: 32, display:'flex', flexDirection:'column', gap: 12 }}>
        {PLEDGES.map((p, i) => {
          const checked = data.pledges[i];
          return (
            <button key={i} onClick={()=>toggle(i)} style={{
              cursor:'pointer', textAlign:'left', padding: 22,
              borderRadius:'var(--radius-lg)',
              border:'2px solid ' + (checked ? 'var(--green)' : 'var(--line)'),
              background: checked ? 'var(--green-soft)' : 'var(--bg)',
              display:'grid', gridTemplateColumns:'auto 1fr', gap: 18, alignItems:'center',
              transition:'all .15s',
            }}>
              <div style={{
                width: 32, height: 32, borderRadius: 10,
                background: checked ? 'var(--navy)' : 'transparent',
                border:'2px solid ' + (checked ? 'var(--navy)' : 'var(--line)'),
                color:'var(--yellow)',
                display:'flex', alignItems:'center', justifyContent:'center',
                transition:'all .15s',
              }}>{checked && <Icon name="check" size={18}/>}</div>
              <div style={{ fontFamily:'var(--font-serif)', fontStyle:'italic', fontSize: 22, lineHeight: 1.3, color: checked ? '#1F5D39' : 'var(--navy)' }}>
                "{p[lang]}"
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

/* --- Step 5: Done --- */
const StepDone = ({ lang, data, setPage }) => {
  const code = 'RESO-' + String(Math.floor(Math.random() * 90000) + 10000);
  return (
    <div style={{ display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', flex: 1, textAlign:'center' }}>
      <ConfettiBurst/>
      <div className="eyebrow" style={{ color:'var(--yellow)', opacity:1 }}>
        {lang==='id'?'Kamu resmi anggota':'You are now a member'}
      </div>
      <h2 style={{ margin:'18px 0 0', fontFamily:'var(--font-display)', fontWeight: 700, fontSize: 64, letterSpacing:'-0.035em', lineHeight: 1.0, color:'#FFF9E8' }}>
        {lang==='id' ? (<>Selamat datang,<br/><span style={{ fontFamily:'var(--font-serif)', fontStyle:'italic', fontWeight: 400, color:'var(--yellow)' }}>{data.name || 'kawan'}.</span></>)
                     : (<>Welcome,<br/><span style={{ fontFamily:'var(--font-serif)', fontStyle:'italic', fontWeight: 400, color:'var(--yellow)' }}>{data.name || 'friend'}.</span></>)}
      </h2>
      <p style={{ margin:'20px 0 0', fontSize: 17, color:'rgba(255,249,232,0.8)', maxWidth: 560 }}>
        {lang==='id'
          ? 'Kartu anggota digital sudah terkirim ke surelmu. Lemari pinjaman di Perpustakaan terbuka untukmu mulai besok.'
          : 'Your digital member card has been sent to your email. The lending shelf at the Library opens to you from tomorrow.'}
      </p>
      <div style={{
        marginTop: 36, padding: '18px 28px',
        background:'rgba(255,213,48,0.15)', border:'1px dashed var(--yellow)',
        borderRadius:'var(--radius-lg)',
      }}>
        <div className="mono" style={{ fontSize: 11, color:'var(--yellow)', letterSpacing:'0.12em' }}>
          {lang==='id'?'KODE ANGGOTA':'MEMBER CODE'}
        </div>
        <div style={{ marginTop: 6, fontFamily:'var(--font-mono)', fontSize: 28, color:'#FFF9E8', letterSpacing:'0.1em' }}>{code}</div>
      </div>
      <div style={{ marginTop: 36, display:'flex', gap: 12 }}>
        <button onClick={()=>setPage('activities')} className="btn btn-accent">
          {lang==='id'?'Lihat agenda minggu ini':"See this week's agenda"} <Icon name="arrow"/>
        </button>
        <button onClick={()=>setPage('home')} className="btn" style={{ background:'transparent', color:'#FFF9E8', border:'1px solid rgba(255,255,255,0.3)' }}>
          {lang==='id'?'Ke beranda':'Back to home'}
        </button>
      </div>
    </div>
  );
};

const ConfettiBurst = () => {
  const pieces = Array.from({ length: 24 }, (_, i) => ({
    left: Math.random() * 100,
    delay: Math.random() * 0.8,
    color: ['var(--yellow)','var(--sky)','var(--pink)','var(--green)','#FFF9E8'][i%5],
    size: 6 + Math.random() * 8,
    rot: Math.random() * 360,
  }));
  return (
    <div style={{ position:'absolute', inset: 0, overflow:'hidden', pointerEvents:'none', borderRadius:'var(--radius-xl)' }}>
      {pieces.map((p,i)=>(
        <div key={i} style={{
          position:'absolute', top:'-20px', left: `${p.left}%`,
          width: p.size, height: p.size * 0.4, background: p.color,
          transform:`rotate(${p.rot}deg)`,
          animation: `confetti 2.6s ${p.delay}s ease-out forwards`,
        }}/>
      ))}
      <style>{`
        @keyframes confetti {
          to { transform: translateY(620px) rotate(720deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

window.JoinPage = JoinPage;
