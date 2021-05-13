import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgConfirmBatch } from "./types/gravity/msgs";
import { MsgCreateOrchestratorAddress } from "./types/gravity/orchestratorAddress";
import { MsgErc20DeployedClaim } from "./types/gravity/msgs";
import { MsgUpdateCosmosToEth } from "./types/gravity/cosmosToEth";
import { MsgRequestBatch } from "./types/gravity/msgs";
import { MsgDepositClaim } from "./types/gravity/msgs";
import { MsgUpdateOrchestratorAddress } from "./types/gravity/orchestratorAddress";
import { MsgSendToEth } from "./types/gravity/msgs";
import { MsgConfirmLogicCall } from "./types/gravity/msgs";
import { MsgDeleteOrchestratorAddress } from "./types/gravity/orchestratorAddress";
import { MsgDeleteCosmosToEth } from "./types/gravity/cosmosToEth";
import { MsgValsetUpdatedClaim } from "./types/gravity/msgs";
import { MsgCancelSendToEth } from "./types/gravity/msgs";
import { MsgValsetConfirm } from "./types/gravity/msgs";
import { MsgWithdrawClaim } from "./types/gravity/msgs";
import { MsgLogicCallExecutedClaim } from "./types/gravity/msgs";
import { MsgCreateCosmosToEth } from "./types/gravity/cosmosToEth";
import { MsgSetOrchestratorAddress } from "./types/gravity/msgs";
interface TxClientOptions {
    addr: string;
}
interface SignAndBroadcastOptions {
    fee: StdFee;
    memo?: string;
}
declare const txClient: (wallet: OfflineSigner, { addr: addr }?: TxClientOptions) => Promise<{
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions) => Promise<import("@cosmjs/stargate").BroadcastTxResponse>;
    msgConfirmBatch: (data: MsgConfirmBatch) => EncodeObject;
    msgCreateOrchestratorAddress: (data: MsgCreateOrchestratorAddress) => EncodeObject;
    msgErc20DeployedClaim: (data: MsgErc20DeployedClaim) => EncodeObject;
    msgUpdateCosmosToEth: (data: MsgUpdateCosmosToEth) => EncodeObject;
    msgRequestBatch: (data: MsgRequestBatch) => EncodeObject;
    msgDepositClaim: (data: MsgDepositClaim) => EncodeObject;
    msgUpdateOrchestratorAddress: (data: MsgUpdateOrchestratorAddress) => EncodeObject;
    msgSendToEth: (data: MsgSendToEth) => EncodeObject;
    msgConfirmLogicCall: (data: MsgConfirmLogicCall) => EncodeObject;
    msgDeleteOrchestratorAddress: (data: MsgDeleteOrchestratorAddress) => EncodeObject;
    msgDeleteCosmosToEth: (data: MsgDeleteCosmosToEth) => EncodeObject;
    msgValsetUpdatedClaim: (data: MsgValsetUpdatedClaim) => EncodeObject;
    msgCancelSendToEth: (data: MsgCancelSendToEth) => EncodeObject;
    msgValsetConfirm: (data: MsgValsetConfirm) => EncodeObject;
    msgWithdrawClaim: (data: MsgWithdrawClaim) => EncodeObject;
    msgLogicCallExecutedClaim: (data: MsgLogicCallExecutedClaim) => EncodeObject;
    msgCreateCosmosToEth: (data: MsgCreateCosmosToEth) => EncodeObject;
    msgSetOrchestratorAddress: (data: MsgSetOrchestratorAddress) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
