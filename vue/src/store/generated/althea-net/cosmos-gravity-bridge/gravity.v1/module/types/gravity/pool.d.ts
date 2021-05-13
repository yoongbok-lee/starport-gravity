import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "gravity.v1";
/** IDSet represents a set of IDs */
export interface IDSet {
    ids: number[];
}
export interface BatchFees {
    token: string;
    totalFees: string;
}
export declare const IDSet: {
    encode(message: IDSet, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): IDSet;
    fromJSON(object: any): IDSet;
    toJSON(message: IDSet): unknown;
    fromPartial(object: DeepPartial<IDSet>): IDSet;
};
export declare const BatchFees: {
    encode(message: BatchFees, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): BatchFees;
    fromJSON(object: any): BatchFees;
    toJSON(message: BatchFees): unknown;
    fromPartial(object: DeepPartial<BatchFees>): BatchFees;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
