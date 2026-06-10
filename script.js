'use strict';

const STORE_KEY = 'fitFirmWomenTrackerPro.v2';
const TOTAL_DAYS = 84;
const PHASE_DAYS = 28;

const $ = (selector) => document.querySelector(selector);
const view = () => $('#view');

const LOGO_PATH = 'images/branding/logo-fit-firm.png';
const LOGO_FALLBACK = 'images/branding/logo-fit-firm.svg';
function brandLockup(title='Fit & Firm', subtitle='Women Tracker Pro'){
  return `<div class="brand-lockup"><img class="brand-logo" src="${LOGO_PATH}" alt="Fit & Firm logo" loading="lazy" onerror="this.onerror=null;this.src='${LOGO_FALLBACK}'"><span><strong>${escapeHtml(title)}</strong><small>${escapeHtml(subtitle)}</small></span></div>`;
}
function topbarTitle(title){
  return `<div class="topbar-title-wrap"><img class="topbar-logo" src="${LOGO_PATH}" alt="Fit & Firm logo" loading="lazy" onerror="this.onerror=null;this.src='${LOGO_FALLBACK}'"><h2>${escapeHtml(title)}</h2></div>`;
}
function imgWithFallback(e, className=''){
  const fallback = e.img.replace(/\.jpg$/i, '.svg');
  const cls = className ? ` class="${className}"` : '';
  return `<img${cls} src="${e.img}" alt="${escapeHtml(e.name)}" loading="lazy" onerror="this.onerror=null;this.src='${fallback}'">`;
}

function icon(name, cls=''){
  const icons={
    home:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5 12 3l9 7.5"></path><path d="M5.5 9.5V20h13V9.5"></path></svg>',
    grid:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="7" height="7" rx="2"></rect><rect x="13" y="4" width="7" height="7" rx="2"></rect><rect x="4" y="13" width="7" height="7" rx="2"></rect><rect x="13" y="13" width="7" height="7" rx="2"></rect></svg>',
    chart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 19V10"></path><path d="M12 19V5"></path><path d="M19 19v-7"></path><path d="M3 19.5h18"></path></svg>',
    user:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21a8 8 0 0 0-16 0"></path><circle cx="12" cy="8" r="4"></circle></svg>',
    menu:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M4 7h16"></path><path d="M4 12h16"></path><path d="M4 17h16"></path></svg>',
    back:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"></path></svg>',
    chevron:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><path d="m9 6 6 6-6 6"></path></svg>',
    lock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="10" width="14" height="10" rx="3"></rect><path d="M8 10V8a4 4 0 1 1 8 0v2"></path></svg>',
    check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 4.2 4.2L19 7.5"></path></svg>',
    partial:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 7v6"></path><circle cx="12" cy="17" r="1"></circle><circle cx="12" cy="12" r="9"></circle></svg>',
    missed:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M7 7 17 17"></path><path d="m17 7-10 10"></path></svg>',
    cup:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M5 8h10v6a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V8Z"></path><path d="M15 10h1.5a2.5 2.5 0 0 1 0 5H15"></path><path d="M7 21h8"></path></svg>',
    spark:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3 1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3Z"></path></svg>',
    heart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20s-7-4.7-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.3-7 10-7 10Z"></path></svg>',
    play:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 6.5c0-1 1.1-1.6 1.9-1l8.1 5.4c.7.5.7 1.5 0 2l-8.1 5.5c-.8.5-1.9 0-1.9-.9V6.5Z"></path></svg>',
    calendar:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="5" width="17" height="15" rx="3"></rect><path d="M8 3.5v3"></path><path d="M16 3.5v3"></path><path d="M3.5 9.5h17"></path></svg>',
    moon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5 9 9 0 1 0 20.5 14.5Z"></path></svg>',
    sun:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M12 2.5v2.2"></path><path d="M12 19.3v2.2"></path><path d="m4.93 4.93 1.56 1.56"></path><path d="m16.95 16.95 1.56 1.56" transform="translate(-4.44 -4.44)"></path><path d="M2.5 12h2.2"></path><path d="M19.3 12h2.2"></path><path d="m4.93 19.07 1.56-1.56"></path><path d="m16.95 7.05 1.56-1.56" transform="translate(-4.44 -4.44)"></path></svg>'
  };
  return `<span class="ui-icon ${cls}">${icons[name]||icons.spark}</span>`;
}
function titleIconFor(title=''){
  if(title.includes('โปรแกรม')) return 'grid';
  if(title.includes('Phase')) return 'spark';
  if(title.includes('Day')) return 'calendar';
  if(title.includes('รายงาน')) return 'chart';
  if(title.includes('ฉัน')) return 'user';
  if(title.includes('Readiness')) return 'heart';
  if(title.includes('Finish')) return 'check';
  if(title.includes('วิธีทำ')) return 'play';
  return 'spark';
}

