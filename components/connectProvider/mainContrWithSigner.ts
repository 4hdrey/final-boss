import metamaskProvider from "./metamaskProvider";
import { Stretchit__factory } from "../../typechain-types";
import { ethers } from "ethers";
import defaultProvider from "./defaultProvider";

const mainContrWithSigner = () => {
  const mainContr = new ethers.Contract(
    process.env.NEXT_PUBLIC_MAIN_CONTRACT_ADDRESS as string,
    Stretchit__factory.abi,
    defaultProvider
  );
  const signer = metamaskProvider!.getSigner();
  return mainContr.connect(signer);
};

export default mainContrWithSigner;
