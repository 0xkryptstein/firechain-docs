---
sidebar_position: 3
---

# Deploy Contracts

FireChain supports standard EVM smart contract deployment flows.

---

## Requirements

Before deploying:

- Use the correct RPC URL
- Configure Chain ID `917`
- Fund your deployer wallet with FIRE
- Confirm your contract settings and environment variables

---

## Example Hardhat Network Configuration

```js
module.exports = {
  networks: {
    rinia: {
      url: "https://rpc-rinia.firestation.io",
      chainId: 917,
      accounts: ["YOUR_PRIVATE_KEY"]
    }
  }
};
```

## General Deployment Flow

1. Write the contract
2. Compile the contract
3. Configure the FireChain network
4. Deploy from a funded wallet
5. Verify the deployment address
6. Optionally verify the contract on the explorer

## Important

Never expose private keys in public repositories or frontend code.

## Next Step

👉 Continue to [Verify Contracts](./verify-contracts)