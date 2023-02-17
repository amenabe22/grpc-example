# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

import test_pb2 as test__pb2


class TestStub(object):
    """The test service definition

    """

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.SayHello = channel.unary_unary(
                '/test.Test/SayHello',
                request_serializer=test__pb2.HelloRequest.SerializeToString,
                response_deserializer=test__pb2.HelloReply.FromString,
                )
        self.ParrotSaysHello = channel.unary_stream(
                '/test.Test/ParrotSaysHello',
                request_serializer=test__pb2.HelloRequest.SerializeToString,
                response_deserializer=test__pb2.HelloReply.FromString,
                )
        self.ChattyClientSaysHello = channel.stream_unary(
                '/test.Test/ChattyClientSaysHello',
                request_serializer=test__pb2.HelloRequest.SerializeToString,
                response_deserializer=test__pb2.DelayedReply.FromString,
                )
        self.InteractingHello = channel.stream_stream(
                '/test.Test/InteractingHello',
                request_serializer=test__pb2.HelloRequest.SerializeToString,
                response_deserializer=test__pb2.HelloReply.FromString,
                )


class TestServicer(object):
    """The test service definition

    """

    def SayHello(self, request, context):
        """Unary
        """
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def ParrotSaysHello(self, request, context):
        """rpc server streaming
        """
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def ChattyClientSaysHello(self, request_iterator, context):
        """client streaming
        """
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def InteractingHello(self, request_iterator, context):
        """Both streaming
        """
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_TestServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'SayHello': grpc.unary_unary_rpc_method_handler(
                    servicer.SayHello,
                    request_deserializer=test__pb2.HelloRequest.FromString,
                    response_serializer=test__pb2.HelloReply.SerializeToString,
            ),
            'ParrotSaysHello': grpc.unary_stream_rpc_method_handler(
                    servicer.ParrotSaysHello,
                    request_deserializer=test__pb2.HelloRequest.FromString,
                    response_serializer=test__pb2.HelloReply.SerializeToString,
            ),
            'ChattyClientSaysHello': grpc.stream_unary_rpc_method_handler(
                    servicer.ChattyClientSaysHello,
                    request_deserializer=test__pb2.HelloRequest.FromString,
                    response_serializer=test__pb2.DelayedReply.SerializeToString,
            ),
            'InteractingHello': grpc.stream_stream_rpc_method_handler(
                    servicer.InteractingHello,
                    request_deserializer=test__pb2.HelloRequest.FromString,
                    response_serializer=test__pb2.HelloReply.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'test.Test', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class Test(object):
    """The test service definition

    """

    @staticmethod
    def SayHello(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/test.Test/SayHello',
            test__pb2.HelloRequest.SerializeToString,
            test__pb2.HelloReply.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def ParrotSaysHello(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_stream(request, target, '/test.Test/ParrotSaysHello',
            test__pb2.HelloRequest.SerializeToString,
            test__pb2.HelloReply.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def ChattyClientSaysHello(request_iterator,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.stream_unary(request_iterator, target, '/test.Test/ChattyClientSaysHello',
            test__pb2.HelloRequest.SerializeToString,
            test__pb2.DelayedReply.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def InteractingHello(request_iterator,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.stream_stream(request_iterator, target, '/test.Test/InteractingHello',
            test__pb2.HelloRequest.SerializeToString,
            test__pb2.HelloReply.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)