const EX = {
  gobletSquat:{name:'Goblet Squat',cat:'Lower Body',equipment:'Kettlebell / Dumbbell',muscles:'ต้นขา ก้น แกนกลาง',img:'images/exercises/goblet-squat.jpg',how:'ถือเวทชิดอก ย่อตัวลงช้า ๆ เข่าไปทิศเดียวกับปลายเท้า แล้วดันพื้นขึ้น',caution:'หลังตรง ไม่กลั้นหายใจ ถ้าปวดเข่าให้ย่อตื้นลง'},
  sumoSquat:{name:'Sumo Squat',cat:'Lower Body',equipment:'Kettlebell / Dumbbell',muscles:'ต้นขาด้านใน ก้น',img:'images/exercises/sumo-squat.jpg',how:'ยืนกว้าง ปลายเท้าเฉียงออก ถือเวทกลางตัว แล้วย่อลงอย่างคุมจังหวะ',caution:'อย่าให้เข่าหุบเข้าใน'},
  reverseLunge:{name:'Reverse Lunge',cat:'Lower Body',equipment:'Bodyweight / Dumbbell',muscles:'ก้น ต้นขา',img:'images/exercises/reverse-lunge.jpg',how:'ก้าวถอยหลัง ย่อตัวลงเบา ๆ แล้วดันตัวกลับ ทำสลับข้าง',caution:'จับผนังช่วยได้ ถ้าเข่าไม่สบายให้ลดช่วงก้าว'},
  stepUp:{name:'Step-up',cat:'Lower Body',equipment:'Step / Dumbbell',muscles:'ก้น ต้นขา',img:'images/exercises/step-up.jpg',how:'เหยียบแท่นเตี้ย ดันตัวขึ้นด้วยขาหน้า ค่อย ๆ ลง',caution:'ใช้แท่นมั่นคงและไม่สูงเกินไป'},
  gluteBridge:{name:'Glute Bridge',cat:'Glute',equipment:'Bodyweight / Dumbbell',muscles:'ก้น หลังขา',img:'images/exercises/glute-bridge.jpg',how:'นอนชันเข่า เกร็งก้นดันสะโพกขึ้น ค้าง 1 วินาทีแล้วลง',caution:'อย่าแอ่นหลังเกินไป'},
  rdl:{name:'Romanian Deadlift',cat:'Lower Body',equipment:'Dumbbell / Kettlebell',muscles:'หลังขา ก้น หลังส่วนล่าง',img:'images/exercises/romanian-deadlift.jpg',how:'ถือเวทหน้าขา ดันสะโพกไปหลัง หลังตรง แล้วดึงตัวกลับด้วยก้นและหลังขา',caution:'ไม่งอหลัง ใช้น้ำหนักเบาก่อน'},
  calfRaise:{name:'Calf Raise',cat:'Lower Body',equipment:'Bodyweight / Dumbbell',muscles:'น่อง ข้อเท้า',img:'images/exercises/calf-raise.jpg',how:'ยืนตรง เขย่งปลายเท้าขึ้น ค้างสั้น ๆ แล้วลงช้า ๆ',caution:'จับผนังช่วยทรงตัวได้'},
  sideLegRaise:{name:'Side Leg Raise',cat:'Glute',equipment:'Bodyweight',muscles:'สะโพกด้านข้าง ก้น',img:'images/exercises/side-leg-raise.jpg',how:'ยืนจับผนัง ยกขาออกด้านข้างแบบคุมจังหวะ แล้วลงช้า ๆ',caution:'ไม่เอียงตัวมาก ทำช้าและนิ่ง'},
  kickback:{name:'Kickback',cat:'Glute',equipment:'Bodyweight / Dumbbell',muscles:'ก้น หลังขา',img:'images/exercises/kickback.jpg',how:'ยืนจับผนัง ถีบขาไปด้านหลังเล็กน้อย เกร็งก้น แล้วกลับมา',caution:'อย่าแอ่นหลัง ใช้ช่วงขาที่สบาย'},
  shoulderPress:{name:'Dumbbell Shoulder Press',cat:'Upper Body',equipment:'Dumbbell',muscles:'ไหล่ แขน',img:'images/exercises/shoulder-press.jpg',how:'ถือดัมเบลระดับไหล่ ดันขึ้นเหนือศีรษะแล้วลงช้า ๆ',caution:'ถ้าเจ็บไหล่ให้ลดน้ำหนักหรือเปลี่ยนเป็น Lateral Raise เบา ๆ'},
  row:{name:'Dumbbell Row',cat:'Upper Body',equipment:'Dumbbell',muscles:'หลัง แขน',img:'images/exercises/dumbbell-row.jpg',how:'เอนตัวเล็กน้อย หลังตรง ดึงดัมเบลเข้าข้างลำตัว',caution:'ไม่กระชาก ไม่ยกไหล่'},
  wallPush:{name:'Wall / Incline Push-up',cat:'Upper Body',equipment:'Wall / Bench',muscles:'อก ไหล่ แขน',img:'images/exercises/wall-pushup.jpg',how:'วางมือบนผนังหรือโต๊ะ งอศอกเข้าใกล้ แล้วดันออก',caution:'ลำตัวตรง เลือกระดับที่ไม่หนักเกินไป'},
  bicepCurl:{name:'Bicep Curl',cat:'Upper Body',equipment:'Dumbbell',muscles:'หน้าแขน',img:'images/exercises/bicep-curl.jpg',how:'ล็อกศอกข้างลำตัว ยกดัมเบลขึ้นลงช้า ๆ',caution:'ไม่เหวี่ยงตัว'},
  tricepExt:{name:'Tricep Extension',cat:'Upper Body',equipment:'Dumbbell',muscles:'หลังแขน',img:'images/exercises/tricep-extension.jpg',how:'ถือดัมเบลเหนือศีรษะ งอศอกลงหลังศีรษะแล้วดันขึ้น',caution:'ใช้เบา ๆ ถ้าเจ็บไหล่ให้ข้าม'},
  lateralRaise:{name:'Lateral Raise',cat:'Upper Body',equipment:'Dumbbell',muscles:'ไหล่ด้านข้าง',img:'images/exercises/lateral-raise.jpg',how:'ยกแขนออกด้านข้างถึงระดับไหล่ แล้วลงช้า ๆ',caution:'งอศอกเล็กน้อย ใช้น้ำหนักเบา'},
  deadBug:{name:'Dead Bug',cat:'Core',equipment:'Bodyweight',muscles:'แกนกลาง หน้าท้อง',img:'images/exercises/dead-bug.jpg',how:'นอนหงาย ยกแขนขา ค่อย ๆ เหยียดแขนขาตรงข้ามโดยหลังแนบพื้น',caution:'ถ้าหลังลอยให้ลดช่วงเหยียด'},
  plank:{name:'Plank',cat:'Core',equipment:'Bodyweight',muscles:'แกนกลาง ไหล่',img:'images/exercises/plank.jpg',how:'ตั้งศอกใต้ไหล่ ลำตัวตรง เกร็งหน้าท้องและก้น',caution:'เริ่มจากเข่าได้ ถ้าปวดหลังให้หยุด'},
  sidePlank:{name:'Side Plank',cat:'Core',equipment:'Bodyweight',muscles:'เอวด้านข้าง',img:'images/exercises/side-plank.jpg',how:'ตั้งศอกด้านข้าง ยกสะโพกขึ้น ค้างตามเวลา',caution:'เริ่มแบบงอเข่าได้'},
  russianTwist:{name:'Russian Twist',cat:'Core',equipment:'Bodyweight / Dumbbell',muscles:'เอว แกนกลาง',img:'images/exercises/russian-twist.jpg',how:'นั่งเอนตัวเล็กน้อย หมุนลำตัวซ้ายขวาแบบคุมจังหวะ',caution:'หลังตรง ไม่ฝืนหลังล่าง'},
  sideBend:{name:'Standing Side Bend',cat:'Core',equipment:'Dumbbell',muscles:'เอวด้านข้าง',img:'images/exercises/standing-side-bend.jpg',how:'ถือดัมเบลข้างเดียว เอียงลำตัวลงเล็กน้อยแล้วดึงกลับ',caution:'ไม่โยกเร็ว'},
  coreTwist:{name:'Standing Core Twist',cat:'Core',equipment:'Bodyweight',muscles:'เอว แกนกลาง',img:'images/exercises/standing-core-twist.jpg',how:'ยืนเข่างอเล็กน้อย หมุนลำตัวซ้ายขวาเบา ๆ',caution:'หมุนจากลำตัว ไม่บิดเข่า'},
  kneeRaise:{name:'Knee Raise',cat:'Core',equipment:'Bodyweight',muscles:'หน้าท้อง สะโพก',img:'images/exercises/knee-raise.jpg',how:'ยืนยกเข่าสลับข้าง เกร็งท้อง',caution:'ทำช้า ๆ ถ้าทรงตัวไม่ดีจับผนัง'},
  hoop:{name:'Hula Hoop',cat:'Cardio',equipment:'Hula Hoop',muscles:'เอว Cardio Low Impact',img:'images/exercises/hula-hoop.jpg',how:'หมุนฮูลาฮูปจังหวะสบาย หายใจปกติ',caution:'หยุดถ้าเจ็บเอวหรือเวียนหัว'},
  march:{name:'March in Place',cat:'Cardio',equipment:'Bodyweight',muscles:'หัวใจ ขา',img:'images/exercises/march-in-place.jpg',how:'เดินย่ำอยู่กับที่ แกว่งแขนตามธรรมชาติ',caution:'Low impact ไม่กระโดด'},
  stepTouch:{name:'Step Touch',cat:'Cardio',equipment:'Bodyweight',muscles:'หัวใจ ขา',img:'images/exercises/step-touch.jpg',how:'ก้าวแตะซ้ายขวา ต่อเนื่องจังหวะเบา',caution:'ไม่ต้องเร็วเกินไป'},
  kbDeadlift:{name:'Kettlebell Deadlift',cat:'Fat Burn',equipment:'Kettlebell',muscles:'ก้น หลังขา',img:'images/exercises/kettlebell-deadlift.jpg',how:'วางเคตเทิลเบลกลางเท้า ดันสะโพกหลัง จับแล้วยืนขึ้น',caution:'หลังตรง เริ่มเบา'},
  kbSwing:{name:'Kettlebell Swing',cat:'Fat Burn',equipment:'Kettlebell',muscles:'ก้น หลังขา Cardio',img:'images/exercises/kettlebell-swing.jpg',how:'ฮิปฮินจ์ ใช้แรงสะโพกเหวี่ยง ไม่ใช่ยกด้วยแขน',caution:'ใช้เฉพาะเมื่อฟอร์ม deadlift พร้อม ไม่มีปวดหลัง'},
  squatPress:{name:'Dumbbell Squat to Press',cat:'Full Body',equipment:'Dumbbell',muscles:'ขา ก้น ไหล่',img:'images/exercises/full-body-circuit.jpg',how:'สควอตเบา ๆ แล้วยืนดันดัมเบลขึ้น',caution:'ถ้าเหนื่อยมากให้แยกเป็น squat และ press'},
  lowCircuit:{name:'Low Impact Circuit',cat:'Full Body',equipment:'Bodyweight / Dumbbell',muscles:'ทั้งตัว Cardio',img:'images/exercises/low-impact-circuit.jpg',how:'ทำต่อเนื่องแบบไม่กระโดด คุมหายใจและจังหวะให้สบาย',caution:'หยุดพักได้ทันทีถ้าเวียนหัวหรือเจ็บข้อ'},
  stretch:{name:'Stretching & Mobility',cat:'Recovery',equipment:'Mat',muscles:'ฟื้นฟูทั้งตัว',img:'images/exercises/stretching.jpg',how:'ยืดสะโพก หลังขา ไหล่ และหายใจลึก ๆ',caution:'ไม่ฝืนเจ็บ ค้างแบบสบาย'},
  breathing:{name:'Breathing Reset',cat:'Recovery',equipment:'None',muscles:'ระบบหายใจ ลดล้า',img:'images/exercises/breathing.jpg',how:'หายใจเข้าทางจมูก 4 วินาที ออกยาว 6 วินาที ทำต่อเนื่องแบบผ่อนคลาย',caution:'ถ้าเวียนหัวให้หยุดและหายใจปกติ'}
};

