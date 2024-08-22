import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
// Function to add or update content in the 'jate' database
export const putDb = async (content) => {
  console.log('Put to the database');

  // Open a connection to the 'jate' database with version 1
  const jateDB = await openDB('jate', 1);

  // Create a new transaction with readwrite privileges
  const tx = jateDB.transaction('jate', 'readwrite');

  // Open the 'jate' object store
  const store = tx.objectStore('jate');

  // Add or update the content using .put() method with a fixed id of 1
  const request = store.put({ id: 1, value: content });

  // Wait for the request to complete and log the result to confirm the data was added
  const result = await request;
  console.log('Data saved to the Database', result);
};

// TODO: Add logic for a method that gets all the content from the database
// Export a function we will use to GET to the database.
export const getDb = async () => {
  console.log('GET from the database');

  // Create a connection to the 'jate' database and version we want to use.
  const jateDb = await openDB('jate', 1);

  // Create a new transaction and specify the database and data privileges.
  const tx = jateDb.transaction('jate', 'readonly');

  // Open up the desired object store.
  const store = tx.objectStore('jate');

  // Use the .getAll() method to get all data in the database.
  const request = store.getAll();

  // Get confirmation of the request.
  const result = await request;
  console.log('result.value', result);
  return result?.value;
};

initdb();
