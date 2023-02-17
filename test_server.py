from concurrent import futures
import time

import grpc
import test_pb2
import test_pb2_grpc


class TestServicer(test_pb2_grpc.TestServicer):
    def SayHello(self, request, context):
        print("SayHello Request Made:")
        print(request)
        hello_reply = test_pb2.HelloReply()
        hello_reply.message = f"{request.greeting} {request.name}"
        return hello_reply

    def ParrotSaysHello(self, request, context):
        print("ParrotSaysHello Request Made:")
        print(request)
        for i in range(3):
            hello_reply = test_pb2.HelloReply()
            hello_reply.message = f"{request.greeting} {request.name} {i + 1}"
            yield hello_reply
            time.sleep(1)

    def ChattyClientSaysHello(self, request_iterator, context):
        delayed_reply = test_pb2.DelayedReply()
        for request in request_iterator:
            print("chattyClientSaysHello request made")
            print(request)
            delayed_reply.request.append(request)

        delayed_reply.message = f"You have sent {len(delayed_reply.request)} messages. Please expect a delayed response."
        return delayed_reply

    def InteractingHello(self, request_iterator, context):
        for request in request_iterator:
            print("InteractingHello request made")
            print(request)

            hello_reply = test_pb2.HelloReply()
            hello_reply.message = f"{request.greeting} {request.name}"
            yield hello_reply


def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    test_pb2_grpc.add_TestServicer_to_server(TestServicer(), server)
    server.add_insecure_port("localhost:50051")
    server.start()
    server.wait_for_termination()


if __name__ == "__main__":
    serve()
