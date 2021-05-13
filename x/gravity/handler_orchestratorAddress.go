package gravity

import (
	"github.com/althea-net/cosmos-gravity-bridge/gravity/x/gravity/keeper"
	"github.com/althea-net/cosmos-gravity-bridge/gravity/x/gravity/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func handleMsgCreateOrchestratorAddress(ctx sdk.Context, k keeper.Keeper, msg *types.MsgCreateOrchestratorAddress) (*sdk.Result, error) {
	k.CreateOrchestratorAddress(ctx, *msg)

	return &sdk.Result{Events: ctx.EventManager().ABCIEvents()}, nil
}
