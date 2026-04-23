// i18n + shared content for Resonansi
const CONTENT = {
  id: {
    nav: {
      resonansi: 'Resonansi',
      services: 'Layanan',
      business: 'Bisnis',
      library: 'Perpustakaan',
      participation: 'Partisipasi',
      activities: 'Aktivitas',
      contact: 'Kontak',
      join: 'Gabung Resocircle',
      explore: 'Jelajahi Resonansi',
      login: 'Masuk',
    },
    footer: {
      tag: 'Ruang publik untuk gerakan antikorupsi — bersama, aman, dan kreatif.',
      address: 'Jl. Kalibata Timur IV D No. 6\nJakarta Selatan 12740',
      open: 'Senin – Sabtu · 09.00 – 21.00',
      links: 'Peta Situs',
      follow: 'Ikuti Kami',
      newsletter: 'Kabar bulanan',
      newsletterDesc: 'Undangan diskusi, rilis buku, dan ruang yang baru dibuka.',
      subscribe: 'Berlangganan',
      legal: '© 2026 Resonansi · Dikelola oleh Indonesia Corruption Watch',
      faq: 'Pertanyaan Umum',
      publications: 'Publikasi',
    },
    home: {
      eyebrow: 'Ruang Publik · Jakarta Selatan',
      h1pre: 'Tempat untuk berpikir,',
      h1accent: 'berjejaring,',
      h1post: 'dan melawan korupsi — bersama.',
      sub: 'Resonansi adalah ruang terbuka milik ICW untuk diskusi, kerja, belajar, dan berkarya. Pintu kami tidak terkunci untuk warga, aktivis, seniman, peneliti, dan siapa pun yang percaya pada transparansi.',
      cta1: 'Jelajahi Resonansi',
      cta2: 'Lihat agenda minggu ini',
      statsLabel: 'Sejak 2022',
      stats: [
        { n: '412', l: 'Anggota Resocircle' },
        { n: '1.284', l: 'Peserta diskusi' },
        { n: '68', l: 'Organisasi mitra' },
        { n: '7', l: 'Ruangan siap pakai' },
      ],
      sectionEvents: 'Agenda minggu ini',
      sectionEventsSub: 'Terbuka untuk umum. RSVP lewat Resocircle.',
      sectionVoices: 'Suara dari ruangan',
      sectionVoicesSub: 'Apa kata mereka yang sudah lebih dulu singgah.',
      sectionSpace: 'Keliling ruangannya',
      sectionSpaceSub: 'Tujuh ruang dengan karakter berbeda — dari baca senyap sampai diskusi ramai.',
      sectionValues: 'Nilai yang kami pegang',
      sectionFind: 'Mampir yuk',
      sectionFindSub: 'Kalibata Timur, dua menit dari stasiun.',
    },
    tweaks: {
      title: 'Tweaks',
      lang: 'Bahasa',
      density: 'Kerapatan',
      hero: 'Varian hero',
      reset: 'Kembali semula',
    },
  },
  en: {
    nav: {
      resonansi: 'Resonansi',
      services: 'Services',
      business: 'Business',
      library: 'Library',
      participation: 'Participation',
      activities: 'Activities',
      contact: 'Contact',
      join: 'Join Resocircle',
      explore: 'Explore Resonansi',
      login: 'Sign in',
    },
    footer: {
      tag: 'A public space for the anti-corruption movement — together, safe, and creative.',
      address: 'Jl. Kalibata Timur IV D No. 6\nSouth Jakarta 12740',
      open: 'Mon – Sat · 09:00 – 21:00',
      links: 'Sitemap',
      follow: 'Follow us',
      newsletter: 'Monthly dispatch',
      newsletterDesc: 'Discussions, book launches, and newly opened rooms.',
      subscribe: 'Subscribe',
      legal: '© 2026 Resonansi · Operated by Indonesia Corruption Watch',
      faq: 'FAQ',
      publications: 'Publications',
    },
    home: {
      eyebrow: 'Public space · South Jakarta',
      h1pre: 'A place to think,',
      h1accent: 'connect,',
      h1post: 'and push back on corruption — together.',
      sub: 'Resonansi is an open space by ICW for conversation, work, learning, and making. Our doors are unlocked to citizens, activists, artists, researchers, and anyone who believes in transparency.',
      cta1: 'Explore Resonansi',
      cta2: "See this week's agenda",
      statsLabel: 'Since 2022',
      stats: [
        { n: '412', l: 'Resocircle members' },
        { n: '1,284', l: 'Discussion attendees' },
        { n: '68', l: 'Partner organizations' },
        { n: '7', l: 'Rooms ready to use' },
      ],
      sectionEvents: "This week's agenda",
      sectionEventsSub: 'Open to the public. RSVP via Resocircle.',
      sectionVoices: 'Voices from the room',
      sectionVoicesSub: 'What our earliest visitors are saying.',
      sectionSpace: 'Take a look around',
      sectionSpaceSub: 'Seven rooms with distinct characters — from silent reading to loud debate.',
      sectionValues: 'What we stand on',
      sectionFind: 'Come visit',
      sectionFindSub: 'Kalibata Timur, two minutes from the station.',
    },
    tweaks: {
      title: 'Tweaks',
      lang: 'Language',
      density: 'Density',
      hero: 'Hero variant',
      reset: 'Reset',
    },
  },
};