const PHASES = [
  {key:'foundation', no:1, title:'Foundation & Fat Burn', weeks:'1–4', start:1, end:28, color:'pink', goal:'เริ่มขยับ ลดแรงกระแทก ฝึกพื้นฐาน และสร้างความสม่ำเสมอ', focus:'Low Impact • Form First'},
  {key:'shape', no:2, title:'Firm & Shape', weeks:'5–8', start:29, end:56, color:'purple', goal:'เพิ่มความกระชับ แขน ขา ก้น เอว และเพิ่ม intensity แบบปลอดภัย', focus:'Strength • Shape'},
  {key:'sculpt', no:3, title:'Sculpt & Tone', weeks:'9–12', start:57, end:84, color:'dark', goal:'Circuit / Superset เพื่อให้หุ่นดู Fit & Toned ชัดขึ้น', focus:'Circuit • Tone'}
];

const WEEKLY = [
  'Lower Body + Core',
  'Upper Body + Hula Hoop Cardio',
  'Full Body Fat Burn',
  'Recovery / Mobility',
  'Glute + Legs',
  'Full Body Sculpt',
  'Rest'
];

let state = loadState();
let ui = { screen:'today', selectedDay:null, selectedPhase:'foundation', selectedExercise:null, fromPlayer:false };
let player = null;
let timer = null;

function defaultState(){
  return {
    settings:{
      startDate:todayISO(),
      name:'',
      goal:'กระชับหุ่น ลดไขมัน และปั้นทรงให้เฟิร์มขึ้น',
      note:'เหมาะกับผู้เริ่มต้นถึงระดับกลาง ใช้ Kettlebell, Dumbbell และ Hula Hoop',
      theme:'light'
    },
    logs:{},
    progress:[]
  };
}

function loadState(){
  try{
    const raw = localStorage.getItem(STORE_KEY);
    const parsed = raw ? JSON.parse(raw) : defaultState();
    return {...defaultState(), ...parsed, settings:{...defaultState().settings, ...(parsed.settings||{})}, logs:parsed.logs||{}, progress:parsed.progress||[]};
  }catch(err){
    return defaultState();
  }
}
function saveState(){ localStorage.setItem(STORE_KEY, JSON.stringify(state)); }
function todayISO(){ return new Date().toISOString().slice(0,10); }
function parseISODate(value){ const [y,m,d] = String(value||todayISO()).split('-').map(Number); return new Date(y, (m||1)-1, d||1); }
function stripTime(d){ return new Date(d.getFullYear(), d.getMonth(), d.getDate()); }
function dateDiffDays(a,b){ return Math.floor((stripTime(a)-stripTime(b))/86400000); }
function clamp(n,min,max){ return Math.min(max, Math.max(min, n)); }
function formatTime(sec){ sec=Math.max(0, Number(sec)||0); const m=String(Math.floor(sec/60)).padStart(2,'0'); const s=String(sec%60).padStart(2,'0'); return `${m}:${s}`; }
function escapeHtml(value){ return String(value ?? '').replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m])); }

function phaseByDay(day){ return PHASES.find(p => day>=p.start && day<=p.end) || PHASES[0]; }
function phaseByKey(key){ return PHASES.find(p=>p.key===key) || PHASES[0]; }
function weekOfProgram(day){ return Math.ceil(day/7); }
function dayName(day){ return WEEKLY[(day-1)%7]; }
function dayLog(day){ return state.logs[String(day)] || null; }
function isDone(day){ const log=dayLog(day); return !!log && log.status==='complete'; }
function firstIncompleteDay(){ for(let i=1;i<=TOTAL_DAYS;i++){ if(!isDone(i)) return i; } return TOTAL_DAYS+1; }
function calendarDay(){ return clamp(dateDiffDays(new Date(), parseISODate(state.settings.startDate))+1, 1, TOTAL_DAYS); }
function completedAll(){ return firstIncompleteDay()>TOTAL_DAYS; }
function sequentialProgress(){
  const requiredRaw = firstIncompleteDay();
  const requiredDay = Math.min(requiredRaw, TOTAL_DAYS);
  const calDay = calendarDay();
  const allDone = requiredRaw > TOTAL_DAYS;
  const overdueDays = allDone ? 0 : Math.max(0, calDay - requiredDay);
  const dueText = allDone ? 'ทำครบ 12 สัปดาห์แล้ว' : overdueDays>0 ? `ค้าง Day ${requiredDay} มา ${overdueDays} วัน` : `วันนี้ต้องทำ Day ${requiredDay}`;
  return {requiredRaw, requiredDay, calendarDay:calDay, allDone, overdueDays, dueText};
}
function logArray(){ return Object.entries(state.logs).map(([day,log])=>({day:Number(day), ...log})).sort((a,b)=>a.day-b.day); }
function countStatus(status){ return logArray().filter(l=>l.status===status).length; }
function countDoneInRange(start,end){ let n=0; for(let d=start; d<=end; d++){ if(isDone(d)) n++; } return n; }
function progressInRange(start,end){ return state.progress.filter(p => Number(p.day||0)>=start && Number(p.day||0)<=end).length; }
function hasSeverePainInRange(start,end){
  return logArray().some(l => l.day>=start && l.day<=end && (l.readiness?.pain==='bad' || String(l.pain||'').includes('ปวดมาก') || l.level==='red'));
}
function recentAvgFatigue(){
  const vals = logArray().slice(-8).map(l=>Number(l.readiness?.fatigue)).filter(Boolean);
  if(!vals.length) return 0;
  return vals.reduce((a,b)=>a+b,0)/vals.length;
}
function metricNumber(v){ const n=Number(v); return Number.isFinite(n) ? n : null; }
function latestProgress(){ return state.progress.length ? [...state.progress].sort((a,b)=>new Date(b.date)-new Date(a.date))[0] : null; }
function firstProgress(){ return state.progress.length ? [...state.progress].sort((a,b)=>new Date(a.date)-new Date(b.date))[0] : null; }
function hasMetricChange(){
  const first=firstProgress(), last=latestProgress();
  if(!first || !last || first===last) return false;
  const pairs = [['weight',0.4],['waist',0.8],['hip',0.8],['thigh',0.5],['arm',0.5]];
  return pairs.some(([k,threshold]) => {
    const a=metricNumber(first[k]); const b=metricNumber(last[k]);
    return a!==null && b!==null && Math.abs(a-b)>=threshold;
  });
}
function unlockInfo(key){
  if(key==='foundation') return {ok:true, reason:'เริ่มได้ทันที', checks:[['Phase 1 เปิดทันที',true]]};
  if(key==='shape'){
    const done=countDoneInRange(1,28);
    const progress=progressInRange(1,28);
    const safe=!hasSeverePainInRange(1,28);
    const ok=done>=20 && progress>=2 && safe;
    return {ok, reason: ok?'ปลดล็อกแล้ว':`ต้องทำ Phase 1 ให้ครบอย่างน้อย 70% (${done}/20) และบันทึก Progress ${progress}/2 ครั้ง`, checks:[[`ทำ Phase 1 ครบอย่างน้อย 20 วัน`,done>=20],[`บันทึก Progress อย่างน้อย 2 ครั้ง`,progress>=2],[`ไม่มีอาการเจ็บหนักต่อเนื่อง`,safe]]};
  }
  const done=countDoneInRange(29,56);
  const fatigue=recentAvgFatigue();
  const changed=hasMetricChange();
  const safe=!hasSeverePainInRange(29,56);
  const ok=done>=20 && fatigue<=7 && changed && safe;
  return {ok, reason: ok?'ปลดล็อกแล้ว':`ต้องทำ Phase 2 อย่างน้อย 70% (${done}/20), ความล้าไม่สูง และมีสัดส่วน/น้ำหนักเริ่มเปลี่ยน`, checks:[[`ทำ Phase 2 ครบอย่างน้อย 20 วัน`,done>=20],[`ความล้าสะสมไม่สูงเกินไป`,fatigue<=7],[`น้ำหนักหรือสัดส่วนเริ่มเปลี่ยน`,changed],[`ไม่มีอาการเจ็บหนัก`,safe]]};
}
function canStartDay(day){
  day=Number(day);
  const phase=phaseByDay(day);
  const unlock=unlockInfo(phase.key);
  if(!unlock.ok) return {ok:false, reason:`${phase.title} ยังล็อกอยู่: ${unlock.reason}`};
  const sp=sequentialProgress();
  if(sp.allDone) return {ok:false, reason:'ทำครบโปรแกรม 12 สัปดาห์แล้ว'};
  if(day !== sp.requiredDay){
    if(day < sp.requiredDay) return {ok:false, reason:`Day ${day} ทำเสร็จหรือผ่านไปแล้ว ใช้สำหรับดูรายละเอียดเท่านั้น`};
    return {ok:false, reason:`ต้องทำ Day ${sp.requiredDay} ให้เสร็จก่อน ถึงจะเริ่มวันนี้ได้`};
  }
  return {ok:true, reason:'เริ่มได้'};
}
function streak(){ let s=0; for(let d=firstIncompleteDay()-1; d>=1; d--){ if(isDone(d)) s++; else break; } return s; }

