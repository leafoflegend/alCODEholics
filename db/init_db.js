// code to build and initialize DB goes here
<<<<<<< HEAD
const {
  client
  // other db methods 
} = require('./index');
=======
const { client, createAlcohol } = require("./index");
>>>>>>> 1cdd146b11e87071783bf02c49178ab59f14fe56

async function buildTables() {
  try {
    client.connect();

    // drop tables in correct order
<<<<<<< HEAD

    // build tables in correct order

=======
    console.log("Starting to DROP TABLES...");
    await client.query(`
    DROP TABLE IF EXISTS alcohols
    `);
    console.log("Successfully DROPPED TABLES!");

    // build tables in correct order
    console.log("Attempting to CREATE TABLES...");
    await client.query(
      `CREATE TABLE alcohols(
        id SERIAL PRIMARY KEY,
        type VARCHAR(255) NOT NULL,
        name VARCHAR(255) NOT NULL
        )`
    );
    console.log("Successfully CREATED TABLES!");
>>>>>>> 1cdd146b11e87071783bf02c49178ab59f14fe56
  } catch (error) {
    throw error;
  }
}

async function populateInitialData() {
  try {
<<<<<<< HEAD
    // create useful starting data
=======
    const alcoholsToCreate = [
      {
        type: "Rum",
        name: "Malibu",
      },
      {
        type: "Vodka",
        name: "Grey Goose",
      },
      {
        type: "Whiskey",
        name: "Jack Daniels",
      },
    ];

    const alcohols = await Promise.all(alcoholsToCreate.map(createAlcohol));

    console.log("Alcohols Created");
    console.log("Alcohols Created: ", alcohols);
    console.log("Finished creating alcohols!");
>>>>>>> 1cdd146b11e87071783bf02c49178ab59f14fe56
  } catch (error) {
    throw error;
  }
}

buildTables()
  .then(populateInitialData)
  .catch(console.error)
<<<<<<< HEAD
  .finally(() => client.end());
=======
  .finally(() => client.end());
>>>>>>> 1cdd146b11e87071783bf02c49178ab59f14fe56
