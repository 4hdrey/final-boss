import React from "react"

const Context = React.createContext<[boolean, React.Dispatch<React.SetStateAction<boolean>>]>(undefined as any)

export default Context