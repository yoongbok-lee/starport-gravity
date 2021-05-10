/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Coin } from "../cosmos/base/v1beta1/coin";
import { BridgeValidator } from "../gravity/types";

export const protobufPackage = "gravity.v1";

/**
 * MsgSetOrchestratorAddress
 * this message allows validators to delegate their voting responsibilities
 * to a given key. This key is then used as an optional authentication method
 * for sigining oracle claims
 * VALIDATOR
 * The validator field is a cosmosvaloper1... string (i.e. sdk.ValAddress)
 * that references a validator in the active set
 * ORCHESTRATOR
 * The orchestrator field is a cosmos1... string  (i.e. sdk.AccAddress) that
 * references the key that is being delegated to
 * ETH_ADDRESS
 * This is a hex encoded 0x Ethereum public key that will be used by this validator
 * on Ethereum
 */
export interface MsgSetOrchestratorAddress {
  validator: string;
  orchestrator: string;
  ethAddress: string;
}

export interface MsgSetOrchestratorAddressResponse {}

/**
 * MsgValsetConfirm
 * this is the message sent by the validators when they wish to submit their
 * signatures over the validator set at a given block height. A validator must
 * first call MsgSetEthAddress to set their Ethereum address to be used for
 * signing. Then someone (anyone) must make a ValsetRequest, the request is
 * essentially a messaging mechanism to determine which block all validators
 * should submit signatures over. Finally validators sign the validator set,
 * powers, and Ethereum addresses of the entire validator set at the height of a
 * ValsetRequest and submit that signature with this message.
 *
 * If a sufficient number of validators (66% of voting power) (A) have set
 * Ethereum addresses and (B) submit ValsetConfirm messages with their
 * signatures it is then possible for anyone to view these signatures in the
 * chain store and submit them to Ethereum to update the validator set
 * -------------
 */
export interface MsgValsetConfirm {
  nonce: number;
  orchestrator: string;
  ethAddress: string;
  signature: string;
}

export interface MsgValsetConfirmResponse {}

/**
 * MsgSendToEth
 * This is the message that a user calls when they want to bridge an asset
 * it will later be removed when it is included in a batch and successfully
 * submitted tokens are removed from the users balance immediately
 * -------------
 * AMOUNT:
 * the coin to send across the bridge, note the restriction that this is a
 * single coin not a set of coins that is normal in other Cosmos messages
 * FEE:
 * the fee paid for the bridge, distinct from the fee paid to the chain to
 * actually send this message in the first place. So a successful send has
 * two layers of fees for the user
 */
export interface MsgSendToEth {
  sender: string;
  ethDest: string;
  amount: Coin | undefined;
  bridgeFee: Coin | undefined;
}

export interface MsgSendToEthResponse {}

/**
 * MsgRequestBatch
 * this is a message anyone can send that requests a batch of transactions to
 * send across the bridge be created for whatever block height this message is
 * included in. This acts as a coordination point, the handler for this message
 * looks at the AddToOutgoingPool tx's in the store and generates a batch, also
 * available in the store tied to this message. The validators then grab this
 * batch, sign it, submit the signatures with a MsgConfirmBatch before a relayer
 * can finally submit the batch
 * -------------
 */
export interface MsgRequestBatch {
  sender: string;
  denom: string;
}

export interface MsgRequestBatchResponse {}

/**
 * MsgConfirmBatch
 * When validators observe a MsgRequestBatch they form a batch by ordering
 * transactions currently in the txqueue in order of highest to lowest fee,
 * cutting off when the batch either reaches a hardcoded maximum size (to be
 * decided, probably around 100) or when transactions stop being profitable
 * (TODO determine this without nondeterminism) This message includes the batch
 * as well as an Ethereum signature over this batch by the validator
 * -------------
 */
export interface MsgConfirmBatch {
  nonce: number;
  tokenContract: string;
  ethSigner: string;
  orchestrator: string;
  signature: string;
}

export interface MsgConfirmBatchResponse {}

/**
 * MsgConfirmLogicCall
 * When validators observe a MsgRequestBatch they form a batch by ordering
 * transactions currently in the txqueue in order of highest to lowest fee,
 * cutting off when the batch either reaches a hardcoded maximum size (to be
 * decided, probably around 100) or when transactions stop being profitable
 * (TODO determine this without nondeterminism) This message includes the batch
 * as well as an Ethereum signature over this batch by the validator
 * -------------
 */
export interface MsgConfirmLogicCall {
  invalidationId: string;
  invalidationNonce: number;
  ethSigner: string;
  orchestrator: string;
  signature: string;
}

export interface MsgConfirmLogicCallResponse {}

/**
 * EthereumBridgeDepositClaim
 * When more than 66% of the active validator set has
 * claimed to have seen the deposit enter the ethereum blockchain coins are
 * issued to the Cosmos address in question
 * -------------
 */
export interface MsgDepositClaim {
  eventNonce: number;
  blockHeight: number;
  tokenContract: string;
  amount: string;
  ethereumSender: string;
  cosmosReceiver: string;
  orchestrator: string;
}

export interface MsgDepositClaimResponse {}

/**
 * WithdrawClaim claims that a batch of withdrawal
 * operations on the bridge contract was executed.
 */
export interface MsgWithdrawClaim {
  eventNonce: number;
  blockHeight: number;
  batchNonce: number;
  tokenContract: string;
  orchestrator: string;
}

export interface MsgWithdrawClaimResponse {}

/**
 * Erc20DeployedClaim allows the Cosmos module
 * to learn about an Erc20 that someone deployed
 * to represent a Cosmos asset
 */
export interface MsgErc20DeployedClaim {
  eventNonce: number;
  blockHeight: number;
  cosmosDenom: string;
  tokenContract: string;
  name: string;
  symbol: string;
  decimals: number;
  orchestrator: string;
}

export interface MsgErc20DeployedClaimResponse {}

/**
 * This informs the Cosmos module that a logic
 * call has been executed
 */
export interface MsgLogicCallExecutedClaim {
  eventNonce: number;
  blockHeight: number;
  invalidationId: Uint8Array;
  invalidationNonce: number;
  orchestrator: string;
}

