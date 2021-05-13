import { Writer, Reader } from "protobufjs/minimal";
import { Valset, Erc20ToDenom } from "../gravity/types";
import { MsgValsetConfirm, MsgConfirmBatch, MsgConfirmLogicCall, MsgSetOrchestratorAddress } from "../gravity/msgs";
import { OutgoingTxBatch, OutgoingLogicCall, OutgoingTransferTx } from "../gravity/batch";
import { Attestation } from "../gravity/attestation";
export declare const protobufPackage = "gravity.v1";
/**
 * Params represent the Gravity genesis and store parameters
 * gravity_id:
 * a random 32 byte value to prevent signature reuse, for example if the
 * cosmos validators decided to use the same Ethereum keys for another chain
 * also running Gravity we would not want it to be possible to play a deposit
 * from chain A back on chain B's Gravity. This value IS USED ON ETHEREUM so
 * it must be set in your genesis.json before launch and not changed after
 * deploying Gravity
 *
 * contract_hash:
 * the code hash of a known good version of the Gravity contract
 * solidity code. This can be used to verify the correct version
 * of the contract has been deployed. This is a reference value for
 * goernance action only it is never read by any Gravity code
 *
 * bridge_ethereum_address:
 * is address of the bridge contract on the Ethereum side, this is a
 * reference value for governance only and is not actually used by any
 * Gravity code
 *
 * bridge_chain_id:
 * the unique identifier of the Ethereum chain, this is a reference value
 * only and is not actually used by any Gravity code
 *
 * These reference values may be used by future Gravity client implemetnations
 * to allow for saftey features or convenience features like the Gravity address
 * in your relayer. A relayer would require a configured Gravity address if
 * governance had not set the address on the chain it was relaying for.
 *
 * signed_valsets_window
 * signed_batches_window
 * signed_claims_window
 *
 * These values represent the time in blocks that a validator has to submit
 * a signature for a batch or valset, or to submit a claim for a particular
 * attestation nonce. In the case of attestations this clock starts when the
 * attestation is created, but only allows for slashing once the event has passed
 *
 * target_batch_timeout:
 *
 * This is the 'target' value for when batches time out, this is a target becuase
 * Ethereum is a probabalistic chain and you can't say for sure what the block
 * frequency is ahead of time.
 *
 * average_block_time
 * average_ethereum_block_time
 *
 * These values are the average Cosmos block time and Ethereum block time repsectively
 * and they are used to copute what the target batch timeout is. It is important that
 * governance updates these in case of any major, prolonged change in the time it takes
 * to produce a block
 *
 * slash_fraction_valset
 * slash_fraction_batch
 * slash_fraction_claim
 * slash_fraction_conflicting_claim
 *
 * The slashing fractions for the various gravity related slashing conditions. The first three
 * refer to not submitting a particular message, the third for submitting a different claim
 * for the same Ethereum event
 */
export interface Params {
    gravityId: string;
    contractSourceHash: string;
    bridgeEthereumAddress: string;
    bridgeChainId: number;
    signedValsetsWindow: number;
    signedBatchesWindow: number;
    signedClaimsWindow: number;
    targetBatchTimeout: number;
    averageBlockTime: number;
    averageEthereumBlockTime: number;
    slashFractionValset: Uint8Array;
    slashFractionBatch: Uint8Array;
    slashFractionClaim: Uint8Array;
    slashFractionConflictingClaim: Uint8Array;
    unbondSlashingValsetsWindow: number;
}
/** GenesisState struct */
export interface GenesisState {
    params: Params | undefined;
    lastObservedNonce: number;
    valsets: Valset[];
    valsetConfirms: MsgValsetConfirm[];
    batches: OutgoingTxBatch[];
    batchConfirms: MsgConfirmBatch[];
    logicCalls: OutgoingLogicCall[];
    logicCallConfirms: MsgConfirmLogicCall[];
    attestations: Attestation[];
    delegateKeys: MsgSetOrchestratorAddress[];
    erc20ToDenoms: Erc20ToDenom[];
    unbatchedTransfers: OutgoingTransferTx[];
}
export declare const Params: {
    encode(message: Params, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: DeepPartial<Params>): Params;
};
export declare const GenesisState: {
    encode(message: GenesisState, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
