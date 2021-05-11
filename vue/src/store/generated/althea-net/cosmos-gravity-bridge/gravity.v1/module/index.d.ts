import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateCosmosToEth } from "./types/gravity/cosmosToEth";
import { MsgUpdateCosmosToEth } from "./types/gravity/cosmosToEth";
import { MsgDeleteOrchestratorAddress } from "./types/gravity/orchestratorAddress";
import { MsgSendToEth } from "./types/gravity/msgs";
import { MsgRequestBatch } from "./types/gravity/msgs";
import { MsgLogicCallExecutedClaim } from "./types/gravity/msgs";
import { MsgUpdateOrchestratorAddress } from "./types/gravity/orchestratorAddress";
import { MsgConfirmLogicCall } from "./types/gravity/msgs";
import { MsgDeleteCosmosToEth } from "./types/gravity/cosmosToEth";
import { MsgConfirmBatch } from "./types/gravity/msgs";
import { MsgCreateOrchestratorAddress } from "./types/gravity/orchestratorAddress";
import { MsgValsetUpdatedClaim } from "./types/gravity/msgs";
import { MsgWithdrawClaim } from "./types/gravity/msgs";
import { MsgSetOrchestratorAddress } from "./types/gravity/msgs";
import { MsgValsetConfirm } from "./types/gravity/msgs";
import { MsgErc20DeployedClaim } from "./types/gravity/msgs";
import { MsgCancelSendToEth } from "./types/gravity/msgs";
import { MsgDepositClaim } from "./types/gravity/msgs";
interface TxClientOptions {
    addr: string;
}
interface SignAndBroadcastOptions {
    fee: StdFee;
    memo?: string;
}
declare const txClient: (wallet: OfflineSigner, { addr: addr }?: TxClientOptions) => Promise<{
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions) => Promise<import("@cosmjs/stargate").BroadcastTxResponse>;
    msgCreateCosmosToEth: (data: MsgCreateCosmosToEth) => EncodeObject;
    msgUpdateCosmosToEth: (data: MsgUpdateCosmosToEth) => EncodeObject;
    msgDeleteOrchestratorAddress: (data: MsgDeleteOrchestratorAddress) => EncodeObject;
    msgSendToEth: (data: MsgSendToEth) => EncodeObject;
    msgRequestBatch: (data: MsgRequestBatch) => EncodeObject;
    msgLogicCallExecutedClaim: (data: MsgLogicCallExecutedClaim) => EncodeObject;
    msgUpdateOrchestratorAddress: (data: MsgUpdateOrchestratorAddress) => EncodeObject;
    msgConfirmLogicCall: (data: MsgConfirmLogicCall) => EncodeObject;
    msgDeleteCosmosToEth: (data: MsgDeleteCosmosToEth) => EncodeObject;
    msgConfirmBatch: (data: MsgConfirmBatch) => EncodeObject;
    msgCreateOrchestratorAddress: (data: MsgCreateOrchestratorAddress) => EncodeObject;
    msgValsetUpdatedClaim: (data: MsgValsetUpdatedClaim) => EncodeObject;
    msgWithdrawClaim: (data: MsgWithdrawClaim) => EncodeObject;
    msgSetOrchestratorAddress: (data: MsgSetOrchestratorAddress) => EncodeObject;
    msgValsetConfirm: (data: MsgValsetConfirm) => EncodeObject;
    msgErc20DeployedClaim: (data: MsgErc20DeployedClaim) => EncodeObject;
    msgCancelSendToEth: (data: MsgCancelSendToEth) => EncodeObject;
    msgDepositClaim: (data: MsgDepositClaim) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
