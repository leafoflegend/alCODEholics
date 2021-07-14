// code to build and initialize DB goes here
const { client, createAlcohol } = require("./index");

async function buildTables() {
  try {
    client.connect();

    // drop tables in correct order
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
  } catch (error) {
    throw error;
  }
}

async function populateInitialData() {
  try {
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
  } catch (error) {
    throw error;
  }
}

buildTables()
  .then(populateInitialData)
  .catch(console.error)
  .finally(() => client.end());
