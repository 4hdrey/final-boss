import { ethers } from "ethers";

const defaultProvider = new ethers.providers.AlchemyProvider("goerli", process.env.ALCHEMY_API_KEY);

export default defaultProvider;
