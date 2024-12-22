const events = [
    { date: '01/04/2024', name: 'miles', time:200, loc:'field1' },
    { date: '12/21/2024', name: 'miles', time:1200, loc:'field2' },
    { date: '12/28/2024', name: 'roslyn', time:100, loc:'field' },
    { date: '12/21/2024', name: 'ros', time:1215, loc:'field3' },
    { date: '01/04/2024', name: 'miles', time:300, loc:'field4' },
    { date: '12/21/2024', name: 'miles', time:900, loc:'field7' },
    { date: '12/28/2024', name: 'roslyn', time:1100, loc:'field6' },
    { date: '12/21/2024', name: 'ros', time:915, loc:'field8' }
    ]

export function generateList(){

events.sort((a, b) => new Date(a.date) - new Date(b.date));
console.log(events)
const today = new Date();
const todayo= today.getDate()
console.log(todayo)

return events
}


/*
figure out how to get date in right format or see what it looks like to store date in firebase
    */








