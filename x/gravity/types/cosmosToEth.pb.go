// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: gravity/cosmosToEth.proto

package types

import (
	fmt "fmt"
	proto "github.com/gogo/protobuf/proto"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

type CosmosToEth struct {
	Sender    string `protobuf:"bytes,3,opt,name=sender,proto3" json:"sender,omitempty"`
	EthDest   string `protobuf:"bytes,4,opt,name=ethDest,proto3" json:"ethDest,omitempty"`
	Amount    string `protobuf:"bytes,5,opt,name=amount,proto3" json:"amount,omitempty"`
	BridgeFee string `protobuf:"bytes,6,opt,name=bridgeFee,proto3" json:"bridgeFee,omitempty"`
}

func (m *CosmosToEth) Reset()         { *m = CosmosToEth{} }
func (m *CosmosToEth) String() string { return proto.CompactTextString(m) }
func (*CosmosToEth) ProtoMessage()    {}
func (*CosmosToEth) Descriptor() ([]byte, []int) {
	return fileDescriptor_57c585c21a6a203f, []int{0}
}
func (m *CosmosToEth) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *CosmosToEth) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_CosmosToEth.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *CosmosToEth) XXX_Merge(src proto.Message) {
	xxx_messageInfo_CosmosToEth.Merge(m, src)
}
func (m *CosmosToEth) XXX_Size() int {
	return m.Size()
}
func (m *CosmosToEth) XXX_DiscardUnknown() {
	xxx_messageInfo_CosmosToEth.DiscardUnknown(m)
}

var xxx_messageInfo_CosmosToEth proto.InternalMessageInfo

func (m *CosmosToEth) GetSender() string {
	if m != nil {
		return m.Sender
	}
	return ""
}

func (m *CosmosToEth) GetEthDest() string {
	if m != nil {
		return m.EthDest
	}
	return ""
}

func (m *CosmosToEth) GetAmount() string {
	if m != nil {
		return m.Amount
	}
	return ""
}

func (m *CosmosToEth) GetBridgeFee() string {
	if m != nil {
		return m.BridgeFee
	}
	return ""
}

type MsgCreateCosmosToEth struct {
	Sender    string `protobuf:"bytes,2,opt,name=sender,proto3" json:"sender,omitempty"`
	EthDest   string `protobuf:"bytes,3,opt,name=ethDest,proto3" json:"ethDest,omitempty"`
	Amount    string `protobuf:"bytes,4,opt,name=amount,proto3" json:"amount,omitempty"`
	BridgeFee string `protobuf:"bytes,5,opt,name=bridgeFee,proto3" json:"bridgeFee,omitempty"`
}

func (m *MsgCreateCosmosToEth) Reset()         { *m = MsgCreateCosmosToEth{} }
func (m *MsgCreateCosmosToEth) String() string { return proto.CompactTextString(m) }
func (*MsgCreateCosmosToEth) ProtoMessage()    {}
func (*MsgCreateCosmosToEth) Descriptor() ([]byte, []int) {
	return fileDescriptor_57c585c21a6a203f, []int{1}
}
func (m *MsgCreateCosmosToEth) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *MsgCreateCosmosToEth) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_MsgCreateCosmosToEth.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *MsgCreateCosmosToEth) XXX_Merge(src proto.Message) {
	xxx_messageInfo_MsgCreateCosmosToEth.Merge(m, src)
}
func (m *MsgCreateCosmosToEth) XXX_Size() int {
	return m.Size()
}
func (m *MsgCreateCosmosToEth) XXX_DiscardUnknown() {
	xxx_messageInfo_MsgCreateCosmosToEth.DiscardUnknown(m)
}

var xxx_messageInfo_MsgCreateCosmosToEth proto.InternalMessageInfo

func (m *MsgCreateCosmosToEth) GetSender() string {
	if m != nil {
		return m.Sender
	}
	return ""
}

func (m *MsgCreateCosmosToEth) GetEthDest() string {
	if m != nil {
		return m.EthDest
	}
	return ""
}

