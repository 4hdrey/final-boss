import { ethers } from "hardhat";
import { Stretchit, UserNotes } from "../typechain-types";

async function deploy() {
  const stretchitFactory = await ethers.getContractFactory("Stretchit");
  const [owner] = await ethers.getSigners();

  console.log("owner address is:", owner.address);

  const stretchit: Stretchit = await stretchitFactory.deploy();
  await stretchit.deployed();

  console.log("contract successfuly unwrapped at", stretchit.address);
}

deploy()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
