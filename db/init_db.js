const client = require('./client')

const { createAlcohol, registerUser } = require("./index");

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
        price NUMERIC NOT NULL,
        description VARCHAR(255),
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

    const users = await Promise.all(usersToCreate.map(registerUser));

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
        price: 14.99,
        description: "This shit is so good, you will forget you are drinking until it is too late!",
      },
      {
        type: "Vodka",
        name: "Grey Goose",
        price: 22.99,
        description: "I can't explain how many nights I have forgotten while drinking this shit!"
      },
      {
        type: "Whiskey",
        name: "Jack Daniels",
        price: 16.99,
        description: "You must be a pretty cool individual, you gotta have a sick ass mustache, like Sam fucking Elliott!"
      },
      {
        type: "Malt Liquor",
        name: "White Claw",
        price: 1.99,
        description: "I mean, if you like it then you like it I guess, everybody is free to make their own mistakes..."
      }
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
