/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Params } from "../gravity/genesis";
import { Valset } from "../gravity/types";
import {
  MsgValsetConfirm,
  MsgConfirmBatch,
  MsgConfirmLogicCall,
} from "../gravity/msgs";
import { BatchFees } from "../gravity/pool";
import {
  OutgoingTxBatch,
  OutgoingLogicCall,
  OutgoingTransferTx,
} from "../gravity/batch";

export const protobufPackage = "gravity.v1";

export interface QueryParamsRequest {}

export interface QueryParamsResponse {
  params: Params | undefined;
}

export interface QueryCurrentValsetRequest {}

export interface QueryAllOrchestratorAddress {}

export interface QueryCurrentValsetResponse {
  valset: Valset | undefined;
}

export interface QueryValsetRequestRequest {
  nonce: number;
}

export interface QueryValsetRequestResponse {
  valset: Valset | undefined;
}

export interface QueryValsetConfirmRequest {
  nonce: number;
  address: string;
}

export interface QueryValsetConfirmResponse {
  confirm: MsgValsetConfirm | undefined;
}

export interface QueryValsetConfirmsByNonceRequest {
  nonce: number;
}

export interface QueryValsetConfirmsByNonceResponse {
  confirms: MsgValsetConfirm[];
}

export interface QueryLastValsetRequestsRequest {}

export interface QueryLastValsetRequestsResponse {
  valsets: Valset[];
}

export interface QueryLastPendingValsetRequestByAddrRequest {
  address: string;
}

export interface QueryLastPendingValsetRequestByAddrResponse {
  valsets: Valset[];
}

export interface QueryBatchFeeRequest {}

export interface QueryBatchFeeResponse {
  batchFees: BatchFees[];
}

export interface QueryLastPendingBatchRequestByAddrRequest {
  address: string;
}

export interface QueryLastPendingBatchRequestByAddrResponse {
  batch: OutgoingTxBatch | undefined;
}

export interface QueryLastPendingLogicCallByAddrRequest {
  address: string;
}

export interface QueryLastPendingLogicCallByAddrResponse {
  call: OutgoingLogicCall | undefined;
}

export interface QueryOutgoingTxBatchesRequest {}

export interface QueryOutgoingTxBatchesResponse {
  batches: OutgoingTxBatch[];
}

export interface QueryOutgoingLogicCallsRequest {}

export interface QueryOutgoingLogicCallsResponse {
  calls: OutgoingLogicCall[];
}

export interface QueryBatchRequestByNonceRequest {
  nonce: number;
  contractAddress: string;
}

export interface QueryBatchRequestByNonceResponse {
  batch: OutgoingTxBatch | undefined;
}

export interface QueryBatchConfirmsRequest {
  nonce: number;
  contractAddress: string;
}

export interface QueryBatchConfirmsResponse {
  confirms: MsgConfirmBatch[];
}

export interface QueryLogicConfirmsRequest {
  invalidationId: Uint8Array;
  invalidationNonce: number;
}

export interface QueryLogicConfirmsResponse {
  confirms: MsgConfirmLogicCall[];
}

export interface QueryLastEventNonceByAddrRequest {
  address: string;
}

export interface QueryLastEventNonceByAddrResponse {
  eventNonce: number;
}

export interface QueryErc20ToDenomRequest {
  erc20: string;
}

export interface QueryErc20ToDenomResponse {
  denom: string;
  cosmosOriginated: boolean;
}

export interface QueryDenomToErc20Request {
  denom: string;
}

export interface QueryDenomToErc20Response {
  erc20: string;
  cosmosOriginated: boolean;
}

export interface QueryDelegateKeysByValidatorAddress {
  validatorAddress: string;
}

export interface QueryDelegateKeysByValidatorAddressResponse {
  ethAddress: string;
  orchestratorAddress: string;
}

export interface QueryDelegateKeysByEthAddress {
  ethAddress: string;
}

export interface QueryDelegateKeysByEthAddressResponse {
  validatorAddress: string;
  orchestratorAddress: string;
}

export interface QueryDelegateKeysByOrchestratorAddress {
  orchestratorAddress: string;
}

export interface QueryDelegateKeysByOrchestratorAddressResponse {
  validatorAddress: string;
  ethAddress: string;
}

export interface QueryPendingSendToEth {
  senderAddress: string;
}

export interface QueryPendingSendToEthResponse {
  transfersInBatches: OutgoingTransferTx[];
  unbatchedTransfers: OutgoingTransferTx[];
}

export interface QueryAllCosmosToEth {
  senderAddress: string;
}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
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

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
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

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryCurrentValsetRequest: object = {};

export const QueryCurrentValsetRequest = {
  encode(
    _: QueryCurrentValsetRequest,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryCurrentValsetRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryCurrentValsetRequest,
    } as QueryCurrentValsetRequest;
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

  fromJSON(_: any): QueryCurrentValsetRequest {
    const message = {
      ...baseQueryCurrentValsetRequest,
    } as QueryCurrentValsetRequest;
    return message;
  },

  toJSON(_: QueryCurrentValsetRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryCurrentValsetRequest>
  ): QueryCurrentValsetRequest {
    const message = {
      ...baseQueryCurrentValsetRequest,
    } as QueryCurrentValsetRequest;
    return message;
  },
};

const baseQueryAllOrchestratorAddress: object = {};

export const QueryAllOrchestratorAddress = {
  encode(
    _: QueryAllOrchestratorAddress,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllOrchestratorAddress {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllOrchestratorAddress,
    } as QueryAllOrchestratorAddress;
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

  fromJSON(_: any): QueryAllOrchestratorAddress {
    const message = {
      ...baseQueryAllOrchestratorAddress,
    } as QueryAllOrchestratorAddress;
    return message;
  },

  toJSON(_: QueryAllOrchestratorAddress): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryAllOrchestratorAddress>
  ): QueryAllOrchestratorAddress {
    const message = {
      ...baseQueryAllOrchestratorAddress,
    } as QueryAllOrchestratorAddress;
    return message;
  },
};

const baseQueryCurrentValsetResponse: object = {};

export const QueryCurrentValsetResponse = {
  encode(
    message: QueryCurrentValsetResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.valset !== undefined) {
      Valset.encode(message.valset, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryCurrentValsetResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryCurrentValsetResponse,
    } as QueryCurrentValsetResponse;
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

  fromJSON(object: any): QueryCurrentValsetResponse {
    const message = {
      ...baseQueryCurrentValsetResponse,
    } as QueryCurrentValsetResponse;
    if (object.valset !== undefined && object.valset !== null) {
      message.valset = Valset.fromJSON(object.valset);
    } else {
      message.valset = undefined;
    }
    return message;
  },

  toJSON(message: QueryCurrentValsetResponse): unknown {
    const obj: any = {};
    message.valset !== undefined &&
      (obj.valset = message.valset ? Valset.toJSON(message.valset) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryCurrentValsetResponse>
  ): QueryCurrentValsetResponse {
    const message = {
      ...baseQueryCurrentValsetResponse,
    } as QueryCurrentValsetResponse;
    if (object.valset !== undefined && object.valset !== null) {
      message.valset = Valset.fromPartial(object.valset);
    } else {
      message.valset = undefined;
    }
    return message;
  },
};

const baseQueryValsetRequestRequest: object = { nonce: 0 };

export const QueryValsetRequestRequest = {
  encode(
    message: QueryValsetRequestRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.nonce !== 0) {
      writer.uint32(8).uint64(message.nonce);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryValsetRequestRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryValsetRequestRequest,
    } as QueryValsetRequestRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nonce = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryValsetRequestRequest {
    const message = {
      ...baseQueryValsetRequestRequest,
    } as QueryValsetRequestRequest;
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = Number(object.nonce);
    } else {
      message.nonce = 0;
    }
    return message;
  },

  toJSON(message: QueryValsetRequestRequest): unknown {
    const obj: any = {};
    message.nonce !== undefined && (obj.nonce = message.nonce);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryValsetRequestRequest>
  ): QueryValsetRequestRequest {
    const message = {
      ...baseQueryValsetRequestRequest,
    } as QueryValsetRequestRequest;
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = object.nonce;
    } else {
      message.nonce = 0;
    }
    return message;
  },
};

const baseQueryValsetRequestResponse: object = {};

