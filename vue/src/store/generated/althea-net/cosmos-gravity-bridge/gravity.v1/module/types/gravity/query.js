/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Params } from "../gravity/genesis";
import { Valset } from "../gravity/types";
import { MsgValsetConfirm, MsgConfirmBatch, MsgConfirmLogicCall, } from "../gravity/msgs";
import { BatchFees } from "../gravity/pool";
import { OutgoingTxBatch, OutgoingLogicCall, OutgoingTransferTx, } from "../gravity/batch";
export const protobufPackage = "gravity.v1";
const baseQueryParamsRequest = {};
export const QueryParamsRequest = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryParamsRequest };
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
        const message = { ...baseQueryParamsRequest };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseQueryParamsRequest };
        return message;
    },
};
const baseQueryParamsResponse = {};
export const QueryParamsResponse = {
    encode(message, writer = Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryParamsResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryParamsResponse };
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromJSON(object.params);
        }
        else {
            message.params = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryParamsResponse };
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromPartial(object.params);
        }
        else {
            message.params = undefined;
        }
        return message;
    },
};
const baseQueryCurrentValsetRequest = {};
export const QueryCurrentValsetRequest = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryCurrentValsetRequest,
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
            ...baseQueryCurrentValsetRequest,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseQueryCurrentValsetRequest,
        };
        return message;
    },
};
const baseQueryAllOrchestratorAddress = {};
export const QueryAllOrchestratorAddress = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllOrchestratorAddress,
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
            ...baseQueryAllOrchestratorAddress,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseQueryAllOrchestratorAddress,
        };
        return message;
    },
};
const baseQueryCurrentValsetResponse = {};
export const QueryCurrentValsetResponse = {
    encode(message, writer = Writer.create()) {
        if (message.valset !== undefined) {
            Valset.encode(message.valset, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryCurrentValsetResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.valset = Valset.decode(reader, reader.uint32());
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
            ...baseQueryCurrentValsetResponse,
        };
        if (object.valset !== undefined && object.valset !== null) {
            message.valset = Valset.fromJSON(object.valset);
        }
        else {
            message.valset = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.valset !== undefined &&
            (obj.valset = message.valset ? Valset.toJSON(message.valset) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryCurrentValsetResponse,
        };
        if (object.valset !== undefined && object.valset !== null) {
            message.valset = Valset.fromPartial(object.valset);
        }
        else {
            message.valset = undefined;
        }
        return message;
    },
};
const baseQueryValsetRequestRequest = { nonce: 0 };
export const QueryValsetRequestRequest = {
    encode(message, writer = Writer.create()) {
        if (message.nonce !== 0) {
            writer.uint32(8).uint64(message.nonce);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryValsetRequestRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nonce = longToNumber(reader.uint64());
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
            ...baseQueryValsetRequestRequest,
        };
        if (object.nonce !== undefined && object.nonce !== null) {
            message.nonce = Number(object.nonce);
        }
        else {
            message.nonce = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.nonce !== undefined && (obj.nonce = message.nonce);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryValsetRequestRequest,
        };
        if (object.nonce !== undefined && object.nonce !== null) {
            message.nonce = object.nonce;
        }
        else {
            message.nonce = 0;
        }
        return message;
    },
};
const baseQueryValsetRequestResponse = {};
export const QueryValsetRequestResponse = {
    encode(message, writer = Writer.create()) {
        if (message.valset !== undefined) {
            Valset.encode(message.valset, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryValsetRequestResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.valset = Valset.decode(reader, reader.uint32());
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
            ...baseQueryValsetRequestResponse,
        };
        if (object.valset !== undefined && object.valset !== null) {
            message.valset = Valset.fromJSON(object.valset);
        }
        else {
            message.valset = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.valset !== undefined &&
            (obj.valset = message.valset ? Valset.toJSON(message.valset) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryValsetRequestResponse,
        };
        if (object.valset !== undefined && object.valset !== null) {
            message.valset = Valset.fromPartial(object.valset);
        }
        else {
            message.valset = undefined;
        }
        return message;
    },
};
const baseQueryValsetConfirmRequest = { nonce: 0, address: "" };
export const QueryValsetConfirmRequest = {
    encode(message, writer = Writer.create()) {
        if (message.nonce !== 0) {
            writer.uint32(8).uint64(message.nonce);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryValsetConfirmRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nonce = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.address = reader.string();
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
            ...baseQueryValsetConfirmRequest,
        };
        if (object.nonce !== undefined && object.nonce !== null) {
            message.nonce = Number(object.nonce);
        }
        else {
            message.nonce = 0;
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        }
        else {
            message.address = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.nonce !== undefined && (obj.nonce = message.nonce);
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryValsetConfirmRequest,
        };
        if (object.nonce !== undefined && object.nonce !== null) {
            message.nonce = object.nonce;
        }
        else {
            message.nonce = 0;
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        else {
            message.address = "";
        }
        return message;
    },
};
const baseQueryValsetConfirmResponse = {};
export const QueryValsetConfirmResponse = {
    encode(message, writer = Writer.create()) {
        if (message.confirm !== undefined) {
            MsgValsetConfirm.encode(message.confirm, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryValsetConfirmResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.confirm = MsgValsetConfirm.decode(reader, reader.uint32());
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
            ...baseQueryValsetConfirmResponse,
        };
        if (object.confirm !== undefined && object.confirm !== null) {
            message.confirm = MsgValsetConfirm.fromJSON(object.confirm);
        }
        else {
            message.confirm = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.confirm !== undefined &&
            (obj.confirm = message.confirm
                ? MsgValsetConfirm.toJSON(message.confirm)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryValsetConfirmResponse,
        };
        if (object.confirm !== undefined && object.confirm !== null) {
            message.confirm = MsgValsetConfirm.fromPartial(object.confirm);
        }
        else {
            message.confirm = undefined;
        }
        return message;
    },
};
const baseQueryValsetConfirmsByNonceRequest = { nonce: 0 };
export const QueryValsetConfirmsByNonceRequest = {
    encode(message, writer = Writer.create()) {
        if (message.nonce !== 0) {
            writer.uint32(8).uint64(message.nonce);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryValsetConfirmsByNonceRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nonce = longToNumber(reader.uint64());
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
            ...baseQueryValsetConfirmsByNonceRequest,
        };
        if (object.nonce !== undefined && object.nonce !== null) {
            message.nonce = Number(object.nonce);
        }
        else {
            message.nonce = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.nonce !== undefined && (obj.nonce = message.nonce);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryValsetConfirmsByNonceRequest,
        };
        if (object.nonce !== undefined && object.nonce !== null) {
            message.nonce = object.nonce;
        }
        else {
            message.nonce = 0;
        }
        return message;
    },
};
const baseQueryValsetConfirmsByNonceResponse = {};
export const QueryValsetConfirmsByNonceResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.confirms) {
            MsgValsetConfirm.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryValsetConfirmsByNonceResponse,
        };
        message.confirms = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.confirms.push(MsgValsetConfirm.decode(reader, reader.uint32()));
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
            ...baseQueryValsetConfirmsByNonceResponse,
        };
        message.confirms = [];
        if (object.confirms !== undefined && object.confirms !== null) {
            for (const e of object.confirms) {
                message.confirms.push(MsgValsetConfirm.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.confirms) {
            obj.confirms = message.confirms.map((e) => e ? MsgValsetConfirm.toJSON(e) : undefined);
        }
        else {
            obj.confirms = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryValsetConfirmsByNonceResponse,
        };
        message.confirms = [];
        if (object.confirms !== undefined && object.confirms !== null) {
            for (const e of object.confirms) {
                message.confirms.push(MsgValsetConfirm.fromPartial(e));
            }
        }
        return message;
    },
};
const baseQueryLastValsetRequestsRequest = {};
export const QueryLastValsetRequestsRequest = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryLastValsetRequestsRequest,
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
            ...baseQueryLastValsetRequestsRequest,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseQueryLastValsetRequestsRequest,
        };
        return message;
    },
};
const baseQueryLastValsetRequestsResponse = {};
export const QueryLastValsetRequestsResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.valsets) {
            Valset.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryLastValsetRequestsResponse,
        };
        message.valsets = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.valsets.push(Valset.decode(reader, reader.uint32()));
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
            ...baseQueryLastValsetRequestsResponse,
        };
        message.valsets = [];
        if (object.valsets !== undefined && object.valsets !== null) {
            for (const e of object.valsets) {
                message.valsets.push(Valset.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.valsets) {
            obj.valsets = message.valsets.map((e) => e ? Valset.toJSON(e) : undefined);
        }
        else {
            obj.valsets = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryLastValsetRequestsResponse,
        };
        message.valsets = [];
        if (object.valsets !== undefined && object.valsets !== null) {
            for (const e of object.valsets) {
                message.valsets.push(Valset.fromPartial(e));
            }
        }
        return message;
    },
};
const baseQueryLastPendingValsetRequestByAddrRequest = { address: "" };
export const QueryLastPendingValsetRequestByAddrRequest = {
    encode(message, writer = Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryLastPendingValsetRequestByAddrRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
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
            ...baseQueryLastPendingValsetRequestByAddrRequest,
        };
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        }
        else {
            message.address = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryLastPendingValsetRequestByAddrRequest,
        };
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        else {
            message.address = "";
        }
        return message;
    },
};
const baseQueryLastPendingValsetRequestByAddrResponse = {};
export const QueryLastPendingValsetRequestByAddrResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.valsets) {
            Valset.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryLastPendingValsetRequestByAddrResponse,
        };
        message.valsets = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.valsets.push(Valset.decode(reader, reader.uint32()));
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
            ...baseQueryLastPendingValsetRequestByAddrResponse,
        };
        message.valsets = [];
        if (object.valsets !== undefined && object.valsets !== null) {
            for (const e of object.valsets) {
                message.valsets.push(Valset.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.valsets) {
            obj.valsets = message.valsets.map((e) => e ? Valset.toJSON(e) : undefined);
        }
        else {
            obj.valsets = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryLastPendingValsetRequestByAddrResponse,
        };
        message.valsets = [];
        if (object.valsets !== undefined && object.valsets !== null) {
            for (const e of object.valsets) {
                message.valsets.push(Valset.fromPartial(e));
            }
        }
        return message;
    },
};
const baseQueryBatchFeeRequest = {};
export const QueryBatchFeeRequest = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryBatchFeeRequest };
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
        const message = { ...baseQueryBatchFeeRequest };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseQueryBatchFeeRequest };
        return message;
    },
};
const baseQueryBatchFeeResponse = {};
export const QueryBatchFeeResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.batchFees) {
            BatchFees.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryBatchFeeResponse };
        message.batchFees = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.batchFees.push(BatchFees.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryBatchFeeResponse };
        message.batchFees = [];
        if (object.batchFees !== undefined && object.batchFees !== null) {
            for (const e of object.batchFees) {
                message.batchFees.push(BatchFees.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.batchFees) {
            obj.batchFees = message.batchFees.map((e) => e ? BatchFees.toJSON(e) : undefined);
        }
        else {
            obj.batchFees = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryBatchFeeResponse };
        message.batchFees = [];
        if (object.batchFees !== undefined && object.batchFees !== null) {
            for (const e of object.batchFees) {
                message.batchFees.push(BatchFees.fromPartial(e));
            }
        }
        return message;
    },
};
const baseQueryLastPendingBatchRequestByAddrRequest = { address: "" };
export const QueryLastPendingBatchRequestByAddrRequest = {
    encode(message, writer = Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryLastPendingBatchRequestByAddrRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
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
            ...baseQueryLastPendingBatchRequestByAddrRequest,
        };
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        }
        else {
            message.address = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryLastPendingBatchRequestByAddrRequest,
        };
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        else {
            message.address = "";
        }
        return message;
    },
};
const baseQueryLastPendingBatchRequestByAddrResponse = {};
export const QueryLastPendingBatchRequestByAddrResponse = {
    encode(message, writer = Writer.create()) {
        if (message.batch !== undefined) {
            OutgoingTxBatch.encode(message.batch, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryLastPendingBatchRequestByAddrResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.batch = OutgoingTxBatch.decode(reader, reader.uint32());
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
            ...baseQueryLastPendingBatchRequestByAddrResponse,
        };
        if (object.batch !== undefined && object.batch !== null) {
            message.batch = OutgoingTxBatch.fromJSON(object.batch);
        }
        else {
            message.batch = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.batch !== undefined &&
            (obj.batch = message.batch
                ? OutgoingTxBatch.toJSON(message.batch)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryLastPendingBatchRequestByAddrResponse,
        };
        if (object.batch !== undefined && object.batch !== null) {
            message.batch = OutgoingTxBatch.fromPartial(object.batch);
        }
        else {
            message.batch = undefined;
        }
        return message;
    },
};
const baseQueryLastPendingLogicCallByAddrRequest = { address: "" };
export const QueryLastPendingLogicCallByAddrRequest = {
    encode(message, writer = Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryLastPendingLogicCallByAddrRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
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
            ...baseQueryLastPendingLogicCallByAddrRequest,
        };
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        }
        else {
            message.address = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryLastPendingLogicCallByAddrRequest,
        };
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        else {
            message.address = "";
        }
        return message;
    },
};
const baseQueryLastPendingLogicCallByAddrResponse = {};
export const QueryLastPendingLogicCallByAddrResponse = {
    encode(message, writer = Writer.create()) {
        if (message.call !== undefined) {
            OutgoingLogicCall.encode(message.call, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryLastPendingLogicCallByAddrResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.call = OutgoingLogicCall.decode(reader, reader.uint32());
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
            ...baseQueryLastPendingLogicCallByAddrResponse,
        };
        if (object.call !== undefined && object.call !== null) {
            message.call = OutgoingLogicCall.fromJSON(object.call);
        }
        else {
            message.call = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.call !== undefined &&
            (obj.call = message.call
                ? OutgoingLogicCall.toJSON(message.call)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryLastPendingLogicCallByAddrResponse,
        };
        if (object.call !== undefined && object.call !== null) {
            message.call = OutgoingLogicCall.fromPartial(object.call);
        }
        else {
            message.call = undefined;
        }
        return message;
    },
};
const baseQueryOutgoingTxBatchesRequest = {};
export const QueryOutgoingTxBatchesRequest = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryOutgoingTxBatchesRequest,
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
            ...baseQueryOutgoingTxBatchesRequest,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseQueryOutgoingTxBatchesRequest,
        };
        return message;
    },
};
const baseQueryOutgoingTxBatchesResponse = {};
export const QueryOutgoingTxBatchesResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.batches) {
            OutgoingTxBatch.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryOutgoingTxBatchesResponse,
        };
        message.batches = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.batches.push(OutgoingTxBatch.decode(reader, reader.uint32()));
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
            ...baseQueryOutgoingTxBatchesResponse,
        };
        message.batches = [];
        if (object.batches !== undefined && object.batches !== null) {
            for (const e of object.batches) {
                message.batches.push(OutgoingTxBatch.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.batches) {
            obj.batches = message.batches.map((e) => e ? OutgoingTxBatch.toJSON(e) : undefined);
        }
        else {
            obj.batches = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryOutgoingTxBatchesResponse,
        };
        message.batches = [];
        if (object.batches !== undefined && object.batches !== null) {
            for (const e of object.batches) {
                message.batches.push(OutgoingTxBatch.fromPartial(e));
            }
        }
        return message;
    },
};
const baseQueryOutgoingLogicCallsRequest = {};
export const QueryOutgoingLogicCallsRequest = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryOutgoingLogicCallsRequest,
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
            ...baseQueryOutgoingLogicCallsRequest,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseQueryOutgoingLogicCallsRequest,
        };
        return message;
    },
};
const baseQueryOutgoingLogicCallsResponse = {};
export const QueryOutgoingLogicCallsResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.calls) {
            OutgoingLogicCall.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryOutgoingLogicCallsResponse,
        };
        message.calls = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.calls.push(OutgoingLogicCall.decode(reader, reader.uint32()));
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
            ...baseQueryOutgoingLogicCallsResponse,
        };
        message.calls = [];
        if (object.calls !== undefined && object.calls !== null) {
            for (const e of object.calls) {
                message.calls.push(OutgoingLogicCall.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.calls) {
            obj.calls = message.calls.map((e) => e ? OutgoingLogicCall.toJSON(e) : undefined);
        }
        else {
            obj.calls = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryOutgoingLogicCallsResponse,
        };
        message.calls = [];
        if (object.calls !== undefined && object.calls !== null) {
            for (const e of object.calls) {
                message.calls.push(OutgoingLogicCall.fromPartial(e));
            }
        }
        return message;
    },
};
const baseQueryBatchRequestByNonceRequest = {
    nonce: 0,
    contractAddress: "",
};
export const QueryBatchRequestByNonceRequest = {
    encode(message, writer = Writer.create()) {
        if (message.nonce !== 0) {
            writer.uint32(8).uint64(message.nonce);
        }
        if (message.contractAddress !== "") {
            writer.uint32(18).string(message.contractAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryBatchRequestByNonceRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nonce = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.contractAddress = reader.string();
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
            ...baseQueryBatchRequestByNonceRequest,
        };
        if (object.nonce !== undefined && object.nonce !== null) {
            message.nonce = Number(object.nonce);
        }
        else {
            message.nonce = 0;
        }
        if (object.contractAddress !== undefined &&
            object.contractAddress !== null) {
            message.contractAddress = String(object.contractAddress);
        }
        else {
            message.contractAddress = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.nonce !== undefined && (obj.nonce = message.nonce);
        message.contractAddress !== undefined &&
            (obj.contractAddress = message.contractAddress);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryBatchRequestByNonceRequest,
        };
        if (object.nonce !== undefined && object.nonce !== null) {
            message.nonce = object.nonce;
        }
        else {
            message.nonce = 0;
        }
        if (object.contractAddress !== undefined &&
            object.contractAddress !== null) {
            message.contractAddress = object.contractAddress;
        }
        else {
            message.contractAddress = "";
        }
        return message;
    },
};
const baseQueryBatchRequestByNonceResponse = {};
export const QueryBatchRequestByNonceResponse = {
    encode(message, writer = Writer.create()) {
        if (message.batch !== undefined) {
            OutgoingTxBatch.encode(message.batch, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryBatchRequestByNonceResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.batch = OutgoingTxBatch.decode(reader, reader.uint32());
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
            ...baseQueryBatchRequestByNonceResponse,
        };
        if (object.batch !== undefined && object.batch !== null) {
            message.batch = OutgoingTxBatch.fromJSON(object.batch);
        }
        else {
            message.batch = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.batch !== undefined &&
            (obj.batch = message.batch
                ? OutgoingTxBatch.toJSON(message.batch)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryBatchRequestByNonceResponse,
        };
        if (object.batch !== undefined && object.batch !== null) {
            message.batch = OutgoingTxBatch.fromPartial(object.batch);
        }
        else {
            message.batch = undefined;
        }
        return message;
    },
};
const baseQueryBatchConfirmsRequest = { nonce: 0, contractAddress: "" };
export const QueryBatchConfirmsRequest = {
    encode(message, writer = Writer.create()) {
        if (message.nonce !== 0) {
            writer.uint32(8).uint64(message.nonce);
        }
        if (message.contractAddress !== "") {
            writer.uint32(18).string(message.contractAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryBatchConfirmsRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nonce = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.contractAddress = reader.string();
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
            ...baseQueryBatchConfirmsRequest,
        };
        if (object.nonce !== undefined && object.nonce !== null) {
            message.nonce = Number(object.nonce);
        }
        else {
            message.nonce = 0;
        }
        if (object.contractAddress !== undefined &&
            object.contractAddress !== null) {
            message.contractAddress = String(object.contractAddress);
        }
        else {
            message.contractAddress = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.nonce !== undefined && (obj.nonce = message.nonce);
        message.contractAddress !== undefined &&
            (obj.contractAddress = message.contractAddress);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryBatchConfirmsRequest,
        };
        if (object.nonce !== undefined && object.nonce !== null) {
            message.nonce = object.nonce;
        }
        else {
            message.nonce = 0;
        }
        if (object.contractAddress !== undefined &&
            object.contractAddress !== null) {
            message.contractAddress = object.contractAddress;
        }
        else {
            message.contractAddress = "";
        }
        return message;
    },
};
const baseQueryBatchConfirmsResponse = {};
export const QueryBatchConfirmsResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.confirms) {
            MsgConfirmBatch.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryBatchConfirmsResponse,
        };
        message.confirms = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.confirms.push(MsgConfirmBatch.decode(reader, reader.uint32()));
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
            ...baseQueryBatchConfirmsResponse,
        };
        message.confirms = [];
        if (object.confirms !== undefined && object.confirms !== null) {
            for (const e of object.confirms) {
                message.confirms.push(MsgConfirmBatch.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.confirms) {
            obj.confirms = message.confirms.map((e) => e ? MsgConfirmBatch.toJSON(e) : undefined);
        }
        else {
            obj.confirms = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryBatchConfirmsResponse,
        };
        message.confirms = [];
        if (object.confirms !== undefined && object.confirms !== null) {
            for (const e of object.confirms) {
                message.confirms.push(MsgConfirmBatch.fromPartial(e));
            }
        }
        return message;
    },
};
const baseQueryLogicConfirmsRequest = { invalidationNonce: 0 };
export const QueryLogicConfirmsRequest = {
    encode(message, writer = Writer.create()) {
        if (message.invalidationId.length !== 0) {
            writer.uint32(10).bytes(message.invalidationId);
        }
        if (message.invalidationNonce !== 0) {
            writer.uint32(16).uint64(message.invalidationNonce);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryLogicConfirmsRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.invalidationId = reader.bytes();
                    break;
                case 2:
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
        const message = {
            ...baseQueryLogicConfirmsRequest,
        };
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
        message.invalidationId !== undefined &&
            (obj.invalidationId = base64FromBytes(message.invalidationId !== undefined
                ? message.invalidationId
                : new Uint8Array()));
        message.invalidationNonce !== undefined &&
            (obj.invalidationNonce = message.invalidationNonce);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryLogicConfirmsRequest,
        };
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
const baseQueryLogicConfirmsResponse = {};
export const QueryLogicConfirmsResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.confirms) {
            MsgConfirmLogicCall.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryLogicConfirmsResponse,
        };
        message.confirms = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.confirms.push(MsgConfirmLogicCall.decode(reader, reader.uint32()));
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
            ...baseQueryLogicConfirmsResponse,
        };
        message.confirms = [];
        if (object.confirms !== undefined && object.confirms !== null) {
            for (const e of object.confirms) {
                message.confirms.push(MsgConfirmLogicCall.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.confirms) {
            obj.confirms = message.confirms.map((e) => e ? MsgConfirmLogicCall.toJSON(e) : undefined);
        }
        else {
            obj.confirms = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryLogicConfirmsResponse,
        };
        message.confirms = [];
        if (object.confirms !== undefined && object.confirms !== null) {
            for (const e of object.confirms) {
                message.confirms.push(MsgConfirmLogicCall.fromPartial(e));
            }
        }
        return message;
    },
};
const baseQueryLastEventNonceByAddrRequest = { address: "" };
export const QueryLastEventNonceByAddrRequest = {
    encode(message, writer = Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryLastEventNonceByAddrRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
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
            ...baseQueryLastEventNonceByAddrRequest,
        };
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        }
        else {
            message.address = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryLastEventNonceByAddrRequest,
        };
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        else {
            message.address = "";
        }
        return message;
    },
};
const baseQueryLastEventNonceByAddrResponse = { eventNonce: 0 };
export const QueryLastEventNonceByAddrResponse = {
    encode(message, writer = Writer.create()) {
        if (message.eventNonce !== 0) {
            writer.uint32(8).uint64(message.eventNonce);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryLastEventNonceByAddrResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.eventNonce = longToNumber(reader.uint64());
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
            ...baseQueryLastEventNonceByAddrResponse,
        };
        if (object.eventNonce !== undefined && object.eventNonce !== null) {
            message.eventNonce = Number(object.eventNonce);
        }
        else {
            message.eventNonce = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.eventNonce !== undefined && (obj.eventNonce = message.eventNonce);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryLastEventNonceByAddrResponse,
        };
        if (object.eventNonce !== undefined && object.eventNonce !== null) {
            message.eventNonce = object.eventNonce;
        }
        else {
            message.eventNonce = 0;
        }
        return message;
    },
};
const baseQueryErc20ToDenomRequest = { erc20: "" };
export const QueryErc20ToDenomRequest = {
    encode(message, writer = Writer.create()) {
        if (message.erc20 !== "") {
            writer.uint32(10).string(message.erc20);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryErc20ToDenomRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.erc20 = reader.string();
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
            ...baseQueryErc20ToDenomRequest,
        };
        if (object.erc20 !== undefined && object.erc20 !== null) {
            message.erc20 = String(object.erc20);
        }
        else {
            message.erc20 = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.erc20 !== undefined && (obj.erc20 = message.erc20);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryErc20ToDenomRequest,
        };
        if (object.erc20 !== undefined && object.erc20 !== null) {
            message.erc20 = object.erc20;
        }
        else {
            message.erc20 = "";
        }
        return message;
    },
};
const baseQueryErc20ToDenomResponse = {
    denom: "",
    cosmosOriginated: false,
};
export const QueryErc20ToDenomResponse = {
    encode(message, writer = Writer.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.cosmosOriginated === true) {
            writer.uint32(16).bool(message.cosmosOriginated);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryErc20ToDenomResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.cosmosOriginated = reader.bool();
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
            ...baseQueryErc20ToDenomResponse,
        };
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = String(object.denom);
        }
        else {
            message.denom = "";
        }
        if (object.cosmosOriginated !== undefined &&
            object.cosmosOriginated !== null) {
            message.cosmosOriginated = Boolean(object.cosmosOriginated);
        }
        else {
            message.cosmosOriginated = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        message.cosmosOriginated !== undefined &&
            (obj.cosmosOriginated = message.cosmosOriginated);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryErc20ToDenomResponse,
        };
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        else {
            message.denom = "";
        }
        if (object.cosmosOriginated !== undefined &&
            object.cosmosOriginated !== null) {
            message.cosmosOriginated = object.cosmosOriginated;
        }
        else {
            message.cosmosOriginated = false;
        }
        return message;
    },
};
const baseQueryDenomToErc20Request = { denom: "" };
export const QueryDenomToErc20Request = {
    encode(message, writer = Writer.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryDenomToErc20Request,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = {
            ...baseQueryDenomToErc20Request,
        };
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
        message.denom !== undefined && (obj.denom = message.denom);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryDenomToErc20Request,
        };
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        else {
            message.denom = "";
        }
        return message;
    },
};
const baseQueryDenomToErc20Response = {
    erc20: "",
    cosmosOriginated: false,
};
export const QueryDenomToErc20Response = {
    encode(message, writer = Writer.create()) {
        if (message.erc20 !== "") {
            writer.uint32(10).string(message.erc20);
        }
        if (message.cosmosOriginated === true) {
            writer.uint32(16).bool(message.cosmosOriginated);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryDenomToErc20Response,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.erc20 = reader.string();
                    break;
                case 2:
                    message.cosmosOriginated = reader.bool();
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
            ...baseQueryDenomToErc20Response,
        };
        if (object.erc20 !== undefined && object.erc20 !== null) {
            message.erc20 = String(object.erc20);
        }
        else {
            message.erc20 = "";
        }
        if (object.cosmosOriginated !== undefined &&
            object.cosmosOriginated !== null) {
            message.cosmosOriginated = Boolean(object.cosmosOriginated);
        }
        else {
            message.cosmosOriginated = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.erc20 !== undefined && (obj.erc20 = message.erc20);
        message.cosmosOriginated !== undefined &&
            (obj.cosmosOriginated = message.cosmosOriginated);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryDenomToErc20Response,
        };
        if (object.erc20 !== undefined && object.erc20 !== null) {
            message.erc20 = object.erc20;
        }
        else {
            message.erc20 = "";
        }
        if (object.cosmosOriginated !== undefined &&
            object.cosmosOriginated !== null) {
            message.cosmosOriginated = object.cosmosOriginated;
        }
        else {
            message.cosmosOriginated = false;
        }
        return message;
    },
};
const baseQueryDelegateKeysByValidatorAddress = {
    validatorAddress: "",
};
export const QueryDelegateKeysByValidatorAddress = {
    encode(message, writer = Writer.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryDelegateKeysByValidatorAddress,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorAddress = reader.string();
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
            ...baseQueryDelegateKeysByValidatorAddress,
        };
        if (object.validatorAddress !== undefined &&
            object.validatorAddress !== null) {
            message.validatorAddress = String(object.validatorAddress);
        }
        else {
            message.validatorAddress = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.validatorAddress !== undefined &&
            (obj.validatorAddress = message.validatorAddress);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryDelegateKeysByValidatorAddress,
        };
        if (object.validatorAddress !== undefined &&
            object.validatorAddress !== null) {
            message.validatorAddress = object.validatorAddress;
        }
        else {
            message.validatorAddress = "";
        }
        return message;
    },
};
const baseQueryDelegateKeysByValidatorAddressResponse = {
    ethAddress: "",
    orchestratorAddress: "",
};
export const QueryDelegateKeysByValidatorAddressResponse = {
    encode(message, writer = Writer.create()) {
        if (message.ethAddress !== "") {
            writer.uint32(10).string(message.ethAddress);
        }
        if (message.orchestratorAddress !== "") {
            writer.uint32(18).string(message.orchestratorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryDelegateKeysByValidatorAddressResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ethAddress = reader.string();
                    break;
                case 2:
                    message.orchestratorAddress = reader.string();
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
            ...baseQueryDelegateKeysByValidatorAddressResponse,
        };
        if (object.ethAddress !== undefined && object.ethAddress !== null) {
            message.ethAddress = String(object.ethAddress);
        }
        else {
            message.ethAddress = "";
        }
        if (object.orchestratorAddress !== undefined &&
            object.orchestratorAddress !== null) {
            message.orchestratorAddress = String(object.orchestratorAddress);
        }
        else {
            message.orchestratorAddress = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.ethAddress !== undefined && (obj.ethAddress = message.ethAddress);
        message.orchestratorAddress !== undefined &&
            (obj.orchestratorAddress = message.orchestratorAddress);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryDelegateKeysByValidatorAddressResponse,
        };
        if (object.ethAddress !== undefined && object.ethAddress !== null) {
            message.ethAddress = object.ethAddress;
        }
        else {
            message.ethAddress = "";
        }
        if (object.orchestratorAddress !== undefined &&
            object.orchestratorAddress !== null) {
            message.orchestratorAddress = object.orchestratorAddress;
        }
        else {
            message.orchestratorAddress = "";
        }
        return message;
    },
};
const baseQueryDelegateKeysByEthAddress = { ethAddress: "" };
export const QueryDelegateKeysByEthAddress = {
    encode(message, writer = Writer.create()) {
        if (message.ethAddress !== "") {
            writer.uint32(10).string(message.ethAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryDelegateKeysByEthAddress,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
            ...baseQueryDelegateKeysByEthAddress,
        };
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
        message.ethAddress !== undefined && (obj.ethAddress = message.ethAddress);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryDelegateKeysByEthAddress,
        };
        if (object.ethAddress !== undefined && object.ethAddress !== null) {
            message.ethAddress = object.ethAddress;
        }
        else {
            message.ethAddress = "";
        }
        return message;
    },
};
const baseQueryDelegateKeysByEthAddressResponse = {
    validatorAddress: "",
    orchestratorAddress: "",
};
export const QueryDelegateKeysByEthAddressResponse = {
    encode(message, writer = Writer.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        if (message.orchestratorAddress !== "") {
            writer.uint32(18).string(message.orchestratorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryDelegateKeysByEthAddressResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorAddress = reader.string();
                    break;
                case 2:
                    message.orchestratorAddress = reader.string();
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
            ...baseQueryDelegateKeysByEthAddressResponse,
        };
        if (object.validatorAddress !== undefined &&
            object.validatorAddress !== null) {
            message.validatorAddress = String(object.validatorAddress);
        }
        else {
            message.validatorAddress = "";
        }
        if (object.orchestratorAddress !== undefined &&
            object.orchestratorAddress !== null) {
            message.orchestratorAddress = String(object.orchestratorAddress);
        }
        else {
            message.orchestratorAddress = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.validatorAddress !== undefined &&
            (obj.validatorAddress = message.validatorAddress);
        message.orchestratorAddress !== undefined &&
            (obj.orchestratorAddress = message.orchestratorAddress);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryDelegateKeysByEthAddressResponse,
        };
        if (object.validatorAddress !== undefined &&
            object.validatorAddress !== null) {
            message.validatorAddress = object.validatorAddress;
        }
        else {
            message.validatorAddress = "";
        }
        if (object.orchestratorAddress !== undefined &&
            object.orchestratorAddress !== null) {
            message.orchestratorAddress = object.orchestratorAddress;
        }
        else {
            message.orchestratorAddress = "";
        }
        return message;
    },
};
const baseQueryDelegateKeysByOrchestratorAddress = {
    orchestratorAddress: "",
};
export const QueryDelegateKeysByOrchestratorAddress = {
    encode(message, writer = Writer.create()) {
        if (message.orchestratorAddress !== "") {
            writer.uint32(10).string(message.orchestratorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryDelegateKeysByOrchestratorAddress,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orchestratorAddress = reader.string();
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
            ...baseQueryDelegateKeysByOrchestratorAddress,
        };
        if (object.orchestratorAddress !== undefined &&
            object.orchestratorAddress !== null) {
            message.orchestratorAddress = String(object.orchestratorAddress);
        }
        else {
            message.orchestratorAddress = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.orchestratorAddress !== undefined &&
            (obj.orchestratorAddress = message.orchestratorAddress);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryDelegateKeysByOrchestratorAddress,
        };
        if (object.orchestratorAddress !== undefined &&
            object.orchestratorAddress !== null) {
            message.orchestratorAddress = object.orchestratorAddress;
        }
        else {
            message.orchestratorAddress = "";
        }
        return message;
    },
};
const baseQueryDelegateKeysByOrchestratorAddressResponse = {
    validatorAddress: "",
    ethAddress: "",
};
export const QueryDelegateKeysByOrchestratorAddressResponse = {
    encode(message, writer = Writer.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        if (message.ethAddress !== "") {
            writer.uint32(18).string(message.ethAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryDelegateKeysByOrchestratorAddressResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorAddress = reader.string();
                    break;
                case 2:
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
            ...baseQueryDelegateKeysByOrchestratorAddressResponse,
        };
        if (object.validatorAddress !== undefined &&
            object.validatorAddress !== null) {
            message.validatorAddress = String(object.validatorAddress);
        }
        else {
            message.validatorAddress = "";
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
        message.validatorAddress !== undefined &&
            (obj.validatorAddress = message.validatorAddress);
        message.ethAddress !== undefined && (obj.ethAddress = message.ethAddress);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryDelegateKeysByOrchestratorAddressResponse,
        };
        if (object.validatorAddress !== undefined &&
            object.validatorAddress !== null) {
            message.validatorAddress = object.validatorAddress;
        }
        else {
            message.validatorAddress = "";
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
const baseQueryPendingSendToEth = { senderAddress: "" };
export const QueryPendingSendToEth = {
    encode(message, writer = Writer.create()) {
        if (message.senderAddress !== "") {
            writer.uint32(10).string(message.senderAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryPendingSendToEth };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.senderAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryPendingSendToEth };
        if (object.senderAddress !== undefined && object.senderAddress !== null) {
            message.senderAddress = String(object.senderAddress);
        }
        else {
            message.senderAddress = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.senderAddress !== undefined &&
            (obj.senderAddress = message.senderAddress);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryPendingSendToEth };
        if (object.senderAddress !== undefined && object.senderAddress !== null) {
            message.senderAddress = object.senderAddress;
        }
        else {
            message.senderAddress = "";
        }
        return message;
    },
};
const baseQueryPendingSendToEthResponse = {};
export const QueryPendingSendToEthResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.transfersInBatches) {
            OutgoingTransferTx.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.unbatchedTransfers) {
            OutgoingTransferTx.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryPendingSendToEthResponse,
        };
        message.transfersInBatches = [];
        message.unbatchedTransfers = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.transfersInBatches.push(OutgoingTransferTx.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.unbatchedTransfers.push(OutgoingTransferTx.decode(reader, reader.uint32()));
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
            ...baseQueryPendingSendToEthResponse,
        };
        message.transfersInBatches = [];
        message.unbatchedTransfers = [];
        if (object.transfersInBatches !== undefined &&
            object.transfersInBatches !== null) {
            for (const e of object.transfersInBatches) {
                message.transfersInBatches.push(OutgoingTransferTx.fromJSON(e));
            }
        }
        if (object.unbatchedTransfers !== undefined &&
            object.unbatchedTransfers !== null) {
            for (const e of object.unbatchedTransfers) {
                message.unbatchedTransfers.push(OutgoingTransferTx.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.transfersInBatches) {
            obj.transfersInBatches = message.transfersInBatches.map((e) => e ? OutgoingTransferTx.toJSON(e) : undefined);
        }
        else {
            obj.transfersInBatches = [];
        }
        if (message.unbatchedTransfers) {
            obj.unbatchedTransfers = message.unbatchedTransfers.map((e) => e ? OutgoingTransferTx.toJSON(e) : undefined);
        }
        else {
            obj.unbatchedTransfers = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryPendingSendToEthResponse,
        };
        message.transfersInBatches = [];
        message.unbatchedTransfers = [];
        if (object.transfersInBatches !== undefined &&
            object.transfersInBatches !== null) {
            for (const e of object.transfersInBatches) {
                message.transfersInBatches.push(OutgoingTransferTx.fromPartial(e));
            }
        }
        if (object.unbatchedTransfers !== undefined &&
            object.unbatchedTransfers !== null) {
            for (const e of object.unbatchedTransfers) {
                message.unbatchedTransfers.push(OutgoingTransferTx.fromPartial(e));
            }
        }
        return message;
    },
};
const baseQueryAllCosmosToEth = { senderAddress: "" };
export const QueryAllCosmosToEth = {
    encode(message, writer = Writer.create()) {
        if (message.senderAddress !== "") {
            writer.uint32(10).string(message.senderAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllCosmosToEth };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.senderAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllCosmosToEth };
        if (object.senderAddress !== undefined && object.senderAddress !== null) {
            message.senderAddress = String(object.senderAddress);
        }
        else {
            message.senderAddress = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.senderAddress !== undefined &&
            (obj.senderAddress = message.senderAddress);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllCosmosToEth };
        if (object.senderAddress !== undefined && object.senderAddress !== null) {
            message.senderAddress = object.senderAddress;
        }
        else {
            message.senderAddress = "";
        }
        return message;
    },
};
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    Params(request) {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "Params", data);
        return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
    }
    CurrentValset(request) {
        const data = QueryCurrentValsetRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "CurrentValset", data);
        return promise.then((data) => QueryCurrentValsetResponse.decode(new Reader(data)));
    }
    ValsetRequest(request) {
        const data = QueryValsetRequestRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "ValsetRequest", data);
        return promise.then((data) => QueryValsetRequestResponse.decode(new Reader(data)));
    }
    ValsetConfirm(request) {
        const data = QueryValsetConfirmRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "ValsetConfirm", data);
        return promise.then((data) => QueryValsetConfirmResponse.decode(new Reader(data)));
    }
    ValsetConfirmsByNonce(request) {
        const data = QueryValsetConfirmsByNonceRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "ValsetConfirmsByNonce", data);
        return promise.then((data) => QueryValsetConfirmsByNonceResponse.decode(new Reader(data)));
    }
    LastValsetRequests(request) {
        const data = QueryLastValsetRequestsRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "LastValsetRequests", data);
        return promise.then((data) => QueryLastValsetRequestsResponse.decode(new Reader(data)));
    }
    LastPendingValsetRequestByAddr(request) {
        const data = QueryLastPendingValsetRequestByAddrRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "LastPendingValsetRequestByAddr", data);
        return promise.then((data) => QueryLastPendingValsetRequestByAddrResponse.decode(new Reader(data)));
    }
    LastPendingBatchRequestByAddr(request) {
        const data = QueryLastPendingBatchRequestByAddrRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "LastPendingBatchRequestByAddr", data);
        return promise.then((data) => QueryLastPendingBatchRequestByAddrResponse.decode(new Reader(data)));
    }
    LastPendingLogicCallByAddr(request) {
        const data = QueryLastPendingLogicCallByAddrRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "LastPendingLogicCallByAddr", data);
        return promise.then((data) => QueryLastPendingLogicCallByAddrResponse.decode(new Reader(data)));
    }
    LastEventNonceByAddr(request) {
        const data = QueryLastEventNonceByAddrRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "LastEventNonceByAddr", data);
        return promise.then((data) => QueryLastEventNonceByAddrResponse.decode(new Reader(data)));
    }
    BatchFees(request) {
        const data = QueryBatchFeeRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "BatchFees", data);
        return promise.then((data) => QueryBatchFeeResponse.decode(new Reader(data)));
    }
    OutgoingTxBatches(request) {
        const data = QueryOutgoingTxBatchesRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "OutgoingTxBatches", data);
        return promise.then((data) => QueryOutgoingTxBatchesResponse.decode(new Reader(data)));
    }
    OutgoingLogicCalls(request) {
        const data = QueryOutgoingLogicCallsRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "OutgoingLogicCalls", data);
        return promise.then((data) => QueryOutgoingLogicCallsResponse.decode(new Reader(data)));
    }
    BatchRequestByNonce(request) {
        const data = QueryBatchRequestByNonceRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "BatchRequestByNonce", data);
        return promise.then((data) => QueryBatchRequestByNonceResponse.decode(new Reader(data)));
    }
    BatchConfirms(request) {
        const data = QueryBatchConfirmsRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "BatchConfirms", data);
        return promise.then((data) => QueryBatchConfirmsResponse.decode(new Reader(data)));
    }
    LogicConfirms(request) {
        const data = QueryLogicConfirmsRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "LogicConfirms", data);
        return promise.then((data) => QueryLogicConfirmsResponse.decode(new Reader(data)));
    }
    Erc20ToDenom(request) {
        const data = QueryErc20ToDenomRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "Erc20ToDenom", data);
        return promise.then((data) => QueryErc20ToDenomResponse.decode(new Reader(data)));
    }
    DenomToErc20(request) {
        const data = QueryDenomToErc20Request.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "DenomToErc20", data);
        return promise.then((data) => QueryDenomToErc20Response.decode(new Reader(data)));
    }
    GetDelegateKeyByValidator(request) {
        const data = QueryDelegateKeysByValidatorAddress.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "GetDelegateKeyByValidator", data);
        return promise.then((data) => QueryDelegateKeysByValidatorAddressResponse.decode(new Reader(data)));
    }
    GetDelegateKeyByEth(request) {
        const data = QueryDelegateKeysByEthAddress.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "GetDelegateKeyByEth", data);
        return promise.then((data) => QueryDelegateKeysByEthAddressResponse.decode(new Reader(data)));
    }
    GetDelegateKeyByOrchestrator(request) {
        const data = QueryDelegateKeysByOrchestratorAddress.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "GetDelegateKeyByOrchestrator", data);
        return promise.then((data) => QueryDelegateKeysByOrchestratorAddressResponse.decode(new Reader(data)));
    }
    GetPendingSendToEth(request) {
        const data = QueryPendingSendToEth.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "GetPendingSendToEth", data);
        return promise.then((data) => QueryPendingSendToEthResponse.decode(new Reader(data)));
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
