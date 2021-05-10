import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "gravity.v1";
/** BridgeValidator represents a validator's ETH address and its power */
export interface BridgeValidator {
    power: number;
    ethereumAddress: string;
}
/**
 * Valset is the Ethereum Bridge Multsig Set, each gravity validator also
 * maintains an ETH key to sign messages, these are used to check signatures on
 * ETH because of the significant gas savings
 */
export interface Valset {
    nonce: number;
    members: BridgeValidator[];
    height: number;
}
/**
 * LastObservedEthereumBlockHeight stores the last observed
 * Ethereum block height along with the Cosmos block height that
 * it was observed at. These two numbers can be used to project
 * outward and always produce batches with timeouts in the future
 * even if no Ethereum block height has been relayed for a long time
 */
export interface LastObservedEthereumBlockHeight {
    cosmosBlockHeight: number;
    ethereumBlockHeight: number;
}
/**
 * This records the relationship between an Erc20 token and the denom
 * of the corresponding Cosmos originated asset
 */
export interface Erc20ToDenom {
    erc20: string;
    denom: string;
}
export declare const BridgeValidator: {
    encode(message: BridgeValidator, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): BridgeValidator;
    fromJSON(object: any): BridgeValidator;
    toJSON(message: BridgeValidator): unknown;
    fromPartial(object: DeepPartial<BridgeValidator>): BridgeValidator;
};
export declare const Valset: {
    encode(message: Valset, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Valset;
    fromJSON(object: any): Valset;
    toJSON(message: Valset): unknown;
    fromPartial(object: DeepPartial<Valset>): Valset;
};
export declare const LastObservedEthereumBlockHeight: {
    encode(message: LastObservedEthereumBlockHeight, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): LastObservedEthereumBlockHeight;
    fromJSON(object: any): LastObservedEthereumBlockHeight;
    toJSON(message: LastObservedEthereumBlockHeight): unknown;
    fromPartial(object: DeepPartial<LastObservedEthereumBlockHeight>): LastObservedEthereumBlockHeight;
};
export declare const Erc20ToDenom: {
    encode(message: Erc20ToDenom, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Erc20ToDenom;
    fromJSON(object: any): Erc20ToDenom;
    toJSON(message: Erc20ToDenom): unknown;
    fromPartial(object: DeepPartial<Erc20ToDenom>): Erc20ToDenom;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
