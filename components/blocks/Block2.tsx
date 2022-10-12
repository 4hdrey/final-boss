import { useRef, useEffect } from "react";
import useResize from "./useResize";
import useBlockManage from "./useBlockManage";

export default function Block2(
  props: blockProps<[number, string[], React.CSSProperties[]][]>
) {
  const { blocks, blockId, onBlockModify } = props;

  //references
  const leftElem = useRef<HTMLTextAreaElement>(null);
  const leftElemParent = useRef<HTMLDivElement>(null);
  const resizeRef1 = useRef<HTMLDivElement>(null);
  const resizeRef2 = useRef<HTMLDivElement>(null);

  useResize(leftElem, resizeRef1, blocks, blockId, onBlockModify, 0);
  useResize(leftElemParent, resizeRef2, blocks, blockId, onBlockModify, 1);

  const [handleDeleteBlock, handleTextEdit] = useBlockManage(props, 2);

  return (
    <div className="w-full h-52 flex flex-row my-2 text-text">
      <div
        className="flex flex-row w-96 h-52"
        ref={leftElemParent}
        style={blocks[blockId][2][1]}>
        <textarea
          className="h-full overflow-scroll p-4 block resize-none bg-main rounded-l-md focus:outline-none focus:shadow-md "
          style={blocks[blockId][2][0]}
          ref={leftElem}
          value={blocks[blockId][1][0]}
          onChange={(e) => handleTextEdit(e, 1)}></textarea>
        <div className="w-1 hover:cursor-col-resize flex" ref={resizeRef1}>
          <div className="h-3 w-1/2 relative top-24 right-1 bg-text"></div>
          <div className="h-3 w-1/2 relative top-24 -right-1 bg-text"></div>
        </div>
        <textarea
          className="h-full w-full flex-1 overflow-scroll p-4 block resize-none bg-main rounded-r-xl focus:outline-none focus:shadow-md "
          value={blocks[blockId][1][1]}
          onChange={(e) => handleTextEdit(e, 2)}></textarea>
      </div>
      <div className="w-1 hover:cursor-col-resize relative" ref={resizeRef2}>
        <button
          className="w-2 h-2 bg-red-600 absolute top-0 right-3 m-1"
          onClick={handleDeleteBlock}>
          X
        </button>
        <div className="h-3 w-1/2 relative top-24 right-2 bg-text"></div>
      </div>
    </div>
  );
}
