/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/**
* `Any` contains an arbitrary serialized protocol buffer message along with a
URL that describes the type of the serialized message.

Protobuf library provides support to pack/unpack Any values in the form
of utility functions or additional generated methods of the Any type.

Example 1: Pack and unpack a message in C++.

    Foo foo = ...;
    Any any;
    any.PackFrom(foo);
    ...
    if (any.UnpackTo(&foo)) {
      ...
    }

Example 2: Pack and unpack a message in Java.

    Foo foo = ...;
    Any any = Any.pack(foo);
    ...
    if (any.is(Foo.class)) {
      foo = any.unpack(Foo.class);
    }

 Example 3: Pack and unpack a message in Python.

    foo = Foo(...)
    any = Any()
    any.Pack(foo)
    ...
    if any.Is(Foo.DESCRIPTOR):
      any.Unpack(foo)
      ...

 Example 4: Pack and unpack a message in Go

     foo := &pb.Foo{...}
     any, err := ptypes.MarshalAny(foo)
     ...
     foo := &pb.Foo{}
     if err := ptypes.UnmarshalAny(any, foo); err != nil {
       ...
     }

The pack methods provided by protobuf library will by default use
'type.googleapis.com/full.type.name' as the type URL and the unpack
methods only use the fully qualified type name after the last '/'
in the type URL, for example "foo.bar.com/x/y.z" will yield type
name "y.z".


JSON
====
The JSON representation of an `Any` value uses the regular
representation of the deserialized, embedded message, with an
additional field `@type` which contains the type URL. Example:

    package google.profile;
    message Person {
      string first_name = 1;
      string last_name = 2;
    }

    {
      "@type": "type.googleapis.com/google.profile.Person",
      "firstName": <string>,
      "lastName": <string>
    }

If the embedded message type is well-known and has a custom JSON
representation, that representation will be embedded adding a field
`value` which holds the custom JSON in addition to the `@type`
field. Example (for message [google.protobuf.Duration][]):

    {
      "@type": "type.googleapis.com/google.protobuf.Duration",
      "value": "1.212s"
    }
*/
export interface ProtobufAny {
  /**
   * A URL/resource name that uniquely identifies the type of the serialized
   * protocol buffer message. This string must contain at least
   * one "/" character. The last segment of the URL's path must represent
   * the fully qualified name of the type (as in
   * `path/google.protobuf.Duration`). The name should be in a canonical form
   * (e.g., leading "." is not accepted).
   *
   * In practice, teams usually precompile into the binary all types that they
   * expect it to use in the context of Any. However, for URLs which use the
   * scheme `http`, `https`, or no scheme, one can optionally set up a type
   * server that maps type URLs to message definitions as follows:
   *
   * * If no scheme is provided, `https` is assumed.
   * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
   *   value in binary format, or produce an error.
   * * Applications are allowed to cache lookup results based on the
   *   URL, or have them precompiled into a binary to avoid any
   *   lookup. Therefore, binary compatibility needs to be preserved
   *   on changes to types. (Use versioned type names to manage
   *   breaking changes.)
   *
   * Note: this functionality is not currently available in the official
   * protobuf release, and it is not used for type URLs beginning with
   * type.googleapis.com.
   *
   * Schemes other than `http`, `https` (or the empty scheme) might be
   * used with implementation specific semantics.
   */
  typeUrl?: string;

  /**
   * Must be a valid serialized protocol buffer of the above specified type.
   * @format byte
   */
  value?: string;
}

export interface RpcStatus {
  /** @format int32 */
  code?: number;
  message?: string;
  details?: ProtobufAny[];
}

export interface V1BatchFees {
  token?: string;
  totalFees?: string;
}

export interface V1BridgeValidator {
  /** @format uint64 */
  power?: string;
  ethereumAddress?: string;
}

export interface V1Erc20Token {
  contract?: string;
  amount?: string;
}

export type V1MsgCancelSendToEthResponse = object;

export interface V1MsgConfirmBatch {
  /** @format uint64 */
  nonce?: string;
  tokenContract?: string;
  ethSigner?: string;
  orchestrator?: string;
  signature?: string;
}

export type V1MsgConfirmBatchResponse = object;

export interface V1MsgConfirmLogicCall {
  invalidationId?: string;

  /** @format uint64 */
  invalidationNonce?: string;
  ethSigner?: string;
  orchestrator?: string;
  signature?: string;
}

