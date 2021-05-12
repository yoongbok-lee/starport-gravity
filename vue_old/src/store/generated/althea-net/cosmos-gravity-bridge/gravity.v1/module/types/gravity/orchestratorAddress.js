/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "gravity.v1";
const baseOrchestratorAddress = {
    validator: "",
    orchestrator: "",
    ethAddress: "",
};
export const OrchestratorAddress = {
    encode(message, writer = Writer.create()) {
        if (message.validator !== "") {
            writer.uint32(26).string(message.validator);
        }
        if (message.orchestrator !== "") {
            writer.uint32(34).string(message.orchestrator);
        }
        if (message.ethAddress !== "") {
            writer.uint32(42).string(message.ethAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseOrchestratorAddress };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 3:
                    message.validator = reader.string();
                    break;
                case 4:
                    message.orchestrator = reader.string();
                    break;
                case 5:
                    message.ethAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseOrchestratorAddress };
        if (object.validator !== undefined && object.validator !== null) {
            message.validator = String(object.validator);
        }
        else {
            message.validator = "";
        }
        if (object.orchestrator !== undefined && object.orchestrator !== null) {
            message.orchestrator = String(object.orchestrator);
        }
        else {
            message.orchestrator = "";
        }
        if (object.ethAddress !== undefined && object.ethAddress !== null) {
            message.ethAddress = String(object.ethAddress);
        }
        else {
            message.ethAddress = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.validator !== undefined && (obj.validator = message.validator);
        message.orchestrator !== undefined &&
            (obj.orchestrator = message.orchestrator);
        message.ethAddress !== undefined && (obj.ethAddress = message.ethAddress);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseOrchestratorAddress };
        if (object.validator !== undefined && object.validator !== null) {
            message.validator = object.validator;
        }
        else {
            message.validator = "";
        }
        if (object.orchestrator !== undefined && object.orchestrator !== null) {
            message.orchestrator = object.orchestrator;
        }
        else {
            message.orchestrator = "";
        }
        if (object.ethAddress !== undefined && object.ethAddress !== null) {
            message.ethAddress = object.ethAddress;
        }
        else {
            message.ethAddress = "";
        }
        return message;
    },
};
const baseMsgCreateOrchestratorAddress = {
    validator: "",
    orchestrator: "",
    ethAddress: "",
};
export const MsgCreateOrchestratorAddress = {
    encode(message, writer = Writer.create()) {
        if (message.validator !== "") {
            writer.uint32(18).string(message.validator);
        }
        if (message.orchestrator !== "") {
            writer.uint32(26).string(message.orchestrator);
        }
        if (message.ethAddress !== "") {
            writer.uint32(34).string(message.ethAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgCreateOrchestratorAddress,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.validator = reader.string();
                    break;
                case 3:
                    message.orchestrator = reader.string();
                    break;
                case 4:
                    message.ethAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseMsgCreateOrchestratorAddress,
        };
        if (object.validator !== undefined && object.validator !== null) {
            message.validator = String(object.validator);
        }
        else {
            message.validator = "";
        }
        if (object.orchestrator !== undefined && object.orchestrator !== null) {
            message.orchestrator = String(object.orchestrator);
        }
        else {
            message.orchestrator = "";
        }
        if (object.ethAddress !== undefined && object.ethAddress !== null) {
            message.ethAddress = String(object.ethAddress);
        }
        else {
            message.ethAddress = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.validator !== undefined && (obj.validator = message.validator);
        message.orchestrator !== undefined &&
            (obj.orchestrator = message.orchestrator);
        message.ethAddress !== undefined && (obj.ethAddress = message.ethAddress);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgCreateOrchestratorAddress,
        };
        if (object.validator !== undefined && object.validator !== null) {
            message.validator = object.validator;
        }
        else {
            message.validator = "";
        }
        if (object.orchestrator !== undefined && object.orchestrator !== null) {
            message.orchestrator = object.orchestrator;
        }
        else {
            message.orchestrator = "";
        }
        if (object.ethAddress !== undefined && object.ethAddress !== null) {
            message.ethAddress = object.ethAddress;
        }
        else {
            message.ethAddress = "";
        }
        return message;
    },
};
const baseMsgUpdateOrchestratorAddress = {
    creator: "",
    id: 0,
    validator: "",
    orchestrator: "",
    ethAddress: "",
};
export const MsgUpdateOrchestratorAddress = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        if (message.validator !== "") {
            writer.uint32(26).string(message.validator);
        }
        if (message.orchestrator !== "") {
            writer.uint32(34).string(message.orchestrator);
        }
        if (message.ethAddress !== "") {
            writer.uint32(42).string(message.ethAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgUpdateOrchestratorAddress,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.validator = reader.string();
                    break;
                case 4:
                    message.orchestrator = reader.string();
                    break;
                case 5:
                    message.ethAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseMsgUpdateOrchestratorAddress,
        };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        if (object.validator !== undefined && object.validator !== null) {
            message.validator = String(object.validator);
        }
        else {
            message.validator = "";
        }
        if (object.orchestrator !== undefined && object.orchestrator !== null) {
            message.orchestrator = String(object.orchestrator);
        }
        else {
            message.orchestrator = "";
        }
        if (object.ethAddress !== undefined && object.ethAddress !== null) {
            message.ethAddress = String(object.ethAddress);
        }
        else {
            message.ethAddress = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        message.validator !== undefined && (obj.validator = message.validator);
        message.orchestrator !== undefined &&
            (obj.orchestrator = message.orchestrator);
        message.ethAddress !== undefined && (obj.ethAddress = message.ethAddress);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgUpdateOrchestratorAddress,
        };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        if (object.validator !== undefined && object.validator !== null) {
            message.validator = object.validator;
        }
        else {
            message.validator = "";
        }
        if (object.orchestrator !== undefined && object.orchestrator !== null) {
            message.orchestrator = object.orchestrator;
        }
        else {
            message.orchestrator = "";
        }
        if (object.ethAddress !== undefined && object.ethAddress !== null) {
            message.ethAddress = object.ethAddress;
        }
        else {
            message.ethAddress = "";
        }
        return message;
    },
};
const baseMsgDeleteOrchestratorAddress = { creator: "", id: 0 };
export const MsgDeleteOrchestratorAddress = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgDeleteOrchestratorAddress,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseMsgDeleteOrchestratorAddress,
        };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgDeleteOrchestratorAddress,
        };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
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
