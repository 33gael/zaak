const readlineSync = require("readline-sync");
const colors = require("colors");

function menu() {
  let choix;
  console.clear()
  console.log('                                 +------------------------------------+'.red)
  console.log('                                 |'.red,'\x1b[38;5;93m ███████╗ █████╗  █████╗ ██╗  ██╗ \x1b[0m','|'.red);
  console.log('                                 |'.red,'\x1b[38;5;93m ╚══███╔╝██╔══██╗██╔══██╗██║ ██╔╝ \x1b[0m','|'.red);
  console.log('                                 |'.red,'\x1b[38;5;93m   ███╔╝ ███████║███████║█████╔╝  \x1b[0m','|'.red);
  console.log('                                 |'.red,'\x1b[38;5;93m  ███╔╝  ██╔══██║██╔══██║██╔═██╗  \x1b[0m','|'.red);
  console.log('                                 |'.red,'\x1b[38;5;93m ███████╗██║  ██║██║  ██║██║  ██╗ \x1b[0m','|'.red);
  console.log('                                 |'.red,'\x1b[38;5;93m ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝ \x1b[0m','|'.red);
  console.log('                                 +------------------------------------+'.red)
  console.log("                                              +-----------+".red);
  console.log("                                              |".red, "\x1b[38;5;93m Zaak V1 \x1b[0m",'|'.red);
  console.log("                                              |".red, "\x1b[38;5;93m @33gael \x1b[0m",'|'.red);
  console.log("                                              +-----------+".red);
  
  while (true) {
    console.log("1 - Ip LookUp");
    console.log("2 - What's my IP ??");
    console.log("3 - Number Phone Lookup");
    choix = readlineSync.question("Choose an option : ");
    choix = parseInt(choix);

    if (choix === 1) {
      console.log("1 - Ip Lookup : ");
      ipInput();
      break;
    } else if (choix === 2) {
      console.log("What's my IP ?? : ");
      myIp();
      break;
    } if (choix === 3) {
      console.log("Number Phone Lookup :");
      
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

const url = 'https://phonevalidation.abstractapi.com/v1';
const options = {method: 'GET', body: undefined};

async function phoneInput() {
  try {
    let phoneInput = readlineSync.question("Enter a Phone Number : ");
    if (!phoneInput) return;
    const response = await fetch(`https://phonevalidation.abstractapi.com/v1/${phoneInput}`);
    const responseToJson = await response.json();
    console.log(responseToJson);
  }
  catch (error) {
    console.error("Error retrieving the Phone number.", error);
  }
}

menu();