function item(id, mode, value, rest=35, note=''){
  const e=EX[id];
  return {id, mode, value, rest, note, ...e};
}
function phaseLevel(day){ return phaseByDay(day).no; }
function baseReps(level){ return level===1?8:level===2?10:12; }
function baseTime(level){ return level===1?30:level===2?40:45; }
function restTime(level){ return level===1?45:level===2?38:32; }
function hulaTime(level){ return level===1?180:level===2?300:420; }
function dayWorkout(day, modifier='green'){
  const level=phaseLevel(day);
  const reps=baseReps(level), time=baseTime(level), rest=restTime(level), hoop=hulaTime(level);
  const typeIndex=(day-1)%7;
  let title=dayName(day), tag=phaseByDay(day).focus, items=[];
  if(typeIndex===0){
    items=[item('march','time',90,20,'Warm-up'), item('gobletSquat','reps',reps,rest), item('gluteBridge','reps',reps+2,rest), item('rdl','reps',reps,rest), item('deadBug','time',time,rest), item(level>=2?'plank':'sideBend', level>=2?'time':'reps', level>=2?time:reps, rest), item('stretch','time',60,0,'Cool-down')];
  }else if(typeIndex===1){
    items=[item('march','time',90,20,'Warm-up'), item('shoulderPress','reps',reps,rest), item('row','reps',reps,rest), item('wallPush','reps',reps,rest), item(level>=2?'lateralRaise':'bicepCurl','reps',reps,rest), item('tricepExt','reps',Math.max(6,reps-2),rest), item('hoop','time',hoop,0,'Low-impact cardio')];
  }else if(typeIndex===2){
    items=[item('stepTouch','time',90,20,'Warm-up'), item('kbDeadlift','reps',reps,rest), item('squatPress','reps',Math.max(6,reps-2),rest), item(level>=3?'kbSwing':'lowCircuit', level>=3?'reps':'time', level>=3?12:time, rest, level>=3?'ใช้เมื่อฟอร์มพร้อมเท่านั้น':'ไม่มีการกระโดด'), item('coreTwist','time',time,rest), item('hoop','time',Math.round(hoop*0.65),0)];
  }else if(typeIndex===3){
    title='Recovery / Mobility'; tag='Recovery Mode';
    items=[item('breathing','time',90,20), item('stretch','time',240,20), item('march','time',180,20,'เดินเบา ๆ'), item('hoop','time',180,0,'เบามาก ถ้าเจ็บเอวให้ข้าม')];
  }else if(typeIndex===4){
    items=[item('march','time',90,20,'Warm-up'), item('sumoSquat','reps',reps,rest), item('stepUp','reps',Math.max(6,reps-2),rest), item('gluteBridge','reps',reps+4,rest), item('sideLegRaise','reps',reps,rest), item('kickback','reps',reps,rest), item('calfRaise','reps',reps+4,0)];
  }else if(typeIndex===5){
    title='Full Body Sculpt'; tag=level===3?'Sculpt Circuit':'Full Body Low Impact';
    items=[item('stepTouch','time',90,20,'Warm-up'), item('gobletSquat','reps',reps,rest), item('row','reps',reps,rest), item('kbDeadlift','reps',reps,rest), item(level>=2?'russianTwist':'kneeRaise', level>=2?'reps':'time', level>=2?reps:time, rest), item('plank','time',time,rest), item('hoop','time',Math.round(hoop*0.55),0)];
  }else{
    title='Rest Day'; tag='Rest & Reset';
    items=[item('breathing','time',120,20), item('stretch','time',300,20), item('hoop','time',120,0,'Optional เบา ๆ หรือข้ามได้')];
  }
  if(level===3 && typeIndex!==3 && typeIndex!==6){ tag += ' • Superset/Circuit'; }
  let workout={day, title, tag, items, phase:phaseByDay(day), modifier};
  if(modifier==='yellow') workout=applyYellow(workout);
  if(modifier==='red') workout=redWorkout(day);
  return workout;
}
function applyYellow(workout){
  const items=workout.items.map(e=>{
    const copy={...e};
    if(copy.id==='kbSwing') Object.assign(copy, item('kbDeadlift','reps',Math.max(6,Math.round(baseReps(phaseLevel(workout.day))*0.7)), copy.rest, 'แทน Swing เพื่อความปลอดภัย'));
    if(copy.mode==='time') copy.value=Math.max(20, Math.round(copy.value*0.7));
    if(copy.mode==='reps') copy.value=Math.max(5, Math.round(copy.value*0.7));
    copy.rest=Math.round((copy.rest||0)+10);
    copy.note = copy.note ? `${copy.note} • ลด 30%` : 'ลดจำนวนลง 30%';
    return copy;
  });
  return {...workout, title:`${workout.title} (Light Mode)`, tag:'Yellow • ลดความหนัก 30%', items, modifier:'yellow'};
}
function redWorkout(day){
  return {day, title:'Recovery Mode', tag:'Red • วันนี้เน้นฟื้นฟู', phase:phaseByDay(day), modifier:'red', items:[item('breathing','time',120,20), item('stretch','time',300,20), item('march','time',180,20,'เบามาก'), item('hoop','time',120,0,'ถ้าไม่พร้อมให้ข้าม') ]};
}
function displayValue(e){ return e.mode==='time' ? formatTime(e.value) : `${e.value} ครั้ง`; }
function workoutMinutes(workout){
  const exerciseSec = workout.items.reduce((sum,e)=>sum + (e.mode==='time'?Number(e.value):Number(e.value)*4), 0);
  const restSec = workout.items.reduce((sum,e)=>sum + (Number(e.rest)||0), 0);
  return Math.max(4, Math.round((exerciseSec+restSec+40)/60));
}

