[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/bertux/arthera-squid-usdc)

# Squid example for ABI usage on Arthera: network-wide capture of Mint(address,address,uint256)

This squid captures all `Mint(address,address,uint256)` events on Arthera and scrapes the transactions that caused mints, noting the amount of gas spent on each of them. One contract that emits these events is the [USDC token contract](https://explorer.arthera.net/token/0x8C4aCd74Ff4385f3B7911432FA6787Aa14406f8B?tab=contract); its ABI is used to make a Typescript wrapper that supplies a topic0 constant and an event data decoder.

See more examples of requesting data with squids on the [showcase page](https://docs.subsquid.io/evm-indexing/configuration/showcase) of Subsquid documentation.

Dependencies: Node.js, Docker.

## Quickstart

```bash
# 0. Install @subsquid/cli a.k.a. the sqd command globally
npm i -g @subsquid/cli

# 1. Retrieve the template
sqd init arthera-squid-usdc -t https://github.com/bertux/arthera-squid-usdc
cd arthera-squid-usdc

# 2. Install dependencies
npm ci

# 3. Start a Postgres database container and detach
sqd up

# 4. Build and start the processor
sqd process

# 5. The command above will block the terminal
#    being busy with fetching the chain data, 
#    transforming and storing it in the target database.
#
#    To start the graphql server open the separate terminal
#    and run
sqd serve
```
A GraphiQL playground will be available at [localhost:4350/graphql](http://localhost:4350/graphql).
