package keeper

import (
	"fmt"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"

	"github.com/althea-net/cosmos-gravity-bridge/gravity/x/gravity/types"
)

func (k Keeper) GetCosmosOriginatedDenom(ctx sdk.Context, tokenContract string) (string, bool) {
	store := ctx.KVStore(k.storeKey)
	bz := store.Get(types.GetErc20ToDenomKey(tokenContract))

	if bz != nil {
		return string(bz), true
	}
	return "", false
}

func (k Keeper) GetCosmosOriginatedErc20(ctx sdk.Context, denom string) (string, bool) {
	store := ctx.KVStore(k.storeKey)
	bz := store.Get(types.GetDenomToErc20Key(denom))

	if bz != nil {
		return string(bz), true
	}
	return "", false
}

func (k Keeper) setCosmosOriginatedDenomToErc20(ctx sdk.Context, denom string, tokenContract string) {
	store := ctx.KVStore(k.storeKey)
	store.Set(types.GetDenomToErc20Key(denom), []byte(tokenContract))
	store.Set(types.GetErc20ToDenomKey(tokenContract), []byte(denom))
}

// DenomToErc20 returns (bool isCosmosOriginated, string Erc20, err)
// Using this information, you can see if an asset is native to Cosmos or Ethereum,
// and get its corresponding Erc20 address.
// This will return an error if it cant parse the denom as a gravity denom, and then also can't find the denom
// in an index of Erc20 contracts deployed on Ethereum to serve as synthetic Cosmos assets.
func (k Keeper) DenomToErc20Lookup(ctx sdk.Context, denom string) (bool, string, error) {
	// First try parsing the Erc20 out of the denom
	tc1, err := types.GravityDenomToErc20(denom)

	if err != nil {
		// Look up Erc20 contract in index and error if it's not in there.
		tc2, exists := k.GetCosmosOriginatedErc20(ctx, denom)
		if !exists {
			return false, "",
				fmt.Errorf("denom not a gravity voucher coin: %s, and also not in cosmos-originated Erc20 index", err)
		}
		// This is a cosmos-originated asset
		return true, tc2, nil
	}

	// This is an ethereum-originated asset
	return false, tc1, nil
}

// Erc20ToDenom returns (bool isCosmosOriginated, string denom, err)
// Using this information, you can see if an Erc20 address represents an asset is native to Cosmos or Ethereum,
// and get its corresponding denom
func (k Keeper) Erc20ToDenomLookup(ctx sdk.Context, tokenContract string) (bool, string) {
	// First try looking up tokenContract in index
	dn1, exists := k.GetCosmosOriginatedDenom(ctx, tokenContract)
	if exists {
		// It is a cosmos originated asset
		return true, dn1
	}

	// If it is not in there, it is not a cosmos originated token, turn the Erc20 into a gravity denom
	return false, types.GravityDenom(tokenContract)
}

// IterateErc20ToDenom iterates over erc20 to denom relations
func (k Keeper) IterateErc20ToDenom(ctx sdk.Context, cb func([]byte, *types.Erc20ToDenom) bool) {
	prefixStore := prefix.NewStore(ctx.KVStore(k.storeKey), types.Erc20ToDenomKey)
	iter := prefixStore.Iterator(nil, nil)
	defer iter.Close()

	for ; iter.Valid(); iter.Next() {
		erc20ToDenom := types.Erc20ToDenom{
			Erc20: string(iter.Key()),
			Denom: string(iter.Value()),
		}
		// cb returns true to stop early
		if cb(iter.Key(), &erc20ToDenom) {
			break
		}
	}
}