function render(){
  clearInterval(timer);
  const v=view();
  if(ui.screen==='today') v.innerHTML=renderToday();
  if(ui.screen==='program') v.innerHTML=renderProgram();
  if(ui.screen==='days') v.innerHTML=renderDays(ui.selectedPhase);
  if(ui.screen==='detail') v.innerHTML=renderDetail(ui.selectedDay);
  if(ui.screen==='exercise') v.innerHTML=renderExerciseDetail(ui.selectedExercise, ui.selectedDay);
  if(ui.screen==='readiness') v.innerHTML=renderReadiness(ui.selectedDay);
  if(ui.screen==='player'){ v.innerHTML=renderPlayer(); startTimer(); }
  if(ui.screen==='finish') v.innerHTML=renderFinish();
  if(ui.screen==='report') v.innerHTML=renderReport();
  if(ui.screen==='profile') v.innerHTML=renderProfile();
  const showNav=['today','program','report','profile'].includes(ui.screen);
  $('#bottomNav').style.display=showNav?'grid':'none';
  setNav(showNav?ui.screen:'');
}
function setNav(active){ document.querySelectorAll('.nav-btn').forEach(btn=>btn.classList.toggle('active', btn.dataset.nav===active)); }
function topbar(title, back='', right=''){
  return `<div class="topbar">${back?`<button class="icon-btn" onclick="${back}" aria-label="ย้อนกลับ">${icon('back')}</button>`:`<button class="icon-btn blank"> </button>`}${topbarTitle(title)}${right||themeToggleButton()}</div>`;
}
function programStatusHTML(){
  const sp=sequentialProgress();
  const cls=sp.allDone?'ok':sp.overdueDays>0?'warning':'';
  return `<div class="program-status ${cls}"><h3>${sp.allDone?'สำเร็จครบโปรแกรม':sp.overdueDays>0?'มีวันที่ค้างอยู่':'ระบบล็อกตามลำดับวัน'}</h3><p>${sp.dueText} • ต้องบันทึกเป็น “ทำครบ” เท่านั้น ถึงจะปลดล็อกวันถัดไป</p><div class="info-grid"><div class="info-mini"><span>Day ที่ต้องทำ</span><b>${sp.allDone?'-':sp.requiredDay}</b></div><div class="info-mini"><span>ค้างมา</span><b>${sp.overdueDays} วัน</b></div><div class="info-mini"><span>ทำครบแล้ว</span><b>${countStatus('complete')}</b></div><div class="info-mini"><span>ตามปฏิทิน</span><b>Day ${sp.calendarDay}</b></div></div></div>`;
}
function renderToday(){
  const sp=sequentialProgress();
  const day=sp.requiredDay;
  const workout=dayWorkout(day);
  const progress=Math.round((countStatus('complete')/TOTAL_DAYS)*100);
  const latest=latestProgress();
  return `<div class="topbar home-topbar"><button class="icon-btn" onclick="go('profile')" aria-label="โปรไฟล์">${icon('menu')}</button>${brandLockup('Fit & Firm','Women Tracker Pro')}${themeToggleButton()}</div>
  <div class="page">
    <div class="hero-card">
      <div class="hero-meta">12 Weeks • Women Tracker Pro</div>
      <div class="hero-brand-inline"><img src="${LOGO_PATH}" alt="Fit & Firm logo" loading="lazy" onerror="this.onerror=null;this.src='${LOGO_FALLBACK}'"><span>Fit & Firm Identity</span></div>
      <div class="hero-title">
        <div><h2>${sp.allDone?'Complete':'Day '+day}</h2><p>${sp.allDone?'ครบ 12 สัปดาห์แล้ว':workout.title}</p></div>
        <div><b>${progress}%</b><p>Progress</p></div>
      </div>
    </div>
    <div class="status-strip">
      <div class="status-card"><span>ทำครบ</span><b>${countStatus('complete')}</b></div>
      <div class="status-card"><span>บางส่วน</span><b>${countStatus('partial')}</b></div>
      <div class="status-card"><span>ไม่ได้ทำ</span><b>${countStatus('missed')}</b></div>
      <div class="status-card"><span>Streak</span><b>${streak()}</b></div>
    </div>
    ${programStatusHTML()}
    <div class="progress-text">ภาพรวม <b>${progress}%</b></div><div class="progress-bar"><div class="progress-fill" style="width:${progress}%"></div></div>
    <div class="info-card"><h4>เป้าหมาย</h4><p>${escapeHtml(state.settings.goal)}</p><div class="info-grid"><div class="info-mini"><span>Phase</span><b>${workout.phase.no}</b></div><div class="info-mini"><span>สัปดาห์</span><b>${weekOfProgram(day)}</b></div><div class="info-mini"><span>เวลาประมาณ</span><b>${workoutMinutes(workout)} นาที</b></div><div class="info-mini"><span>ล่าสุด</span><b>${latest?.weight?escapeHtml(latest.weight)+' kg':'-'}</b></div></div></div>
    <div class="section-head"><h3>ท่าวันนี้</h3><button class="link-btn" onclick="openDetail(${day})">รายละเอียด</button></div>
    <div class="exercise-list">${workout.items.map((e,i)=>exerciseRow(e,i,day)).join('')}</div>
    <div class="action-row"><button class="primary-btn" onclick="startDay(${day})" ${sp.allDone?'disabled':''}>เริ่มฝึกวันนี้</button><button class="secondary-btn" onclick="openDetail(${day})">ดูรายละเอียด Day ${day}</button></div>
    <p class="fineprint">โปรแกรมนี้เน้นความปลอดภัย ความสม่ำเสมอ และ Low Impact เป็นหลัก ไม่ใช่การลดน้ำหนักแบบโหดหรือเร่งเกินจริง</p>
  </div>`;
}
function exerciseRow(e,i,day){
  return `<button class="exercise-item" onclick="openExercise('${e.id}',${day||0})"><span class="thumb-wrap">${imgWithFallback(e)}<span class="item-no">${i+1}</span></span><span><h4>${escapeHtml(e.name)}</h4><p>${displayValue(e)} • ${escapeHtml(e.equipment)}${e.note?` • ${escapeHtml(e.note)}`:''}</p></span><span class="chev">›</span></button>`;
}
function renderProgram(){
  return `${topbar('โปรแกรม')}
  <div class="page">
    <div class="info-card"><h4>โครง 12 สัปดาห์</h4><p>ทำตามลำดับ Day 1–84 ระบบจะล็อกวันถัดไปจนกว่าวันก่อนหน้าจะบันทึกเป็น “ทำครบ”</p></div>
    ${PHASES.map(p=>{
      const u=unlockInfo(p.key); const done=countDoneInRange(p.start,p.end); const percent=Math.round((done/PHASE_DAYS)*100);
      return `<button class="plan-card ${p.color} ${u.ok?'':'locked'}" onclick="openPhase('${p.key}')"><div class="plan-card-top"><span class="plan-mini-icon">${icon(p.key==='foundation'?'spark':p.key==='shape'?'heart':'check')}</span><span class="plan-go">${icon(u.ok?'chevron':'lock')}</span></div><h3>Phase ${p.no}: ${p.title}</h3><p>${p.weeks} • ${p.goal}</p><span class="${u.ok?'active-plan-badge':'lock-reason'}">${u.ok?'เปิดแล้ว':'ล็อก'} • ${done}/${PHASE_DAYS} วัน • ${percent}%</span></button>`;
    }).join('')}
    <div class="info-card"><h4>เงื่อนไขปลดล็อก</h4>${PHASES.map(p=>unlockBlock(p)).join('')}</div>
  </div>`;
}
function unlockBlock(p){
  const u=unlockInfo(p.key);
  return `<div style="margin-top:12px"><b>Phase ${p.no}</b><div class="pill-row">${u.checks.map(([txt,ok])=>`<span class="mini-pill">${ok?'✓':'○'} ${escapeHtml(txt)}</span>`).join('')}</div><p class="small">${escapeHtml(u.reason)}</p></div>`;
}
function renderDays(key){
  const p=phaseByKey(key);
  return `${topbar(`Phase ${p.no}`, "go('program')")}
  <div class="page"><div class="plan-card ${p.color}"><div class="plan-card-top"><span class="plan-mini-icon">${icon(p.key==='foundation'?'spark':p.key==='shape'?'heart':'check')}</span><span class="plan-go">${icon('chevron')}</span></div><h3>${p.title}</h3><p>${p.weeks} • ${p.focus}<br>${p.goal}</p><span class="active-plan-badge">Day ${p.start}–${p.end}</span></div>${programStatusHTML()}<div class="section-head"><h3>รายการวันฝึก</h3><span class="small">กดดูรายละเอียดได้ทุกวัน</span></div>${Array.from({length:PHASE_DAYS},(_,idx)=>dayCard(p.start+idx)).join('')}</div>`;
}
function dayCard(day){
  const log=dayLog(day); const can=canStartDay(day); const name=dayName(day); const rest=(day-1)%7===6;
  let cls=can.ok?'active': log?.status==='complete'?'done':log?.status==='partial'?'partial':log?.status==='missed'?'missed':'locked';
  let mark=can.ok?`<span class="start-pill">${icon('play')}เริ่ม</span>`: log?.status==='complete'?`<span class="mark done">${icon('check')}</span>`:log?.status==='partial'?`<span class="mark partial">${icon('partial')}</span>`:log?.status==='missed'?`<span class="mark missed">${icon('missed')}</span>`:`<span class="mark locked">${icon('lock')}</span>`;
  return `<button class="day-card ${cls} ${rest?'rest':''}" onclick="openDetail(${day})"><div class="day-main"><span class="day-leading">${icon(rest?'cup':'spark')}</span><span><h3>Day ${day}</h3><p>${escapeHtml(name)}<br>Week ${weekOfProgram(day)} • ${phaseByDay(day).title}</p></span></div>${mark}</button>`;
}
function renderDetail(day){
  const workout=dayWorkout(day); const can=canStartDay(day); const log=dayLog(day); const status=log?statusText(log.status):'ยังไม่ทำ';
  return `<section class="detail-hero">${topbar(`Day ${day}`, "backToPhase()")}
    <h2>${escapeHtml(workout.title)}</h2><p>${workout.phase.title} • ${workout.tag}<br>สถานะ: ${status}</p></section>
    <section class="detail-card"><div class="summary-row"><div class="summary-col"><b>${workout.items.length}</b><span>ท่า</span></div><div class="summary-col"><b>${workoutMinutes(workout)}</b><span>นาที</span></div><div class="summary-col"><b>${weekOfProgram(day)}</b><span>Week</span></div></div>
    <div class="info-card"><h4>เป้าหมายของวันนี้</h4><p>${detailGoal((day-1)%7)}</p></div>
    <div class="exercise-list">${workout.items.map((e,i)=>exerciseRow(e,i,day)).join('')}</div>
    <div class="action-row"><button class="primary-btn" onclick="startDay(${day})" ${can.ok?'':'disabled'}>${can.ok?'เริ่ม Workout Player':'ยังเริ่มไม่ได้'}</button><button class="secondary-btn" onclick="toast('${escapeForInline(can.reason)}')">เช็กเหตุผลล็อก</button></div>
    <p class="fineprint">${escapeHtml(can.reason)}</p></section>`;
}
function detailGoal(index){
  return ['ขา ก้น และแกนกลาง ให้ฟอร์มแน่นขึ้นแบบไม่กระแทก','แขน หลัง ไหล่ และ Cardio เบาด้วย Hula Hoop','เผาผลาญแบบ Low Impact เพื่อไม่ให้เข่า/หลังรับแรงมาก','ฟื้นตัว ลดตึง และรักษาความสม่ำเสมอ','เน้นก้น สะโพก และขาให้มีทรงขึ้น','กระชับทั้งตัวแบบ Circuit คุมจังหวะ','พักเพื่อให้ร่างกายซ่อมแซมและไปต่อได้'][index];
}
function renderExerciseDetail(id, day){
  const e=EX[id]||EX.stretch;
  const back=ui.fromPlayer?`resumePlayer()`:day?`openDetail(${day})`:`go('today')`;
  return `${topbar('วิธีทำ', back)}<div class="page">${imgWithFallback(e,'big-img')}<div class="form-card"><span class="badge">${escapeHtml(e.cat)}</span><h2>${escapeHtml(e.name)}</h2><p><b>วิธีทำ:</b> ${escapeHtml(e.how)}</p><p><b>จุดที่ต้องระวัง:</b> ${escapeHtml(e.caution)}</p><div class="info-grid"><div class="info-mini"><span>กล้ามเนื้อ</span><b>${escapeHtml(e.muscles)}</b></div><div class="info-mini"><span>อุปกรณ์</span><b>${escapeHtml(e.equipment)}</b></div></div></div></div>`;
}
function renderReadiness(day){
  return `${topbar('Readiness Check', `openDetail(${day})`)}<div class="page">
    <div class="readiness-card"><h3>เช็กก่อนเริ่ม Day ${day}</h3><p class="subtle">ระบบจะปรับโปรแกรมเป็น Green / Yellow / Red เพื่อให้ปลอดภัยและไม่โหดเกินไป</p></div>
    <div class="form-card">
      <div class="field"><label>วันนี้ปวดเข่า / หลัง / ไหล่ไหม</label><select id="painCheck"><option value="no">ไม่มี</option><option value="mild">มีนิดหน่อย</option><option value="bad">ปวดชัดเจน</option></select></div>
      <div class="field"><label>นอนกี่ชั่วโมง</label><input id="sleepCheck" type="number" min="0" max="12" value="7"></div>
      <div class="field"><label>พลังงานวันนี้ 1–10</label><div class="range-row"><input id="energyCheck" type="range" min="1" max="10" value="7" oninput="energyVal.textContent=this.value"><b id="energyVal">7</b></div></div>
      <div class="field"><label>ความล้า 1–10</label><div class="range-row"><input id="fatigueCheck" type="range" min="1" max="10" value="4" oninput="fatigueVal.textContent=this.value"><b id="fatigueVal">4</b></div></div>
      <div class="field"><label>ประจำเดือน / รู้สึกไม่พร้อมไหม</label><select id="periodCheck"><option value="no">ปกติ</option><option value="mild">ไม่พร้อมนิดหน่อย</option><option value="bad">ไม่พร้อมมาก</option></select></div>
      <button class="primary-btn" onclick="beginWorkout(${day})">ประเมินและเริ่ม</button>
    </div>
  </div>`;
}
function readinessLevel(r){
  if(r.pain==='bad' || r.sleep<4 || r.energy<=3 || r.fatigue>=8 || r.period==='bad') return 'red';
  if(r.pain==='mild' || r.sleep<6 || r.energy<=5 || r.fatigue>=6 || r.period==='mild') return 'yellow';
  return 'green';
}
function beginWorkout(day){
  const r={pain:$('#painCheck').value, sleep:Number($('#sleepCheck').value), energy:Number($('#energyCheck').value), fatigue:Number($('#fatigueCheck').value), period:$('#periodCheck').value};
  const level=readinessLevel(r);
  const workout=dayWorkout(day, level);
  player={day, workout, readiness:r, level, stage:'ready', index:0, countdown:4, done:0, skipped:0, startedAt:Date.now(), exerciseTimeLeft:null};
  ui.screen='player'; render();
}
function renderPlayer(){
  if(!player) return '';
  const e=player.workout.items[player.index]; const total=player.workout.items.length; const progress=Math.round((player.index/total)*100);
  if(player.stage==='ready'){
    return `<div class="player-screen"><section class="player-card"><span class="badge ${player.level}">${readinessLabel(player.level)}</span><h2>เตรียมพร้อม</h2><div class="countdown">${player.countdown}</div><p class="subtle">ท่าถัดไป: <b>${escapeHtml(e.name)}</b></p><div class="player-progress"><div style="width:${progress}%"></div></div><button class="secondary-btn" onclick="skipExercise()">ข้ามท่านี้</button></section></div>`;
  }
  if(player.stage==='exercise'){
    const timed=e.mode==='time';
    const timeText=timed ? formatTime(player.exerciseTimeLeft ?? e.value) : displayValue(e);
    return `<div class="player-screen"><section class="player-card"><span class="badge ${player.level}">${player.index+1}/${total} • ${readinessLabel(player.level)}</span>${imgWithFallback(e,'big-img')}<h2>${escapeHtml(e.name)}</h2><div class="timer ${timed?'small-timer':''}">${timeText}</div><div class="method-box"><b>วิธีทำ:</b> ${escapeHtml(e.how)}<br><b>ระวัง:</b> ${escapeHtml(e.caution)}</div><div class="player-progress"><div style="width:${Math.round(((player.index+1)/total)*100)}%"></div></div><div class="grid-2"><button class="secondary-btn" onclick="prevExercise()">ย้อนกลับ</button><button class="success-btn" onclick="completeExercise()">✓ ทำเสร็จ</button><button class="secondary-btn" onclick="openExerciseFromPlayer('${e.id}')">ดูวิธีทำ</button><button class="warning-btn" onclick="skipExercise()">ข้าม</button></div></section></div>`;
  }
  if(player.stage==='rest'){
    const next=player.workout.items[player.index+1];
    return `<div class="player-screen"><section class="player-card"><span class="badge">พักระหว่างท่า</span><h2>พัก</h2><div class="timer">${formatTime(player.countdown)}</div><p class="subtle">ท่าถัดไป: <b>${next?escapeHtml(next.name):'Finish'}</b></p><div class="grid-2"><button class="secondary-btn" onclick="addRest(20)">+20 วินาที</button><button class="primary-btn" onclick="finishRest()">ข้ามพัก</button></div></section></div>`;
  }
  return '';
}
function readinessLabel(level){ return level==='green'?'Green • ฝึกตามแผน':level==='yellow'?'Yellow • ลด 30%':'Red • Recovery'; }
function startTimer(){
  if(!player) return;
  timer=setInterval(()=>{
    if(!player) return;
    if(player.stage==='ready'){
      player.countdown -= 1;
      if(player.countdown<=0){
        player.stage='exercise';
        const e=player.workout.items[player.index];
        player.exerciseTimeLeft = e.mode==='time' ? e.value : null;
      }
      render();
    }else if(player.stage==='exercise'){
      const e=player.workout.items[player.index];
      if(e && e.mode==='time' && player.exerciseTimeLeft!==null && player.exerciseTimeLeft>0){
        player.exerciseTimeLeft -= 1;
        render();
      }
    }else if(player.stage==='rest'){
      player.countdown -= 1;
      if(player.countdown<=0) finishRest(false); else render();
    }
  },1000);
}
function completeExercise(){ moveNext(false); }
function skipExercise(){ moveNext(true); }
function moveNext(skip){
  if(!player) return;
  if(skip) player.skipped += 1; else player.done += 1;
  const last = player.index >= player.workout.items.length-1;
  if(last){ ui.screen='finish'; render(); return; }
  player.stage='rest';
  player.countdown=player.workout.items[player.index].rest || 25;
  render();
}
function prevExercise(){ if(player && player.index>0){ player.index -= 1; player.stage='exercise'; const e=player.workout.items[player.index]; player.exerciseTimeLeft=e.mode==='time'?e.value:null; render(); } }
function finishRest(shouldRender=true){ if(player){ player.index += 1; player.stage='ready'; player.countdown=4; player.exerciseTimeLeft=null; if(shouldRender) render(); } }
function addRest(sec){ if(player){ player.countdown += sec; render(); } }
function renderFinish(){
  if(!player) return '';
  const mins=Math.max(1, Math.round((Date.now()-player.startedAt)/60000));
  return `${topbar('Finish', "go('today')")}<div class="page"><div class="hero-card"><div class="hero-meta">Day ${player.day} • ${readinessLabel(player.level)}</div><div class="hero-title"><div><h2>ทำได้ดีมาก</h2><p>${escapeHtml(player.workout.title)}</p></div><div><b>${mins}</b><p>นาที</p></div></div></div><div class="status-strip"><div class="status-card"><span>ทำแล้ว</span><b>${player.done}</b></div><div class="status-card"><span>ข้าม</span><b>${player.skipped}</b></div><div class="status-card"><span>ทั้งหมด</span><b>${player.workout.items.length}</b></div><div class="status-card"><span>โหมด</span><b>${player.level}</b></div></div>${progressForm('finish')}<div class="action-row"><button class="success-btn" onclick="saveWorkout('complete')">บันทึก: ทำครบ</button><button class="warning-btn" onclick="saveWorkout('partial')">บันทึก: ทำบางส่วน</button><button class="danger-btn" onclick="saveWorkout('missed')">บันทึก: ไม่ได้ทำ</button><button class="secondary-btn" onclick="cancelWorkout()">ยังไม่บันทึก</button></div><p class="fineprint">เฉพาะ “ทำครบ” เท่านั้นที่จะปลดล็อก Day ถัดไป หากทำบางส่วนระบบจะให้กลับมาทำ Day เดิมต่อ</p></div>`;
}
function progressForm(prefix){
  return `<div class="form-card"><h3>บันทึก Progress</h3><div class="form-grid"><div><label class="small">น้ำหนัก kg</label><input id="${prefix}Weight" type="number" step="0.1" placeholder="เช่น 82.5"></div><div><label class="small">รอบเอว cm</label><input id="${prefix}Waist" type="number" step="0.1"></div><div><label class="small">รอบสะโพก cm</label><input id="${prefix}Hip" type="number" step="0.1"></div><div><label class="small">รอบต้นขา cm</label><input id="${prefix}Thigh" type="number" step="0.1"></div><div><label class="small">รอบแขน cm</label><input id="${prefix}Arm" type="number" step="0.1"></div><div><label class="small">รูป progress</label><input id="${prefix}Photo" type="file" accept="image/*"></div><div class="full"><label class="small">อาการเจ็บ</label><input id="${prefix}Pain" placeholder="เช่น เข่าตึงนิดหน่อย / ไม่มี"></div><div class="full"><label class="small">หมายเหตุ</label><textarea id="${prefix}Note" placeholder="ความรู้สึกวันนี้ พลังงาน อาหาร หรือสิ่งที่อยากจำ"></textarea></div></div></div>`;
}
function collectProgress(prefix, callback){
  const data={
    weight:valueOf(`${prefix}Weight`), waist:valueOf(`${prefix}Waist`), hip:valueOf(`${prefix}Hip`), thigh:valueOf(`${prefix}Thigh`), arm:valueOf(`${prefix}Arm`), pain:valueOf(`${prefix}Pain`), note:valueOf(`${prefix}Note`), date:new Date().toISOString(), day:player?.day || firstIncompleteDay()
  };
  const file=$(`#${prefix}Photo`)?.files?.[0];
  if(!file){ callback(data); return; }
  const reader=new FileReader();
  reader.onload=()=>{ data.photo=reader.result; data.photoName=file.name; callback(data); };
  reader.onerror=()=>callback(data);
  reader.readAsDataURL(file);
}
function valueOf(id){ return document.getElementById(id)?.value?.trim() || ''; }

