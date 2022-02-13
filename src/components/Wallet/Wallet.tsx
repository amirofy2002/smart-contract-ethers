import "./Wallet.scss";
import { ethers } from "ethers";
import { useState } from "react";
import store from "../../redux/stores";
import { create, currentWallet } from "../../redux/reducers/basic";
import { useSelector } from "react-redux";
function Wallet() {
  const onCreateWallet = () => {
    let wallet = ethers.Wallet.createRandom();
    let privateKey = wallet.privateKey;
    let address = wallet.address;

    console.log({ privateKey, address, phrase: wallet.mnemonic.phrase });
    setWalletAddress(address);
    setPrivateKey(privateKey);
    setPheases(wallet.mnemonic.phrase);
    store.dispatch(
      create({
        address,
        mnemonic: wallet.mnemonic.phrase,
        privateKey,
      })
    );
  };
  const [walletAddr, setWalletAddress] = useState<string>();
  const [privateKey, setPrivateKey] = useState<string>();
  const [phrases, setPheases] = useState<string>();
  const wallet = useSelector(currentWallet);
  return (
    <div className="wallet-container">
      {walletAddr && (
        <>
          <p className="addr">
            {" "}
            Addr: <span>{wallet?.address} </span>
          </p>
          <p className="phrases"> {wallet?.mnemonic} </p>
        </>
      )}
      <hr />
      {!wallet && <button onClick={onCreateWallet}> Create A Wallet </button>}
    </div>
  );
}

export default Wallet;
