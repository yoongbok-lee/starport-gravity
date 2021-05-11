 - install starport.
 ```
 curl https://get.starport.network/starport! | bash
 ```
 - download `orchestrator` and `client` binaries from the releases.
 - go into scripts/cosmos-gravity-bridge/solidity and setup hardhat as follows:
 ```
   - npm init
   - npm install --save-dev ts-node typescript
   - npm install --save-dev chai @types/node @types/mocha @types/chai
   - npm install --save-dev hardhat-waffle ethereum-waffle chai hardhat-ethers ethers typechain typechain-target-ethers-v5
   - npm install --save-dev hardhat
   - npx hardhat
 ```
 - start gravity process through starport with `starport serve --force-reset` in the root directory.
 - you might need to copy `gravityd` to `gravity` under `$PATH`. ex) `whereis gravityd` -> `cp gravityd <new_location>`
 - install and start a `geth` process (light sync mode recommended).
 - navigate to `scripts/`
 - in `setup-orch.sh`, modify the `cosphr` variable to what's shown as `alice`'s private mnemonics.
 - run `setup.orch.sh`. Occasionally the orchestrator might lag a bit and not produce a erc20 representation of the cosmos native token. Just re-run the last command `orchestrator deploy-erc20-representation...`
 - in the frontend `localhost:8080/types` you can create some cosmos->eth txs.
 - run `client build-batch` from alice to confirm batch transaction on ethereum. Or, you can refer to `client cosmos-to-eth` command to make txs on the CLI.
   - Note: make sure you're using `stake` or `mstake` while transferring, and `Amount` and `Fee` field have to have same denominations. `1234stake` and `12stake`. 
 - run `client eth-to-cosmos` to send some tokens back to cosmos. Any ERC20 tokens can be transferred.
 - see the txs go through.
