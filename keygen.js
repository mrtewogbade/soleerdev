
import { Keypair } from "@solana/web3.js";

const keypair = Keypair.generate();

export const wallet = keypair.publicKey.toBase58();
export const secretKey = keypair.secretKey;

console.log(`The public key is: `, keypair.publicKey.toBase58());
console.log(`The secret key is: `, keypair.secretKey);