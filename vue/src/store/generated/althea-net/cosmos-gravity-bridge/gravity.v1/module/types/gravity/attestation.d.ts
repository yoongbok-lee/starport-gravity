import { Writer, Reader } from "protobufjs/minimal";
import { Any } from "../google/protobuf/any";
export declare const protobufPackage = "gravity.v1";
/**
 * ClaimType is the cosmos type of an event from the counterpart chain that can
 * be handled
 */
export declare enum ClaimType {
    CLAIM_TYPE_UNSPECIFIED = 0,
    CLAIM_TYPE_DEPOSIT = 1,
    CLAIM_TYPE_WITHDRAW = 2,
    CLAIM_TYPE_Erc20_DEPLOYED = 3,
    CLAIM_TYPE_LOGIC_CALL_EXECUTED = 4,
    CLAIM_TYPE_VALSET_UPDATED = 5,
    UNRECOGNIZED = -1
}
export declare function claimTypeFromJSON(object: any): ClaimType;
export declare function claimTypeToJSON(object: ClaimType): string;
/**
 * Attestation is an aggregate of `claims` that eventually becomes `observed` by
 * all orchestrators
 * EVENT_NONCE:
 * EventNonce a nonce provided by the gravity contract that is unique per event fired
 * These event nonces must be relayed in order. This is a correctness issue,
 * if relaying out of order transaction replay attacks become possible
 * OBSERVED:
 * Observed indicates that >67% of validators have attested to the event,
 * and that the event should be executed by the gravity state machine
 *
 * The actual content of the claims is passed in with the transaction making the claim
 * and then passed through the call stack alongside the attestation while it is processed
 * the key in which the attestation is stored is keyed on the exact details of the claim
 * but there is no reason to store those exact details becuause the next message sender
 * will kindly provide you with them.
 */
export interface Attestation {
    observed: boolean;
    votes: string[];
    height: number;
    claim: Any | undefined;
}
/**
 * Erc20Token unique identifier for an Ethereum Erc20 token.
 * CONTRACT:
 * The contract address on ETH of the token, this could be a Cosmos
 * originated token, if so it will be the Erc20 address of the representation
 * (note: developers should look up the token symbol using the address on ETH to display for UI)
 */
export interface Erc20Token {
    contract: string;
    amount: string;
}
export declare const Attestation: {
    encode(message: Attestation, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Attestation;
    fromJSON(object: any): Attestation;
    toJSON(message: Attestation): unknown;
    fromPartial(object: DeepPartial<Attestation>): Attestation;
};
export declare const Erc20Token: {
    encode(message: Erc20Token, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Erc20Token;
    fromJSON(object: any): Erc20Token;
    toJSON(message: Erc20Token): unknown;
    fromPartial(object: DeepPartial<Erc20Token>): Erc20Token;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
