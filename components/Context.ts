import React from "react";
import { ethers } from "ethers";

const Context = React.createContext<
  [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>,
    [number, string[], React.CSSProperties[]][],
    React.Dispatch<
      React.SetStateAction<[number, string[], React.CSSProperties[]][]>
    >
  ]
>(undefined as any);

export default Context;
