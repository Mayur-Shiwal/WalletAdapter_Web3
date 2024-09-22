import React, { FC, useMemo} from 'react'
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react"
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base"
import { UnsafeBurnerWalletAdapter } from "@solana/wallet-adapter-wallets"
import {
  WalletConnectButton,
  WalletDisconnectButton,
  WalletModalProvider,
  WalletMultiButton
} from "@solana/wallet-adapter-react-ui"
import {clusterApiUrl} from '@solana/web3.js'
import { Airdrop } from './Airdrop'
import '@solana/wallet-adapter-react-ui/styles.css'
import { SendToken } from './SendToken'

function App() {

  return (
    <>
    <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/zMBBCpJckig0qDw7HamVytCI39cgiDLU"}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <div>
            <WalletMultiButton/>
            <WalletDisconnectButton/>
            <SendToken></SendToken>
          </div>
          <Airdrop></Airdrop>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
    </>
  )
}

export default App