export const QueryValsetRequestResponse = {
  encode(
    message: QueryValsetRequestResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.valset !== undefined) {
      Valset.encode(message.valset, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryValsetRequestResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryValsetRequestResponse,
    } as QueryValsetRequestResponse;
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

  fromJSON(object: any): QueryValsetRequestResponse {
    const message = {
      ...baseQueryValsetRequestResponse,
    } as QueryValsetRequestResponse;
    if (object.valset !== undefined && object.valset !== null) {
      message.valset = Valset.fromJSON(object.valset);
    } else {
      message.valset = undefined;
    }
    return message;
  },

  toJSON(message: QueryValsetRequestResponse): unknown {
    const obj: any = {};
    message.valset !== undefined &&
      (obj.valset = message.valset ? Valset.toJSON(message.valset) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryValsetRequestResponse>
  ): QueryValsetRequestResponse {
    const message = {
      ...baseQueryValsetRequestResponse,
    } as QueryValsetRequestResponse;
    if (object.valset !== undefined && object.valset !== null) {
      message.valset = Valset.fromPartial(object.valset);
    } else {
      message.valset = undefined;
    }
    return message;
  },
};

const baseQueryValsetConfirmRequest: object = { nonce: 0, address: "" };

export const QueryValsetConfirmRequest = {
  encode(
    message: QueryValsetConfirmRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.nonce !== 0) {
      writer.uint32(8).uint64(message.nonce);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryValsetConfirmRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryValsetConfirmRequest,
    } as QueryValsetConfirmRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nonce = longToNumber(reader.uint64() as Long);
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

  fromJSON(object: any): QueryValsetConfirmRequest {
    const message = {
      ...baseQueryValsetConfirmRequest,
    } as QueryValsetConfirmRequest;
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = Number(object.nonce);
    } else {
      message.nonce = 0;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    return message;
  },

  toJSON(message: QueryValsetConfirmRequest): unknown {
    const obj: any = {};
    message.nonce !== undefined && (obj.nonce = message.nonce);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryValsetConfirmRequest>
  ): QueryValsetConfirmRequest {
    const message = {
      ...baseQueryValsetConfirmRequest,
    } as QueryValsetConfirmRequest;
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = object.nonce;
    } else {
      message.nonce = 0;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    return message;
  },
};

const baseQueryValsetConfirmResponse: object = {};

export const QueryValsetConfirmResponse = {
  encode(
    message: QueryValsetConfirmResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.confirm !== undefined) {
      MsgValsetConfirm.encode(
        message.confirm,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryValsetConfirmResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryValsetConfirmResponse,
    } as QueryValsetConfirmResponse;
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

  fromJSON(object: any): QueryValsetConfirmResponse {
    const message = {
      ...baseQueryValsetConfirmResponse,
    } as QueryValsetConfirmResponse;
    if (object.confirm !== undefined && object.confirm !== null) {
      message.confirm = MsgValsetConfirm.fromJSON(object.confirm);
    } else {
      message.confirm = undefined;
    }
    return message;
  },

  toJSON(message: QueryValsetConfirmResponse): unknown {
    const obj: any = {};
    message.confirm !== undefined &&
      (obj.confirm = message.confirm
        ? MsgValsetConfirm.toJSON(message.confirm)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryValsetConfirmResponse>
  ): QueryValsetConfirmResponse {
    const message = {
      ...baseQueryValsetConfirmResponse,
    } as QueryValsetConfirmResponse;
    if (object.confirm !== undefined && object.confirm !== null) {
      message.confirm = MsgValsetConfirm.fromPartial(object.confirm);
    } else {
      message.confirm = undefined;
    }
    return message;
  },
};

const baseQueryValsetConfirmsByNonceRequest: object = { nonce: 0 };

export const QueryValsetConfirmsByNonceRequest = {
  encode(
    message: QueryValsetConfirmsByNonceRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.nonce !== 0) {
      writer.uint32(8).uint64(message.nonce);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryValsetConfirmsByNonceRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryValsetConfirmsByNonceRequest,
    } as QueryValsetConfirmsByNonceRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nonce = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryValsetConfirmsByNonceRequest {
    const message = {
      ...baseQueryValsetConfirmsByNonceRequest,
    } as QueryValsetConfirmsByNonceRequest;
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = Number(object.nonce);
    } else {
      message.nonce = 0;
    }
    return message;
  },

  toJSON(message: QueryValsetConfirmsByNonceRequest): unknown {
    const obj: any = {};
    message.nonce !== undefined && (obj.nonce = message.nonce);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryValsetConfirmsByNonceRequest>
  ): QueryValsetConfirmsByNonceRequest {
    const message = {
      ...baseQueryValsetConfirmsByNonceRequest,
    } as QueryValsetConfirmsByNonceRequest;
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = object.nonce;
    } else {
      message.nonce = 0;
    }
    return message;
  },
};

const baseQueryValsetConfirmsByNonceResponse: object = {};

export const QueryValsetConfirmsByNonceResponse = {
  encode(
    message: QueryValsetConfirmsByNonceResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.confirms) {
      MsgValsetConfirm.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryValsetConfirmsByNonceResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryValsetConfirmsByNonceResponse,
    } as QueryValsetConfirmsByNonceResponse;
    message.confirms = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.confirms.push(
            MsgValsetConfirm.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryValsetConfirmsByNonceResponse {
    const message = {
      ...baseQueryValsetConfirmsByNonceResponse,
    } as QueryValsetConfirmsByNonceResponse;
    message.confirms = [];
    if (object.confirms !== undefined && object.confirms !== null) {
      for (const e of object.confirms) {
        message.confirms.push(MsgValsetConfirm.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryValsetConfirmsByNonceResponse): unknown {
    const obj: any = {};
    if (message.confirms) {
      obj.confirms = message.confirms.map((e) =>
        e ? MsgValsetConfirm.toJSON(e) : undefined
      );
    } else {
      obj.confirms = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryValsetConfirmsByNonceResponse>
  ): QueryValsetConfirmsByNonceResponse {
    const message = {
      ...baseQueryValsetConfirmsByNonceResponse,
    } as QueryValsetConfirmsByNonceResponse;
    message.confirms = [];
    if (object.confirms !== undefined && object.confirms !== null) {
      for (const e of object.confirms) {
        message.confirms.push(MsgValsetConfirm.fromPartial(e));
      }
    }
    return message;
  },
};

const baseQueryLastValsetRequestsRequest: object = {};

export const QueryLastValsetRequestsRequest = {
  encode(
    _: QueryLastValsetRequestsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryLastValsetRequestsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryLastValsetRequestsRequest,
    } as QueryLastValsetRequestsRequest;
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

  fromJSON(_: any): QueryLastValsetRequestsRequest {
    const message = {
      ...baseQueryLastValsetRequestsRequest,
    } as QueryLastValsetRequestsRequest;
    return message;
  },

  toJSON(_: QueryLastValsetRequestsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryLastValsetRequestsRequest>
  ): QueryLastValsetRequestsRequest {
    const message = {
      ...baseQueryLastValsetRequestsRequest,
    } as QueryLastValsetRequestsRequest;
    return message;
  },
};

const baseQueryLastValsetRequestsResponse: object = {};

export const QueryLastValsetRequestsResponse = {
  encode(
    message: QueryLastValsetRequestsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.valsets) {
      Valset.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryLastValsetRequestsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryLastValsetRequestsResponse,
    } as QueryLastValsetRequestsResponse;
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

  fromJSON(object: any): QueryLastValsetRequestsResponse {
    const message = {
      ...baseQueryLastValsetRequestsResponse,
    } as QueryLastValsetRequestsResponse;
    message.valsets = [];
    if (object.valsets !== undefined && object.valsets !== null) {
      for (const e of object.valsets) {
        message.valsets.push(Valset.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryLastValsetRequestsResponse): unknown {
    const obj: any = {};
    if (message.valsets) {
      obj.valsets = message.valsets.map((e) =>
        e ? Valset.toJSON(e) : undefined
      );
    } else {
      obj.valsets = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryLastValsetRequestsResponse>
  ): QueryLastValsetRequestsResponse {
    const message = {
      ...baseQueryLastValsetRequestsResponse,
    } as QueryLastValsetRequestsResponse;
    message.valsets = [];
    if (object.valsets !== undefined && object.valsets !== null) {
      for (const e of object.valsets) {
        message.valsets.push(Valset.fromPartial(e));
      }
    }
    return message;
  },
};

const baseQueryLastPendingValsetRequestByAddrRequest: object = { address: "" };

export const QueryLastPendingValsetRequestByAddrRequest = {
  encode(
    message: QueryLastPendingValsetRequestByAddrRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryLastPendingValsetRequestByAddrRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryLastPendingValsetRequestByAddrRequest,
    } as QueryLastPendingValsetRequestByAddrRequest;
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

  fromJSON(object: any): QueryLastPendingValsetRequestByAddrRequest {
    const message = {
      ...baseQueryLastPendingValsetRequestByAddrRequest,
    } as QueryLastPendingValsetRequestByAddrRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    return message;
  },

  toJSON(message: QueryLastPendingValsetRequestByAddrRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryLastPendingValsetRequestByAddrRequest>
  ): QueryLastPendingValsetRequestByAddrRequest {
    const message = {
      ...baseQueryLastPendingValsetRequestByAddrRequest,
    } as QueryLastPendingValsetRequestByAddrRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    return message;
  },
};

const baseQueryLastPendingValsetRequestByAddrResponse: object = {};

export const QueryLastPendingValsetRequestByAddrResponse = {
  encode(
    message: QueryLastPendingValsetRequestByAddrResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.valsets) {
      Valset.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryLastPendingValsetRequestByAddrResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryLastPendingValsetRequestByAddrResponse,
    } as QueryLastPendingValsetRequestByAddrResponse;
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

  fromJSON(object: any): QueryLastPendingValsetRequestByAddrResponse {
    const message = {
      ...baseQueryLastPendingValsetRequestByAddrResponse,
    } as QueryLastPendingValsetRequestByAddrResponse;
    message.valsets = [];
    if (object.valsets !== undefined && object.valsets !== null) {
      for (const e of object.valsets) {
        message.valsets.push(Valset.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryLastPendingValsetRequestByAddrResponse): unknown {
    const obj: any = {};
    if (message.valsets) {
      obj.valsets = message.valsets.map((e) =>
        e ? Valset.toJSON(e) : undefined
      );
    } else {
      obj.valsets = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryLastPendingValsetRequestByAddrResponse>
  ): QueryLastPendingValsetRequestByAddrResponse {
    const message = {
      ...baseQueryLastPendingValsetRequestByAddrResponse,
    } as QueryLastPendingValsetRequestByAddrResponse;
    message.valsets = [];
    if (object.valsets !== undefined && object.valsets !== null) {
      for (const e of object.valsets) {
        message.valsets.push(Valset.fromPartial(e));
      }
    }
    return message;
  },
};

const baseQueryBatchFeeRequest: object = {};

export const QueryBatchFeeRequest = {
  encode(_: QueryBatchFeeRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryBatchFeeRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryBatchFeeRequest } as QueryBatchFeeRequest;
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

  fromJSON(_: any): QueryBatchFeeRequest {
    const message = { ...baseQueryBatchFeeRequest } as QueryBatchFeeRequest;
    return message;
  },

  toJSON(_: QueryBatchFeeRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryBatchFeeRequest>): QueryBatchFeeRequest {
    const message = { ...baseQueryBatchFeeRequest } as QueryBatchFeeRequest;
    return message;
  },
};

const baseQueryBatchFeeResponse: object = {};

export const QueryBatchFeeResponse = {
  encode(
    message: QueryBatchFeeResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.batchFees) {
      BatchFees.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryBatchFeeResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryBatchFeeResponse } as QueryBatchFeeResponse;
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

  fromJSON(object: any): QueryBatchFeeResponse {
    const message = { ...baseQueryBatchFeeResponse } as QueryBatchFeeResponse;
    message.batchFees = [];
    if (object.batchFees !== undefined && object.batchFees !== null) {
      for (const e of object.batchFees) {
        message.batchFees.push(BatchFees.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryBatchFeeResponse): unknown {
    const obj: any = {};
    if (message.batchFees) {
      obj.batchFees = message.batchFees.map((e) =>
        e ? BatchFees.toJSON(e) : undefined
      );
    } else {
      obj.batchFees = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryBatchFeeResponse>
  ): QueryBatchFeeResponse {
    const message = { ...baseQueryBatchFeeResponse } as QueryBatchFeeResponse;
    message.batchFees = [];
    if (object.batchFees !== undefined && object.batchFees !== null) {
      for (const e of object.batchFees) {
        message.batchFees.push(BatchFees.fromPartial(e));
      }
    }
    return message;
  },
};

const baseQueryLastPendingBatchRequestByAddrRequest: object = { address: "" };

export const QueryLastPendingBatchRequestByAddrRequest = {
  encode(
    message: QueryLastPendingBatchRequestByAddrRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryLastPendingBatchRequestByAddrRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryLastPendingBatchRequestByAddrRequest,
    } as QueryLastPendingBatchRequestByAddrRequest;
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

  fromJSON(object: any): QueryLastPendingBatchRequestByAddrRequest {
    const message = {
      ...baseQueryLastPendingBatchRequestByAddrRequest,
    } as QueryLastPendingBatchRequestByAddrRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    return message;
  },

  toJSON(message: QueryLastPendingBatchRequestByAddrRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryLastPendingBatchRequestByAddrRequest>
  ): QueryLastPendingBatchRequestByAddrRequest {
    const message = {
      ...baseQueryLastPendingBatchRequestByAddrRequest,
    } as QueryLastPendingBatchRequestByAddrRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    return message;
  },
};

const baseQueryLastPendingBatchRequestByAddrResponse: object = {};

export const QueryLastPendingBatchRequestByAddrResponse = {
  encode(
    message: QueryLastPendingBatchRequestByAddrResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.batch !== undefined) {
      OutgoingTxBatch.encode(message.batch, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryLastPendingBatchRequestByAddrResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryLastPendingBatchRequestByAddrResponse,
    } as QueryLastPendingBatchRequestByAddrResponse;
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

  fromJSON(object: any): QueryLastPendingBatchRequestByAddrResponse {
    const message = {
      ...baseQueryLastPendingBatchRequestByAddrResponse,
    } as QueryLastPendingBatchRequestByAddrResponse;
    if (object.batch !== undefined && object.batch !== null) {
      message.batch = OutgoingTxBatch.fromJSON(object.batch);
    } else {
      message.batch = undefined;
    }
    return message;
  },

  toJSON(message: QueryLastPendingBatchRequestByAddrResponse): unknown {
    const obj: any = {};
    message.batch !== undefined &&
      (obj.batch = message.batch
        ? OutgoingTxBatch.toJSON(message.batch)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryLastPendingBatchRequestByAddrResponse>
  ): QueryLastPendingBatchRequestByAddrResponse {
    const message = {
      ...baseQueryLastPendingBatchRequestByAddrResponse,
    } as QueryLastPendingBatchRequestByAddrResponse;
    if (object.batch !== undefined && object.batch !== null) {
      message.batch = OutgoingTxBatch.fromPartial(object.batch);
    } else {
      message.batch = undefined;
    }
    return message;
  },
};

const baseQueryLastPendingLogicCallByAddrRequest: object = { address: "" };

export const QueryLastPendingLogicCallByAddrRequest = {
  encode(
    message: QueryLastPendingLogicCallByAddrRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryLastPendingLogicCallByAddrRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryLastPendingLogicCallByAddrRequest,
    } as QueryLastPendingLogicCallByAddrRequest;
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

  fromJSON(object: any): QueryLastPendingLogicCallByAddrRequest {
    const message = {
      ...baseQueryLastPendingLogicCallByAddrRequest,
    } as QueryLastPendingLogicCallByAddrRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    return message;
  },

  toJSON(message: QueryLastPendingLogicCallByAddrRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryLastPendingLogicCallByAddrRequest>
  ): QueryLastPendingLogicCallByAddrRequest {
    const message = {
      ...baseQueryLastPendingLogicCallByAddrRequest,
    } as QueryLastPendingLogicCallByAddrRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    return message;
  },
};

const baseQueryLastPendingLogicCallByAddrResponse: object = {};

export const QueryLastPendingLogicCallByAddrResponse = {
  encode(
    message: QueryLastPendingLogicCallByAddrResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.call !== undefined) {
      OutgoingLogicCall.encode(message.call, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryLastPendingLogicCallByAddrResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryLastPendingLogicCallByAddrResponse,
    } as QueryLastPendingLogicCallByAddrResponse;
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

  fromJSON(object: any): QueryLastPendingLogicCallByAddrResponse {
    const message = {
      ...baseQueryLastPendingLogicCallByAddrResponse,
    } as QueryLastPendingLogicCallByAddrResponse;
    if (object.call !== undefined && object.call !== null) {
      message.call = OutgoingLogicCall.fromJSON(object.call);
    } else {
      message.call = undefined;
    }
    return message;
  },

  toJSON(message: QueryLastPendingLogicCallByAddrResponse): unknown {
    const obj: any = {};
    message.call !== undefined &&
      (obj.call = message.call
        ? OutgoingLogicCall.toJSON(message.call)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryLastPendingLogicCallByAddrResponse>
  ): QueryLastPendingLogicCallByAddrResponse {
    const message = {
      ...baseQueryLastPendingLogicCallByAddrResponse,
    } as QueryLastPendingLogicCallByAddrResponse;
    if (object.call !== undefined && object.call !== null) {
      message.call = OutgoingLogicCall.fromPartial(object.call);
    } else {
      message.call = undefined;
    }
    return message;
  },
};

const baseQueryOutgoingTxBatchesRequest: object = {};

export const QueryOutgoingTxBatchesRequest = {
  encode(
    _: QueryOutgoingTxBatchesRequest,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryOutgoingTxBatchesRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryOutgoingTxBatchesRequest,
    } as QueryOutgoingTxBatchesRequest;
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

  fromJSON(_: any): QueryOutgoingTxBatchesRequest {
    const message = {
      ...baseQueryOutgoingTxBatchesRequest,
    } as QueryOutgoingTxBatchesRequest;
    return message;
  },

  toJSON(_: QueryOutgoingTxBatchesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryOutgoingTxBatchesRequest>
  ): QueryOutgoingTxBatchesRequest {
    const message = {
      ...baseQueryOutgoingTxBatchesRequest,
    } as QueryOutgoingTxBatchesRequest;
    return message;
  },
};

const baseQueryOutgoingTxBatchesResponse: object = {};

export const QueryOutgoingTxBatchesResponse = {
  encode(
    message: QueryOutgoingTxBatchesResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.batches) {
      OutgoingTxBatch.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryOutgoingTxBatchesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryOutgoingTxBatchesResponse,
    } as QueryOutgoingTxBatchesResponse;
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

  fromJSON(object: any): QueryOutgoingTxBatchesResponse {
    const message = {
      ...baseQueryOutgoingTxBatchesResponse,
    } as QueryOutgoingTxBatchesResponse;
    message.batches = [];
    if (object.batches !== undefined && object.batches !== null) {
      for (const e of object.batches) {
        message.batches.push(OutgoingTxBatch.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryOutgoingTxBatchesResponse): unknown {
    const obj: any = {};
    if (message.batches) {
      obj.batches = message.batches.map((e) =>
        e ? OutgoingTxBatch.toJSON(e) : undefined
      );
    } else {
      obj.batches = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryOutgoingTxBatchesResponse>
  ): QueryOutgoingTxBatchesResponse {
    const message = {
      ...baseQueryOutgoingTxBatchesResponse,
    } as QueryOutgoingTxBatchesResponse;
    message.batches = [];
    if (object.batches !== undefined && object.batches !== null) {
      for (const e of object.batches) {
        message.batches.push(OutgoingTxBatch.fromPartial(e));
      }
    }
    return message;
  },
};

const baseQueryOutgoingLogicCallsRequest: object = {};

export const QueryOutgoingLogicCallsRequest = {
  encode(
    _: QueryOutgoingLogicCallsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryOutgoingLogicCallsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryOutgoingLogicCallsRequest,
    } as QueryOutgoingLogicCallsRequest;
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

  fromJSON(_: any): QueryOutgoingLogicCallsRequest {
    const message = {
      ...baseQueryOutgoingLogicCallsRequest,
    } as QueryOutgoingLogicCallsRequest;
    return message;
  },

  toJSON(_: QueryOutgoingLogicCallsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryOutgoingLogicCallsRequest>
  ): QueryOutgoingLogicCallsRequest {
    const message = {
      ...baseQueryOutgoingLogicCallsRequest,
    } as QueryOutgoingLogicCallsRequest;
    return message;
  },
};

const baseQueryOutgoingLogicCallsResponse: object = {};

export const QueryOutgoingLogicCallsResponse = {
  encode(
    message: QueryOutgoingLogicCallsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.calls) {
      OutgoingLogicCall.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryOutgoingLogicCallsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryOutgoingLogicCallsResponse,
    } as QueryOutgoingLogicCallsResponse;
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

  fromJSON(object: any): QueryOutgoingLogicCallsResponse {
    const message = {
      ...baseQueryOutgoingLogicCallsResponse,
    } as QueryOutgoingLogicCallsResponse;
    message.calls = [];
    if (object.calls !== undefined && object.calls !== null) {
      for (const e of object.calls) {
        message.calls.push(OutgoingLogicCall.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryOutgoingLogicCallsResponse): unknown {
    const obj: any = {};
    if (message.calls) {
      obj.calls = message.calls.map((e) =>
        e ? OutgoingLogicCall.toJSON(e) : undefined
      );
    } else {
      obj.calls = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryOutgoingLogicCallsResponse>
  ): QueryOutgoingLogicCallsResponse {
    const message = {
      ...baseQueryOutgoingLogicCallsResponse,
    } as QueryOutgoingLogicCallsResponse;
    message.calls = [];
    if (object.calls !== undefined && object.calls !== null) {
      for (const e of object.calls) {
        message.calls.push(OutgoingLogicCall.fromPartial(e));
      }
    }
    return message;
  },
};

const baseQueryBatchRequestByNonceRequest: object = {
  nonce: 0,
  contractAddress: "",
};

export const QueryBatchRequestByNonceRequest = {
  encode(
    message: QueryBatchRequestByNonceRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.nonce !== 0) {
      writer.uint32(8).uint64(message.nonce);
    }
    if (message.contractAddress !== "") {
      writer.uint32(18).string(message.contractAddress);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryBatchRequestByNonceRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryBatchRequestByNonceRequest,
    } as QueryBatchRequestByNonceRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nonce = longToNumber(reader.uint64() as Long);
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

  fromJSON(object: any): QueryBatchRequestByNonceRequest {
    const message = {
      ...baseQueryBatchRequestByNonceRequest,
    } as QueryBatchRequestByNonceRequest;
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = Number(object.nonce);
    } else {
      message.nonce = 0;
    }
    if (
      object.contractAddress !== undefined &&
      object.contractAddress !== null
    ) {
      message.contractAddress = String(object.contractAddress);
    } else {
      message.contractAddress = "";
    }
    return message;
  },

  toJSON(message: QueryBatchRequestByNonceRequest): unknown {
    const obj: any = {};
    message.nonce !== undefined && (obj.nonce = message.nonce);
    message.contractAddress !== undefined &&
      (obj.contractAddress = message.contractAddress);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryBatchRequestByNonceRequest>
  ): QueryBatchRequestByNonceRequest {
    const message = {
      ...baseQueryBatchRequestByNonceRequest,
    } as QueryBatchRequestByNonceRequest;
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = object.nonce;
    } else {
      message.nonce = 0;
    }
    if (
      object.contractAddress !== undefined &&
      object.contractAddress !== null
    ) {
      message.contractAddress = object.contractAddress;
    } else {
      message.contractAddress = "";
    }
    return message;
  },
};

const baseQueryBatchRequestByNonceResponse: object = {};

export const QueryBatchRequestByNonceResponse = {
  encode(
    message: QueryBatchRequestByNonceResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.batch !== undefined) {
      OutgoingTxBatch.encode(message.batch, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryBatchRequestByNonceResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryBatchRequestByNonceResponse,
    } as QueryBatchRequestByNonceResponse;
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

  fromJSON(object: any): QueryBatchRequestByNonceResponse {
    const message = {
      ...baseQueryBatchRequestByNonceResponse,
    } as QueryBatchRequestByNonceResponse;
    if (object.batch !== undefined && object.batch !== null) {
      message.batch = OutgoingTxBatch.fromJSON(object.batch);
    } else {
      message.batch = undefined;
    }
    return message;
  },

  toJSON(message: QueryBatchRequestByNonceResponse): unknown {
    const obj: any = {};
    message.batch !== undefined &&
      (obj.batch = message.batch
        ? OutgoingTxBatch.toJSON(message.batch)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryBatchRequestByNonceResponse>
  ): QueryBatchRequestByNonceResponse {
    const message = {
      ...baseQueryBatchRequestByNonceResponse,
    } as QueryBatchRequestByNonceResponse;
    if (object.batch !== undefined && object.batch !== null) {
      message.batch = OutgoingTxBatch.fromPartial(object.batch);
    } else {
      message.batch = undefined;
    }
    return message;
  },
};

const baseQueryBatchConfirmsRequest: object = { nonce: 0, contractAddress: "" };

export const QueryBatchConfirmsRequest = {
  encode(
    message: QueryBatchConfirmsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.nonce !== 0) {
      writer.uint32(8).uint64(message.nonce);
    }
    if (message.contractAddress !== "") {
      writer.uint32(18).string(message.contractAddress);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryBatchConfirmsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryBatchConfirmsRequest,
    } as QueryBatchConfirmsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nonce = longToNumber(reader.uint64() as Long);
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

  fromJSON(object: any): QueryBatchConfirmsRequest {
    const message = {
      ...baseQueryBatchConfirmsRequest,
    } as QueryBatchConfirmsRequest;
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = Number(object.nonce);
    } else {
      message.nonce = 0;
    }
    if (
      object.contractAddress !== undefined &&
      object.contractAddress !== null
    ) {
      message.contractAddress = String(object.contractAddress);
    } else {
      message.contractAddress = "";
    }
    return message;
  },

  toJSON(message: QueryBatchConfirmsRequest): unknown {
    const obj: any = {};
    message.nonce !== undefined && (obj.nonce = message.nonce);
    message.contractAddress !== undefined &&
      (obj.contractAddress = message.contractAddress);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryBatchConfirmsRequest>
  ): QueryBatchConfirmsRequest {
    const message = {
      ...baseQueryBatchConfirmsRequest,
    } as QueryBatchConfirmsRequest;
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = object.nonce;
    } else {
      message.nonce = 0;
    }
    if (
      object.contractAddress !== undefined &&
      object.contractAddress !== null
    ) {
      message.contractAddress = object.contractAddress;
    } else {
      message.contractAddress = "";
    }
    return message;
  },
};

const baseQueryBatchConfirmsResponse: object = {};

export const QueryBatchConfirmsResponse = {
  encode(
    message: QueryBatchConfirmsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.confirms) {
      MsgConfirmBatch.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryBatchConfirmsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryBatchConfirmsResponse,
    } as QueryBatchConfirmsResponse;
    message.confirms = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.confirms.push(
            MsgConfirmBatch.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBatchConfirmsResponse {
    const message = {
      ...baseQueryBatchConfirmsResponse,
    } as QueryBatchConfirmsResponse;
    message.confirms = [];
    if (object.confirms !== undefined && object.confirms !== null) {
      for (const e of object.confirms) {
        message.confirms.push(MsgConfirmBatch.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryBatchConfirmsResponse): unknown {
    const obj: any = {};
    if (message.confirms) {
      obj.confirms = message.confirms.map((e) =>
        e ? MsgConfirmBatch.toJSON(e) : undefined
      );
    } else {
      obj.confirms = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryBatchConfirmsResponse>
  ): QueryBatchConfirmsResponse {
    const message = {
      ...baseQueryBatchConfirmsResponse,
    } as QueryBatchConfirmsResponse;
    message.confirms = [];
    if (object.confirms !== undefined && object.confirms !== null) {
      for (const e of object.confirms) {
        message.confirms.push(MsgConfirmBatch.fromPartial(e));
      }
    }
    return message;
  },
};

const baseQueryLogicConfirmsRequest: object = { invalidationNonce: 0 };

export const QueryLogicConfirmsRequest = {
  encode(
    message: QueryLogicConfirmsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.invalidationId.length !== 0) {
      writer.uint32(10).bytes(message.invalidationId);
    }
    if (message.invalidationNonce !== 0) {
      writer.uint32(16).uint64(message.invalidationNonce);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryLogicConfirmsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryLogicConfirmsRequest,
    } as QueryLogicConfirmsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.invalidationId = reader.bytes();
          break;
        case 2:
          message.invalidationNonce = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryLogicConfirmsRequest {
    const message = {
      ...baseQueryLogicConfirmsRequest,
    } as QueryLogicConfirmsRequest;
    if (object.invalidationId !== undefined && object.invalidationId !== null) {
      message.invalidationId = bytesFromBase64(object.invalidationId);
    }
    if (
      object.invalidationNonce !== undefined &&
      object.invalidationNonce !== null
    ) {
      message.invalidationNonce = Number(object.invalidationNonce);
    } else {
      message.invalidationNonce = 0;
    }
    return message;
  },

  toJSON(message: QueryLogicConfirmsRequest): unknown {
    const obj: any = {};
    message.invalidationId !== undefined &&
      (obj.invalidationId = base64FromBytes(
        message.invalidationId !== undefined
          ? message.invalidationId
          : new Uint8Array()
      ));
    message.invalidationNonce !== undefined &&
      (obj.invalidationNonce = message.invalidationNonce);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryLogicConfirmsRequest>
  ): QueryLogicConfirmsRequest {
    const message = {
      ...baseQueryLogicConfirmsRequest,
    } as QueryLogicConfirmsRequest;
    if (object.invalidationId !== undefined && object.invalidationId !== null) {
      message.invalidationId = object.invalidationId;
    } else {
      message.invalidationId = new Uint8Array();
    }
    if (
      object.invalidationNonce !== undefined &&
      object.invalidationNonce !== null
    ) {
      message.invalidationNonce = object.invalidationNonce;
    } else {
      message.invalidationNonce = 0;
    }
    return message;
  },
};

const baseQueryLogicConfirmsResponse: object = {};

export const QueryLogicConfirmsResponse = {
  encode(
    message: QueryLogicConfirmsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.confirms) {
      MsgConfirmLogicCall.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryLogicConfirmsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryLogicConfirmsResponse,
    } as QueryLogicConfirmsResponse;
    message.confirms = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.confirms.push(
            MsgConfirmLogicCall.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryLogicConfirmsResponse {
    const message = {
      ...baseQueryLogicConfirmsResponse,
    } as QueryLogicConfirmsResponse;
    message.confirms = [];
    if (object.confirms !== undefined && object.confirms !== null) {
      for (const e of object.confirms) {
        message.confirms.push(MsgConfirmLogicCall.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryLogicConfirmsResponse): unknown {
    const obj: any = {};
    if (message.confirms) {
      obj.confirms = message.confirms.map((e) =>
        e ? MsgConfirmLogicCall.toJSON(e) : undefined
      );
    } else {
      obj.confirms = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryLogicConfirmsResponse>
  ): QueryLogicConfirmsResponse {
    const message = {
      ...baseQueryLogicConfirmsResponse,
    } as QueryLogicConfirmsResponse;
    message.confirms = [];
    if (object.confirms !== undefined && object.confirms !== null) {
      for (const e of object.confirms) {
        message.confirms.push(MsgConfirmLogicCall.fromPartial(e));
      }
    }
    return message;
  },
};

const baseQueryLastEventNonceByAddrRequest: object = { address: "" };

export const QueryLastEventNonceByAddrRequest = {
  encode(
    message: QueryLastEventNonceByAddrRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryLastEventNonceByAddrRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryLastEventNonceByAddrRequest,
    } as QueryLastEventNonceByAddrRequest;
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

  fromJSON(object: any): QueryLastEventNonceByAddrRequest {
    const message = {
      ...baseQueryLastEventNonceByAddrRequest,
    } as QueryLastEventNonceByAddrRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    return message;
  },

  toJSON(message: QueryLastEventNonceByAddrRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryLastEventNonceByAddrRequest>
  ): QueryLastEventNonceByAddrRequest {
    const message = {
      ...baseQueryLastEventNonceByAddrRequest,
    } as QueryLastEventNonceByAddrRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    return message;
  },
};

const baseQueryLastEventNonceByAddrResponse: object = { eventNonce: 0 };

export const QueryLastEventNonceByAddrResponse = {
  encode(
    message: QueryLastEventNonceByAddrResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.eventNonce !== 0) {
      writer.uint32(8).uint64(message.eventNonce);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryLastEventNonceByAddrResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryLastEventNonceByAddrResponse,
    } as QueryLastEventNonceByAddrResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eventNonce = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryLastEventNonceByAddrResponse {
    const message = {
      ...baseQueryLastEventNonceByAddrResponse,
    } as QueryLastEventNonceByAddrResponse;
    if (object.eventNonce !== undefined && object.eventNonce !== null) {
      message.eventNonce = Number(object.eventNonce);
    } else {
      message.eventNonce = 0;
    }
    return message;
  },

  toJSON(message: QueryLastEventNonceByAddrResponse): unknown {
    const obj: any = {};
    message.eventNonce !== undefined && (obj.eventNonce = message.eventNonce);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryLastEventNonceByAddrResponse>
  ): QueryLastEventNonceByAddrResponse {
    const message = {
      ...baseQueryLastEventNonceByAddrResponse,
    } as QueryLastEventNonceByAddrResponse;
    if (object.eventNonce !== undefined && object.eventNonce !== null) {
      message.eventNonce = object.eventNonce;
    } else {
      message.eventNonce = 0;
    }
    return message;
  },
};

const baseQueryErc20ToDenomRequest: object = { erc20: "" };

export const QueryErc20ToDenomRequest = {
  encode(
    message: QueryErc20ToDenomRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.erc20 !== "") {
      writer.uint32(10).string(message.erc20);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryErc20ToDenomRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryErc20ToDenomRequest,
    } as QueryErc20ToDenomRequest;
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

  fromJSON(object: any): QueryErc20ToDenomRequest {
    const message = {
      ...baseQueryErc20ToDenomRequest,
    } as QueryErc20ToDenomRequest;
    if (object.erc20 !== undefined && object.erc20 !== null) {
      message.erc20 = String(object.erc20);
    } else {
      message.erc20 = "";
    }
    return message;
  },

  toJSON(message: QueryErc20ToDenomRequest): unknown {
    const obj: any = {};
    message.erc20 !== undefined && (obj.erc20 = message.erc20);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryErc20ToDenomRequest>
  ): QueryErc20ToDenomRequest {
    const message = {
      ...baseQueryErc20ToDenomRequest,
    } as QueryErc20ToDenomRequest;
    if (object.erc20 !== undefined && object.erc20 !== null) {
      message.erc20 = object.erc20;
    } else {
      message.erc20 = "";
    }
    return message;
  },
};

const baseQueryErc20ToDenomResponse: object = {
  denom: "",
  cosmosOriginated: false,
};

export const QueryErc20ToDenomResponse = {
  encode(
    message: QueryErc20ToDenomResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.cosmosOriginated === true) {
      writer.uint32(16).bool(message.cosmosOriginated);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryErc20ToDenomResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryErc20ToDenomResponse,
    } as QueryErc20ToDenomResponse;
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

  fromJSON(object: any): QueryErc20ToDenomResponse {
    const message = {
      ...baseQueryErc20ToDenomResponse,
    } as QueryErc20ToDenomResponse;
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = "";
    }
    if (
      object.cosmosOriginated !== undefined &&
      object.cosmosOriginated !== null
    ) {
      message.cosmosOriginated = Boolean(object.cosmosOriginated);
    } else {
      message.cosmosOriginated = false;
    }
    return message;
  },

  toJSON(message: QueryErc20ToDenomResponse): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.cosmosOriginated !== undefined &&
      (obj.cosmosOriginated = message.cosmosOriginated);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryErc20ToDenomResponse>
  ): QueryErc20ToDenomResponse {
    const message = {
      ...baseQueryErc20ToDenomResponse,
    } as QueryErc20ToDenomResponse;
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = "";
    }
    if (
      object.cosmosOriginated !== undefined &&
      object.cosmosOriginated !== null
    ) {
      message.cosmosOriginated = object.cosmosOriginated;
    } else {
      message.cosmosOriginated = false;
    }
    return message;
  },
};

const baseQueryDenomToErc20Request: object = { denom: "" };

export const QueryDenomToErc20Request = {
  encode(
    message: QueryDenomToErc20Request,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryDenomToErc20Request {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryDenomToErc20Request,
    } as QueryDenomToErc20Request;
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

  fromJSON(object: any): QueryDenomToErc20Request {
    const message = {
      ...baseQueryDenomToErc20Request,
    } as QueryDenomToErc20Request;
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = "";
    }
    return message;
  },

  toJSON(message: QueryDenomToErc20Request): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryDenomToErc20Request>
  ): QueryDenomToErc20Request {
    const message = {
      ...baseQueryDenomToErc20Request,
    } as QueryDenomToErc20Request;
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = "";
    }
    return message;
  },
};

const baseQueryDenomToErc20Response: object = {
  erc20: "",
  cosmosOriginated: false,
};

export const QueryDenomToErc20Response = {
  encode(
    message: QueryDenomToErc20Response,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.erc20 !== "") {
      writer.uint32(10).string(message.erc20);
    }
    if (message.cosmosOriginated === true) {
      writer.uint32(16).bool(message.cosmosOriginated);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryDenomToErc20Response {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryDenomToErc20Response,
    } as QueryDenomToErc20Response;
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

  fromJSON(object: any): QueryDenomToErc20Response {
    const message = {
      ...baseQueryDenomToErc20Response,
    } as QueryDenomToErc20Response;
    if (object.erc20 !== undefined && object.erc20 !== null) {
      message.erc20 = String(object.erc20);
    } else {
      message.erc20 = "";
    }
    if (
      object.cosmosOriginated !== undefined &&
      object.cosmosOriginated !== null
    ) {
      message.cosmosOriginated = Boolean(object.cosmosOriginated);
    } else {
      message.cosmosOriginated = false;
    }
    return message;
  },

  toJSON(message: QueryDenomToErc20Response): unknown {
    const obj: any = {};
    message.erc20 !== undefined && (obj.erc20 = message.erc20);
    message.cosmosOriginated !== undefined &&
      (obj.cosmosOriginated = message.cosmosOriginated);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryDenomToErc20Response>
  ): QueryDenomToErc20Response {
    const message = {
      ...baseQueryDenomToErc20Response,
    } as QueryDenomToErc20Response;
    if (object.erc20 !== undefined && object.erc20 !== null) {
      message.erc20 = object.erc20;
    } else {
      message.erc20 = "";
    }
    if (
      object.cosmosOriginated !== undefined &&
      object.cosmosOriginated !== null
    ) {
      message.cosmosOriginated = object.cosmosOriginated;
    } else {
      message.cosmosOriginated = false;
    }
    return message;
  },
};

const baseQueryDelegateKeysByValidatorAddress: object = {
  validatorAddress: "",
};

export const QueryDelegateKeysByValidatorAddress = {
  encode(
    message: QueryDelegateKeysByValidatorAddress,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryDelegateKeysByValidatorAddress {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryDelegateKeysByValidatorAddress,
    } as QueryDelegateKeysByValidatorAddress;
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

  fromJSON(object: any): QueryDelegateKeysByValidatorAddress {
    const message = {
      ...baseQueryDelegateKeysByValidatorAddress,
    } as QueryDelegateKeysByValidatorAddress;
    if (
      object.validatorAddress !== undefined &&
      object.validatorAddress !== null
    ) {
      message.validatorAddress = String(object.validatorAddress);
    } else {
      message.validatorAddress = "";
    }
    return message;
  },

  toJSON(message: QueryDelegateKeysByValidatorAddress): unknown {
    const obj: any = {};
    message.validatorAddress !== undefined &&
      (obj.validatorAddress = message.validatorAddress);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryDelegateKeysByValidatorAddress>
  ): QueryDelegateKeysByValidatorAddress {
    const message = {
      ...baseQueryDelegateKeysByValidatorAddress,
    } as QueryDelegateKeysByValidatorAddress;
    if (
      object.validatorAddress !== undefined &&
      object.validatorAddress !== null
    ) {
      message.validatorAddress = object.validatorAddress;
    } else {
      message.validatorAddress = "";
    }
    return message;
  },
};

const baseQueryDelegateKeysByValidatorAddressResponse: object = {
  ethAddress: "",
  orchestratorAddress: "",
};

export const QueryDelegateKeysByValidatorAddressResponse = {
  encode(
    message: QueryDelegateKeysByValidatorAddressResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.ethAddress !== "") {
      writer.uint32(10).string(message.ethAddress);
    }
    if (message.orchestratorAddress !== "") {
      writer.uint32(18).string(message.orchestratorAddress);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryDelegateKeysByValidatorAddressResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryDelegateKeysByValidatorAddressResponse,
    } as QueryDelegateKeysByValidatorAddressResponse;
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

  fromJSON(object: any): QueryDelegateKeysByValidatorAddressResponse {
    const message = {
      ...baseQueryDelegateKeysByValidatorAddressResponse,
    } as QueryDelegateKeysByValidatorAddressResponse;
    if (object.ethAddress !== undefined && object.ethAddress !== null) {
      message.ethAddress = String(object.ethAddress);
    } else {
      message.ethAddress = "";
    }
    if (
      object.orchestratorAddress !== undefined &&
      object.orchestratorAddress !== null
    ) {
      message.orchestratorAddress = String(object.orchestratorAddress);
    } else {
      message.orchestratorAddress = "";
    }
    return message;
  },

  toJSON(message: QueryDelegateKeysByValidatorAddressResponse): unknown {
    const obj: any = {};
    message.ethAddress !== undefined && (obj.ethAddress = message.ethAddress);
    message.orchestratorAddress !== undefined &&
      (obj.orchestratorAddress = message.orchestratorAddress);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryDelegateKeysByValidatorAddressResponse>
  ): QueryDelegateKeysByValidatorAddressResponse {
    const message = {
      ...baseQueryDelegateKeysByValidatorAddressResponse,
    } as QueryDelegateKeysByValidatorAddressResponse;
    if (object.ethAddress !== undefined && object.ethAddress !== null) {
      message.ethAddress = object.ethAddress;
    } else {
      message.ethAddress = "";
    }
    if (
      object.orchestratorAddress !== undefined &&
      object.orchestratorAddress !== null
    ) {
      message.orchestratorAddress = object.orchestratorAddress;
    } else {
      message.orchestratorAddress = "";
    }
    return message;
  },
};

const baseQueryDelegateKeysByEthAddress: object = { ethAddress: "" };

export const QueryDelegateKeysByEthAddress = {
  encode(
    message: QueryDelegateKeysByEthAddress,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.ethAddress !== "") {
      writer.uint32(10).string(message.ethAddress);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryDelegateKeysByEthAddress {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryDelegateKeysByEthAddress,
    } as QueryDelegateKeysByEthAddress;
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

  fromJSON(object: any): QueryDelegateKeysByEthAddress {
    const message = {
      ...baseQueryDelegateKeysByEthAddress,
    } as QueryDelegateKeysByEthAddress;
    if (object.ethAddress !== undefined && object.ethAddress !== null) {
      message.ethAddress = String(object.ethAddress);
    } else {
      message.ethAddress = "";
    }
    return message;
  },

  toJSON(message: QueryDelegateKeysByEthAddress): unknown {
    const obj: any = {};
    message.ethAddress !== undefined && (obj.ethAddress = message.ethAddress);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryDelegateKeysByEthAddress>
  ): QueryDelegateKeysByEthAddress {
    const message = {
      ...baseQueryDelegateKeysByEthAddress,
    } as QueryDelegateKeysByEthAddress;
    if (object.ethAddress !== undefined && object.ethAddress !== null) {
      message.ethAddress = object.ethAddress;
    } else {
      message.ethAddress = "";
    }
    return message;
  },
};

const baseQueryDelegateKeysByEthAddressResponse: object = {
  validatorAddress: "",
  orchestratorAddress: "",
};

export const QueryDelegateKeysByEthAddressResponse = {
  encode(
    message: QueryDelegateKeysByEthAddressResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (message.orchestratorAddress !== "") {
      writer.uint32(18).string(message.orchestratorAddress);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryDelegateKeysByEthAddressResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryDelegateKeysByEthAddressResponse,
    } as QueryDelegateKeysByEthAddressResponse;
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

  fromJSON(object: any): QueryDelegateKeysByEthAddressResponse {
    const message = {
      ...baseQueryDelegateKeysByEthAddressResponse,
    } as QueryDelegateKeysByEthAddressResponse;
    if (
      object.validatorAddress !== undefined &&
      object.validatorAddress !== null
    ) {
      message.validatorAddress = String(object.validatorAddress);
    } else {
      message.validatorAddress = "";
    }
    if (
      object.orchestratorAddress !== undefined &&
      object.orchestratorAddress !== null
    ) {
      message.orchestratorAddress = String(object.orchestratorAddress);
    } else {
      message.orchestratorAddress = "";
    }
    return message;
  },

  toJSON(message: QueryDelegateKeysByEthAddressResponse): unknown {
    const obj: any = {};
    message.validatorAddress !== undefined &&
      (obj.validatorAddress = message.validatorAddress);
    message.orchestratorAddress !== undefined &&
      (obj.orchestratorAddress = message.orchestratorAddress);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryDelegateKeysByEthAddressResponse>
  ): QueryDelegateKeysByEthAddressResponse {
    const message = {
      ...baseQueryDelegateKeysByEthAddressResponse,
    } as QueryDelegateKeysByEthAddressResponse;
    if (
      object.validatorAddress !== undefined &&
      object.validatorAddress !== null
    ) {
      message.validatorAddress = object.validatorAddress;
    } else {
      message.validatorAddress = "";
    }
    if (
      object.orchestratorAddress !== undefined &&
      object.orchestratorAddress !== null
    ) {
      message.orchestratorAddress = object.orchestratorAddress;
    } else {
      message.orchestratorAddress = "";
    }
    return message;
  },
};

const baseQueryDelegateKeysByOrchestratorAddress: object = {
  orchestratorAddress: "",
};

export const QueryDelegateKeysByOrchestratorAddress = {
  encode(
    message: QueryDelegateKeysByOrchestratorAddress,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.orchestratorAddress !== "") {
      writer.uint32(10).string(message.orchestratorAddress);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryDelegateKeysByOrchestratorAddress {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryDelegateKeysByOrchestratorAddress,
    } as QueryDelegateKeysByOrchestratorAddress;
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

  fromJSON(object: any): QueryDelegateKeysByOrchestratorAddress {
    const message = {
      ...baseQueryDelegateKeysByOrchestratorAddress,
    } as QueryDelegateKeysByOrchestratorAddress;
    if (
      object.orchestratorAddress !== undefined &&
      object.orchestratorAddress !== null
    ) {
      message.orchestratorAddress = String(object.orchestratorAddress);
    } else {
      message.orchestratorAddress = "";
    }
    return message;
  },

  toJSON(message: QueryDelegateKeysByOrchestratorAddress): unknown {
    const obj: any = {};
    message.orchestratorAddress !== undefined &&
      (obj.orchestratorAddress = message.orchestratorAddress);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryDelegateKeysByOrchestratorAddress>
  ): QueryDelegateKeysByOrchestratorAddress {
    const message = {
      ...baseQueryDelegateKeysByOrchestratorAddress,
    } as QueryDelegateKeysByOrchestratorAddress;
    if (
      object.orchestratorAddress !== undefined &&
      object.orchestratorAddress !== null
    ) {
      message.orchestratorAddress = object.orchestratorAddress;
    } else {
      message.orchestratorAddress = "";
    }
    return message;
  },
};

const baseQueryDelegateKeysByOrchestratorAddressResponse: object = {
  validatorAddress: "",
  ethAddress: "",
};

export const QueryDelegateKeysByOrchestratorAddressResponse = {
  encode(
    message: QueryDelegateKeysByOrchestratorAddressResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (message.ethAddress !== "") {
      writer.uint32(18).string(message.ethAddress);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryDelegateKeysByOrchestratorAddressResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryDelegateKeysByOrchestratorAddressResponse,
    } as QueryDelegateKeysByOrchestratorAddressResponse;
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

  fromJSON(object: any): QueryDelegateKeysByOrchestratorAddressResponse {
    const message = {
      ...baseQueryDelegateKeysByOrchestratorAddressResponse,
    } as QueryDelegateKeysByOrchestratorAddressResponse;
    if (
      object.validatorAddress !== undefined &&
      object.validatorAddress !== null
    ) {
      message.validatorAddress = String(object.validatorAddress);
    } else {
      message.validatorAddress = "";
    }
    if (object.ethAddress !== undefined && object.ethAddress !== null) {
      message.ethAddress = String(object.ethAddress);
    } else {
      message.ethAddress = "";
    }
    return message;
  },

  toJSON(message: QueryDelegateKeysByOrchestratorAddressResponse): unknown {
    const obj: any = {};
    message.validatorAddress !== undefined &&
      (obj.validatorAddress = message.validatorAddress);
    message.ethAddress !== undefined && (obj.ethAddress = message.ethAddress);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryDelegateKeysByOrchestratorAddressResponse>
  ): QueryDelegateKeysByOrchestratorAddressResponse {
    const message = {
      ...baseQueryDelegateKeysByOrchestratorAddressResponse,
    } as QueryDelegateKeysByOrchestratorAddressResponse;
    if (
      object.validatorAddress !== undefined &&
      object.validatorAddress !== null
    ) {
      message.validatorAddress = object.validatorAddress;
    } else {
      message.validatorAddress = "";
    }
    if (object.ethAddress !== undefined && object.ethAddress !== null) {
      message.ethAddress = object.ethAddress;
    } else {
      message.ethAddress = "";
    }
    return message;
  },
};

const baseQueryPendingSendToEth: object = { senderAddress: "" };

export const QueryPendingSendToEth = {
  encode(
    message: QueryPendingSendToEth,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.senderAddress !== "") {
      writer.uint32(10).string(message.senderAddress);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryPendingSendToEth {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryPendingSendToEth } as QueryPendingSendToEth;
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

  fromJSON(object: any): QueryPendingSendToEth {
    const message = { ...baseQueryPendingSendToEth } as QueryPendingSendToEth;
    if (object.senderAddress !== undefined && object.senderAddress !== null) {
      message.senderAddress = String(object.senderAddress);
    } else {
      message.senderAddress = "";
    }
    return message;
  },

  toJSON(message: QueryPendingSendToEth): unknown {
    const obj: any = {};
    message.senderAddress !== undefined &&
      (obj.senderAddress = message.senderAddress);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryPendingSendToEth>
  ): QueryPendingSendToEth {
    const message = { ...baseQueryPendingSendToEth } as QueryPendingSendToEth;
    if (object.senderAddress !== undefined && object.senderAddress !== null) {
      message.senderAddress = object.senderAddress;
    } else {
      message.senderAddress = "";
    }
    return message;
  },
};

const baseQueryPendingSendToEthResponse: object = {};

export const QueryPendingSendToEthResponse = {
  encode(
    message: QueryPendingSendToEthResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.transfersInBatches) {
      OutgoingTransferTx.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.unbatchedTransfers) {
      OutgoingTransferTx.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryPendingSendToEthResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryPendingSendToEthResponse,
    } as QueryPendingSendToEthResponse;
    message.transfersInBatches = [];
    message.unbatchedTransfers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.transfersInBatches.push(
            OutgoingTransferTx.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.unbatchedTransfers.push(
            OutgoingTransferTx.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPendingSendToEthResponse {
    const message = {
      ...baseQueryPendingSendToEthResponse,
    } as QueryPendingSendToEthResponse;
    message.transfersInBatches = [];
    message.unbatchedTransfers = [];
    if (
      object.transfersInBatches !== undefined &&
      object.transfersInBatches !== null
    ) {
      for (const e of object.transfersInBatches) {
        message.transfersInBatches.push(OutgoingTransferTx.fromJSON(e));
      }
    }
    if (
      object.unbatchedTransfers !== undefined &&
      object.unbatchedTransfers !== null
    ) {
      for (const e of object.unbatchedTransfers) {
        message.unbatchedTransfers.push(OutgoingTransferTx.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryPendingSendToEthResponse): unknown {
    const obj: any = {};
    if (message.transfersInBatches) {
      obj.transfersInBatches = message.transfersInBatches.map((e) =>
        e ? OutgoingTransferTx.toJSON(e) : undefined
      );
    } else {
      obj.transfersInBatches = [];
    }
    if (message.unbatchedTransfers) {
      obj.unbatchedTransfers = message.unbatchedTransfers.map((e) =>
        e ? OutgoingTransferTx.toJSON(e) : undefined
      );
    } else {
      obj.unbatchedTransfers = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryPendingSendToEthResponse>
  ): QueryPendingSendToEthResponse {
    const message = {
      ...baseQueryPendingSendToEthResponse,
    } as QueryPendingSendToEthResponse;
    message.transfersInBatches = [];
    message.unbatchedTransfers = [];
    if (
      object.transfersInBatches !== undefined &&
      object.transfersInBatches !== null
    ) {
      for (const e of object.transfersInBatches) {
        message.transfersInBatches.push(OutgoingTransferTx.fromPartial(e));
      }
    }
    if (
      object.unbatchedTransfers !== undefined &&
      object.unbatchedTransfers !== null
    ) {
      for (const e of object.unbatchedTransfers) {
        message.unbatchedTransfers.push(OutgoingTransferTx.fromPartial(e));
      }
    }
    return message;
  },
};

const baseQueryAllCosmosToEth: object = { senderAddress: "" };

export const QueryAllCosmosToEth = {
  encode(
    message: QueryAllCosmosToEth,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.senderAddress !== "") {
      writer.uint32(10).string(message.senderAddress);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllCosmosToEth {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllCosmosToEth } as QueryAllCosmosToEth;
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

  fromJSON(object: any): QueryAllCosmosToEth {
    const message = { ...baseQueryAllCosmosToEth } as QueryAllCosmosToEth;
    if (object.senderAddress !== undefined && object.senderAddress !== null) {
      message.senderAddress = String(object.senderAddress);
    } else {
      message.senderAddress = "";
    }
    return message;
  },

  toJSON(message: QueryAllCosmosToEth): unknown {
    const obj: any = {};
    message.senderAddress !== undefined &&
      (obj.senderAddress = message.senderAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllCosmosToEth>): QueryAllCosmosToEth {
    const message = { ...baseQueryAllCosmosToEth } as QueryAllCosmosToEth;
    if (object.senderAddress !== undefined && object.senderAddress !== null) {
      message.senderAddress = object.senderAddress;
    } else {
      message.senderAddress = "";
    }
    return message;
  },
};

/** Query defines the gRPC querier service */
export interface Query {
  /** Deployments queries deployments */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  CurrentValset(
    request: QueryCurrentValsetRequest
  ): Promise<QueryCurrentValsetResponse>;
  ValsetRequest(
    request: QueryValsetRequestRequest
  ): Promise<QueryValsetRequestResponse>;
  ValsetConfirm(
    request: QueryValsetConfirmRequest
  ): Promise<QueryValsetConfirmResponse>;
  ValsetConfirmsByNonce(
    request: QueryValsetConfirmsByNonceRequest
  ): Promise<QueryValsetConfirmsByNonceResponse>;
  LastValsetRequests(
    request: QueryLastValsetRequestsRequest
  ): Promise<QueryLastValsetRequestsResponse>;
  LastPendingValsetRequestByAddr(
    request: QueryLastPendingValsetRequestByAddrRequest
  ): Promise<QueryLastPendingValsetRequestByAddrResponse>;
  LastPendingBatchRequestByAddr(
    request: QueryLastPendingBatchRequestByAddrRequest
  ): Promise<QueryLastPendingBatchRequestByAddrResponse>;
  LastPendingLogicCallByAddr(
    request: QueryLastPendingLogicCallByAddrRequest
  ): Promise<QueryLastPendingLogicCallByAddrResponse>;
  LastEventNonceByAddr(
    request: QueryLastEventNonceByAddrRequest
  ): Promise<QueryLastEventNonceByAddrResponse>;
  BatchFees(request: QueryBatchFeeRequest): Promise<QueryBatchFeeResponse>;
  OutgoingTxBatches(
    request: QueryOutgoingTxBatchesRequest
  ): Promise<QueryOutgoingTxBatchesResponse>;
  OutgoingLogicCalls(
    request: QueryOutgoingLogicCallsRequest
  ): Promise<QueryOutgoingLogicCallsResponse>;
  BatchRequestByNonce(
    request: QueryBatchRequestByNonceRequest
  ): Promise<QueryBatchRequestByNonceResponse>;
  BatchConfirms(
    request: QueryBatchConfirmsRequest
  ): Promise<QueryBatchConfirmsResponse>;
  LogicConfirms(
    request: QueryLogicConfirmsRequest
  ): Promise<QueryLogicConfirmsResponse>;
  Erc20ToDenom(
    request: QueryErc20ToDenomRequest
  ): Promise<QueryErc20ToDenomResponse>;
  DenomToErc20(
    request: QueryDenomToErc20Request
  ): Promise<QueryDenomToErc20Response>;
  GetDelegateKeyByValidator(
    request: QueryDelegateKeysByValidatorAddress
  ): Promise<QueryDelegateKeysByValidatorAddressResponse>;
  GetDelegateKeyByEth(
    request: QueryDelegateKeysByEthAddress
  ): Promise<QueryDelegateKeysByEthAddressResponse>;
  GetDelegateKeyByOrchestrator(
    request: QueryDelegateKeysByOrchestratorAddress
  ): Promise<QueryDelegateKeysByOrchestratorAddressResponse>;
  GetPendingSendToEth(
    request: QueryPendingSendToEth
  ): Promise<QueryPendingSendToEthResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("gravity.v1.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  CurrentValset(
    request: QueryCurrentValsetRequest
  ): Promise<QueryCurrentValsetResponse> {
    const data = QueryCurrentValsetRequest.encode(request).finish();
    const promise = this.rpc.request("gravity.v1.Query", "CurrentValset", data);
    return promise.then((data) =>
      QueryCurrentValsetResponse.decode(new Reader(data))
    );
  }

  ValsetRequest(
    request: QueryValsetRequestRequest
  ): Promise<QueryValsetRequestResponse> {
    const data = QueryValsetRequestRequest.encode(request).finish();
    const promise = this.rpc.request("gravity.v1.Query", "ValsetRequest", data);
    return promise.then((data) =>
      QueryValsetRequestResponse.decode(new Reader(data))
    );
  }

  ValsetConfirm(
    request: QueryValsetConfirmRequest
  ): Promise<QueryValsetConfirmResponse> {
    const data = QueryValsetConfirmRequest.encode(request).finish();
    const promise = this.rpc.request("gravity.v1.Query", "ValsetConfirm", data);
    return promise.then((data) =>
      QueryValsetConfirmResponse.decode(new Reader(data))
    );
  }

  ValsetConfirmsByNonce(
    request: QueryValsetConfirmsByNonceRequest
  ): Promise<QueryValsetConfirmsByNonceResponse> {
    const data = QueryValsetConfirmsByNonceRequest.encode(request).finish();
    const promise = this.rpc.request(
      "gravity.v1.Query",
      "ValsetConfirmsByNonce",
      data
    );
    return promise.then((data) =>
      QueryValsetConfirmsByNonceResponse.decode(new Reader(data))
    );
  }

  LastValsetRequests(
    request: QueryLastValsetRequestsRequest
  ): Promise<QueryLastValsetRequestsResponse> {
    const data = QueryLastValsetRequestsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "gravity.v1.Query",
      "LastValsetRequests",
      data
    );
    return promise.then((data) =>
      QueryLastValsetRequestsResponse.decode(new Reader(data))
    );
  }

  LastPendingValsetRequestByAddr(
    request: QueryLastPendingValsetRequestByAddrRequest
  ): Promise<QueryLastPendingValsetRequestByAddrResponse> {
    const data = QueryLastPendingValsetRequestByAddrRequest.encode(
      request
    ).finish();
    const promise = this.rpc.request(
      "gravity.v1.Query",
      "LastPendingValsetRequestByAddr",
      data
    );
    return promise.then((data) =>
      QueryLastPendingValsetRequestByAddrResponse.decode(new Reader(data))
    );
  }

  LastPendingBatchRequestByAddr(
    request: QueryLastPendingBatchRequestByAddrRequest
  ): Promise<QueryLastPendingBatchRequestByAddrResponse> {
    const data = QueryLastPendingBatchRequestByAddrRequest.encode(
      request
    ).finish();
    const promise = this.rpc.request(
      "gravity.v1.Query",
      "LastPendingBatchRequestByAddr",
      data
    );
    return promise.then((data) =>
      QueryLastPendingBatchRequestByAddrResponse.decode(new Reader(data))
    );
  }

  LastPendingLogicCallByAddr(
    request: QueryLastPendingLogicCallByAddrRequest
  ): Promise<QueryLastPendingLogicCallByAddrResponse> {
    const data = QueryLastPendingLogicCallByAddrRequest.encode(
      request
    ).finish();
    const promise = this.rpc.request(
      "gravity.v1.Query",
      "LastPendingLogicCallByAddr",
      data
    );
    return promise.then((data) =>
      QueryLastPendingLogicCallByAddrResponse.decode(new Reader(data))
    );
  }

  LastEventNonceByAddr(
    request: QueryLastEventNonceByAddrRequest
  ): Promise<QueryLastEventNonceByAddrResponse> {
    const data = QueryLastEventNonceByAddrRequest.encode(request).finish();
    const promise = this.rpc.request(
      "gravity.v1.Query",
      "LastEventNonceByAddr",
      data
    );
    return promise.then((data) =>
      QueryLastEventNonceByAddrResponse.decode(new Reader(data))
    );
  }

  BatchFees(request: QueryBatchFeeRequest): Promise<QueryBatchFeeResponse> {
    const data = QueryBatchFeeRequest.encode(request).finish();
    const promise = this.rpc.request("gravity.v1.Query", "BatchFees", data);
    return promise.then((data) =>
      QueryBatchFeeResponse.decode(new Reader(data))
    );
  }

  OutgoingTxBatches(
    request: QueryOutgoingTxBatchesRequest
  ): Promise<QueryOutgoingTxBatchesResponse> {
    const data = QueryOutgoingTxBatchesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "gravity.v1.Query",
      "OutgoingTxBatches",
      data
    );
    return promise.then((data) =>
      QueryOutgoingTxBatchesResponse.decode(new Reader(data))
    );
  }

  OutgoingLogicCalls(
    request: QueryOutgoingLogicCallsRequest
  ): Promise<QueryOutgoingLogicCallsResponse> {
    const data = QueryOutgoingLogicCallsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "gravity.v1.Query",
      "OutgoingLogicCalls",
      data
    );
    return promise.then((data) =>
      QueryOutgoingLogicCallsResponse.decode(new Reader(data))
    );
  }

  BatchRequestByNonce(
    request: QueryBatchRequestByNonceRequest
  ): Promise<QueryBatchRequestByNonceResponse> {
    const data = QueryBatchRequestByNonceRequest.encode(request).finish();
    const promise = this.rpc.request(
      "gravity.v1.Query",
      "BatchRequestByNonce",
      data
    );
    return promise.then((data) =>
      QueryBatchRequestByNonceResponse.decode(new Reader(data))
    );
  }

  BatchConfirms(
    request: QueryBatchConfirmsRequest
  ): Promise<QueryBatchConfirmsResponse> {
    const data = QueryBatchConfirmsRequest.encode(request).finish();
    const promise = this.rpc.request("gravity.v1.Query", "BatchConfirms", data);
    return promise.then((data) =>
      QueryBatchConfirmsResponse.decode(new Reader(data))
    );
  }

  LogicConfirms(
    request: QueryLogicConfirmsRequest
  ): Promise<QueryLogicConfirmsResponse> {
    const data = QueryLogicConfirmsRequest.encode(request).finish();
    const promise = this.rpc.request("gravity.v1.Query", "LogicConfirms", data);
    return promise.then((data) =>
      QueryLogicConfirmsResponse.decode(new Reader(data))
    );
  }

  Erc20ToDenom(
    request: QueryErc20ToDenomRequest
  ): Promise<QueryErc20ToDenomResponse> {
    const data = QueryErc20ToDenomRequest.encode(request).finish();
    const promise = this.rpc.request("gravity.v1.Query", "Erc20ToDenom", data);
    return promise.then((data) =>
      QueryErc20ToDenomResponse.decode(new Reader(data))
    );
  }

  DenomToErc20(
    request: QueryDenomToErc20Request
  ): Promise<QueryDenomToErc20Response> {
    const data = QueryDenomToErc20Request.encode(request).finish();
    const promise = this.rpc.request("gravity.v1.Query", "DenomToErc20", data);
    return promise.then((data) =>
      QueryDenomToErc20Response.decode(new Reader(data))
    );
  }

  GetDelegateKeyByValidator(
    request: QueryDelegateKeysByValidatorAddress
  ): Promise<QueryDelegateKeysByValidatorAddressResponse> {
    const data = QueryDelegateKeysByValidatorAddress.encode(request).finish();
    const promise = this.rpc.request(
      "gravity.v1.Query",
      "GetDelegateKeyByValidator",
      data
    );
    return promise.then((data) =>
      QueryDelegateKeysByValidatorAddressResponse.decode(new Reader(data))
    );
  }

  GetDelegateKeyByEth(
    request: QueryDelegateKeysByEthAddress
  ): Promise<QueryDelegateKeysByEthAddressResponse> {
    const data = QueryDelegateKeysByEthAddress.encode(request).finish();
    const promise = this.rpc.request(
      "gravity.v1.Query",
      "GetDelegateKeyByEth",
      data
    );
    return promise.then((data) =>
      QueryDelegateKeysByEthAddressResponse.decode(new Reader(data))
    );
  }

  GetDelegateKeyByOrchestrator(
    request: QueryDelegateKeysByOrchestratorAddress
  ): Promise<QueryDelegateKeysByOrchestratorAddressResponse> {
    const data = QueryDelegateKeysByOrchestratorAddress.encode(
      request
    ).finish();
    const promise = this.rpc.request(
      "gravity.v1.Query",
      "GetDelegateKeyByOrchestrator",
      data
    );
    return promise.then((data) =>
      QueryDelegateKeysByOrchestratorAddressResponse.decode(new Reader(data))
    );
  }

  GetPendingSendToEth(
    request: QueryPendingSendToEth
  ): Promise<QueryPendingSendToEthResponse> {
    const data = QueryPendingSendToEth.encode(request).finish();
    const promise = this.rpc.request(
      "gravity.v1.Query",
      "GetPendingSendToEth",
      data
    );
    return promise.then((data) =>
      QueryPendingSendToEthResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

const atob: (b64: string) => string =
  globalThis.atob ||
  ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (let i = 0; i < arr.byteLength; ++i) {
    bin.push(String.fromCharCode(arr[i]));
  }
  return btoa(bin.join(""));
}

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
