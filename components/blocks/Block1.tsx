import {useEffect, useRef} from "react"
import useResize from "./useResize"
import useBlockManage from "./useBlockManage"

export default function Block1(props: blockProps<[number, string[], React.CSSProperties[]][]>) {

  const {blocks, blockId, onBlockModify} = props

  //references
  const leftElem = useRef<HTMLTextAreaElement>(null)
  const resizeRef = useRef<HTMLDivElement>(null)

  useResize(leftElem, resizeRef, blocks, blockId, onBlockModify, 0)


  const [handleDeleteBlock, handleTextEdit] = useBlockManage(props, 1)

  return (
        <div className="h-52 flex flex-row border-none text-text">
            <textarea className="h-full overflow-scroll p-4 block resize-none rounded-r-xl rounded-l-md bg-main focus:outline-none focus:bg-focus"  
                      style={blocks[blockId][2][0]} 
                      ref={leftElem}
                      value={blocks[blockId][1][0]}
                      onChange={(e) => handleTextEdit(e)}
            ></textarea>
            <div className="w-1 hover:cursor-col-resize bg-black relative flex" 
                 ref={resizeRef}>
              <button className="w-2 h-2 absolute top-0 right-3 m-1"
                      onClick={handleDeleteBlock}
              >X</button>
              <div className="h-3 w-1/2 relative top-24 right-2 bg-text"></div>
            </div>
             
        </div>
  )
}

