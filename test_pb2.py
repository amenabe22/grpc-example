# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: test.proto
"""Generated protocol buffer code."""
from google.protobuf.internal import builder as _builder
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\ntest.proto\x12\x04test\".\n\x0cHelloRequest\x12\x0c\n\x04name\x18\x01 \x01(\t\x12\x10\n\x08greeting\x18\x02 \x01(\t\"\x1d\n\nHelloReply\x12\x0f\n\x07message\x18\x01 \x01(\t\"D\n\x0c\x44\x65layedReply\x12\x0f\n\x07message\x18\x01 \x01(\t\x12#\n\x07request\x18\x02 \x03(\x0b\x32\x12.test.HelloRequest2\xf4\x01\n\x04Test\x12\x30\n\x08SayHello\x12\x12.test.HelloRequest\x1a\x10.test.HelloReply\x12\x39\n\x0fParrotSaysHello\x12\x12.test.HelloRequest\x1a\x10.test.HelloReply0\x01\x12\x41\n\x15\x43hattyClientSaysHello\x12\x12.test.HelloRequest\x1a\x12.test.DelayedReply(\x01\x12<\n\x10InteractingHello\x12\x12.test.HelloRequest\x1a\x10.test.HelloReply(\x01\x30\x01\x62\x06proto3')

_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, globals())
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'test_pb2', globals())
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  _HELLOREQUEST._serialized_start=20
  _HELLOREQUEST._serialized_end=66
  _HELLOREPLY._serialized_start=68
  _HELLOREPLY._serialized_end=97
  _DELAYEDREPLY._serialized_start=99
  _DELAYEDREPLY._serialized_end=167
  _TEST._serialized_start=170
  _TEST._serialized_end=414
# @@protoc_insertion_point(module_scope)
