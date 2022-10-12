import { expect } from "chai";
import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { ethers } from "hardhat";
import { Stretchit, UserNotes } from "../typechain-types";

describe("Stretchit", function () {
  async function deployMainFixture() {
    const stretchitFactory = await ethers.getContractFactory("Stretchit");
    const [owner, addr1, addr2] = await ethers.getSigners();

    const stretchit: Stretchit = await stretchitFactory.deploy();
    await stretchit.deployed();

    return { stretchitFactory, stretchit, owner, addr1, addr2 };
  }

  it("Deployment && owner assign.", async () => {
    const { stretchit, owner } = await loadFixture(deployMainFixture);

    expect(await stretchit.balanceOf()).to.eq(0);
    expect(await stretchit.owner()).to.eq(owner.address);
  });

  it("Creation of children contract && allowance", async () => {
    const { stretchit, addr1 } = await loadFixture(deployMainFixture);
    await expect(await stretchit.connect(addr1).createNewUser()).to.emit(
      stretchit,
      "Created"
    );
    const contr1Address = await stretchit.viewUsersContracts(addr1.address);
    const contr1: UserNotes = await ethers.getContractAt(
      "UserNotes",
      contr1Address,
      addr1
    );
    expect(contr1Address).to.eq(contr1.address);
    expect(await contr1.owner()).to.eq(addr1.address);
    expect(await contr1.parentContract()).to.eq(stretchit.address);

    let tx = {
      value: ethers.utils.parseEther("0.01"),
      to: stretchit.address,
    };

    const txPay = await addr1.sendTransaction(tx);
    await txPay.wait();

    expect(await contr1.allowance()).to.eq(true);

    await expect(await stretchit.widthdraw());
  });

  it("alternative branches in Main", async () => {
    const { stretchit, addr1, addr2 } = await loadFixture(deployMainFixture);

    await stretchit.connect(addr1).createNewUser();

    await expect(stretchit.connect(addr1).createNewUser()).to.be.revertedWith(
      "you already have an account!"
    );

    await expect(
      stretchit.connect(addr1).allow({ value: ethers.utils.parseEther("2") })
    ).to.be.revertedWith("wrong amount");

    await stretchit
      .connect(addr1)
      .allow({ value: ethers.utils.parseEther("1") });

    await expect(
      stretchit.connect(addr1).allow({ value: ethers.utils.parseEther("0.01") })
    ).to.be.revertedWith("youre already allowed");

    let tx = {
      value: ethers.utils.parseEther("0.01"),
      to: stretchit.address,
      gasLimit: 10000000,
    };

    await expect(addr2.sendTransaction(tx)).to.be.revertedWith("not a user");

    await expect(stretchit.connect(addr2).widthdraw()).to.be.revertedWith(
      "not allowed"
    );
  });

  it("tests saving ability", async () => {
    const { stretchit, addr1, addr2 } = await loadFixture(deployMainFixture);

    await stretchit.connect(addr1).createNewUser();

    const contr1Address = await stretchit.viewUsersContracts(addr1.address);
    const contr1: UserNotes = await ethers.getContractAt(
      "UserNotes",
      contr1Address,
      addr1
    );

    await expect(contr1.pushData(JSON.stringify([1, ["test"], [10]]))).to.emit(
      contr1,
      "Pushed"
    );

    const contr1Hack: UserNotes = await ethers.getContractAt(
      "UserNotes",
      contr1Address,
      addr2
    );

    await expect(
      contr1Hack.pushData(JSON.stringify([1, ["test"], [10]]))
    ).to.be.revertedWith("youre not allowed to do this!");

    await expect(contr1Hack.setAllowance()).to.be.revertedWith("not allowed");
  });

  it("works with commits", async () => {
    const { stretchit, addr1, addr2 } = await loadFixture(deployMainFixture);

    await stretchit.connect(addr1).createNewUser();

    const contr1Address = await stretchit.viewUsersContracts(addr1.address);
    const contr1: UserNotes = await ethers.getContractAt(
      "UserNotes",
      contr1Address,
      addr1
    );

    await contr1.pushData(JSON.stringify([1, ["test"], [10]]));
    expect(await contr1.getData()).to.eq(JSON.stringify([1, ["test"], [10]]));

    await expect(contr1.connect(addr2).getData()).to.be.revertedWith(
      "youre not allowed to do this!"
    );
  });
});
