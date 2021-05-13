package gravity

import (
	"fmt"
	"github.com/althea-net/cosmos-gravity-bridge/gravity/x/gravity/keeper"
	"github.com/althea-net/cosmos-gravity-bridge/gravity/x/gravity/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func handleMsgCreateCosmosToEth(ctx sdk.Context, k keeper.Keeper, msg *types.MsgCreateCosmosToEth) (*sdk.Result, error) {
	k.CreateCosmosToEth(ctx, *msg)

	return &sdk.Result{Events: ctx.EventManager().ABCIEvents()}, nil
}

func handleMsgUpdateCosmosToEth(ctx sdk.Context, k keeper.Keeper, msg *types.MsgUpdateCosmosToEth) (*sdk.Result, error) {
	var cosmosToEth = types.CosmosToEth{
		Sender:    msg.Sender,
		EthDest:   msg.EthDest,
		Amount:    msg.Amount,
		BridgeFee: msg.BridgeFee,
	}

	// Checks that the element exists
	if !k.HasCosmosToEth(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != k.GetCosmosToEthOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetCosmosToEth(ctx, cosmosToEth)

	return &sdk.Result{Events: ctx.EventManager().ABCIEvents()}, nil
}

func handleMsgDeleteCosmosToEth(ctx sdk.Context, k keeper.Keeper, msg *types.MsgDeleteCosmosToEth) (*sdk.Result, error) {
	if !k.HasCosmosToEth(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}
	if msg.Creator != k.GetCosmosToEthOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.DeleteCosmosToEth(ctx, msg.Id)

	return &sdk.Result{Events: ctx.EventManager().ABCIEvents()}, nil
}
