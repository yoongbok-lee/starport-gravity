/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Valset, Erc20ToDenom } from "../gravity/types";
import {
  MsgValsetConfirm,
  MsgConfirmBatch,
  MsgConfirmLogicCall,
  MsgSetOrchestratorAddress,
} from "../gravity/msgs";
import {
  OutgoingTxBatch,
  OutgoingLogicCall,
  OutgoingTransferTx,
} from "../gravity/batch";
import { Attestation } from "../gravity/attestation";

export const protobufPackage = "gravity.v1";

/**
 * Params represent the Gravity genesis and store parameters
 * gravity_id:
 * a random 32 byte value to prevent signature reuse, for example if the
 * cosmos validators decided to use the same Ethereum keys for another chain
 * also running Gravity we would not want it to be possible to play a deposit
 * from chain A back on chain B's Gravity. This value IS USED ON ETHEREUM so
 * it must be set in your genesis.json before launch and not changed after
 * deploying Gravity
 *
 * contract_hash:
 * the code hash of a known good version of the Gravity contract
 * solidity code. This can be used to verify the correct version
 * of the contract has been deployed. This is a reference value for
 * goernance action only it is never read by any Gravity code
 *
 * bridge_ethereum_address:
 * is address of the bridge contract on the Ethereum side, this is a
 * reference value for governance only and is not actually used by any
 * Gravity code
 *
 * bridge_chain_id:
 * the unique identifier of the Ethereum chain, this is a reference value
 * only and is not actually used by any Gravity code
 *
 * These reference values may be used by future Gravity client implemetnations
 * to allow for saftey features or convenience features like the Gravity address
 * in your relayer. A relayer would require a configured Gravity address if
 * governance had not set the address on the chain it was relaying for.
 *
 * signed_valsets_window
 * signed_batches_window
 * signed_claims_window
 *
 * These values represent the time in blocks that a validator has to submit
 * a signature for a batch or valset, or to submit a claim for a particular
 * attestation nonce. In the case of attestations this clock starts when the
 * attestation is created, but only allows for slashing once the event has passed
 *
 * target_batch_timeout:
 *
 * This is the 'target' value for when batches time out, this is a target becuase
 * Ethereum is a probabalistic chain and you can't say for sure what the block
 * frequency is ahead of time.
 *
 * average_block_time
 * average_ethereum_block_time
 *
 * These values are the average Cosmos block time and Ethereum block time repsectively
 * and they are used to copute what the target batch timeout is. It is important that
 * governance updates these in case of any major, prolonged change in the time it takes
 * to produce a block
 *
 * slash_fraction_valset
 * slash_fraction_batch
 * slash_fraction_claim
 * slash_fraction_conflicting_claim
 *
 * The slashing fractions for the various gravity related slashing conditions. The first three
 * refer to not submitting a particular message, the third for submitting a different claim
 * for the same Ethereum event
 */
export interface Params {
  gravityId: string;
  contractSourceHash: string;
  bridgeEthereumAddress: string;
  bridgeChainId: number;
  signedValsetsWindow: number;
  signedBatchesWindow: number;
  signedClaimsWindow: number;
  targetBatchTimeout: number;
  averageBlockTime: number;
  averageEthereumBlockTime: number;
  slashFractionValset: Uint8Array;
  slashFractionBatch: Uint8Array;
  slashFractionClaim: Uint8Array;
  slashFractionConflictingClaim: Uint8Array;
  unbondSlashingValsetsWindow: number;
}

/** GenesisState struct */
export interface GenesisState {
  params: Params | undefined;
  lastObservedNonce: number;
  valsets: Valset[];
  valsetConfirms: MsgValsetConfirm[];
  batches: OutgoingTxBatch[];
  batchConfirms: MsgConfirmBatch[];
  logicCalls: OutgoingLogicCall[];
  logicCallConfirms: MsgConfirmLogicCall[];
  attestations: Attestation[];
  delegateKeys: MsgSetOrchestratorAddress[];
  erc20ToDenoms: Erc20ToDenom[];
  unbatchedTransfers: OutgoingTransferTx[];
}

const baseParams: object = {
  gravityId: "",
  contractSourceHash: "",
  bridgeEthereumAddress: "",
  bridgeChainId: 0,
  signedValsetsWindow: 0,
  signedBatchesWindow: 0,
  signedClaimsWindow: 0,
  targetBatchTimeout: 0,
  averageBlockTime: 0,
  averageEthereumBlockTime: 0,
  unbondSlashingValsetsWindow: 0,
};

