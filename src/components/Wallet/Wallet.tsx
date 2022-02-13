import "./Wallet.scss";
import { ethers } from "ethers";
import { useState } from "react";
function Wallet() {
  const onCreateWallet = () => {
    let wallet = ethers.Wallet.createRandom();
    let privateKey = wallet.privateKey;
    let address = wallet.address;

    console.log({ privateKey, address, phrase: wallet.mnemonic.phrase });
    setWalletAddress(address);
    setPrivateKey(privateKey);
    setPheases(wallet.mnemonic.phrase);
  };
  const [walletAddr, setWalletAddress] = useState<string>();
  const [privateKey, setPrivateKey] = useState<string>();
  const [phrases, setPheases] = useState<string>();
  return (
    <div className="wallet-container">
      {walletAddr && (
        <>
          <p className="addr">
            {" "}
            Addr: <span>{walletAddr} </span>
          </p>
          <p className="phrases"> {phrases} </p>
        </>
      )}
      <hr />
      <button onClick={onCreateWallet}> Create A Wallet </button>
    </div>
  );
}

export default Wallet;
