/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "gravity.v1";

/** BridgeValidator represents a validator's ETH address and its power */
export interface BridgeValidator {
  power: number;
  ethereumAddress: string;
}

/**
 * Valset is the Ethereum Bridge Multsig Set, each gravity validator also
 * maintains an ETH key to sign messages, these are used to check signatures on
 * ETH because of the significant gas savings
 */
export interface Valset {
  nonce: number;
  members: BridgeValidator[];
  height: number;
}

/**
 * LastObservedEthereumBlockHeight stores the last observed
 * Ethereum block height along with the Cosmos block height that
 * it was observed at. These two numbers can be used to project
 * outward and always produce batches with timeouts in the future
 * even if no Ethereum block height has been relayed for a long time
 */
export interface LastObservedEthereumBlockHeight {
  cosmosBlockHeight: number;
  ethereumBlockHeight: number;
}

/**
 * This records the relationship between an Erc20 token and the denom
 * of the corresponding Cosmos originated asset
 */
export interface Erc20ToDenom {
  erc20: string;
  denom: string;
}

const baseBridgeValidator: object = { power: 0, ethereumAddress: "" };

export const BridgeValidator = {
  encode(message: BridgeValidator, writer: Writer = Writer.create()): Writer {
    if (message.power !== 0) {
      writer.uint32(8).uint64(message.power);
    }
    if (message.ethereumAddress !== "") {
      writer.uint32(18).string(message.ethereumAddress);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): BridgeValidator {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBridgeValidator } as BridgeValidator;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.power = longToNumber(reader.uint64() as Long);
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

  fromJSON(object: any): BridgeValidator {
    const message = { ...baseBridgeValidator } as BridgeValidator;
    if (object.power !== undefined && object.power !== null) {
      message.power = Number(object.power);
    } else {
      message.power = 0;
    }
    if (
      object.ethereumAddress !== undefined &&
      object.ethereumAddress !== null
    ) {
      message.ethereumAddress = String(object.ethereumAddress);
    } else {
      message.ethereumAddress = "";
    }
    return message;
  },

  toJSON(message: BridgeValidator): unknown {
    const obj: any = {};
    message.power !== undefined && (obj.power = message.power);
    message.ethereumAddress !== undefined &&
      (obj.ethereumAddress = message.ethereumAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<BridgeValidator>): BridgeValidator {
    const message = { ...baseBridgeValidator } as BridgeValidator;
    if (object.power !== undefined && object.power !== null) {
      message.power = object.power;
    } else {
      message.power = 0;
    }
    if (
      object.ethereumAddress !== undefined &&
      object.ethereumAddress !== null
    ) {
      message.ethereumAddress = object.ethereumAddress;
    } else {
      message.ethereumAddress = "";
    }
    return message;
  },
};

const baseValset: object = { nonce: 0, height: 0 };

export const Valset = {
  encode(message: Valset, writer: Writer = Writer.create()): Writer {
    if (message.nonce !== 0) {
      writer.uint32(8).uint64(message.nonce);
    }
    for (const v of message.members) {
      BridgeValidator.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.height !== 0) {
      writer.uint32(24).uint64(message.height);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Valset {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseValset } as Valset;
    message.members = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nonce = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.members.push(BridgeValidator.decode(reader, reader.uint32()));
          break;
        case 3:
          message.height = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Valset {
    const message = { ...baseValset } as Valset;
    message.members = [];
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = Number(object.nonce);
    } else {
      message.nonce = 0;
    }
    if (object.members !== undefined && object.members !== null) {
      for (const e of object.members) {
        message.members.push(BridgeValidator.fromJSON(e));
      }
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = Number(object.height);
    } else {
      message.height = 0;
    }
    return message;
  },

  toJSON(message: Valset): unknown {
    const obj: any = {};
    message.nonce !== undefined && (obj.nonce = message.nonce);
    if (message.members) {
      obj.members = message.members.map((e) =>
        e ? BridgeValidator.toJSON(e) : undefined
      );
    } else {
      obj.members = [];
    }
    message.height !== undefined && (obj.height = message.height);
    return obj;
  },

  fromPartial(object: DeepPartial<Valset>): Valset {
    const message = { ...baseValset } as Valset;
    message.members = [];
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = object.nonce;
    } else {
      message.nonce = 0;
    }
    if (object.members !== undefined && object.members !== null) {
      for (const e of object.members) {
        message.members.push(BridgeValidator.fromPartial(e));
      }
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = object.height;
    } else {
      message.height = 0;
    }
    return message;
  },
};

const baseLastObservedEthereumBlockHeight: object = {
  cosmosBlockHeight: 0,
  ethereumBlockHeight: 0,
};

export const LastObservedEthereumBlockHeight = {
  encode(
    message: LastObservedEthereumBlockHeight,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.cosmosBlockHeight !== 0) {
      writer.uint32(8).uint64(message.cosmosBlockHeight);
    }
    if (message.ethereumBlockHeight !== 0) {
      writer.uint32(16).uint64(message.ethereumBlockHeight);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): LastObservedEthereumBlockHeight {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseLastObservedEthereumBlockHeight,
    } as LastObservedEthereumBlockHeight;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cosmosBlockHeight = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.ethereumBlockHeight = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LastObservedEthereumBlockHeight {
    const message = {
      ...baseLastObservedEthereumBlockHeight,
    } as LastObservedEthereumBlockHeight;
    if (
      object.cosmosBlockHeight !== undefined &&
      object.cosmosBlockHeight !== null
    ) {
      message.cosmosBlockHeight = Number(object.cosmosBlockHeight);
    } else {
      message.cosmosBlockHeight = 0;
    }
    if (
      object.ethereumBlockHeight !== undefined &&
      object.ethereumBlockHeight !== null
    ) {
      message.ethereumBlockHeight = Number(object.ethereumBlockHeight);
    } else {
      message.ethereumBlockHeight = 0;
    }
    return message;
  },

  toJSON(message: LastObservedEthereumBlockHeight): unknown {
    const obj: any = {};
    message.cosmosBlockHeight !== undefined &&
      (obj.cosmosBlockHeight = message.cosmosBlockHeight);
    message.ethereumBlockHeight !== undefined &&
      (obj.ethereumBlockHeight = message.ethereumBlockHeight);
    return obj;
  },

  fromPartial(
    object: DeepPartial<LastObservedEthereumBlockHeight>
  ): LastObservedEthereumBlockHeight {
    const message = {
      ...baseLastObservedEthereumBlockHeight,
    } as LastObservedEthereumBlockHeight;
    if (
      object.cosmosBlockHeight !== undefined &&
      object.cosmosBlockHeight !== null
    ) {
      message.cosmosBlockHeight = object.cosmosBlockHeight;
    } else {
      message.cosmosBlockHeight = 0;
    }
    if (
      object.ethereumBlockHeight !== undefined &&
      object.ethereumBlockHeight !== null
    ) {
      message.ethereumBlockHeight = object.ethereumBlockHeight;
    } else {
      message.ethereumBlockHeight = 0;
    }
    return message;
  },
};

const baseErc20ToDenom: object = { erc20: "", denom: "" };

export const Erc20ToDenom = {
  encode(message: Erc20ToDenom, writer: Writer = Writer.create()): Writer {
    if (message.erc20 !== "") {
      writer.uint32(10).string(message.erc20);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Erc20ToDenom {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseErc20ToDenom } as Erc20ToDenom;
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

  fromJSON(object: any): Erc20ToDenom {
    const message = { ...baseErc20ToDenom } as Erc20ToDenom;
    if (object.erc20 !== undefined && object.erc20 !== null) {
      message.erc20 = String(object.erc20);
    } else {
      message.erc20 = "";
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = "";
    }
    return message;
  },

  toJSON(message: Erc20ToDenom): unknown {
    const obj: any = {};
    message.erc20 !== undefined && (obj.erc20 = message.erc20);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(object: DeepPartial<Erc20ToDenom>): Erc20ToDenom {
    const message = { ...baseErc20ToDenom } as Erc20ToDenom;
    if (object.erc20 !== undefined && object.erc20 !== null) {
      message.erc20 = object.erc20;
    } else {
      message.erc20 = "";
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = "";
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
