import React, {useEffect, useState} from "react"

export default function useResize(refLeft: React.RefObject<Element> | React.RefObject<HTMLDivElement>, 
                                refResize: React.RefObject<HTMLDivElement>,
                                blocks: [number, string[], React.CSSProperties[]][],
                                blockId: number,
                                onBlockModify: React.Dispatch<React.SetStateAction<[number, string[], React.CSSProperties[]][]>>, 
                                size: number): void
{
    const [leftWidth, setLeftWidth] = useState<number>(0)
    const [newLeftWidth, setNewLeftWidth] = useState(blocks[blockId][2][size].width)
    const [style, setStyle] = useState<React.CSSProperties>(blocks[blockId][2][size])
    const [x, setX] = useState(0)

    useEffect(() => {
        var newSize = blocks.map<[number, string[], React.CSSProperties[]]>((block, index) => {
          var blockSize = block[1].length
          if (index === blockId) {
            switch (blockSize) {
                case 1: 
                    return [block[0], block[1], [style]]
                case 2:
                    if (size === 0) return [block[0], block[1], [style, block[2][1]]]
                    return  [block[0], block[1], [block[2][0], style]]
                case 3:
                    if (size === 0) return  [block[0], block[1], [style, block[2][1], block[2][2]]]
                    else if (size === 1) return  [block[0], block[1], [block[2][0], style, block[2][2]]]
                    return  [block[0], block[1], [block[2][0], block[2][1], style]]
            }
          }
          return block
        })
        onBlockModify(newSize)
      }, [style, onBlockModify]) 

    useEffect(() => {
    setStyle({
        width: `${newLeftWidth}`,
        maxWidth: "100%",
        minWidth: "25%"
    } ) 
    }, [newLeftWidth])


    function breakResize() {
        document.removeEventListener('mousemove', handleResize);
        document.removeEventListener('mouseup', breakResize);
    }

    function handleResize(event: MouseEvent) {
        const dx = event.clientX - x;
        var newWidth = (leftWidth + dx) * 100 / refLeft.current!.parentElement!.getBoundingClientRect().width
        setNewLeftWidth(`${newWidth}%`)
    }

    function handleMouseDown(event: MouseEvent) {
        setX(event.clientX)
        setLeftWidth(refLeft.current!.getBoundingClientRect().width)
        document.addEventListener('mousemove', handleResize);
        document.addEventListener('mouseup', breakResize);
    }

    if (refLeft.current !== null && refResize.current !== null) refResize.current!.addEventListener("mousedown", handleMouseDown)

}