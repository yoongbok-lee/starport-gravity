import { Reader, Writer } from "protobufjs/minimal";
import { Coin } from "../cosmos/base/v1beta1/coin";
import { BridgeValidator } from "../gravity/types";
export declare const protobufPackage = "gravity.v1";
/**
 * MsgSetOrchestratorAddress
 * this message allows validators to delegate their voting responsibilities
 * to a given key. This key is then used as an optional authentication method
 * for sigining oracle claims
 * VALIDATOR
 * The validator field is a cosmosvaloper1... string (i.e. sdk.ValAddress)
 * that references a validator in the active set
 * ORCHESTRATOR
 * The orchestrator field is a cosmos1... string  (i.e. sdk.AccAddress) that
 * references the key that is being delegated to
 * ETH_ADDRESS
 * This is a hex encoded 0x Ethereum public key that will be used by this validator
 * on Ethereum
 */
export interface MsgSetOrchestratorAddress {
    validator: string;
    orchestrator: string;
    ethAddress: string;
}
export interface MsgSetOrchestratorAddressResponse {
}
/**
 * MsgValsetConfirm
 * this is the message sent by the validators when they wish to submit their
 * signatures over the validator set at a given block height. A validator must
 * first call MsgSetEthAddress to set their Ethereum address to be used for
 * signing. Then someone (anyone) must make a ValsetRequest, the request is
 * essentially a messaging mechanism to determine which block all validators
 * should submit signatures over. Finally validators sign the validator set,
 * powers, and Ethereum addresses of the entire validator set at the height of a
 * ValsetRequest and submit that signature with this message.
 *
 * If a sufficient number of validators (66% of voting power) (A) have set
 * Ethereum addresses and (B) submit ValsetConfirm messages with their
 * signatures it is then possible for anyone to view these signatures in the
 * chain store and submit them to Ethereum to update the validator set
 * -------------
 */
export interface MsgValsetConfirm {
    nonce: number;
    orchestrator: string;
    ethAddress: string;
    signature: string;
}
export interface MsgValsetConfirmResponse {
}
/**
 * MsgSendToEth
 * This is the message that a user calls when they want to bridge an asset
 * it will later be removed when it is included in a batch and successfully
 * submitted tokens are removed from the users balance immediately
 * -------------
 * AMOUNT:
 * the coin to send across the bridge, note the restriction that this is a
 * single coin not a set of coins that is normal in other Cosmos messages
 * FEE:
 * the fee paid for the bridge, distinct from the fee paid to the chain to
 * actually send this message in the first place. So a successful send has
 * two layers of fees for the user
 */
export interface MsgSendToEth {
    sender: string;
    ethDest: string;
    amount: Coin | undefined;
    bridgeFee: Coin | undefined;
}
export interface MsgSendToEthResponse {
}
/**
 * MsgRequestBatch
 * this is a message anyone can send that requests a batch of transactions to
 * send across the bridge be created for whatever block height this message is
 * included in. This acts as a coordination point, the handler for this message
 * looks at the AddToOutgoingPool tx's in the store and generates a batch, also
 * available in the store tied to this message. The validators then grab this
 * batch, sign it, submit the signatures with a MsgConfirmBatch before a relayer
 * can finally submit the batch
 * -------------
 */
export interface MsgRequestBatch {
    sender: string;
    denom: string;
}
export interface MsgRequestBatchResponse {
}
/**
 * MsgConfirmBatch
 * When validators observe a MsgRequestBatch they form a batch by ordering
 * transactions currently in the txqueue in order of highest to lowest fee,
 * cutting off when the batch either reaches a hardcoded maximum size (to be
 * decided, probably around 100) or when transactions stop being profitable
 * (TODO determine this without nondeterminism) This message includes the batch
 * as well as an Ethereum signature over this batch by the validator
 * -------------
 */
export interface MsgConfirmBatch {
    nonce: number;
    tokenContract: string;
    ethSigner: string;
    orchestrator: string;
    signature: string;
}
export interface MsgConfirmBatchResponse {
}
/**
 * MsgConfirmLogicCall
 * When validators observe a MsgRequestBatch they form a batch by ordering
 * transactions currently in the txqueue in order of highest to lowest fee,
 * cutting off when the batch either reaches a hardcoded maximum size (to be
 * decided, probably around 100) or when transactions stop being profitable
 * (TODO determine this without nondeterminism) This message includes the batch
 * as well as an Ethereum signature over this batch by the validator
 * -------------
 */
export interface MsgConfirmLogicCall {
    invalidationId: string;
    invalidationNonce: number;
    ethSigner: string;
    orchestrator: string;
    signature: string;
}
export interface MsgConfirmLogicCallResponse {
}
/**
 * EthereumBridgeDepositClaim
 * When more than 66% of the active validator set has
 * claimed to have seen the deposit enter the ethereum blockchain coins are
 * issued to the Cosmos address in question
 * -------------
 */
