package keeper

import (
	"encoding/binary"
	"github.com/althea-net/cosmos-gravity-bridge/gravity/x/gravity/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"strconv"
)

// GetCosmosToEthCount get the total number of cosmosToEth
func (k Keeper) GetCosmosToEthCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CosmosToEthCountKey))
	byteKey := types.KeyPrefix(types.CosmosToEthCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	count, err := strconv.ParseUint(string(bz), 10, 64)
	if err != nil {
		// Panic because the count should be always formattable to int64
		panic("cannot decode count")
	}

	return count
}

// SetCosmosToEthCount set the total number of cosmosToEth
func (k Keeper) SetCosmosToEthCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CosmosToEthCountKey))
	byteKey := types.KeyPrefix(types.CosmosToEthCountKey)
	bz := []byte(strconv.FormatUint(count, 10))
	store.Set(byteKey, bz)
}

// CreateCosmosToEth creates a cosmosToEth with a new id and update the count
func (k Keeper) CreateCosmosToEth(ctx sdk.Context, msg types.MsgCreateCosmosToEth) {
	// Create the cosmosToEth
	count := k.GetCosmosToEthCount(ctx)
	// Update cosmosToEth count
	k.SetCosmosToEthCount(ctx, count+1)
}

// SetCosmosToEth set a specific cosmosToEth in the store
func (k Keeper) SetCosmosToEth(ctx sdk.Context, cosmosToEth types.CosmosToEth) {
}

// GetCosmosToEth returns a cosmosToEth from its id
func (k Keeper) GetCosmosToEth(ctx sdk.Context, id uint64) types.CosmosToEth {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CosmosToEthKey))
	var cosmosToEth types.CosmosToEth
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetCosmosToEthIDBytes(id)), &cosmosToEth)
	return cosmosToEth
}

// HasCosmosToEth checks if the cosmosToEth exists
func (k Keeper) HasCosmosToEth(ctx sdk.Context, id uint64) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CosmosToEthKey))
	return store.Has(GetCosmosToEthIDBytes(id))
}

// GetCosmosToEthOwner returns the creator of the cosmosToEth
func (k Keeper) GetCosmosToEthOwner(ctx sdk.Context, id uint64) string {
	return ""
}

// DeleteCosmosToEth deletes a cosmosToEth
func (k Keeper) DeleteCosmosToEth(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CosmosToEthKey))
	store.Delete(GetCosmosToEthIDBytes(id))
}

// GetAllCosmosToEth returns all cosmosToEth
func (k Keeper) GetAllCosmosToEth(ctx sdk.Context) (msgs []types.CosmosToEth) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CosmosToEthKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var msg types.CosmosToEth
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &msg)
		msgs = append(msgs, msg)
	}

	return
}

// GetCosmosToEthIDBytes returns the byte representation of the ID
func GetCosmosToEthIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetCosmosToEthIDFromBytes returns ID in uint64 format from a byte array
func GetCosmosToEthIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
