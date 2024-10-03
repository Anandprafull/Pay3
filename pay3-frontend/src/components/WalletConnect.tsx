import { useEffect, useState } from 'react';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import UpiPaymentApp from './UpiPaymentApp';

export default function WalletConnect() {
  const [walletAddress, setWalletAddress] = useState("");

  useEffect(() => {
    const wallet = new PhantomWalletAdapter();
    if (wallet.connected) {
        if(wallet.publicKey!=null) {
            setWalletAddress(wallet.publicKey.toString());
        }
    }
}, []);

const connectWallet = async () => {
    const wallet = new PhantomWalletAdapter();
    await wallet.connect();
    if(wallet.publicKey!=null) {
    setWalletAddress(wallet.publicKey.toString());}
    
  };

  return (
    <div className="wallet-connect">
      <div className="container">
        {!walletAddress ? (
          <button onClick={connectWallet} className="btn btn-primary">
            Connect Wallet
          </button>
        ) : (
          <div>
            <p>Wallet connected: {walletAddress}</p>
            <UpiPaymentApp />
          </div>
        )}
      </div>
    </div>
  );
}
