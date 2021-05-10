import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
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
interface TxClientOptions {
    addr: string;
}
interface SignAndBroadcastOptions {
    fee: StdFee;
    memo?: string;
}
declare const txClient: (wallet: OfflineSigner, { addr: addr }?: TxClientOptions) => Promise<{
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions) => Promise<import("@cosmjs/stargate").BroadcastTxResponse>;
    msgDeleteCosmosToEth: (data: MsgDeleteCosmosToEth) => EncodeObject;
    msgDeleteOrchestratorAddress: (data: MsgDeleteOrchestratorAddress) => EncodeObject;
    msgConfirmLogicCall: (data: MsgConfirmLogicCall) => EncodeObject;
    msgLogicCallExecutedClaim: (data: MsgLogicCallExecutedClaim) => EncodeObject;
    msgValsetUpdatedClaim: (data: MsgValsetUpdatedClaim) => EncodeObject;
    msgValsetConfirm: (data: MsgValsetConfirm) => EncodeObject;
    msgCreateCosmosToEth: (data: MsgCreateCosmosToEth) => EncodeObject;
    msgDepositClaim: (data: MsgDepositClaim) => EncodeObject;
    msgConfirmBatch: (data: MsgConfirmBatch) => EncodeObject;
    msgErc20DeployedClaim: (data: MsgErc20DeployedClaim) => EncodeObject;
    msgCancelSendToEth: (data: MsgCancelSendToEth) => EncodeObject;
    msgUpdateOrchestratorAddress: (data: MsgUpdateOrchestratorAddress) => EncodeObject;
    msgSendToEth: (data: MsgSendToEth) => EncodeObject;
    msgRequestBatch: (data: MsgRequestBatch) => EncodeObject;
    msgUpdateCosmosToEth: (data: MsgUpdateCosmosToEth) => EncodeObject;
    msgCreateOrchestratorAddress: (data: MsgCreateOrchestratorAddress) => EncodeObject;
    msgSetOrchestratorAddress: (data: MsgSetOrchestratorAddress) => EncodeObject;
    msgWithdrawClaim: (data: MsgWithdrawClaim) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
