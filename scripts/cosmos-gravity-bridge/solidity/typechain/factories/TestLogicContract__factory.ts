/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { TestLogicContract } from "../TestLogicContract";

export class TestLogicContract__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _tokenContract: string,
    overrides?: Overrides
  ): Promise<TestLogicContract> {
    return super.deploy(
      _tokenContract,
      overrides || {}
    ) as Promise<TestLogicContract>;
  }
  getDeployTransaction(
    _tokenContract: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(_tokenContract, overrides || {});
  }
  attach(address: string): TestLogicContract {
    return super.attach(address) as TestLogicContract;
  }
  connect(signer: Signer): TestLogicContract__factory {
    return super.connect(signer) as TestLogicContract__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestLogicContract {
    return new Contract(address, _abi, signerOrProvider) as TestLogicContract;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenContract",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_a",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_b",
        type: "uint256",
      },
    ],
    name: "transferTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516105b53803806105b58339818101604052602081101561003357600080fd5b505160006100486001600160e01b036100b716565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a350600180546001600160a01b0319166001600160a01b03929092169190911790556100bb565b3390565b6104eb806100ca6000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c8063715018a6146100515780638da5cb5b1461005b578063a9f7e6641461007f578063f2fde38b146100b1575b600080fd5b6100596100d7565b005b61006361018b565b604080516001600160a01b039092168252519081900360200190f35b6100596004803603606081101561009557600080fd5b506001600160a01b03813516906020810135906040013561019a565b610059600480360360208110156100c757600080fd5b50356001600160a01b03166102b7565b6100df6103c1565b6000546001600160a01b03908116911614610141576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b6000546001600160a01b031690565b6101a26103c1565b6000546001600160a01b03908116911614610204576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6001546040805163a9059cbb60e01b81526001600160a01b03868116600483015285850160248301529151919092169163a9059cbb9160448083019260209291908290030181600087803b15801561025b57600080fd5b505af115801561026f573d6000803e3d6000fd5b505050506040513d602081101561028557600080fd5b505060408051808201909152600b81526a53656e7420546f6b656e7360a81b60208201526102b2906103c5565b505050565b6102bf6103c1565b6000546001600160a01b03908116911614610321576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6001600160a01b0381166103665760405162461bcd60e51b81526004018080602001828103825260268152602001806104906026913960400191505060405180910390fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b3390565b61046b816040516024018080602001828103825283818151815260200191508051906020019080838360005b838110156104095781810151838201526020016103f1565b50505050905090810190601f1680156104365780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529190526020810180516001600160e01b031663104c13eb60e21b179052925061046e915050565b50565b80516a636f6e736f6c652e6c6f67602083016000808483855afa505050505056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373a2646970667358221220317b4121cfb8764ec5b79d45078ea71e93cb64e4e5efed81622012290d9c4df064736f6c63430006060033";
