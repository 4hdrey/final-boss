type TileNote = string;
type BlockLength = number;
type UniqueString = string;
interface blockProps<T> {
    blocks: T;
    onBlockModify: React.Dispatch<React.SetStateAction<T>>;
    blockId: number
}
