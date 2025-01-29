import { database, ref, push } from '../firebase';

export async function pushGame(game) {
  try {
    const eventsRef = ref(database, 'events'); 
    
   
    const combinedDateTime = new Date(game.date + 'T' + game.time).toISOString();

    await push(eventsRef, {
      name: game.name,
      date: combinedDateTime, 
      loc: game.location,
    });
    console.log('Event added successfully');
  } catch (error) {
    console.error('Error adding event:', error);
  }
}