func (m *MsgCreateCosmosToEth) GetAmount() string {
	if m != nil {
		return m.Amount
	}
	return ""
}

func (m *MsgCreateCosmosToEth) GetBridgeFee() string {
	if m != nil {
		return m.BridgeFee
	}
	return ""
}

type MsgUpdateCosmosToEth struct {
	Creator   string `protobuf:"bytes,1,opt,name=creator,proto3" json:"creator,omitempty"`
	Id        uint64 `protobuf:"varint,2,opt,name=id,proto3" json:"id,omitempty"`
	Sender    string `protobuf:"bytes,3,opt,name=sender,proto3" json:"sender,omitempty"`
	EthDest   string `protobuf:"bytes,4,opt,name=ethDest,proto3" json:"ethDest,omitempty"`
	Amount    string `protobuf:"bytes,5,opt,name=amount,proto3" json:"amount,omitempty"`
	BridgeFee string `protobuf:"bytes,6,opt,name=bridgeFee,proto3" json:"bridgeFee,omitempty"`
}

func (m *MsgUpdateCosmosToEth) Reset()         { *m = MsgUpdateCosmosToEth{} }
func (m *MsgUpdateCosmosToEth) String() string { return proto.CompactTextString(m) }
func (*MsgUpdateCosmosToEth) ProtoMessage()    {}
func (*MsgUpdateCosmosToEth) Descriptor() ([]byte, []int) {
	return fileDescriptor_57c585c21a6a203f, []int{2}
}
func (m *MsgUpdateCosmosToEth) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *MsgUpdateCosmosToEth) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_MsgUpdateCosmosToEth.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *MsgUpdateCosmosToEth) XXX_Merge(src proto.Message) {
	xxx_messageInfo_MsgUpdateCosmosToEth.Merge(m, src)
}
func (m *MsgUpdateCosmosToEth) XXX_Size() int {
	return m.Size()
}
func (m *MsgUpdateCosmosToEth) XXX_DiscardUnknown() {
	xxx_messageInfo_MsgUpdateCosmosToEth.DiscardUnknown(m)
}

var xxx_messageInfo_MsgUpdateCosmosToEth proto.InternalMessageInfo

func (m *MsgUpdateCosmosToEth) GetCreator() string {
	if m != nil {
		return m.Creator
	}
	return ""
}

func (m *MsgUpdateCosmosToEth) GetId() uint64 {
	if m != nil {
		return m.Id
	}
	return 0
}

func (m *MsgUpdateCosmosToEth) GetSender() string {
	if m != nil {
		return m.Sender
	}
	return ""
}

func (m *MsgUpdateCosmosToEth) GetEthDest() string {
	if m != nil {
		return m.EthDest
	}
	return ""
}

func (m *MsgUpdateCosmosToEth) GetAmount() string {
	if m != nil {
		return m.Amount
	}
	return ""
}

func (m *MsgUpdateCosmosToEth) GetBridgeFee() string {
	if m != nil {
		return m.BridgeFee
	}
	return ""
}

type MsgDeleteCosmosToEth struct {
	Creator string `protobuf:"bytes,1,opt,name=creator,proto3" json:"creator,omitempty"`
	Id      uint64 `protobuf:"varint,2,opt,name=id,proto3" json:"id,omitempty"`
}

func (m *MsgDeleteCosmosToEth) Reset()         { *m = MsgDeleteCosmosToEth{} }
func (m *MsgDeleteCosmosToEth) String() string { return proto.CompactTextString(m) }
func (*MsgDeleteCosmosToEth) ProtoMessage()    {}
func (*MsgDeleteCosmosToEth) Descriptor() ([]byte, []int) {
	return fileDescriptor_57c585c21a6a203f, []int{3}
}
func (m *MsgDeleteCosmosToEth) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *MsgDeleteCosmosToEth) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_MsgDeleteCosmosToEth.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *MsgDeleteCosmosToEth) XXX_Merge(src proto.Message) {
	xxx_messageInfo_MsgDeleteCosmosToEth.Merge(m, src)
}
func (m *MsgDeleteCosmosToEth) XXX_Size() int {
	return m.Size()
}
func (m *MsgDeleteCosmosToEth) XXX_DiscardUnknown() {
	xxx_messageInfo_MsgDeleteCosmosToEth.DiscardUnknown(m)
}

