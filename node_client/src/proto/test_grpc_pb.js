// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var test_pb = require('./test_pb.js');

function serialize_test_DelayedReply(arg) {
  if (!(arg instanceof test_pb.DelayedReply)) {
    throw new Error('Expected argument of type test.DelayedReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_test_DelayedReply(buffer_arg) {
  return test_pb.DelayedReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_test_HelloReply(arg) {
  if (!(arg instanceof test_pb.HelloReply)) {
    throw new Error('Expected argument of type test.HelloReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_test_HelloReply(buffer_arg) {
  return test_pb.HelloReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_test_HelloRequest(arg) {
  if (!(arg instanceof test_pb.HelloRequest)) {
    throw new Error('Expected argument of type test.HelloRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_test_HelloRequest(buffer_arg) {
  return test_pb.HelloRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// The test service definition
//
var TestService = exports.TestService = {
  // Unary
sayHello: {
    path: '/test.Test/SayHello',
    requestStream: false,
    responseStream: false,
    requestType: test_pb.HelloRequest,
    responseType: test_pb.HelloReply,
    requestSerialize: serialize_test_HelloRequest,
    requestDeserialize: deserialize_test_HelloRequest,
    responseSerialize: serialize_test_HelloReply,
    responseDeserialize: deserialize_test_HelloReply,
  },
  // rpc server streaming
parrotSaysHello: {
    path: '/test.Test/ParrotSaysHello',
    requestStream: false,
    responseStream: true,
    requestType: test_pb.HelloRequest,
    responseType: test_pb.HelloReply,
    requestSerialize: serialize_test_HelloRequest,
    requestDeserialize: deserialize_test_HelloRequest,
    responseSerialize: serialize_test_HelloReply,
    responseDeserialize: deserialize_test_HelloReply,
  },
  // client streaming
chattyClientSaysHello: {
    path: '/test.Test/ChattyClientSaysHello',
    requestStream: true,
    responseStream: false,
    requestType: test_pb.HelloRequest,
    responseType: test_pb.DelayedReply,
    requestSerialize: serialize_test_HelloRequest,
    requestDeserialize: deserialize_test_HelloRequest,
    responseSerialize: serialize_test_DelayedReply,
    responseDeserialize: deserialize_test_DelayedReply,
  },
  // Both streaming
interactingHello: {
    path: '/test.Test/InteractingHello',
    requestStream: true,
    responseStream: true,
    requestType: test_pb.HelloRequest,
    responseType: test_pb.HelloReply,
    requestSerialize: serialize_test_HelloRequest,
    requestDeserialize: deserialize_test_HelloRequest,
    responseSerialize: serialize_test_HelloReply,
    responseDeserialize: deserialize_test_HelloReply,
  },
};

exports.TestClient = grpc.makeGenericClientConstructor(TestService);
