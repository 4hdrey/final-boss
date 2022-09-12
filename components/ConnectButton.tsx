import {useEffect, useState, useContext} from "react"
import {ethers} from "ethers";
import Context from "./Context";

export default function ConnectButton() {

    const [isConnected, setIsConnected] = useContext(Context)

    const [address, setAddress] = useState()

    useEffect(() => {
        if (window.ethereum.selectedAddress) {
            setIsConnected(true)
            setAddress(window.ethereum.selectedAddress)
        } 
    }, [setIsConnected])

    const connectToMetamask = async () => {
        try {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            await provider.send("eth_requestAccounts", []);
            setAddress(window.ethereum.selectedAddress)
            setIsConnected(true)
        }
        catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            {(isConnected) ? <h3>{`${address}`}</h3> : <button onClick={connectToMetamask}>Connect metamask</button>}
        </>
    )
}