// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: gravity/attestation.proto

package types

import (
	fmt "fmt"
	types "github.com/cosmos/cosmos-sdk/codec/types"
	github_com_cosmos_cosmos_sdk_types "github.com/cosmos/cosmos-sdk/types"
	_ "github.com/gogo/protobuf/gogoproto"
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

// ClaimType is the cosmos type of an event from the counterpart chain that can
// be handled
type ClaimType int32

const (
	CLAIM_TYPE_UNSPECIFIED         ClaimType = 0
	CLAIM_TYPE_DEPOSIT             ClaimType = 1
	CLAIM_TYPE_WITHDRAW            ClaimType = 2
	CLAIM_TYPE_Erc20_DEPLOYED      ClaimType = 3
	CLAIM_TYPE_LOGIC_CALL_EXECUTED ClaimType = 4
	CLAIM_TYPE_VALSET_UPDATED      ClaimType = 5
)

var ClaimType_name = map[int32]string{
	0: "CLAIM_TYPE_UNSPECIFIED",
	1: "CLAIM_TYPE_DEPOSIT",
	2: "CLAIM_TYPE_WITHDRAW",
	3: "CLAIM_TYPE_Erc20_DEPLOYED",
	4: "CLAIM_TYPE_LOGIC_CALL_EXECUTED",
	5: "CLAIM_TYPE_VALSET_UPDATED",
}

var ClaimType_value = map[string]int32{
	"CLAIM_TYPE_UNSPECIFIED":         0,
	"CLAIM_TYPE_DEPOSIT":             1,
	"CLAIM_TYPE_WITHDRAW":            2,
	"CLAIM_TYPE_Erc20_DEPLOYED":      3,
	"CLAIM_TYPE_LOGIC_CALL_EXECUTED": 4,
	"CLAIM_TYPE_VALSET_UPDATED":      5,
}

func (x ClaimType) String() string {
	return proto.EnumName(ClaimType_name, int32(x))
}

func (ClaimType) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_db4e0ed2d6c6c3a7, []int{0}
}

// Attestation is an aggregate of `claims` that eventually becomes `observed` by
// all orchestrators
// EVENT_NONCE:
// EventNonce a nonce provided by the gravity contract that is unique per event fired
// These event nonces must be relayed in order. This is a correctness issue,
// if relaying out of order transaction replay attacks become possible
// OBSERVED:
// Observed indicates that >67% of validators have attested to the event,
// and that the event should be executed by the gravity state machine
//
// The actual content of the claims is passed in with the transaction making the claim
// and then passed through the call stack alongside the attestation while it is processed
// the key in which the attestation is stored is keyed on the exact details of the claim
// but there is no reason to store those exact details becuause the next message sender
// will kindly provide you with them.
type Attestation struct {
	Observed bool       `protobuf:"varint,1,opt,name=observed,proto3" json:"observed,omitempty"`
	Votes    []string   `protobuf:"bytes,2,rep,name=votes,proto3" json:"votes,omitempty"`
	Height   uint64     `protobuf:"varint,3,opt,name=height,proto3" json:"height,omitempty"`
	Claim    *types.Any `protobuf:"bytes,4,opt,name=claim,proto3" json:"claim,omitempty"`
}

func (m *Attestation) Reset()         { *m = Attestation{} }
func (m *Attestation) String() string { return proto.CompactTextString(m) }
func (*Attestation) ProtoMessage()    {}
func (*Attestation) Descriptor() ([]byte, []int) {
	return fileDescriptor_db4e0ed2d6c6c3a7, []int{0}
}
func (m *Attestation) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Attestation) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Attestation.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Attestation) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Attestation.Merge(m, src)
}
func (m *Attestation) XXX_Size() int {
	return m.Size()
}
func (m *Attestation) XXX_DiscardUnknown() {
	xxx_messageInfo_Attestation.DiscardUnknown(m)
}

var xxx_messageInfo_Attestation proto.InternalMessageInfo

func (m *Attestation) GetObserved() bool {
	if m != nil {
		return m.Observed
	}
	return false
}

func (m *Attestation) GetVotes() []string {
	if m != nil {
		return m.Votes
	}
	return nil
}

func (m *Attestation) GetHeight() uint64 {
	if m != nil {
		return m.Height
	}
	return 0
}