export interface MsgLogicCallExecutedClaimResponse {}

/**
 * This informs the Cosmos module that a validator
 * set has been updated.
 */
export interface MsgValsetUpdatedClaim {
  eventNonce: number;
  valsetNonce: number;
  blockHeight: number;
  members: BridgeValidator[];
  orchestrator: string;
}

export interface MsgValsetUpdatedClaimResponse {}

/**
 * This call allows the sender (and only the sender)
 * to cancel a given MsgSendToEth and recieve a refund
 * of the tokens
 */
export interface MsgCancelSendToEth {
  transactionId: number;
  sender: string;
}

export interface MsgCancelSendToEthResponse {}

const baseMsgSetOrchestratorAddress: object = {
  validator: "",
  orchestrator: "",
  ethAddress: "",
};

export const MsgSetOrchestratorAddress = {
  encode(
    message: MsgSetOrchestratorAddress,
    writer: Writer = Writer.create()
  ): Writer {
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

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSetOrchestratorAddress {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSetOrchestratorAddress,
    } as MsgSetOrchestratorAddress;
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

  fromJSON(object: any): MsgSetOrchestratorAddress {
    const message = {
      ...baseMsgSetOrchestratorAddress,
    } as MsgSetOrchestratorAddress;
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

  toJSON(message: MsgSetOrchestratorAddress): unknown {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = message.validator);
    message.orchestrator !== undefined &&
      (obj.orchestrator = message.orchestrator);
    message.ethAddress !== undefined && (obj.ethAddress = message.ethAddress);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSetOrchestratorAddress>
  ): MsgSetOrchestratorAddress {
    const message = {
      ...baseMsgSetOrchestratorAddress,
    } as MsgSetOrchestratorAddress;
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

const baseMsgSetOrchestratorAddressResponse: object = {};

export const MsgSetOrchestratorAddressResponse = {
  encode(
    _: MsgSetOrchestratorAddressResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSetOrchestratorAddressResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSetOrchestratorAddressResponse,
    } as MsgSetOrchestratorAddressResponse;
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

  fromJSON(_: any): MsgSetOrchestratorAddressResponse {
    const message = {
      ...baseMsgSetOrchestratorAddressResponse,
    } as MsgSetOrchestratorAddressResponse;
    return message;
  },

  toJSON(_: MsgSetOrchestratorAddressResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgSetOrchestratorAddressResponse>
  ): MsgSetOrchestratorAddressResponse {
    const message = {
      ...baseMsgSetOrchestratorAddressResponse,
    } as MsgSetOrchestratorAddressResponse;
    return message;
  },
};

const baseMsgValsetConfirm: object = {
  nonce: 0,
  orchestrator: "",
  ethAddress: "",
  signature: "",
};

export const MsgValsetConfirm = {
  encode(message: MsgValsetConfirm, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): MsgValsetConfirm {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgValsetConfirm } as MsgValsetConfirm;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nonce = longToNumber(reader.uint64() as Long);
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

  fromJSON(object: any): MsgValsetConfirm {
    const message = { ...baseMsgValsetConfirm } as MsgValsetConfirm;
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = Number(object.nonce);
    } else {
      message.nonce = 0;
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
    if (object.signature !== undefined && object.signature !== null) {
      message.signature = String(object.signature);
    } else {
      message.signature = "";
    }
    return message;
  },

  toJSON(message: MsgValsetConfirm): unknown {
    const obj: any = {};
    message.nonce !== undefined && (obj.nonce = message.nonce);
    message.orchestrator !== undefined &&
      (obj.orchestrator = message.orchestrator);
    message.ethAddress !== undefined && (obj.ethAddress = message.ethAddress);
    message.signature !== undefined && (obj.signature = message.signature);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgValsetConfirm>): MsgValsetConfirm {
    const message = { ...baseMsgValsetConfirm } as MsgValsetConfirm;
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = object.nonce;
    } else {
      message.nonce = 0;
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
    if (object.signature !== undefined && object.signature !== null) {
      message.signature = object.signature;
    } else {
      message.signature = "";
    }
    return message;
  },
};

const baseMsgValsetConfirmResponse: object = {};

export const MsgValsetConfirmResponse = {
  encode(
    _: MsgValsetConfirmResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgValsetConfirmResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgValsetConfirmResponse,
    } as MsgValsetConfirmResponse;
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

  fromJSON(_: any): MsgValsetConfirmResponse {
    const message = {
      ...baseMsgValsetConfirmResponse,
    } as MsgValsetConfirmResponse;
    return message;
  },

  toJSON(_: MsgValsetConfirmResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgValsetConfirmResponse>
  ): MsgValsetConfirmResponse {
    const message = {
      ...baseMsgValsetConfirmResponse,
    } as MsgValsetConfirmResponse;
    return message;
  },
};

const baseMsgSendToEth: object = { sender: "", ethDest: "" };

export const MsgSendToEth = {
  encode(message: MsgSendToEth, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): MsgSendToEth {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSendToEth } as MsgSendToEth;
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

  fromJSON(object: any): MsgSendToEth {
    const message = { ...baseMsgSendToEth } as MsgSendToEth;
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
      message.amount = Coin.fromJSON(object.amount);
    } else {
      message.amount = undefined;
    }
    if (object.bridgeFee !== undefined && object.bridgeFee !== null) {
      message.bridgeFee = Coin.fromJSON(object.bridgeFee);
    } else {
      message.bridgeFee = undefined;
    }
    return message;
  },

  toJSON(message: MsgSendToEth): unknown {
    const obj: any = {};
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

  fromPartial(object: DeepPartial<MsgSendToEth>): MsgSendToEth {
    const message = { ...baseMsgSendToEth } as MsgSendToEth;
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
      message.amount = Coin.fromPartial(object.amount);
    } else {
      message.amount = undefined;
    }
    if (object.bridgeFee !== undefined && object.bridgeFee !== null) {
      message.bridgeFee = Coin.fromPartial(object.bridgeFee);
    } else {
      message.bridgeFee = undefined;
    }
    return message;
  },
};

const baseMsgSendToEthResponse: object = {};

export const MsgSendToEthResponse = {
  encode(_: MsgSendToEthResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSendToEthResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSendToEthResponse } as MsgSendToEthResponse;
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

  fromJSON(_: any): MsgSendToEthResponse {
    const message = { ...baseMsgSendToEthResponse } as MsgSendToEthResponse;
    return message;
  },

  toJSON(_: MsgSendToEthResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgSendToEthResponse>): MsgSendToEthResponse {
    const message = { ...baseMsgSendToEthResponse } as MsgSendToEthResponse;
    return message;
  },
};

const baseMsgRequestBatch: object = { sender: "", denom: "" };

export const MsgRequestBatch = {
  encode(message: MsgRequestBatch, writer: Writer = Writer.create()): Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRequestBatch {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRequestBatch } as MsgRequestBatch;
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

  fromJSON(object: any): MsgRequestBatch {
    const message = { ...baseMsgRequestBatch } as MsgRequestBatch;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = "";
    }
    return message;
  },

  toJSON(message: MsgRequestBatch): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRequestBatch>): MsgRequestBatch {
    const message = { ...baseMsgRequestBatch } as MsgRequestBatch;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = "";
    }
    return message;
  },
};