var xxx_messageInfo_MsgDeleteCosmosToEth proto.InternalMessageInfo

func (m *MsgDeleteCosmosToEth) GetCreator() string {
	if m != nil {
		return m.Creator
	}
	return ""
}

func (m *MsgDeleteCosmosToEth) GetId() uint64 {
	if m != nil {
		return m.Id
	}
	return 0
}

func init() {
	proto.RegisterType((*CosmosToEth)(nil), "gravity.v1.CosmosToEth")
	proto.RegisterType((*MsgCreateCosmosToEth)(nil), "gravity.v1.MsgCreateCosmosToEth")
	proto.RegisterType((*MsgUpdateCosmosToEth)(nil), "gravity.v1.MsgUpdateCosmosToEth")
	proto.RegisterType((*MsgDeleteCosmosToEth)(nil), "gravity.v1.MsgDeleteCosmosToEth")
}

func init() { proto.RegisterFile("gravity/cosmosToEth.proto", fileDescriptor_57c585c21a6a203f) }

var fileDescriptor_57c585c21a6a203f = []byte{
	// 288 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x92, 0x4c, 0x2f, 0x4a, 0x2c,
	0xcb, 0x2c, 0xa9, 0xd4, 0x4f, 0xce, 0x2f, 0xce, 0xcd, 0x2f, 0x0e, 0xc9, 0x77, 0x2d, 0xc9, 0xd0,
	0x2b, 0x28, 0xca, 0x2f, 0xc9, 0x17, 0xe2, 0x82, 0x4a, 0xe9, 0x95, 0x19, 0x2a, 0x95, 0x72, 0x71,
	0x3b, 0x23, 0x14, 0x08, 0x89, 0x71, 0xb1, 0x15, 0xa7, 0xe6, 0xa5, 0xa4, 0x16, 0x49, 0x30, 0x2b,
	0x30, 0x6a, 0x70, 0x06, 0x41, 0x79, 0x42, 0x12, 0x5c, 0xec, 0xa9, 0x25, 0x19, 0x2e, 0xa9, 0xc5,
	0x25, 0x12, 0x2c, 0x60, 0x09, 0x18, 0x17, 0xa4, 0x23, 0x31, 0x37, 0xbf, 0x34, 0xaf, 0x44, 0x82,
	0x15, 0xa2, 0x03, 0xc2, 0x13, 0x92, 0xe1, 0xe2, 0x4c, 0x2a, 0xca, 0x4c, 0x49, 0x4f, 0x75, 0x4b,
	0x4d, 0x95, 0x60, 0x03, 0x4b, 0x21, 0x04, 0x94, 0xea, 0xb8, 0x44, 0x7c, 0x8b, 0xd3, 0x9d, 0x8b,
	0x52, 0x13, 0x4b, 0x52, 0xb1, 0xdb, 0xcf, 0x84, 0xcb, 0x7e, 0x66, 0x5c, 0xf6, 0xb3, 0xe0, 0xb6,
	0x9f, 0x15, 0xdd, 0xfe, 0x15, 0x8c, 0x60, 0x07, 0x84, 0x16, 0xa4, 0xa0, 0x39, 0x40, 0x82, 0x8b,
	0x3d, 0x19, 0xe4, 0xaa, 0xfc, 0x22, 0x09, 0x46, 0x88, 0x45, 0x50, 0xae, 0x10, 0x1f, 0x17, 0x53,
	0x66, 0x0a, 0xd8, 0x59, 0x2c, 0x41, 0x4c, 0x99, 0x29, 0x74, 0x0b, 0x2a, 0x07, 0xb0, 0x4b, 0x5d,
	0x52, 0x73, 0x52, 0xc9, 0x74, 0xa9, 0x53, 0xec, 0x89, 0x47, 0x72, 0x8c, 0x17, 0x1e, 0xc9, 0x31,
	0x3e, 0x78, 0x24, 0xc7, 0x38, 0xe1, 0xb1, 0x1c, 0xc3, 0x85, 0xc7, 0x72, 0x0c, 0x37, 0x1e, 0xcb,
	0x31, 0x44, 0x39, 0xa7, 0x67, 0x96, 0x64, 0x94, 0x26, 0xe9, 0x25, 0xe7, 0xe7, 0xea, 0x27, 0xe6,
	0x94, 0x64, 0xa4, 0x26, 0xea, 0xe6, 0xa5, 0x96, 0x40, 0x93, 0x8c, 0x2e, 0x34, 0x99, 0xe8, 0x42,
	0xdc, 0xa2, 0x0f, 0x4b, 0x50, 0x15, 0x70, 0x56, 0x49, 0x65, 0x41, 0x6a, 0x71, 0x12, 0x1b, 0x38,
	0x55, 0x19, 0x03, 0x02, 0x00, 0x00, 0xff, 0xff, 0x7a, 0x4a, 0x58, 0xc1, 0x72, 0x02, 0x00, 0x00,
}

