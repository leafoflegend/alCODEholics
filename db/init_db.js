const { client } = require('./client')
const { createAlcohol, createUser } = require("./index");

async function buildTables() {
  try {
    client.connect();

    // drop tables in correct order
    console.log("Starting to DROP TABLES...");
    await client.query(`
    DROP TABLE IF EXISTS cart;
    DROP TABLE IF EXISTS alcohols;
    DROP TABLE IF EXISTS users;
    `);
    console.log("Successfully DROPPED TABLES!");

    // build tables in correct order
    console.log("Attempting to CREATE TABLES...");
    await client.query(
      `
      CREATE TABLE users(
        id SERIAL PRIMARY KEY,
        username VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        "isAdmin" BOOLEAN DEFAULT false
        );
      CREATE TABLE alcohols(
        id SERIAL PRIMARY KEY,
        type VARCHAR(255) NOT NULL,
        name VARCHAR(255) NOT NULL,
        "inStock" BOOLEAN DEFAULT false
        );
      CREATE TABLE cart(
        id SERIAL PRIMARY KEY,
        "userId" INT REFERENCES users("id"),
        "alcoholId" INT REFERENCES alcohols("id")
      );
        `
    );
    console.log("Successfully CREATED TABLES!");
  } catch (error) {
    throw error;
  }
}

async function populateInitialUsers() {
  console.log("Trying to create users...");
  try {
    const usersToCreate = [
      {
        username: "Brian M",
        password: "BrianMwashere",
        isAdmin: false,
      },
      {
        username: "Jordan H",
        password: "JordanHwashere",
        isAdmin: false,
      },
      {
        username: "Chris W",
        password: "ChrisWwashere",
        isAdmin: false,
      },
      {
        username: "Maxwell M",
        password: "MaxwellMwashere",
        isAdmin: true,
      },
    ];

    const users = await Promise.all(usersToCreate.map(createUser));

    console.log("Users Created");
    console.log("Users Created: ", users);
    console.log("Finished creating users!");
  } catch (error) {
    throw error;
  }
}

async function populateInitialData() {
  console.log("Trying to create Alcohols...");

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
  .then(populateInitialUsers)
  .then(populateInitialData)
  .catch(console.error)
  .finally(() => client.end());
