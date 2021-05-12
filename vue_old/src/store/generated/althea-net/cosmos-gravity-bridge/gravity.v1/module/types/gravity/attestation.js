/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Any } from "../google/protobuf/any";
export const protobufPackage = "gravity.v1";
/**
 * ClaimType is the cosmos type of an event from the counterpart chain that can
 * be handled
 */
export var ClaimType;
(function (ClaimType) {
    ClaimType[ClaimType["CLAIM_TYPE_UNSPECIFIED"] = 0] = "CLAIM_TYPE_UNSPECIFIED";
    ClaimType[ClaimType["CLAIM_TYPE_DEPOSIT"] = 1] = "CLAIM_TYPE_DEPOSIT";
    ClaimType[ClaimType["CLAIM_TYPE_WITHDRAW"] = 2] = "CLAIM_TYPE_WITHDRAW";
    ClaimType[ClaimType["CLAIM_TYPE_Erc20_DEPLOYED"] = 3] = "CLAIM_TYPE_Erc20_DEPLOYED";
    ClaimType[ClaimType["CLAIM_TYPE_LOGIC_CALL_EXECUTED"] = 4] = "CLAIM_TYPE_LOGIC_CALL_EXECUTED";
    ClaimType[ClaimType["CLAIM_TYPE_VALSET_UPDATED"] = 5] = "CLAIM_TYPE_VALSET_UPDATED";
    ClaimType[ClaimType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ClaimType || (ClaimType = {}));
export function claimTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "CLAIM_TYPE_UNSPECIFIED":
            return ClaimType.CLAIM_TYPE_UNSPECIFIED;
        case 1:
        case "CLAIM_TYPE_DEPOSIT":
            return ClaimType.CLAIM_TYPE_DEPOSIT;
        case 2:
        case "CLAIM_TYPE_WITHDRAW":
            return ClaimType.CLAIM_TYPE_WITHDRAW;
        case 3:
        case "CLAIM_TYPE_Erc20_DEPLOYED":
            return ClaimType.CLAIM_TYPE_Erc20_DEPLOYED;
        case 4:
        case "CLAIM_TYPE_LOGIC_CALL_EXECUTED":
            return ClaimType.CLAIM_TYPE_LOGIC_CALL_EXECUTED;
        case 5:
        case "CLAIM_TYPE_VALSET_UPDATED":
            return ClaimType.CLAIM_TYPE_VALSET_UPDATED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ClaimType.UNRECOGNIZED;
    }
}
export function claimTypeToJSON(object) {
    switch (object) {
        case ClaimType.CLAIM_TYPE_UNSPECIFIED:
            return "CLAIM_TYPE_UNSPECIFIED";
        case ClaimType.CLAIM_TYPE_DEPOSIT:
            return "CLAIM_TYPE_DEPOSIT";
        case ClaimType.CLAIM_TYPE_WITHDRAW:
            return "CLAIM_TYPE_WITHDRAW";
        case ClaimType.CLAIM_TYPE_Erc20_DEPLOYED:
            return "CLAIM_TYPE_Erc20_DEPLOYED";
        case ClaimType.CLAIM_TYPE_LOGIC_CALL_EXECUTED:
            return "CLAIM_TYPE_LOGIC_CALL_EXECUTED";
        case ClaimType.CLAIM_TYPE_VALSET_UPDATED:
            return "CLAIM_TYPE_VALSET_UPDATED";
        default:
            return "UNKNOWN";
    }
}
const baseAttestation = { observed: false, votes: "", height: 0 };
export const Attestation = {
    encode(message, writer = Writer.create()) {
        if (message.observed === true) {
            writer.uint32(8).bool(message.observed);
        }
        for (const v of message.votes) {
            writer.uint32(18).string(v);
        }
        if (message.height !== 0) {
            writer.uint32(24).uint64(message.height);
        }
        if (message.claim !== undefined) {
            Any.encode(message.claim, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAttestation };
        message.votes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.observed = reader.bool();
                    break;
                case 2:
                    message.votes.push(reader.string());
                    break;
                case 3:
                    message.height = longToNumber(reader.uint64());
                    break;
                case 4:
                    message.claim = Any.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseAttestation };
        message.votes = [];
        if (object.observed !== undefined && object.observed !== null) {
            message.observed = Boolean(object.observed);
        }
        else {
            message.observed = false;
        }
        if (object.votes !== undefined && object.votes !== null) {
            for (const e of object.votes) {
                message.votes.push(String(e));
            }
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = Number(object.height);
        }
        else {
            message.height = 0;
        }
        if (object.claim !== undefined && object.claim !== null) {
            message.claim = Any.fromJSON(object.claim);
        }
        else {
            message.claim = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.observed !== undefined && (obj.observed = message.observed);
        if (message.votes) {
            obj.votes = message.votes.map((e) => e);
        }
        else {
            obj.votes = [];
        }
        message.height !== undefined && (obj.height = message.height);
        message.claim !== undefined &&
            (obj.claim = message.claim ? Any.toJSON(message.claim) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseAttestation };
        message.votes = [];
        if (object.observed !== undefined && object.observed !== null) {
            message.observed = object.observed;
        }
        else {
            message.observed = false;
        }
        if (object.votes !== undefined && object.votes !== null) {
            for (const e of object.votes) {
                message.votes.push(e);
            }
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = object.height;
        }
        else {
            message.height = 0;
        }
        if (object.claim !== undefined && object.claim !== null) {
            message.claim = Any.fromPartial(object.claim);
        }
        else {
            message.claim = undefined;
        }
        return message;
    },
};
const baseErc20Token = { contract: "", amount: "" };
export const Erc20Token = {
    encode(message, writer = Writer.create()) {
        if (message.contract !== "") {
            writer.uint32(10).string(message.contract);
        }
        if (message.amount !== "") {
            writer.uint32(18).string(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseErc20Token };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contract = reader.string();
                    break;
                case 2:
                    message.amount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseErc20Token };
        if (object.contract !== undefined && object.contract !== null) {
            message.contract = String(object.contract);
        }
        else {
            message.contract = "";
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = String(object.amount);
        }
        else {
            message.amount = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.contract !== undefined && (obj.contract = message.contract);
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseErc20Token };
        if (object.contract !== undefined && object.contract !== null) {
            message.contract = object.contract;
        }
        else {
            message.contract = "";
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        else {
            message.amount = "";
        }
        return message;
    },
};
var globalThis = (() => {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (util.Long !== Long) {
    util.Long = Long;
    configure();
}
