package keeper

import (
	"encoding/binary"
	"github.com/althea-net/cosmos-gravity-bridge/gravity/x/gravity/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"strconv"
)

// GetOrchestratorAddressCount get the total number of orchestratorAddress
func (k Keeper) GetOrchestratorAddressCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.OrchestratorAddressCountKey))
	byteKey := types.KeyPrefix(types.OrchestratorAddressCountKey)
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

// SetOrchestratorAddressCount set the total number of orchestratorAddress
func (k Keeper) SetOrchestratorAddressCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.OrchestratorAddressCountKey))
	byteKey := types.KeyPrefix(types.OrchestratorAddressCountKey)
	bz := []byte(strconv.FormatUint(count, 10))
	store.Set(byteKey, bz)
}

// CreateOrchestratorAddress creates a orchestratorAddress with a new id and update the count
func (k Keeper) CreateOrchestratorAddress(ctx sdk.Context, msg types.MsgCreateOrchestratorAddress) {
	valAddr, _ := sdk.ValAddressFromBech32(msg.Validator)
	orch, _ := sdk.AccAddressFromBech32(msg.Orchestrator)
	k.SetOrchestratorValidator(ctx, valAddr, orch)
	k.SetEthAddressForValidator(ctx, valAddr, msg.EthAddress)
}

// GetOrchestratorAddress returns a orchestratorAddress from its id
func (k Keeper) GetOrchestratorAddress(ctx sdk.Context, id uint64) types.OrchestratorAddress {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.OrchestratorAddressKey))
	var orchestratorAddress types.OrchestratorAddress
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetOrchestratorAddressIDBytes(id)), &orchestratorAddress)
	return orchestratorAddress
}

// HasOrchestratorAddress checks if the orchestratorAddress exists
func (k Keeper) HasOrchestratorAddress(ctx sdk.Context, id uint64) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.OrchestratorAddressKey))
	return store.Has(GetOrchestratorAddressIDBytes(id))
}

// DeleteOrchestratorAddress deletes a orchestratorAddress
func (k Keeper) DeleteOrchestratorAddress(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.OrchestratorAddressKey))
	store.Delete(GetOrchestratorAddressIDBytes(id))
}

// GetAllOrchestratorAddress returns all orchestratorAddress
func (k Keeper) GetAllOrchestratorAddress(ctx sdk.Context) (msgs []types.OrchestratorAddress) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.OrchestratorAddressKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var msg types.OrchestratorAddress
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &msg)
		msgs = append(msgs, msg)
	}

	return
}

// GetOrchestratorAddressIDBytes returns the byte representation of the ID
func GetOrchestratorAddressIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetOrchestratorAddressIDFromBytes returns ID in uint64 format from a byte array
func GetOrchestratorAddressIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
