import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useContext } from "react";
import Context from "../Context";
import { ethers } from "ethers";
import mainContrWithSigner from "../connectProvider/mainContrWithSigner";
import isSignedUp from "../isSignedUp";

interface ModalProps {
  show: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

function Modal(props: ModalProps) {
  const [isBrowser, setIsBrowser] = useState(false);
  const [isPending, setIsPending] = useState(false);

  const [isConnected] = useContext(Context);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  function handleCloseClick(e: React.MouseEvent) {
    e.preventDefault();
    props.setShowModal(false);
  }

  async function handleSubscribeClick() {
    if (await isSignedUp(isConnected)) {
      try {
        await mainContrWithSigner().allow({
          value: ethers.utils.parseEther("0.01"),
        });
        setIsPending(true);
      } catch (error) {
        console.error(error);
      }
    }
  }

  const modalContent = props.show ? (
    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black/50 z-10">
      <div className="bg-main w-96 h-72 p-3 rounded-xl shadow-md">
        <div className="flex justify-end text-2xl mx-1">
          <a href="#" onClick={(e) => handleCloseClick(e)}>
            X
          </a>
        </div>
        <div className="text-2xl flex justify-center items-center flex-col text-center my-6">
          <p>You are able to add 3-tiled block only if you subscribed!</p>
          {!isPending ? (
            <button
              onClick={handleSubscribeClick}
              className="my-10  w-3/4 hover:shadow-lg rounded-lg shadow-md bg-focus">
              subscribe (0.01 ETH)
            </button>
          ) : (
            <div className="my-10 text-center">
              Cool! Now wait for tx to process...
            </div>
          )}
        </div>
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("parentDiv") as Element
    );
  } else {
    return null;
  }
}

export default Modal;
