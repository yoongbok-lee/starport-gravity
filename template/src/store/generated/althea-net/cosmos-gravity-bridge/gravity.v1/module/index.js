// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateOrchestratorAddress } from "./types/gravity/orchestratorAddress";
import { MsgWithdrawClaim } from "./types/gravity/msgs";
import { MsgValsetConfirm } from "./types/gravity/msgs";
import { MsgConfirmLogicCall } from "./types/gravity/msgs";
import { MsgCreateCosmosToEth } from "./types/gravity/cosmosToEth";
import { MsgValsetUpdatedClaim } from "./types/gravity/msgs";
import { MsgDeleteCosmosToEth } from "./types/gravity/cosmosToEth";
import { MsgSetOrchestratorAddress } from "./types/gravity/msgs";
import { MsgConfirmBatch } from "./types/gravity/msgs";
import { MsgUpdateCosmosToEth } from "./types/gravity/cosmosToEth";
import { MsgUpdateOrchestratorAddress } from "./types/gravity/orchestratorAddress";
import { MsgLogicCallExecutedClaim } from "./types/gravity/msgs";
import { MsgDeleteOrchestratorAddress } from "./types/gravity/orchestratorAddress";
import { MsgSendToEth } from "./types/gravity/msgs";
import { MsgErc20DeployedClaim } from "./types/gravity/msgs";
import { MsgCancelSendToEth } from "./types/gravity/msgs";
import { MsgRequestBatch } from "./types/gravity/msgs";
import { MsgDepositClaim } from "./types/gravity/msgs";
const types = [
    ["/gravity.v1.MsgCreateOrchestratorAddress", MsgCreateOrchestratorAddress],
    ["/gravity.v1.MsgWithdrawClaim", MsgWithdrawClaim],
    ["/gravity.v1.MsgValsetConfirm", MsgValsetConfirm],
    ["/gravity.v1.MsgConfirmLogicCall", MsgConfirmLogicCall],
    ["/gravity.v1.MsgCreateCosmosToEth", MsgCreateCosmosToEth],
    ["/gravity.v1.MsgValsetUpdatedClaim", MsgValsetUpdatedClaim],
    ["/gravity.v1.MsgDeleteCosmosToEth", MsgDeleteCosmosToEth],
    ["/gravity.v1.MsgSetOrchestratorAddress", MsgSetOrchestratorAddress],
    ["/gravity.v1.MsgConfirmBatch", MsgConfirmBatch],
    ["/gravity.v1.MsgUpdateCosmosToEth", MsgUpdateCosmosToEth],
    ["/gravity.v1.MsgUpdateOrchestratorAddress", MsgUpdateOrchestratorAddress],
    ["/gravity.v1.MsgLogicCallExecutedClaim", MsgLogicCallExecutedClaim],
    ["/gravity.v1.MsgDeleteOrchestratorAddress", MsgDeleteOrchestratorAddress],
    ["/gravity.v1.MsgSendToEth", MsgSendToEth],
    ["/gravity.v1.MsgErc20DeployedClaim", MsgErc20DeployedClaim],
    ["/gravity.v1.MsgCancelSendToEth", MsgCancelSendToEth],
    ["/gravity.v1.MsgRequestBatch", MsgRequestBatch],
    ["/gravity.v1.MsgDepositClaim", MsgDepositClaim],
];
const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw new Error("wallet is required");
    const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee = defaultFee, memo = null }) => memo ? client.signAndBroadcast(address, msgs, fee, memo) : client.signAndBroadcast(address, msgs, fee),
        msgCreateOrchestratorAddress: (data) => ({ typeUrl: "/gravity.v1.MsgCreateOrchestratorAddress", value: data }),
        msgWithdrawClaim: (data) => ({ typeUrl: "/gravity.v1.MsgWithdrawClaim", value: data }),
        msgValsetConfirm: (data) => ({ typeUrl: "/gravity.v1.MsgValsetConfirm", value: data }),
        msgConfirmLogicCall: (data) => ({ typeUrl: "/gravity.v1.MsgConfirmLogicCall", value: data }),
        msgCreateCosmosToEth: (data) => ({ typeUrl: "/gravity.v1.MsgCreateCosmosToEth", value: data }),
        msgValsetUpdatedClaim: (data) => ({ typeUrl: "/gravity.v1.MsgValsetUpdatedClaim", value: data }),
        msgDeleteCosmosToEth: (data) => ({ typeUrl: "/gravity.v1.MsgDeleteCosmosToEth", value: data }),
        msgSetOrchestratorAddress: (data) => ({ typeUrl: "/gravity.v1.MsgSetOrchestratorAddress", value: data }),
        msgConfirmBatch: (data) => ({ typeUrl: "/gravity.v1.MsgConfirmBatch", value: data }),
        msgUpdateCosmosToEth: (data) => ({ typeUrl: "/gravity.v1.MsgUpdateCosmosToEth", value: data }),
        msgUpdateOrchestratorAddress: (data) => ({ typeUrl: "/gravity.v1.MsgUpdateOrchestratorAddress", value: data }),
        msgLogicCallExecutedClaim: (data) => ({ typeUrl: "/gravity.v1.MsgLogicCallExecutedClaim", value: data }),
        msgDeleteOrchestratorAddress: (data) => ({ typeUrl: "/gravity.v1.MsgDeleteOrchestratorAddress", value: data }),
        msgSendToEth: (data) => ({ typeUrl: "/gravity.v1.MsgSendToEth", value: data }),
        msgErc20DeployedClaim: (data) => ({ typeUrl: "/gravity.v1.MsgErc20DeployedClaim", value: data }),
        msgCancelSendToEth: (data) => ({ typeUrl: "/gravity.v1.MsgCancelSendToEth", value: data }),
        msgRequestBatch: (data) => ({ typeUrl: "/gravity.v1.MsgRequestBatch", value: data }),
        msgDepositClaim: (data) => ({ typeUrl: "/gravity.v1.MsgDepositClaim", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