export const Params = {
  encode(message: Params, writer: Writer = Writer.create()): Writer {
    if (message.gravityId !== "") {
      writer.uint32(10).string(message.gravityId);
    }
    if (message.contractSourceHash !== "") {
      writer.uint32(18).string(message.contractSourceHash);
    }
    if (message.bridgeEthereumAddress !== "") {
      writer.uint32(34).string(message.bridgeEthereumAddress);
    }
    if (message.bridgeChainId !== 0) {
      writer.uint32(40).uint64(message.bridgeChainId);
    }
    if (message.signedValsetsWindow !== 0) {
      writer.uint32(48).uint64(message.signedValsetsWindow);
    }
    if (message.signedBatchesWindow !== 0) {
      writer.uint32(56).uint64(message.signedBatchesWindow);
    }
    if (message.signedClaimsWindow !== 0) {
      writer.uint32(64).uint64(message.signedClaimsWindow);
    }
    if (message.targetBatchTimeout !== 0) {
      writer.uint32(80).uint64(message.targetBatchTimeout);
    }
    if (message.averageBlockTime !== 0) {
      writer.uint32(88).uint64(message.averageBlockTime);
    }
    if (message.averageEthereumBlockTime !== 0) {
      writer.uint32(96).uint64(message.averageEthereumBlockTime);
    }
    if (message.slashFractionValset.length !== 0) {
      writer.uint32(106).bytes(message.slashFractionValset);
    }
    if (message.slashFractionBatch.length !== 0) {
      writer.uint32(114).bytes(message.slashFractionBatch);
    }
    if (message.slashFractionClaim.length !== 0) {
      writer.uint32(122).bytes(message.slashFractionClaim);
    }
    if (message.slashFractionConflictingClaim.length !== 0) {
      writer.uint32(130).bytes(message.slashFractionConflictingClaim);
    }
    if (message.unbondSlashingValsetsWindow !== 0) {
      writer.uint32(136).uint64(message.unbondSlashingValsetsWindow);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParams } as Params;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gravityId = reader.string();
          break;
        case 2:
          message.contractSourceHash = reader.string();
          break;
        case 4:
          message.bridgeEthereumAddress = reader.string();
          break;
        case 5:
          message.bridgeChainId = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.signedValsetsWindow = longToNumber(reader.uint64() as Long);
          break;
        case 7:
          message.signedBatchesWindow = longToNumber(reader.uint64() as Long);
          break;
        case 8:
          message.signedClaimsWindow = longToNumber(reader.uint64() as Long);
          break;
        case 10:
          message.targetBatchTimeout = longToNumber(reader.uint64() as Long);
          break;
        case 11:
          message.averageBlockTime = longToNumber(reader.uint64() as Long);
          break;
        case 12:
          message.averageEthereumBlockTime = longToNumber(
            reader.uint64() as Long
          );
          break;
        case 13:
          message.slashFractionValset = reader.bytes();
          break;
        case 14:
          message.slashFractionBatch = reader.bytes();
          break;
        case 15:
          message.slashFractionClaim = reader.bytes();
          break;
        case 16:
          message.slashFractionConflictingClaim = reader.bytes();
          break;
        case 17:
          message.unbondSlashingValsetsWindow = longToNumber(
            reader.uint64() as Long
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Params {
    const message = { ...baseParams } as Params;
    if (object.gravityId !== undefined && object.gravityId !== null) {
      message.gravityId = String(object.gravityId);
    } else {
      message.gravityId = "";
    }
    if (
      object.contractSourceHash !== undefined &&
      object.contractSourceHash !== null
    ) {
      message.contractSourceHash = String(object.contractSourceHash);
    } else {
      message.contractSourceHash = "";
    }
    if (
      object.bridgeEthereumAddress !== undefined &&
      object.bridgeEthereumAddress !== null
    ) {
      message.bridgeEthereumAddress = String(object.bridgeEthereumAddress);
    } else {
      message.bridgeEthereumAddress = "";
    }
    if (object.bridgeChainId !== undefined && object.bridgeChainId !== null) {
      message.bridgeChainId = Number(object.bridgeChainId);
    } else {
      message.bridgeChainId = 0;
    }
    if (
      object.signedValsetsWindow !== undefined &&
      object.signedValsetsWindow !== null
    ) {
      message.signedValsetsWindow = Number(object.signedValsetsWindow);
    } else {
      message.signedValsetsWindow = 0;
    }
    if (
      object.signedBatchesWindow !== undefined &&
      object.signedBatchesWindow !== null
    ) {
      message.signedBatchesWindow = Number(object.signedBatchesWindow);
    } else {
      message.signedBatchesWindow = 0;
    }
    if (
      object.signedClaimsWindow !== undefined &&
      object.signedClaimsWindow !== null
    ) {
      message.signedClaimsWindow = Number(object.signedClaimsWindow);
    } else {
      message.signedClaimsWindow = 0;
    }
    if (
      object.targetBatchTimeout !== undefined &&
      object.targetBatchTimeout !== null
    ) {
      message.targetBatchTimeout = Number(object.targetBatchTimeout);
    } else {
      message.targetBatchTimeout = 0;
    }
    if (
      object.averageBlockTime !== undefined &&
      object.averageBlockTime !== null
    ) {
      message.averageBlockTime = Number(object.averageBlockTime);
    } else {
      message.averageBlockTime = 0;
    }
    if (
      object.averageEthereumBlockTime !== undefined &&
      object.averageEthereumBlockTime !== null
    ) {
      message.averageEthereumBlockTime = Number(
        object.averageEthereumBlockTime
      );
    } else {
      message.averageEthereumBlockTime = 0;
    }
    if (
      object.slashFractionValset !== undefined &&
      object.slashFractionValset !== null
    ) {
      message.slashFractionValset = bytesFromBase64(object.slashFractionValset);
    }
    if (
      object.slashFractionBatch !== undefined &&
      object.slashFractionBatch !== null
    ) {
      message.slashFractionBatch = bytesFromBase64(object.slashFractionBatch);
    }
    if (
      object.slashFractionClaim !== undefined &&
      object.slashFractionClaim !== null
    ) {
      message.slashFractionClaim = bytesFromBase64(object.slashFractionClaim);
    }
    if (
      object.slashFractionConflictingClaim !== undefined &&
      object.slashFractionConflictingClaim !== null
    ) {
      message.slashFractionConflictingClaim = bytesFromBase64(
        object.slashFractionConflictingClaim
      );
    }
    if (
      object.unbondSlashingValsetsWindow !== undefined &&
      object.unbondSlashingValsetsWindow !== null
    ) {
      message.unbondSlashingValsetsWindow = Number(
        object.unbondSlashingValsetsWindow
      );
    } else {
      message.unbondSlashingValsetsWindow = 0;
    }
    return message;
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.gravityId !== undefined && (obj.gravityId = message.gravityId);
    message.contractSourceHash !== undefined &&
      (obj.contractSourceHash = message.contractSourceHash);
    message.bridgeEthereumAddress !== undefined &&
      (obj.bridgeEthereumAddress = message.bridgeEthereumAddress);
    message.bridgeChainId !== undefined &&
      (obj.bridgeChainId = message.bridgeChainId);
    message.signedValsetsWindow !== undefined &&
      (obj.signedValsetsWindow = message.signedValsetsWindow);
    message.signedBatchesWindow !== undefined &&
      (obj.signedBatchesWindow = message.signedBatchesWindow);
    message.signedClaimsWindow !== undefined &&
      (obj.signedClaimsWindow = message.signedClaimsWindow);
    message.targetBatchTimeout !== undefined &&
      (obj.targetBatchTimeout = message.targetBatchTimeout);
    message.averageBlockTime !== undefined &&
      (obj.averageBlockTime = message.averageBlockTime);
    message.averageEthereumBlockTime !== undefined &&
      (obj.averageEthereumBlockTime = message.averageEthereumBlockTime);
    message.slashFractionValset !== undefined &&
      (obj.slashFractionValset = base64FromBytes(
        message.slashFractionValset !== undefined
          ? message.slashFractionValset
          : new Uint8Array()
      ));
    message.slashFractionBatch !== undefined &&
      (obj.slashFractionBatch = base64FromBytes(
        message.slashFractionBatch !== undefined
          ? message.slashFractionBatch
          : new Uint8Array()
      ));
    message.slashFractionClaim !== undefined &&
      (obj.slashFractionClaim = base64FromBytes(
        message.slashFractionClaim !== undefined
          ? message.slashFractionClaim
          : new Uint8Array()
      ));
    message.slashFractionConflictingClaim !== undefined &&
      (obj.slashFractionConflictingClaim = base64FromBytes(
        message.slashFractionConflictingClaim !== undefined
          ? message.slashFractionConflictingClaim
          : new Uint8Array()
      ));
    message.unbondSlashingValsetsWindow !== undefined &&
      (obj.unbondSlashingValsetsWindow = message.unbondSlashingValsetsWindow);
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params;
    if (object.gravityId !== undefined && object.gravityId !== null) {
      message.gravityId = object.gravityId;
    } else {
      message.gravityId = "";
    }
    if (
      object.contractSourceHash !== undefined &&
      object.contractSourceHash !== null
    ) {
      message.contractSourceHash = object.contractSourceHash;
    } else {
      message.contractSourceHash = "";
    }
    if (
      object.bridgeEthereumAddress !== undefined &&
      object.bridgeEthereumAddress !== null
    ) {
      message.bridgeEthereumAddress = object.bridgeEthereumAddress;
    } else {
      message.bridgeEthereumAddress = "";
    }
    if (object.bridgeChainId !== undefined && object.bridgeChainId !== null) {
      message.bridgeChainId = object.bridgeChainId;
    } else {
      message.bridgeChainId = 0;
    }
    if (
      object.signedValsetsWindow !== undefined &&
      object.signedValsetsWindow !== null
    ) {
      message.signedValsetsWindow = object.signedValsetsWindow;
    } else {
      message.signedValsetsWindow = 0;
    }
    if (
      object.signedBatchesWindow !== undefined &&
      object.signedBatchesWindow !== null
    ) {
      message.signedBatchesWindow = object.signedBatchesWindow;
    } else {
      message.signedBatchesWindow = 0;
    }
    if (
      object.signedClaimsWindow !== undefined &&
      object.signedClaimsWindow !== null
    ) {
      message.signedClaimsWindow = object.signedClaimsWindow;
    } else {
      message.signedClaimsWindow = 0;
    }
    if (
      object.targetBatchTimeout !== undefined &&
      object.targetBatchTimeout !== null
    ) {
      message.targetBatchTimeout = object.targetBatchTimeout;
    } else {
      message.targetBatchTimeout = 0;
    }
    if (
      object.averageBlockTime !== undefined &&
      object.averageBlockTime !== null
    ) {
      message.averageBlockTime = object.averageBlockTime;
    } else {
      message.averageBlockTime = 0;
    }
    if (
      object.averageEthereumBlockTime !== undefined &&
      object.averageEthereumBlockTime !== null
    ) {
      message.averageEthereumBlockTime = object.averageEthereumBlockTime;
    } else {
      message.averageEthereumBlockTime = 0;
    }
    if (
      object.slashFractionValset !== undefined &&
      object.slashFractionValset !== null
    ) {
      message.slashFractionValset = object.slashFractionValset;
    } else {
      message.slashFractionValset = new Uint8Array();
    }
    if (
      object.slashFractionBatch !== undefined &&
      object.slashFractionBatch !== null
    ) {
      message.slashFractionBatch = object.slashFractionBatch;
    } else {
      message.slashFractionBatch = new Uint8Array();
    }
    if (
      object.slashFractionClaim !== undefined &&
      object.slashFractionClaim !== null
    ) {
      message.slashFractionClaim = object.slashFractionClaim;
    } else {
      message.slashFractionClaim = new Uint8Array();
    }
    if (
      object.slashFractionConflictingClaim !== undefined &&
      object.slashFractionConflictingClaim !== null
    ) {
      message.slashFractionConflictingClaim =
        object.slashFractionConflictingClaim;
    } else {
      message.slashFractionConflictingClaim = new Uint8Array();
    }
    if (
      object.unbondSlashingValsetsWindow !== undefined &&
      object.unbondSlashingValsetsWindow !== null
    ) {
      message.unbondSlashingValsetsWindow = object.unbondSlashingValsetsWindow;
    } else {
      message.unbondSlashingValsetsWindow = 0;
    }
    return message;
  },
};

const baseGenesisState: object = { lastObservedNonce: 0 };

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.lastObservedNonce !== 0) {
      writer.uint32(16).uint64(message.lastObservedNonce);
    }
    for (const v of message.valsets) {
      Valset.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.valsetConfirms) {
      MsgValsetConfirm.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.batches) {
      OutgoingTxBatch.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.batchConfirms) {
      MsgConfirmBatch.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.logicCalls) {
      OutgoingLogicCall.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.logicCallConfirms) {
      MsgConfirmLogicCall.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.attestations) {
      Attestation.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.delegateKeys) {
      MsgSetOrchestratorAddress.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    for (const v of message.erc20ToDenoms) {
      Erc20ToDenom.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    for (const v of message.unbatchedTransfers) {
      OutgoingTransferTx.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.valsets = [];
    message.valsetConfirms = [];
    message.batches = [];
    message.batchConfirms = [];
    message.logicCalls = [];
    message.logicCallConfirms = [];
    message.attestations = [];
    message.delegateKeys = [];
    message.erc20ToDenoms = [];
    message.unbatchedTransfers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.lastObservedNonce = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.valsets.push(Valset.decode(reader, reader.uint32()));
          break;
        case 4:
          message.valsetConfirms.push(
            MsgValsetConfirm.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.batches.push(OutgoingTxBatch.decode(reader, reader.uint32()));
          break;
        case 6:
          message.batchConfirms.push(
            MsgConfirmBatch.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.logicCalls.push(
            OutgoingLogicCall.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.logicCallConfirms.push(
            MsgConfirmLogicCall.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.attestations.push(
            Attestation.decode(reader, reader.uint32())
          );
          break;
        case 10:
          message.delegateKeys.push(
            MsgSetOrchestratorAddress.decode(reader, reader.uint32())
          );
          break;
        case 11:
          message.erc20ToDenoms.push(
            Erc20ToDenom.decode(reader, reader.uint32())
          );
          break;
        case 12:
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

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.valsets = [];
    message.valsetConfirms = [];
    message.batches = [];
    message.batchConfirms = [];
    message.logicCalls = [];
    message.logicCallConfirms = [];
    message.attestations = [];
    message.delegateKeys = [];
    message.erc20ToDenoms = [];
    message.unbatchedTransfers = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    if (
      object.lastObservedNonce !== undefined &&
      object.lastObservedNonce !== null
    ) {
      message.lastObservedNonce = Number(object.lastObservedNonce);
    } else {
      message.lastObservedNonce = 0;
    }
    if (object.valsets !== undefined && object.valsets !== null) {
      for (const e of object.valsets) {
        message.valsets.push(Valset.fromJSON(e));
      }
    }
    if (object.valsetConfirms !== undefined && object.valsetConfirms !== null) {
      for (const e of object.valsetConfirms) {
        message.valsetConfirms.push(MsgValsetConfirm.fromJSON(e));
      }
    }
    if (object.batches !== undefined && object.batches !== null) {
      for (const e of object.batches) {
        message.batches.push(OutgoingTxBatch.fromJSON(e));
      }
    }
    if (object.batchConfirms !== undefined && object.batchConfirms !== null) {
      for (const e of object.batchConfirms) {
        message.batchConfirms.push(MsgConfirmBatch.fromJSON(e));
      }
    }
    if (object.logicCalls !== undefined && object.logicCalls !== null) {
      for (const e of object.logicCalls) {
        message.logicCalls.push(OutgoingLogicCall.fromJSON(e));
      }
    }
    if (
      object.logicCallConfirms !== undefined &&
      object.logicCallConfirms !== null
    ) {
      for (const e of object.logicCallConfirms) {
        message.logicCallConfirms.push(MsgConfirmLogicCall.fromJSON(e));
      }
    }
    if (object.attestations !== undefined && object.attestations !== null) {
      for (const e of object.attestations) {
        message.attestations.push(Attestation.fromJSON(e));
      }
    }
    if (object.delegateKeys !== undefined && object.delegateKeys !== null) {
      for (const e of object.delegateKeys) {
        message.delegateKeys.push(MsgSetOrchestratorAddress.fromJSON(e));
      }
    }
    if (object.erc20ToDenoms !== undefined && object.erc20ToDenoms !== null) {
      for (const e of object.erc20ToDenoms) {
        message.erc20ToDenoms.push(Erc20ToDenom.fromJSON(e));
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

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.lastObservedNonce !== undefined &&
      (obj.lastObservedNonce = message.lastObservedNonce);
    if (message.valsets) {
      obj.valsets = message.valsets.map((e) =>
        e ? Valset.toJSON(e) : undefined
      );
    } else {
      obj.valsets = [];
    }
    if (message.valsetConfirms) {
      obj.valsetConfirms = message.valsetConfirms.map((e) =>
        e ? MsgValsetConfirm.toJSON(e) : undefined
      );
    } else {
      obj.valsetConfirms = [];
    }
    if (message.batches) {
      obj.batches = message.batches.map((e) =>
        e ? OutgoingTxBatch.toJSON(e) : undefined
      );
    } else {
      obj.batches = [];
    }
    if (message.batchConfirms) {
      obj.batchConfirms = message.batchConfirms.map((e) =>
        e ? MsgConfirmBatch.toJSON(e) : undefined
      );
    } else {
      obj.batchConfirms = [];
    }
    if (message.logicCalls) {
      obj.logicCalls = message.logicCalls.map((e) =>
        e ? OutgoingLogicCall.toJSON(e) : undefined
      );
    } else {
      obj.logicCalls = [];
    }
    if (message.logicCallConfirms) {
      obj.logicCallConfirms = message.logicCallConfirms.map((e) =>
        e ? MsgConfirmLogicCall.toJSON(e) : undefined
      );
    } else {
      obj.logicCallConfirms = [];
    }
    if (message.attestations) {
      obj.attestations = message.attestations.map((e) =>
        e ? Attestation.toJSON(e) : undefined
      );
    } else {
      obj.attestations = [];
    }
    if (message.delegateKeys) {
      obj.delegateKeys = message.delegateKeys.map((e) =>
        e ? MsgSetOrchestratorAddress.toJSON(e) : undefined
      );
    } else {
      obj.delegateKeys = [];
    }
    if (message.erc20ToDenoms) {
      obj.erc20ToDenoms = message.erc20ToDenoms.map((e) =>
        e ? Erc20ToDenom.toJSON(e) : undefined
      );
    } else {
      obj.erc20ToDenoms = [];
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

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.valsets = [];
    message.valsetConfirms = [];
    message.batches = [];
    message.batchConfirms = [];
    message.logicCalls = [];
    message.logicCallConfirms = [];
    message.attestations = [];
    message.delegateKeys = [];
    message.erc20ToDenoms = [];
    message.unbatchedTransfers = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    if (
      object.lastObservedNonce !== undefined &&
      object.lastObservedNonce !== null
    ) {
      message.lastObservedNonce = object.lastObservedNonce;
    } else {
      message.lastObservedNonce = 0;
    }
    if (object.valsets !== undefined && object.valsets !== null) {
      for (const e of object.valsets) {
        message.valsets.push(Valset.fromPartial(e));
      }
    }
    if (object.valsetConfirms !== undefined && object.valsetConfirms !== null) {
      for (const e of object.valsetConfirms) {
        message.valsetConfirms.push(MsgValsetConfirm.fromPartial(e));
      }
    }
    if (object.batches !== undefined && object.batches !== null) {
      for (const e of object.batches) {
        message.batches.push(OutgoingTxBatch.fromPartial(e));
      }
    }
    if (object.batchConfirms !== undefined && object.batchConfirms !== null) {
      for (const e of object.batchConfirms) {
        message.batchConfirms.push(MsgConfirmBatch.fromPartial(e));
      }
    }
    if (object.logicCalls !== undefined && object.logicCalls !== null) {
      for (const e of object.logicCalls) {
        message.logicCalls.push(OutgoingLogicCall.fromPartial(e));
      }
    }
    if (
      object.logicCallConfirms !== undefined &&
      object.logicCallConfirms !== null
    ) {
      for (const e of object.logicCallConfirms) {
        message.logicCallConfirms.push(MsgConfirmLogicCall.fromPartial(e));
      }
    }
    if (object.attestations !== undefined && object.attestations !== null) {
      for (const e of object.attestations) {
        message.attestations.push(Attestation.fromPartial(e));
      }
    }
    if (object.delegateKeys !== undefined && object.delegateKeys !== null) {
      for (const e of object.delegateKeys) {
        message.delegateKeys.push(MsgSetOrchestratorAddress.fromPartial(e));
      }
    }
    if (object.erc20ToDenoms !== undefined && object.erc20ToDenoms !== null) {
      for (const e of object.erc20ToDenoms) {
        message.erc20ToDenoms.push(Erc20ToDenom.fromPartial(e));
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
