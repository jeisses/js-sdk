import { PublicKey } from "@solana/web3.js";

import { Cluster, LocalCluster } from "./types";

export const TX_FINALITY_CONFIRMED = "confirmed";

export const STREAM_STRUCT_OFFSET_SENDER = 49;
export const STREAM_STRUCT_OFFSET_RECIPIENT = 113;

export const PROGRAM_ID = {
  [Cluster.Devnet]: "HqDGZjaVRXJ9MGRQEw7qDc2rAr6iH1n1kAQdCZaCMfMZ",
  [Cluster.Mainnet]: "strmRqUCoQUgGUan5YhzUZa6KqdzwX5L6FpUxfmKg5m",
  [Cluster.Testnet]: "HqDGZjaVRXJ9MGRQEw7qDc2rAr6iH1n1kAQdCZaCMfMZ",
  [LocalCluster.Local]: "HqDGZjaVRXJ9MGRQEw7qDc2rAr6iH1n1kAQdCZaCMfMZ",
};

export const STREAMFLOW_PROGRAM_ID =
  "strmRqUCoQUgGUan5YhzUZa6KqdzwX5L6FpUxfmKg5m";

export const STREAMFLOW_DEVNET_PROGRAM_ID =
  "FGjLaVo5zLGdzCxMo9gu9tXr1kzTToKd8C8K7YS5hNM1";

export const STREAMFLOW_TREASURY_PUBLIC_KEY = new PublicKey(
  "5SEpbdjFK5FxwTvfsGMXVQTD2v4M2c5tyRTxhdsPkgDw"
);

export const WITHDRAWOR_PUBLIC_KEY = new PublicKey(
  "wdrwhnCv4pzW8beKsbPa4S2UDZrXenjg16KJdKSpb5u"
);

export const FEE_ORACLE_PUBLIC_KEY = new PublicKey(
  "B743wFVk2pCYhV91cn287e1xY7f1vt4gdY48hhNiuQmT"
);

export const AIRDROP_TEST_TOKEN =
  "Gssm3vfi8s65R31SBdmQRq6cKeYojGgup7whkw4VCiQj";

export const AIRDROP_AMOUNT = 1; // 1 SOL is the cap on the testnet

export const BASE_FEE = 1002500; // Basic buffer for intermediary swaps