const baseMsgRequestBatchResponse: object = {};

export const MsgRequestBatchResponse = {
  encode(_: MsgRequestBatchResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRequestBatchResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRequestBatchResponse,
    } as MsgRequestBatchResponse;
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

  fromJSON(_: any): MsgRequestBatchResponse {
    const message = {
      ...baseMsgRequestBatchResponse,
    } as MsgRequestBatchResponse;
    return message;
  },

  toJSON(_: MsgRequestBatchResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgRequestBatchResponse>
  ): MsgRequestBatchResponse {
    const message = {
      ...baseMsgRequestBatchResponse,
    } as MsgRequestBatchResponse;
    return message;
  },
};

const baseMsgConfirmBatch: object = {
  nonce: 0,
  tokenContract: "",
  ethSigner: "",
  orchestrator: "",
  signature: "",
};

export const MsgConfirmBatch = {
  encode(message: MsgConfirmBatch, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): MsgConfirmBatch {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgConfirmBatch } as MsgConfirmBatch;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nonce = longToNumber(reader.uint64() as Long);
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

  fromJSON(object: any): MsgConfirmBatch {
    const message = { ...baseMsgConfirmBatch } as MsgConfirmBatch;
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = Number(object.nonce);
    } else {
      message.nonce = 0;
    }
    if (object.tokenContract !== undefined && object.tokenContract !== null) {
      message.tokenContract = String(object.tokenContract);
    } else {
      message.tokenContract = "";
    }
    if (object.ethSigner !== undefined && object.ethSigner !== null) {
      message.ethSigner = String(object.ethSigner);
    } else {
      message.ethSigner = "";
    }
    if (object.orchestrator !== undefined && object.orchestrator !== null) {
      message.orchestrator = String(object.orchestrator);
    } else {
      message.orchestrator = "";
    }
    if (object.signature !== undefined && object.signature !== null) {
      message.signature = String(object.signature);
    } else {
      message.signature = "";
    }
    return message;
  },

  toJSON(message: MsgConfirmBatch): unknown {
    const obj: any = {};
    message.nonce !== undefined && (obj.nonce = message.nonce);
    message.tokenContract !== undefined &&
      (obj.tokenContract = message.tokenContract);
    message.ethSigner !== undefined && (obj.ethSigner = message.ethSigner);
    message.orchestrator !== undefined &&
      (obj.orchestrator = message.orchestrator);
    message.signature !== undefined && (obj.signature = message.signature);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgConfirmBatch>): MsgConfirmBatch {
    const message = { ...baseMsgConfirmBatch } as MsgConfirmBatch;
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = object.nonce;
    } else {
      message.nonce = 0;
    }
    if (object.tokenContract !== undefined && object.tokenContract !== null) {
      message.tokenContract = object.tokenContract;
    } else {
      message.tokenContract = "";
    }
    if (object.ethSigner !== undefined && object.ethSigner !== null) {
      message.ethSigner = object.ethSigner;
    } else {
      message.ethSigner = "";
    }
    if (object.orchestrator !== undefined && object.orchestrator !== null) {
      message.orchestrator = object.orchestrator;
    } else {
      message.orchestrator = "";
    }
    if (object.signature !== undefined && object.signature !== null) {
      message.signature = object.signature;
    } else {
      message.signature = "";
    }
    return message;
  },
};

const baseMsgConfirmBatchResponse: object = {};

export const MsgConfirmBatchResponse = {
  encode(_: MsgConfirmBatchResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgConfirmBatchResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgConfirmBatchResponse,
    } as MsgConfirmBatchResponse;
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

  fromJSON(_: any): MsgConfirmBatchResponse {
    const message = {
      ...baseMsgConfirmBatchResponse,
    } as MsgConfirmBatchResponse;
    return message;
  },

  toJSON(_: MsgConfirmBatchResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgConfirmBatchResponse>
  ): MsgConfirmBatchResponse {
    const message = {
      ...baseMsgConfirmBatchResponse,
    } as MsgConfirmBatchResponse;
    return message;
  },
};

const baseMsgConfirmLogicCall: object = {
  invalidationId: "",
  invalidationNonce: 0,
  ethSigner: "",
  orchestrator: "",
  signature: "",
};

