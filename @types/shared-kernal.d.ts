type TileNote = string;
type BlockLength = number;
type UniqueString = string;
type Percents = number;
interface blockProps<T> {
    blocks: T;
    onBlockModify: React.Dispatch<React.SetStateAction<T>>;
    blockId: number
}
