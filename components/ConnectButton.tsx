import { useEffect, useState, useContext } from "react";
import { ethers } from "ethers";
import Context from "./Context";
import mainContrWithSigner from "./connectProvider/mainContrWithSigner";
import metamaskProvider from "./connectProvider/metamaskProvider";
import isSignedUp from "./isSignedUp";

export default function ConnectButton() {
  const [isConnected, setIsConnected] = useContext(Context);

  const [address, setAddress] = useState("");

  useEffect(() => {
    if (window.ethereum.selectedAddress) {
      setIsConnected(true);
      setAddress(window.ethereum.selectedAddress);
    }
  }, [isConnected]);

  async function createUser() {
    try {
      mainContrWithSigner().once("Created", (address) => {
        console.log("created new contract with address", address);
      });
      await mainContrWithSigner().createNewUser();
    } catch (error) {
      console.error(error);
    }
  }

  const connectToMetamask = async () => {
    try {
      const provider = metamaskProvider as ethers.providers.Web3Provider;
      await provider.send("eth_requestAccounts", []);

      setIsConnected(true);

      if (!(await isSignedUp(isConnected))) {
        await createUser();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {isConnected ? (
        <h3>{`${address}`}</h3>
      ) : (
        <button onClick={connectToMetamask}>Connect metamask</button>
      )}
    </>
  );
}