export type V1MsgConfirmLogicCallResponse = object;

export type V1MsgDepositClaimResponse = object;

export type V1MsgErc20DeployedClaimResponse = object;

export type V1MsgLogicCallExecutedClaimResponse = object;

export type V1MsgRequestBatchResponse = object;

export type V1MsgSendToEthResponse = object;

export type V1MsgSetOrchestratorAddressResponse = object;

/**
* MsgValsetConfirm
this is the message sent by the validators when they wish to submit their
signatures over the validator set at a given block height. A validator must
first call MsgSetEthAddress to set their Ethereum address to be used for
signing. Then someone (anyone) must make a ValsetRequest, the request is
essentially a messaging mechanism to determine which block all validators
should submit signatures over. Finally validators sign the validator set,
powers, and Ethereum addresses of the entire validator set at the height of a
ValsetRequest and submit that signature with this message.

If a sufficient number of validators (66% of voting power) (A) have set
Ethereum addresses and (B) submit ValsetConfirm messages with their
signatures it is then possible for anyone to view these signatures in the
chain store and submit them to Ethereum to update the validator set
-------------
*/
export interface V1MsgValsetConfirm {
  /** @format uint64 */
  nonce?: string;
  orchestrator?: string;
  ethAddress?: string;
  signature?: string;
}

export type V1MsgValsetConfirmResponse = object;

export type V1MsgValsetUpdatedClaimResponse = object;

export type V1MsgWithdrawClaimResponse = object;

export interface V1OutgoingLogicCall {
  transfers?: V1Erc20Token[];
  fees?: V1Erc20Token[];
  logicContractAddress?: string;

  /** @format byte */
  payload?: string;

  /** @format uint64 */
  timeout?: string;

  /** @format byte */
  invalidationId?: string;

  /** @format uint64 */
  invalidationNonce?: string;
}

export interface V1OutgoingTransferTx {
  /** @format uint64 */
  id?: string;
  sender?: string;
  destAddress?: string;
  erc20Token?: V1Erc20Token;
  erc20Fee?: V1Erc20Token;
}

export interface V1OutgoingTxBatch {
  /** @format uint64 */
  batchNonce?: string;

  /** @format uint64 */
  batchTimeout?: string;
  transactions?: V1OutgoingTransferTx[];
  tokenContract?: string;

  /** @format uint64 */
  block?: string;
}

/**
* contract_hash:
the code hash of a known good version of the Gravity contract
solidity code. This can be used to verify the correct version
of the contract has been deployed. This is a reference value for
goernance action only it is never read by any Gravity code

bridge_ethereum_address:
is address of the bridge contract on the Ethereum side, this is a
reference value for governance only and is not actually used by any
Gravity code

bridge_chain_id:
the unique identifier of the Ethereum chain, this is a reference value
only and is not actually used by any Gravity code

These reference values may be used by future Gravity client implemetnations
to allow for saftey features or convenience features like the Gravity address
in your relayer. A relayer would require a configured Gravity address if
governance had not set the address on the chain it was relaying for.

signed_valsets_window
signed_batches_window
signed_claims_window

These values represent the time in blocks that a validator has to submit
a signature for a batch or valset, or to submit a claim for a particular
attestation nonce. In the case of attestations this clock starts when the
attestation is created, but only allows for slashing once the event has passed

target_batch_timeout:

This is the 'target' value for when batches time out, this is a target becuase
Ethereum is a probabalistic chain and you can't say for sure what the block
frequency is ahead of time.

average_block_time
average_ethereum_block_time

These values are the average Cosmos block time and Ethereum block time repsectively
and they are used to copute what the target batch timeout is. It is important that
governance updates these in case of any major, prolonged change in the time it takes
to produce a block

slash_fraction_valset
slash_fraction_batch
slash_fraction_claim
slash_fraction_conflicting_claim

The slashing fractions for the various gravity related slashing conditions. The first three
refer to not submitting a particular message, the third for submitting a different claim
for the same Ethereum event
*/
export interface V1Params {
  gravityId?: string;
  contractSourceHash?: string;
  bridgeEthereumAddress?: string;

  /** @format uint64 */
  bridgeChainId?: string;

  /** @format uint64 */
  signedValsetsWindow?: string;

  /** @format uint64 */
  signedBatchesWindow?: string;

