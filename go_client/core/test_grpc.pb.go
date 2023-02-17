// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.12.4
// source: test.proto

package core

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// TestClient is the client API for Test service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type TestClient interface {
	// Unary
	SayHello(ctx context.Context, in *HelloRequest, opts ...grpc.CallOption) (*HelloReply, error)
	// rpc server streaming
	ParrotSaysHello(ctx context.Context, in *HelloRequest, opts ...grpc.CallOption) (Test_ParrotSaysHelloClient, error)
	// client streaming
	ChattyClientSaysHello(ctx context.Context, opts ...grpc.CallOption) (Test_ChattyClientSaysHelloClient, error)
	// Both streaming
	InteractingHello(ctx context.Context, opts ...grpc.CallOption) (Test_InteractingHelloClient, error)
}

type testClient struct {
	cc grpc.ClientConnInterface
}

func NewTestClient(cc grpc.ClientConnInterface) TestClient {
	return &testClient{cc}
}

func (c *testClient) SayHello(ctx context.Context, in *HelloRequest, opts ...grpc.CallOption) (*HelloReply, error) {
	out := new(HelloReply)
	err := c.cc.Invoke(ctx, "/test.Test/SayHello", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *testClient) ParrotSaysHello(ctx context.Context, in *HelloRequest, opts ...grpc.CallOption) (Test_ParrotSaysHelloClient, error) {
	stream, err := c.cc.NewStream(ctx, &Test_ServiceDesc.Streams[0], "/test.Test/ParrotSaysHello", opts...)
	if err != nil {
		return nil, err
	}
	x := &testParrotSaysHelloClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type Test_ParrotSaysHelloClient interface {
	Recv() (*HelloReply, error)
	grpc.ClientStream
}

type testParrotSaysHelloClient struct {
	grpc.ClientStream
}

func (x *testParrotSaysHelloClient) Recv() (*HelloReply, error) {
	m := new(HelloReply)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func (c *testClient) ChattyClientSaysHello(ctx context.Context, opts ...grpc.CallOption) (Test_ChattyClientSaysHelloClient, error) {
	stream, err := c.cc.NewStream(ctx, &Test_ServiceDesc.Streams[1], "/test.Test/ChattyClientSaysHello", opts...)
	if err != nil {
		return nil, err
	}
	x := &testChattyClientSaysHelloClient{stream}
	return x, nil
}

type Test_ChattyClientSaysHelloClient interface {
	Send(*HelloRequest) error
	CloseAndRecv() (*DelayedReply, error)
	grpc.ClientStream
}

type testChattyClientSaysHelloClient struct {
	grpc.ClientStream
}

func (x *testChattyClientSaysHelloClient) Send(m *HelloRequest) error {
	return x.ClientStream.SendMsg(m)
}

func (x *testChattyClientSaysHelloClient) CloseAndRecv() (*DelayedReply, error) {
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	m := new(DelayedReply)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func (c *testClient) InteractingHello(ctx context.Context, opts ...grpc.CallOption) (Test_InteractingHelloClient, error) {
	stream, err := c.cc.NewStream(ctx, &Test_ServiceDesc.Streams[2], "/test.Test/InteractingHello", opts...)
	if err != nil {
		return nil, err
	}
	x := &testInteractingHelloClient{stream}
	return x, nil
}

type Test_InteractingHelloClient interface {
	Send(*HelloRequest) error
	Recv() (*HelloReply, error)
	grpc.ClientStream
}

type testInteractingHelloClient struct {
	grpc.ClientStream
}

func (x *testInteractingHelloClient) Send(m *HelloRequest) error {
	return x.ClientStream.SendMsg(m)
}

func (x *testInteractingHelloClient) Recv() (*HelloReply, error) {
	m := new(HelloReply)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

// TestServer is the server API for Test service.
// All implementations must embed UnimplementedTestServer
// for forward compatibility
type TestServer interface {
	// Unary
	SayHello(context.Context, *HelloRequest) (*HelloReply, error)
	// rpc server streaming
	ParrotSaysHello(*HelloRequest, Test_ParrotSaysHelloServer) error
	// client streaming
	ChattyClientSaysHello(Test_ChattyClientSaysHelloServer) error
	// Both streaming
	InteractingHello(Test_InteractingHelloServer) error
	mustEmbedUnimplementedTestServer()
}

// UnimplementedTestServer must be embedded to have forward compatible implementations.
type UnimplementedTestServer struct {
}

func (UnimplementedTestServer) SayHello(context.Context, *HelloRequest) (*HelloReply, error) {
	return nil, status.Errorf(codes.Unimplemented, "method SayHello not implemented")
}
func (UnimplementedTestServer) ParrotSaysHello(*HelloRequest, Test_ParrotSaysHelloServer) error {
	return status.Errorf(codes.Unimplemented, "method ParrotSaysHello not implemented")
}
func (UnimplementedTestServer) ChattyClientSaysHello(Test_ChattyClientSaysHelloServer) error {
	return status.Errorf(codes.Unimplemented, "method ChattyClientSaysHello not implemented")
}
func (UnimplementedTestServer) InteractingHello(Test_InteractingHelloServer) error {
	return status.Errorf(codes.Unimplemented, "method InteractingHello not implemented")
}
func (UnimplementedTestServer) mustEmbedUnimplementedTestServer() {}

// UnsafeTestServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to TestServer will
// result in compilation errors.
type UnsafeTestServer interface {
	mustEmbedUnimplementedTestServer()
}

func RegisterTestServer(s grpc.ServiceRegistrar, srv TestServer) {
	s.RegisterService(&Test_ServiceDesc, srv)
}

func _Test_SayHello_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(HelloRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TestServer).SayHello(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/test.Test/SayHello",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TestServer).SayHello(ctx, req.(*HelloRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Test_ParrotSaysHello_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(HelloRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(TestServer).ParrotSaysHello(m, &testParrotSaysHelloServer{stream})
}

type Test_ParrotSaysHelloServer interface {
	Send(*HelloReply) error
	grpc.ServerStream
}

type testParrotSaysHelloServer struct {
	grpc.ServerStream
}

func (x *testParrotSaysHelloServer) Send(m *HelloReply) error {
	return x.ServerStream.SendMsg(m)
}

func _Test_ChattyClientSaysHello_Handler(srv interface{}, stream grpc.ServerStream) error {
	return srv.(TestServer).ChattyClientSaysHello(&testChattyClientSaysHelloServer{stream})
}

type Test_ChattyClientSaysHelloServer interface {
	SendAndClose(*DelayedReply) error
	Recv() (*HelloRequest, error)
	grpc.ServerStream
}

type testChattyClientSaysHelloServer struct {
	grpc.ServerStream
}

func (x *testChattyClientSaysHelloServer) SendAndClose(m *DelayedReply) error {
	return x.ServerStream.SendMsg(m)
}

func (x *testChattyClientSaysHelloServer) Recv() (*HelloRequest, error) {
	m := new(HelloRequest)
	if err := x.ServerStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func _Test_InteractingHello_Handler(srv interface{}, stream grpc.ServerStream) error {
	return srv.(TestServer).InteractingHello(&testInteractingHelloServer{stream})
}

type Test_InteractingHelloServer interface {
	Send(*HelloReply) error
	Recv() (*HelloRequest, error)
	grpc.ServerStream
}

type testInteractingHelloServer struct {
	grpc.ServerStream
}

func (x *testInteractingHelloServer) Send(m *HelloReply) error {
	return x.ServerStream.SendMsg(m)
}

func (x *testInteractingHelloServer) Recv() (*HelloRequest, error) {
	m := new(HelloRequest)
	if err := x.ServerStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

// Test_ServiceDesc is the grpc.ServiceDesc for Test service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var Test_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "test.Test",
	HandlerType: (*TestServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "SayHello",
			Handler:    _Test_SayHello_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "ParrotSaysHello",
			Handler:       _Test_ParrotSaysHello_Handler,
			ServerStreams: true,
		},
		{
			StreamName:    "ChattyClientSaysHello",
			Handler:       _Test_ChattyClientSaysHello_Handler,
			ClientStreams: true,
		},
		{
			StreamName:    "InteractingHello",
			Handler:       _Test_InteractingHello_Handler,
			ServerStreams: true,
			ClientStreams: true,
		},
	},
	Metadata: "test.proto",
}
