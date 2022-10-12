import metamaskProvider from "./metamaskProvider";
import { UserNotes__factory } from "../../typechain-types";
import { ethers } from "ethers";
import defaultProvider from "./defaultProvider";
import mainContrWithSigner from "./mainContrWithSigner";

const userContrWithSigner = async () => {
  let _userAddress: string = ethers.constants.AddressZero;

  if (typeof window !== "undefined") {
    _userAddress = window.ethereum.selectedAddress;
  }

  const mainContr = mainContrWithSigner();

  const address: string = await mainContr.viewUsersContracts(_userAddress);

  const userContr = new ethers.Contract(
    address,
    UserNotes__factory.abi,
    defaultProvider
  );

  const signer = metamaskProvider!.getSigner();
  return userContr.connect(signer);
};

export default userContrWithSigner;