  /** @format uint64 */
  signedClaimsWindow?: string;

  /** @format uint64 */
  targetBatchTimeout?: string;

  /** @format uint64 */
  averageBlockTime?: string;

  /** @format uint64 */
  averageEthereumBlockTime?: string;

  /** @format byte */
  slashFractionValset?: string;

  /** @format byte */
  slashFractionBatch?: string;

  /** @format byte */
  slashFractionClaim?: string;

  /** @format byte */
  slashFractionConflictingClaim?: string;

  /** @format uint64 */
  unbondSlashingValsetsWindow?: string;
}

export interface V1QueryBatchConfirmsResponse {
  confirms?: V1MsgConfirmBatch[];
}

export interface V1QueryBatchFeeResponse {
  batchFees?: V1BatchFees[];
}

export interface V1QueryBatchRequestByNonceResponse {
  batch?: V1OutgoingTxBatch;
}

export interface V1QueryCurrentValsetResponse {
  valset?: V1Valset;
}

export interface V1QueryDelegateKeysByEthAddressResponse {
  validatorAddress?: string;
  orchestratorAddress?: string;
}

export interface V1QueryDelegateKeysByOrchestratorAddressResponse {
  validatorAddress?: string;
  ethAddress?: string;
}

export interface V1QueryDelegateKeysByValidatorAddressResponse {
  ethAddress?: string;
  orchestratorAddress?: string;
}

export interface V1QueryDenomToErc20Response {
  erc20?: string;
  cosmosOriginated?: boolean;
}

export interface V1QueryErc20ToDenomResponse {
  denom?: string;
  cosmosOriginated?: boolean;
}

export interface V1QueryLastEventNonceByAddrResponse {
  /** @format uint64 */
  eventNonce?: string;
}

export interface V1QueryLastPendingBatchRequestByAddrResponse {
  batch?: V1OutgoingTxBatch;
}

export interface V1QueryLastPendingLogicCallByAddrResponse {
  call?: V1OutgoingLogicCall;
}

export interface V1QueryLastPendingValsetRequestByAddrResponse {
  valsets?: V1Valset[];
}

export interface V1QueryLastValsetRequestsResponse {
  valsets?: V1Valset[];
}

export interface V1QueryLogicConfirmsResponse {
  confirms?: V1MsgConfirmLogicCall[];
}

export interface V1QueryOutgoingLogicCallsResponse {
  calls?: V1OutgoingLogicCall[];
}

export interface V1QueryOutgoingTxBatchesResponse {
  batches?: V1OutgoingTxBatch[];
}

export interface V1QueryParamsResponse {
  /**
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
  params?: V1Params;
}

export interface V1QueryPendingSendToEthResponse {
  transfersInBatches?: V1OutgoingTransferTx[];
  unbatchedTransfers?: V1OutgoingTransferTx[];
}

export interface V1QueryValsetConfirmResponse {
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
  confirm?: V1MsgValsetConfirm;
}

export interface V1QueryValsetConfirmsByNonceResponse {
  confirms?: V1MsgValsetConfirm[];
}

export interface V1QueryValsetRequestResponse {
  valset?: V1Valset;
}

export interface V1Valset {
  /** @format uint64 */
  nonce?: string;
  members?: V1BridgeValidator[];

  /** @format uint64 */
  height?: string;
}

