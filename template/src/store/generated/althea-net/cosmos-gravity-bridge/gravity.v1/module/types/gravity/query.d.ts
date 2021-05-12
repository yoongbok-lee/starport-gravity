import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../gravity/genesis";
import { Valset } from "../gravity/types";
import { MsgValsetConfirm, MsgConfirmBatch, MsgConfirmLogicCall } from "../gravity/msgs";
import { BatchFees } from "../gravity/pool";
import { OutgoingTxBatch, OutgoingLogicCall, OutgoingTransferTx } from "../gravity/batch";
export declare const protobufPackage = "gravity.v1";
export interface QueryParamsRequest {
}
export interface QueryParamsResponse {
    params: Params | undefined;
}
export interface QueryCurrentValsetRequest {
}
export interface QueryAllOrchestratorAddress {
}
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
export interface QueryLastValsetRequestsRequest {
}
export interface QueryLastValsetRequestsResponse {
    valsets: Valset[];
}
export interface QueryLastPendingValsetRequestByAddrRequest {
    address: string;
}
export interface QueryLastPendingValsetRequestByAddrResponse {
    valsets: Valset[];
}
export interface QueryBatchFeeRequest {
}
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
export interface QueryOutgoingTxBatchesRequest {
}
export interface QueryOutgoingTxBatchesResponse {
    batches: OutgoingTxBatch[];
}
export interface QueryOutgoingLogicCallsRequest {
}
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
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryCurrentValsetRequest: {
    encode(_: QueryCurrentValsetRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryCurrentValsetRequest;
    fromJSON(_: any): QueryCurrentValsetRequest;
    toJSON(_: QueryCurrentValsetRequest): unknown;
    fromPartial(_: DeepPartial<QueryCurrentValsetRequest>): QueryCurrentValsetRequest;
};
export declare const QueryAllOrchestratorAddress: {
    encode(_: QueryAllOrchestratorAddress, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllOrchestratorAddress;
    fromJSON(_: any): QueryAllOrchestratorAddress;
    toJSON(_: QueryAllOrchestratorAddress): unknown;
    fromPartial(_: DeepPartial<QueryAllOrchestratorAddress>): QueryAllOrchestratorAddress;
};
export declare const QueryCurrentValsetResponse: {
    encode(message: QueryCurrentValsetResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryCurrentValsetResponse;
    fromJSON(object: any): QueryCurrentValsetResponse;
    toJSON(message: QueryCurrentValsetResponse): unknown;
    fromPartial(object: DeepPartial<QueryCurrentValsetResponse>): QueryCurrentValsetResponse;
};
export declare const QueryValsetRequestRequest: {
    encode(message: QueryValsetRequestRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryValsetRequestRequest;
    fromJSON(object: any): QueryValsetRequestRequest;
    toJSON(message: QueryValsetRequestRequest): unknown;
    fromPartial(object: DeepPartial<QueryValsetRequestRequest>): QueryValsetRequestRequest;
};
export declare const QueryValsetRequestResponse: {
    encode(message: QueryValsetRequestResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryValsetRequestResponse;
    fromJSON(object: any): QueryValsetRequestResponse;
    toJSON(message: QueryValsetRequestResponse): unknown;
    fromPartial(object: DeepPartial<QueryValsetRequestResponse>): QueryValsetRequestResponse;
};
export declare const QueryValsetConfirmRequest: {
    encode(message: QueryValsetConfirmRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryValsetConfirmRequest;
    fromJSON(object: any): QueryValsetConfirmRequest;
    toJSON(message: QueryValsetConfirmRequest): unknown;
    fromPartial(object: DeepPartial<QueryValsetConfirmRequest>): QueryValsetConfirmRequest;
};
export declare const QueryValsetConfirmResponse: {
    encode(message: QueryValsetConfirmResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryValsetConfirmResponse;
    fromJSON(object: any): QueryValsetConfirmResponse;
    toJSON(message: QueryValsetConfirmResponse): unknown;
    fromPartial(object: DeepPartial<QueryValsetConfirmResponse>): QueryValsetConfirmResponse;
};
export declare const QueryValsetConfirmsByNonceRequest: {
    encode(message: QueryValsetConfirmsByNonceRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryValsetConfirmsByNonceRequest;
    fromJSON(object: any): QueryValsetConfirmsByNonceRequest;
    toJSON(message: QueryValsetConfirmsByNonceRequest): unknown;
    fromPartial(object: DeepPartial<QueryValsetConfirmsByNonceRequest>): QueryValsetConfirmsByNonceRequest;
};
export declare const QueryValsetConfirmsByNonceResponse: {
    encode(message: QueryValsetConfirmsByNonceResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryValsetConfirmsByNonceResponse;
    fromJSON(object: any): QueryValsetConfirmsByNonceResponse;
    toJSON(message: QueryValsetConfirmsByNonceResponse): unknown;
    fromPartial(object: DeepPartial<QueryValsetConfirmsByNonceResponse>): QueryValsetConfirmsByNonceResponse;
};
export declare const QueryLastValsetRequestsRequest: {
    encode(_: QueryLastValsetRequestsRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryLastValsetRequestsRequest;
    fromJSON(_: any): QueryLastValsetRequestsRequest;
    toJSON(_: QueryLastValsetRequestsRequest): unknown;
    fromPartial(_: DeepPartial<QueryLastValsetRequestsRequest>): QueryLastValsetRequestsRequest;
};
export declare const QueryLastValsetRequestsResponse: {
    encode(message: QueryLastValsetRequestsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryLastValsetRequestsResponse;
    fromJSON(object: any): QueryLastValsetRequestsResponse;
    toJSON(message: QueryLastValsetRequestsResponse): unknown;
    fromPartial(object: DeepPartial<QueryLastValsetRequestsResponse>): QueryLastValsetRequestsResponse;
};
export declare const QueryLastPendingValsetRequestByAddrRequest: {
    encode(message: QueryLastPendingValsetRequestByAddrRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryLastPendingValsetRequestByAddrRequest;
    fromJSON(object: any): QueryLastPendingValsetRequestByAddrRequest;
    toJSON(message: QueryLastPendingValsetRequestByAddrRequest): unknown;
    fromPartial(object: DeepPartial<QueryLastPendingValsetRequestByAddrRequest>): QueryLastPendingValsetRequestByAddrRequest;
};
export declare const QueryLastPendingValsetRequestByAddrResponse: {
    encode(message: QueryLastPendingValsetRequestByAddrResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryLastPendingValsetRequestByAddrResponse;
    fromJSON(object: any): QueryLastPendingValsetRequestByAddrResponse;
    toJSON(message: QueryLastPendingValsetRequestByAddrResponse): unknown;
    fromPartial(object: DeepPartial<QueryLastPendingValsetRequestByAddrResponse>): QueryLastPendingValsetRequestByAddrResponse;
};
export declare const QueryBatchFeeRequest: {
    encode(_: QueryBatchFeeRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryBatchFeeRequest;
    fromJSON(_: any): QueryBatchFeeRequest;
    toJSON(_: QueryBatchFeeRequest): unknown;
    fromPartial(_: DeepPartial<QueryBatchFeeRequest>): QueryBatchFeeRequest;
};
export declare const QueryBatchFeeResponse: {
    encode(message: QueryBatchFeeResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryBatchFeeResponse;
    fromJSON(object: any): QueryBatchFeeResponse;
    toJSON(message: QueryBatchFeeResponse): unknown;
    fromPartial(object: DeepPartial<QueryBatchFeeResponse>): QueryBatchFeeResponse;
};
export declare const QueryLastPendingBatchRequestByAddrRequest: {
    encode(message: QueryLastPendingBatchRequestByAddrRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryLastPendingBatchRequestByAddrRequest;
    fromJSON(object: any): QueryLastPendingBatchRequestByAddrRequest;
    toJSON(message: QueryLastPendingBatchRequestByAddrRequest): unknown;
    fromPartial(object: DeepPartial<QueryLastPendingBatchRequestByAddrRequest>): QueryLastPendingBatchRequestByAddrRequest;
};
export declare const QueryLastPendingBatchRequestByAddrResponse: {
    encode(message: QueryLastPendingBatchRequestByAddrResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryLastPendingBatchRequestByAddrResponse;
    fromJSON(object: any): QueryLastPendingBatchRequestByAddrResponse;
    toJSON(message: QueryLastPendingBatchRequestByAddrResponse): unknown;
    fromPartial(object: DeepPartial<QueryLastPendingBatchRequestByAddrResponse>): QueryLastPendingBatchRequestByAddrResponse;
};
export declare const QueryLastPendingLogicCallByAddrRequest: {
    encode(message: QueryLastPendingLogicCallByAddrRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryLastPendingLogicCallByAddrRequest;
    fromJSON(object: any): QueryLastPendingLogicCallByAddrRequest;
    toJSON(message: QueryLastPendingLogicCallByAddrRequest): unknown;
    fromPartial(object: DeepPartial<QueryLastPendingLogicCallByAddrRequest>): QueryLastPendingLogicCallByAddrRequest;
};
export declare const QueryLastPendingLogicCallByAddrResponse: {
    encode(message: QueryLastPendingLogicCallByAddrResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryLastPendingLogicCallByAddrResponse;
    fromJSON(object: any): QueryLastPendingLogicCallByAddrResponse;
    toJSON(message: QueryLastPendingLogicCallByAddrResponse): unknown;
    fromPartial(object: DeepPartial<QueryLastPendingLogicCallByAddrResponse>): QueryLastPendingLogicCallByAddrResponse;
};
export declare const QueryOutgoingTxBatchesRequest: {
    encode(_: QueryOutgoingTxBatchesRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryOutgoingTxBatchesRequest;
    fromJSON(_: any): QueryOutgoingTxBatchesRequest;
    toJSON(_: QueryOutgoingTxBatchesRequest): unknown;
    fromPartial(_: DeepPartial<QueryOutgoingTxBatchesRequest>): QueryOutgoingTxBatchesRequest;
};
export declare const QueryOutgoingTxBatchesResponse: {
    encode(message: QueryOutgoingTxBatchesResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryOutgoingTxBatchesResponse;
    fromJSON(object: any): QueryOutgoingTxBatchesResponse;
    toJSON(message: QueryOutgoingTxBatchesResponse): unknown;
    fromPartial(object: DeepPartial<QueryOutgoingTxBatchesResponse>): QueryOutgoingTxBatchesResponse;
};
export declare const QueryOutgoingLogicCallsRequest: {
    encode(_: QueryOutgoingLogicCallsRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryOutgoingLogicCallsRequest;
    fromJSON(_: any): QueryOutgoingLogicCallsRequest;
    toJSON(_: QueryOutgoingLogicCallsRequest): unknown;
    fromPartial(_: DeepPartial<QueryOutgoingLogicCallsRequest>): QueryOutgoingLogicCallsRequest;
};
export declare const QueryOutgoingLogicCallsResponse: {
    encode(message: QueryOutgoingLogicCallsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryOutgoingLogicCallsResponse;
    fromJSON(object: any): QueryOutgoingLogicCallsResponse;
    toJSON(message: QueryOutgoingLogicCallsResponse): unknown;
    fromPartial(object: DeepPartial<QueryOutgoingLogicCallsResponse>): QueryOutgoingLogicCallsResponse;
};
export declare const QueryBatchRequestByNonceRequest: {
    encode(message: QueryBatchRequestByNonceRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryBatchRequestByNonceRequest;
    fromJSON(object: any): QueryBatchRequestByNonceRequest;
    toJSON(message: QueryBatchRequestByNonceRequest): unknown;
    fromPartial(object: DeepPartial<QueryBatchRequestByNonceRequest>): QueryBatchRequestByNonceRequest;
};
export declare const QueryBatchRequestByNonceResponse: {
    encode(message: QueryBatchRequestByNonceResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryBatchRequestByNonceResponse;
    fromJSON(object: any): QueryBatchRequestByNonceResponse;
    toJSON(message: QueryBatchRequestByNonceResponse): unknown;
    fromPartial(object: DeepPartial<QueryBatchRequestByNonceResponse>): QueryBatchRequestByNonceResponse;
};
export declare const QueryBatchConfirmsRequest: {
    encode(message: QueryBatchConfirmsRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryBatchConfirmsRequest;
    fromJSON(object: any): QueryBatchConfirmsRequest;
    toJSON(message: QueryBatchConfirmsRequest): unknown;
    fromPartial(object: DeepPartial<QueryBatchConfirmsRequest>): QueryBatchConfirmsRequest;
};
export declare const QueryBatchConfirmsResponse: {
    encode(message: QueryBatchConfirmsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryBatchConfirmsResponse;
    fromJSON(object: any): QueryBatchConfirmsResponse;
    toJSON(message: QueryBatchConfirmsResponse): unknown;
    fromPartial(object: DeepPartial<QueryBatchConfirmsResponse>): QueryBatchConfirmsResponse;
};
export declare const QueryLogicConfirmsRequest: {
    encode(message: QueryLogicConfirmsRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryLogicConfirmsRequest;
    fromJSON(object: any): QueryLogicConfirmsRequest;
    toJSON(message: QueryLogicConfirmsRequest): unknown;
    fromPartial(object: DeepPartial<QueryLogicConfirmsRequest>): QueryLogicConfirmsRequest;
};
export declare const QueryLogicConfirmsResponse: {
    encode(message: QueryLogicConfirmsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryLogicConfirmsResponse;
    fromJSON(object: any): QueryLogicConfirmsResponse;
    toJSON(message: QueryLogicConfirmsResponse): unknown;
    fromPartial(object: DeepPartial<QueryLogicConfirmsResponse>): QueryLogicConfirmsResponse;
};
export declare const QueryLastEventNonceByAddrRequest: {
    encode(message: QueryLastEventNonceByAddrRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryLastEventNonceByAddrRequest;
    fromJSON(object: any): QueryLastEventNonceByAddrRequest;
    toJSON(message: QueryLastEventNonceByAddrRequest): unknown;
    fromPartial(object: DeepPartial<QueryLastEventNonceByAddrRequest>): QueryLastEventNonceByAddrRequest;
};
export declare const QueryLastEventNonceByAddrResponse: {
    encode(message: QueryLastEventNonceByAddrResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryLastEventNonceByAddrResponse;
    fromJSON(object: any): QueryLastEventNonceByAddrResponse;
    toJSON(message: QueryLastEventNonceByAddrResponse): unknown;
    fromPartial(object: DeepPartial<QueryLastEventNonceByAddrResponse>): QueryLastEventNonceByAddrResponse;
};
export declare const QueryErc20ToDenomRequest: {
    encode(message: QueryErc20ToDenomRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryErc20ToDenomRequest;
    fromJSON(object: any): QueryErc20ToDenomRequest;
    toJSON(message: QueryErc20ToDenomRequest): unknown;
    fromPartial(object: DeepPartial<QueryErc20ToDenomRequest>): QueryErc20ToDenomRequest;
};
export declare const QueryErc20ToDenomResponse: {
    encode(message: QueryErc20ToDenomResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryErc20ToDenomResponse;
    fromJSON(object: any): QueryErc20ToDenomResponse;
    toJSON(message: QueryErc20ToDenomResponse): unknown;
    fromPartial(object: DeepPartial<QueryErc20ToDenomResponse>): QueryErc20ToDenomResponse;
};
export declare const QueryDenomToErc20Request: {
    encode(message: QueryDenomToErc20Request, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryDenomToErc20Request;
    fromJSON(object: any): QueryDenomToErc20Request;
    toJSON(message: QueryDenomToErc20Request): unknown;
    fromPartial(object: DeepPartial<QueryDenomToErc20Request>): QueryDenomToErc20Request;
};
export declare const QueryDenomToErc20Response: {
    encode(message: QueryDenomToErc20Response, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryDenomToErc20Response;
    fromJSON(object: any): QueryDenomToErc20Response;
    toJSON(message: QueryDenomToErc20Response): unknown;
    fromPartial(object: DeepPartial<QueryDenomToErc20Response>): QueryDenomToErc20Response;
};
export declare const QueryDelegateKeysByValidatorAddress: {
    encode(message: QueryDelegateKeysByValidatorAddress, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryDelegateKeysByValidatorAddress;
    fromJSON(object: any): QueryDelegateKeysByValidatorAddress;
    toJSON(message: QueryDelegateKeysByValidatorAddress): unknown;
    fromPartial(object: DeepPartial<QueryDelegateKeysByValidatorAddress>): QueryDelegateKeysByValidatorAddress;
};
export declare const QueryDelegateKeysByValidatorAddressResponse: {
    encode(message: QueryDelegateKeysByValidatorAddressResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryDelegateKeysByValidatorAddressResponse;
    fromJSON(object: any): QueryDelegateKeysByValidatorAddressResponse;
    toJSON(message: QueryDelegateKeysByValidatorAddressResponse): unknown;
    fromPartial(object: DeepPartial<QueryDelegateKeysByValidatorAddressResponse>): QueryDelegateKeysByValidatorAddressResponse;
};
export declare const QueryDelegateKeysByEthAddress: {
    encode(message: QueryDelegateKeysByEthAddress, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryDelegateKeysByEthAddress;
    fromJSON(object: any): QueryDelegateKeysByEthAddress;
    toJSON(message: QueryDelegateKeysByEthAddress): unknown;
    fromPartial(object: DeepPartial<QueryDelegateKeysByEthAddress>): QueryDelegateKeysByEthAddress;
};
export declare const QueryDelegateKeysByEthAddressResponse: {
    encode(message: QueryDelegateKeysByEthAddressResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryDelegateKeysByEthAddressResponse;
    fromJSON(object: any): QueryDelegateKeysByEthAddressResponse;
    toJSON(message: QueryDelegateKeysByEthAddressResponse): unknown;
    fromPartial(object: DeepPartial<QueryDelegateKeysByEthAddressResponse>): QueryDelegateKeysByEthAddressResponse;
};
export declare const QueryDelegateKeysByOrchestratorAddress: {
    encode(message: QueryDelegateKeysByOrchestratorAddress, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryDelegateKeysByOrchestratorAddress;
    fromJSON(object: any): QueryDelegateKeysByOrchestratorAddress;
    toJSON(message: QueryDelegateKeysByOrchestratorAddress): unknown;
    fromPartial(object: DeepPartial<QueryDelegateKeysByOrchestratorAddress>): QueryDelegateKeysByOrchestratorAddress;
};
export declare const QueryDelegateKeysByOrchestratorAddressResponse: {
    encode(message: QueryDelegateKeysByOrchestratorAddressResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryDelegateKeysByOrchestratorAddressResponse;
    fromJSON(object: any): QueryDelegateKeysByOrchestratorAddressResponse;
    toJSON(message: QueryDelegateKeysByOrchestratorAddressResponse): unknown;
    fromPartial(object: DeepPartial<QueryDelegateKeysByOrchestratorAddressResponse>): QueryDelegateKeysByOrchestratorAddressResponse;
};
export declare const QueryPendingSendToEth: {
    encode(message: QueryPendingSendToEth, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryPendingSendToEth;
    fromJSON(object: any): QueryPendingSendToEth;
    toJSON(message: QueryPendingSendToEth): unknown;
    fromPartial(object: DeepPartial<QueryPendingSendToEth>): QueryPendingSendToEth;
};
export declare const QueryPendingSendToEthResponse: {
    encode(message: QueryPendingSendToEthResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryPendingSendToEthResponse;
    fromJSON(object: any): QueryPendingSendToEthResponse;
    toJSON(message: QueryPendingSendToEthResponse): unknown;
    fromPartial(object: DeepPartial<QueryPendingSendToEthResponse>): QueryPendingSendToEthResponse;
};
export declare const QueryAllCosmosToEth: {
    encode(message: QueryAllCosmosToEth, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllCosmosToEth;
    fromJSON(object: any): QueryAllCosmosToEth;
    toJSON(message: QueryAllCosmosToEth): unknown;
    fromPartial(object: DeepPartial<QueryAllCosmosToEth>): QueryAllCosmosToEth;
};
/** Query defines the gRPC querier service */
export interface Query {
    /** Deployments queries deployments */
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    CurrentValset(request: QueryCurrentValsetRequest): Promise<QueryCurrentValsetResponse>;
    ValsetRequest(request: QueryValsetRequestRequest): Promise<QueryValsetRequestResponse>;
    ValsetConfirm(request: QueryValsetConfirmRequest): Promise<QueryValsetConfirmResponse>;
    ValsetConfirmsByNonce(request: QueryValsetConfirmsByNonceRequest): Promise<QueryValsetConfirmsByNonceResponse>;
    LastValsetRequests(request: QueryLastValsetRequestsRequest): Promise<QueryLastValsetRequestsResponse>;
    LastPendingValsetRequestByAddr(request: QueryLastPendingValsetRequestByAddrRequest): Promise<QueryLastPendingValsetRequestByAddrResponse>;
    LastPendingBatchRequestByAddr(request: QueryLastPendingBatchRequestByAddrRequest): Promise<QueryLastPendingBatchRequestByAddrResponse>;
    LastPendingLogicCallByAddr(request: QueryLastPendingLogicCallByAddrRequest): Promise<QueryLastPendingLogicCallByAddrResponse>;
    LastEventNonceByAddr(request: QueryLastEventNonceByAddrRequest): Promise<QueryLastEventNonceByAddrResponse>;
    BatchFees(request: QueryBatchFeeRequest): Promise<QueryBatchFeeResponse>;
    OutgoingTxBatches(request: QueryOutgoingTxBatchesRequest): Promise<QueryOutgoingTxBatchesResponse>;
    OutgoingLogicCalls(request: QueryOutgoingLogicCallsRequest): Promise<QueryOutgoingLogicCallsResponse>;
    BatchRequestByNonce(request: QueryBatchRequestByNonceRequest): Promise<QueryBatchRequestByNonceResponse>;
    BatchConfirms(request: QueryBatchConfirmsRequest): Promise<QueryBatchConfirmsResponse>;
    LogicConfirms(request: QueryLogicConfirmsRequest): Promise<QueryLogicConfirmsResponse>;
    Erc20ToDenom(request: QueryErc20ToDenomRequest): Promise<QueryErc20ToDenomResponse>;
    DenomToErc20(request: QueryDenomToErc20Request): Promise<QueryDenomToErc20Response>;
    GetDelegateKeyByValidator(request: QueryDelegateKeysByValidatorAddress): Promise<QueryDelegateKeysByValidatorAddressResponse>;
    GetDelegateKeyByEth(request: QueryDelegateKeysByEthAddress): Promise<QueryDelegateKeysByEthAddressResponse>;
    GetDelegateKeyByOrchestrator(request: QueryDelegateKeysByOrchestratorAddress): Promise<QueryDelegateKeysByOrchestratorAddressResponse>;
    GetPendingSendToEth(request: QueryPendingSendToEth): Promise<QueryPendingSendToEthResponse>;
    OrchestratorAddressAll(request: QueryAllOrchestratorAddress): Promise<QueryCurrentValsetResponse>;
    CosmosToEthAll(request: QueryAllCosmosToEth): Promise<QueryPendingSendToEthResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    CurrentValset(request: QueryCurrentValsetRequest): Promise<QueryCurrentValsetResponse>;
    ValsetRequest(request: QueryValsetRequestRequest): Promise<QueryValsetRequestResponse>;
    ValsetConfirm(request: QueryValsetConfirmRequest): Promise<QueryValsetConfirmResponse>;
    ValsetConfirmsByNonce(request: QueryValsetConfirmsByNonceRequest): Promise<QueryValsetConfirmsByNonceResponse>;
    LastValsetRequests(request: QueryLastValsetRequestsRequest): Promise<QueryLastValsetRequestsResponse>;
    LastPendingValsetRequestByAddr(request: QueryLastPendingValsetRequestByAddrRequest): Promise<QueryLastPendingValsetRequestByAddrResponse>;
    LastPendingBatchRequestByAddr(request: QueryLastPendingBatchRequestByAddrRequest): Promise<QueryLastPendingBatchRequestByAddrResponse>;
    LastPendingLogicCallByAddr(request: QueryLastPendingLogicCallByAddrRequest): Promise<QueryLastPendingLogicCallByAddrResponse>;
    LastEventNonceByAddr(request: QueryLastEventNonceByAddrRequest): Promise<QueryLastEventNonceByAddrResponse>;
    BatchFees(request: QueryBatchFeeRequest): Promise<QueryBatchFeeResponse>;
    OutgoingTxBatches(request: QueryOutgoingTxBatchesRequest): Promise<QueryOutgoingTxBatchesResponse>;
    OutgoingLogicCalls(request: QueryOutgoingLogicCallsRequest): Promise<QueryOutgoingLogicCallsResponse>;
    BatchRequestByNonce(request: QueryBatchRequestByNonceRequest): Promise<QueryBatchRequestByNonceResponse>;
    BatchConfirms(request: QueryBatchConfirmsRequest): Promise<QueryBatchConfirmsResponse>;
    LogicConfirms(request: QueryLogicConfirmsRequest): Promise<QueryLogicConfirmsResponse>;
    Erc20ToDenom(request: QueryErc20ToDenomRequest): Promise<QueryErc20ToDenomResponse>;
    DenomToErc20(request: QueryDenomToErc20Request): Promise<QueryDenomToErc20Response>;
    GetDelegateKeyByValidator(request: QueryDelegateKeysByValidatorAddress): Promise<QueryDelegateKeysByValidatorAddressResponse>;
    GetDelegateKeyByEth(request: QueryDelegateKeysByEthAddress): Promise<QueryDelegateKeysByEthAddressResponse>;
    GetDelegateKeyByOrchestrator(request: QueryDelegateKeysByOrchestratorAddress): Promise<QueryDelegateKeysByOrchestratorAddressResponse>;
    GetPendingSendToEth(request: QueryPendingSendToEth): Promise<QueryPendingSendToEthResponse>;
    OrchestratorAddressAll(request: QueryAllOrchestratorAddress): Promise<QueryCurrentValsetResponse>;
    CosmosToEthAll(request: QueryAllCosmosToEth): Promise<QueryPendingSendToEthResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
