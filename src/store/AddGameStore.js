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

    return { success: true, message: 'Game added successfully!' };
  } catch (error) {
    console.error('Error adding event:', error);
    return { success: false, message: 'Failed to add game.' };
  }
}

