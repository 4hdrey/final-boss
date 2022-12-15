import { useContext, useEffect } from "react";
import Context from "./Context";
import userContrWithSigner from "./connectProvider/userContrWithSigner";
import handleAddClick from "./handleAddClick";
import isSignedUp from "./isSignedUp";

interface ButtonsProps {
  allowance: boolean;
  setAllowance: React.Dispatch<React.SetStateAction<boolean>>;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Buttons(props: ButtonsProps) {
  const [isConnected, , blocks, setBlocks] = useContext(Context);

  const { allowance, setAllowance, setShowModal } = props;

  useEffect(() => {
    (async () => {
      try {
        const _allowance = await (await userContrWithSigner()).allowance();
        console.log(_allowance);
        setAllowance(_allowance);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  async function checkAllowance() {
    if (isConnected) {
      console.log("on push button, allowance is", allowance);
      if (allowance) handleAddClick(3, isConnected, blocks, setBlocks);
      else {
        setShowModal(true);
      }
    }
  }

  async function handlePushClick() {
    let newData = JSON.stringify(blocks);

    if (isConnected) {
      (await userContrWithSigner()).once("Pushed", (contrAddress) => {
        console.log("sucessfully pushed data of", contrAddress, "user`s address");
      });

      await (await userContrWithSigner()).pushData(newData);
    }
  }
  return (
    <>
      <div className="flex flex-col align-center fixed right-0 mx-7">
        <div className="flex justify-center">
          <button
            className="my-7 w-16 h-16 bg-main text-text rounded-full hover:animate-pulse"
            onClick={() => handleAddClick(1, isConnected, blocks, setBlocks)}>
            1
          </button>
        </div>
        <div className="flex justify-center">
          <button
            className="my-7 w-16 h-16 bg-main text-text rounded-full hover:animate-pulse"
            onClick={() => handleAddClick(2, isConnected, blocks, setBlocks)}>
            2
          </button>
        </div>
        <div className="flex justify-center">
          <button
            className="my-7 w-16 h-16 bg-main text-text rounded-full hover:animate-pulse"
            onClick={checkAllowance}>
            3
          </button>
        </div>
        <div className="flex justify-center">
          <button
            className="my-7 w-16 h-16 bg-main text-text rounded-full hover:animate-pulse"
            onClick={handlePushClick}>
            ∆
          </button>
        </div>
      </div>
    </>
  );
}
