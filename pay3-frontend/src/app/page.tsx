'use client'

import WalletConnect from '../components/WalletConnect';

export default function Home() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold">Pay3 - Web3 UPI Integration</h1>
      <WalletConnect />
    </div>
  );
}

