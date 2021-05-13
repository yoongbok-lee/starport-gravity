package rest

import (
	"net/http"
	"strconv"

	"github.com/althea-net/cosmos-gravity-bridge/gravity/x/gravity/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/tx"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/rest"
	"github.com/gorilla/mux"
)

type createCosmosToEthRequest struct {
	BaseReq   rest.BaseReq `json:"base_req"`
	Creator   string       `json:"creator"`
	Sender    string       `json:"sender"`
	EthDest   string       `json:"ethDest"`
	Amount    string       `json:"amount"`
	BridgeFee string       `json:"bridgeFee"`
}

func createCosmosToEthHandler(clientCtx client.Context) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		var req createCosmosToEthRequest
		if !rest.ReadRESTReq(w, r, clientCtx.LegacyAmino, &req) {
			rest.WriteErrorResponse(w, http.StatusBadRequest, "failed to parse request")
			return
		}

		baseReq := req.BaseReq.Sanitize()
		if !baseReq.ValidateBasic(w) {
			return
		}

		_, err := sdk.AccAddressFromBech32(req.Creator)
		if err != nil {
			rest.WriteErrorResponse(w, http.StatusBadRequest, err.Error())
			return
		}

		parsedSender := req.Sender

		parsedEthDest := req.EthDest

		parsedAmount := req.Amount

		parsedBridgeFee := req.BridgeFee

		msg := types.NewMsgCreateCosmosToEth(
			parsedSender,
			parsedEthDest,
			parsedAmount,
			parsedBridgeFee,
		)

		tx.WriteGeneratedTxResponse(clientCtx, w, req.BaseReq, msg)
	}
}

type updateCosmosToEthRequest struct {
	BaseReq   rest.BaseReq `json:"base_req"`
	Creator   string       `json:"creator"`
	Sender    string       `json:"sender"`
	EthDest   string       `json:"ethDest"`
	Amount    string       `json:"amount"`
	BridgeFee string       `json:"bridgeFee"`
}

func updateCosmosToEthHandler(clientCtx client.Context) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		id, err := strconv.ParseUint(mux.Vars(r)["id"], 10, 64)
		if err != nil {
			return
		}

		var req updateCosmosToEthRequest
		if !rest.ReadRESTReq(w, r, clientCtx.LegacyAmino, &req) {
			rest.WriteErrorResponse(w, http.StatusBadRequest, "failed to parse request")
			return
		}

		baseReq := req.BaseReq.Sanitize()
		if !baseReq.ValidateBasic(w) {
			return
		}

		_, err = sdk.AccAddressFromBech32(req.Creator)
		if err != nil {
			rest.WriteErrorResponse(w, http.StatusBadRequest, err.Error())
			return
		}

		parsedSender := req.Sender

		parsedEthDest := req.EthDest

		parsedAmount := req.Amount

		parsedBridgeFee := req.BridgeFee

		msg := types.NewMsgUpdateCosmosToEth(
			req.Creator,
			id,
			parsedSender,
			parsedEthDest,
			parsedAmount,
			parsedBridgeFee,
		)

		tx.WriteGeneratedTxResponse(clientCtx, w, req.BaseReq, msg)
	}
}

type deleteCosmosToEthRequest struct {
	BaseReq rest.BaseReq `json:"base_req"`
	Creator string       `json:"creator"`
}

func deleteCosmosToEthHandler(clientCtx client.Context) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		id, err := strconv.ParseUint(mux.Vars(r)["id"], 10, 64)
		if err != nil {
			return
		}

		var req deleteCosmosToEthRequest
		if !rest.ReadRESTReq(w, r, clientCtx.LegacyAmino, &req) {
			rest.WriteErrorResponse(w, http.StatusBadRequest, "failed to parse request")
			return
		}

		baseReq := req.BaseReq.Sanitize()
		if !baseReq.ValidateBasic(w) {
			return
		}

		_, err = sdk.AccAddressFromBech32(req.Creator)
		if err != nil {
			rest.WriteErrorResponse(w, http.StatusBadRequest, err.Error())
			return
		}

		msg := types.NewMsgDeleteCosmosToEth(
			req.Creator,
			id,
		)

		tx.WriteGeneratedTxResponse(clientCtx, w, req.BaseReq, msg)
	}
}
