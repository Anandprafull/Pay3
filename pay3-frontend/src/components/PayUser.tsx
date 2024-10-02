import { useState } from 'react';
import { Connection, PublicKey, clusterApiUrl } from '@solana/web3.js';
import { Program, AnchorProvider, web3 } from '@project-serum/anchor';
import { IDL } from './idl';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';

const PayUser = ({ setStatus }: { setStatus: (status: string) => void }) => {
  const [upiId, setUpiId] = useState('');
  const [amount, setAmount] = useState(0);

  const getProvider = async () => {
    const connection = new Connection(clusterApiUrl(WalletAdapterNetwork.Devnet), 'confirmed');
    const provider = new AnchorProvider(connection, window.solana, AnchorProvider.defaultOptions());
    return provider;
  };

  const payUser = async () => {
    try {
      // CODE HERE TO IMPLEMENT FUNTION TO PAY USER 
      setStatus('Payment successful!');
    } catch (error) {
      console.error('Payment error:', error);
      setStatus('Payment failed.');
    }
  };

  return (
    <div>
      <h2>Pay using UPI ID</h2>
      <input
        type="text"
        value={upiId}
        onChange={(e) => setUpiId(e.target.value)}
        placeholder="Enter recipient's UPI ID"
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        placeholder="Enter amount"
      />
      <button onClick={payUser}>Pay</button>
    </div>
  );
};

export default PayUser;
