# PumpFun Bundler with 20 wallets
Pump.fun bundler that launches token using pumpfun api and buy in the same block with 20 wallets using jito bundle technique.
The most important part in here is how to configure LUT(Lookup Table Address) and make a transaction using that address.

# 👋 Contact Me

### 
Discord: earthzeta             
Telegram: magiceden7
###
<div style={{display : flex ; justify-content : space-evenly}}> 
    <a href="https://discordapp.com/users/339619501081362432" target="_blank"><img alt="Discord"
        src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white"/></a>
    <a href="https://t.me/magiceden7" target="_blank"><img alt="Telegram"
        src="https://img.shields.io/badge/Telegram-26A5E4?style=for-the-badge&logo=telegram&logoColor=white"/></a>
</div>


#### Feel free to contact me if you need any help.

# Overview

### Check by video

https://github.com/user-attachments/assets/f41cf67e-b09f-457a-a7ec-b0fd8092c6a8

https://github.com/user-attachments/assets/7a35b5d1-7f53-488f-9f4f-340e2d6980b3

### PumpDotFunSDK Class

The `PumpDotFunSDK` class provides methods to interact with the PumpFun protocol. Below are the method signatures and their descriptions.


#### createAndBuy

```typescript
async createAndBuy(
  creator: Keypair,
  mint: Keypair,
  createTokenMetadata: CreateTokenMetadata,
  buyAmountSol: bigint,
  slippageBasisPoints: bigint = 500n,
  priorityFees?: PriorityFee,
  commitment: Commitment = DEFAULT_COMMITMENT,
  finality: Finality = DEFAULT_FINALITY
): Promise<TransactionResult>
```

- Creates a new token and buys it.
- **Parameters**:
  - `creator`: The keypair of the token creator.
  - `mint`: The keypair of the mint account.
  - `createTokenMetadata`: Metadata for the token.
  - `buyAmountSol`: Amount of SOL to buy.
  - `slippageBasisPoints`: Slippage in basis points (default: 500).
  - `priorityFees`: Priority fees (optional).
  - `commitment`: Commitment level (default: DEFAULT_COMMITMENT).
  - `finality`: Finality level (default: DEFAULT_FINALITY).
- **Returns**: A promise that resolves to a `TransactionResult`.

## Contributing
We welcome contributions! Please submit a pull request or open an issue to discuss any changes.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

If you want a new feature or if you want to increase number of wallet that bundle buy plz contact me.
