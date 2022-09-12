export default function useBlockManage(props: blockProps<[number, string[], React.CSSProperties[]][]>, size: number): [(e: React.MouseEvent<HTMLButtonElement>) => void, (e: React.ChangeEvent<HTMLTextAreaElement>, number?: number) => void] {

    const {blocks, blockId, onBlockModify} = props

    function deleteBlock() {
        var mapped = blocks.map((block, index): [number, string[], React.CSSProperties[]] => {
            if (index > blockId) return [block[0] - 1, block[1], block[2]]
            return block
            })
        var newBlocks = mapped
        newBlocks.splice(blockId, 1)
        onBlockModify(newBlocks)
    }

    function textEdit(e: React.ChangeEvent<HTMLTextAreaElement>, number: number = 1) {
        var newInfo = blocks.map<[number, string[], React.CSSProperties[]]>((block, index) => {
            if (index === blockId) {
                switch(size) {
                    case 1:
                        return [blockId, [e.target.value], block[2]]
                    case 2:
                        if (number === 1) return [blockId, [e.target.value, block[1][1]], block[2]]
                        return  [blockId, [block[1][0], e.target.value], block[2]]
                    case 3:
                        if (number === 1) return [blockId, [e.target.value, block[1][1], block[1][2]], block[2]]
                        else if (number === 2) return [blockId, [block[1][0], e.target.value, block[1][2]], block[2]]
                        return [blockId, [block[1][0], block[1][1], e.target.value], block[2]]
                }      
            } 
            return block
        })
        onBlockModify(newInfo)
    }

    return [deleteBlock, textEdit]
}