function currentTheme(){ return state?.settings?.theme === 'dark' ? 'dark' : 'light'; }
function themeToggleButton(){
  const dark = currentTheme()==='dark';
  return `<button class="icon-btn theme-btn" onclick="toggleTheme()" aria-label="สลับโหมดสี">${icon(dark?'sun':'moon')}</button>`;
}
function applyTheme(){
  const theme = currentTheme();
  document.documentElement.setAttribute('data-theme', theme);
  document.body.setAttribute('data-theme', theme);
}
function setTheme(theme){
  state.settings.theme = theme === 'dark' ? 'dark' : 'light';
  saveState();
  applyTheme();
  render();
  toast(state.settings.theme==='dark' ? 'เปลี่ยนเป็นโหมดมืดแล้ว' : 'กลับสู่โหมดเดิมแล้ว');
}
function toggleTheme(){ setTheme(currentTheme()==='dark' ? 'light' : 'dark'); }
function themeSegment(){
  const theme = currentTheme();
  return `<div class="theme-segment"><button class="${theme==='light'?'active':''}" onclick="setTheme('light')">แบบเดิม</button><button class="${theme==='dark'?'active':''}" onclick="setTheme('dark')">โหมดมืด</button></div>`;
}
function saveWorkout(status){
  if(!player) return;
  collectProgress('finish', (progress)=>{
    const day=player.day;
    state.logs[String(day)]={date:new Date().toISOString(), status, done:player.done, skipped:player.skipped, durationMin:Math.max(1,Math.round((Date.now()-player.startedAt)/60000)), level:player.level, readiness:player.readiness, pain:progress.pain, note:progress.note};
    const hasProgress=['weight','waist','hip','thigh','arm','pain','note','photo'].some(k=>progress[k]);
    if(hasProgress) state.progress.push(progress);
    saveState();
    player=null;
    ui.screen='report';
    render();
    toast(status==='complete'?'บันทึกทำครบแล้ว ปลดล็อกวันถัดไป':'บันทึกแล้ว วันถัดไปยังล็อกจนกว่าจะทำครบ');
  });
}
function cancelWorkout(){ player=null; ui.screen='today'; render(); }
function statusText(status){ return {complete:'✅ ทำครบ', partial:'🟡 ทำบางส่วน', missed:'❌ ไม่ได้ทำ'}[status] || 'ยังไม่ทำ'; }

