import "./Wallet.scss";
import { BigNumber, ethers } from "ethers";
import { useState } from "react";
import store from "../../redux/stores";
import { create, currentWallet } from "../../redux/reducers/basic";
import { useDispatch, useSelector } from "react-redux";
function Wallet() {
  const dispatch = useDispatch();

  const onCreateWallet = () => {
    let wallet = ethers.Wallet.createRandom();
    let privateKey = wallet.privateKey;
    let address = wallet.address;

    console.log({ privateKey, address, phrase: wallet.mnemonic.phrase });
    setWalletAddress(address);
    setPrivateKey(privateKey);
    setPheases(wallet.mnemonic.phrase);
    dispatch(
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

  const onWalletConnect = async () => {
    let wlt = ethers.Wallet.fromMnemonic(wallet!.mnemonic);
    //let provider = new ethers.providers.Web3Provider((window as any).ethereum);
    // let provider = new ethers.providers.JsonRpcProvider(
    //   "http://localhost:8545"
    // );
    let provider = ethers.getDefaultProvider("ropsten");

    const network = await provider.getNetwork();
    const chainId = network.chainId;
    console.info({ network, chainId });

    // provider.listAccounts().then((accounts: string[]) => {
    //   console.log({ accounts });
    // });

    let w = wlt.connect(provider);

    let addr = await w.getAddress();
    console.info({ addr });
    w.getBalance().then((balance: BigNumber) => {
      let etherString = ethers.utils.formatEther(balance);

      console.info({ balance: etherString });
    });
  };
  const [memo, setMemo] = useState("");
  const onRetreive = async () => {
    let wlt = ethers.Wallet.fromMnemonic(memo, `m/44'/60'/0'/0/1`);
    wlt = wlt.connect(ethers.getDefaultProvider("ropsten"));
    let address = await wlt.getAddress();
    console.info({ address });
    wlt.getBalance().then((balance: BigNumber) => {
      let etherString = ethers.utils.formatEther(balance);

      console.info({ balance: etherString });
    });
    console.info({ wlt: wlt.address });
    dispatch(
      create({
        address,
        mnemonic: memo,
        privateKey: wlt.privateKey,
      })
    );
  };
  return (
    <div key={walletAddr || ""} className="wallet-container">
      {wallet != null && (
        <>
          <p className="addr">
            {" "}
            Addr: <span>{wallet?.address} </span>
          </p>
          <p className="phrases"> {wallet?.mnemonic} </p>
        </>
      )}
      <hr />
      {!wallet && (
        <>
          <button onClick={onCreateWallet}> Create A Wallet </button>

          <hr />
        </>
      )}
      <input
        placeholder="private key"
        onChange={(ev) => setMemo(ev.target.value)}
      />
      <button onClick={onRetreive}> Retreive </button>
      <hr />
      <button onClick={onWalletConnect}> Conenct </button>
    </div>
  );
}

export default Wallet;
