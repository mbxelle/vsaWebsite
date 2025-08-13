//takes information from html event widgets for users to add to calendar
document.querySelectorAll('.event-widget1').forEach(ev => {
//selects month, day, name of event, description and time 
let monthName = ev.querySelector('.event-month').textContent.trim();
let day = ev.querySelector('.event-day').textContent.trim();
let title = ev.querySelector('.event-name').textContent.trim();
let desc = ev.querySelector('.event-discription').textContent.trim();
let timeText = ev.querySelector('.event-time').textContent;

//note: GOOGLE CALENDAR NEEDS THIS FORMAT: YYYYMMDDTHHMMSS/YYYYMMDDTHHMMSS TO SAVE CORRECT DATE AND TIME

//turns month name into month number
let monthNum = new Date(`${monthName} 1, ${new Date().getFullYear()}`).getMonth() + 1;
//make sure it is two digits and turns number into string 
monthNum = String(monthNum).padStart(2, '0');
//build final date string in format YYYYMMDD 
let dateStr = `${new Date().getFullYear()}${monthNum}${day.padStart(2,'0')}`;

})