export const MsgConfirmLogicCall = {
  encode(
    message: MsgConfirmLogicCall,
    writer: Writer = Writer.create()
  ): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): MsgConfirmLogicCall {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgConfirmLogicCall } as MsgConfirmLogicCall;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.invalidationId = reader.string();
          break;
        case 2:
          message.invalidationNonce = longToNumber(reader.uint64() as Long);
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

  fromJSON(object: any): MsgConfirmLogicCall {
    const message = { ...baseMsgConfirmLogicCall } as MsgConfirmLogicCall;
    if (object.invalidationId !== undefined && object.invalidationId !== null) {
      message.invalidationId = String(object.invalidationId);
    } else {
      message.invalidationId = "";
    }
    if (
      object.invalidationNonce !== undefined &&
      object.invalidationNonce !== null
    ) {
      message.invalidationNonce = Number(object.invalidationNonce);
    } else {
      message.invalidationNonce = 0;
    }
    if (object.ethSigner !== undefined && object.ethSigner !== null) {
      message.ethSigner = String(object.ethSigner);
    } else {
      message.ethSigner = "";
    }
    if (object.orchestrator !== undefined && object.orchestrator !== null) {
      message.orchestrator = String(object.orchestrator);
    } else {
      message.orchestrator = "";
    }
    if (object.signature !== undefined && object.signature !== null) {
      message.signature = String(object.signature);
    } else {
      message.signature = "";
    }
    return message;
  },

  toJSON(message: MsgConfirmLogicCall): unknown {
    const obj: any = {};
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

  fromPartial(object: DeepPartial<MsgConfirmLogicCall>): MsgConfirmLogicCall {
    const message = { ...baseMsgConfirmLogicCall } as MsgConfirmLogicCall;
    if (object.invalidationId !== undefined && object.invalidationId !== null) {
      message.invalidationId = object.invalidationId;
    } else {
      message.invalidationId = "";
    }
    if (
      object.invalidationNonce !== undefined &&
      object.invalidationNonce !== null
    ) {
      message.invalidationNonce = object.invalidationNonce;
    } else {
      message.invalidationNonce = 0;
    }
    if (object.ethSigner !== undefined && object.ethSigner !== null) {
      message.ethSigner = object.ethSigner;
    } else {
      message.ethSigner = "";
    }
    if (object.orchestrator !== undefined && object.orchestrator !== null) {
      message.orchestrator = object.orchestrator;
    } else {
      message.orchestrator = "";
    }
    if (object.signature !== undefined && object.signature !== null) {
      message.signature = object.signature;
    } else {
      message.signature = "";
    }
    return message;
  },
};

const baseMsgConfirmLogicCallResponse: object = {};

export const MsgConfirmLogicCallResponse = {
  encode(
    _: MsgConfirmLogicCallResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgConfirmLogicCallResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgConfirmLogicCallResponse,
    } as MsgConfirmLogicCallResponse;
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

  fromJSON(_: any): MsgConfirmLogicCallResponse {
    const message = {
      ...baseMsgConfirmLogicCallResponse,
    } as MsgConfirmLogicCallResponse;
    return message;
  },

  toJSON(_: MsgConfirmLogicCallResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgConfirmLogicCallResponse>
  ): MsgConfirmLogicCallResponse {
    const message = {
      ...baseMsgConfirmLogicCallResponse,
    } as MsgConfirmLogicCallResponse;
    return message;
  },
};

const baseMsgDepositClaim: object = {
  eventNonce: 0,
  blockHeight: 0,
  tokenContract: "",
  amount: "",
  ethereumSender: "",
  cosmosReceiver: "",
  orchestrator: "",
};

export const MsgDepositClaim = {
  encode(message: MsgDepositClaim, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): MsgDepositClaim {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDepositClaim } as MsgDepositClaim;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eventNonce = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.blockHeight = longToNumber(reader.uint64() as Long);
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

  fromJSON(object: any): MsgDepositClaim {
    const message = { ...baseMsgDepositClaim } as MsgDepositClaim;
    if (object.eventNonce !== undefined && object.eventNonce !== null) {
      message.eventNonce = Number(object.eventNonce);
    } else {
      message.eventNonce = 0;
    }
    if (object.blockHeight !== undefined && object.blockHeight !== null) {
      message.blockHeight = Number(object.blockHeight);
    } else {
      message.blockHeight = 0;
    }
    if (object.tokenContract !== undefined && object.tokenContract !== null) {
      message.tokenContract = String(object.tokenContract);
    } else {
      message.tokenContract = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount);
    } else {
      message.amount = "";
    }
    if (object.ethereumSender !== undefined && object.ethereumSender !== null) {
      message.ethereumSender = String(object.ethereumSender);
    } else {
      message.ethereumSender = "";
    }
    if (object.cosmosReceiver !== undefined && object.cosmosReceiver !== null) {
      message.cosmosReceiver = String(object.cosmosReceiver);
    } else {
      message.cosmosReceiver = "";
    }
    if (object.orchestrator !== undefined && object.orchestrator !== null) {
      message.orchestrator = String(object.orchestrator);
    } else {
      message.orchestrator = "";
    }
    return message;
  },

  toJSON(message: MsgDepositClaim): unknown {
    const obj: any = {};
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

  fromPartial(object: DeepPartial<MsgDepositClaim>): MsgDepositClaim {
    const message = { ...baseMsgDepositClaim } as MsgDepositClaim;
    if (object.eventNonce !== undefined && object.eventNonce !== null) {
      message.eventNonce = object.eventNonce;
    } else {
      message.eventNonce = 0;
    }
    if (object.blockHeight !== undefined && object.blockHeight !== null) {
      message.blockHeight = object.blockHeight;
    } else {
      message.blockHeight = 0;
    }
    if (object.tokenContract !== undefined && object.tokenContract !== null) {
      message.tokenContract = object.tokenContract;
    } else {
      message.tokenContract = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = "";
    }
    if (object.ethereumSender !== undefined && object.ethereumSender !== null) {
      message.ethereumSender = object.ethereumSender;
    } else {
      message.ethereumSender = "";
    }
    if (object.cosmosReceiver !== undefined && object.cosmosReceiver !== null) {
      message.cosmosReceiver = object.cosmosReceiver;
    } else {
      message.cosmosReceiver = "";
    }
    if (object.orchestrator !== undefined && object.orchestrator !== null) {
      message.orchestrator = object.orchestrator;
    } else {
      message.orchestrator = "";
    }
    return message;
  },
};

const baseMsgDepositClaimResponse: object = {};

