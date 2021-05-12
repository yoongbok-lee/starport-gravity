/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Coin } from "../cosmos/base/v1beta1/coin";
import { BridgeValidator } from "../gravity/types";
export const protobufPackage = "gravity.v1";
const baseMsgSetOrchestratorAddress = {
    validator: "",
    orchestrator: "",
    ethAddress: "",
};
export const MsgSetOrchestratorAddress = {
    encode(message, writer = Writer.create()) {
        if (message.validator !== "") {
            writer.uint32(10).string(message.validator);
        }
        if (message.orchestrator !== "") {
            writer.uint32(18).string(message.orchestrator);
        }
        if (message.ethAddress !== "") {
            writer.uint32(26).string(message.ethAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgSetOrchestratorAddress,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator = reader.string();
                    break;
                case 2:
                    message.orchestrator = reader.string();
                    break;
                case 3:
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
            ...baseMsgSetOrchestratorAddress,
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
            ...baseMsgSetOrchestratorAddress,
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
const baseMsgSetOrchestratorAddressResponse = {};
export const MsgSetOrchestratorAddressResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgSetOrchestratorAddressResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = {
            ...baseMsgSetOrchestratorAddressResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgSetOrchestratorAddressResponse,
        };
        return message;
    },
};
const baseMsgValsetConfirm = {
    nonce: 0,
    orchestrator: "",
    ethAddress: "",
    signature: "",
};
export const MsgValsetConfirm = {
    encode(message, writer = Writer.create()) {
        if (message.nonce !== 0) {
            writer.uint32(8).uint64(message.nonce);
        }
        if (message.orchestrator !== "") {
            writer.uint32(18).string(message.orchestrator);
        }
        if (message.ethAddress !== "") {
            writer.uint32(26).string(message.ethAddress);
        }
        if (message.signature !== "") {
            writer.uint32(34).string(message.signature);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgValsetConfirm };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nonce = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.orchestrator = reader.string();
                    break;
                case 3:
                    message.ethAddress = reader.string();
                    break;
                case 4:
                    message.signature = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgValsetConfirm };
        if (object.nonce !== undefined && object.nonce !== null) {
            message.nonce = Number(object.nonce);
        }
        else {
            message.nonce = 0;
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
        if (object.signature !== undefined && object.signature !== null) {
            message.signature = String(object.signature);
        }
        else {
            message.signature = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.nonce !== undefined && (obj.nonce = message.nonce);
        message.orchestrator !== undefined &&
            (obj.orchestrator = message.orchestrator);
        message.ethAddress !== undefined && (obj.ethAddress = message.ethAddress);
        message.signature !== undefined && (obj.signature = message.signature);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgValsetConfirm };
        if (object.nonce !== undefined && object.nonce !== null) {
            message.nonce = object.nonce;
        }
        else {
            message.nonce = 0;
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
        if (object.signature !== undefined && object.signature !== null) {
            message.signature = object.signature;
        }
        else {
            message.signature = "";
        }
        return message;
    },
};
const baseMsgValsetConfirmResponse = {};
export const MsgValsetConfirmResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgValsetConfirmResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = {
            ...baseMsgValsetConfirmResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgValsetConfirmResponse,
        };
        return message;
    },
};
const baseMsgSendToEth = { sender: "", ethDest: "" };
export const MsgSendToEth = {
    encode(message, writer = Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.ethDest !== "") {
            writer.uint32(18).string(message.ethDest);
        }
        if (message.amount !== undefined) {
            Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
        }
        if (message.bridgeFee !== undefined) {
            Coin.encode(message.bridgeFee, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgSendToEth };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.ethDest = reader.string();
                    break;
                case 3:
                    message.amount = Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.bridgeFee = Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgSendToEth };
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = String(object.sender);
        }
        else {
            message.sender = "";
        }
        if (object.ethDest !== undefined && object.ethDest !== null) {
            message.ethDest = String(object.ethDest);
        }
        else {
            message.ethDest = "";
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = Coin.fromJSON(object.amount);
        }
        else {
            message.amount = undefined;
        }
        if (object.bridgeFee !== undefined && object.bridgeFee !== null) {
            message.bridgeFee = Coin.fromJSON(object.bridgeFee);
        }
        else {
            message.bridgeFee = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.ethDest !== undefined && (obj.ethDest = message.ethDest);
        message.amount !== undefined &&
            (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
        message.bridgeFee !== undefined &&
            (obj.bridgeFee = message.bridgeFee
                ? Coin.toJSON(message.bridgeFee)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgSendToEth };
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        else {
            message.sender = "";
        }
        if (object.ethDest !== undefined && object.ethDest !== null) {
            message.ethDest = object.ethDest;
        }
        else {
            message.ethDest = "";
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = Coin.fromPartial(object.amount);
        }
        else {
            message.amount = undefined;
        }
        if (object.bridgeFee !== undefined && object.bridgeFee !== null) {
            message.bridgeFee = Coin.fromPartial(object.bridgeFee);
        }
        else {
            message.bridgeFee = undefined;
        }
        return message;
    },
};
const baseMsgSendToEthResponse = {};
export const MsgSendToEthResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgSendToEthResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgSendToEthResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgSendToEthResponse };
        return message;
    },
};
const baseMsgRequestBatch = { sender: "", denom: "" };
export const MsgRequestBatch = {
    encode(message, writer = Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.denom !== "") {
            writer.uint32(18).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgRequestBatch };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
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
        const message = { ...baseMsgRequestBatch };
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = String(object.sender);
        }
        else {
            message.sender = "";
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
        message.sender !== undefined && (obj.sender = message.sender);
        message.denom !== undefined && (obj.denom = message.denom);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgRequestBatch };
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        else {
            message.sender = "";
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
const baseMsgRequestBatchResponse = {};
export const MsgRequestBatchResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgRequestBatchResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = {
            ...baseMsgRequestBatchResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgRequestBatchResponse,
        };
        return message;
    },
};
const baseMsgConfirmBatch = {
    nonce: 0,
    tokenContract: "",
    ethSigner: "",
    orchestrator: "",
    signature: "",
};
export const MsgConfirmBatch = {
    encode(message, writer = Writer.create()) {
        if (message.nonce !== 0) {
            writer.uint32(8).uint64(message.nonce);
        }
        if (message.tokenContract !== "") {
            writer.uint32(18).string(message.tokenContract);
        }
        if (message.ethSigner !== "") {
            writer.uint32(26).string(message.ethSigner);
        }
        if (message.orchestrator !== "") {
            writer.uint32(34).string(message.orchestrator);
        }
        if (message.signature !== "") {
            writer.uint32(42).string(message.signature);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgConfirmBatch };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nonce = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.tokenContract = reader.string();
                    break;
                case 3:
                    message.ethSigner = reader.string();
                    break;
                case 4:
                    message.orchestrator = reader.string();
                    break;
                case 5:
                    message.signature = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgConfirmBatch };
        if (object.nonce !== undefined && object.nonce !== null) {
            message.nonce = Number(object.nonce);
        }
        else {
            message.nonce = 0;
        }
        if (object.tokenContract !== undefined && object.tokenContract !== null) {
            message.tokenContract = String(object.tokenContract);
        }
        else {
            message.tokenContract = "";
        }
        if (object.ethSigner !== undefined && object.ethSigner !== null) {
            message.ethSigner = String(object.ethSigner);
        }
        else {
            message.ethSigner = "";
        }
        if (object.orchestrator !== undefined && object.orchestrator !== null) {
            message.orchestrator = String(object.orchestrator);
        }
        else {
            message.orchestrator = "";
        }
        if (object.signature !== undefined && object.signature !== null) {
            message.signature = String(object.signature);
        }
        else {
            message.signature = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.nonce !== undefined && (obj.nonce = message.nonce);
        message.tokenContract !== undefined &&
            (obj.tokenContract = message.tokenContract);
        message.ethSigner !== undefined && (obj.ethSigner = message.ethSigner);
        message.orchestrator !== undefined &&
            (obj.orchestrator = message.orchestrator);
        message.signature !== undefined && (obj.signature = message.signature);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgConfirmBatch };
        if (object.nonce !== undefined && object.nonce !== null) {
            message.nonce = object.nonce;
        }
        else {
            message.nonce = 0;
        }
        if (object.tokenContract !== undefined && object.tokenContract !== null) {
            message.tokenContract = object.tokenContract;
        }
        else {
            message.tokenContract = "";
        }
        if (object.ethSigner !== undefined && object.ethSigner !== null) {
            message.ethSigner = object.ethSigner;
        }
        else {
            message.ethSigner = "";
        }
        if (object.orchestrator !== undefined && object.orchestrator !== null) {
            message.orchestrator = object.orchestrator;
        }
        else {
            message.orchestrator = "";
        }
        if (object.signature !== undefined && object.signature !== null) {
            message.signature = object.signature;
        }
        else {
            message.signature = "";
        }
        return message;
    },
};
const baseMsgConfirmBatchResponse = {};
export const MsgConfirmBatchResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgConfirmBatchResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = {
            ...baseMsgConfirmBatchResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgConfirmBatchResponse,
        };
        return message;
    },
};
const baseMsgConfirmLogicCall = {
    invalidationId: "",
    invalidationNonce: 0,
    ethSigner: "",
    orchestrator: "",
    signature: "",
};
export const MsgConfirmLogicCall = {
    encode(message, writer = Writer.create()) {
        if (message.invalidationId !== "") {
            writer.uint32(10).string(message.invalidationId);
        }
        if (message.invalidationNonce !== 0) {
            writer.uint32(16).uint64(message.invalidationNonce);
        }
        if (message.ethSigner !== "") {
            writer.uint32(26).string(message.ethSigner);
        }
        if (message.orchestrator !== "") {
            writer.uint32(34).string(message.orchestrator);
        }
        if (message.signature !== "") {
            writer.uint32(42).string(message.signature);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgConfirmLogicCall };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.invalidationId = reader.string();
                    break;
                case 2:
                    message.invalidationNonce = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.ethSigner = reader.string();
                    break;
                case 4:
                    message.orchestrator = reader.string();
                    break;
                case 5:
                    message.signature = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgConfirmLogicCall };
        if (object.invalidationId !== undefined && object.invalidationId !== null) {
            message.invalidationId = String(object.invalidationId);
        }
        else {
            message.invalidationId = "";
        }
        if (object.invalidationNonce !== undefined &&
            object.invalidationNonce !== null) {
            message.invalidationNonce = Number(object.invalidationNonce);
        }
        else {
            message.invalidationNonce = 0;
        }
        if (object.ethSigner !== undefined && object.ethSigner !== null) {
            message.ethSigner = String(object.ethSigner);
        }
        else {
            message.ethSigner = "";
        }
        if (object.orchestrator !== undefined && object.orchestrator !== null) {
            message.orchestrator = String(object.orchestrator);
        }
        else {
            message.orchestrator = "";
        }
        if (object.signature !== undefined && object.signature !== null) {
            message.signature = String(object.signature);
        }
        else {
            message.signature = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.invalidationId !== undefined &&
            (obj.invalidationId = message.invalidationId);
        message.invalidationNonce !== undefined &&
            (obj.invalidationNonce = message.invalidationNonce);
        message.ethSigner !== undefined && (obj.ethSigner = message.ethSigner);
        message.orchestrator !== undefined &&
            (obj.orchestrator = message.orchestrator);
        message.signature !== undefined && (obj.signature = message.signature);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgConfirmLogicCall };
        if (object.invalidationId !== undefined && object.invalidationId !== null) {
            message.invalidationId = object.invalidationId;
        }
        else {
            message.invalidationId = "";
        }
        if (object.invalidationNonce !== undefined &&
            object.invalidationNonce !== null) {
            message.invalidationNonce = object.invalidationNonce;
        }
        else {
            message.invalidationNonce = 0;
        }
        if (object.ethSigner !== undefined && object.ethSigner !== null) {
            message.ethSigner = object.ethSigner;
        }
        else {
            message.ethSigner = "";
        }
        if (object.orchestrator !== undefined && object.orchestrator !== null) {
            message.orchestrator = object.orchestrator;
        }
        else {
            message.orchestrator = "";
        }
        if (object.signature !== undefined && object.signature !== null) {
            message.signature = object.signature;
        }
        else {
            message.signature = "";
        }
        return message;
    },
};
const baseMsgConfirmLogicCallResponse = {};
export const MsgConfirmLogicCallResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgConfirmLogicCallResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = {
            ...baseMsgConfirmLogicCallResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgConfirmLogicCallResponse,
        };
        return message;
    },
};
const baseMsgDepositClaim = {
    eventNonce: 0,
    blockHeight: 0,
    tokenContract: "",
    amount: "",
    ethereumSender: "",
    cosmosReceiver: "",
    orchestrator: "",
};
export const MsgDepositClaim = {
    encode(message, writer = Writer.create()) {
        if (message.eventNonce !== 0) {
            writer.uint32(8).uint64(message.eventNonce);
        }
        if (message.blockHeight !== 0) {
            writer.uint32(16).uint64(message.blockHeight);
        }
        if (message.tokenContract !== "") {
            writer.uint32(26).string(message.tokenContract);
        }
        if (message.amount !== "") {
            writer.uint32(34).string(message.amount);
        }
        if (message.ethereumSender !== "") {
            writer.uint32(42).string(message.ethereumSender);
        }
        if (message.cosmosReceiver !== "") {
            writer.uint32(50).string(message.cosmosReceiver);
        }
        if (message.orchestrator !== "") {
            writer.uint32(58).string(message.orchestrator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDepositClaim };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.eventNonce = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.blockHeight = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.tokenContract = reader.string();
                    break;
                case 4:
                    message.amount = reader.string();
                    break;
                case 5:
                    message.ethereumSender = reader.string();
                    break;
                case 6:
                    message.cosmosReceiver = reader.string();
                    break;
                case 7:
                    message.orchestrator = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgDepositClaim };
        if (object.eventNonce !== undefined && object.eventNonce !== null) {
            message.eventNonce = Number(object.eventNonce);
        }
        else {
            message.eventNonce = 0;
        }
        if (object.blockHeight !== undefined && object.blockHeight !== null) {
            message.blockHeight = Number(object.blockHeight);
        }
        else {
            message.blockHeight = 0;
        }
        if (object.tokenContract !== undefined && object.tokenContract !== null) {
            message.tokenContract = String(object.tokenContract);
        }
        else {
            message.tokenContract = "";
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = String(object.amount);
        }
        else {
            message.amount = "";
        }
        if (object.ethereumSender !== undefined && object.ethereumSender !== null) {
            message.ethereumSender = String(object.ethereumSender);
        }
        else {
            message.ethereumSender = "";
        }
        if (object.cosmosReceiver !== undefined && object.cosmosReceiver !== null) {
            message.cosmosReceiver = String(object.cosmosReceiver);
        }
        else {
            message.cosmosReceiver = "";
        }
        if (object.orchestrator !== undefined && object.orchestrator !== null) {
            message.orchestrator = String(object.orchestrator);
        }
        else {
            message.orchestrator = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.eventNonce !== undefined && (obj.eventNonce = message.eventNonce);
        message.blockHeight !== undefined &&
            (obj.blockHeight = message.blockHeight);
        message.tokenContract !== undefined &&
            (obj.tokenContract = message.tokenContract);
        message.amount !== undefined && (obj.amount = message.amount);
        message.ethereumSender !== undefined &&
            (obj.ethereumSender = message.ethereumSender);
        message.cosmosReceiver !== undefined &&
            (obj.cosmosReceiver = message.cosmosReceiver);
        message.orchestrator !== undefined &&
            (obj.orchestrator = message.orchestrator);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgDepositClaim };
        if (object.eventNonce !== undefined && object.eventNonce !== null) {
            message.eventNonce = object.eventNonce;
        }
        else {
            message.eventNonce = 0;
        }
        if (object.blockHeight !== undefined && object.blockHeight !== null) {
            message.blockHeight = object.blockHeight;
        }
        else {
            message.blockHeight = 0;
        }
        if (object.tokenContract !== undefined && object.tokenContract !== null) {
            message.tokenContract = object.tokenContract;
        }
        else {
            message.tokenContract = "";
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        else {
            message.amount = "";
        }
        if (object.ethereumSender !== undefined && object.ethereumSender !== null) {
            message.ethereumSender = object.ethereumSender;
        }
        else {
            message.ethereumSender = "";
        }
        if (object.cosmosReceiver !== undefined && object.cosmosReceiver !== null) {
            message.cosmosReceiver = object.cosmosReceiver;
        }
        else {
            message.cosmosReceiver = "";
        }
        if (object.orchestrator !== undefined && object.orchestrator !== null) {
            message.orchestrator = object.orchestrator;
        }
        else {
            message.orchestrator = "";
        }
        return message;
    },
};
const baseMsgDepositClaimResponse = {};
export const MsgDepositClaimResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgDepositClaimResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = {
            ...baseMsgDepositClaimResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgDepositClaimResponse,
        };
        return message;
    },
};
const baseMsgWithdrawClaim = {
    eventNonce: 0,
    blockHeight: 0,
    batchNonce: 0,
    tokenContract: "",
    orchestrator: "",
};
export const MsgWithdrawClaim = {
    encode(message, writer = Writer.create()) {
        if (message.eventNonce !== 0) {
            writer.uint32(8).uint64(message.eventNonce);
        }
        if (message.blockHeight !== 0) {
            writer.uint32(16).uint64(message.blockHeight);
        }
        if (message.batchNonce !== 0) {
            writer.uint32(24).uint64(message.batchNonce);
        }
        if (message.tokenContract !== "") {
            writer.uint32(34).string(message.tokenContract);
        }
        if (message.orchestrator !== "") {
            writer.uint32(42).string(message.orchestrator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgWithdrawClaim };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.eventNonce = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.blockHeight = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.batchNonce = longToNumber(reader.uint64());
                    break;
                case 4:
                    message.tokenContract = reader.string();
                    break;
                case 5:
                    message.orchestrator = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgWithdrawClaim };
        if (object.eventNonce !== undefined && object.eventNonce !== null) {
            message.eventNonce = Number(object.eventNonce);
        }
        else {
            message.eventNonce = 0;
        }
        if (object.blockHeight !== undefined && object.blockHeight !== null) {
            message.blockHeight = Number(object.blockHeight);
        }
        else {
            message.blockHeight = 0;
        }
        if (object.batchNonce !== undefined && object.batchNonce !== null) {
            message.batchNonce = Number(object.batchNonce);
        }
        else {
            message.batchNonce = 0;
        }
        if (object.tokenContract !== undefined && object.tokenContract !== null) {
            message.tokenContract = String(object.tokenContract);
        }
        else {
            message.tokenContract = "";
        }
        if (object.orchestrator !== undefined && object.orchestrator !== null) {
            message.orchestrator = String(object.orchestrator);
        }
        else {
            message.orchestrator = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.eventNonce !== undefined && (obj.eventNonce = message.eventNonce);
        message.blockHeight !== undefined &&
            (obj.blockHeight = message.blockHeight);
        message.batchNonce !== undefined && (obj.batchNonce = message.batchNonce);
        message.tokenContract !== undefined &&
            (obj.tokenContract = message.tokenContract);
        message.orchestrator !== undefined &&
            (obj.orchestrator = message.orchestrator);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgWithdrawClaim };
        if (object.eventNonce !== undefined && object.eventNonce !== null) {
            message.eventNonce = object.eventNonce;
        }
        else {
            message.eventNonce = 0;
        }
        if (object.blockHeight !== undefined && object.blockHeight !== null) {
            message.blockHeight = object.blockHeight;
        }
        else {
            message.blockHeight = 0;
        }
        if (object.batchNonce !== undefined && object.batchNonce !== null) {
            message.batchNonce = object.batchNonce;
        }
        else {
            message.batchNonce = 0;
        }
        if (object.tokenContract !== undefined && object.tokenContract !== null) {
            message.tokenContract = object.tokenContract;
        }
        else {
            message.tokenContract = "";
        }
        if (object.orchestrator !== undefined && object.orchestrator !== null) {
            message.orchestrator = object.orchestrator;
        }
        else {
            message.orchestrator = "";
        }
        return message;
    },
};
const baseMsgWithdrawClaimResponse = {};
export const MsgWithdrawClaimResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgWithdrawClaimResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = {
            ...baseMsgWithdrawClaimResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgWithdrawClaimResponse,
        };
        return message;
    },
};
const baseMsgErc20DeployedClaim = {
    eventNonce: 0,
    blockHeight: 0,
    cosmosDenom: "",
    tokenContract: "",
    name: "",
    symbol: "",
    decimals: 0,
    orchestrator: "",
};
export const MsgErc20DeployedClaim = {
    encode(message, writer = Writer.create()) {
        if (message.eventNonce !== 0) {
            writer.uint32(8).uint64(message.eventNonce);
        }
        if (message.blockHeight !== 0) {
            writer.uint32(16).uint64(message.blockHeight);
        }
        if (message.cosmosDenom !== "") {
            writer.uint32(26).string(message.cosmosDenom);
        }
        if (message.tokenContract !== "") {
            writer.uint32(34).string(message.tokenContract);
        }
        if (message.name !== "") {
            writer.uint32(42).string(message.name);
        }
        if (message.symbol !== "") {
            writer.uint32(50).string(message.symbol);
        }
        if (message.decimals !== 0) {
            writer.uint32(56).uint64(message.decimals);
        }
        if (message.orchestrator !== "") {
            writer.uint32(66).string(message.orchestrator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgErc20DeployedClaim };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.eventNonce = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.blockHeight = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.cosmosDenom = reader.string();
                    break;
                case 4:
                    message.tokenContract = reader.string();
                    break;
                case 5:
                    message.name = reader.string();
                    break;
                case 6:
                    message.symbol = reader.string();
                    break;
                case 7:
                    message.decimals = longToNumber(reader.uint64());
                    break;
                case 8:
                    message.orchestrator = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgErc20DeployedClaim };
        if (object.eventNonce !== undefined && object.eventNonce !== null) {
            message.eventNonce = Number(object.eventNonce);
        }
        else {
            message.eventNonce = 0;
        }
        if (object.blockHeight !== undefined && object.blockHeight !== null) {
            message.blockHeight = Number(object.blockHeight);
        }
        else {
            message.blockHeight = 0;
        }
        if (object.cosmosDenom !== undefined && object.cosmosDenom !== null) {
            message.cosmosDenom = String(object.cosmosDenom);
        }
        else {
            message.cosmosDenom = "";
        }
        if (object.tokenContract !== undefined && object.tokenContract !== null) {
            message.tokenContract = String(object.tokenContract);
        }
        else {
            message.tokenContract = "";
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = "";
        }
        if (object.symbol !== undefined && object.symbol !== null) {
            message.symbol = String(object.symbol);
        }
        else {
            message.symbol = "";
        }
        if (object.decimals !== undefined && object.decimals !== null) {
            message.decimals = Number(object.decimals);
        }
        else {
            message.decimals = 0;
        }
        if (object.orchestrator !== undefined && object.orchestrator !== null) {
            message.orchestrator = String(object.orchestrator);
        }
        else {
            message.orchestrator = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.eventNonce !== undefined && (obj.eventNonce = message.eventNonce);
        message.blockHeight !== undefined &&
            (obj.blockHeight = message.blockHeight);
        message.cosmosDenom !== undefined &&
            (obj.cosmosDenom = message.cosmosDenom);
        message.tokenContract !== undefined &&
            (obj.tokenContract = message.tokenContract);
        message.name !== undefined && (obj.name = message.name);
        message.symbol !== undefined && (obj.symbol = message.symbol);
        message.decimals !== undefined && (obj.decimals = message.decimals);
        message.orchestrator !== undefined &&
            (obj.orchestrator = message.orchestrator);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgErc20DeployedClaim };
        if (object.eventNonce !== undefined && object.eventNonce !== null) {
            message.eventNonce = object.eventNonce;
        }
        else {
            message.eventNonce = 0;
        }
        if (object.blockHeight !== undefined && object.blockHeight !== null) {
            message.blockHeight = object.blockHeight;
        }
        else {
            message.blockHeight = 0;
        }
        if (object.cosmosDenom !== undefined && object.cosmosDenom !== null) {
            message.cosmosDenom = object.cosmosDenom;
        }
        else {
            message.cosmosDenom = "";
        }
        if (object.tokenContract !== undefined && object.tokenContract !== null) {
            message.tokenContract = object.tokenContract;
        }
        else {
            message.tokenContract = "";
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = "";
        }
        if (object.symbol !== undefined && object.symbol !== null) {
            message.symbol = object.symbol;
        }
        else {
            message.symbol = "";
        }
        if (object.decimals !== undefined && object.decimals !== null) {
            message.decimals = object.decimals;
        }
        else {
            message.decimals = 0;
        }
        if (object.orchestrator !== undefined && object.orchestrator !== null) {
            message.orchestrator = object.orchestrator;
        }
        else {
            message.orchestrator = "";
        }
        return message;
    },
};
const baseMsgErc20DeployedClaimResponse = {};
export const MsgErc20DeployedClaimResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgErc20DeployedClaimResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = {
            ...baseMsgErc20DeployedClaimResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgErc20DeployedClaimResponse,
        };
        return message;
    },
};
const baseMsgLogicCallExecutedClaim = {
    eventNonce: 0,
    blockHeight: 0,
    invalidationNonce: 0,
    orchestrator: "",
};
export const MsgLogicCallExecutedClaim = {
    encode(message, writer = Writer.create()) {
        if (message.eventNonce !== 0) {
            writer.uint32(8).uint64(message.eventNonce);
        }
        if (message.blockHeight !== 0) {
            writer.uint32(16).uint64(message.blockHeight);
        }
        if (message.invalidationId.length !== 0) {
            writer.uint32(26).bytes(message.invalidationId);
        }
        if (message.invalidationNonce !== 0) {
            writer.uint32(32).uint64(message.invalidationNonce);
        }
        if (message.orchestrator !== "") {
            writer.uint32(42).string(message.orchestrator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgLogicCallExecutedClaim,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.eventNonce = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.blockHeight = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.invalidationId = reader.bytes();
                    break;
                case 4:
                    message.invalidationNonce = longToNumber(reader.uint64());
                    break;
                case 5:
                    message.orchestrator = reader.string();
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
            ...baseMsgLogicCallExecutedClaim,
        };
        if (object.eventNonce !== undefined && object.eventNonce !== null) {
            message.eventNonce = Number(object.eventNonce);
        }
        else {
            message.eventNonce = 0;
        }
        if (object.blockHeight !== undefined && object.blockHeight !== null) {
            message.blockHeight = Number(object.blockHeight);
        }
        else {
            message.blockHeight = 0;
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
        if (object.orchestrator !== undefined && object.orchestrator !== null) {
            message.orchestrator = String(object.orchestrator);
        }
        else {
            message.orchestrator = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.eventNonce !== undefined && (obj.eventNonce = message.eventNonce);
        message.blockHeight !== undefined &&
            (obj.blockHeight = message.blockHeight);
        message.invalidationId !== undefined &&
            (obj.invalidationId = base64FromBytes(message.invalidationId !== undefined
                ? message.invalidationId
                : new Uint8Array()));
        message.invalidationNonce !== undefined &&
            (obj.invalidationNonce = message.invalidationNonce);
        message.orchestrator !== undefined &&
            (obj.orchestrator = message.orchestrator);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgLogicCallExecutedClaim,
        };
        if (object.eventNonce !== undefined && object.eventNonce !== null) {
            message.eventNonce = object.eventNonce;
        }
        else {
            message.eventNonce = 0;
        }
        if (object.blockHeight !== undefined && object.blockHeight !== null) {
            message.blockHeight = object.blockHeight;
        }
        else {
            message.blockHeight = 0;
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
        if (object.orchestrator !== undefined && object.orchestrator !== null) {
            message.orchestrator = object.orchestrator;
        }
        else {
            message.orchestrator = "";
        }
        return message;
    },
};
const baseMsgLogicCallExecutedClaimResponse = {};
export const MsgLogicCallExecutedClaimResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgLogicCallExecutedClaimResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = {
            ...baseMsgLogicCallExecutedClaimResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgLogicCallExecutedClaimResponse,
        };
        return message;
    },
};
const baseMsgValsetUpdatedClaim = {
    eventNonce: 0,
    valsetNonce: 0,
    blockHeight: 0,
    orchestrator: "",
};
export const MsgValsetUpdatedClaim = {
    encode(message, writer = Writer.create()) {
        if (message.eventNonce !== 0) {
            writer.uint32(8).uint64(message.eventNonce);
        }
        if (message.valsetNonce !== 0) {
            writer.uint32(16).uint64(message.valsetNonce);
        }
        if (message.blockHeight !== 0) {
            writer.uint32(24).uint64(message.blockHeight);
        }
        for (const v of message.members) {
            BridgeValidator.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.orchestrator !== "") {
            writer.uint32(50).string(message.orchestrator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgValsetUpdatedClaim };
        message.members = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.eventNonce = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.valsetNonce = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.blockHeight = longToNumber(reader.uint64());
                    break;
                case 4:
                    message.members.push(BridgeValidator.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.orchestrator = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgValsetUpdatedClaim };
        message.members = [];
        if (object.eventNonce !== undefined && object.eventNonce !== null) {
            message.eventNonce = Number(object.eventNonce);
        }
        else {
            message.eventNonce = 0;
        }
        if (object.valsetNonce !== undefined && object.valsetNonce !== null) {
            message.valsetNonce = Number(object.valsetNonce);
        }
        else {
            message.valsetNonce = 0;
        }
        if (object.blockHeight !== undefined && object.blockHeight !== null) {
            message.blockHeight = Number(object.blockHeight);
        }
        else {
            message.blockHeight = 0;
        }
        if (object.members !== undefined && object.members !== null) {
            for (const e of object.members) {
                message.members.push(BridgeValidator.fromJSON(e));
            }
        }
        if (object.orchestrator !== undefined && object.orchestrator !== null) {
            message.orchestrator = String(object.orchestrator);
        }
        else {
            message.orchestrator = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.eventNonce !== undefined && (obj.eventNonce = message.eventNonce);
        message.valsetNonce !== undefined &&
            (obj.valsetNonce = message.valsetNonce);
        message.blockHeight !== undefined &&
            (obj.blockHeight = message.blockHeight);
        if (message.members) {
            obj.members = message.members.map((e) => e ? BridgeValidator.toJSON(e) : undefined);
        }
        else {
            obj.members = [];
        }
        message.orchestrator !== undefined &&
            (obj.orchestrator = message.orchestrator);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgValsetUpdatedClaim };
        message.members = [];
        if (object.eventNonce !== undefined && object.eventNonce !== null) {
            message.eventNonce = object.eventNonce;
        }
        else {
            message.eventNonce = 0;
        }
        if (object.valsetNonce !== undefined && object.valsetNonce !== null) {
            message.valsetNonce = object.valsetNonce;
        }
        else {
            message.valsetNonce = 0;
        }
        if (object.blockHeight !== undefined && object.blockHeight !== null) {
            message.blockHeight = object.blockHeight;
        }
        else {
            message.blockHeight = 0;
        }
        if (object.members !== undefined && object.members !== null) {
            for (const e of object.members) {
                message.members.push(BridgeValidator.fromPartial(e));
            }
        }
        if (object.orchestrator !== undefined && object.orchestrator !== null) {
            message.orchestrator = object.orchestrator;
        }
        else {
            message.orchestrator = "";
        }
        return message;
    },
};
const baseMsgValsetUpdatedClaimResponse = {};
export const MsgValsetUpdatedClaimResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgValsetUpdatedClaimResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = {
            ...baseMsgValsetUpdatedClaimResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgValsetUpdatedClaimResponse,
        };
        return message;
    },
};
const baseMsgCancelSendToEth = { transactionId: 0, sender: "" };
export const MsgCancelSendToEth = {
    encode(message, writer = Writer.create()) {
        if (message.transactionId !== 0) {
            writer.uint32(8).uint64(message.transactionId);
        }
        if (message.sender !== "") {
            writer.uint32(18).string(message.sender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCancelSendToEth };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.transactionId = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.sender = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCancelSendToEth };
        if (object.transactionId !== undefined && object.transactionId !== null) {
            message.transactionId = Number(object.transactionId);
        }
        else {
            message.transactionId = 0;
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = String(object.sender);
        }
        else {
            message.sender = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.transactionId !== undefined &&
            (obj.transactionId = message.transactionId);
        message.sender !== undefined && (obj.sender = message.sender);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCancelSendToEth };
        if (object.transactionId !== undefined && object.transactionId !== null) {
            message.transactionId = object.transactionId;
        }
        else {
            message.transactionId = 0;
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        else {
            message.sender = "";
        }
        return message;
    },
};
const baseMsgCancelSendToEthResponse = {};
export const MsgCancelSendToEthResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgCancelSendToEthResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = {
            ...baseMsgCancelSendToEthResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgCancelSendToEthResponse,
        };
        return message;
    },
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    ValsetConfirm(request) {
        const data = MsgValsetConfirm.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Msg", "ValsetConfirm", data);
        return promise.then((data) => MsgValsetConfirmResponse.decode(new Reader(data)));
    }
    SendToEth(request) {
        const data = MsgSendToEth.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Msg", "SendToEth", data);
        return promise.then((data) => MsgSendToEthResponse.decode(new Reader(data)));
    }
    RequestBatch(request) {
        const data = MsgRequestBatch.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Msg", "RequestBatch", data);
        return promise.then((data) => MsgRequestBatchResponse.decode(new Reader(data)));
    }
    ConfirmBatch(request) {
        const data = MsgConfirmBatch.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Msg", "ConfirmBatch", data);
        return promise.then((data) => MsgConfirmBatchResponse.decode(new Reader(data)));
    }
    ConfirmLogicCall(request) {
        const data = MsgConfirmLogicCall.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Msg", "ConfirmLogicCall", data);
        return promise.then((data) => MsgConfirmLogicCallResponse.decode(new Reader(data)));
    }
    DepositClaim(request) {
        const data = MsgDepositClaim.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Msg", "DepositClaim", data);
        return promise.then((data) => MsgDepositClaimResponse.decode(new Reader(data)));
    }
    WithdrawClaim(request) {
        const data = MsgWithdrawClaim.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Msg", "WithdrawClaim", data);
        return promise.then((data) => MsgWithdrawClaimResponse.decode(new Reader(data)));
    }
    ValsetUpdateClaim(request) {
        const data = MsgValsetUpdatedClaim.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Msg", "ValsetUpdateClaim", data);
        return promise.then((data) => MsgValsetUpdatedClaimResponse.decode(new Reader(data)));
    }
    Erc20DeployedClaim(request) {
        const data = MsgErc20DeployedClaim.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Msg", "Erc20DeployedClaim", data);
        return promise.then((data) => MsgErc20DeployedClaimResponse.decode(new Reader(data)));
    }
    LogicCallExecutedClaim(request) {
        const data = MsgLogicCallExecutedClaim.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Msg", "LogicCallExecutedClaim", data);
        return promise.then((data) => MsgLogicCallExecutedClaimResponse.decode(new Reader(data)));
    }
    SetOrchestratorAddress(request) {
        const data = MsgSetOrchestratorAddress.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Msg", "SetOrchestratorAddress", data);
        return promise.then((data) => MsgSetOrchestratorAddressResponse.decode(new Reader(data)));
    }
    CancelSendToEth(request) {
        const data = MsgCancelSendToEth.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Msg", "CancelSendToEth", data);
        return promise.then((data) => MsgCancelSendToEthResponse.decode(new Reader(data)));
    }
}
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
