//takes information from html event widgets for users to add to calendar
document.querySelectorAll('.event-widget1').forEach(ev => {
//selects month, day, name of event, description and time 
let monthName = ev.querySelector('.event-month').textContent.trim();
let day = ev.querySelector('.event-day').textContent.trim();
let title = ev.querySelector('.event-name').textContent.trim();
let desc = ev.querySelector('.event-description').textContent.trim();
let timeText = ev.querySelector('.event-time').textContent;

//note: GOOGLE CALENDAR NEEDS THIS FORMAT: YYYYMMDDTHHMMSS/YYYYMMDDTHHMMSS TO SAVE CORRECT DATE AND TIME
//turns month name into month number
let monthNum = new Date(`${monthName} 1, ${new Date().getFullYear()}`).getMonth() + 1;
//make sure it is two digits and turns number into string 
monthNum = String(monthNum).padStart(2, '0');
//build final date string in format YYYYMMDD 
let dateStr = `${new Date().getFullYear()}${monthNum}${day.padStart(2,'0')}`;

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
let link = ev.querySelector('.event-overlay a');
if (link) link.href = url;


})