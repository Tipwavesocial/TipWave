import { createPublicClient, createWalletClient, http, parseEther } from "viem";
import { base, baseSepolia } from "viem/chains";
import TipWaveABI from "../contracts/abi/TipWave.json";

const CONTRACT = {
  mainnet:  "0x000...mainnet",  // fill after deploy
  sepolia:  "0x000...sepolia",  // fill after deploy
};

export type TipOptions = {
  creator: `0x${string}`;
  amountEth: string;
  message?: string;
  testnet?: boolean;
};

/// Send an ETH tip to a creator
export async function sendTip(opts: TipOptions) {
  const chain   = opts.testnet ? baseSepolia : base;
  const address = opts.testnet ? CONTRACT.sepolia : CONTRACT.mainnet;

  const client = createWalletClient({ chain, transport: http() });

  const hash = await client.writeContract({
    address: address as `0x${string}`,
    abi: TipWaveABI,
    functionName: "tipETH",
    args: [opts.creator, opts.message ?? ""],
    value: parseEther(opts.amountEth),
  });

  return hash;
}

/// Get tip history for a creator
export async function getTipHistory(creator: `0x${string}`, testnet = false) {
  const chain  = testnet ? baseSepolia : base;
  const client = createPublicClient({ chain, transport: http() });

  const logs = await client.getContractEvents({
    address: (testnet ? CONTRACT.sepolia : CONTRACT.mainnet) as `0x${string}`,
    abi: TipWaveABI,
    eventName: "TipSent",
    args: { to: creator },
    fromBlock: 0n,
  });

  return logs;
}