func (m *Attestation) GetClaim() *types.Any {
	if m != nil {
		return m.Claim
	}
	return nil
}

// Erc20Token unique identifier for an Ethereum Erc20 token.
// CONTRACT:
// The contract address on ETH of the token, this could be a Cosmos
// originated token, if so it will be the Erc20 address of the representation
// (note: developers should look up the token symbol using the address on ETH to display for UI)
type Erc20Token struct {
	Contract string                                 `protobuf:"bytes,1,opt,name=contract,proto3" json:"contract,omitempty"`
	Amount   github_com_cosmos_cosmos_sdk_types.Int `protobuf:"bytes,2,opt,name=amount,proto3,customtype=github.com/cosmos/cosmos-sdk/types.Int" json:"amount"`
}

func (m *Erc20Token) Reset()         { *m = Erc20Token{} }
func (m *Erc20Token) String() string { return proto.CompactTextString(m) }
func (*Erc20Token) ProtoMessage()    {}
func (*Erc20Token) Descriptor() ([]byte, []int) {
	return fileDescriptor_db4e0ed2d6c6c3a7, []int{1}
}
func (m *Erc20Token) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Erc20Token) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Erc20Token.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Erc20Token) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Erc20Token.Merge(m, src)
}
func (m *Erc20Token) XXX_Size() int {
	return m.Size()
}
func (m *Erc20Token) XXX_DiscardUnknown() {
	xxx_messageInfo_Erc20Token.DiscardUnknown(m)
}

var xxx_messageInfo_Erc20Token proto.InternalMessageInfo

func (m *Erc20Token) GetContract() string {
	if m != nil {
		return m.Contract
	}
	return ""
}

func init() {
	proto.RegisterEnum("gravity.v1.ClaimType", ClaimType_name, ClaimType_value)
	proto.RegisterType((*Attestation)(nil), "gravity.v1.Attestation")
	proto.RegisterType((*Erc20Token)(nil), "gravity.v1.Erc20Token")
}

func init() { proto.RegisterFile("gravity/attestation.proto", fileDescriptor_db4e0ed2d6c6c3a7) }