export interface MsgDepositClaim {
    eventNonce: number;
    blockHeight: number;
    tokenContract: string;
    amount: string;
    ethereumSender: string;
    cosmosReceiver: string;
    orchestrator: string;
}
export interface MsgDepositClaimResponse {
}
/**
 * WithdrawClaim claims that a batch of withdrawal
 * operations on the bridge contract was executed.
 */
export interface MsgWithdrawClaim {
    eventNonce: number;
    blockHeight: number;
    batchNonce: number;
    tokenContract: string;
    orchestrator: string;
}
export interface MsgWithdrawClaimResponse {
}
/**
 * Erc20DeployedClaim allows the Cosmos module
 * to learn about an Erc20 that someone deployed
 * to represent a Cosmos asset
 */
export interface MsgErc20DeployedClaim {
    eventNonce: number;
    blockHeight: number;
    cosmosDenom: string;
    tokenContract: string;
    name: string;
    symbol: string;
    decimals: number;
    orchestrator: string;
}
export interface MsgErc20DeployedClaimResponse {
}
/**
 * This informs the Cosmos module that a logic
 * call has been executed
 */
export interface MsgLogicCallExecutedClaim {
    eventNonce: number;
    blockHeight: number;
    invalidationId: Uint8Array;
    invalidationNonce: number;
    orchestrator: string;
}
export interface MsgLogicCallExecutedClaimResponse {
}
/**
 * This informs the Cosmos module that a validator
 * set has been updated.
 */
export interface MsgValsetUpdatedClaim {
    eventNonce: number;
    valsetNonce: number;
    blockHeight: number;
    members: BridgeValidator[];
    orchestrator: string;
}
export interface MsgValsetUpdatedClaimResponse {
}
/**
 * This call allows the sender (and only the sender)
 * to cancel a given MsgSendToEth and recieve a refund
 * of the tokens
 */
