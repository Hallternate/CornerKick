

const events = [
    { date: new Date('2025-01-04T18:00:00-06:00'), name: 'miles', loc: 'field1' },
    { date: new Date('2024-12-21T18:00:00-06:30'), name: 'miles', loc: 'field2' },
    { date: new Date('2024-12-28T18:00:00-01:00'), name: 'roslyn', loc: 'field' },
    { date: new Date('2024-12-28T18:00:00-01:00'), name: 'miles', loc: 'field' },
    { date: new Date('2024-12-28T18:00:00-01:00'), name: 'roslyn', loc: 'field' },
    { date: new Date('2024-12-28T18:00:00-02:00'), name: 'roslyn0', loc: 'field' },
    { date: new Date('2024-12-21T18:15:00-06:00'), name: 'ros', loc: 'field3' },
    { date: new Date('2025-01-04T18:00:00-06:30'), name: 'miles', loc: 'field4' },
    { date: new Date('2025-01-04T18:00:00-06:10'), name: 'miles', loc: 'field4' },
    { date: new Date('2024-12-21T18:00:00-07:00'), name: 'miles', loc: 'field7' },
    { date: new Date('2024-12-21T18:15:00-06:00'), name: 'ros', loc: 'field8' }
];

// Get current date (ignoring time)
const today = new Date();
today.setHours(0, 0, 0, 0); // Set to midnight

// Filter out past events
const futureEvents = events.filter(event => event.date >= today);

//Sort future events by date
futureEvents.sort((a, b) => a.date - b.date);

//Create a list of all unique dates (ignoring time)
const uniqueDates = [...new Set(futureEvents.map(event => event.date.toISOString().split('T')[0]))];

console.log('Unique Dates:', uniqueDates);

//Create lists of events for each unique date
const eventsByDate = uniqueDates.map(date => futureEvents.filter(event => event.date.toISOString().split('T')[0] === date));

console.log('Events Grouped by Date:', eventsByDate);

//Functions to get the soonest and next events
export function nextUpcomingDay() {
    return eventsByDate[0] || [];  // Return events for the soonest date (index 0)
}

export function afterSoonest() {
    return eventsByDate[1] || [];  // Return events for the next date (index 1)
}