var fileDescriptor_db4e0ed2d6c6c3a7 = []byte{
	// 464 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x5c, 0x92, 0xcd, 0x8e, 0x93, 0x50,
	0x14, 0xc7, 0xb9, 0xfd, 0xca, 0xf4, 0xce, 0x86, 0x5c, 0x9b, 0x4a, 0x49, 0x64, 0x9a, 0x2e, 0x4c,
	0x33, 0x49, 0x41, 0xc7, 0x27, 0x60, 0xe0, 0x8e, 0x92, 0xa0, 0x6d, 0x28, 0x75, 0x1c, 0x13, 0x43,
	0x80, 0x5e, 0x29, 0x99, 0x96, 0xdb, 0xc0, 0x6d, 0x23, 0x6b, 0x37, 0x2e, 0x7d, 0x07, 0x5f, 0xc4,
	0xe5, 0x2c, 0x67, 0x69, 0x5c, 0x34, 0xa6, 0x7d, 0x11, 0xc3, 0x47, 0x2b, 0x71, 0xc5, 0xf9, 0x9f,
	0xdf, 0x39, 0x87, 0x3f, 0x87, 0x03, 0x7b, 0x41, 0xec, 0x6e, 0x43, 0x96, 0x2a, 0x2e, 0x63, 0x24,
	0x61, 0x2e, 0x0b, 0x69, 0x24, 0xaf, 0x63, 0xca, 0x28, 0x82, 0x25, 0x92, 0xb7, 0x2f, 0xc5, 0x4e,
	0x40, 0x03, 0x9a, 0xa7, 0x95, 0x2c, 0x2a, 0x2a, 0xc4, 0x5e, 0x40, 0x69, 0xb0, 0x24, 0x4a, 0xae,
	0xbc, 0xcd, 0x67, 0xc5, 0x8d, 0xd2, 0x02, 0x0d, 0xbe, 0x02, 0x78, 0xae, 0xfe, 0x1b, 0x89, 0x44,
	0x78, 0x46, 0xbd, 0x84, 0xc4, 0x5b, 0x32, 0x17, 0x40, 0x1f, 0x0c, 0xcf, 0xac, 0x93, 0x46, 0x1d,
	0xd8, 0xdc, 0x52, 0x46, 0x12, 0xa1, 0xd6, 0xaf, 0x0f, 0xdb, 0x56, 0x21, 0x50, 0x17, 0xb6, 0x16,
	0x24, 0x0c, 0x16, 0x4c, 0xa8, 0xf7, 0xc1, 0xb0, 0x61, 0x95, 0x0a, 0x5d, 0xc2, 0xa6, 0xbf, 0x74,
	0xc3, 0x95, 0xd0, 0xe8, 0x83, 0xe1, 0xf9, 0x55, 0x47, 0x2e, 0x4c, 0xc8, 0x47, 0x13, 0xb2, 0x1a,
	0xa5, 0x56, 0x51, 0x32, 0x58, 0x43, 0x88, 0x63, 0xff, 0xea, 0x85, 0x4d, 0xef, 0x49, 0xee, 0xc1,
	0xa7, 0x11, 0x8b, 0x5d, 0x9f, 0xe5, 0x1e, 0xda, 0xd6, 0x49, 0xa3, 0x1b, 0xd8, 0x72, 0x57, 0x74,
	0x13, 0x31, 0xa1, 0x96, 0x91, 0x6b, 0xf9, 0x61, 0x77, 0xc1, 0xfd, 0xde, 0x5d, 0x3c, 0x0f, 0x42,
	0xb6, 0xd8, 0x78, 0xb2, 0x4f, 0x57, 0x8a, 0x4f, 0x93, 0x15, 0x4d, 0xca, 0xc7, 0x28, 0x99, 0xdf,
	0x2b, 0x2c, 0x5d, 0x93, 0x44, 0x36, 0x22, 0x66, 0x95, 0xdd, 0x97, 0x3f, 0x01, 0x6c, 0x6b, 0xd9,
	0xbb, 0xed, 0x74, 0x4d, 0x90, 0x08, 0xbb, 0x9a, 0xa9, 0x1a, 0x6f, 0x1d, 0xfb, 0x6e, 0x82, 0x9d,
	0xd9, 0xbb, 0xe9, 0x04, 0x6b, 0xc6, 0x8d, 0x81, 0x75, 0x9e, 0x43, 0x5d, 0x88, 0x2a, 0x4c, 0xc7,
	0x93, 0xf1, 0xd4, 0xb0, 0x79, 0x80, 0x9e, 0xc2, 0x27, 0x95, 0xfc, 0xad, 0x61, 0xbf, 0xd1, 0x2d,
	0xf5, 0x96, 0xaf, 0xa1, 0x67, 0xb0, 0x57, 0x01, 0xf9, 0x77, 0x65, 0x6d, 0xe6, 0xf8, 0x0e, 0xeb,
	0x7c, 0x1d, 0x0d, 0xa0, 0x54, 0xc1, 0xe6, 0xf8, 0xb5, 0xa1, 0x39, 0x9a, 0x6a, 0x9a, 0x0e, 0xfe,
	0x80, 0xb5, 0x99, 0x8d, 0x75, 0xbe, 0xf1, 0xdf, 0x88, 0xf7, 0xaa, 0x39, 0xc5, 0xb6, 0x33, 0x9b,
	0xe8, 0x6a, 0x86, 0x9b, 0x62, 0xe3, 0xdb, 0x0f, 0x89, 0xbb, 0xfe, 0xf4, 0xb0, 0x97, 0xc0, 0xe3,
	0x5e, 0x02, 0x7f, 0xf6, 0x12, 0xf8, 0x7e, 0x90, 0xb8, 0xc7, 0x83, 0xc4, 0xfd, 0x3a, 0x48, 0xdc,
	0x47, 0xad, 0xb2, 0x0c, 0x77, 0xc9, 0x16, 0xc4, 0x1d, 0x45, 0x84, 0x1d, 0x17, 0x52, 0x9e, 0xcb,
	0xc8, 0x8b, 0xc3, 0x79, 0x40, 0x94, 0xe3, 0x61, 0x7d, 0x39, 0x45, 0xf9, 0xb6, 0xbc, 0x56, 0xfe,
	0xa3, 0x5e, 0xfd, 0x0d, 0x00, 0x00, 0xff, 0xff, 0x22, 0xa3, 0x76, 0x11, 0x7a, 0x02, 0x00, 0x00,
}

