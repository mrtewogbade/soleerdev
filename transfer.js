
// import { Connection, Transaction, SystemProgram, sendAndConfirmTransaction, PublicKey } from "@solana/web3.js";
// import "dotenv/config";

// import { getKeypairFromEnvironment } from "@solana-developers/helpers";


// const suppliedToPubkey = process.argv[2];

// const isValidPublicKey = (pubKey) => {
//     try {
//         new PublicKey(pubKey);
//         return true;
//     }
//     catch (error) {
//         return false;
//     }
// }

// if (!isValidPublicKey(suppliedToPubkey)) {
//     console.log(`Please provide a public key to send to`);
//     process.exit(1);

// }

// const senderKeypair = getKeypairFromEnvironment("SECRET_KEY");

// console.log(`isValidPublicKey: ${suppliedToPubkey}`);

// const toPubkey = new PublicKey(suppliedToPubkey);
// const connection = new Connection("https://api.devnet.solana.com", "confirmed");

// console.log(`loaded our own keypair, the destination public key, and connected to solana`);

// const transaction = new Transaction();
// const LAMPORTS_TO_SEND = 5000;

// const sendSolInstruction = SystemProgram.transfer({

//     fromPubkey: senderKeypair.publicKey,
//     toPubkey,
//     lamports: LAMPORTS_TO_SEND,
// });

// transaction.add(sendSolInstruction);


// const signature = await sendAndConfirmTransaction(connection, transaction, [senderKeypair,]);

// console.log(`Finished! Sent ${LAMPORTS_TO_SEND} to the address ${toPubkey}.`);
// console.log(`Transaction signature is ${signature}`);

import { Connection, PublicKey, LAMPORTS_PER_SOL} from '@solana/web3.js';
import {wallet} from "./keygen"

const connection = new Connection("https://api.devnet.solana.com", "confirmed");

const transfer = async () => {
    const balance = await connection.getBalance(wallet);
    
}