function renderReport(){
  const sp=sequentialProgress(); const latest=latestProgress(); const first=firstProgress();
  const logs=logArray().slice(-12).reverse();
  const progressRows=[...state.progress].sort((a,b)=>new Date(b.date)-new Date(a.date)).slice(0,8);
  return `${topbar('รายงาน')}
  <div class="page"><div class="status-strip"><div class="status-card"><span>ทำครบ</span><b>${countStatus('complete')}</b></div><div class="status-card"><span>บางส่วน</span><b>${countStatus('partial')}</b></div><div class="status-card"><span>ไม่ได้ทำ</span><b>${countStatus('missed')}</b></div><div class="status-card"><span>Streak</span><b>${streak()}</b></div></div>${programStatusHTML()}
  <div class="info-card"><h4>Progress ล่าสุด</h4><p>${latest?`บันทึก Day ${latest.day||'-'} • ${new Date(latest.date).toLocaleDateString('th-TH')}`:'ยังไม่มีการบันทึกสัดส่วน'}</p><div class="info-grid"><div class="info-mini"><span>น้ำหนักล่าสุด</span><b>${latest?.weight?escapeHtml(latest.weight)+' kg':'-'}</b></div><div class="info-mini"><span>เอวล่าสุด</span><b>${latest?.waist?escapeHtml(latest.waist)+' cm':'-'}</b></div><div class="info-mini"><span>สะโพกล่าสุด</span><b>${latest?.hip?escapeHtml(latest.hip)+' cm':'-'}</b></div><div class="info-mini"><span>เปลี่ยนแปลง</span><b>${metricSummary(first,latest)}</b></div></div></div>
  <div class="section-head"><h3>ประวัติการฝึก</h3></div>${logs.length?`<table class="table"><thead><tr><th>Day</th><th>สถานะ</th><th>โหมด</th><th>เวลา</th></tr></thead><tbody>${logs.map(l=>`<tr><td>${l.day}</td><td>${statusText(l.status)}</td><td>${escapeHtml(l.level||'-')}</td><td>${l.durationMin||0} นาที</td></tr>`).join('')}</tbody></table>`:'<div class="empty">ยังไม่มีประวัติการฝึก</div>'}
  <div class="section-head"><h3>ประวัติสัดส่วน</h3></div>${progressRows.length?`<table class="table"><thead><tr><th>รูป</th><th>Day</th><th>น้ำหนัก</th><th>เอว</th></tr></thead><tbody>${progressRows.map(p=>`<tr><td>${p.photo?`<img class="photo-thumb" src="${p.photo}" alt="progress">`:'-'}</td><td>${p.day||'-'}</td><td>${escapeHtml(p.weight||'-')}</td><td>${escapeHtml(p.waist||'-')}</td></tr>`).join('')}</tbody></table>`:'<div class="empty">ยังไม่มีประวัติสัดส่วน</div>'}
  <div class="action-row"><button class="primary-btn" onclick="exportJSON()">Export JSON</button><button class="secondary-btn" onclick="exportCSV()">Export CSV</button></div>
  <p class="fineprint">ข้อมูลทั้งหมดเก็บใน LocalStorage ของเครื่องนี้เท่านั้น</p></div>`;
}
function metricSummary(first,last){
  if(!first || !last || first===last) return '-';
  const w1=metricNumber(first.weight), w2=metricNumber(last.weight), waist1=metricNumber(first.waist), waist2=metricNumber(last.waist);
  const parts=[];
  if(w1!==null && w2!==null) parts.push(`${(w2-w1).toFixed(1)}kg`);
  if(waist1!==null && waist2!==null) parts.push(`${(waist2-waist1).toFixed(1)}cm`);
  return parts.length?parts.join(' / '):'-';
}
function renderProfile(){
  return `${topbar('ฉัน / ตั้งค่า')}
  <div class="page"><div class="form-card"><h3>ข้อมูลโปรแกรม</h3><div class="field"><label>ชื่อ</label><input id="nameInput" value="${escapeHtml(state.settings.name)}" placeholder="ชื่อผู้ใช้"></div><div class="field"><label>เป้าหมาย</label><textarea id="goalInput">${escapeHtml(state.settings.goal)}</textarea></div><div class="field"><label>วันที่เริ่มโปรแกรม</label><input id="startDateInput" type="date" value="${escapeHtml(state.settings.startDate)}"></div><div class="field"><label>โหมดการแสดงผล</label>${themeSegment()}<p class="small">สลับระหว่างแบบเดิมและโหมดมืดได้ทันที</p></div><button class="primary-btn" onclick="saveSettings()">บันทึกตั้งค่า</button></div>
  <div class="form-card"><h3>บันทึกสัดส่วนด้วยตัวเอง</h3>${progressForm('manual')}<button class="success-btn" onclick="saveManualProgress()">บันทึก Progress</button></div>
  <div class="info-card"><h4>ข้อควรระวัง</h4><p>ถ้าปวดเข่า หลัง หรือไหล่ชัดเจน ให้เลือก Red ใน Readiness Check และเน้น Recovery แทน ห้ามฝืนเพื่อให้ครบโปรแกรม</p></div>
  <div class="action-row"><button class="danger-btn" onclick="resetAll()">ล้างข้อมูลทั้งหมด</button></div></div>`;
}
function saveSettings(){
  state.settings.name=valueOf('nameInput');
  state.settings.goal=valueOf('goalInput') || defaultState().settings.goal;
  state.settings.startDate=valueOf('startDateInput') || todayISO();
  saveState(); render(); toast('บันทึกตั้งค่าแล้ว');
}
function saveManualProgress(){
  collectProgress('manual', (p)=>{ const has=['weight','waist','hip','thigh','arm','pain','note','photo'].some(k=>p[k]); if(has){ state.progress.push(p); saveState(); render(); toast('บันทึก Progress แล้ว'); } else toast('กรอกข้อมูลอย่างน้อย 1 ช่องก่อนบันทึก'); });
}
function resetAll(){ if(confirm('ลบข้อมูลทั้งหมดและเริ่มใหม่?')){ localStorage.removeItem(STORE_KEY); state=defaultState(); player=null; ui={screen:'today', selectedDay:null, selectedPhase:'foundation', selectedExercise:null, fromPlayer:false}; applyTheme(); render(); } }
function exportJSON(){ downloadFile('fit-firm-women-tracker-data.json', JSON.stringify(state,null,2), 'application/json'); }
function exportCSV(){
  const rows=[['type','day','date','status','done','skipped','durationMin','level','weight','waist','hip','thigh','arm','pain','note']];
  logArray().forEach(l=>rows.push(['log',l.day,l.date,l.status,l.done,l.skipped,l.durationMin,l.level,'','','','','',l.pain,l.note]));
  state.progress.forEach(p=>rows.push(['progress',p.day,p.date,'','','','','',p.weight,p.waist,p.hip,p.thigh,p.arm,p.pain,p.note]));
  const csv=rows.map(r=>r.map(cell=>`"${String(cell??'').replaceAll('"','""')}"`).join(',')).join('\n');
  downloadFile('fit-firm-women-tracker-data.csv', csv, 'text/csv;charset=utf-8');
}
function downloadFile(name, content, type){ const a=document.createElement('a'); a.href=URL.createObjectURL(new Blob([content],{type})); a.download=name; document.body.appendChild(a); a.click(); a.remove(); setTimeout(()=>URL.revokeObjectURL(a.href),1000); }

