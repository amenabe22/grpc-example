import * as grpc from "@grpc/grpc-js"
import { TestClient } from "./proto/test_grpc_pb"
import { HelloReply, HelloRequest } from "./proto/test_pb"

const credentials = grpc.credentials.createInsecure();
const client = new TestClient("localhost:50051", credentials);
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
const sayHello = async () => {
    // listen for unary request and response
    return new Promise((resolve, reject) => {
        const request = new HelloRequest();
        request.setName("Amen")
        request.setGreeting("Hello")

        console.log(`[sayHello] Request: ${JSON.stringify(request.toObject())}`);
        client.sayHello(request, (err, reply: HelloReply) => {
            if (err != null) {
                console.log(`[sayHello] err:\nerr.message: ${err.message}\nerr.stack:\n${err.stack}`);
                reject(err); return
            }
            console.log(`[sayHello] Parrot: ${JSON.stringify(reply.toObject())}`)
            resolve(reply)
        })
    })
}

const formHelloRequest = (name, greeting): HelloRequest => {
    const request = new HelloRequest();
    request.setName(name)
    request.setGreeting(greeting)
    return request
}

const parrotSayHello = async () => {
    // Listen for server side streaming
    return new Promise<void>((resolve) => {
        const stream: grpc.ClientReadableStream<HelloReply> = client.parrotSaysHello(formHelloRequest("Amen", "Sup"));
        stream.on("data", (data: HelloReply) => {
            console.log(`[parrotSaysHello] HelloReply: ${JSON.stringify(data.toObject())}`);
        });
        stream.on("end", () => {
            console.log("[parrotSaysHello] Done.");
            resolve();
        });
    })
}

const chattyClientStream = () => {
    return new Promise<void>((resolve) => {
        const stream: grpc.ClientWritableStream<HelloRequest> = client.chattyClientSaysHello((err, data: HelloReply) => {
            if (err != null) {
                console.log(`[getChattyStreamResponse] err:\nerr.message: ${err.message}\nerr.stack:\n${err.stack}`);
            }
            console.log(`[getChattyStreamResponse] Book: ${JSON.stringify(data.toObject())}`);
            resolve();
        })

        for (let i = 0; i < 10; i++) {
            const req = formHelloRequest("Amen", `HI ${i}`);
            console.log(`[getChattyStreamResponse] Request: ${JSON.stringify(req.toObject())}`);
            stream.write(req);
        }
        stream.end()
    })
}
const interactingHello = () => {
    return new Promise<void>(async (resolve, reject) => {
        const stream: grpc.ClientDuplexStream<HelloRequest, HelloReply> = client.interactingHello()

        stream.on('data', (data: HelloReply) => {
            console.log(`[interactingHello] HelloReply: ${JSON.stringify(data.toObject())}`);
        })
        stream.on('end', () => {
            console.log("[interactingHello] Done")
            resolve()
        });

        for (let i = 0; i < 30; i++) {
            const req = formHelloRequest("Amen", `Sup ${i}`)
            console.log(`[interactingHello] HelloRequest: ${JSON.stringify(req.toObject())}`);
            await sleep(1000)
            stream.write(req)
        }
        stream.end()
    })
}

const main = async () => {
    // say hello Unary request
    await sayHello()
    // // handle server side streaming
    await parrotSayHello()
    // // handle client side streaming
    await chattyClientStream()
    // handle bilateral streaming and writing 
    await interactingHello()
}

main().then((_) => _)

process.on("uncaughtException", (err) => {
    console.log(`process on uncaughtException error: ${err}`);
});
process.on("unhandledRejection", (err) => {
    console.log(`process on unhandledRejection error: ${err}`);
});