func (m *CosmosToEth) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *CosmosToEth) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *CosmosToEth) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.BridgeFee) > 0 {
		i -= len(m.BridgeFee)
		copy(dAtA[i:], m.BridgeFee)
		i = encodeVarintCosmosToEth(dAtA, i, uint64(len(m.BridgeFee)))
		i--
		dAtA[i] = 0x32
	}
	if len(m.Amount) > 0 {
		i -= len(m.Amount)
		copy(dAtA[i:], m.Amount)
		i = encodeVarintCosmosToEth(dAtA, i, uint64(len(m.Amount)))
		i--
		dAtA[i] = 0x2a
	}
	if len(m.EthDest) > 0 {
		i -= len(m.EthDest)
		copy(dAtA[i:], m.EthDest)
		i = encodeVarintCosmosToEth(dAtA, i, uint64(len(m.EthDest)))
		i--
		dAtA[i] = 0x22
	}
	if len(m.Sender) > 0 {
		i -= len(m.Sender)
		copy(dAtA[i:], m.Sender)
		i = encodeVarintCosmosToEth(dAtA, i, uint64(len(m.Sender)))
		i--
		dAtA[i] = 0x1a
	}
	return len(dAtA) - i, nil
}

func (m *MsgCreateCosmosToEth) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *MsgCreateCosmosToEth) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *MsgCreateCosmosToEth) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.BridgeFee) > 0 {
		i -= len(m.BridgeFee)
		copy(dAtA[i:], m.BridgeFee)
		i = encodeVarintCosmosToEth(dAtA, i, uint64(len(m.BridgeFee)))
		i--
		dAtA[i] = 0x2a
	}
	if len(m.Amount) > 0 {
		i -= len(m.Amount)
		copy(dAtA[i:], m.Amount)
		i = encodeVarintCosmosToEth(dAtA, i, uint64(len(m.Amount)))
		i--
		dAtA[i] = 0x22
	}
	if len(m.EthDest) > 0 {
		i -= len(m.EthDest)
		copy(dAtA[i:], m.EthDest)
		i = encodeVarintCosmosToEth(dAtA, i, uint64(len(m.EthDest)))
		i--
		dAtA[i] = 0x1a
	}
	if len(m.Sender) > 0 {
		i -= len(m.Sender)
		copy(dAtA[i:], m.Sender)
		i = encodeVarintCosmosToEth(dAtA, i, uint64(len(m.Sender)))
		i--
		dAtA[i] = 0x12
	}
	return len(dAtA) - i, nil
}

