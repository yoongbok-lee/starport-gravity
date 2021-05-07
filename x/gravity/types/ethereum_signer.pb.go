// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: gravity/ethereum_signer.proto

package types

import (
	fmt "fmt"
	_ "github.com/gogo/protobuf/gogoproto"
	proto "github.com/gogo/protobuf/proto"
	math "math"
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

// SignType defines messages that have been signed by an orchestrator
type SignType int32

const (
	SIGN_TYPE_UNSPECIFIED                          SignType = 0
	SIGN_TYPE_ORCHESTRATOR_SIGNED_MULTI_SIG_UPDATE SignType = 1
	SIGN_TYPE_ORCHESTRATOR_SIGNED_WITHDRAW_BATCH   SignType = 2
)

var SignType_name = map[int32]string{
	0: "SIGN_TYPE_UNSPECIFIED",
	1: "SIGN_TYPE_ORCHESTRATOR_SIGNED_MULTI_SIG_UPDATE",
	2: "SIGN_TYPE_ORCHESTRATOR_SIGNED_WITHDRAW_BATCH",
}

var SignType_value = map[string]int32{
	"SIGN_TYPE_UNSPECIFIED":                          0,
	"SIGN_TYPE_ORCHESTRATOR_SIGNED_MULTI_SIG_UPDATE": 1,
	"SIGN_TYPE_ORCHESTRATOR_SIGNED_WITHDRAW_BATCH":   2,
}

func (SignType) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_6502a9a6f912eb09, []int{0}
}

func init() {
	proto.RegisterEnum("gravity.v1.SignType", SignType_name, SignType_value)
}

func init() { proto.RegisterFile("gravity/ethereum_signer.proto", fileDescriptor_6502a9a6f912eb09) }

var fileDescriptor_6502a9a6f912eb09 = []byte{
	// 271 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x92, 0x4d, 0x2f, 0x4a, 0x2c,
	0xcb, 0x2c, 0xa9, 0xd4, 0x4f, 0x2d, 0xc9, 0x48, 0x2d, 0x4a, 0x2d, 0xcd, 0x8d, 0x2f, 0xce, 0x4c,
	0xcf, 0x4b, 0x2d, 0xd2, 0x2b, 0x28, 0xca, 0x2f, 0xc9, 0x17, 0xe2, 0x82, 0x4a, 0xeb, 0x95, 0x19,
	0x4a, 0x89, 0xa4, 0xe7, 0xa7, 0xe7, 0x83, 0x85, 0xf5, 0x41, 0x2c, 0x88, 0x0a, 0xad, 0xa9, 0x8c,
	0x5c, 0x1c, 0xc1, 0x99, 0xe9, 0x79, 0x21, 0x95, 0x05, 0xa9, 0x42, 0x92, 0x5c, 0xa2, 0xc1, 0x9e,
	0xee, 0x7e, 0xf1, 0x21, 0x91, 0x01, 0xae, 0xf1, 0xa1, 0x7e, 0xc1, 0x01, 0xae, 0xce, 0x9e, 0x6e,
	0x9e, 0xae, 0x2e, 0x02, 0x0c, 0x42, 0x46, 0x5c, 0x7a, 0x08, 0x29, 0xff, 0x20, 0x67, 0x0f, 0xd7,
	0xe0, 0x90, 0x20, 0xc7, 0x10, 0xff, 0xa0, 0x78, 0x90, 0xb0, 0xab, 0x4b, 0xbc, 0x6f, 0xa8, 0x4f,
	0x88, 0x27, 0x88, 0x13, 0x1f, 0x1a, 0xe0, 0xe2, 0x18, 0xe2, 0x2a, 0xc0, 0x28, 0x64, 0xc0, 0xa5,
	0x83, 0x5f, 0x4f, 0xb8, 0x67, 0x88, 0x87, 0x4b, 0x90, 0x63, 0x78, 0xbc, 0x93, 0x63, 0x88, 0xb3,
	0x87, 0x00, 0x93, 0x14, 0x47, 0xc7, 0x62, 0x39, 0x86, 0x15, 0x4b, 0xe4, 0x18, 0x9c, 0x62, 0x4f,
	0x3c, 0x92, 0x63, 0xbc, 0xf0, 0x48, 0x8e, 0xf1, 0xc1, 0x23, 0x39, 0xc6, 0x09, 0x8f, 0xe5, 0x18,
	0x2e, 0x3c, 0x96, 0x63, 0xb8, 0xf1, 0x58, 0x8e, 0x21, 0xca, 0x39, 0x3d, 0xb3, 0x24, 0xa3, 0x34,
	0x49, 0x2f, 0x39, 0x3f, 0x57, 0x3f, 0x31, 0xa7, 0x24, 0x23, 0x35, 0x51, 0x37, 0x2f, 0xb5, 0x44,
	0x3f, 0x39, 0xbf, 0x38, 0x37, 0xbf, 0x58, 0x17, 0xea, 0x61, 0xdd, 0xa4, 0xa2, 0xcc, 0x94, 0xf4,
	0x54, 0x7d, 0x58, 0xf0, 0x54, 0xc0, 0x59, 0x25, 0x95, 0x05, 0xa9, 0xc5, 0x49, 0x6c, 0x60, 0xdf,
	0x1b, 0x03, 0x02, 0x00, 0x00, 0xff, 0xff, 0xfa, 0xb1, 0x7c, 0xb5, 0x40, 0x01, 0x00, 0x00,
}