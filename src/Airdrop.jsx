import { useConnection, useWallet } from "@solana/wallet-adapter-react"

export function Airdrop(){
    const wallet = useWallet();
    const {connection} = useConnection();
    async function sendAirdropToUser(){
        const currAmount = document.getElementById("amount").value;
        await connection.requestAirdrop(wallet.publicKey, currAmount * 1000000000)
        alert("Successfully airdroped sol")
    }
    return <div>
        {/* Hi {wallet.publicKey.toString()} <br /> */}
        <input id="amount" type="text" placeholder="Enter a amount" />
        <button onClick={sendAirdropToUser}>Send Airdrop</button>
    </div>
}