func (m *Attestation) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Attestation) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Attestation) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.Claim != nil {
		{
			size, err := m.Claim.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintAttestation(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0x22
	}
	if m.Height != 0 {
		i = encodeVarintAttestation(dAtA, i, uint64(m.Height))
		i--
		dAtA[i] = 0x18
	}
	if len(m.Votes) > 0 {
		for iNdEx := len(m.Votes) - 1; iNdEx >= 0; iNdEx-- {
			i -= len(m.Votes[iNdEx])
			copy(dAtA[i:], m.Votes[iNdEx])
			i = encodeVarintAttestation(dAtA, i, uint64(len(m.Votes[iNdEx])))
			i--
			dAtA[i] = 0x12
		}
	}
	if m.Observed {
		i--
		if m.Observed {
			dAtA[i] = 1
		} else {
			dAtA[i] = 0
		}
		i--
		dAtA[i] = 0x8
	}
	return len(dAtA) - i, nil
}

func (m *Erc20Token) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Erc20Token) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Erc20Token) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	{
		size := m.Amount.Size()
		i -= size
		if _, err := m.Amount.MarshalTo(dAtA[i:]); err != nil {
			return 0, err
		}
		i = encodeVarintAttestation(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0x12
	if len(m.Contract) > 0 {
		i -= len(m.Contract)
		copy(dAtA[i:], m.Contract)
		i = encodeVarintAttestation(dAtA, i, uint64(len(m.Contract)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintAttestation(dAtA []byte, offset int, v uint64) int {
	offset -= sovAttestation(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *Attestation) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.Observed {
		n += 2
	}
	if len(m.Votes) > 0 {
		for _, s := range m.Votes {
			l = len(s)
			n += 1 + l + sovAttestation(uint64(l))
		}
	}
	if m.Height != 0 {
		n += 1 + sovAttestation(uint64(m.Height))
	}
	if m.Claim != nil {
		l = m.Claim.Size()
		n += 1 + l + sovAttestation(uint64(l))
	}
	return n
}

func (m *Erc20Token) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Contract)
	if l > 0 {
		n += 1 + l + sovAttestation(uint64(l))
	}
	l = m.Amount.Size()
	n += 1 + l + sovAttestation(uint64(l))
	return n
}

func sovAttestation(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozAttestation(x uint64) (n int) {
	return sovAttestation(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *Attestation) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowAttestation
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
			return fmt.Errorf("proto: Attestation: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Attestation: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Observed", wireType)
			}
			var v int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowAttestation
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				v |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			m.Observed = bool(v != 0)
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Votes", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowAttestation
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
				return ErrInvalidLengthAttestation
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthAttestation
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Votes = append(m.Votes, string(dAtA[iNdEx:postIndex]))
			iNdEx = postIndex
		case 3:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Height", wireType)
			}
			m.Height = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowAttestation
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Height |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Claim", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowAttestation
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthAttestation
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthAttestation
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.Claim == nil {
				m.Claim = &types.Any{}
			}
			if err := m.Claim.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipAttestation(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if skippy < 0 {
				return ErrInvalidLengthAttestation
			}
			if (iNdEx + skippy) < 0 {
				return ErrInvalidLengthAttestation
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
func (m *Erc20Token) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowAttestation
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
			return fmt.Errorf("proto: Erc20Token: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Erc20Token: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Contract", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowAttestation
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
				return ErrInvalidLengthAttestation
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthAttestation
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Contract = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Amount", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowAttestation
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
				return ErrInvalidLengthAttestation
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthAttestation
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.Amount.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipAttestation(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if skippy < 0 {
				return ErrInvalidLengthAttestation
			}
			if (iNdEx + skippy) < 0 {
				return ErrInvalidLengthAttestation
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
func skipAttestation(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowAttestation
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
					return 0, ErrIntOverflowAttestation
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
					return 0, ErrIntOverflowAttestation
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
				return 0, ErrInvalidLengthAttestation
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupAttestation
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthAttestation
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthAttestation        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowAttestation          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupAttestation = fmt.Errorf("proto: unexpected end of group")
)
