/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface HashingTestInterface extends ethers.utils.Interface {
  functions: {
    "ConcatHash(address[],uint256[],uint256,bytes32)": FunctionFragment;
    "ConcatHash2(address[],uint256[],uint256,bytes32)": FunctionFragment;
    "IterativeHash(address[],uint256[],uint256,bytes32)": FunctionFragment;
    "JustSaveEverything(address[],uint256[],uint256)": FunctionFragment;
    "JustSaveEverythingAgain(address[],uint256[],uint256)": FunctionFragment;
    "lastCheckpoint()": FunctionFragment;
    "state_nonce()": FunctionFragment;
    "state_powers(uint256)": FunctionFragment;
    "state_validators(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "ConcatHash",
    values: [string[], BigNumberish[], BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "ConcatHash2",
    values: [string[], BigNumberish[], BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "IterativeHash",
    values: [string[], BigNumberish[], BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "JustSaveEverything",
    values: [string[], BigNumberish[], BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "JustSaveEverythingAgain",
    values: [string[], BigNumberish[], BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "lastCheckpoint",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "state_nonce",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "state_powers",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "state_validators",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "ConcatHash", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "ConcatHash2",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "IterativeHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "JustSaveEverything",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "JustSaveEverythingAgain",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lastCheckpoint",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "state_nonce",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "state_powers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "state_validators",
    data: BytesLike
  ): Result;

  events: {};
}

export class HashingTest extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: HashingTestInterface;

  functions: {
    ConcatHash(
      _validators: string[],
      _powers: BigNumberish[],
      _valsetNonce: BigNumberish,
      _gravityId: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "ConcatHash(address[],uint256[],uint256,bytes32)"(
      _validators: string[],
      _powers: BigNumberish[],
      _valsetNonce: BigNumberish,
      _gravityId: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    ConcatHash2(
      _validators: string[],
      _powers: BigNumberish[],
      _valsetNonce: BigNumberish,
      _gravityId: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "ConcatHash2(address[],uint256[],uint256,bytes32)"(
      _validators: string[],
      _powers: BigNumberish[],
      _valsetNonce: BigNumberish,
      _gravityId: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    IterativeHash(
      _validators: string[],
      _powers: BigNumberish[],
      _valsetNonce: BigNumberish,
      _gravityId: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "IterativeHash(address[],uint256[],uint256,bytes32)"(
      _validators: string[],
      _powers: BigNumberish[],
      _valsetNonce: BigNumberish,
      _gravityId: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    JustSaveEverything(
      _validators: string[],
      _powers: BigNumberish[],
      _valsetNonce: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "JustSaveEverything(address[],uint256[],uint256)"(
      _validators: string[],
      _powers: BigNumberish[],
      _valsetNonce: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    JustSaveEverythingAgain(
      _validators: string[],
      _powers: BigNumberish[],
      _valsetNonce: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "JustSaveEverythingAgain(address[],uint256[],uint256)"(
      _validators: string[],
      _powers: BigNumberish[],
      _valsetNonce: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    lastCheckpoint(overrides?: CallOverrides): Promise<[string]>;

    "lastCheckpoint()"(overrides?: CallOverrides): Promise<[string]>;

    state_nonce(overrides?: CallOverrides): Promise<[BigNumber]>;

    "state_nonce()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    state_powers(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "state_powers(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    state_validators(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "state_validators(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  ConcatHash(
    _validators: string[],
    _powers: BigNumberish[],
    _valsetNonce: BigNumberish,
    _gravityId: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "ConcatHash(address[],uint256[],uint256,bytes32)"(
    _validators: string[],
    _powers: BigNumberish[],
    _valsetNonce: BigNumberish,
    _gravityId: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  ConcatHash2(
    _validators: string[],
    _powers: BigNumberish[],
    _valsetNonce: BigNumberish,
    _gravityId: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "ConcatHash2(address[],uint256[],uint256,bytes32)"(
    _validators: string[],
    _powers: BigNumberish[],
    _valsetNonce: BigNumberish,
    _gravityId: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  IterativeHash(
    _validators: string[],
    _powers: BigNumberish[],
    _valsetNonce: BigNumberish,
    _gravityId: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "IterativeHash(address[],uint256[],uint256,bytes32)"(
    _validators: string[],
    _powers: BigNumberish[],
    _valsetNonce: BigNumberish,
    _gravityId: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  JustSaveEverything(
    _validators: string[],
    _powers: BigNumberish[],
    _valsetNonce: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "JustSaveEverything(address[],uint256[],uint256)"(
    _validators: string[],
    _powers: BigNumberish[],
    _valsetNonce: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  JustSaveEverythingAgain(
    _validators: string[],
    _powers: BigNumberish[],
    _valsetNonce: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "JustSaveEverythingAgain(address[],uint256[],uint256)"(
    _validators: string[],
    _powers: BigNumberish[],
    _valsetNonce: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  lastCheckpoint(overrides?: CallOverrides): Promise<string>;

  "lastCheckpoint()"(overrides?: CallOverrides): Promise<string>;

  state_nonce(overrides?: CallOverrides): Promise<BigNumber>;

  "state_nonce()"(overrides?: CallOverrides): Promise<BigNumber>;

  state_powers(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "state_powers(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  state_validators(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "state_validators(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    ConcatHash(
      _validators: string[],
      _powers: BigNumberish[],
      _valsetNonce: BigNumberish,
      _gravityId: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "ConcatHash(address[],uint256[],uint256,bytes32)"(
      _validators: string[],
      _powers: BigNumberish[],
      _valsetNonce: BigNumberish,
      _gravityId: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    ConcatHash2(
      _validators: string[],
      _powers: BigNumberish[],
      _valsetNonce: BigNumberish,
      _gravityId: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "ConcatHash2(address[],uint256[],uint256,bytes32)"(
      _validators: string[],
      _powers: BigNumberish[],
      _valsetNonce: BigNumberish,
      _gravityId: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    IterativeHash(
      _validators: string[],
      _powers: BigNumberish[],
      _valsetNonce: BigNumberish,
      _gravityId: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "IterativeHash(address[],uint256[],uint256,bytes32)"(
      _validators: string[],
      _powers: BigNumberish[],
      _valsetNonce: BigNumberish,
      _gravityId: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    JustSaveEverything(
      _validators: string[],
      _powers: BigNumberish[],
      _valsetNonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "JustSaveEverything(address[],uint256[],uint256)"(
      _validators: string[],
      _powers: BigNumberish[],
      _valsetNonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    JustSaveEverythingAgain(
      _validators: string[],
      _powers: BigNumberish[],
      _valsetNonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "JustSaveEverythingAgain(address[],uint256[],uint256)"(
      _validators: string[],
      _powers: BigNumberish[],
      _valsetNonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    lastCheckpoint(overrides?: CallOverrides): Promise<string>;

    "lastCheckpoint()"(overrides?: CallOverrides): Promise<string>;

    state_nonce(overrides?: CallOverrides): Promise<BigNumber>;

    "state_nonce()"(overrides?: CallOverrides): Promise<BigNumber>;

    state_powers(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "state_powers(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    state_validators(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "state_validators(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    ConcatHash(
      _validators: string[],
      _powers: BigNumberish[],
      _valsetNonce: BigNumberish,
      _gravityId: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "ConcatHash(address[],uint256[],uint256,bytes32)"(
      _validators: string[],
      _powers: BigNumberish[],
      _valsetNonce: BigNumberish,
      _gravityId: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    ConcatHash2(
      _validators: string[],
      _powers: BigNumberish[],
      _valsetNonce: BigNumberish,
      _gravityId: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "ConcatHash2(address[],uint256[],uint256,bytes32)"(
      _validators: string[],
      _powers: BigNumberish[],
      _valsetNonce: BigNumberish,
      _gravityId: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    IterativeHash(
      _validators: string[],
      _powers: BigNumberish[],
      _valsetNonce: BigNumberish,
      _gravityId: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "IterativeHash(address[],uint256[],uint256,bytes32)"(
      _validators: string[],
      _powers: BigNumberish[],
      _valsetNonce: BigNumberish,
      _gravityId: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    JustSaveEverything(
      _validators: string[],
      _powers: BigNumberish[],
      _valsetNonce: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "JustSaveEverything(address[],uint256[],uint256)"(
      _validators: string[],
      _powers: BigNumberish[],
      _valsetNonce: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    JustSaveEverythingAgain(
      _validators: string[],
      _powers: BigNumberish[],
      _valsetNonce: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "JustSaveEverythingAgain(address[],uint256[],uint256)"(
      _validators: string[],
      _powers: BigNumberish[],
      _valsetNonce: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    lastCheckpoint(overrides?: CallOverrides): Promise<BigNumber>;

    "lastCheckpoint()"(overrides?: CallOverrides): Promise<BigNumber>;

    state_nonce(overrides?: CallOverrides): Promise<BigNumber>;

    "state_nonce()"(overrides?: CallOverrides): Promise<BigNumber>;

    state_powers(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "state_powers(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    state_validators(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "state_validators(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    ConcatHash(
      _validators: string[],
      _powers: BigNumberish[],
      _valsetNonce: BigNumberish,
      _gravityId: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "ConcatHash(address[],uint256[],uint256,bytes32)"(
      _validators: string[],
      _powers: BigNumberish[],
      _valsetNonce: BigNumberish,
      _gravityId: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    ConcatHash2(
      _validators: string[],
      _powers: BigNumberish[],
      _valsetNonce: BigNumberish,
      _gravityId: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "ConcatHash2(address[],uint256[],uint256,bytes32)"(
      _validators: string[],
      _powers: BigNumberish[],
      _valsetNonce: BigNumberish,
      _gravityId: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    IterativeHash(
      _validators: string[],
      _powers: BigNumberish[],
      _valsetNonce: BigNumberish,
      _gravityId: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "IterativeHash(address[],uint256[],uint256,bytes32)"(
      _validators: string[],
      _powers: BigNumberish[],
      _valsetNonce: BigNumberish,
      _gravityId: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    JustSaveEverything(
      _validators: string[],
      _powers: BigNumberish[],
      _valsetNonce: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "JustSaveEverything(address[],uint256[],uint256)"(
      _validators: string[],
      _powers: BigNumberish[],
      _valsetNonce: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    JustSaveEverythingAgain(
      _validators: string[],
      _powers: BigNumberish[],
      _valsetNonce: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "JustSaveEverythingAgain(address[],uint256[],uint256)"(
      _validators: string[],
      _powers: BigNumberish[],
      _valsetNonce: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    lastCheckpoint(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "lastCheckpoint()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    state_nonce(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "state_nonce()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    state_powers(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "state_powers(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    state_validators(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "state_validators(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
