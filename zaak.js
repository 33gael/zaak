import axios from 'axios';
import chalk from 'chalk';
import open from 'open';
import readlineSync from 'readline-sync';

const purple = chalk.ansi256(93);
const red = chalk.red;
const green = chalk.green;

function menu() {
  let choix;
  console.clear()
  console.log(red('                                 +------------------------------------+'));
  console.log(red('                                 |'), purple(' ███████╗ █████╗  █████╗ ██╗  ██╗ '), red('|'));
  console.log(red('                                 |'), purple(' ╚══███╔╝██╔══██╗██╔══██╗██║ ██╔╝ '), red('|'));
  console.log(red('                                 |'), purple('   ███╔╝ ███████║███████║█████╔╝  '), red('|'));
  console.log(red('                                 |'), purple('  ███╔╝  ██╔══██║██╔══██║██╔═██╗  '),red('|'));
  console.log(red('                                 |'), purple(' ███████╗██║  ██║██║  ██║██║  ██╗ '),red('|'));
  console.log(red('                                 |'), purple(' ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝ '), red('|'));
  console.log(red('                                 +------------------------------------+'));
  console.log(red("                                              +-----------+"));
  console.log(red("                                              |"), purple("  Zaak   "), red('|'));
  console.log(red("                                              |"), purple(" @33gael "), red('|'));
  console.log(red("                                              +-----------+"));
  
  while (true) {
    console.log(red("[0]"), "Quit");
    console.log(red("[1]"), "Ip LookUp");
    console.log(red("[2]"), "What's my IP ??");
    console.log(red("[3]"), "Number Phone Lookup");
    choix = readlineSync.question("Choose an option : ");
    choix = parseInt(choix);

    if (choix === 1) {
      console.log(green("[1]"), "Ip Lookup : ");
      ipInput();
      break;
    }
    if (choix === 2) {
      console.log(green("[2]"), "What's my IP ?? : ");
      myIp();
      break;
    } if (choix === 3) {
      console.log(green("[3]"), "Number Phone Lookup :");
      phoneInput();
      break;
    }
    if (choix === 0) {
      break;
    }
    else {
      console.log("Invalid Option, please choose a valid option.".red);
    }
  }
}

async function ipInput() {
  try {
    let ipInput = readlineSync.question("Enter an Ip Address : ");
    if (!ipInput) return;
    const response = await fetch(`http://ip-api.com/json/${ipInput}`);
    const responseToJson = await response.json();
    console.log(responseToJson);
    const coord = await axios.get(`http://ip-api.com/json/${ipInput}`);
    const {lat, lon} = coord.data;
    await open(`https://www.google.com/maps?q=${lat},${lon}`);
  } catch (err) {
    console.log(err);
  }
}

async function myIp() {
  try {
    const response = await fetch("https://api.ipify.org/?format=json");
    const data = await response.json();
    console.log("Your IP Address is :", data.ip);
  } catch (error) {
    console.error("Error retrieving the IP address.", error);
  }
}

async function phoneInput() {
  try {
    let phoneInput = readlineSync.question("Enter a Phone Number : ");
    if (!phoneInput) return;
    const response = await fetch(`https://www.ipqualityscore.com/api/json/phone/vxzDXvWbwx41IeVatUSxiunkMCzmdJrc/${phoneInput}`);
    const responsePhone = await response.json();
    console.log(responsePhone);
  }
  catch (error) {
    console.error("Error retrieving the Phone number.", error);
  }
}

menu();