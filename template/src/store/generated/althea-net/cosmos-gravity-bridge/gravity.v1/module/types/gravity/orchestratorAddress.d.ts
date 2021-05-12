import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "gravity.v1";
export interface OrchestratorAddress {
    validator: string;
    orchestrator: string;
    ethAddress: string;
}
export interface MsgCreateOrchestratorAddress {
    validator: string;
    orchestrator: string;
    ethAddress: string;
}
export interface MsgUpdateOrchestratorAddress {
    creator: string;
    id: number;
    validator: string;
    orchestrator: string;
    ethAddress: string;
}
export interface MsgDeleteOrchestratorAddress {
    creator: string;
    id: number;
}
export declare const OrchestratorAddress: {
    encode(message: OrchestratorAddress, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): OrchestratorAddress;
    fromJSON(object: any): OrchestratorAddress;
    toJSON(message: OrchestratorAddress): unknown;
    fromPartial(object: DeepPartial<OrchestratorAddress>): OrchestratorAddress;
};
export declare const MsgCreateOrchestratorAddress: {
    encode(message: MsgCreateOrchestratorAddress, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateOrchestratorAddress;
    fromJSON(object: any): MsgCreateOrchestratorAddress;
    toJSON(message: MsgCreateOrchestratorAddress): unknown;
    fromPartial(object: DeepPartial<MsgCreateOrchestratorAddress>): MsgCreateOrchestratorAddress;
};
export declare const MsgUpdateOrchestratorAddress: {
    encode(message: MsgUpdateOrchestratorAddress, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateOrchestratorAddress;
    fromJSON(object: any): MsgUpdateOrchestratorAddress;
    toJSON(message: MsgUpdateOrchestratorAddress): unknown;
    fromPartial(object: DeepPartial<MsgUpdateOrchestratorAddress>): MsgUpdateOrchestratorAddress;
};
export declare const MsgDeleteOrchestratorAddress: {
    encode(message: MsgDeleteOrchestratorAddress, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteOrchestratorAddress;
    fromJSON(object: any): MsgDeleteOrchestratorAddress;
    toJSON(message: MsgDeleteOrchestratorAddress): unknown;
    fromPartial(object: DeepPartial<MsgDeleteOrchestratorAddress>): MsgDeleteOrchestratorAddress;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
