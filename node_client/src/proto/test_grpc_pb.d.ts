// package: test
// file: test.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as test_pb from "./test_pb";

interface ITestService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    sayHello: ITestService_ISayHello;
    parrotSaysHello: ITestService_IParrotSaysHello;
    chattyClientSaysHello: ITestService_IChattyClientSaysHello;
    interactingHello: ITestService_IInteractingHello;
}

interface ITestService_ISayHello extends grpc.MethodDefinition<test_pb.HelloRequest, test_pb.HelloReply> {
    path: "/test.Test/SayHello";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<test_pb.HelloRequest>;
    requestDeserialize: grpc.deserialize<test_pb.HelloRequest>;
    responseSerialize: grpc.serialize<test_pb.HelloReply>;
    responseDeserialize: grpc.deserialize<test_pb.HelloReply>;
}
interface ITestService_IParrotSaysHello extends grpc.MethodDefinition<test_pb.HelloRequest, test_pb.HelloReply> {
    path: "/test.Test/ParrotSaysHello";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<test_pb.HelloRequest>;
    requestDeserialize: grpc.deserialize<test_pb.HelloRequest>;
    responseSerialize: grpc.serialize<test_pb.HelloReply>;
    responseDeserialize: grpc.deserialize<test_pb.HelloReply>;
}
interface ITestService_IChattyClientSaysHello extends grpc.MethodDefinition<test_pb.HelloRequest, test_pb.DelayedReply> {
    path: "/test.Test/ChattyClientSaysHello";
    requestStream: true;
    responseStream: false;
    requestSerialize: grpc.serialize<test_pb.HelloRequest>;
    requestDeserialize: grpc.deserialize<test_pb.HelloRequest>;
    responseSerialize: grpc.serialize<test_pb.DelayedReply>;
    responseDeserialize: grpc.deserialize<test_pb.DelayedReply>;
}
interface ITestService_IInteractingHello extends grpc.MethodDefinition<test_pb.HelloRequest, test_pb.HelloReply> {
    path: "/test.Test/InteractingHello";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<test_pb.HelloRequest>;
    requestDeserialize: grpc.deserialize<test_pb.HelloRequest>;
    responseSerialize: grpc.serialize<test_pb.HelloReply>;
    responseDeserialize: grpc.deserialize<test_pb.HelloReply>;
}

export const TestService: ITestService;

export interface ITestServer extends grpc.UntypedServiceImplementation {
    sayHello: grpc.handleUnaryCall<test_pb.HelloRequest, test_pb.HelloReply>;
    parrotSaysHello: grpc.handleServerStreamingCall<test_pb.HelloRequest, test_pb.HelloReply>;
    chattyClientSaysHello: grpc.handleClientStreamingCall<test_pb.HelloRequest, test_pb.DelayedReply>;
    interactingHello: grpc.handleBidiStreamingCall<test_pb.HelloRequest, test_pb.HelloReply>;
}

export interface ITestClient {
    sayHello(request: test_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: test_pb.HelloReply) => void): grpc.ClientUnaryCall;
    sayHello(request: test_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: test_pb.HelloReply) => void): grpc.ClientUnaryCall;
    sayHello(request: test_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: test_pb.HelloReply) => void): grpc.ClientUnaryCall;
    parrotSaysHello(request: test_pb.HelloRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<test_pb.HelloReply>;
    parrotSaysHello(request: test_pb.HelloRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<test_pb.HelloReply>;
    chattyClientSaysHello(callback: (error: grpc.ServiceError | null, response: test_pb.DelayedReply) => void): grpc.ClientWritableStream<test_pb.HelloRequest>;
    chattyClientSaysHello(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: test_pb.DelayedReply) => void): grpc.ClientWritableStream<test_pb.HelloRequest>;
    chattyClientSaysHello(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: test_pb.DelayedReply) => void): grpc.ClientWritableStream<test_pb.HelloRequest>;
    chattyClientSaysHello(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: test_pb.DelayedReply) => void): grpc.ClientWritableStream<test_pb.HelloRequest>;
    interactingHello(): grpc.ClientDuplexStream<test_pb.HelloRequest, test_pb.HelloReply>;
    interactingHello(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<test_pb.HelloRequest, test_pb.HelloReply>;
    interactingHello(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<test_pb.HelloRequest, test_pb.HelloReply>;
}

export class TestClient extends grpc.Client implements ITestClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public sayHello(request: test_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: test_pb.HelloReply) => void): grpc.ClientUnaryCall;
    public sayHello(request: test_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: test_pb.HelloReply) => void): grpc.ClientUnaryCall;
    public sayHello(request: test_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: test_pb.HelloReply) => void): grpc.ClientUnaryCall;
    public parrotSaysHello(request: test_pb.HelloRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<test_pb.HelloReply>;
    public parrotSaysHello(request: test_pb.HelloRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<test_pb.HelloReply>;
    public chattyClientSaysHello(callback: (error: grpc.ServiceError | null, response: test_pb.DelayedReply) => void): grpc.ClientWritableStream<test_pb.HelloRequest>;
    public chattyClientSaysHello(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: test_pb.DelayedReply) => void): grpc.ClientWritableStream<test_pb.HelloRequest>;
    public chattyClientSaysHello(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: test_pb.DelayedReply) => void): grpc.ClientWritableStream<test_pb.HelloRequest>;
    public chattyClientSaysHello(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: test_pb.DelayedReply) => void): grpc.ClientWritableStream<test_pb.HelloRequest>;
    public interactingHello(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<test_pb.HelloRequest, test_pb.HelloReply>;
    public interactingHello(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<test_pb.HelloRequest, test_pb.HelloReply>;
}
