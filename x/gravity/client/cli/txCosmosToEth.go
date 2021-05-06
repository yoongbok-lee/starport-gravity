package cli

import (
	"github.com/spf13/cobra"
	"strconv"

	"github.com/althea-net/cosmos-gravity-bridge/gravity/x/gravity/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
)

func CmdCreateCosmosToEth() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-cosmosToEth [sender] [ethDest] [amount] [bridgeFee]",
		Short: "Creates a new cosmosToEth",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) error {
			argsSender := string(args[0])
			argsEthDest := string(args[1])
			argsAmount := string(args[2])
			argsBridgeFee := string(args[3])

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateCosmosToEth(string(argsSender), string(argsEthDest), string(argsAmount), string(argsBridgeFee))
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateCosmosToEth() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-cosmosToEth [id] [sender] [ethDest] [amount] [bridgeFee]",
		Short: "Update a cosmosToEth",
		Args:  cobra.ExactArgs(5),
		RunE: func(cmd *cobra.Command, args []string) error {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			argsSender := string(args[1])
			argsEthDest := string(args[2])
			argsAmount := string(args[3])
			argsBridgeFee := string(args[4])

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateCosmosToEth(clientCtx.GetFromAddress().String(), id, string(argsSender), string(argsEthDest), string(argsAmount), string(argsBridgeFee))
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteCosmosToEth() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-cosmosToEth [id] [sender] [ethDest] [amount] [bridgeFee]",
		Short: "Delete a cosmosToEth by id",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteCosmosToEth(clientCtx.GetFromAddress().String(), id)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
