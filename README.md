# Task 4 — Blockchain Practicalities: Ethereum Basics

This repository documents the first part of a university blockchain assignment. It contains an existing Hardhat 3 project, a tested `Counter` smart contract, and its deployment to the public Base Sepolia testnet.

## Part 1 — Install Hardhat

1. Installed Node.js 24 and npm, then created an npm project.
2. Initialized Hardhat 3 using the TypeScript, Node.js Test Runner, and Viem template.
3. Built the Solidity contracts and ran the test suite: **5 tests passed**.
4. Configured the public Base Sepolia testnet in [`hardhat.config.ts`](hardhat.config.ts).
5. Stored the test account's private key in Hardhat Keystore. The configuration references it through `configVariable("SEPOLIA_PRIVATE_KEY")`; no private key is committed to this repository.
6. Deployed `Counter` with the [Hardhat Ignition module](ignition/modules/Counter.ts).

The network is named `sepolia` **in the Hardhat configuration**, but its RPC URL is `https://sepolia.base.org` and its chain ID is **84532**. It connects to **Base Sepolia Testnet**, not Ethereum Sepolia.

### Answer 1 — Contract Deployment Transaction

| Result | Value |
| --- | --- |
| Network | Base Sepolia Testnet (chain ID 84532) |
| Deployment transaction | [View on BaseScan](https://sepolia.basescan.org/tx/0xc173b6ed0abe4984e95ad482ae90aed4bbc1c8d98b20c733aa6948ff16ee69cd) |
| Contract address | `0x58522BBb2a083ee7E5cf9ba1398d7E6bAEd8e656` |
| Status | Success |
| Block | 50125764 |

After deployment, a **separate transaction** successfully called `incBy(5)`: [view the call on BaseScan](https://sepolia.basescan.org/tx/0x5fd827874fbf5e65be4192f19920bf124513f8f2590da0defbff717997d23b0b). This is not the contract-creation transaction.

## Project Structure

| Path | Purpose |
| --- | --- |
| [`contracts/Counter.sol`](contracts/Counter.sol) | `Counter` contract and increment functions |
| [`contracts/Counter.t.sol`](contracts/Counter.t.sol) | Solidity unit tests |
| [`test/Counter.ts`](test/Counter.ts) | TypeScript integration tests using Node.js Test Runner and Viem |
| [`ignition/modules/Counter.ts`](ignition/modules/Counter.ts) | Ignition deployment module |
| [`hardhat.config.ts`](hardhat.config.ts) | Compiler and network configuration |
| [`package.json`](package.json) and [`package-lock.json`](package-lock.json) | Project dependencies and locked versions |

## How to Build and Test

Use Node.js 24 and npm. In PowerShell, from the project directory:

```powershell
npm.cmd ci
npx.cmd hardhat build
npx.cmd hardhat test
```

The build and tests use the local Hardhat installation. Running them does **not** redeploy the contract. To deploy to a public network, an account must be configured separately in Hardhat Keystore and funded with testnet ETH; no credentials are included here.

## Part 2 — Greeter Smart Contract

Not yet completed. No Greeter contract or deployment result is claimed in this repository.