function go(screen){ ui.screen=screen; render(); }
function openPhase(key){ ui.selectedPhase=key; ui.screen='days'; render(); }
function backToPhase(){ ui.screen='days'; ui.selectedPhase=phaseByDay(ui.selectedDay||firstIncompleteDay()).key; render(); }
function openDetail(day){ ui.selectedDay=Number(day); ui.screen='detail'; render(); }
function openExercise(id, day=0){ ui.fromPlayer=false; ui.selectedExercise=id; ui.selectedDay=Number(day)||ui.selectedDay; ui.screen='exercise'; render(); }
function openExerciseFromPlayer(id){ ui.fromPlayer=true; ui.selectedExercise=id; ui.selectedDay=player?.day || ui.selectedDay; ui.screen='exercise'; render(); }
function resumePlayer(){ ui.fromPlayer=false; ui.screen='player'; render(); }
function startDay(day){ const can=canStartDay(day); if(!can.ok){ toast(can.reason); return; } ui.selectedDay=Number(day); ui.screen='readiness'; render(); }
function toast(message){ const old=document.querySelector('.toast'); if(old) old.remove(); const div=document.createElement('div'); div.className='toast'; div.textContent=message; document.body.appendChild(div); setTimeout(()=>div.remove(),2200); }
function escapeForInline(value){ return String(value||'').replace(/\\/g,'\\\\').replace(/'/g,"\\'").replace(/\n/g,' '); }

document.querySelectorAll('.nav-btn').forEach(btn=>btn.addEventListener('click',()=>go(btn.dataset.nav)));

Object.assign(window,{go,openPhase,openDetail,openExercise,openExerciseFromPlayer,resumePlayer,startDay,beginWorkout,completeExercise,skipExercise,prevExercise,finishRest,addRest,saveWorkout,cancelWorkout,saveSettings,saveManualProgress,resetAll,exportJSON,exportCSV,toast,backToPhase,setTheme,toggleTheme});
applyTheme();
render();
