/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "gravity.v1";

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

const baseOrchestratorAddress: object = {
  validator: "",
  orchestrator: "",
  ethAddress: "",
};

export const OrchestratorAddress = {
  encode(
    message: OrchestratorAddress,
    writer: Writer = Writer.create()
  ): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): OrchestratorAddress {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOrchestratorAddress } as OrchestratorAddress;
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

  fromJSON(object: any): OrchestratorAddress {
    const message = { ...baseOrchestratorAddress } as OrchestratorAddress;
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = String(object.validator);
    } else {
      message.validator = "";
    }
    if (object.orchestrator !== undefined && object.orchestrator !== null) {
      message.orchestrator = String(object.orchestrator);
    } else {
      message.orchestrator = "";
    }
    if (object.ethAddress !== undefined && object.ethAddress !== null) {
      message.ethAddress = String(object.ethAddress);
    } else {
      message.ethAddress = "";
    }
    return message;
  },

  toJSON(message: OrchestratorAddress): unknown {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = message.validator);
    message.orchestrator !== undefined &&
      (obj.orchestrator = message.orchestrator);
    message.ethAddress !== undefined && (obj.ethAddress = message.ethAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<OrchestratorAddress>): OrchestratorAddress {
    const message = { ...baseOrchestratorAddress } as OrchestratorAddress;
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = object.validator;
    } else {
      message.validator = "";
    }
    if (object.orchestrator !== undefined && object.orchestrator !== null) {
      message.orchestrator = object.orchestrator;
    } else {
      message.orchestrator = "";
    }
    if (object.ethAddress !== undefined && object.ethAddress !== null) {
      message.ethAddress = object.ethAddress;
    } else {
      message.ethAddress = "";
    }
    return message;
  },
};

const baseMsgCreateOrchestratorAddress: object = {
  validator: "",
  orchestrator: "",
  ethAddress: "",
};

export const MsgCreateOrchestratorAddress = {
  encode(
    message: MsgCreateOrchestratorAddress,
    writer: Writer = Writer.create()
  ): Writer {
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

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateOrchestratorAddress {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateOrchestratorAddress,
    } as MsgCreateOrchestratorAddress;
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

  fromJSON(object: any): MsgCreateOrchestratorAddress {
    const message = {
      ...baseMsgCreateOrchestratorAddress,
    } as MsgCreateOrchestratorAddress;
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = String(object.validator);
    } else {
      message.validator = "";
    }
    if (object.orchestrator !== undefined && object.orchestrator !== null) {
      message.orchestrator = String(object.orchestrator);
    } else {
      message.orchestrator = "";
    }
    if (object.ethAddress !== undefined && object.ethAddress !== null) {
      message.ethAddress = String(object.ethAddress);
    } else {
      message.ethAddress = "";
    }
    return message;
  },

  toJSON(message: MsgCreateOrchestratorAddress): unknown {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = message.validator);
    message.orchestrator !== undefined &&
      (obj.orchestrator = message.orchestrator);
    message.ethAddress !== undefined && (obj.ethAddress = message.ethAddress);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateOrchestratorAddress>
  ): MsgCreateOrchestratorAddress {
    const message = {
      ...baseMsgCreateOrchestratorAddress,
    } as MsgCreateOrchestratorAddress;
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = object.validator;
    } else {
      message.validator = "";
    }
    if (object.orchestrator !== undefined && object.orchestrator !== null) {
      message.orchestrator = object.orchestrator;
    } else {
      message.orchestrator = "";
    }
    if (object.ethAddress !== undefined && object.ethAddress !== null) {
      message.ethAddress = object.ethAddress;
    } else {
      message.ethAddress = "";
    }
    return message;
  },
};

const baseMsgUpdateOrchestratorAddress: object = {
  creator: "",
  id: 0,
  validator: "",
  orchestrator: "",
  ethAddress: "",
};

export const MsgUpdateOrchestratorAddress = {
  encode(
    message: MsgUpdateOrchestratorAddress,
    writer: Writer = Writer.create()
  ): Writer {
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

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateOrchestratorAddress {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateOrchestratorAddress,
    } as MsgUpdateOrchestratorAddress;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
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

  fromJSON(object: any): MsgUpdateOrchestratorAddress {
    const message = {
      ...baseMsgUpdateOrchestratorAddress,
    } as MsgUpdateOrchestratorAddress;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = String(object.validator);
    } else {
      message.validator = "";
    }
    if (object.orchestrator !== undefined && object.orchestrator !== null) {
      message.orchestrator = String(object.orchestrator);
    } else {
      message.orchestrator = "";
    }
    if (object.ethAddress !== undefined && object.ethAddress !== null) {
      message.ethAddress = String(object.ethAddress);
    } else {
      message.ethAddress = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateOrchestratorAddress): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.validator !== undefined && (obj.validator = message.validator);
    message.orchestrator !== undefined &&
      (obj.orchestrator = message.orchestrator);
    message.ethAddress !== undefined && (obj.ethAddress = message.ethAddress);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateOrchestratorAddress>
  ): MsgUpdateOrchestratorAddress {
    const message = {
      ...baseMsgUpdateOrchestratorAddress,
    } as MsgUpdateOrchestratorAddress;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = object.validator;
    } else {
      message.validator = "";
    }
    if (object.orchestrator !== undefined && object.orchestrator !== null) {
      message.orchestrator = object.orchestrator;
    } else {
      message.orchestrator = "";
    }
    if (object.ethAddress !== undefined && object.ethAddress !== null) {
      message.ethAddress = object.ethAddress;
    } else {
      message.ethAddress = "";
    }
    return message;
  },
};

const baseMsgDeleteOrchestratorAddress: object = { creator: "", id: 0 };

export const MsgDeleteOrchestratorAddress = {
  encode(
    message: MsgDeleteOrchestratorAddress,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteOrchestratorAddress {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteOrchestratorAddress,
    } as MsgDeleteOrchestratorAddress;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteOrchestratorAddress {
    const message = {
      ...baseMsgDeleteOrchestratorAddress,
    } as MsgDeleteOrchestratorAddress;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgDeleteOrchestratorAddress): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeleteOrchestratorAddress>
  ): MsgDeleteOrchestratorAddress {
    const message = {
      ...baseMsgDeleteOrchestratorAddress,
    } as MsgDeleteOrchestratorAddress;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

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
