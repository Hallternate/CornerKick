import { database, ref, push } from '../firebase';

export async function pushGame(game) {
  try {
    const gamesRef = ref(database, 'games');
    await push(gamesRef, {
      name: game.name,
      date: game.date,
      time: game.time,
      location: game.location,
    });
    console.log('Game added successfully');
  } catch (error) {
    console.error('Error adding game:', error);
  }
}