//takes information from html event widgets for users to add to calendar
document.querySelectorAll('.event-widget1').forEach(ev => {
//selects month, day, name of event, description and time 
let monthName = ev.querySelector('.event-month').textContent.trim();
let day = ev.querySelector('.event-day').textContent.trim();
let title = ev.querySelector('.event-name').textContent.trim();
let desc = ev.querySelector('.event-description').textContent.trim();
let timeText = ev.querySelector('.event-time').textContent;

if (!monthName || !day || !timeText) return;

//note: GOOGLE CALENDAR NEEDS THIS FORMAT: YYYYMMDDTHHMMSS/YYYYMMDDTHHMMSS TO SAVE CORRECT DATE AND TIME
//turns month name into month number
const monthMap = {
  jan:'01', january:'01',
  feb:'02', february:'02',
  mar:'03', march:'03',
  apr:'04', april:'04',
  may:'05',
  jun:'06', june:'06',
  jul:'07', july:'07',
  aug:'08', august:'08',
  sep:'09', sept:'09', september:'09',
  oct:'10', october:'10',
  nov:'11', november:'11',
  dec:'12', december:'12'
};

const key = monthName.toLowerCase().trim();
const monthNum = monthMap[key];
if (!monthNum) { console.warn('Unrecognized month:', monthName); return; }

const year = new Date().getFullYear();
const dateStr = `${year}${monthNum}${day.padStart(2,'0')}`;

//note: google calendar needs HHMMSS format for time 
function to24(t){
  let m = t.match(/(\d{1,2})(?::(\d{2}))?\s*(am|pm)?/i);
  if(!m) return '';
  let h = +m[1];
  let min = m[2] || '00';
  let mer = m[3] && m[3].toLowerCase();
  if (mer === 'pm' && h !== 12) h += 12;
  if (mer === 'am' && h === 12) h = 0;
  return String(h).padStart(2,'0') + String(min).padStart(2,'0') + '00';
}

//split start and end times
let [start, end] = timeText.split(/–|-/).map(t => t.trim());
let dates = `${dateStr}T${to24(start)}/${dateStr}T${to24(end)}`;

//builds google calendar link
let tz = 'America/Toronto'; // Your timezone
let url = `https://calendar.google.com/calendar/render?action=TEMPLATE` +
          `&text=${encodeURIComponent(title)}` +
          `&dates=${dates}` +
          `&details=${encodeURIComponent(desc)}` +
          `&ctz=${encodeURIComponent(tz)}`;

//add link to overlay
  const link = ev.querySelector('.event-overlay a');
  if (link) link.href = url;


})