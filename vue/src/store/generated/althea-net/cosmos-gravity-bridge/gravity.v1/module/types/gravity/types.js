/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "gravity.v1";
const baseBridgeValidator = { power: 0, ethereumAddress: "" };
export const BridgeValidator = {
    encode(message, writer = Writer.create()) {
        if (message.power !== 0) {
            writer.uint32(8).uint64(message.power);
        }
        if (message.ethereumAddress !== "") {
            writer.uint32(18).string(message.ethereumAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBridgeValidator };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.power = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.ethereumAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseBridgeValidator };
        if (object.power !== undefined && object.power !== null) {
            message.power = Number(object.power);
        }
        else {
            message.power = 0;
        }
        if (object.ethereumAddress !== undefined &&
            object.ethereumAddress !== null) {
            message.ethereumAddress = String(object.ethereumAddress);
        }
        else {
            message.ethereumAddress = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.power !== undefined && (obj.power = message.power);
        message.ethereumAddress !== undefined &&
            (obj.ethereumAddress = message.ethereumAddress);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseBridgeValidator };
        if (object.power !== undefined && object.power !== null) {
            message.power = object.power;
        }
        else {
            message.power = 0;
        }
        if (object.ethereumAddress !== undefined &&
            object.ethereumAddress !== null) {
            message.ethereumAddress = object.ethereumAddress;
        }
        else {
            message.ethereumAddress = "";
        }
        return message;
    },
};
const baseValset = { nonce: 0, height: 0 };
export const Valset = {
    encode(message, writer = Writer.create()) {
        if (message.nonce !== 0) {
            writer.uint32(8).uint64(message.nonce);
        }
        for (const v of message.members) {
            BridgeValidator.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.height !== 0) {
            writer.uint32(24).uint64(message.height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseValset };
        message.members = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nonce = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.members.push(BridgeValidator.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.height = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseValset };
        message.members = [];
        if (object.nonce !== undefined && object.nonce !== null) {
            message.nonce = Number(object.nonce);
        }
        else {
            message.nonce = 0;
        }
        if (object.members !== undefined && object.members !== null) {
            for (const e of object.members) {
                message.members.push(BridgeValidator.fromJSON(e));
            }
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = Number(object.height);
        }
        else {
            message.height = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.nonce !== undefined && (obj.nonce = message.nonce);
        if (message.members) {
            obj.members = message.members.map((e) => e ? BridgeValidator.toJSON(e) : undefined);
        }
        else {
            obj.members = [];
        }
        message.height !== undefined && (obj.height = message.height);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseValset };
        message.members = [];
        if (object.nonce !== undefined && object.nonce !== null) {
            message.nonce = object.nonce;
        }
        else {
            message.nonce = 0;
        }
        if (object.members !== undefined && object.members !== null) {
            for (const e of object.members) {
                message.members.push(BridgeValidator.fromPartial(e));
            }
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = object.height;
        }
        else {
            message.height = 0;
        }
        return message;
    },
};
const baseLastObservedEthereumBlockHeight = {
    cosmosBlockHeight: 0,
    ethereumBlockHeight: 0,
};
export const LastObservedEthereumBlockHeight = {
    encode(message, writer = Writer.create()) {
        if (message.cosmosBlockHeight !== 0) {
            writer.uint32(8).uint64(message.cosmosBlockHeight);
        }
        if (message.ethereumBlockHeight !== 0) {
            writer.uint32(16).uint64(message.ethereumBlockHeight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseLastObservedEthereumBlockHeight,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cosmosBlockHeight = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.ethereumBlockHeight = longToNumber(reader.uint64());
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
            ...baseLastObservedEthereumBlockHeight,
        };
        if (object.cosmosBlockHeight !== undefined &&
            object.cosmosBlockHeight !== null) {
            message.cosmosBlockHeight = Number(object.cosmosBlockHeight);
        }
        else {
            message.cosmosBlockHeight = 0;
        }
        if (object.ethereumBlockHeight !== undefined &&
            object.ethereumBlockHeight !== null) {
            message.ethereumBlockHeight = Number(object.ethereumBlockHeight);
        }
        else {
            message.ethereumBlockHeight = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.cosmosBlockHeight !== undefined &&
            (obj.cosmosBlockHeight = message.cosmosBlockHeight);
        message.ethereumBlockHeight !== undefined &&
            (obj.ethereumBlockHeight = message.ethereumBlockHeight);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseLastObservedEthereumBlockHeight,
        };
        if (object.cosmosBlockHeight !== undefined &&
            object.cosmosBlockHeight !== null) {
            message.cosmosBlockHeight = object.cosmosBlockHeight;
        }
        else {
            message.cosmosBlockHeight = 0;
        }
        if (object.ethereumBlockHeight !== undefined &&
            object.ethereumBlockHeight !== null) {
            message.ethereumBlockHeight = object.ethereumBlockHeight;
        }
        else {
            message.ethereumBlockHeight = 0;
        }
        return message;
    },
};
const baseErc20ToDenom = { erc20: "", denom: "" };
export const Erc20ToDenom = {
    encode(message, writer = Writer.create()) {
        if (message.erc20 !== "") {
            writer.uint32(10).string(message.erc20);
        }
        if (message.denom !== "") {
            writer.uint32(18).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseErc20ToDenom };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.erc20 = reader.string();
                    break;
                case 2:
                    message.denom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseErc20ToDenom };
        if (object.erc20 !== undefined && object.erc20 !== null) {
            message.erc20 = String(object.erc20);
        }
        else {
            message.erc20 = "";
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = String(object.denom);
        }
        else {
            message.denom = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.erc20 !== undefined && (obj.erc20 = message.erc20);
        message.denom !== undefined && (obj.denom = message.denom);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseErc20ToDenom };
        if (object.erc20 !== undefined && object.erc20 !== null) {
            message.erc20 = object.erc20;
        }
        else {
            message.erc20 = "";
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        else {
            message.denom = "";
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
