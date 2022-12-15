
# Stretchit

The application for taking notes in a creative way. Stretch and customize note blocks however you desire. Save your notes in blockcahin and have access to them via your MM wallet address in Goerli test network.


## Run Locally

Clone the project

```bash
  git clone https://github.com/andrei-samokish/final-boss
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file:

`ALCHEMY_API_KEY` - sign up at [_alchemy.com_](https://www.alchemy.com) and create Goerli app. You will be provided with an alchemy API key which you should paste in your .env;

`GOERLI_PRIVATE_KEY` - copy your MetaMask wallet`s private key and paste it in your .env (only if you want to deploy contract yourself);

`NEXT_PUBLIC_MAIN_CONTRACT_ADDRESS="0x2638245287b01D4D42f8c4b3817bA1Bd59cEeb01"` - use this address as an existing deployment of Stretchit contract.


## Screenshots

![App Screenshot](https://snipboard.io/4g3vns.jpg)


## Tech Stack

**Client:** React, Next, TailwindCSS, Solidity, Hardhat (deploy + tests), Ethers.js

**Server:** Node, Vercel


