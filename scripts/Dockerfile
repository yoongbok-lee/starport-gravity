FROM node

WORKDIR /orch
COPY . .

USER root
RUN wget https://github.com/yoongbok-lee/starport-gravity/releases/download/v0.0.0/orchestrator

WORKDIR /orch/cosmos-gravity-bridge/solidity
RUN npm install --save-dev ts-node typescript
RUN npm install --save-dev chai @types/node @types/mocha @types/chai
RUN npm install --save-dev hardhat-waffle ethereum-waffle chai hardhat-ethers ethers typechain typechain-target-ethers-v5
RUN npm install --save-dev hardhat
RUN wget https://github.com/yoongbok-lee/starport-gravity/releases/download/v0.0.0/gravity -P /usr/bin/
RUN chmod +x /usr/bin/gravity

WORKDIR /orch
