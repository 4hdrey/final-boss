import React, { useEffect, useState } from "react";
import Block1 from "../components/blocks/Block1";
import Block2 from "../components/blocks/Block2";
import Block3 from "../components/blocks/Block3";
import Buttons from "../components/Buttons";
import Context from "../components/Context";
import ConnectButton from "../components/ConnectButton";
import Modal from "../components/blocks/PaymentWindow";
import Head from "next/head";
import userContrWithSigner from "../components/connectProvider/userContrWithSigner";
import isSignedUp from "../components/isSignedUp";

// если мы подключены (isConnected == true) нужно сразу же установить signer. для этого нужен провайдер

const Home = () => {
  //metamask connected?
  const [isConnected, setIsConnected] = useState(false);

  //проверить, доступно ли window.
  const [isSSR, setIsSSR] = useState(true);

  // установлен ли метамаск
  const [isMM, setIsMM] = useState(false);

  const [showModal, setShowModal] = useState(false);

  // разрешение на добавление 3-блока
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    setIsSSR(false);
    if (window.ethereum) setIsMM(true);
  }, []);

  //как только подключились

  const [blocks, setBlocks] = useState<
    Array<[number, Array<string>, Array<React.CSSProperties>]>
  >([]);

  console.log("address", process.env.NEXT_PUBLIC_MAIN_CONTRACT_ADDRESS);

  useEffect(() => {
    if (isConnected)
      (async () => {
        if (await isSignedUp(isConnected)) {
          let _blocks: string = await (await userContrWithSigner()).getData();
          if (!_blocks) setBlocks([]);
          else setBlocks(JSON.parse(_blocks));
        }
      })();
  }, [isConnected]);

  const props = {
    blocks: blocks,
    onBlockModify: setBlocks,
  };

  return (
    <>
      <Head>
        <style>
          @import
          url(&apos;https://fonts.googleapis.com/css2?family=Inconsolata:wght@900&amp;display=swap&apos;);
        </style>
      </Head>
      <div
        className="flex align-center bg-main text-text h-60 flex-col mb-10"
        id="parentDiv">
        <Context.Provider
          value={[isConnected, setIsConnected, blocks, setBlocks]}>
          <Modal show={showModal} setShowModal={setShowModal} />
          <div className="text-2xl p-2.5 flex justify-between w-full">
            <h1>Stretchit</h1> {isMM && <ConnectButton />}{" "}
          </div>
        </Context.Provider>
        <h2 className="text-xl text-center my-6">
          The application for noting and planning via adjustable flexible tiles
        </h2>
        <h2 className="text-2xl text-center my-6">
          Create new block with some tiles using buttons below
        </h2>
      </div>

      <div className="flex flex-row w-full h-full">
        <div className="w-10/12 ml-6">
          {!isSSR &&
            isConnected &&
            blocks.map((block) => {
              if (block[1].length === 1)
                return <Block1 key={block[0]} {...props} blockId={block[0]} />;
              else if (block[1].length === 2)
                return <Block2 key={block[0]} {...props} blockId={block[0]} />;
              else if (block[1].length === 3)
                return <Block3 key={block[0]} {...props} blockId={block[0]} />;
            })}
        </div>
        <div className="w-2/12 h-full">
          <Context.Provider
            value={[isConnected, setIsConnected, blocks, setBlocks]}>
            <Buttons
              allowance={allowed}
              setAllowance={setAllowed}
              setShowModal={setShowModal}
            />
          </Context.Provider>
        </div>
      </div>
    </>
  );
};
export default Home;
