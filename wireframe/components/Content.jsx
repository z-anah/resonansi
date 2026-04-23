// i18n + shared content for Resonansi
const CONTENT = {
  id: {
    nav: {
      resonansi: 'Lorem',
      services: 'Lorem',
      business: 'Lorem',
      library: 'Lorem',
      participation: 'Lorem',
      activities: 'Lorem',
      contact: 'Lorem',
      join: 'Lorem Ipsum',
      explore: 'Lorem Ipsum',
      login: 'Lorem',
    },
    footer: {
      tag: 'Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor.',
      address: 'Lorem Ipsum Dolor Sit Amet\nLorem Ipsum Dolor Sit',
      open: 'Lorem Ipsum Dolor Sit',
      links: 'Lorem Ipsum',
      follow: 'Lorem Ipsum',
      newsletter: 'Lorem Ipsum',
      newsletterDesc: 'Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet.',
      subscribe: 'Lorem',
      legal: 'Lorem Ipsum Dolor Sit Amet · Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor',
      faq: 'Lorem Ipsum',
      publications: 'Lorem',
    },
    home: {
      eyebrow: 'Lorem Ipsum · Lorem Ipsum',
      h1pre: 'Lorem Ipsum Dolor,',
      h1accent: 'Lorem,',
      h1post: 'Lorem Ipsum Dolor Sit — Lorem.',
      sub: 'Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet.',
      cta1: 'Lorem Ipsum',
      cta2: 'Lorem Ipsum Dolor Sit',
      statsLabel: 'Lorem Ipsum',
      stats: [
        { n: '123', l: 'Lorem Ipsum' },
        { n: '1.234', l: 'Lorem Ipsum' },
        { n: '12', l: 'Lorem Ipsum' },
        { n: '1', l: 'Lorem Ipsum' },
      ],
      sectionEvents: 'Lorem Ipsum Dolor Sit',
      sectionEventsSub: 'Lorem Ipsum Dolor Sit Lorem Ipsum Dolor.',
      sectionVoices: 'Lorem Ipsum Dolor',
      sectionVoicesSub: 'Lorem Ipsum Dolor Sit Amet.',
      sectionSpace: 'Lorem Ipsum Dolor',
      sectionSpaceSub: 'Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet.',
      sectionValues: 'Lorem Ipsum Dolor',
      sectionFind: 'Lorem Ipsum',
      sectionFindSub: 'Lorem Ipsum Dolor Sit Amet.',
    },
    tweaks: {
      title: 'Lorem',
      lang: 'Lorem',
      density: 'Lorem',
      hero: 'Lorem Ipsum',
      reset: 'Lorem Ipsum',
    },
  },
  en: {
    nav: {
      resonansi: 'Lorem',
      services: 'Lorem',
      business: 'Lorem',
      library: 'Lorem',
      participation: 'Lorem',
      activities: 'Lorem',
      contact: 'Lorem',
      join: 'Lorem Ipsum',
      explore: 'Lorem Ipsum',
      login: 'Lorem',
    },
    footer: {
      tag: 'Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor.',
      address: 'Lorem Ipsum Dolor Sit Amet\nLorem Ipsum Dolor Sit',
      open: 'Lorem Ipsum Dolor Sit',
      links: 'Lorem Ipsum',
      follow: 'Lorem Ipsum',
      newsletter: 'Lorem Ipsum',
      newsletterDesc: 'Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet.',
      subscribe: 'Lorem',
      legal: 'Lorem Ipsum Dolor Sit Amet · Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor',
      faq: 'Lorem Ipsum',
      publications: 'Lorem',
    },
    home: {
      eyebrow: 'Lorem Ipsum · Lorem Ipsum',
      h1pre: 'Lorem Ipsum Dolor,',
      h1accent: 'Lorem,',
      h1post: 'Lorem Ipsum Dolor Sit — Lorem.',
      sub: 'Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet.',
      cta1: 'Lorem Ipsum',
      cta2: 'Lorem Ipsum Dolor Sit',
      statsLabel: 'Lorem Ipsum',
      stats: [
        { n: '412', l: 'Lorem Ipsum' },
        { n: '1,284', l: 'Lorem Ipsum' },
        { n: '68', l: 'Lorem Ipsum' },
        { n: '7', l: 'Lorem Ipsum' },
      ],
      sectionEvents: 'Lorem Ipsum Dolor Sit',
      sectionEventsSub: 'Lorem Ipsum Dolor Sit Lorem Ipsum Dolor.',
      sectionVoices: 'Lorem Ipsum Dolor',
      sectionVoicesSub: 'Lorem Ipsum Dolor Sit Amet.',
      sectionSpace: 'Lorem Ipsum Dolor',
      sectionSpaceSub: 'Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet.',
      sectionValues: 'Lorem Ipsum Dolor',
      sectionFind: 'Lorem Ipsum',
      sectionFindSub: 'Lorem Ipsum Dolor Sit Amet.',
    },
    tweaks: {
      title: 'Lorem',
      lang: 'Lorem',
      density: 'Lorem',
      hero: 'Lorem Ipsum',
      reset: 'Lorem Ipsum',
    },
  },
};

