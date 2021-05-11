set -e
set -x

curdir=$(pwd)
denom=stake
mdenom=mstake
ethpriv='70c725dfd774102a0b453cad77b0ad43b4f9d2bf428dd78cb7b4819e1f2a1ac2'
#cosphr='tribe concert jungle next slab odor mixed doll struggle crouch flush post rack pen taxi pitch first poem anxiety sea dilemma blanket virus february'
cosphr='alter hurt student abuse call south convince brisk tooth rare labor young duck never govern raw luxury west regular win board jaguar outer argue'
cospre='cosmos'

gravity tx gravity set-orchestrator-address $(gravity keys show alice -a --bech=val --keyring-backend test) $(gravity keys show alice -a --keyring-backend test) 0xF8F79be5D59c58CAf09560D94e6943d231852706 --gas auto -y -b block --from alice --keyring-backend test --chain-id gravity --gas-adjustment 2.0
# sudo apt-get update
# rm -rf gravity-bridge

# git clone https://github.com/cosmos/gravity-bridge
cd cosmos-gravity-bridge/solidity
# curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
# . ~/.nvm/nvm.sh
# nvm install node
# sudo apt install cargo -y
# npm install
npm run typechain
cont=$(npx ts-node \
	contract-deployer.ts \
	--cosmos-node="http://localhost:26657" \
	--eth-node="http://localhost:8545" \
	--eth-privkey=$ethpriv \
	--contract=artifacts/contracts/Gravity.sol/Gravity.json | grep "Gravity deployed" | cut -b 32-)

# cd ../orchestrator
# cargo build
# mv target/debug/orchestrator /home/ubuntu/downloads/

export RUST_LOG=INFO
echo "$curdir/orchestrator     --cosmos-phrase=\"$cosphr\"     --ethereum-key=\"$ethpriv\"    --cosmos-grpc='http://localhost:9090'     --ethereum-rpc='http://localhost:8545'     --fees=$denom     --contract-address=$cont --address-prefix=$cospre &" | bash - > "$curdir"/orchestrator.log 2>&1

sleep 30
$curdir/client deploy-erc20-representation --cosmos-grpc=http://localhost:9090 --cosmos-prefix=$cospre --ethereum-key=$ethpriv --ethereum-rpc=http://localhost:8545 --contract-address=$cont --erc20-name=$mdenom --erc20-symbol=$mdenom --erc20-decimals=6 --cosmos-denom=$denom

set +x
erc20=$($curdir/client cosmos-to-eth --cosmos-phrase="$cosphr" --cosmos-grpc='http://localhost:9090' --cosmos-prefix=$cospre --cosmos-denom=$denom --amount='1234' --eth-destination='0x953e5e23FB95C753a27d335a8edbE9C75b6c0361' --times=1 | grep 'Asset stake has' | cut -b38-)

echo 'contract addr: '$cont
echo 'native token erc20 addr: '$erc20
echo 'cosmos mnemonics: '$cosphr
echo 'eth priv key: '$ethpriv
