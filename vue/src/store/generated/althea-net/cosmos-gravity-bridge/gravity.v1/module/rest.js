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
export var ContentType;
(function (ContentType) {
    ContentType["Json"] = "application/json";
    ContentType["FormData"] = "multipart/form-data";
    ContentType["UrlEncoded"] = "application/x-www-form-urlencoded";
})(ContentType || (ContentType = {}));
export class HttpClient {
    constructor(apiConfig = {}) {
        this.baseUrl = "";
        this.securityData = null;
        this.securityWorker = null;
        this.abortControllers = new Map();
        this.baseApiParams = {
            credentials: "same-origin",
            headers: {},
            redirect: "follow",
            referrerPolicy: "no-referrer",
        };
        this.setSecurityData = (data) => {
            this.securityData = data;
        };
        this.contentFormatters = {
            [ContentType.Json]: (input) => input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
            [ContentType.FormData]: (input) => Object.keys(input || {}).reduce((data, key) => {
                data.append(key, input[key]);
                return data;
            }, new FormData()),
            [ContentType.UrlEncoded]: (input) => this.toQueryString(input),
        };
        this.createAbortSignal = (cancelToken) => {
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
        this.abortRequest = (cancelToken) => {
            const abortController = this.abortControllers.get(cancelToken);
            if (abortController) {
                abortController.abort();
                this.abortControllers.delete(cancelToken);
            }
        };
        this.request = ({ body, secure, path, type, query, format = "json", baseUrl, cancelToken, ...params }) => {
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
                const r = response;
                r.data = null;
                r.error = null;
                const data = await response[format]()
                    .then((data) => {
                    if (r.ok) {
                        r.data = data;
                    }
                    else {
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
                if (!response.ok)
                    throw data;
                return data;
            });
        };
        Object.assign(this, apiConfig);
    }
    addQueryParam(query, key) {
        const value = query[key];
        return (encodeURIComponent(key) +
            "=" +
            encodeURIComponent(Array.isArray(value) ? value.join(",") : typeof value === "number" ? value : `${value}`));
    }
    toQueryString(rawQuery) {
        const query = rawQuery || {};
        const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
        return keys
            .map((key) => typeof query[key] === "object" && !Array.isArray(query[key])
            ? this.toQueryString(query[key])
            : this.addQueryParam(query, key))
            .join("&");
    }
    addQueryParams(rawQuery) {
        const queryString = this.toQueryString(rawQuery);
        return queryString ? `?${queryString}` : "";
    }
    mergeRequestParams(params1, params2) {
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
}
/**
 * @title gravity/query.proto
 * @version version not set
 */
export class Api extends HttpClient {
    constructor() {
        super(...arguments);
        /**
         * No description
         *
         * @tags Msg
         * @name MsgCancelSendToEth
         * @request POST:/gravity/v1/cancel_send_to_eth
         */
        this.msgCancelSendToEth = (params = {}) => this.request({
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
        this.msgConfirmLogicCall = (params = {}) => this.request({
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
        this.msgConfirmBatch = (params = {}) => this.request({
            path: `/gravity/v1/confirm_batch`,
            method: "POST",
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
        this.msgDepositClaim = (params = {}) => this.request({
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
        this.msgErc20DeployedClaim = (params = {}) => this.request({
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
        this.msgLogicCallExecutedClaim = (params = {}) => this.request({
            path: `/gravity/v1/logic_call_executed_claim`,
            method: "POST",
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
        this.msgRequestBatch = (params = {}) => this.request({
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
        this.msgSendToEth = (params = {}) => this.request({
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
        this.msgSetOrchestratorAddress = (params = {}) => this.request({
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
        this.msgValsetConfirm = (params = {}) => this.request({
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
        this.msgValsetUpdateClaim = (params = {}) => this.request({
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
        this.msgWithdrawClaim = (params = {}) => this.request({
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
        this.queryBatchConfirms = (query, params = {}) => this.request({
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
        this.queryOutgoingLogicCalls = (params = {}) => this.request({
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
        this.queryOutgoingTxBatches = (params = {}) => this.request({
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
        this.queryLastPendingBatchRequestByAddr = (address, params = {}) => this.request({
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
        this.queryBatchRequestByNonce = (nonce, query, params = {}) => this.request({
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
        this.queryBatchFees = (params = {}) => this.request({
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
        this.queryValsetConfirmsByNonce = (nonce, params = {}) => this.request({
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
        this.queryDenomToErc20 = (query, params = {}) => this.request({
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
        this.queryErc20ToDenom = (query, params = {}) => this.request({
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
        this.queryLogicConfirms = (query, params = {}) => this.request({
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
        this.queryLastPendingLogicCallByAddr = (address, params = {}) => this.request({
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
        this.queryLastEventNonceByAddr = (address, params = {}) => this.request({
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
        this.queryParams = (params = {}) => this.request({
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
        this.queryGetDelegateKeyByEth = (query, params = {}) => this.request({
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
        this.queryGetDelegateKeyByOrchestrator = (query, params = {}) => this.request({
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
        this.queryGetDelegateKeyByValidator = (query, params = {}) => this.request({
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
        this.queryGetPendingSendToEth = (query, params = {}) => this.request({
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
        this.queryValsetRequest = (query, params = {}) => this.request({
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
        this.queryValsetConfirm = (query, params = {}) => this.request({
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
        this.queryCurrentValset = (params = {}) => this.request({
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
        this.queryLastPendingValsetRequestByAddr = (query, params = {}) => this.request({
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
        this.queryLastValsetRequests = (params = {}) => this.request({
            path: `/gravity/v1beta/valset/requests`,
            method: "GET",
            format: "json",
            ...params,
        });
    }
}
