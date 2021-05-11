import { txClient, queryClient } from './module';
// @ts-ignore
import { SpVuexError } from '@starport/vuex';
import { BridgeValidator } from "./module/types/gravity/types";
import { Valset } from "./module/types/gravity/types";
import { LastObservedEthereumBlockHeight } from "./module/types/gravity/types";
import { Erc20ToDenom } from "./module/types/gravity/types";
import { OutgoingTxBatch } from "./module/types/gravity/batch";
import { OutgoingTransferTx } from "./module/types/gravity/batch";
import { OutgoingLogicCall } from "./module/types/gravity/batch";
import { OrchestratorAddress } from "./module/types/gravity/orchestratorAddress";
import { Attestation } from "./module/types/gravity/attestation";
import { Erc20Token } from "./module/types/gravity/attestation";
import { IDSet } from "./module/types/gravity/pool";
import { BatchFees } from "./module/types/gravity/pool";
import { CosmosToEth } from "./module/types/gravity/cosmosToEth";
import { Params } from "./module/types/gravity/genesis";
async function initTxClient(vuexGetters) {
    return await txClient(vuexGetters['common/wallet/signer'], {
        addr: vuexGetters['common/env/apiTendermint']
    });
}
async function initQueryClient(vuexGetters) {
    return await queryClient({
        addr: vuexGetters['common/env/apiCosmos']
    });
}
function getStructure(template) {
    let structure = { fields: [] };
    for (const [key, value] of Object.entries(template)) {
        let field = {};
        field.name = key;
        field.type = typeof value;
        structure.fields.push(field);
    }
    return structure;
}
const getDefaultState = () => {
    return {
        Params: {},
        CurrentValset: {},
        ValsetRequest: {},
        ValsetConfirm: {},
        ValsetConfirmsByNonce: {},
        LastValsetRequests: {},
        LastPendingValsetRequestByAddr: {},
        LastPendingBatchRequestByAddr: {},
        LastPendingLogicCallByAddr: {},
        LastEventNonceByAddr: {},
        BatchFees: {},
        OutgoingTxBatches: {},
        OutgoingLogicCalls: {},
        BatchRequestByNonce: {},
        BatchConfirms: {},
        LogicConfirms: {},
        Erc20ToDenom: {},
        DenomToErc20: {},
        GetDelegateKeyByValidator: {},
        GetDelegateKeyByEth: {},
        GetDelegateKeyByOrchestrator: {},
        GetPendingSendToEth: {},
        OrchestratorAddressAll: {},
        CosmosToEthAll: {},
        ValsetUpdateClaim: {},
        _Structure: {
            BridgeValidator: getStructure(BridgeValidator.fromPartial({})),
            Valset: getStructure(Valset.fromPartial({})),
            LastObservedEthereumBlockHeight: getStructure(LastObservedEthereumBlockHeight.fromPartial({})),
            Erc20ToDenom: getStructure(Erc20ToDenom.fromPartial({})),
            OutgoingTxBatch: getStructure(OutgoingTxBatch.fromPartial({})),
            OutgoingTransferTx: getStructure(OutgoingTransferTx.fromPartial({})),
            OutgoingLogicCall: getStructure(OutgoingLogicCall.fromPartial({})),
            OrchestratorAddress: getStructure(OrchestratorAddress.fromPartial({})),
            Attestation: getStructure(Attestation.fromPartial({})),
            Erc20Token: getStructure(Erc20Token.fromPartial({})),
            IDSet: getStructure(IDSet.fromPartial({})),
            BatchFees: getStructure(BatchFees.fromPartial({})),
            CosmosToEth: getStructure(CosmosToEth.fromPartial({})),
            Params: getStructure(Params.fromPartial({})),
        },
        _Subscriptions: new Set(),
    };
};
// initial state
const state = getDefaultState();
export default {
    namespaced: true,
    state,
    mutations: {
        RESET_STATE(state) {
            Object.assign(state, getDefaultState());
        },
        QUERY(state, { query, key, value }) {
            state[query][JSON.stringify(key)] = value;
        },
        SUBSCRIBE(state, subscription) {
            state._Subscriptions.add(subscription);
        },
        UNSUBSCRIBE(state, subscription) {
            state._Subscriptions.delete(subscription);
        }
    },
    getters: {
        getParams: (state) => (params = {}) => {
            if (!params.query) {
                params.query = null;
            }
            return state.Params[JSON.stringify(params)] ?? {};
        },
        getCurrentValset: (state) => (params = {}) => {
            if (!params.query) {
                params.query = null;
            }
            return state.CurrentValset[JSON.stringify(params)] ?? {};
        },
        getValsetRequest: (state) => (params = {}) => {
            if (!params.query) {
                params.query = null;
            }
            return state.ValsetRequest[JSON.stringify(params)] ?? {};
        },
        getValsetConfirm: (state) => (params = {}) => {
            if (!params.query) {
                params.query = null;
            }
            return state.ValsetConfirm[JSON.stringify(params)] ?? {};
        },
        getValsetConfirmsByNonce: (state) => (params = {}) => {
            if (!params.query) {
                params.query = null;
            }
            return state.ValsetConfirmsByNonce[JSON.stringify(params)] ?? {};
        },
        getLastValsetRequests: (state) => (params = {}) => {
            if (!params.query) {
                params.query = null;
            }
            return state.LastValsetRequests[JSON.stringify(params)] ?? {};
        },
        getLastPendingValsetRequestByAddr: (state) => (params = {}) => {
            if (!params.query) {
                params.query = null;
            }
            return state.LastPendingValsetRequestByAddr[JSON.stringify(params)] ?? {};
        },
        getLastPendingBatchRequestByAddr: (state) => (params = {}) => {
            if (!params.query) {
                params.query = null;
            }
            return state.LastPendingBatchRequestByAddr[JSON.stringify(params)] ?? {};
        },
        getLastPendingLogicCallByAddr: (state) => (params = {}) => {
            if (!params.query) {
                params.query = null;
            }
            return state.LastPendingLogicCallByAddr[JSON.stringify(params)] ?? {};
        },
        getLastEventNonceByAddr: (state) => (params = {}) => {
            if (!params.query) {
                params.query = null;
            }
            return state.LastEventNonceByAddr[JSON.stringify(params)] ?? {};
        },
        getBatchFees: (state) => (params = {}) => {
            if (!params.query) {
                params.query = null;
            }
            return state.BatchFees[JSON.stringify(params)] ?? {};
        },
        getOutgoingTxBatches: (state) => (params = {}) => {
            if (!params.query) {
                params.query = null;
            }
            return state.OutgoingTxBatches[JSON.stringify(params)] ?? {};
        },
        getOutgoingLogicCalls: (state) => (params = {}) => {
            if (!params.query) {
                params.query = null;
            }
            return state.OutgoingLogicCalls[JSON.stringify(params)] ?? {};
        },
        getBatchRequestByNonce: (state) => (params = {}) => {
            if (!params.query) {
                params.query = null;
            }
            return state.BatchRequestByNonce[JSON.stringify(params)] ?? {};
        },
        getBatchConfirms: (state) => (params = {}) => {
            if (!params.query) {
                params.query = null;
            }
            return state.BatchConfirms[JSON.stringify(params)] ?? {};
        },
        getLogicConfirms: (state) => (params = {}) => {
            if (!params.query) {
                params.query = null;
            }
            return state.LogicConfirms[JSON.stringify(params)] ?? {};
        },
        getErc20ToDenom: (state) => (params = {}) => {
            if (!params.query) {
                params.query = null;
            }
            return state.Erc20ToDenom[JSON.stringify(params)] ?? {};
        },
        getDenomToErc20: (state) => (params = {}) => {
            if (!params.query) {
                params.query = null;
            }
            return state.DenomToErc20[JSON.stringify(params)] ?? {};
        },
        getGetDelegateKeyByValidator: (state) => (params = {}) => {
            if (!params.query) {
                params.query = null;
            }
            return state.GetDelegateKeyByValidator[JSON.stringify(params)] ?? {};
        },
        getGetDelegateKeyByEth: (state) => (params = {}) => {
            if (!params.query) {
                params.query = null;
            }
            return state.GetDelegateKeyByEth[JSON.stringify(params)] ?? {};
        },
        getGetDelegateKeyByOrchestrator: (state) => (params = {}) => {
            if (!params.query) {
                params.query = null;
            }
            return state.GetDelegateKeyByOrchestrator[JSON.stringify(params)] ?? {};
        },
        getGetPendingSendToEth: (state) => (params = {}) => {
            if (!params.query) {
                params.query = null;
            }
            return state.GetPendingSendToEth[JSON.stringify(params)] ?? {};
        },
        getOrchestratorAddressAll: (state) => (params = {}) => {
            if (!params.query) {
                params.query = null;
            }
            return state.OrchestratorAddressAll[JSON.stringify(params)] ?? {};
        },
        getCosmosToEthAll: (state) => (params = {}) => {
            if (!params.query) {
                params.query = null;
            }
            return state.CosmosToEthAll[JSON.stringify(params)] ?? {};
        },
        getValsetUpdateClaim: (state) => (params = {}) => {
            if (!params.query) {
                params.query = null;
            }
            return state.ValsetUpdateClaim[JSON.stringify(params)] ?? {};
        },
        getTypeStructure: (state) => (type) => {
            return state._Structure[type].fields;
        }
    },
    actions: {
        init({ dispatch, rootGetters }) {
            console.log('init');
            if (rootGetters['common/env/client']) {
                rootGetters['common/env/client'].on('newblock', () => {
                    dispatch('StoreUpdate');
                });
            }
        },
        resetState({ commit }) {
            commit('RESET_STATE');
        },
        unsubscribe({ commit }, subscription) {
            commit('UNSUBSCRIBE', subscription);
        },
        async StoreUpdate({ state, dispatch }) {
            state._Subscriptions.forEach((subscription) => {
                dispatch(subscription.action, subscription.payload);
            });
        },
        async QueryParams({ commit, rootGetters, getters }, { options: { subscribe = false, all = false }, params: { ...key }, query = null }) {
            try {
                let value = query ? (await (await initQueryClient(rootGetters)).queryParams(query)).data : (await (await initQueryClient(rootGetters)).queryParams()).data;
                commit('QUERY', { query: 'Params', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryParams', payload: { options: { all }, params: { ...key }, query } });
                return getters['getParams']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                console.error(new SpVuexError('QueryClient:QueryParams', 'API Node Unavailable. Could not perform query.'));
                return {};
            }
        },
        async QueryCurrentValset({ commit, rootGetters, getters }, { options: { subscribe = false, all = false }, params: { ...key }, query = null }) {
            try {
                let value = query ? (await (await initQueryClient(rootGetters)).queryCurrentValset(query)).data : (await (await initQueryClient(rootGetters)).queryCurrentValset()).data;
                commit('QUERY', { query: 'CurrentValset', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryCurrentValset', payload: { options: { all }, params: { ...key }, query } });
                return getters['getCurrentValset']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                console.error(new SpVuexError('QueryClient:QueryCurrentValset', 'API Node Unavailable. Could not perform query.'));
                return {};
            }
        },
        async QueryValsetRequest({ commit, rootGetters, getters }, { options: { subscribe = false, all = false }, params: { ...key }, query = null }) {
            try {
                let value = query ? (await (await initQueryClient(rootGetters)).queryValsetRequest(query)).data : (await (await initQueryClient(rootGetters)).queryValsetRequest()).data;
                while (all && value.pagination && value.pagination.nextKey != null) {
                    let next_values = (await (await initQueryClient(rootGetters)).queryValsetRequest({ ...query, 'pagination.key': value.pagination.nextKey })).data;
                    for (let prop of Object.keys(next_values)) {
                        if (Array.isArray(next_values[prop])) {
                            value[prop] = [...value[prop], ...next_values[prop]];
                        }
                        else {
                            value[prop] = next_values[prop];
                        }
                    }
                }
                commit('QUERY', { query: 'ValsetRequest', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryValsetRequest', payload: { options: { all }, params: { ...key }, query } });
                return getters['getValsetRequest']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                console.error(new SpVuexError('QueryClient:QueryValsetRequest', 'API Node Unavailable. Could not perform query.'));
                return {};
            }
        },
        async QueryValsetConfirm({ commit, rootGetters, getters }, { options: { subscribe = false, all = false }, params: { ...key }, query = null }) {
            try {
                let value = query ? (await (await initQueryClient(rootGetters)).queryValsetConfirm(query)).data : (await (await initQueryClient(rootGetters)).queryValsetConfirm()).data;
                while (all && value.pagination && value.pagination.nextKey != null) {
                    let next_values = (await (await initQueryClient(rootGetters)).queryValsetConfirm({ ...query, 'pagination.key': value.pagination.nextKey })).data;
                    for (let prop of Object.keys(next_values)) {
                        if (Array.isArray(next_values[prop])) {
                            value[prop] = [...value[prop], ...next_values[prop]];
                        }
                        else {
                            value[prop] = next_values[prop];
                        }
                    }
                }
                commit('QUERY', { query: 'ValsetConfirm', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryValsetConfirm', payload: { options: { all }, params: { ...key }, query } });
                return getters['getValsetConfirm']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                console.error(new SpVuexError('QueryClient:QueryValsetConfirm', 'API Node Unavailable. Could not perform query.'));
                return {};
            }
        },
        async QueryValsetConfirmsByNonce({ commit, rootGetters, getters }, { options: { subscribe = false, all = false }, params: { ...key }, query = null }) {
            try {
                let value = query ? (await (await initQueryClient(rootGetters)).queryValsetConfirmsByNonce(key.nonce, query)).data : (await (await initQueryClient(rootGetters)).queryValsetConfirmsByNonce(key.nonce)).data;
                commit('QUERY', { query: 'ValsetConfirmsByNonce', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryValsetConfirmsByNonce', payload: { options: { all }, params: { ...key }, query } });
                return getters['getValsetConfirmsByNonce']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                console.error(new SpVuexError('QueryClient:QueryValsetConfirmsByNonce', 'API Node Unavailable. Could not perform query.'));
                return {};
            }
        },
        async QueryLastValsetRequests({ commit, rootGetters, getters }, { options: { subscribe = false, all = false }, params: { ...key }, query = null }) {
            try {
                let value = query ? (await (await initQueryClient(rootGetters)).queryLastValsetRequests(query)).data : (await (await initQueryClient(rootGetters)).queryLastValsetRequests()).data;
                commit('QUERY', { query: 'LastValsetRequests', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryLastValsetRequests', payload: { options: { all }, params: { ...key }, query } });
                return getters['getLastValsetRequests']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                console.error(new SpVuexError('QueryClient:QueryLastValsetRequests', 'API Node Unavailable. Could not perform query.'));
                return {};
            }
        },
        async QueryLastPendingValsetRequestByAddr({ commit, rootGetters, getters }, { options: { subscribe = false, all = false }, params: { ...key }, query = null }) {
            try {
                let value = query ? (await (await initQueryClient(rootGetters)).queryLastPendingValsetRequestByAddr(query)).data : (await (await initQueryClient(rootGetters)).queryLastPendingValsetRequestByAddr()).data;
                while (all && value.pagination && value.pagination.nextKey != null) {
                    let next_values = (await (await initQueryClient(rootGetters)).queryLastPendingValsetRequestByAddr({ ...query, 'pagination.key': value.pagination.nextKey })).data;
                    for (let prop of Object.keys(next_values)) {
                        if (Array.isArray(next_values[prop])) {
                            value[prop] = [...value[prop], ...next_values[prop]];
                        }
                        else {
                            value[prop] = next_values[prop];
                        }
                    }
                }
                commit('QUERY', { query: 'LastPendingValsetRequestByAddr', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryLastPendingValsetRequestByAddr', payload: { options: { all }, params: { ...key }, query } });
                return getters['getLastPendingValsetRequestByAddr']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                console.error(new SpVuexError('QueryClient:QueryLastPendingValsetRequestByAddr', 'API Node Unavailable. Could not perform query.'));
                return {};
            }
        },
        async QueryLastPendingBatchRequestByAddr({ commit, rootGetters, getters }, { options: { subscribe = false, all = false }, params: { ...key }, query = null }) {
            try {
                let value = query ? (await (await initQueryClient(rootGetters)).queryLastPendingBatchRequestByAddr(key.address, query)).data : (await (await initQueryClient(rootGetters)).queryLastPendingBatchRequestByAddr(key.address)).data;
                commit('QUERY', { query: 'LastPendingBatchRequestByAddr', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryLastPendingBatchRequestByAddr', payload: { options: { all }, params: { ...key }, query } });
                return getters['getLastPendingBatchRequestByAddr']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                console.error(new SpVuexError('QueryClient:QueryLastPendingBatchRequestByAddr', 'API Node Unavailable. Could not perform query.'));
                return {};
            }
        },
        async QueryLastPendingLogicCallByAddr({ commit, rootGetters, getters }, { options: { subscribe = false, all = false }, params: { ...key }, query = null }) {
            try {
                let value = query ? (await (await initQueryClient(rootGetters)).queryLastPendingLogicCallByAddr(key.address, query)).data : (await (await initQueryClient(rootGetters)).queryLastPendingLogicCallByAddr(key.address)).data;
                commit('QUERY', { query: 'LastPendingLogicCallByAddr', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryLastPendingLogicCallByAddr', payload: { options: { all }, params: { ...key }, query } });
                return getters['getLastPendingLogicCallByAddr']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                console.error(new SpVuexError('QueryClient:QueryLastPendingLogicCallByAddr', 'API Node Unavailable. Could not perform query.'));
                return {};
            }
        },
        async QueryLastEventNonceByAddr({ commit, rootGetters, getters }, { options: { subscribe = false, all = false }, params: { ...key }, query = null }) {
            try {
                let value = query ? (await (await initQueryClient(rootGetters)).queryLastEventNonceByAddr(key.address, query)).data : (await (await initQueryClient(rootGetters)).queryLastEventNonceByAddr(key.address)).data;
                commit('QUERY', { query: 'LastEventNonceByAddr', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryLastEventNonceByAddr', payload: { options: { all }, params: { ...key }, query } });
                return getters['getLastEventNonceByAddr']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                console.error(new SpVuexError('QueryClient:QueryLastEventNonceByAddr', 'API Node Unavailable. Could not perform query.'));
                return {};
            }
        },
        async QueryBatchFees({ commit, rootGetters, getters }, { options: { subscribe = false, all = false }, params: { ...key }, query = null }) {
            try {
                let value = query ? (await (await initQueryClient(rootGetters)).queryBatchFees(query)).data : (await (await initQueryClient(rootGetters)).queryBatchFees()).data;
                commit('QUERY', { query: 'BatchFees', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryBatchFees', payload: { options: { all }, params: { ...key }, query } });
                return getters['getBatchFees']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                console.error(new SpVuexError('QueryClient:QueryBatchFees', 'API Node Unavailable. Could not perform query.'));
                return {};
            }
        },
        async QueryOutgoingTxBatches({ commit, rootGetters, getters }, { options: { subscribe = false, all = false }, params: { ...key }, query = null }) {
            try {
                let value = query ? (await (await initQueryClient(rootGetters)).queryOutgoingTxBatches(query)).data : (await (await initQueryClient(rootGetters)).queryOutgoingTxBatches()).data;
                commit('QUERY', { query: 'OutgoingTxBatches', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryOutgoingTxBatches', payload: { options: { all }, params: { ...key }, query } });
                return getters['getOutgoingTxBatches']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                console.error(new SpVuexError('QueryClient:QueryOutgoingTxBatches', 'API Node Unavailable. Could not perform query.'));
                return {};
            }
        },
        async QueryOutgoingLogicCalls({ commit, rootGetters, getters }, { options: { subscribe = false, all = false }, params: { ...key }, query = null }) {
            try {
                let value = query ? (await (await initQueryClient(rootGetters)).queryOutgoingLogicCalls(query)).data : (await (await initQueryClient(rootGetters)).queryOutgoingLogicCalls()).data;
                commit('QUERY', { query: 'OutgoingLogicCalls', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryOutgoingLogicCalls', payload: { options: { all }, params: { ...key }, query } });
                return getters['getOutgoingLogicCalls']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                console.error(new SpVuexError('QueryClient:QueryOutgoingLogicCalls', 'API Node Unavailable. Could not perform query.'));
                return {};
            }
        },
        async QueryBatchRequestByNonce({ commit, rootGetters, getters }, { options: { subscribe = false, all = false }, params: { ...key }, query = null }) {
            try {
                let value = query ? (await (await initQueryClient(rootGetters)).queryBatchRequestByNonce(key.nonce, query)).data : (await (await initQueryClient(rootGetters)).queryBatchRequestByNonce(key.nonce)).data;
                while (all && value.pagination && value.pagination.nextKey != null) {
                    let next_values = (await (await initQueryClient(rootGetters)).queryBatchRequestByNonce(key.nonce, { ...query, 'pagination.key': value.pagination.nextKey })).data;
                    for (let prop of Object.keys(next_values)) {
                        if (Array.isArray(next_values[prop])) {
                            value[prop] = [...value[prop], ...next_values[prop]];
                        }
                        else {
                            value[prop] = next_values[prop];
                        }
                    }
                }
                commit('QUERY', { query: 'BatchRequestByNonce', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryBatchRequestByNonce', payload: { options: { all }, params: { ...key }, query } });
                return getters['getBatchRequestByNonce']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                console.error(new SpVuexError('QueryClient:QueryBatchRequestByNonce', 'API Node Unavailable. Could not perform query.'));
                return {};
            }
        },
        async QueryBatchConfirms({ commit, rootGetters, getters }, { options: { subscribe = false, all = false }, params: { ...key }, query = null }) {
            try {
                let value = query ? (await (await initQueryClient(rootGetters)).queryBatchConfirms(query)).data : (await (await initQueryClient(rootGetters)).queryBatchConfirms()).data;
                while (all && value.pagination && value.pagination.nextKey != null) {
                    let next_values = (await (await initQueryClient(rootGetters)).queryBatchConfirms({ ...query, 'pagination.key': value.pagination.nextKey })).data;
                    for (let prop of Object.keys(next_values)) {
                        if (Array.isArray(next_values[prop])) {
                            value[prop] = [...value[prop], ...next_values[prop]];
                        }
                        else {
                            value[prop] = next_values[prop];
                        }
                    }
                }
                commit('QUERY', { query: 'BatchConfirms', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryBatchConfirms', payload: { options: { all }, params: { ...key }, query } });
                return getters['getBatchConfirms']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                console.error(new SpVuexError('QueryClient:QueryBatchConfirms', 'API Node Unavailable. Could not perform query.'));
                return {};
            }
        },
        async QueryLogicConfirms({ commit, rootGetters, getters }, { options: { subscribe = false, all = false }, params: { ...key }, query = null }) {
            try {
                let value = query ? (await (await initQueryClient(rootGetters)).queryLogicConfirms(query)).data : (await (await initQueryClient(rootGetters)).queryLogicConfirms()).data;
                while (all && value.pagination && value.pagination.nextKey != null) {
                    let next_values = (await (await initQueryClient(rootGetters)).queryLogicConfirms({ ...query, 'pagination.key': value.pagination.nextKey })).data;
                    for (let prop of Object.keys(next_values)) {
                        if (Array.isArray(next_values[prop])) {
                            value[prop] = [...value[prop], ...next_values[prop]];
                        }
                        else {
                            value[prop] = next_values[prop];
                        }
                    }
                }
                commit('QUERY', { query: 'LogicConfirms', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryLogicConfirms', payload: { options: { all }, params: { ...key }, query } });
                return getters['getLogicConfirms']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                console.error(new SpVuexError('QueryClient:QueryLogicConfirms', 'API Node Unavailable. Could not perform query.'));
                return {};
            }
        },
        async QueryErc20ToDenom({ commit, rootGetters, getters }, { options: { subscribe = false, all = false }, params: { ...key }, query = null }) {
            try {
                let value = query ? (await (await initQueryClient(rootGetters)).queryErc20ToDenom(query)).data : (await (await initQueryClient(rootGetters)).queryErc20ToDenom()).data;
                while (all && value.pagination && value.pagination.nextKey != null) {
                    let next_values = (await (await initQueryClient(rootGetters)).queryErc20ToDenom({ ...query, 'pagination.key': value.pagination.nextKey })).data;
                    for (let prop of Object.keys(next_values)) {
                        if (Array.isArray(next_values[prop])) {
                            value[prop] = [...value[prop], ...next_values[prop]];
                        }
                        else {
                            value[prop] = next_values[prop];
                        }
                    }
                }
                commit('QUERY', { query: 'Erc20ToDenom', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryErc20ToDenom', payload: { options: { all }, params: { ...key }, query } });
                return getters['getErc20ToDenom']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                console.error(new SpVuexError('QueryClient:QueryErc20ToDenom', 'API Node Unavailable. Could not perform query.'));
                return {};
            }
        },
        async QueryDenomToErc20({ commit, rootGetters, getters }, { options: { subscribe = false, all = false }, params: { ...key }, query = null }) {
            try {
                let value = query ? (await (await initQueryClient(rootGetters)).queryDenomToErc20(query)).data : (await (await initQueryClient(rootGetters)).queryDenomToErc20()).data;
                while (all && value.pagination && value.pagination.nextKey != null) {
                    let next_values = (await (await initQueryClient(rootGetters)).queryDenomToErc20({ ...query, 'pagination.key': value.pagination.nextKey })).data;
                    for (let prop of Object.keys(next_values)) {
                        if (Array.isArray(next_values[prop])) {
                            value[prop] = [...value[prop], ...next_values[prop]];
                        }
                        else {
                            value[prop] = next_values[prop];
                        }
                    }
                }
                commit('QUERY', { query: 'DenomToErc20', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryDenomToErc20', payload: { options: { all }, params: { ...key }, query } });
                return getters['getDenomToErc20']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                console.error(new SpVuexError('QueryClient:QueryDenomToErc20', 'API Node Unavailable. Could not perform query.'));
                return {};
            }
        },
        async QueryGetDelegateKeyByValidator({ commit, rootGetters, getters }, { options: { subscribe = false, all = false }, params: { ...key }, query = null }) {
            try {
                let value = query ? (await (await initQueryClient(rootGetters)).queryGetDelegateKeyByValidator(query)).data : (await (await initQueryClient(rootGetters)).queryGetDelegateKeyByValidator()).data;
                while (all && value.pagination && value.pagination.nextKey != null) {
                    let next_values = (await (await initQueryClient(rootGetters)).queryGetDelegateKeyByValidator({ ...query, 'pagination.key': value.pagination.nextKey })).data;
                    for (let prop of Object.keys(next_values)) {
                        if (Array.isArray(next_values[prop])) {
                            value[prop] = [...value[prop], ...next_values[prop]];
                        }
                        else {
                            value[prop] = next_values[prop];
                        }
                    }
                }
                commit('QUERY', { query: 'GetDelegateKeyByValidator', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryGetDelegateKeyByValidator', payload: { options: { all }, params: { ...key }, query } });
                return getters['getGetDelegateKeyByValidator']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                console.error(new SpVuexError('QueryClient:QueryGetDelegateKeyByValidator', 'API Node Unavailable. Could not perform query.'));
                return {};
            }
        },
        async QueryGetDelegateKeyByEth({ commit, rootGetters, getters }, { options: { subscribe = false, all = false }, params: { ...key }, query = null }) {
            try {
                let value = query ? (await (await initQueryClient(rootGetters)).queryGetDelegateKeyByEth(query)).data : (await (await initQueryClient(rootGetters)).queryGetDelegateKeyByEth()).data;
                while (all && value.pagination && value.pagination.nextKey != null) {
                    let next_values = (await (await initQueryClient(rootGetters)).queryGetDelegateKeyByEth({ ...query, 'pagination.key': value.pagination.nextKey })).data;
                    for (let prop of Object.keys(next_values)) {
                        if (Array.isArray(next_values[prop])) {
                            value[prop] = [...value[prop], ...next_values[prop]];
                        }
                        else {
                            value[prop] = next_values[prop];
                        }
                    }
                }
                commit('QUERY', { query: 'GetDelegateKeyByEth', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryGetDelegateKeyByEth', payload: { options: { all }, params: { ...key }, query } });
                return getters['getGetDelegateKeyByEth']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                console.error(new SpVuexError('QueryClient:QueryGetDelegateKeyByEth', 'API Node Unavailable. Could not perform query.'));
                return {};
            }
        },
        async QueryGetDelegateKeyByOrchestrator({ commit, rootGetters, getters }, { options: { subscribe = false, all = false }, params: { ...key }, query = null }) {
            try {
                let value = query ? (await (await initQueryClient(rootGetters)).queryGetDelegateKeyByOrchestrator(query)).data : (await (await initQueryClient(rootGetters)).queryGetDelegateKeyByOrchestrator()).data;
                while (all && value.pagination && value.pagination.nextKey != null) {
                    let next_values = (await (await initQueryClient(rootGetters)).queryGetDelegateKeyByOrchestrator({ ...query, 'pagination.key': value.pagination.nextKey })).data;
                    for (let prop of Object.keys(next_values)) {
                        if (Array.isArray(next_values[prop])) {
                            value[prop] = [...value[prop], ...next_values[prop]];
                        }
                        else {
                            value[prop] = next_values[prop];
                        }
                    }
                }
                commit('QUERY', { query: 'GetDelegateKeyByOrchestrator', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryGetDelegateKeyByOrchestrator', payload: { options: { all }, params: { ...key }, query } });
                return getters['getGetDelegateKeyByOrchestrator']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                console.error(new SpVuexError('QueryClient:QueryGetDelegateKeyByOrchestrator', 'API Node Unavailable. Could not perform query.'));
                return {};
            }
        },
        async QueryGetPendingSendToEth({ commit, rootGetters, getters }, { options: { subscribe = false, all = false }, params: { ...key }, query = null }) {
            try {
                let value = query ? (await (await initQueryClient(rootGetters)).queryGetPendingSendToEth(query)).data : (await (await initQueryClient(rootGetters)).queryGetPendingSendToEth()).data;
                while (all && value.pagination && value.pagination.nextKey != null) {
                    let next_values = (await (await initQueryClient(rootGetters)).queryGetPendingSendToEth({ ...query, 'pagination.key': value.pagination.nextKey })).data;
                    for (let prop of Object.keys(next_values)) {
                        if (Array.isArray(next_values[prop])) {
                            value[prop] = [...value[prop], ...next_values[prop]];
                        }
                        else {
                            value[prop] = next_values[prop];
                        }
                    }
                }
                commit('QUERY', { query: 'GetPendingSendToEth', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryGetPendingSendToEth', payload: { options: { all }, params: { ...key }, query } });
                return getters['getGetPendingSendToEth']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                console.error(new SpVuexError('QueryClient:QueryGetPendingSendToEth', 'API Node Unavailable. Could not perform query.'));
                return {};
            }
        },
        async QueryOrchestratorAddressAll({ commit, rootGetters, getters }, { options: { subscribe = false, all = false }, params: { ...key }, query = null }) {
            try {
                let value = query ? (await (await initQueryClient(rootGetters)).queryOrchestratorAddressAll(query)).data : (await (await initQueryClient(rootGetters)).queryOrchestratorAddressAll()).data;
                commit('QUERY', { query: 'OrchestratorAddressAll', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryOrchestratorAddressAll', payload: { options: { all }, params: { ...key }, query } });
                return getters['getOrchestratorAddressAll']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                console.error(new SpVuexError('QueryClient:QueryOrchestratorAddressAll', 'API Node Unavailable. Could not perform query.'));
                return {};
            }
        },
        async QueryCosmosToEthAll({ commit, rootGetters, getters }, { options: { subscribe = false, all = false }, params: { ...key }, query = null }) {
            try {
                let value = query ? (await (await initQueryClient(rootGetters)).queryCosmosToEthAll(query)).data : (await (await initQueryClient(rootGetters)).queryCosmosToEthAll()).data;
                while (all && value.pagination && value.pagination.nextKey != null) {
                    let next_values = (await (await initQueryClient(rootGetters)).queryCosmosToEthAll({ ...query, 'pagination.key': value.pagination.nextKey })).data;
                    for (let prop of Object.keys(next_values)) {
                        if (Array.isArray(next_values[prop])) {
                            value[prop] = [...value[prop], ...next_values[prop]];
                        }
                        else {
                            value[prop] = next_values[prop];
                        }
                    }
                }
                commit('QUERY', { query: 'CosmosToEthAll', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryCosmosToEthAll', payload: { options: { all }, params: { ...key }, query } });
                return getters['getCosmosToEthAll']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                console.error(new SpVuexError('QueryClient:QueryCosmosToEthAll', 'API Node Unavailable. Could not perform query.'));
                return {};
            }
        },
        async MsgValsetUpdateClaim({ commit, rootGetters, getters }, { options: { subscribe = false, all = false }, params: { ...key }, query = null }) {
            try {
                let value = query ? (await (await initQueryClient(rootGetters)).msgValsetUpdateClaim(query)).data : (await (await initQueryClient(rootGetters)).msgValsetUpdateClaim()).data;
                while (all && value.pagination && value.pagination.nextKey != null) {
                    let next_values = (await (await initQueryClient(rootGetters)).msgValsetUpdateClaim({ ...query, 'pagination.key': value.pagination.nextKey })).data;
                    for (let prop of Object.keys(next_values)) {
                        if (Array.isArray(next_values[prop])) {
                            value[prop] = [...value[prop], ...next_values[prop]];
                        }
                        else {
                            value[prop] = next_values[prop];
                        }
                    }
                }
                commit('QUERY', { query: 'ValsetUpdateClaim', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'MsgValsetUpdateClaim', payload: { options: { all }, params: { ...key }, query } });
                return getters['getValsetUpdateClaim']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                console.error(new SpVuexError('QueryClient:MsgValsetUpdateClaim', 'API Node Unavailable. Could not perform query.'));
                return {};
            }
        },
        async sendMsgCreateOrchestratorAddress({ rootGetters }, { value, fee, memo }) {
            try {
                const msg = await (await initTxClient(rootGetters)).msgCreateOrchestratorAddress(value);
                const result = await (await initTxClient(rootGetters)).signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e.toString() == 'wallet is required') {
                    throw new SpVuexError('TxClient:MsgCreateOrchestratorAddress:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgCreateOrchestratorAddress:Send', 'Could not broadcast Tx.');
                }
            }
        },
        async sendMsgWithdrawClaim({ rootGetters }, { value, fee, memo }) {
            try {
                const msg = await (await initTxClient(rootGetters)).msgWithdrawClaim(value);
                const result = await (await initTxClient(rootGetters)).signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e.toString() == 'wallet is required') {
                    throw new SpVuexError('TxClient:MsgWithdrawClaim:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgWithdrawClaim:Send', 'Could not broadcast Tx.');
                }
            }
        },
        async sendMsgValsetConfirm({ rootGetters }, { value, fee, memo }) {
            try {
                const msg = await (await initTxClient(rootGetters)).msgValsetConfirm(value);
                const result = await (await initTxClient(rootGetters)).signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e.toString() == 'wallet is required') {
                    throw new SpVuexError('TxClient:MsgValsetConfirm:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgValsetConfirm:Send', 'Could not broadcast Tx.');
                }
            }
        },
        async sendMsgConfirmLogicCall({ rootGetters }, { value, fee, memo }) {
            try {
                const msg = await (await initTxClient(rootGetters)).msgConfirmLogicCall(value);
                const result = await (await initTxClient(rootGetters)).signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e.toString() == 'wallet is required') {
                    throw new SpVuexError('TxClient:MsgConfirmLogicCall:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgConfirmLogicCall:Send', 'Could not broadcast Tx.');
                }
            }
        },
        async sendMsgCreateCosmosToEth({ rootGetters }, { value, fee, memo }) {
            try {
                const msg = await (await initTxClient(rootGetters)).msgCreateCosmosToEth(value);
                const result = await (await initTxClient(rootGetters)).signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e.toString() == 'wallet is required') {
                    throw new SpVuexError('TxClient:MsgCreateCosmosToEth:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgCreateCosmosToEth:Send', 'Could not broadcast Tx.');
                }
            }
        },
        async sendMsgValsetUpdatedClaim({ rootGetters }, { value, fee, memo }) {
            try {
                const msg = await (await initTxClient(rootGetters)).msgValsetUpdatedClaim(value);
                const result = await (await initTxClient(rootGetters)).signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e.toString() == 'wallet is required') {
                    throw new SpVuexError('TxClient:MsgValsetUpdatedClaim:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgValsetUpdatedClaim:Send', 'Could not broadcast Tx.');
                }
            }
        },
        async sendMsgDeleteCosmosToEth({ rootGetters }, { value, fee, memo }) {
            try {
                const msg = await (await initTxClient(rootGetters)).msgDeleteCosmosToEth(value);
                const result = await (await initTxClient(rootGetters)).signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e.toString() == 'wallet is required') {
                    throw new SpVuexError('TxClient:MsgDeleteCosmosToEth:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgDeleteCosmosToEth:Send', 'Could not broadcast Tx.');
                }
            }
        },
        async sendMsgSetOrchestratorAddress({ rootGetters }, { value, fee, memo }) {
            try {
                const msg = await (await initTxClient(rootGetters)).msgSetOrchestratorAddress(value);
                const result = await (await initTxClient(rootGetters)).signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e.toString() == 'wallet is required') {
                    throw new SpVuexError('TxClient:MsgSetOrchestratorAddress:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgSetOrchestratorAddress:Send', 'Could not broadcast Tx.');
                }
            }
        },
        async sendMsgConfirmBatch({ rootGetters }, { value, fee, memo }) {
            try {
                const msg = await (await initTxClient(rootGetters)).msgConfirmBatch(value);
                const result = await (await initTxClient(rootGetters)).signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e.toString() == 'wallet is required') {
                    throw new SpVuexError('TxClient:MsgConfirmBatch:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgConfirmBatch:Send', 'Could not broadcast Tx.');
                }
            }
        },
        async sendMsgUpdateCosmosToEth({ rootGetters }, { value, fee, memo }) {
            try {
                const msg = await (await initTxClient(rootGetters)).msgUpdateCosmosToEth(value);
                const result = await (await initTxClient(rootGetters)).signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e.toString() == 'wallet is required') {
                    throw new SpVuexError('TxClient:MsgUpdateCosmosToEth:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgUpdateCosmosToEth:Send', 'Could not broadcast Tx.');
                }
            }
        },
        async sendMsgUpdateOrchestratorAddress({ rootGetters }, { value, fee, memo }) {
            try {
                const msg = await (await initTxClient(rootGetters)).msgUpdateOrchestratorAddress(value);
                const result = await (await initTxClient(rootGetters)).signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e.toString() == 'wallet is required') {
                    throw new SpVuexError('TxClient:MsgUpdateOrchestratorAddress:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgUpdateOrchestratorAddress:Send', 'Could not broadcast Tx.');
                }
            }
        },
        async sendMsgLogicCallExecutedClaim({ rootGetters }, { value, fee, memo }) {
            try {
                const msg = await (await initTxClient(rootGetters)).msgLogicCallExecutedClaim(value);
                const result = await (await initTxClient(rootGetters)).signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e.toString() == 'wallet is required') {
                    throw new SpVuexError('TxClient:MsgLogicCallExecutedClaim:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgLogicCallExecutedClaim:Send', 'Could not broadcast Tx.');
                }
            }
        },
        async sendMsgDeleteOrchestratorAddress({ rootGetters }, { value, fee, memo }) {
            try {
                const msg = await (await initTxClient(rootGetters)).msgDeleteOrchestratorAddress(value);
                const result = await (await initTxClient(rootGetters)).signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e.toString() == 'wallet is required') {
                    throw new SpVuexError('TxClient:MsgDeleteOrchestratorAddress:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgDeleteOrchestratorAddress:Send', 'Could not broadcast Tx.');
                }
            }
        },
        async sendMsgSendToEth({ rootGetters }, { value, fee, memo }) {
            try {
                const msg = await (await initTxClient(rootGetters)).msgSendToEth(value);
                const result = await (await initTxClient(rootGetters)).signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e.toString() == 'wallet is required') {
                    throw new SpVuexError('TxClient:MsgSendToEth:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgSendToEth:Send', 'Could not broadcast Tx.');
                }
            }
        },
        async sendMsgErc20DeployedClaim({ rootGetters }, { value, fee, memo }) {
            try {
                const msg = await (await initTxClient(rootGetters)).msgErc20DeployedClaim(value);
                const result = await (await initTxClient(rootGetters)).signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e.toString() == 'wallet is required') {
                    throw new SpVuexError('TxClient:MsgErc20DeployedClaim:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgErc20DeployedClaim:Send', 'Could not broadcast Tx.');
                }
            }
        },
        async sendMsgCancelSendToEth({ rootGetters }, { value, fee, memo }) {
            try {
                const msg = await (await initTxClient(rootGetters)).msgCancelSendToEth(value);
                const result = await (await initTxClient(rootGetters)).signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e.toString() == 'wallet is required') {
                    throw new SpVuexError('TxClient:MsgCancelSendToEth:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgCancelSendToEth:Send', 'Could not broadcast Tx.');
                }
            }
        },
        async sendMsgRequestBatch({ rootGetters }, { value, fee, memo }) {
            try {
                const msg = await (await initTxClient(rootGetters)).msgRequestBatch(value);
                const result = await (await initTxClient(rootGetters)).signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e.toString() == 'wallet is required') {
                    throw new SpVuexError('TxClient:MsgRequestBatch:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgRequestBatch:Send', 'Could not broadcast Tx.');
                }
            }
        },
        async sendMsgDepositClaim({ rootGetters }, { value, fee, memo }) {
            try {
                const msg = await (await initTxClient(rootGetters)).msgDepositClaim(value);
                const result = await (await initTxClient(rootGetters)).signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e.toString() == 'wallet is required') {
                    throw new SpVuexError('TxClient:MsgDepositClaim:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgDepositClaim:Send', 'Could not broadcast Tx.');
                }
            }
        },
        async MsgCreateOrchestratorAddress({ rootGetters }, { value }) {
            try {
                const msg = await (await initTxClient(rootGetters)).msgCreateOrchestratorAddress(value);
                return msg;
            }
            catch (e) {
                if (e.toString() == 'wallet is required') {
                    throw new SpVuexError('TxClient:MsgCreateOrchestratorAddress:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgCreateOrchestratorAddress:Create', 'Could not create message.');
                }
            }
        },
        async MsgWithdrawClaim({ rootGetters }, { value }) {
            try {
                const msg = await (await initTxClient(rootGetters)).msgWithdrawClaim(value);
                return msg;
            }
            catch (e) {
                if (e.toString() == 'wallet is required') {
                    throw new SpVuexError('TxClient:MsgWithdrawClaim:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgWithdrawClaim:Create', 'Could not create message.');
                }
            }
        },
        async MsgValsetConfirm({ rootGetters }, { value }) {
            try {
                const msg = await (await initTxClient(rootGetters)).msgValsetConfirm(value);
                return msg;
            }
            catch (e) {
                if (e.toString() == 'wallet is required') {
                    throw new SpVuexError('TxClient:MsgValsetConfirm:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgValsetConfirm:Create', 'Could not create message.');
                }
            }
        },
        async MsgConfirmLogicCall({ rootGetters }, { value }) {
            try {
                const msg = await (await initTxClient(rootGetters)).msgConfirmLogicCall(value);
                return msg;
            }
            catch (e) {
                if (e.toString() == 'wallet is required') {
                    throw new SpVuexError('TxClient:MsgConfirmLogicCall:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgConfirmLogicCall:Create', 'Could not create message.');
                }
            }
        },
        async MsgCreateCosmosToEth({ rootGetters }, { value }) {
            try {
                const msg = await (await initTxClient(rootGetters)).msgCreateCosmosToEth(value);
                return msg;
            }
            catch (e) {
                if (e.toString() == 'wallet is required') {
                    throw new SpVuexError('TxClient:MsgCreateCosmosToEth:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgCreateCosmosToEth:Create', 'Could not create message.');
                }
            }
        },
        async MsgValsetUpdatedClaim({ rootGetters }, { value }) {
            try {
                const msg = await (await initTxClient(rootGetters)).msgValsetUpdatedClaim(value);
                return msg;
            }
            catch (e) {
                if (e.toString() == 'wallet is required') {
                    throw new SpVuexError('TxClient:MsgValsetUpdatedClaim:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgValsetUpdatedClaim:Create', 'Could not create message.');
                }
            }
        },
        async MsgDeleteCosmosToEth({ rootGetters }, { value }) {
            try {
                const msg = await (await initTxClient(rootGetters)).msgDeleteCosmosToEth(value);
                return msg;
            }
            catch (e) {
                if (e.toString() == 'wallet is required') {
                    throw new SpVuexError('TxClient:MsgDeleteCosmosToEth:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgDeleteCosmosToEth:Create', 'Could not create message.');
                }
            }
        },
        async MsgSetOrchestratorAddress({ rootGetters }, { value }) {
            try {
                const msg = await (await initTxClient(rootGetters)).msgSetOrchestratorAddress(value);
                return msg;
            }
            catch (e) {
                if (e.toString() == 'wallet is required') {
                    throw new SpVuexError('TxClient:MsgSetOrchestratorAddress:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgSetOrchestratorAddress:Create', 'Could not create message.');
                }
            }
        },
        async MsgConfirmBatch({ rootGetters }, { value }) {
            try {
                const msg = await (await initTxClient(rootGetters)).msgConfirmBatch(value);
                return msg;
            }
            catch (e) {
                if (e.toString() == 'wallet is required') {
                    throw new SpVuexError('TxClient:MsgConfirmBatch:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgConfirmBatch:Create', 'Could not create message.');
                }
            }
        },
        async MsgUpdateCosmosToEth({ rootGetters }, { value }) {
            try {
                const msg = await (await initTxClient(rootGetters)).msgUpdateCosmosToEth(value);
                return msg;
            }
            catch (e) {
                if (e.toString() == 'wallet is required') {
                    throw new SpVuexError('TxClient:MsgUpdateCosmosToEth:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgUpdateCosmosToEth:Create', 'Could not create message.');
                }
            }
        },
        async MsgUpdateOrchestratorAddress({ rootGetters }, { value }) {
            try {
                const msg = await (await initTxClient(rootGetters)).msgUpdateOrchestratorAddress(value);
                return msg;
            }
            catch (e) {
                if (e.toString() == 'wallet is required') {
                    throw new SpVuexError('TxClient:MsgUpdateOrchestratorAddress:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgUpdateOrchestratorAddress:Create', 'Could not create message.');
                }
            }
        },
        async MsgLogicCallExecutedClaim({ rootGetters }, { value }) {
            try {
                const msg = await (await initTxClient(rootGetters)).msgLogicCallExecutedClaim(value);
                return msg;
            }
            catch (e) {
                if (e.toString() == 'wallet is required') {
                    throw new SpVuexError('TxClient:MsgLogicCallExecutedClaim:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgLogicCallExecutedClaim:Create', 'Could not create message.');
                }
            }
        },
        async MsgDeleteOrchestratorAddress({ rootGetters }, { value }) {
            try {
                const msg = await (await initTxClient(rootGetters)).msgDeleteOrchestratorAddress(value);
                return msg;
            }
            catch (e) {
                if (e.toString() == 'wallet is required') {
                    throw new SpVuexError('TxClient:MsgDeleteOrchestratorAddress:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgDeleteOrchestratorAddress:Create', 'Could not create message.');
                }
            }
        },
        async MsgSendToEth({ rootGetters }, { value }) {
            try {
                const msg = await (await initTxClient(rootGetters)).msgSendToEth(value);
                return msg;
            }
            catch (e) {
                if (e.toString() == 'wallet is required') {
                    throw new SpVuexError('TxClient:MsgSendToEth:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgSendToEth:Create', 'Could not create message.');
                }
            }
        },
        async MsgErc20DeployedClaim({ rootGetters }, { value }) {
            try {
                const msg = await (await initTxClient(rootGetters)).msgErc20DeployedClaim(value);
                return msg;
            }
            catch (e) {
                if (e.toString() == 'wallet is required') {
                    throw new SpVuexError('TxClient:MsgErc20DeployedClaim:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgErc20DeployedClaim:Create', 'Could not create message.');
                }
            }
        },
        async MsgCancelSendToEth({ rootGetters }, { value }) {
            try {
                const msg = await (await initTxClient(rootGetters)).msgCancelSendToEth(value);
                return msg;
            }
            catch (e) {
                if (e.toString() == 'wallet is required') {
                    throw new SpVuexError('TxClient:MsgCancelSendToEth:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgCancelSendToEth:Create', 'Could not create message.');
                }
            }
        },
        async MsgRequestBatch({ rootGetters }, { value }) {
            try {
                const msg = await (await initTxClient(rootGetters)).msgRequestBatch(value);
                return msg;
            }
            catch (e) {
                if (e.toString() == 'wallet is required') {
                    throw new SpVuexError('TxClient:MsgRequestBatch:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgRequestBatch:Create', 'Could not create message.');
                }
            }
        },
        async MsgDepositClaim({ rootGetters }, { value }) {
            try {
                const msg = await (await initTxClient(rootGetters)).msgDepositClaim(value);
                return msg;
            }
            catch (e) {
                if (e.toString() == 'wallet is required') {
                    throw new SpVuexError('TxClient:MsgDepositClaim:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgDepositClaim:Create', 'Could not create message.');
                }
            }
        },
    }
};