export interface MsgCancelSendToEth {
    transactionId: number;
    sender: string;
}
export interface MsgCancelSendToEthResponse {
}
export declare const MsgSetOrchestratorAddress: {
    encode(message: MsgSetOrchestratorAddress, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgSetOrchestratorAddress;
    fromJSON(object: any): MsgSetOrchestratorAddress;
    toJSON(message: MsgSetOrchestratorAddress): unknown;
    fromPartial(object: DeepPartial<MsgSetOrchestratorAddress>): MsgSetOrchestratorAddress;
};
export declare const MsgSetOrchestratorAddressResponse: {
    encode(_: MsgSetOrchestratorAddressResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgSetOrchestratorAddressResponse;
    fromJSON(_: any): MsgSetOrchestratorAddressResponse;
    toJSON(_: MsgSetOrchestratorAddressResponse): unknown;
    fromPartial(_: DeepPartial<MsgSetOrchestratorAddressResponse>): MsgSetOrchestratorAddressResponse;
};
export declare const MsgValsetConfirm: {
    encode(message: MsgValsetConfirm, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgValsetConfirm;
    fromJSON(object: any): MsgValsetConfirm;
    toJSON(message: MsgValsetConfirm): unknown;
    fromPartial(object: DeepPartial<MsgValsetConfirm>): MsgValsetConfirm;
};
export declare const MsgValsetConfirmResponse: {
    encode(_: MsgValsetConfirmResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgValsetConfirmResponse;
    fromJSON(_: any): MsgValsetConfirmResponse;
    toJSON(_: MsgValsetConfirmResponse): unknown;
    fromPartial(_: DeepPartial<MsgValsetConfirmResponse>): MsgValsetConfirmResponse;
};
export declare const MsgSendToEth: {
    encode(message: MsgSendToEth, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgSendToEth;
    fromJSON(object: any): MsgSendToEth;
    toJSON(message: MsgSendToEth): unknown;
    fromPartial(object: DeepPartial<MsgSendToEth>): MsgSendToEth;
};
export declare const MsgSendToEthResponse: {
    encode(_: MsgSendToEthResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgSendToEthResponse;
    fromJSON(_: any): MsgSendToEthResponse;
    toJSON(_: MsgSendToEthResponse): unknown;
    fromPartial(_: DeepPartial<MsgSendToEthResponse>): MsgSendToEthResponse;
};
export declare const MsgRequestBatch: {
    encode(message: MsgRequestBatch, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgRequestBatch;
    fromJSON(object: any): MsgRequestBatch;
    toJSON(message: MsgRequestBatch): unknown;
    fromPartial(object: DeepPartial<MsgRequestBatch>): MsgRequestBatch;
};
export declare const MsgRequestBatchResponse: {
    encode(_: MsgRequestBatchResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgRequestBatchResponse;
    fromJSON(_: any): MsgRequestBatchResponse;
    toJSON(_: MsgRequestBatchResponse): unknown;
    fromPartial(_: DeepPartial<MsgRequestBatchResponse>): MsgRequestBatchResponse;
};
export declare const MsgConfirmBatch: {
    encode(message: MsgConfirmBatch, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgConfirmBatch;
    fromJSON(object: any): MsgConfirmBatch;
    toJSON(message: MsgConfirmBatch): unknown;
    fromPartial(object: DeepPartial<MsgConfirmBatch>): MsgConfirmBatch;
};
export declare const MsgConfirmBatchResponse: {
    encode(_: MsgConfirmBatchResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgConfirmBatchResponse;
    fromJSON(_: any): MsgConfirmBatchResponse;
    toJSON(_: MsgConfirmBatchResponse): unknown;
    fromPartial(_: DeepPartial<MsgConfirmBatchResponse>): MsgConfirmBatchResponse;
};
export declare const MsgConfirmLogicCall: {
    encode(message: MsgConfirmLogicCall, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgConfirmLogicCall;
    fromJSON(object: any): MsgConfirmLogicCall;
    toJSON(message: MsgConfirmLogicCall): unknown;
    fromPartial(object: DeepPartial<MsgConfirmLogicCall>): MsgConfirmLogicCall;
};
export declare const MsgConfirmLogicCallResponse: {
    encode(_: MsgConfirmLogicCallResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgConfirmLogicCallResponse;
    fromJSON(_: any): MsgConfirmLogicCallResponse;
    toJSON(_: MsgConfirmLogicCallResponse): unknown;
    fromPartial(_: DeepPartial<MsgConfirmLogicCallResponse>): MsgConfirmLogicCallResponse;
};
export declare const MsgDepositClaim: {
    encode(message: MsgDepositClaim, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDepositClaim;
    fromJSON(object: any): MsgDepositClaim;
    toJSON(message: MsgDepositClaim): unknown;
    fromPartial(object: DeepPartial<MsgDepositClaim>): MsgDepositClaim;
};
export declare const MsgDepositClaimResponse: {
    encode(_: MsgDepositClaimResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDepositClaimResponse;
    fromJSON(_: any): MsgDepositClaimResponse;
    toJSON(_: MsgDepositClaimResponse): unknown;
    fromPartial(_: DeepPartial<MsgDepositClaimResponse>): MsgDepositClaimResponse;
};
export declare const MsgWithdrawClaim: {
    encode(message: MsgWithdrawClaim, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgWithdrawClaim;
    fromJSON(object: any): MsgWithdrawClaim;
    toJSON(message: MsgWithdrawClaim): unknown;
    fromPartial(object: DeepPartial<MsgWithdrawClaim>): MsgWithdrawClaim;
};
export declare const MsgWithdrawClaimResponse: {
    encode(_: MsgWithdrawClaimResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgWithdrawClaimResponse;
    fromJSON(_: any): MsgWithdrawClaimResponse;
    toJSON(_: MsgWithdrawClaimResponse): unknown;
    fromPartial(_: DeepPartial<MsgWithdrawClaimResponse>): MsgWithdrawClaimResponse;
};
export declare const MsgErc20DeployedClaim: {
    encode(message: MsgErc20DeployedClaim, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgErc20DeployedClaim;
    fromJSON(object: any): MsgErc20DeployedClaim;
    toJSON(message: MsgErc20DeployedClaim): unknown;
    fromPartial(object: DeepPartial<MsgErc20DeployedClaim>): MsgErc20DeployedClaim;
};
export declare const MsgErc20DeployedClaimResponse: {
    encode(_: MsgErc20DeployedClaimResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgErc20DeployedClaimResponse;
    fromJSON(_: any): MsgErc20DeployedClaimResponse;
    toJSON(_: MsgErc20DeployedClaimResponse): unknown;
    fromPartial(_: DeepPartial<MsgErc20DeployedClaimResponse>): MsgErc20DeployedClaimResponse;
};
export declare const MsgLogicCallExecutedClaim: {
    encode(message: MsgLogicCallExecutedClaim, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgLogicCallExecutedClaim;
    fromJSON(object: any): MsgLogicCallExecutedClaim;
    toJSON(message: MsgLogicCallExecutedClaim): unknown;
    fromPartial(object: DeepPartial<MsgLogicCallExecutedClaim>): MsgLogicCallExecutedClaim;
};
export declare const MsgLogicCallExecutedClaimResponse: {
    encode(_: MsgLogicCallExecutedClaimResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgLogicCallExecutedClaimResponse;
    fromJSON(_: any): MsgLogicCallExecutedClaimResponse;
    toJSON(_: MsgLogicCallExecutedClaimResponse): unknown;
    fromPartial(_: DeepPartial<MsgLogicCallExecutedClaimResponse>): MsgLogicCallExecutedClaimResponse;
};
export declare const MsgValsetUpdatedClaim: {
    encode(message: MsgValsetUpdatedClaim, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgValsetUpdatedClaim;
    fromJSON(object: any): MsgValsetUpdatedClaim;
    toJSON(message: MsgValsetUpdatedClaim): unknown;
    fromPartial(object: DeepPartial<MsgValsetUpdatedClaim>): MsgValsetUpdatedClaim;
};
export declare const MsgValsetUpdatedClaimResponse: {
    encode(_: MsgValsetUpdatedClaimResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgValsetUpdatedClaimResponse;
    fromJSON(_: any): MsgValsetUpdatedClaimResponse;
    toJSON(_: MsgValsetUpdatedClaimResponse): unknown;
    fromPartial(_: DeepPartial<MsgValsetUpdatedClaimResponse>): MsgValsetUpdatedClaimResponse;
};
export declare const MsgCancelSendToEth: {
    encode(message: MsgCancelSendToEth, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCancelSendToEth;
    fromJSON(object: any): MsgCancelSendToEth;
    toJSON(message: MsgCancelSendToEth): unknown;
    fromPartial(object: DeepPartial<MsgCancelSendToEth>): MsgCancelSendToEth;
};
export declare const MsgCancelSendToEthResponse: {
    encode(_: MsgCancelSendToEthResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCancelSendToEthResponse;
    fromJSON(_: any): MsgCancelSendToEthResponse;
    toJSON(_: MsgCancelSendToEthResponse): unknown;
    fromPartial(_: DeepPartial<MsgCancelSendToEthResponse>): MsgCancelSendToEthResponse;
};
/** Msg defines the state transitions possible within gravity */
export interface Msg {
    ValsetConfirm(request: MsgValsetConfirm): Promise<MsgValsetConfirmResponse>;
    SendToEth(request: MsgSendToEth): Promise<MsgSendToEthResponse>;
    RequestBatch(request: MsgRequestBatch): Promise<MsgRequestBatchResponse>;
    ConfirmBatch(request: MsgConfirmBatch): Promise<MsgConfirmBatchResponse>;
    ConfirmLogicCall(request: MsgConfirmLogicCall): Promise<MsgConfirmLogicCallResponse>;
    DepositClaim(request: MsgDepositClaim): Promise<MsgDepositClaimResponse>;
    WithdrawClaim(request: MsgWithdrawClaim): Promise<MsgWithdrawClaimResponse>;
    ValsetUpdateClaim(request: MsgValsetUpdatedClaim): Promise<MsgValsetUpdatedClaimResponse>;
    Erc20DeployedClaim(request: MsgErc20DeployedClaim): Promise<MsgErc20DeployedClaimResponse>;
    LogicCallExecutedClaim(request: MsgLogicCallExecutedClaim): Promise<MsgLogicCallExecutedClaimResponse>;
    SetOrchestratorAddress(request: MsgSetOrchestratorAddress): Promise<MsgSetOrchestratorAddressResponse>;
    CancelSendToEth(request: MsgCancelSendToEth): Promise<MsgCancelSendToEthResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    ValsetConfirm(request: MsgValsetConfirm): Promise<MsgValsetConfirmResponse>;
    SendToEth(request: MsgSendToEth): Promise<MsgSendToEthResponse>;
    RequestBatch(request: MsgRequestBatch): Promise<MsgRequestBatchResponse>;
    ConfirmBatch(request: MsgConfirmBatch): Promise<MsgConfirmBatchResponse>;
    ConfirmLogicCall(request: MsgConfirmLogicCall): Promise<MsgConfirmLogicCallResponse>;
    DepositClaim(request: MsgDepositClaim): Promise<MsgDepositClaimResponse>;
    WithdrawClaim(request: MsgWithdrawClaim): Promise<MsgWithdrawClaimResponse>;
    ValsetUpdateClaim(request: MsgValsetUpdatedClaim): Promise<MsgValsetUpdatedClaimResponse>;
    Erc20DeployedClaim(request: MsgErc20DeployedClaim): Promise<MsgErc20DeployedClaimResponse>;
    LogicCallExecutedClaim(request: MsgLogicCallExecutedClaim): Promise<MsgLogicCallExecutedClaimResponse>;
    SetOrchestratorAddress(request: MsgSetOrchestratorAddress): Promise<MsgSetOrchestratorAddressResponse>;
    CancelSendToEth(request: MsgCancelSendToEth): Promise<MsgCancelSendToEthResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
