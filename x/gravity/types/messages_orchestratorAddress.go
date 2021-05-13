package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateOrchestratorAddress{}

func NewMsgCreateOrchestratorAddress(validator string, orchestrator string, ethAddress string) *MsgCreateOrchestratorAddress {
	return &MsgCreateOrchestratorAddress{
		Validator:    validator,
		Orchestrator: orchestrator,
		EthAddress:   ethAddress,
	}
}

func (msg *MsgCreateOrchestratorAddress) Route() string {
	return RouterKey
}

func (msg *MsgCreateOrchestratorAddress) Type() string {
	return "CreateOrchestratorAddress"
}

func (msg *MsgCreateOrchestratorAddress) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Orchestrator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateOrchestratorAddress) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateOrchestratorAddress) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Orchestrator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateOrchestratorAddress{}

func NewMsgUpdateOrchestratorAddress(creator string, id uint64, validator string, orchestrator string, ethAddress string) *MsgUpdateOrchestratorAddress {
	return &MsgUpdateOrchestratorAddress{
		Id:           id,
		Creator:      creator,
		Validator:    validator,
		Orchestrator: orchestrator,
		EthAddress:   ethAddress,
	}
}

func (msg *MsgUpdateOrchestratorAddress) Route() string {
	return RouterKey
}

func (msg *MsgUpdateOrchestratorAddress) Type() string {
	return "UpdateOrchestratorAddress"
}

func (msg *MsgUpdateOrchestratorAddress) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateOrchestratorAddress) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateOrchestratorAddress) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgCreateOrchestratorAddress{}

func NewMsgDeleteOrchestratorAddress(creator string, id uint64) *MsgDeleteOrchestratorAddress {
	return &MsgDeleteOrchestratorAddress{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteOrchestratorAddress) Route() string {
	return RouterKey
}

func (msg *MsgDeleteOrchestratorAddress) Type() string {
	return "DeleteOrchestratorAddress"
}

func (msg *MsgDeleteOrchestratorAddress) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteOrchestratorAddress) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteOrchestratorAddress) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