func (m *MsgUpdateCosmosToEth) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *MsgUpdateCosmosToEth) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *MsgUpdateCosmosToEth) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.BridgeFee) > 0 {
		i -= len(m.BridgeFee)
		copy(dAtA[i:], m.BridgeFee)
		i = encodeVarintCosmosToEth(dAtA, i, uint64(len(m.BridgeFee)))
		i--
		dAtA[i] = 0x32
	}
	if len(m.Amount) > 0 {
		i -= len(m.Amount)
		copy(dAtA[i:], m.Amount)
		i = encodeVarintCosmosToEth(dAtA, i, uint64(len(m.Amount)))
		i--
		dAtA[i] = 0x2a
	}
	if len(m.EthDest) > 0 {
		i -= len(m.EthDest)
		copy(dAtA[i:], m.EthDest)
		i = encodeVarintCosmosToEth(dAtA, i, uint64(len(m.EthDest)))
		i--
		dAtA[i] = 0x22
	}
	if len(m.Sender) > 0 {
		i -= len(m.Sender)
		copy(dAtA[i:], m.Sender)
		i = encodeVarintCosmosToEth(dAtA, i, uint64(len(m.Sender)))
		i--
		dAtA[i] = 0x1a
	}
	if m.Id != 0 {
		i = encodeVarintCosmosToEth(dAtA, i, uint64(m.Id))
		i--
		dAtA[i] = 0x10
	}
	if len(m.Creator) > 0 {
		i -= len(m.Creator)
		copy(dAtA[i:], m.Creator)
		i = encodeVarintCosmosToEth(dAtA, i, uint64(len(m.Creator)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *MsgDeleteCosmosToEth) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *MsgDeleteCosmosToEth) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *MsgDeleteCosmosToEth) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.Id != 0 {
		i = encodeVarintCosmosToEth(dAtA, i, uint64(m.Id))
		i--
		dAtA[i] = 0x10
	}
	if len(m.Creator) > 0 {
		i -= len(m.Creator)
		copy(dAtA[i:], m.Creator)
		i = encodeVarintCosmosToEth(dAtA, i, uint64(len(m.Creator)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintCosmosToEth(dAtA []byte, offset int, v uint64) int {
	offset -= sovCosmosToEth(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *CosmosToEth) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Sender)
	if l > 0 {
		n += 1 + l + sovCosmosToEth(uint64(l))
	}
	l = len(m.EthDest)
	if l > 0 {
		n += 1 + l + sovCosmosToEth(uint64(l))
	}
	l = len(m.Amount)
	if l > 0 {
		n += 1 + l + sovCosmosToEth(uint64(l))
	}
	l = len(m.BridgeFee)
	if l > 0 {
		n += 1 + l + sovCosmosToEth(uint64(l))
	}
	return n
}

func (m *MsgCreateCosmosToEth) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Sender)
	if l > 0 {
		n += 1 + l + sovCosmosToEth(uint64(l))
	}
	l = len(m.EthDest)
	if l > 0 {
		n += 1 + l + sovCosmosToEth(uint64(l))
	}
	l = len(m.Amount)
	if l > 0 {
		n += 1 + l + sovCosmosToEth(uint64(l))
	}
	l = len(m.BridgeFee)
	if l > 0 {
		n += 1 + l + sovCosmosToEth(uint64(l))
	}
	return n
}

func (m *MsgUpdateCosmosToEth) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Creator)
	if l > 0 {
		n += 1 + l + sovCosmosToEth(uint64(l))
	}
	if m.Id != 0 {
		n += 1 + sovCosmosToEth(uint64(m.Id))
	}
	l = len(m.Sender)
	if l > 0 {
		n += 1 + l + sovCosmosToEth(uint64(l))
	}
	l = len(m.EthDest)
	if l > 0 {
		n += 1 + l + sovCosmosToEth(uint64(l))
	}
	l = len(m.Amount)
	if l > 0 {
		n += 1 + l + sovCosmosToEth(uint64(l))
	}
	l = len(m.BridgeFee)
	if l > 0 {
		n += 1 + l + sovCosmosToEth(uint64(l))
	}
	return n
}

