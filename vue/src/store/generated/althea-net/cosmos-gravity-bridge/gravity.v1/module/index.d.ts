import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgSetOrchestratorAddress } from "./types/gravity/msgs";
import { MsgRequestBatch } from "./types/gravity/msgs";
import { MsgValsetUpdatedClaim } from "./types/gravity/msgs";
import { MsgErc20DeployedClaim } from "./types/gravity/msgs";
import { MsgWithdrawClaim } from "./types/gravity/msgs";
import { MsgUpdateOrchestratorAddress } from "./types/gravity/orchestratorAddress";
import { MsgCreateOrchestratorAddress } from "./types/gravity/orchestratorAddress";
import { MsgConfirmBatch } from "./types/gravity/msgs";
import { MsgCancelSendToEth } from "./types/gravity/msgs";
import { MsgDeleteCosmosToEth } from "./types/gravity/cosmosToEth";
import { MsgSendToEth } from "./types/gravity/msgs";
import { MsgLogicCallExecutedClaim } from "./types/gravity/msgs";
import { MsgDeleteOrchestratorAddress } from "./types/gravity/orchestratorAddress";
import { MsgValsetConfirm } from "./types/gravity/msgs";
import { MsgDepositClaim } from "./types/gravity/msgs";
import { MsgUpdateCosmosToEth } from "./types/gravity/cosmosToEth";
import { MsgConfirmLogicCall } from "./types/gravity/msgs";
import { MsgCreateCosmosToEth } from "./types/gravity/cosmosToEth";
interface TxClientOptions {
    addr: string;
}
interface SignAndBroadcastOptions {
    fee: StdFee;
    memo?: string;
}
declare const txClient: (wallet: OfflineSigner, { addr: addr }?: TxClientOptions) => Promise<{
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions) => Promise<import("@cosmjs/stargate").BroadcastTxResponse>;
    msgSetOrchestratorAddress: (data: MsgSetOrchestratorAddress) => EncodeObject;
    msgRequestBatch: (data: MsgRequestBatch) => EncodeObject;
    msgValsetUpdatedClaim: (data: MsgValsetUpdatedClaim) => EncodeObject;
    msgErc20DeployedClaim: (data: MsgErc20DeployedClaim) => EncodeObject;
    msgWithdrawClaim: (data: MsgWithdrawClaim) => EncodeObject;
    msgUpdateOrchestratorAddress: (data: MsgUpdateOrchestratorAddress) => EncodeObject;
    msgCreateOrchestratorAddress: (data: MsgCreateOrchestratorAddress) => EncodeObject;
    msgConfirmBatch: (data: MsgConfirmBatch) => EncodeObject;
    msgCancelSendToEth: (data: MsgCancelSendToEth) => EncodeObject;
    msgDeleteCosmosToEth: (data: MsgDeleteCosmosToEth) => EncodeObject;
    msgSendToEth: (data: MsgSendToEth) => EncodeObject;
    msgLogicCallExecutedClaim: (data: MsgLogicCallExecutedClaim) => EncodeObject;
    msgDeleteOrchestratorAddress: (data: MsgDeleteOrchestratorAddress) => EncodeObject;
    msgValsetConfirm: (data: MsgValsetConfirm) => EncodeObject;
    msgDepositClaim: (data: MsgDepositClaim) => EncodeObject;
    msgUpdateCosmosToEth: (data: MsgUpdateCosmosToEth) => EncodeObject;
    msgConfirmLogicCall: (data: MsgConfirmLogicCall) => EncodeObject;
    msgCreateCosmosToEth: (data: MsgCreateCosmosToEth) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
