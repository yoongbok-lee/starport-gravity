package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateCosmosToEth{}

func NewMsgCreateCosmosToEth(sender string, ethDest string, amount string, bridgeFee string) *MsgCreateCosmosToEth {
	return &MsgCreateCosmosToEth{
		Sender:    sender,
		EthDest:   ethDest,
		Amount:    amount,
		BridgeFee: bridgeFee,
	}
}

func (msg *MsgCreateCosmosToEth) Route() string {
	return RouterKey
}

func (msg *MsgCreateCosmosToEth) Type() string {
	return "CreateCosmosToEth"
}

func (msg *MsgCreateCosmosToEth) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Sender)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateCosmosToEth) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateCosmosToEth) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Sender)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateCosmosToEth{}

func NewMsgUpdateCosmosToEth(creator string, id uint64, sender string, ethDest string, amount string, bridgeFee string) *MsgUpdateCosmosToEth {
	return &MsgUpdateCosmosToEth{
		Id:        id,
		Creator:   creator,
		Sender:    sender,
		EthDest:   ethDest,
		Amount:    amount,
		BridgeFee: bridgeFee,
	}
}

func (msg *MsgUpdateCosmosToEth) Route() string {
	return RouterKey
}

func (msg *MsgUpdateCosmosToEth) Type() string {
	return "UpdateCosmosToEth"
}

func (msg *MsgUpdateCosmosToEth) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateCosmosToEth) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateCosmosToEth) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgCreateCosmosToEth{}

func NewMsgDeleteCosmosToEth(creator string, id uint64) *MsgDeleteCosmosToEth {
	return &MsgDeleteCosmosToEth{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteCosmosToEth) Route() string {
	return RouterKey
}

func (msg *MsgDeleteCosmosToEth) Type() string {
	return "DeleteCosmosToEth"
}

func (msg *MsgDeleteCosmosToEth) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteCosmosToEth) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteCosmosToEth) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
