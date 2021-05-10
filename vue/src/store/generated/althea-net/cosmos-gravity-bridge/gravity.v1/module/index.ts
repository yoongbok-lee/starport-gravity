// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgDeleteCosmosToEth } from "./types/gravity/cosmosToEth";
import { MsgDeleteOrchestratorAddress } from "./types/gravity/orchestratorAddress";
import { MsgConfirmLogicCall } from "./types/gravity/msgs";
import { MsgLogicCallExecutedClaim } from "./types/gravity/msgs";
import { MsgValsetUpdatedClaim } from "./types/gravity/msgs";
import { MsgValsetConfirm } from "./types/gravity/msgs";
import { MsgCreateCosmosToEth } from "./types/gravity/cosmosToEth";
import { MsgDepositClaim } from "./types/gravity/msgs";
import { MsgConfirmBatch } from "./types/gravity/msgs";
import { MsgErc20DeployedClaim } from "./types/gravity/msgs";
import { MsgCancelSendToEth } from "./types/gravity/msgs";
import { MsgUpdateOrchestratorAddress } from "./types/gravity/orchestratorAddress";
import { MsgSendToEth } from "./types/gravity/msgs";
import { MsgRequestBatch } from "./types/gravity/msgs";
import { MsgUpdateCosmosToEth } from "./types/gravity/cosmosToEth";
import { MsgCreateOrchestratorAddress } from "./types/gravity/orchestratorAddress";
import { MsgSetOrchestratorAddress } from "./types/gravity/msgs";
import { MsgWithdrawClaim } from "./types/gravity/msgs";


const types = [
  ["/gravity.v1.MsgDeleteCosmosToEth", MsgDeleteCosmosToEth],
  ["/gravity.v1.MsgDeleteOrchestratorAddress", MsgDeleteOrchestratorAddress],
  ["/gravity.v1.MsgConfirmLogicCall", MsgConfirmLogicCall],
  ["/gravity.v1.MsgLogicCallExecutedClaim", MsgLogicCallExecutedClaim],
  ["/gravity.v1.MsgValsetUpdatedClaim", MsgValsetUpdatedClaim],
  ["/gravity.v1.MsgValsetConfirm", MsgValsetConfirm],
  ["/gravity.v1.MsgCreateCosmosToEth", MsgCreateCosmosToEth],
  ["/gravity.v1.MsgDepositClaim", MsgDepositClaim],
  ["/gravity.v1.MsgConfirmBatch", MsgConfirmBatch],
  ["/gravity.v1.MsgErc20DeployedClaim", MsgErc20DeployedClaim],
  ["/gravity.v1.MsgCancelSendToEth", MsgCancelSendToEth],
  ["/gravity.v1.MsgUpdateOrchestratorAddress", MsgUpdateOrchestratorAddress],
  ["/gravity.v1.MsgSendToEth", MsgSendToEth],
  ["/gravity.v1.MsgRequestBatch", MsgRequestBatch],
  ["/gravity.v1.MsgUpdateCosmosToEth", MsgUpdateCosmosToEth],
  ["/gravity.v1.MsgCreateOrchestratorAddress", MsgCreateOrchestratorAddress],
  ["/gravity.v1.MsgSetOrchestratorAddress", MsgSetOrchestratorAddress],
  ["/gravity.v1.MsgWithdrawClaim", MsgWithdrawClaim],
  
];

const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw new Error("wallet is required");

  const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee=defaultFee, memo=null }: SignAndBroadcastOptions) => memo?client.signAndBroadcast(address, msgs, fee,memo):client.signAndBroadcast(address, msgs, fee),
    msgDeleteCosmosToEth: (data: MsgDeleteCosmosToEth): EncodeObject => ({ typeUrl: "/gravity.v1.MsgDeleteCosmosToEth", value: data }),
    msgDeleteOrchestratorAddress: (data: MsgDeleteOrchestratorAddress): EncodeObject => ({ typeUrl: "/gravity.v1.MsgDeleteOrchestratorAddress", value: data }),
    msgConfirmLogicCall: (data: MsgConfirmLogicCall): EncodeObject => ({ typeUrl: "/gravity.v1.MsgConfirmLogicCall", value: data }),
    msgLogicCallExecutedClaim: (data: MsgLogicCallExecutedClaim): EncodeObject => ({ typeUrl: "/gravity.v1.MsgLogicCallExecutedClaim", value: data }),
    msgValsetUpdatedClaim: (data: MsgValsetUpdatedClaim): EncodeObject => ({ typeUrl: "/gravity.v1.MsgValsetUpdatedClaim", value: data }),
    msgValsetConfirm: (data: MsgValsetConfirm): EncodeObject => ({ typeUrl: "/gravity.v1.MsgValsetConfirm", value: data }),
    msgCreateCosmosToEth: (data: MsgCreateCosmosToEth): EncodeObject => ({ typeUrl: "/gravity.v1.MsgCreateCosmosToEth", value: data }),
    msgDepositClaim: (data: MsgDepositClaim): EncodeObject => ({ typeUrl: "/gravity.v1.MsgDepositClaim", value: data }),
    msgConfirmBatch: (data: MsgConfirmBatch): EncodeObject => ({ typeUrl: "/gravity.v1.MsgConfirmBatch", value: data }),
    msgErc20DeployedClaim: (data: MsgErc20DeployedClaim): EncodeObject => ({ typeUrl: "/gravity.v1.MsgErc20DeployedClaim", value: data }),
    msgCancelSendToEth: (data: MsgCancelSendToEth): EncodeObject => ({ typeUrl: "/gravity.v1.MsgCancelSendToEth", value: data }),
    msgUpdateOrchestratorAddress: (data: MsgUpdateOrchestratorAddress): EncodeObject => ({ typeUrl: "/gravity.v1.MsgUpdateOrchestratorAddress", value: data }),
    msgSendToEth: (data: MsgSendToEth): EncodeObject => ({ typeUrl: "/gravity.v1.MsgSendToEth", value: data }),
    msgRequestBatch: (data: MsgRequestBatch): EncodeObject => ({ typeUrl: "/gravity.v1.MsgRequestBatch", value: data }),
    msgUpdateCosmosToEth: (data: MsgUpdateCosmosToEth): EncodeObject => ({ typeUrl: "/gravity.v1.MsgUpdateCosmosToEth", value: data }),
    msgCreateOrchestratorAddress: (data: MsgCreateOrchestratorAddress): EncodeObject => ({ typeUrl: "/gravity.v1.MsgCreateOrchestratorAddress", value: data }),
    msgSetOrchestratorAddress: (data: MsgSetOrchestratorAddress): EncodeObject => ({ typeUrl: "/gravity.v1.MsgSetOrchestratorAddress", value: data }),
    msgWithdrawClaim: (data: MsgWithdrawClaim): EncodeObject => ({ typeUrl: "/gravity.v1.MsgWithdrawClaim", value: data }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
