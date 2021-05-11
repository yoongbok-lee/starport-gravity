import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
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
interface TxClientOptions {
    addr: string;
}
interface SignAndBroadcastOptions {
    fee: StdFee;
    memo?: string;
}
declare const txClient: (wallet: OfflineSigner, { addr: addr }?: TxClientOptions) => Promise<{
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions) => Promise<import("@cosmjs/stargate").BroadcastTxResponse>;
    msgCreateOrchestratorAddress: (data: MsgCreateOrchestratorAddress) => EncodeObject;
    msgWithdrawClaim: (data: MsgWithdrawClaim) => EncodeObject;
    msgValsetConfirm: (data: MsgValsetConfirm) => EncodeObject;
    msgConfirmLogicCall: (data: MsgConfirmLogicCall) => EncodeObject;
    msgCreateCosmosToEth: (data: MsgCreateCosmosToEth) => EncodeObject;
    msgValsetUpdatedClaim: (data: MsgValsetUpdatedClaim) => EncodeObject;
    msgDeleteCosmosToEth: (data: MsgDeleteCosmosToEth) => EncodeObject;
    msgSetOrchestratorAddress: (data: MsgSetOrchestratorAddress) => EncodeObject;
    msgConfirmBatch: (data: MsgConfirmBatch) => EncodeObject;
    msgUpdateCosmosToEth: (data: MsgUpdateCosmosToEth) => EncodeObject;
    msgUpdateOrchestratorAddress: (data: MsgUpdateOrchestratorAddress) => EncodeObject;
    msgLogicCallExecutedClaim: (data: MsgLogicCallExecutedClaim) => EncodeObject;
    msgDeleteOrchestratorAddress: (data: MsgDeleteOrchestratorAddress) => EncodeObject;
    msgSendToEth: (data: MsgSendToEth) => EncodeObject;
    msgErc20DeployedClaim: (data: MsgErc20DeployedClaim) => EncodeObject;
    msgCancelSendToEth: (data: MsgCancelSendToEth) => EncodeObject;
    msgRequestBatch: (data: MsgRequestBatch) => EncodeObject;
    msgDepositClaim: (data: MsgDepositClaim) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