export const MsgDepositClaimResponse = {
  encode(_: MsgDepositClaimResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDepositClaimResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDepositClaimResponse,
    } as MsgDepositClaimResponse;
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

  fromJSON(_: any): MsgDepositClaimResponse {
    const message = {
      ...baseMsgDepositClaimResponse,
    } as MsgDepositClaimResponse;
    return message;
  },

  toJSON(_: MsgDepositClaimResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDepositClaimResponse>
  ): MsgDepositClaimResponse {
    const message = {
      ...baseMsgDepositClaimResponse,
    } as MsgDepositClaimResponse;
    return message;
  },
};

const baseMsgWithdrawClaim: object = {
  eventNonce: 0,
  blockHeight: 0,
  batchNonce: 0,
  tokenContract: "",
  orchestrator: "",
};

export const MsgWithdrawClaim = {
  encode(message: MsgWithdrawClaim, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): MsgWithdrawClaim {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgWithdrawClaim } as MsgWithdrawClaim;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eventNonce = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.blockHeight = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.batchNonce = longToNumber(reader.uint64() as Long);
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

  fromJSON(object: any): MsgWithdrawClaim {
    const message = { ...baseMsgWithdrawClaim } as MsgWithdrawClaim;
    if (object.eventNonce !== undefined && object.eventNonce !== null) {
      message.eventNonce = Number(object.eventNonce);
    } else {
      message.eventNonce = 0;
    }
    if (object.blockHeight !== undefined && object.blockHeight !== null) {
      message.blockHeight = Number(object.blockHeight);
    } else {
      message.blockHeight = 0;
    }
    if (object.batchNonce !== undefined && object.batchNonce !== null) {
      message.batchNonce = Number(object.batchNonce);
    } else {
      message.batchNonce = 0;
    }
    if (object.tokenContract !== undefined && object.tokenContract !== null) {
      message.tokenContract = String(object.tokenContract);
    } else {
      message.tokenContract = "";
    }
    if (object.orchestrator !== undefined && object.orchestrator !== null) {
      message.orchestrator = String(object.orchestrator);
    } else {
      message.orchestrator = "";
    }
    return message;
  },

  toJSON(message: MsgWithdrawClaim): unknown {
    const obj: any = {};
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

  fromPartial(object: DeepPartial<MsgWithdrawClaim>): MsgWithdrawClaim {
    const message = { ...baseMsgWithdrawClaim } as MsgWithdrawClaim;
    if (object.eventNonce !== undefined && object.eventNonce !== null) {
      message.eventNonce = object.eventNonce;
    } else {
      message.eventNonce = 0;
    }
    if (object.blockHeight !== undefined && object.blockHeight !== null) {
      message.blockHeight = object.blockHeight;
    } else {
      message.blockHeight = 0;
    }
    if (object.batchNonce !== undefined && object.batchNonce !== null) {
      message.batchNonce = object.batchNonce;
    } else {
      message.batchNonce = 0;
    }
    if (object.tokenContract !== undefined && object.tokenContract !== null) {
      message.tokenContract = object.tokenContract;
    } else {
      message.tokenContract = "";
    }
    if (object.orchestrator !== undefined && object.orchestrator !== null) {
      message.orchestrator = object.orchestrator;
    } else {
      message.orchestrator = "";
    }
    return message;
  },
};

const baseMsgWithdrawClaimResponse: object = {};

export const MsgWithdrawClaimResponse = {
  encode(
    _: MsgWithdrawClaimResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgWithdrawClaimResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgWithdrawClaimResponse,
    } as MsgWithdrawClaimResponse;
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

  fromJSON(_: any): MsgWithdrawClaimResponse {
    const message = {
      ...baseMsgWithdrawClaimResponse,
    } as MsgWithdrawClaimResponse;
    return message;
  },

  toJSON(_: MsgWithdrawClaimResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgWithdrawClaimResponse>
  ): MsgWithdrawClaimResponse {
    const message = {
      ...baseMsgWithdrawClaimResponse,
    } as MsgWithdrawClaimResponse;
    return message;
  },
};

const baseMsgErc20DeployedClaim: object = {
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
  encode(
    message: MsgErc20DeployedClaim,
    writer: Writer = Writer.create()
  ): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): MsgErc20DeployedClaim {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgErc20DeployedClaim } as MsgErc20DeployedClaim;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eventNonce = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.blockHeight = longToNumber(reader.uint64() as Long);
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
          message.decimals = longToNumber(reader.uint64() as Long);
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

  fromJSON(object: any): MsgErc20DeployedClaim {
    const message = { ...baseMsgErc20DeployedClaim } as MsgErc20DeployedClaim;
    if (object.eventNonce !== undefined && object.eventNonce !== null) {
      message.eventNonce = Number(object.eventNonce);
    } else {
      message.eventNonce = 0;
    }
    if (object.blockHeight !== undefined && object.blockHeight !== null) {
      message.blockHeight = Number(object.blockHeight);
    } else {
      message.blockHeight = 0;
    }
    if (object.cosmosDenom !== undefined && object.cosmosDenom !== null) {
      message.cosmosDenom = String(object.cosmosDenom);
    } else {
      message.cosmosDenom = "";
    }
    if (object.tokenContract !== undefined && object.tokenContract !== null) {
      message.tokenContract = String(object.tokenContract);
    } else {
      message.tokenContract = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = String(object.symbol);
    } else {
      message.symbol = "";
    }
    if (object.decimals !== undefined && object.decimals !== null) {
      message.decimals = Number(object.decimals);
    } else {
      message.decimals = 0;
    }
    if (object.orchestrator !== undefined && object.orchestrator !== null) {
      message.orchestrator = String(object.orchestrator);
    } else {
      message.orchestrator = "";
    }
    return message;
  },

  toJSON(message: MsgErc20DeployedClaim): unknown {
    const obj: any = {};
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

  fromPartial(
    object: DeepPartial<MsgErc20DeployedClaim>
  ): MsgErc20DeployedClaim {
    const message = { ...baseMsgErc20DeployedClaim } as MsgErc20DeployedClaim;
    if (object.eventNonce !== undefined && object.eventNonce !== null) {
      message.eventNonce = object.eventNonce;
    } else {
      message.eventNonce = 0;
    }
    if (object.blockHeight !== undefined && object.blockHeight !== null) {
      message.blockHeight = object.blockHeight;
    } else {
      message.blockHeight = 0;
    }
    if (object.cosmosDenom !== undefined && object.cosmosDenom !== null) {
      message.cosmosDenom = object.cosmosDenom;
    } else {
      message.cosmosDenom = "";
    }
    if (object.tokenContract !== undefined && object.tokenContract !== null) {
      message.tokenContract = object.tokenContract;
    } else {
      message.tokenContract = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = object.symbol;
    } else {
      message.symbol = "";
    }
    if (object.decimals !== undefined && object.decimals !== null) {
      message.decimals = object.decimals;
    } else {
      message.decimals = 0;
    }
    if (object.orchestrator !== undefined && object.orchestrator !== null) {
      message.orchestrator = object.orchestrator;
    } else {
      message.orchestrator = "";
    }
    return message;
  },
};

const baseMsgErc20DeployedClaimResponse: object = {};

export const MsgErc20DeployedClaimResponse = {
  encode(
    _: MsgErc20DeployedClaimResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgErc20DeployedClaimResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgErc20DeployedClaimResponse,
    } as MsgErc20DeployedClaimResponse;
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

  fromJSON(_: any): MsgErc20DeployedClaimResponse {
    const message = {
      ...baseMsgErc20DeployedClaimResponse,
    } as MsgErc20DeployedClaimResponse;
    return message;
  },

  toJSON(_: MsgErc20DeployedClaimResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgErc20DeployedClaimResponse>
  ): MsgErc20DeployedClaimResponse {
    const message = {
      ...baseMsgErc20DeployedClaimResponse,
    } as MsgErc20DeployedClaimResponse;
    return message;
  },
};

const baseMsgLogicCallExecutedClaim: object = {
  eventNonce: 0,
  blockHeight: 0,
  invalidationNonce: 0,
  orchestrator: "",
};

export const MsgLogicCallExecutedClaim = {
  encode(
    message: MsgLogicCallExecutedClaim,
    writer: Writer = Writer.create()
  ): Writer {
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

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgLogicCallExecutedClaim {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgLogicCallExecutedClaim,
    } as MsgLogicCallExecutedClaim;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eventNonce = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.blockHeight = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.invalidationId = reader.bytes();
          break;
        case 4:
          message.invalidationNonce = longToNumber(reader.uint64() as Long);
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

  fromJSON(object: any): MsgLogicCallExecutedClaim {
    const message = {
      ...baseMsgLogicCallExecutedClaim,
    } as MsgLogicCallExecutedClaim;
    if (object.eventNonce !== undefined && object.eventNonce !== null) {
      message.eventNonce = Number(object.eventNonce);
    } else {
      message.eventNonce = 0;
    }
    if (object.blockHeight !== undefined && object.blockHeight !== null) {
      message.blockHeight = Number(object.blockHeight);
    } else {
      message.blockHeight = 0;
    }
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
    if (object.orchestrator !== undefined && object.orchestrator !== null) {
      message.orchestrator = String(object.orchestrator);
    } else {
      message.orchestrator = "";
    }
    return message;
  },

  toJSON(message: MsgLogicCallExecutedClaim): unknown {
    const obj: any = {};
    message.eventNonce !== undefined && (obj.eventNonce = message.eventNonce);
    message.blockHeight !== undefined &&
      (obj.blockHeight = message.blockHeight);
    message.invalidationId !== undefined &&
      (obj.invalidationId = base64FromBytes(
        message.invalidationId !== undefined
          ? message.invalidationId
          : new Uint8Array()
      ));
    message.invalidationNonce !== undefined &&
      (obj.invalidationNonce = message.invalidationNonce);
    message.orchestrator !== undefined &&
      (obj.orchestrator = message.orchestrator);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgLogicCallExecutedClaim>
  ): MsgLogicCallExecutedClaim {
    const message = {
      ...baseMsgLogicCallExecutedClaim,
    } as MsgLogicCallExecutedClaim;
    if (object.eventNonce !== undefined && object.eventNonce !== null) {
      message.eventNonce = object.eventNonce;
    } else {
      message.eventNonce = 0;
    }
    if (object.blockHeight !== undefined && object.blockHeight !== null) {
      message.blockHeight = object.blockHeight;
    } else {
      message.blockHeight = 0;
    }
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
    if (object.orchestrator !== undefined && object.orchestrator !== null) {
      message.orchestrator = object.orchestrator;
    } else {
      message.orchestrator = "";
    }
    return message;
  },
};

const baseMsgLogicCallExecutedClaimResponse: object = {};

export const MsgLogicCallExecutedClaimResponse = {
  encode(
    _: MsgLogicCallExecutedClaimResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgLogicCallExecutedClaimResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgLogicCallExecutedClaimResponse,
    } as MsgLogicCallExecutedClaimResponse;
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

  fromJSON(_: any): MsgLogicCallExecutedClaimResponse {
    const message = {
      ...baseMsgLogicCallExecutedClaimResponse,
    } as MsgLogicCallExecutedClaimResponse;
    return message;
  },

  toJSON(_: MsgLogicCallExecutedClaimResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgLogicCallExecutedClaimResponse>
  ): MsgLogicCallExecutedClaimResponse {
    const message = {
      ...baseMsgLogicCallExecutedClaimResponse,
    } as MsgLogicCallExecutedClaimResponse;
    return message;
  },
};

const baseMsgValsetUpdatedClaim: object = {
  eventNonce: 0,
  valsetNonce: 0,
  blockHeight: 0,
  orchestrator: "",
};

export const MsgValsetUpdatedClaim = {
  encode(
    message: MsgValsetUpdatedClaim,
    writer: Writer = Writer.create()
  ): Writer {
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
      BridgeValidator.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.orchestrator !== "") {
      writer.uint32(50).string(message.orchestrator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgValsetUpdatedClaim {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgValsetUpdatedClaim } as MsgValsetUpdatedClaim;
    message.members = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eventNonce = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.valsetNonce = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.blockHeight = longToNumber(reader.uint64() as Long);
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

  fromJSON(object: any): MsgValsetUpdatedClaim {
    const message = { ...baseMsgValsetUpdatedClaim } as MsgValsetUpdatedClaim;
    message.members = [];
    if (object.eventNonce !== undefined && object.eventNonce !== null) {
      message.eventNonce = Number(object.eventNonce);
    } else {
      message.eventNonce = 0;
    }
    if (object.valsetNonce !== undefined && object.valsetNonce !== null) {
      message.valsetNonce = Number(object.valsetNonce);
    } else {
      message.valsetNonce = 0;
    }
    if (object.blockHeight !== undefined && object.blockHeight !== null) {
      message.blockHeight = Number(object.blockHeight);
    } else {
      message.blockHeight = 0;
    }
    if (object.members !== undefined && object.members !== null) {
      for (const e of object.members) {
        message.members.push(BridgeValidator.fromJSON(e));
      }
    }
    if (object.orchestrator !== undefined && object.orchestrator !== null) {
      message.orchestrator = String(object.orchestrator);
    } else {
      message.orchestrator = "";
    }
    return message;
  },

  toJSON(message: MsgValsetUpdatedClaim): unknown {
    const obj: any = {};
    message.eventNonce !== undefined && (obj.eventNonce = message.eventNonce);
    message.valsetNonce !== undefined &&
      (obj.valsetNonce = message.valsetNonce);
    message.blockHeight !== undefined &&
      (obj.blockHeight = message.blockHeight);
    if (message.members) {
      obj.members = message.members.map((e) =>
        e ? BridgeValidator.toJSON(e) : undefined
      );
    } else {
      obj.members = [];
    }
    message.orchestrator !== undefined &&
      (obj.orchestrator = message.orchestrator);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgValsetUpdatedClaim>
  ): MsgValsetUpdatedClaim {
    const message = { ...baseMsgValsetUpdatedClaim } as MsgValsetUpdatedClaim;
    message.members = [];
    if (object.eventNonce !== undefined && object.eventNonce !== null) {
      message.eventNonce = object.eventNonce;
    } else {
      message.eventNonce = 0;
    }
    if (object.valsetNonce !== undefined && object.valsetNonce !== null) {
      message.valsetNonce = object.valsetNonce;
    } else {
      message.valsetNonce = 0;
    }
    if (object.blockHeight !== undefined && object.blockHeight !== null) {
      message.blockHeight = object.blockHeight;
    } else {
      message.blockHeight = 0;
    }
    if (object.members !== undefined && object.members !== null) {
      for (const e of object.members) {
        message.members.push(BridgeValidator.fromPartial(e));
      }
    }
    if (object.orchestrator !== undefined && object.orchestrator !== null) {
      message.orchestrator = object.orchestrator;
    } else {
      message.orchestrator = "";
    }
    return message;
  },
};

const baseMsgValsetUpdatedClaimResponse: object = {};

export const MsgValsetUpdatedClaimResponse = {
  encode(
    _: MsgValsetUpdatedClaimResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgValsetUpdatedClaimResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgValsetUpdatedClaimResponse,
    } as MsgValsetUpdatedClaimResponse;
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

  fromJSON(_: any): MsgValsetUpdatedClaimResponse {
    const message = {
      ...baseMsgValsetUpdatedClaimResponse,
    } as MsgValsetUpdatedClaimResponse;
    return message;
  },

  toJSON(_: MsgValsetUpdatedClaimResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgValsetUpdatedClaimResponse>
  ): MsgValsetUpdatedClaimResponse {
    const message = {
      ...baseMsgValsetUpdatedClaimResponse,
    } as MsgValsetUpdatedClaimResponse;
    return message;
  },
};

const baseMsgCancelSendToEth: object = { transactionId: 0, sender: "" };

export const MsgCancelSendToEth = {
  encode(
    message: MsgCancelSendToEth,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.transactionId !== 0) {
      writer.uint32(8).uint64(message.transactionId);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCancelSendToEth {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCancelSendToEth } as MsgCancelSendToEth;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.transactionId = longToNumber(reader.uint64() as Long);
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

  fromJSON(object: any): MsgCancelSendToEth {
    const message = { ...baseMsgCancelSendToEth } as MsgCancelSendToEth;
    if (object.transactionId !== undefined && object.transactionId !== null) {
      message.transactionId = Number(object.transactionId);
    } else {
      message.transactionId = 0;
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    return message;
  },

  toJSON(message: MsgCancelSendToEth): unknown {
    const obj: any = {};
    message.transactionId !== undefined &&
      (obj.transactionId = message.transactionId);
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCancelSendToEth>): MsgCancelSendToEth {
    const message = { ...baseMsgCancelSendToEth } as MsgCancelSendToEth;
    if (object.transactionId !== undefined && object.transactionId !== null) {
      message.transactionId = object.transactionId;
    } else {
      message.transactionId = 0;
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    return message;
  },
};

const baseMsgCancelSendToEthResponse: object = {};

export const MsgCancelSendToEthResponse = {
  encode(
    _: MsgCancelSendToEthResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCancelSendToEthResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCancelSendToEthResponse,
    } as MsgCancelSendToEthResponse;
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

  fromJSON(_: any): MsgCancelSendToEthResponse {
    const message = {
      ...baseMsgCancelSendToEthResponse,
    } as MsgCancelSendToEthResponse;
    return message;
  },

  toJSON(_: MsgCancelSendToEthResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCancelSendToEthResponse>
  ): MsgCancelSendToEthResponse {
    const message = {
      ...baseMsgCancelSendToEthResponse,
    } as MsgCancelSendToEthResponse;
    return message;
  },
};

/** Msg defines the state transitions possible within gravity */
export interface Msg {
  ValsetConfirm(request: MsgValsetConfirm): Promise<MsgValsetConfirmResponse>;
  SendToEth(request: MsgSendToEth): Promise<MsgSendToEthResponse>;
  RequestBatch(request: MsgRequestBatch): Promise<MsgRequestBatchResponse>;
  ConfirmBatch(request: MsgConfirmBatch): Promise<MsgConfirmBatchResponse>;
  ConfirmLogicCall(
    request: MsgConfirmLogicCall
  ): Promise<MsgConfirmLogicCallResponse>;
  DepositClaim(request: MsgDepositClaim): Promise<MsgDepositClaimResponse>;
  WithdrawClaim(request: MsgWithdrawClaim): Promise<MsgWithdrawClaimResponse>;
  ValsetUpdateClaim(
    request: MsgValsetUpdatedClaim
  ): Promise<MsgValsetUpdatedClaimResponse>;
  Erc20DeployedClaim(
    request: MsgErc20DeployedClaim
  ): Promise<MsgErc20DeployedClaimResponse>;
  LogicCallExecutedClaim(
    request: MsgLogicCallExecutedClaim
  ): Promise<MsgLogicCallExecutedClaimResponse>;
  SetOrchestratorAddress(
    request: MsgSetOrchestratorAddress
  ): Promise<MsgSetOrchestratorAddressResponse>;
  CancelSendToEth(
    request: MsgCancelSendToEth
  ): Promise<MsgCancelSendToEthResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  ValsetConfirm(request: MsgValsetConfirm): Promise<MsgValsetConfirmResponse> {
    const data = MsgValsetConfirm.encode(request).finish();
    const promise = this.rpc.request("gravity.v1.Msg", "ValsetConfirm", data);
    return promise.then((data) =>
      MsgValsetConfirmResponse.decode(new Reader(data))
    );
  }

  SendToEth(request: MsgSendToEth): Promise<MsgSendToEthResponse> {
    const data = MsgSendToEth.encode(request).finish();
    const promise = this.rpc.request("gravity.v1.Msg", "SendToEth", data);
    return promise.then((data) =>
      MsgSendToEthResponse.decode(new Reader(data))
    );
  }

  RequestBatch(request: MsgRequestBatch): Promise<MsgRequestBatchResponse> {
    const data = MsgRequestBatch.encode(request).finish();
    const promise = this.rpc.request("gravity.v1.Msg", "RequestBatch", data);
    return promise.then((data) =>
      MsgRequestBatchResponse.decode(new Reader(data))
    );
  }

  ConfirmBatch(request: MsgConfirmBatch): Promise<MsgConfirmBatchResponse> {
    const data = MsgConfirmBatch.encode(request).finish();
    const promise = this.rpc.request("gravity.v1.Msg", "ConfirmBatch", data);
    return promise.then((data) =>
      MsgConfirmBatchResponse.decode(new Reader(data))
    );
  }

  ConfirmLogicCall(
    request: MsgConfirmLogicCall
  ): Promise<MsgConfirmLogicCallResponse> {
    const data = MsgConfirmLogicCall.encode(request).finish();
    const promise = this.rpc.request(
      "gravity.v1.Msg",
      "ConfirmLogicCall",
      data
    );
    return promise.then((data) =>
      MsgConfirmLogicCallResponse.decode(new Reader(data))
    );
  }

  DepositClaim(request: MsgDepositClaim): Promise<MsgDepositClaimResponse> {
    const data = MsgDepositClaim.encode(request).finish();
    const promise = this.rpc.request("gravity.v1.Msg", "DepositClaim", data);
    return promise.then((data) =>
      MsgDepositClaimResponse.decode(new Reader(data))
    );
  }

  WithdrawClaim(request: MsgWithdrawClaim): Promise<MsgWithdrawClaimResponse> {
    const data = MsgWithdrawClaim.encode(request).finish();
    const promise = this.rpc.request("gravity.v1.Msg", "WithdrawClaim", data);
    return promise.then((data) =>
      MsgWithdrawClaimResponse.decode(new Reader(data))
    );
  }

  ValsetUpdateClaim(
    request: MsgValsetUpdatedClaim
  ): Promise<MsgValsetUpdatedClaimResponse> {
    const data = MsgValsetUpdatedClaim.encode(request).finish();
    const promise = this.rpc.request(
      "gravity.v1.Msg",
      "ValsetUpdateClaim",
      data
    );
    return promise.then((data) =>
      MsgValsetUpdatedClaimResponse.decode(new Reader(data))
    );
  }

  Erc20DeployedClaim(
    request: MsgErc20DeployedClaim
  ): Promise<MsgErc20DeployedClaimResponse> {
    const data = MsgErc20DeployedClaim.encode(request).finish();
    const promise = this.rpc.request(
      "gravity.v1.Msg",
      "Erc20DeployedClaim",
      data
    );
    return promise.then((data) =>
      MsgErc20DeployedClaimResponse.decode(new Reader(data))
    );
  }

  LogicCallExecutedClaim(
    request: MsgLogicCallExecutedClaim
  ): Promise<MsgLogicCallExecutedClaimResponse> {
    const data = MsgLogicCallExecutedClaim.encode(request).finish();
    const promise = this.rpc.request(
      "gravity.v1.Msg",
      "LogicCallExecutedClaim",
      data
    );
    return promise.then((data) =>
      MsgLogicCallExecutedClaimResponse.decode(new Reader(data))
    );
  }

  SetOrchestratorAddress(
    request: MsgSetOrchestratorAddress
  ): Promise<MsgSetOrchestratorAddressResponse> {
    const data = MsgSetOrchestratorAddress.encode(request).finish();
    const promise = this.rpc.request(
      "gravity.v1.Msg",
      "SetOrchestratorAddress",
      data
    );
    return promise.then((data) =>
      MsgSetOrchestratorAddressResponse.decode(new Reader(data))
    );
  }

  CancelSendToEth(
    request: MsgCancelSendToEth
  ): Promise<MsgCancelSendToEthResponse> {
    const data = MsgCancelSendToEth.encode(request).finish();
    const promise = this.rpc.request("gravity.v1.Msg", "CancelSendToEth", data);
    return promise.then((data) =>
      MsgCancelSendToEthResponse.decode(new Reader(data))
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
