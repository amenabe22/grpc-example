// package: test
// file: test.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class HelloRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): HelloRequest;
    getGreeting(): string;
    setGreeting(value: string): HelloRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HelloRequest.AsObject;
    static toObject(includeInstance: boolean, msg: HelloRequest): HelloRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HelloRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HelloRequest;
    static deserializeBinaryFromReader(message: HelloRequest, reader: jspb.BinaryReader): HelloRequest;
}

export namespace HelloRequest {
    export type AsObject = {
        name: string,
        greeting: string,
    }
}

export class HelloReply extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): HelloReply;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HelloReply.AsObject;
    static toObject(includeInstance: boolean, msg: HelloReply): HelloReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HelloReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HelloReply;
    static deserializeBinaryFromReader(message: HelloReply, reader: jspb.BinaryReader): HelloReply;
}

export namespace HelloReply {
    export type AsObject = {
        message: string,
    }
}

export class DelayedReply extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): DelayedReply;
    clearRequestList(): void;
    getRequestList(): Array<HelloRequest>;
    setRequestList(value: Array<HelloRequest>): DelayedReply;
    addRequest(value?: HelloRequest, index?: number): HelloRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DelayedReply.AsObject;
    static toObject(includeInstance: boolean, msg: DelayedReply): DelayedReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DelayedReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DelayedReply;
    static deserializeBinaryFromReader(message: DelayedReply, reader: jspb.BinaryReader): DelayedReply;
}

export namespace DelayedReply {
    export type AsObject = {
        message: string,
        requestList: Array<HelloRequest.AsObject>,
    }
}
