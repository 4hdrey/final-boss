/**

Сервис stretchit для заметок с авторизацией в metamask. Работает только при подключении MM.

стартер страница: хедер с общей информацией и кнопкой подключения metamask, готовый блок с двумя тайлами и кнопки добавления новых блоков. 
при скролле вниз страница как на сайте эпл переезжает в "рабочую" область, где только кнопки добавления блоков, сами блоки и кнопка импорта заметок
импорт заметок из локал сториджа -> сохраняются они туда только при нажатии кнопки
каждый блок можно менять в размерах - но только в допустимых пределах: размер тайла не меньше 150px и блок не шире заданного ему пространства
тайлы можно расширять только вправо
каждый тайл также можно менять в размере - но только по горизонтали и внутри блока. крайний правый тайл расширяется вместе с блоком
каждый тайл - ячейка для заметки, его можно скроллить. 
? добавить совместимость блоков по вертикали - скругление краев и их раскругление при добавлении нового блока
при нажатии кнопки добавлении блока тот добавляется как самый нижний из блоков
число на кнопке - количество тайлов в создаваемом блоке


прописать сами блоки с тайлами, сделать их adjustable и flexible
прописать внешний вид страницы в упрощенном виде - без стилей, шрифтов и пр. 
добавить функционал кнопкам
подключить метамаск
добавить стили и пр. (навести красоту)
не забывать про типизацию и рефакторинг
пытаться интегрировать next.js

**/

import React, {useEffect, useState} from "react"
import Block1 from '../components/blocks/Block1';
import Block2 from '../components/blocks/Block2';
import Block3 from '../components/blocks/Block3';
import Buttons from '../components/Buttons';
import Context from '../components/Context';
import ConnectButton from "../components/ConnectButton";
import Head from "next/head";

const Home = () => {

  const [isConnected, setIsConnected] = useState(false)
  const [isSSR, setIsSSR] = useState(true);
  const [isMM, setIsMM] = useState(false)

  useEffect(() => {
    setIsSSR(false);
    if (window.ethereum) setIsMM(true)
  }, []);

  const [blocks, setBlocks] = useState<Array<[number, Array<string>, Array<React.CSSProperties>]>>(() => {
    if (typeof window !== "undefined") {
      var _blocks
      _blocks = localStorage.getItem("block")
      if (_blocks !== null) return JSON.parse(_blocks)
    } 
    return []
  })

  useEffect(() => {
    localStorage.setItem("block", JSON.stringify(blocks))
  }, [blocks])

  function handleButtonClick(blockSize: number) {
    if (isConnected) switch(blockSize) {
      case 1:
        setBlocks([...blocks, [blocks.length, [""], [{width: `50%`, minWidth: "25%", maxWidth: "100%"}]]])
        break
      case 2:
        setBlocks([...blocks, [blocks.length, ["", ""], [{width: `50%`, minWidth: "25%", maxWidth: "100%"}, {width: `50%`, minWidth: "25%", maxWidth: "100%"}]]])
        break
      case 3:
        setBlocks([...blocks, [blocks.length, ["", "", ""],  [{width: `50%`, minWidth: "25%", maxWidth: "100%"}, {width: `50%`, minWidth: "25%", maxWidth: "100%"}, {width: `50%`, minWidth: "25%", maxWidth: "100%"}]]])
      console.log(blocks)
    }
    else confirm("Connect metamask!")
  }

  const props = {
    "blocks": blocks, "onBlockModify": setBlocks
  }

  if (isMM)return (
    <>
    <Head>
      <style>
        @import url(&apos;https://fonts.googleapis.com/css2?family=Inconsolata:wght@900&amp;display=swap&apos;);
      </style>
    </Head>
    <div className="flex align-center bg-main text-text h-60 flex-col mb-10">
      <div className="text-2xl p-2.5 flex justify-between w-full">
        <h1>Stretchit</h1>
        <Context.Provider value={[isConnected,setIsConnected]}> <ConnectButton/> </Context.Provider>
    </div>
        <h2 className="text-xl text-center my-6">The application for noting and planning via adjustable flexible tiles</h2>
        <h2 className="text-2xl text-center my-6">Create new block with some tiles using buttons below</h2>
    </div>
    
    <div className='flex flex-row w-full h-full'>
      <div className="w-10/12 ml-6">
        { !isSSR && isConnected &&  blocks.map((block) => {
            if (block[1].length === 1) return <Block1 key={block[0]} {...props} blockId={block[0]}/>
            else if (block[1].length === 2) return <Block2 key={block[0]} {...props} blockId={block[0]}/>
            else if (block[1].length === 3) return <Block3 key={block[0]} {...props} blockId={block[0]}/>
          })
        }
      </div>
    <div className='w-2/12 h-full'>
      <Buttons onButtonClick={(blockSize: number) => handleButtonClick(blockSize)}/>
    </div>
    </div>
    </>
  )
  return (
    <div className="w-full h-full flex justify-center align-middle text-4xl">
      <h1 className="">INSTALL METAMASK</h1>
    </div>
    
  )
}

export default Home
