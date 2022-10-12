import { Stretchit, Stretchit__factory, UserNotes } from "../typechain-types";
import { ethers } from "hardhat";

async function deploy() {
  const stretchitFactory = await ethers.getContractFactory("Stretchit");
  const [owner, addr1, addr2] = await ethers.getSigners();

  const stretchit: Stretchit = await stretchitFactory.deploy();
  await stretchit.deployed();

  return { stretchit, owner, addr1, addr2 };
}

async function doSmth() {
  const { stretchit, owner, addr1 } = await deploy();
  await stretchit.connect(addr1).createNewUser();

  const contr1Address = await stretchit.viewUsersContracts(addr1.address);
  const contr1: UserNotes = await ethers.getContractAt(
    "UserNotes",
    contr1Address,
    addr1
  );

  const filter = contr1.filters.Pushed(addr1.address);

  contr1.on(filter, (address, data) => {
    console.log(address);
    console.log(data);
  });
}
export {};
