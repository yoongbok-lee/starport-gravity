/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Erc20Token } from "../gravity/attestation";
export const protobufPackage = "gravity.v1";
const baseOutgoingTxBatch = {
    batchNonce: 0,
    batchTimeout: 0,
    tokenContract: "",
    block: 0,
};
export const OutgoingTxBatch = {
    encode(message, writer = Writer.create()) {
        if (message.batchNonce !== 0) {
            writer.uint32(8).uint64(message.batchNonce);
        }
        if (message.batchTimeout !== 0) {
            writer.uint32(16).uint64(message.batchTimeout);
        }
        for (const v of message.transactions) {
            OutgoingTransferTx.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.tokenContract !== "") {
            writer.uint32(34).string(message.tokenContract);
        }
        if (message.block !== 0) {
            writer.uint32(40).uint64(message.block);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseOutgoingTxBatch };
        message.transactions = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.batchNonce = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.batchTimeout = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.transactions.push(OutgoingTransferTx.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.tokenContract = reader.string();
                    break;
                case 5:
                    message.block = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseOutgoingTxBatch };
        message.transactions = [];
        if (object.batchNonce !== undefined && object.batchNonce !== null) {
            message.batchNonce = Number(object.batchNonce);
        }
        else {
            message.batchNonce = 0;
        }
        if (object.batchTimeout !== undefined && object.batchTimeout !== null) {
            message.batchTimeout = Number(object.batchTimeout);
        }
        else {
            message.batchTimeout = 0;
        }
        if (object.transactions !== undefined && object.transactions !== null) {
            for (const e of object.transactions) {
                message.transactions.push(OutgoingTransferTx.fromJSON(e));
            }
        }
        if (object.tokenContract !== undefined && object.tokenContract !== null) {
            message.tokenContract = String(object.tokenContract);
        }
        else {
            message.tokenContract = "";
        }
        if (object.block !== undefined && object.block !== null) {
            message.block = Number(object.block);
        }
        else {
            message.block = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.batchNonce !== undefined && (obj.batchNonce = message.batchNonce);
        message.batchTimeout !== undefined &&
            (obj.batchTimeout = message.batchTimeout);
        if (message.transactions) {
            obj.transactions = message.transactions.map((e) => e ? OutgoingTransferTx.toJSON(e) : undefined);
        }
        else {
            obj.transactions = [];
        }
        message.tokenContract !== undefined &&
            (obj.tokenContract = message.tokenContract);
        message.block !== undefined && (obj.block = message.block);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseOutgoingTxBatch };
        message.transactions = [];
        if (object.batchNonce !== undefined && object.batchNonce !== null) {
            message.batchNonce = object.batchNonce;
        }
        else {
            message.batchNonce = 0;
        }
        if (object.batchTimeout !== undefined && object.batchTimeout !== null) {
            message.batchTimeout = object.batchTimeout;
        }
        else {
            message.batchTimeout = 0;
        }
        if (object.transactions !== undefined && object.transactions !== null) {
            for (const e of object.transactions) {
                message.transactions.push(OutgoingTransferTx.fromPartial(e));
            }
        }
        if (object.tokenContract !== undefined && object.tokenContract !== null) {
            message.tokenContract = object.tokenContract;
        }
        else {
            message.tokenContract = "";
        }
        if (object.block !== undefined && object.block !== null) {
            message.block = object.block;
        }
        else {
            message.block = 0;
        }
        return message;
    },
};
const baseOutgoingTransferTx = { id: 0, sender: "", destAddress: "" };
export const OutgoingTransferTx = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.sender !== "") {
            writer.uint32(18).string(message.sender);
        }
        if (message.destAddress !== "") {
            writer.uint32(26).string(message.destAddress);
        }
        if (message.erc20Token !== undefined) {
            Erc20Token.encode(message.erc20Token, writer.uint32(34).fork()).ldelim();
        }
        if (message.erc20Fee !== undefined) {
            Erc20Token.encode(message.erc20Fee, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseOutgoingTransferTx };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.sender = reader.string();
                    break;
                case 3:
                    message.destAddress = reader.string();
                    break;
                case 4:
                    message.erc20Token = Erc20Token.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.erc20Fee = Erc20Token.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseOutgoingTransferTx };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = String(object.sender);
        }
        else {
            message.sender = "";
        }
        if (object.destAddress !== undefined && object.destAddress !== null) {
            message.destAddress = String(object.destAddress);
        }
        else {
            message.destAddress = "";
        }
        if (object.erc20Token !== undefined && object.erc20Token !== null) {
            message.erc20Token = Erc20Token.fromJSON(object.erc20Token);
        }
        else {
            message.erc20Token = undefined;
        }
        if (object.erc20Fee !== undefined && object.erc20Fee !== null) {
            message.erc20Fee = Erc20Token.fromJSON(object.erc20Fee);
        }
        else {
            message.erc20Fee = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.sender !== undefined && (obj.sender = message.sender);
        message.destAddress !== undefined &&
            (obj.destAddress = message.destAddress);
        message.erc20Token !== undefined &&
            (obj.erc20Token = message.erc20Token
                ? Erc20Token.toJSON(message.erc20Token)
                : undefined);
        message.erc20Fee !== undefined &&
            (obj.erc20Fee = message.erc20Fee
                ? Erc20Token.toJSON(message.erc20Fee)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseOutgoingTransferTx };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        else {
            message.sender = "";
        }
        if (object.destAddress !== undefined && object.destAddress !== null) {
            message.destAddress = object.destAddress;
        }
        else {
            message.destAddress = "";
        }
        if (object.erc20Token !== undefined && object.erc20Token !== null) {
            message.erc20Token = Erc20Token.fromPartial(object.erc20Token);
        }
        else {
            message.erc20Token = undefined;
        }
        if (object.erc20Fee !== undefined && object.erc20Fee !== null) {
            message.erc20Fee = Erc20Token.fromPartial(object.erc20Fee);
        }
        else {
            message.erc20Fee = undefined;
        }
        return message;
    },
};
const baseOutgoingLogicCall = {
    logicContractAddress: "",
    timeout: 0,
    invalidationNonce: 0,
};
export const OutgoingLogicCall = {
    encode(message, writer = Writer.create()) {
        for (const v of message.transfers) {
            Erc20Token.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.fees) {
            Erc20Token.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.logicContractAddress !== "") {
            writer.uint32(26).string(message.logicContractAddress);
        }
        if (message.payload.length !== 0) {
            writer.uint32(34).bytes(message.payload);
        }
        if (message.timeout !== 0) {
            writer.uint32(40).uint64(message.timeout);
        }
        if (message.invalidationId.length !== 0) {
            writer.uint32(50).bytes(message.invalidationId);
        }
        if (message.invalidationNonce !== 0) {
            writer.uint32(56).uint64(message.invalidationNonce);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseOutgoingLogicCall };
        message.transfers = [];
        message.fees = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.transfers.push(Erc20Token.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.fees.push(Erc20Token.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.logicContractAddress = reader.string();
                    break;
                case 4:
                    message.payload = reader.bytes();
                    break;
                case 5:
                    message.timeout = longToNumber(reader.uint64());
                    break;
                case 6:
                    message.invalidationId = reader.bytes();
                    break;
                case 7:
                    message.invalidationNonce = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseOutgoingLogicCall };
        message.transfers = [];
        message.fees = [];
        if (object.transfers !== undefined && object.transfers !== null) {
            for (const e of object.transfers) {
                message.transfers.push(Erc20Token.fromJSON(e));
            }
        }
        if (object.fees !== undefined && object.fees !== null) {
            for (const e of object.fees) {
                message.fees.push(Erc20Token.fromJSON(e));
            }
        }
        if (object.logicContractAddress !== undefined &&
            object.logicContractAddress !== null) {
            message.logicContractAddress = String(object.logicContractAddress);
        }
        else {
            message.logicContractAddress = "";
        }
        if (object.payload !== undefined && object.payload !== null) {
            message.payload = bytesFromBase64(object.payload);
        }
        if (object.timeout !== undefined && object.timeout !== null) {
            message.timeout = Number(object.timeout);
        }
        else {
            message.timeout = 0;
        }
        if (object.invalidationId !== undefined && object.invalidationId !== null) {
            message.invalidationId = bytesFromBase64(object.invalidationId);
        }
        if (object.invalidationNonce !== undefined &&
            object.invalidationNonce !== null) {
            message.invalidationNonce = Number(object.invalidationNonce);
        }
        else {
            message.invalidationNonce = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.transfers) {
            obj.transfers = message.transfers.map((e) => e ? Erc20Token.toJSON(e) : undefined);
        }
        else {
            obj.transfers = [];
        }
        if (message.fees) {
            obj.fees = message.fees.map((e) => e ? Erc20Token.toJSON(e) : undefined);
        }
        else {
            obj.fees = [];
        }
        message.logicContractAddress !== undefined &&
            (obj.logicContractAddress = message.logicContractAddress);
        message.payload !== undefined &&
            (obj.payload = base64FromBytes(message.payload !== undefined ? message.payload : new Uint8Array()));
        message.timeout !== undefined && (obj.timeout = message.timeout);
        message.invalidationId !== undefined &&
            (obj.invalidationId = base64FromBytes(message.invalidationId !== undefined
                ? message.invalidationId
                : new Uint8Array()));
        message.invalidationNonce !== undefined &&
            (obj.invalidationNonce = message.invalidationNonce);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseOutgoingLogicCall };
        message.transfers = [];
        message.fees = [];
        if (object.transfers !== undefined && object.transfers !== null) {
            for (const e of object.transfers) {
                message.transfers.push(Erc20Token.fromPartial(e));
            }
        }
        if (object.fees !== undefined && object.fees !== null) {
            for (const e of object.fees) {
                message.fees.push(Erc20Token.fromPartial(e));
            }
        }
        if (object.logicContractAddress !== undefined &&
            object.logicContractAddress !== null) {
            message.logicContractAddress = object.logicContractAddress;
        }
        else {
            message.logicContractAddress = "";
        }
        if (object.payload !== undefined && object.payload !== null) {
            message.payload = object.payload;
        }
        else {
            message.payload = new Uint8Array();
        }
        if (object.timeout !== undefined && object.timeout !== null) {
            message.timeout = object.timeout;
        }
        else {
            message.timeout = 0;
        }
        if (object.invalidationId !== undefined && object.invalidationId !== null) {
            message.invalidationId = object.invalidationId;
        }
        else {
            message.invalidationId = new Uint8Array();
        }
        if (object.invalidationNonce !== undefined &&
            object.invalidationNonce !== null) {
            message.invalidationNonce = object.invalidationNonce;
        }
        else {
            message.invalidationNonce = 0;
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
const atob = globalThis.atob ||
    ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64) {
    const bin = atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
        arr[i] = bin.charCodeAt(i);
    }
    return arr;
}
const btoa = globalThis.btoa ||
    ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr) {
    const bin = [];
    for (let i = 0; i < arr.byteLength; ++i) {
        bin.push(String.fromCharCode(arr[i]));
    }
    return btoa(bin.join(""));
}
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