func (m *MsgDeleteCosmosToEth) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Creator)
	if l > 0 {
		n += 1 + l + sovCosmosToEth(uint64(l))
	}
	if m.Id != 0 {
		n += 1 + sovCosmosToEth(uint64(m.Id))
	}
	return n
}

func sovCosmosToEth(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozCosmosToEth(x uint64) (n int) {
	return sovCosmosToEth(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *CosmosToEth) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowCosmosToEth
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: CosmosToEth: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: CosmosToEth: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Sender", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCosmosToEth
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthCosmosToEth
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthCosmosToEth
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Sender = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field EthDest", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCosmosToEth
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthCosmosToEth
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthCosmosToEth
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.EthDest = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 5:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Amount", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCosmosToEth
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthCosmosToEth
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthCosmosToEth
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Amount = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 6:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field BridgeFee", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCosmosToEth
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthCosmosToEth
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthCosmosToEth
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.BridgeFee = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipCosmosToEth(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if skippy < 0 {
				return ErrInvalidLengthCosmosToEth
			}
			if (iNdEx + skippy) < 0 {
				return ErrInvalidLengthCosmosToEth
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *MsgCreateCosmosToEth) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowCosmosToEth
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: MsgCreateCosmosToEth: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: MsgCreateCosmosToEth: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Sender", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCosmosToEth
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthCosmosToEth
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthCosmosToEth
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Sender = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field EthDest", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCosmosToEth
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthCosmosToEth
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthCosmosToEth
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.EthDest = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Amount", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCosmosToEth
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthCosmosToEth
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthCosmosToEth
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Amount = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 5:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field BridgeFee", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCosmosToEth
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthCosmosToEth
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthCosmosToEth
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.BridgeFee = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipCosmosToEth(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if skippy < 0 {
				return ErrInvalidLengthCosmosToEth
			}
			if (iNdEx + skippy) < 0 {
				return ErrInvalidLengthCosmosToEth
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *MsgUpdateCosmosToEth) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowCosmosToEth
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: MsgUpdateCosmosToEth: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: MsgUpdateCosmosToEth: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Creator", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCosmosToEth
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthCosmosToEth
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthCosmosToEth
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Creator = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Id", wireType)
			}
			m.Id = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCosmosToEth
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Id |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Sender", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCosmosToEth
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthCosmosToEth
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthCosmosToEth
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Sender = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field EthDest", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCosmosToEth
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthCosmosToEth
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthCosmosToEth
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.EthDest = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 5:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Amount", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCosmosToEth
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthCosmosToEth
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthCosmosToEth
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Amount = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 6:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field BridgeFee", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCosmosToEth
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthCosmosToEth
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthCosmosToEth
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.BridgeFee = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipCosmosToEth(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if skippy < 0 {
				return ErrInvalidLengthCosmosToEth
			}
			if (iNdEx + skippy) < 0 {
				return ErrInvalidLengthCosmosToEth
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *MsgDeleteCosmosToEth) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowCosmosToEth
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: MsgDeleteCosmosToEth: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: MsgDeleteCosmosToEth: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Creator", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCosmosToEth
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthCosmosToEth
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthCosmosToEth
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Creator = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Id", wireType)
			}
			m.Id = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCosmosToEth
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Id |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		default:
			iNdEx = preIndex
			skippy, err := skipCosmosToEth(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if skippy < 0 {
				return ErrInvalidLengthCosmosToEth
			}
			if (iNdEx + skippy) < 0 {
				return ErrInvalidLengthCosmosToEth
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipCosmosToEth(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowCosmosToEth
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowCosmosToEth
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowCosmosToEth
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthCosmosToEth
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupCosmosToEth
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthCosmosToEth
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthCosmosToEth        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowCosmosToEth          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupCosmosToEth = fmt.Errorf("proto: unexpected end of group")
)
