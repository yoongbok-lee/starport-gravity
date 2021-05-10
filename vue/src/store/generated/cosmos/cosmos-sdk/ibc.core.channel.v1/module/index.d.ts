import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgChannelCloseConfirm } from "./types/ibc/core/channel/v1/tx";
import { MsgChannelOpenTry } from "./types/ibc/core/channel/v1/tx";
import { MsgRecvPacket } from "./types/ibc/core/channel/v1/tx";
import { MsgTimeoutOnClose } from "./types/ibc/core/channel/v1/tx";
import { MsgChannelCloseInit } from "./types/ibc/core/channel/v1/tx";
import { MsgChannelOpenAck } from "./types/ibc/core/channel/v1/tx";
import { MsgChannelOpenConfirm } from "./types/ibc/core/channel/v1/tx";
import { MsgChannelOpenInit } from "./types/ibc/core/channel/v1/tx";
import { MsgTimeout } from "./types/ibc/core/channel/v1/tx";
import { MsgAcknowledgement } from "./types/ibc/core/channel/v1/tx";
interface TxClientOptions {
    addr: string;
}
interface SignAndBroadcastOptions {
    fee: StdFee;
    memo?: string;
}
declare const txClient: (wallet: OfflineSigner, { addr: addr }?: TxClientOptions) => Promise<{
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions) => Promise<import("@cosmjs/stargate").BroadcastTxResponse>;
    msgChannelCloseConfirm: (data: MsgChannelCloseConfirm) => EncodeObject;
    msgChannelOpenTry: (data: MsgChannelOpenTry) => EncodeObject;
    msgRecvPacket: (data: MsgRecvPacket) => EncodeObject;
    msgTimeoutOnClose: (data: MsgTimeoutOnClose) => EncodeObject;
    msgChannelCloseInit: (data: MsgChannelCloseInit) => EncodeObject;
    msgChannelOpenAck: (data: MsgChannelOpenAck) => EncodeObject;
    msgChannelOpenConfirm: (data: MsgChannelOpenConfirm) => EncodeObject;
    msgChannelOpenInit: (data: MsgChannelOpenInit) => EncodeObject;
    msgTimeout: (data: MsgTimeout) => EncodeObject;
    msgAcknowledgement: (data: MsgAcknowledgement) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
