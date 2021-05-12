/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "gravity.v1";

export interface CosmosToEth {
  sender: string;
  ethDest: string;
  amount: string;
  bridgeFee: string;
}

export interface MsgCreateCosmosToEth {
  sender: string;
  ethDest: string;
  amount: string;
  bridgeFee: string;
}

export interface MsgUpdateCosmosToEth {
  creator: string;
  id: number;
  sender: string;
  ethDest: string;
  amount: string;
  bridgeFee: string;
}

export interface MsgDeleteCosmosToEth {
  creator: string;
  id: number;
}

const baseCosmosToEth: object = {
  sender: "",
  ethDest: "",
  amount: "",
  bridgeFee: "",
};

export const CosmosToEth = {
  encode(message: CosmosToEth, writer: Writer = Writer.create()): Writer {
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }
    if (message.ethDest !== "") {
      writer.uint32(34).string(message.ethDest);
    }
    if (message.amount !== "") {
      writer.uint32(42).string(message.amount);
    }
    if (message.bridgeFee !== "") {
      writer.uint32(50).string(message.bridgeFee);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CosmosToEth {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCosmosToEth } as CosmosToEth;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          message.sender = reader.string();
          break;
        case 4:
          message.ethDest = reader.string();
          break;
        case 5:
          message.amount = reader.string();
          break;
        case 6:
          message.bridgeFee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CosmosToEth {
    const message = { ...baseCosmosToEth } as CosmosToEth;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    if (object.ethDest !== undefined && object.ethDest !== null) {
      message.ethDest = String(object.ethDest);
    } else {
      message.ethDest = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount);
    } else {
      message.amount = "";
    }
    if (object.bridgeFee !== undefined && object.bridgeFee !== null) {
      message.bridgeFee = String(object.bridgeFee);
    } else {
      message.bridgeFee = "";
    }
    return message;
  },

  toJSON(message: CosmosToEth): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.ethDest !== undefined && (obj.ethDest = message.ethDest);
    message.amount !== undefined && (obj.amount = message.amount);
    message.bridgeFee !== undefined && (obj.bridgeFee = message.bridgeFee);
    return obj;
  },

  fromPartial(object: DeepPartial<CosmosToEth>): CosmosToEth {
    const message = { ...baseCosmosToEth } as CosmosToEth;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    if (object.ethDest !== undefined && object.ethDest !== null) {
      message.ethDest = object.ethDest;
    } else {
      message.ethDest = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = "";
    }
    if (object.bridgeFee !== undefined && object.bridgeFee !== null) {
      message.bridgeFee = object.bridgeFee;
    } else {
      message.bridgeFee = "";
    }
    return message;
  },
};

const baseMsgCreateCosmosToEth: object = {
  sender: "",
  ethDest: "",
  amount: "",
  bridgeFee: "",
};

export const MsgCreateCosmosToEth = {
  encode(
    message: MsgCreateCosmosToEth,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.ethDest !== "") {
      writer.uint32(26).string(message.ethDest);
    }
    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }
    if (message.bridgeFee !== "") {
      writer.uint32(42).string(message.bridgeFee);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateCosmosToEth {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateCosmosToEth } as MsgCreateCosmosToEth;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.sender = reader.string();
          break;
        case 3:
          message.ethDest = reader.string();
          break;
        case 4:
          message.amount = reader.string();
          break;
        case 5:
          message.bridgeFee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateCosmosToEth {
    const message = { ...baseMsgCreateCosmosToEth } as MsgCreateCosmosToEth;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    if (object.ethDest !== undefined && object.ethDest !== null) {
      message.ethDest = String(object.ethDest);
    } else {
      message.ethDest = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount);
    } else {
      message.amount = "";
    }
    if (object.bridgeFee !== undefined && object.bridgeFee !== null) {
      message.bridgeFee = String(object.bridgeFee);
    } else {
      message.bridgeFee = "";
    }
    return message;
  },

  toJSON(message: MsgCreateCosmosToEth): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.ethDest !== undefined && (obj.ethDest = message.ethDest);
    message.amount !== undefined && (obj.amount = message.amount);
    message.bridgeFee !== undefined && (obj.bridgeFee = message.bridgeFee);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateCosmosToEth>): MsgCreateCosmosToEth {
    const message = { ...baseMsgCreateCosmosToEth } as MsgCreateCosmosToEth;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    if (object.ethDest !== undefined && object.ethDest !== null) {
      message.ethDest = object.ethDest;
    } else {
      message.ethDest = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = "";
    }
    if (object.bridgeFee !== undefined && object.bridgeFee !== null) {
      message.bridgeFee = object.bridgeFee;
    } else {
      message.bridgeFee = "";
    }
    return message;
  },
};

const baseMsgUpdateCosmosToEth: object = {
  creator: "",
  id: 0,
  sender: "",
  ethDest: "",
  amount: "",
  bridgeFee: "",
};

export const MsgUpdateCosmosToEth = {
  encode(
    message: MsgUpdateCosmosToEth,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }
    if (message.ethDest !== "") {
      writer.uint32(34).string(message.ethDest);
    }
    if (message.amount !== "") {
      writer.uint32(42).string(message.amount);
    }
    if (message.bridgeFee !== "") {
      writer.uint32(50).string(message.bridgeFee);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateCosmosToEth {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateCosmosToEth } as MsgUpdateCosmosToEth;
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
          message.sender = reader.string();
          break;
        case 4:
          message.ethDest = reader.string();
          break;
        case 5:
          message.amount = reader.string();
          break;
        case 6:
          message.bridgeFee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateCosmosToEth {
    const message = { ...baseMsgUpdateCosmosToEth } as MsgUpdateCosmosToEth;
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
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    if (object.ethDest !== undefined && object.ethDest !== null) {
      message.ethDest = String(object.ethDest);
    } else {
      message.ethDest = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount);
    } else {
      message.amount = "";
    }
    if (object.bridgeFee !== undefined && object.bridgeFee !== null) {
      message.bridgeFee = String(object.bridgeFee);
    } else {
      message.bridgeFee = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateCosmosToEth): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.sender !== undefined && (obj.sender = message.sender);
    message.ethDest !== undefined && (obj.ethDest = message.ethDest);
    message.amount !== undefined && (obj.amount = message.amount);
    message.bridgeFee !== undefined && (obj.bridgeFee = message.bridgeFee);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateCosmosToEth>): MsgUpdateCosmosToEth {
    const message = { ...baseMsgUpdateCosmosToEth } as MsgUpdateCosmosToEth;
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
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    if (object.ethDest !== undefined && object.ethDest !== null) {
      message.ethDest = object.ethDest;
    } else {
      message.ethDest = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = "";
    }
    if (object.bridgeFee !== undefined && object.bridgeFee !== null) {
      message.bridgeFee = object.bridgeFee;
    } else {
      message.bridgeFee = "";
    }
    return message;
  },
};

const baseMsgDeleteCosmosToEth: object = { creator: "", id: 0 };

export const MsgDeleteCosmosToEth = {
  encode(
    message: MsgDeleteCosmosToEth,
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

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteCosmosToEth {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteCosmosToEth } as MsgDeleteCosmosToEth;
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

  fromJSON(object: any): MsgDeleteCosmosToEth {
    const message = { ...baseMsgDeleteCosmosToEth } as MsgDeleteCosmosToEth;
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

  toJSON(message: MsgDeleteCosmosToEth): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteCosmosToEth>): MsgDeleteCosmosToEth {
    const message = { ...baseMsgDeleteCosmosToEth } as MsgDeleteCosmosToEth;
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
