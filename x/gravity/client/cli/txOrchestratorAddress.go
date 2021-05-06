package cli

import (
	"github.com/spf13/cobra"
	"strconv"

	"github.com/althea-net/cosmos-gravity-bridge/gravity/x/gravity/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
)

func CmdCreateOrchestratorAddress() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-orchestratorAddress [validator] [orchestrator] [ethAddress]",
		Short: "Creates a new orchestratorAddress",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) error {
			argsValidator := string(args[0])
			argsOrchestrator := string(args[1])
			argsEthAddress := string(args[2])

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateOrchestratorAddress(argsValidator, argsOrchestrator, argsEthAddress)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateOrchestratorAddress() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-orchestratorAddress [id] [validator] [orchestrator] [ethAddress]",
		Short: "Update a orchestratorAddress",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) error {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			argsValidator := string(args[1])
			argsOrchestrator := string(args[2])
			argsEthAddress := string(args[3])

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateOrchestratorAddress(clientCtx.GetFromAddress().String(), id, string(argsValidator), string(argsOrchestrator), string(argsEthAddress))
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteOrchestratorAddress() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-orchestratorAddress [id] [validator] [orchestrator] [ethAddress]",
		Short: "Delete a orchestratorAddress by id",
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

			msg := types.NewMsgDeleteOrchestratorAddress(clientCtx.GetFromAddress().String(), id)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
