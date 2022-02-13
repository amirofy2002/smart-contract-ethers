import { Web3Provider } from "@ethersproject/providers";
import { ethers } from "ethers";
import { useState } from "react";
import abi from "./abi.json";

function SimpleStore() {
  const [error, SetError] = useState("");
  const connectWalletHandler = () => {
    console.info("connecintg.");
    let global: any = window;
    if (global.ethereum) {
      global.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((accounts: any) => {
          console.info({ accounts });
          accountConnect(accounts[0]);
        });
    } else {
      SetError("No metamisk!.");
    }
  };
  const [account, setAccount] = useState("");
  const [provider, setProvider] = useState<Web3Provider>();
  const [contract, setContract] = useState<ethers.Contract>();
  const accountConnect = async (account: string) => {
    setAccount(account);
    let provider = new ethers.providers.Web3Provider((window as any).ethereum);
    setProvider(provider);
    let signer = provider.getSigner();
    let contract = new ethers.Contract(
      "0xd9145CCE52D386f254917e481eB44e9943F39138",
      abi,
      signer
    );
    setContract(contract);
  };
  const setHandler = async () => {
    await contract?.set("first message, hello world!");
  };
  const getHandler = async () => {
    let res = await contract?.get();
    console.info({ res });
  };
  return (
    <div className="container">
      <h1>Simple Store</h1>
      <button onClick={connectWalletHandler}> Connect </button>
      <h4> Account:{account} </h4>
      <button onClick={setHandler}> set </button>
      <button onClick={getHandler}> get </button>
      <h3> {error} </h3>
    </div>
  );
}

export default SimpleStore;