// Agenda — same across languages for simplicity
const EVENTS = [
  { date: 'Lorem · Lorem Ipsum',   time: 'Lorem', tone: 'yellow', type: { id:'Lorem Ipsum', en:'Lorem Ipsum' },
    title: { id:'Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet?', en:'Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor.' },
    speakers: 'Lorem Ipsum · Lorem Ipsum · Lorem Ipsum',
    room: 'Lorem Ipsum', seats: 'Lorem / Lorem' },
  { date: 'Lorem · Lorem Ipsum',   time: 'Lorem', tone: 'pink',   type: { id:'Lorem Ipsum', en:'Lorem Ipsum' },
    title: { id:'Lorem Ipsum Dolor Sit Amet', en:'Lorem Ipsum Dolor Sit Amet' },
    speakers: 'Lorem Ipsum', room: 'Lorem Ipsum', seats: 'Lorem / Lorem' },
  { date: 'Lorem · Lorem Ipsum',   time: 'Lorem', tone: 'navy',   type: { id:'Lorem Ipsum', en:'Lorem Ipsum' },
    title: { id:'Lorem Ipsum Dolor Sit Amet', en:'Lorem Ipsum Dolor Sit Amet' },
    speakers: 'Lorem Ipsum · Lorem Ipsum · Lorem Ipsum',
    room: 'Lorem Ipsum', seats: 'Lorem' },
  { date: 'Lorem · Lorem Ipsum',   time: 'Lorem', tone: 'green',  type: { id:'Lorem Ipsum', en:'Lorem Ipsum' },
    title: { id:'Lorem Ipsum Dolor Sit Amet', en:'Lorem Ipsum Dolor Sit Amet' },
    speakers: 'Lorem Ipsum', room: 'Lorem Ipsum', seats: 'Lorem / Lorem' },
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
  { id:'garuda',  name:'Lorem Ipsum', cap:'12 lorem',  type:{id:'Lorem Ipsum', en:'Lorem Ipsum'}, tone:'yellow' },
  { id:'kertas',  name:'Lorem Ipsum', cap:'12 lorem', type:{id:'Lorem & ipsum', en:'Lorem & ipsum'}, tone:'pink' },
  { id:'pustaka', name:'Lorem',  cap:'12 lorem', type:{id:'Lorem & ipsum',    en:'Lorem & ipsum'}, tone:'green' },
  { id:'podcast', name:'Lorem Ipsum',  cap:'1 lorem',  type:{id:'Lorem ipsum', en:'Lorem ipsum'}, tone:'navy' },
  { id:'kopi',   name:'Lorem Ipsum',   cap:'12 lorem', type:{id:'Lorem & ipsum', en:'Lorem & ipsum'}, tone:'yellow' },
  { id:'teras',   name:'Lorem Ipsum',    cap:'Lorem',  type:{id:'Lorem ipsum',  en:'Lorem ipsum'}, tone:'pink' },
  { id:'riset',   name:'Lorem Ipsum',    cap:'1 lorem',  type:{id:'Lorem ipsum',    en:'Lorem ipsum'}, tone:'green' },
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
