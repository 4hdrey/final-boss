import { useContext } from "react";
import Context from "./Context";

export default function handleAddClick(
  blockSize: number,
  isConnected: boolean,
  blocks: [number, string[], React.CSSProperties[]][],
  setBlocks: React.Dispatch<
    React.SetStateAction<[number, string[], React.CSSProperties[]][]>
  >
) {
  if (isConnected)
    switch (blockSize) {
      case 1:
        setBlocks([
          ...blocks,
          [
            blocks.length,
            [""],
            [
              {
                width: `50%`,
                minWidth: "25%",
                maxWidth: "100%",
              },
            ],
          ],
        ]);
        break;
      case 2:
        setBlocks([
          ...blocks,
          [
            blocks.length,
            ["", ""],
            [
              {
                width: `50%`,
                minWidth: "25%",
                maxWidth: "100%",
              },
              {
                width: `50%`,
                minWidth: "25%",
                maxWidth: "100%",
              },
            ],
          ],
        ]);
        break;
      case 3:
        setBlocks([
          ...blocks,
          [
            blocks.length,
            ["", "", ""],
            [
              {
                width: `50%`,
                minWidth: "25%",
                maxWidth: "100%",
              },
              {
                width: `50%`,
                minWidth: "25%",
                maxWidth: "100%",
              },
              {
                width: `50%`,
                minWidth: "25%",
                maxWidth: "100%",
              },
            ],
          ],
        ]);
    }
  else confirm("Connect metamask!");
}
