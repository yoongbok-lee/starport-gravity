import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "gravity.v1";
export interface CosmosToEth {
    sender: string;
    ethDest: string;
    amount: string;
    bridgeFee: string;
}
export interface MsgCreateCosmosToEth {
    sender: string;
    ethDest: string;
    amount: string;
    bridgeFee: string;
}
export interface MsgUpdateCosmosToEth {
    creator: string;
    id: number;
    sender: string;
    ethDest: string;
    amount: string;
    bridgeFee: string;
}
export interface MsgDeleteCosmosToEth {
    creator: string;
    id: number;
}
export declare const CosmosToEth: {
    encode(message: CosmosToEth, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CosmosToEth;
    fromJSON(object: any): CosmosToEth;
    toJSON(message: CosmosToEth): unknown;
    fromPartial(object: DeepPartial<CosmosToEth>): CosmosToEth;
};
export declare const MsgCreateCosmosToEth: {
    encode(message: MsgCreateCosmosToEth, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateCosmosToEth;
    fromJSON(object: any): MsgCreateCosmosToEth;
    toJSON(message: MsgCreateCosmosToEth): unknown;
    fromPartial(object: DeepPartial<MsgCreateCosmosToEth>): MsgCreateCosmosToEth;
};
export declare const MsgUpdateCosmosToEth: {
    encode(message: MsgUpdateCosmosToEth, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateCosmosToEth;
    fromJSON(object: any): MsgUpdateCosmosToEth;
    toJSON(message: MsgUpdateCosmosToEth): unknown;
    fromPartial(object: DeepPartial<MsgUpdateCosmosToEth>): MsgUpdateCosmosToEth;
};
export declare const MsgDeleteCosmosToEth: {
    encode(message: MsgDeleteCosmosToEth, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteCosmosToEth;
    fromJSON(object: any): MsgDeleteCosmosToEth;
    toJSON(message: MsgDeleteCosmosToEth): unknown;
    fromPartial(object: DeepPartial<MsgDeleteCosmosToEth>): MsgDeleteCosmosToEth;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
