import { Writer, Reader } from "protobufjs/minimal";
import { Erc20Token } from "../gravity/attestation";
export declare const protobufPackage = "gravity.v1";
/** OutgoingTxBatch represents a batch of transactions going from gravity to ETH */
export interface OutgoingTxBatch {
    batchNonce: number;
    batchTimeout: number;
    transactions: OutgoingTransferTx[];
    tokenContract: string;
    block: number;
}
/** OutgoingTransferTx represents an individual send from gravity to ETH */
export interface OutgoingTransferTx {
    id: number;
    sender: string;
    destAddress: string;
    erc20Token: Erc20Token | undefined;
    erc20Fee: Erc20Token | undefined;
}
/** OutgoingLogicCall represents an individual logic call from gravity to ETH */
export interface OutgoingLogicCall {
    transfers: Erc20Token[];
    fees: Erc20Token[];
    logicContractAddress: string;
    payload: Uint8Array;
    timeout: number;
    invalidationId: Uint8Array;
    invalidationNonce: number;
}
export declare const OutgoingTxBatch: {
    encode(message: OutgoingTxBatch, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): OutgoingTxBatch;
    fromJSON(object: any): OutgoingTxBatch;
    toJSON(message: OutgoingTxBatch): unknown;
    fromPartial(object: DeepPartial<OutgoingTxBatch>): OutgoingTxBatch;
};
export declare const OutgoingTransferTx: {
    encode(message: OutgoingTransferTx, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): OutgoingTransferTx;
    fromJSON(object: any): OutgoingTransferTx;
    toJSON(message: OutgoingTransferTx): unknown;
    fromPartial(object: DeepPartial<OutgoingTransferTx>): OutgoingTransferTx;
};
export declare const OutgoingLogicCall: {
    encode(message: OutgoingLogicCall, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): OutgoingLogicCall;
    fromJSON(object: any): OutgoingLogicCall;
    toJSON(message: OutgoingLogicCall): unknown;
    fromPartial(object: DeepPartial<OutgoingLogicCall>): OutgoingLogicCall;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
