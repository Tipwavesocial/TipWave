# TipWave 🌊

**Decentralized tipping platform on Base.**
*Support creators directly. No middlemen. No cuts. Just vibes.*

[![Build](https://img.shields.io/github/actions/workflow/status/yourorg/tipwave/ci.yml?style=flat-square&color=00ff88)](https://github.com/yourorg/tipwave/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)
[![Built on Base](https://img.shields.io/badge/Built%20on-Base-0052FF?style=flat-square)](https://base.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square)](https://typescriptlang.org)

X [@TipWavegg](https://twitter.com) · [tipwave.xyz](https://tipwave.xyz)

---

TipWave lets anyone tip a creator **instantly on Base** — no platform fees, no KYC, no waiting. Your tip arrives in the creator's wallet in seconds, not days.

- **Zero platform cut** — 100% goes to the creator
- **Any token** — ETH, USDC, or any ERC-20
- **Gasless option** — sponsored transactions via Paymaster
- **On-chain history** — every tip is permanent & verifiable
- **Creator profiles** — link your wallet to a public profile

---

## Why Base?

|                  | TipWave (Base)        | Traditional Platforms   |
| ---------------- | --------------------- | ----------------------- |
| Platform fee     | 0%                    | 5–30%                   |
| Settlement time  | ~2 seconds            | 3–7 business days       |
| Censorship risk  | None                  | High                    |
| Transparency     | Full (on-chain)       | None                    |
| Min tip amount   | ~$0.001               | $1–5 minimum            |

> *Base's low fees make micro-tipping actually viable for the first time.*

---

## Layout

```
packages/
  contracts/    Hardhat: TipWave core, Paymaster integration
  sdk/          TypeScript: tip, profile, history utilities
apps/
  web/          Next.js UI (tip page, creator dashboard, explore)
infra/
  deploy/       Deployment scripts for Base Sepolia & Mainnet
docs/
  architecture.md     System design & contract overview
  contributing.md     How to contribute
scripts/
  demo-tip.mjs        Send a test tip on local node
```

---

## Quick Start

```bash
pnpm install
pnpm setup       # compile contracts + deploy local
pnpm dev         # start local chain + web app
```

Send a test tip:
```bash
node scripts/demo-tip.mjs
```

Run all tests:
```bash
pnpm --filter @tipwave/contracts test    # contract tests
pnpm --filter @tipwave/sdk test          # SDK tests
pnpm --filter @tipwave/web test          # UI tests
```

Deploy to Base Sepolia:
```bash
cp .env.example .env   # fill in your keys
pnpm deploy:sepolia
```

---

## How It Works

1. **Creator** connects wallet → gets a shareable tip link (`tipwave.xyz/0x...`)
2. **Fan** visits the link → picks amount & token → signs tx
3. **Smart contract** routes tip directly to creator wallet
4. **Both** get an on-chain receipt — permanent, verifiable, censorship-resistant

---

## Tech Stack

| Layer      | Technology                          |
| ---------- | ----------------------------------- |
| Chain      | Base (OP Stack)                     |
| Contracts  | Solidity + Hardhat                  |
| SDK        | TypeScript + viem                   |
| Frontend   | Next.js 14 + Tailwind CSS           |
| Wallet     | RainbowKit + wagmi                  |
| Gasless    | Base Paymaster (ERC-4337)           |
| Testing    | Vitest + Hardhat Network            |

---

## Roadmap

- [x] Core tip contract (ETH + ERC-20)
- [x] Creator profile registry
- [ ] Gasless tips via Paymaster
- [ ] Subscription / recurring tips
- [ ] NFT reward for top supporters
- [ ] Leaderboard & social discovery
- [ ] Mobile app (React Native)

---

## Security

> ⚠️ Contracts are unaudited. Do not use with significant funds until a third-party audit is complete. See [SECURITY.md](SECURITY.md).

---

## Contributing

PRs welcome! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

---

## License

MIT © TipWave Contributors
