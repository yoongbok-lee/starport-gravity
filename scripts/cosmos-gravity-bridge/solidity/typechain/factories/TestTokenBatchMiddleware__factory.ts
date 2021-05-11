/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { TestTokenBatchMiddleware } from "../TestTokenBatchMiddleware";

export class TestTokenBatchMiddleware__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<TestTokenBatchMiddleware> {
    return super.deploy(overrides || {}) as Promise<TestTokenBatchMiddleware>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TestTokenBatchMiddleware {
    return super.attach(address) as TestTokenBatchMiddleware;
  }
  connect(signer: Signer): TestTokenBatchMiddleware__factory {
    return super.connect(signer) as TestTokenBatchMiddleware__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestTokenBatchMiddleware {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TestTokenBatchMiddleware;
  }
}

const _abi = [
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
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]",
      },
      {
        internalType: "address[]",
        name: "_destinations",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "_tokenContract",
        type: "address",
      },
    ],
    name: "submitBatch",
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
];

const _bytecode =
  "0x608060405260006100176001600160e01b0361006616565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a35061006a565b3390565b6107f9806100796000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80633d5d0cf114610051578063715018a6146101855780638da5cb5b1461018d578063f2fde38b146101b1575b600080fd5b6101836004803603606081101561006757600080fd5b81019060208101813564010000000081111561008257600080fd5b82018360208201111561009457600080fd5b803590602001918460208302840111640100000000831117156100b657600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929594936020810193503591505064010000000081111561010657600080fd5b82018360208201111561011857600080fd5b8035906020019184602083028401116401000000008311171561013a57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550505090356001600160a01b031691506101d79050565b005b61018361029f565b610195610353565b604080516001600160a01b039092168252519081900360200190f35b610183600480360360208110156101c757600080fd5b50356001600160a01b0316610362565b6101df61046c565b6000546001600160a01b03908116911614610241576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b60005b83518110156102995761029183828151811061025c57fe5b602002602001015185838151811061027057fe5b6020026020010151846001600160a01b03166104709092919063ffffffff16565b600101610244565b50505050565b6102a761046c565b6000546001600160a01b03908116911614610309576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b6000546001600160a01b031690565b61036a61046c565b6000546001600160a01b039081169116146103cc576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6001600160a01b0381166104115760405162461bcd60e51b81526004018080602001828103825260268152602001806107746026913960400191505060405180910390fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b3390565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b1790526104c29084906104c7565b505050565b606061051c826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166105789092919063ffffffff16565b8051909150156104c25780806020019051602081101561053b57600080fd5b50516104c25760405162461bcd60e51b815260040180806020018281038252602a81526020018061079a602a913960400191505060405180910390fd5b6060610587848460008561058f565b949350505050565b606061059a8561073a565b6105eb576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b60006060866001600160a01b031685876040518082805190602001908083835b6020831061062a5780518252601f19909201916020918201910161060b565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d806000811461068c576040519150601f19603f3d011682016040523d82523d6000602084013e610691565b606091505b509150915081156106a55791506105879050565b8051156106b55780518082602001fd5b8360405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156106ff5781810151838201526020016106e7565b50505050905090810190601f16801561072c5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47081811480159061058757505015159291505056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f20616464726573735361666545524332303a204552433230206f7065726174696f6e20646964206e6f742073756363656564a264697066735822122085a4c0d1f5037cbeb8582e539dcd02532dbe678eec2d9be03e6238c1a53a98dc64736f6c63430006060033";