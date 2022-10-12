import { ethers } from "ethers";
import mainContrWithSigner from "./connectProvider/mainContrWithSigner";

export default async function isSignedUp(
  isConnected: boolean
): Promise<boolean> {
  if (isConnected) {
    let _signerAddr: string = window.ethereum.selectedAddress;

    let isUser: string = await mainContrWithSigner().viewUsersContracts(
      _signerAddr
    );

    if (isUser != ethers.constants.AddressZero) {
      return true;
    }
  }
  return false;
}