// Agenda — same across languages for simplicity
const EVENTS = [
  { date: 'Sel · 28 Apr',   time: '19.00', tone: 'yellow', type: { id:'Diskusi Publik', en:'Public Discussion' },
    title: { id:'APBD Jakarta di mata warga: ke mana uang kita?', en:'Jakarta\'s budget, through citizens\' eyes' },
    speakers: 'Roy Salam · Almas Sjafrina · moderator Tama S. Langkun',
    room: 'Ruang Garuda', seats: '40 / 60' },
  { date: 'Kam · 30 Apr',   time: '16.30', tone: 'pink',   type: { id:'Kelas Seni', en:'Art Workshop' },
    title: { id:'Poster Aktivisme: teknik risograph', en:'Activist posters: risograph technique' },
    speakers: 'Gerilya Print Lab', room: 'Studio Kertas', seats: '12 / 16' },
  { date: 'Jum · 01 Mei',   time: '10.00', tone: 'navy',   type: { id:'Aksi Solidaritas', en:'Solidarity Action' },
    title: { id:'Hari Buruh: ruang aman untuk pekerja', en:'May Day: a safe room for workers' },
    speakers: 'LBH Jakarta · KontraS · Resonansi',
    room: 'Halaman Depan', seats: 'Terbuka' },
  { date: 'Sab · 02 Mei',   time: '14.00', tone: 'green',  type: { id:'Klub Baca', en:'Reading Club' },
    title: { id:'"Orang-Orang Oetimu" — diskusi bulanan', en:'"Orang-Orang Oetimu" — monthly read' },
    speakers: 'Dipandu Intan Paramaditha', room: 'Perpustakaan', seats: '18 / 24' },
];

const TESTIMONIALS = [
  { quote: { id:'Pertama kali merasa bisa bicara soal korupsi sambil minum kopi — bukan di panggung, bukan di pengadilan. Cuma ngobrol, tapi serius.',
             en:'First time I felt I could talk about corruption over coffee — not on a stage, not in court. Just chatting, but seriously.' },
    name: 'Dinda Rachmawati', role: { id:'Mahasiswa Hukum UI', en:'Law student, UI' }, tone:'yellow' },
  { quote: { id:'Kami pinjam Ruang Garuda untuk rilis laporan. Proyektor jalan, mikrofon jalan, dan yang terpenting: rasanya aman.',
             en:'We borrowed Ruang Garuda for a report launch. Projector worked, mic worked, and most of all — it felt safe.' },
    name: 'Lukas Hutagalung', role: { id:'Peneliti, TII', en:'Researcher, TII' }, tone:'pink' },
  { quote: { id:'Rak buku saya kebanjiran pengunjung. Di tempat lain, zine saya cuma diam di kardus.',
             en:"My shelf is flooded with readers. Elsewhere my zines just sit in a cardboard box." },
    name: 'Bening Ayu', role: { id:'Zine-maker', en:'Zine maker' }, tone:'green' },
];

const ROOMS = [
  { id:'garuda',  name:'Ruang Garuda', cap:'60 orang',  type:{id:'Aula diskusi', en:'Discussion hall'}, tone:'yellow' },
  { id:'kertas',  name:'Studio Kertas', cap:'16 orang', type:{id:'Workshop & seni', en:'Workshop & arts'}, tone:'pink' },
  { id:'pustaka', name:'Perpustakaan',  cap:'32 orang', type:{id:'Baca & klub',    en:'Reading & club'}, tone:'green' },
  { id:'podcast', name:'Studio Suara',  cap:'4 orang',  type:{id:'Rekaman podcast', en:'Podcast studio'}, tone:'navy' },
  { id:'kopi',   name:'Beranda Kopi',   cap:'30 orang', type:{id:'Kafe & pertemuan', en:'Cafe & meetings'}, tone:'yellow' },
  { id:'teras',   name:'Teras Warga',    cap:'Terbuka',  type:{id:'Halaman publik',  en:'Open yard'}, tone:'pink' },
  { id:'riset',   name:'Ruang Riset',    cap:'8 orang',  type:{id:'Kerja tenang',    en:'Quiet working'}, tone:'green' },
];

const VALUES = [
  { t:{id:'Terbuka', en:'Open'}, d:{id:'Siapa pun boleh masuk. Siapa pun boleh bicara, selama dengan hormat.', en:'Anyone may enter. Anyone may speak — respectfully.'} },
  { t:{id:'Aman',    en:'Safe'}, d:{id:'Ruang aman dari intimidasi, pelecehan, dan kooptasi kepentingan.', en:'Safe from intimidation, harassment, and co-opting of interests.'} },
  { t:{id:'Kolaboratif', en:'Collaborative'}, d:{id:'Kami bekerja berjejaring. Ide tidak lahir di satu kepala.', en:'We work as a network. Ideas are never born in one head.'} },
  { t:{id:'Kreatif', en:'Creative'}, d:{id:'Seni, tulisan, dan humor adalah alat serius melawan korupsi.', en:'Art, writing, and humour are serious tools against corruption.'} },
];

window.CONTENT = CONTENT;
window.EVENTS = EVENTS;
window.TESTIMONIALS = TESTIMONIALS;
window.ROOMS = ROOMS;
window.VALUES = VALUES;