/**
* Coin defines a token with a denomination and an amount.

NOTE: The amount field is an Int which implements the custom method
signatures required by gogoproto.
*/
export interface V1Beta1Coin {
  denom?: string;
  amount?: string;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: keyof Omit<Body, "body" | "bodyUsed">;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType) => RequestParams | void;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "";
  private securityData: SecurityDataType = null as any;
  private securityWorker: null | ApiConfig<SecurityDataType>["securityWorker"] = null;
  private abortControllers = new Map<CancelToken, AbortController>();

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType) => {
    this.securityData = data;
  };

  private addQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];

    return (
      encodeURIComponent(key) +
      "=" +
      encodeURIComponent(Array.isArray(value) ? value.join(",") : typeof value === "number" ? value : `${value}`)
    );
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) =>
        typeof query[key] === "object" && !Array.isArray(query[key])
          ? this.toQueryString(query[key] as QueryParamsType)
          : this.addQueryParam(query, key),
      )
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((data, key) => {
        data.append(key, input[key]);
        return data;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  private mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format = "json",
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams = (secure && this.securityWorker && this.securityWorker(this.securityData)) || {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];

    return fetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      signal: cancelToken ? this.createAbortSignal(cancelToken) : void 0,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = (null as unknown) as T;
      r.error = (null as unknown) as E;

      const data = await response[format]()
        .then((data) => {
          if (r.ok) {
            r.data = data;
          } else {
            r.error = data;
          }
          return r;
        })
        .catch((e) => {
          r.error = e;
          return r;
        });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title gravity/query.proto
 * @version version not set
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Msg
   * @name MsgCancelSendToEth
   * @request POST:/gravity/v1/cancel_send_to_eth
   */
  msgCancelSendToEth = (params: RequestParams = {}) =>
    this.request<V1MsgCancelSendToEthResponse, RpcStatus>({
      path: `/gravity/v1/cancel_send_to_eth`,
      method: "POST",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Msg
   * @name MsgConfirmLogicCall
   * @request POST:/gravity/v1/confim_logic
   */
  msgConfirmLogicCall = (params: RequestParams = {}) =>
    this.request<V1MsgConfirmLogicCallResponse, RpcStatus>({
      path: `/gravity/v1/confim_logic`,
      method: "POST",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Msg
   * @name MsgConfirmBatch
   * @request POST:/gravity/v1/confirm_batch
   */
  msgConfirmBatch = (params: RequestParams = {}) =>
    this.request<V1MsgConfirmBatchResponse, RpcStatus>({
      path: `/gravity/v1/confirm_batch`,
      method: "POST",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryCosmosToEthAll
   * @request GET:/gravity/v1/cosmosToEth
   */
  queryCosmosToEthAll = (query?: { senderAddress?: string }, params: RequestParams = {}) =>
    this.request<V1QueryPendingSendToEthResponse, RpcStatus>({
      path: `/gravity/v1/cosmosToEth`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Msg
   * @name MsgDepositClaim
   * @request POST:/gravity/v1/deposit_claim
   */
  msgDepositClaim = (params: RequestParams = {}) =>
    this.request<V1MsgDepositClaimResponse, RpcStatus>({
      path: `/gravity/v1/deposit_claim`,
      method: "POST",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Msg
   * @name MsgErc20DeployedClaim
   * @request POST:/gravity/v1/erc20_deployed_claim
   */
  msgErc20DeployedClaim = (params: RequestParams = {}) =>
    this.request<V1MsgErc20DeployedClaimResponse, RpcStatus>({
      path: `/gravity/v1/erc20_deployed_claim`,
      method: "POST",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Msg
   * @name MsgLogicCallExecutedClaim
   * @request POST:/gravity/v1/logic_call_executed_claim
   */
  msgLogicCallExecutedClaim = (params: RequestParams = {}) =>
    this.request<V1MsgLogicCallExecutedClaimResponse, RpcStatus>({
      path: `/gravity/v1/logic_call_executed_claim`,
      method: "POST",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryOrchestratorAddressAll
   * @request GET:/gravity/v1/orchestratorAddress
   */
  queryOrchestratorAddressAll = (params: RequestParams = {}) =>
    this.request<V1QueryCurrentValsetResponse, RpcStatus>({
      path: `/gravity/v1/orchestratorAddress`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Msg
   * @name MsgRequestBatch
   * @request POST:/gravity/v1/request_batch
   */
  msgRequestBatch = (params: RequestParams = {}) =>
    this.request<V1MsgRequestBatchResponse, RpcStatus>({
      path: `/gravity/v1/request_batch`,
      method: "POST",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Msg
   * @name MsgSendToEth
   * @request POST:/gravity/v1/send_to_eth
   */
  msgSendToEth = (params: RequestParams = {}) =>
    this.request<V1MsgSendToEthResponse, RpcStatus>({
      path: `/gravity/v1/send_to_eth`,
      method: "POST",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Msg
   * @name MsgSetOrchestratorAddress
   * @request POST:/gravity/v1/set_orchestrator_address
   */
  msgSetOrchestratorAddress = (params: RequestParams = {}) =>
    this.request<V1MsgSetOrchestratorAddressResponse, RpcStatus>({
      path: `/gravity/v1/set_orchestrator_address`,
      method: "POST",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Msg
   * @name MsgValsetConfirm
   * @request POST:/gravity/v1/valset_confirm
   */
  msgValsetConfirm = (params: RequestParams = {}) =>
    this.request<V1MsgValsetConfirmResponse, RpcStatus>({
      path: `/gravity/v1/valset_confirm`,
      method: "POST",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Msg
   * @name MsgValsetUpdateClaim
   * @request POST:/gravity/v1/valset_updated_claim
   */
  msgValsetUpdateClaim = (params: RequestParams = {}) =>
    this.request<V1MsgValsetUpdatedClaimResponse, RpcStatus>({
      path: `/gravity/v1/valset_updated_claim`,
      method: "POST",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Msg
   * @name MsgWithdrawClaim
   * @request POST:/gravity/v1/withdraw_claim
   */
  msgWithdrawClaim = (params: RequestParams = {}) =>
    this.request<V1MsgWithdrawClaimResponse, RpcStatus>({
      path: `/gravity/v1/withdraw_claim`,
      method: "POST",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryBatchConfirms
   * @request GET:/gravity/v1beta/batch/confirms
   */
  queryBatchConfirms = (query?: { nonce?: string; contractAddress?: string }, params: RequestParams = {}) =>
    this.request<V1QueryBatchConfirmsResponse, RpcStatus>({
      path: `/gravity/v1beta/batch/confirms`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryOutgoingLogicCalls
   * @request GET:/gravity/v1beta/batch/outgoinglogic
   */
  queryOutgoingLogicCalls = (params: RequestParams = {}) =>
    this.request<V1QueryOutgoingLogicCallsResponse, RpcStatus>({
      path: `/gravity/v1beta/batch/outgoinglogic`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryOutgoingTxBatches
   * @request GET:/gravity/v1beta/batch/outgoingtx
   */
  queryOutgoingTxBatches = (params: RequestParams = {}) =>
    this.request<V1QueryOutgoingTxBatchesResponse, RpcStatus>({
      path: `/gravity/v1beta/batch/outgoingtx`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryLastPendingBatchRequestByAddr
   * @request GET:/gravity/v1beta/batch/{address}
   */
  queryLastPendingBatchRequestByAddr = (address: string, params: RequestParams = {}) =>
    this.request<V1QueryLastPendingBatchRequestByAddrResponse, RpcStatus>({
      path: `/gravity/v1beta/batch/${address}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryBatchRequestByNonce
   * @request GET:/gravity/v1beta/batch/{nonce}
   */
  queryBatchRequestByNonce = (nonce: string, query?: { contractAddress?: string }, params: RequestParams = {}) =>
    this.request<V1QueryBatchRequestByNonceResponse, RpcStatus>({
      path: `/gravity/v1beta/batch/${nonce}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryBatchFees
   * @request GET:/gravity/v1beta/batchfees
   */
  queryBatchFees = (params: RequestParams = {}) =>
    this.request<V1QueryBatchFeeResponse, RpcStatus>({
      path: `/gravity/v1beta/batchfees`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryValsetConfirmsByNonce
   * @request GET:/gravity/v1beta/confirms/{nonce}
   */
  queryValsetConfirmsByNonce = (nonce: string, params: RequestParams = {}) =>
    this.request<V1QueryValsetConfirmsByNonceResponse, RpcStatus>({
      path: `/gravity/v1beta/confirms/${nonce}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryDenomToErc20
   * @request GET:/gravity/v1beta/cosmos_originated/denom_to_erc20
   */
  queryDenomToErc20 = (query?: { denom?: string }, params: RequestParams = {}) =>
    this.request<V1QueryDenomToErc20Response, RpcStatus>({
      path: `/gravity/v1beta/cosmos_originated/denom_to_erc20`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryErc20ToDenom
   * @request GET:/gravity/v1beta/cosmos_originated/erc20_to_denom
   */
  queryErc20ToDenom = (query?: { erc20?: string }, params: RequestParams = {}) =>
    this.request<V1QueryErc20ToDenomResponse, RpcStatus>({
      path: `/gravity/v1beta/cosmos_originated/erc20_to_denom`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryLogicConfirms
   * @request GET:/gravity/v1beta/logic/confirms
   */
  queryLogicConfirms = (query?: { invalidationId?: string; invalidationNonce?: string }, params: RequestParams = {}) =>
    this.request<V1QueryLogicConfirmsResponse, RpcStatus>({
      path: `/gravity/v1beta/logic/confirms`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryLastPendingLogicCallByAddr
   * @request GET:/gravity/v1beta/logic/{address}
   */
  queryLastPendingLogicCallByAddr = (address: string, params: RequestParams = {}) =>
    this.request<V1QueryLastPendingLogicCallByAddrResponse, RpcStatus>({
      path: `/gravity/v1beta/logic/${address}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryLastEventNonceByAddr
   * @request GET:/gravity/v1beta/oracle/eventnonce/{address}
   */
  queryLastEventNonceByAddr = (address: string, params: RequestParams = {}) =>
    this.request<V1QueryLastEventNonceByAddrResponse, RpcStatus>({
      path: `/gravity/v1beta/oracle/eventnonce/${address}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryParams
   * @summary Deployments queries deployments
   * @request GET:/gravity/v1beta/params
   */
  queryParams = (params: RequestParams = {}) =>
    this.request<V1QueryParamsResponse, RpcStatus>({
      path: `/gravity/v1beta/params`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryGetDelegateKeyByEth
   * @request GET:/gravity/v1beta/query_delegate_keys_by_eth
   */
  queryGetDelegateKeyByEth = (query?: { ethAddress?: string }, params: RequestParams = {}) =>
    this.request<V1QueryDelegateKeysByEthAddressResponse, RpcStatus>({
      path: `/gravity/v1beta/query_delegate_keys_by_eth`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryGetDelegateKeyByOrchestrator
   * @request GET:/gravity/v1beta/query_delegate_keys_by_orchestrator
   */
  queryGetDelegateKeyByOrchestrator = (query?: { orchestratorAddress?: string }, params: RequestParams = {}) =>
    this.request<V1QueryDelegateKeysByOrchestratorAddressResponse, RpcStatus>({
      path: `/gravity/v1beta/query_delegate_keys_by_orchestrator`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryGetDelegateKeyByValidator
   * @request GET:/gravity/v1beta/query_delegate_keys_by_validator
   */
  queryGetDelegateKeyByValidator = (query?: { validatorAddress?: string }, params: RequestParams = {}) =>
    this.request<V1QueryDelegateKeysByValidatorAddressResponse, RpcStatus>({
      path: `/gravity/v1beta/query_delegate_keys_by_validator`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryGetPendingSendToEth
   * @request GET:/gravity/v1beta/query_pending_send_to_eth
   */
  queryGetPendingSendToEth = (query?: { senderAddress?: string }, params: RequestParams = {}) =>
    this.request<V1QueryPendingSendToEthResponse, RpcStatus>({
      path: `/gravity/v1beta/query_pending_send_to_eth`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryValsetRequest
   * @request GET:/gravity/v1beta/valset
   */
  queryValsetRequest = (query?: { nonce?: string }, params: RequestParams = {}) =>
    this.request<V1QueryValsetRequestResponse, RpcStatus>({
      path: `/gravity/v1beta/valset`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryValsetConfirm
   * @request GET:/gravity/v1beta/valset/confirm
   */
  queryValsetConfirm = (query?: { nonce?: string; address?: string }, params: RequestParams = {}) =>
    this.request<V1QueryValsetConfirmResponse, RpcStatus>({
      path: `/gravity/v1beta/valset/confirm`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryCurrentValset
   * @request GET:/gravity/v1beta/valset/current
   */
  queryCurrentValset = (params: RequestParams = {}) =>
    this.request<V1QueryCurrentValsetResponse, RpcStatus>({
      path: `/gravity/v1beta/valset/current`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryLastPendingValsetRequestByAddr
   * @request GET:/gravity/v1beta/valset/last
   */
  queryLastPendingValsetRequestByAddr = (query?: { address?: string }, params: RequestParams = {}) =>
    this.request<V1QueryLastPendingValsetRequestByAddrResponse, RpcStatus>({
      path: `/gravity/v1beta/valset/last`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryLastValsetRequests
   * @request GET:/gravity/v1beta/valset/requests
   */
  queryLastValsetRequests = (params: RequestParams = {}) =>
    this.request<V1QueryLastValsetRequestsResponse, RpcStatus>({
      path: `/gravity/v1beta/valset/requests`,
      method: "GET",
      format: "json",
      ...params,
    });
}
