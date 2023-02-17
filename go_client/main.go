package main

import (
	"context"
	"fmt"
	"io"
	"log"
	"time"

	pb "core/client/core"

	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
)

func main() {
	fmt.Println("main func")
	conn, err := grpc.Dial("localhost:50051", grpc.WithTransportCredentials(insecure.NewCredentials()))
	if err != nil {
		log.Fatalf("failed to connect: %v", err)
	}

	// greeting request type as defined in proto
	hello_req := pb.HelloRequest{Name: "Amen", Greeting: "Hi"}

	client := pb.NewTestClient(conn)
	// test greeting message
	fmt.Println("Running Unary request: ")
	uresponse, _ := client.SayHello(context.Background(), &hello_req)
	fmt.Println(uresponse)
	fmt.Println("----------------------------------------------------")
	// test greeting stream listener
	fmt.Println("Running server side streaming: ")
	stream, _ := client.ParrotSaysHello(context.Background(), &hello_req)

	for {
		reply, err := stream.Recv()
		if err == io.EOF {
			break
		}
		if err != nil {
			log.Fatalf("%v.parrotReply(_) = _, %v", client, err)
		}
		fmt.Println(reply)
	}
	fmt.Println("----------------------------------------------------")
	// client side streaming test
	// Save indexes with a string in an arr
	fmt.Println("Running client side streaming: ")
	var inputs []*pb.HelloRequest
	for i := 0; i < 15; i++ {
		inputs = append(inputs, &pb.HelloRequest{Name: fmt.Sprintf("Index %d", i)})
	}

	cstream, err := client.ChattyClientSaysHello(context.Background())
	for _, input := range inputs {
		if err := cstream.Send(input); err != nil {
			log.Fatalf("%v.Send(%v) = %v", cstream, input, err)
		}
	}

	stream_reply, err := cstream.CloseAndRecv()
	if err != nil {
		log.Fatalf("%v.CloseAndRecv() got error %v, want %v", stream, err, nil)
	}
	log.Printf("Delayed repsonse %v", stream_reply)
	fmt.Println("----------------------------------------------------")
	// Bidirectional streaming client side implementation
	fmt.Println("Running Bi-directional streaming: ")
	bd_stream, err := client.InteractingHello(context.Background())
	// create a channel to recieve messages through
	waitc := make(chan struct{})
	go func() {
		for {
			in, err := bd_stream.Recv()
			if err == io.EOF {
				// read done.
				close(waitc)
				return
			}
			if err != nil {
				log.Fatalf("Failed to receive a note : %v", err)
			}
			log.Printf("Got message %s | %v", in.Message, in)
		}
	}()

	for _, input := range inputs {
		time.Sleep(1 * time.Second)
		if err := bd_stream.Send(input); err != nil {
			log.Fatalf("Failed to send a note: %v", err)
		}
	}
	bd_stream.CloseSend()
	// send
	<-waitc
}
