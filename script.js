//takes information from html event widgets for users to add to calendar
document.querySelectorAll('.event-widget1').forEach(ev => {
//selects month, day, name of event, description and time 
let monthName = ev.querySelector('.event-month').textContent.trim();
let day = ev.querySelector('.event-day').textContent.trim();
let title = ev.querySelector('.event-name').textContent.trim();
let desc = ev.querySelector('.event-discription').textContent.trim();
let timeText = ev.querySelector('.event-time').textContent;
}