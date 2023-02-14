export = SSP;
declare class SSP extends EventEmitter {
    constructor(param: any);
    eventEmitter: EventEmitter;
    debug: any;
    id: any;
    timeout: any;
    encryptAllCommand: any;
    encryptKey: Buffer;
    keys: {
        fixedKey: any;
        generatorKey: any;
        modulusKey: any;
        hostRandom: any;
        hostIntKey: any;
        slaveIntKey: any;
        key: any;
    };
    sequence: number;
    count: number;
    currentCommand: any;
    enabled: boolean;
    polling: boolean;
    unit_type: any;
    commandTimeout: NodeJS.Timeout;
    open(port: any, param?: {}): Promise<any>;
    port: SerialPort<import("@serialport/bindings-cpp").AutoDetectTypes>;
    close(): void;
    getSequence(): number;
    initEncryption(): Promise<void>;
    getPacket(command: any, args: any): Buffer;
    getPromise(buffer: any, command: any): any;
    exec(command: any, args?: any[]): any;
    newEvent(command: any): Promise<any>;
    parsePacket(buffer: any): {
        success: boolean;
        status: any;
        command: any;
        info: {};
    } | {
        success: boolean;
        error: string;
        buffer?: undefined;
    } | {
        success: boolean;
        error: string;
        buffer: any;
    };
    protocol_version: any;
    createHostEncryptionKeys(data: any): void;
    enable(): any;
    disable(): any;
    command(command: any, args: any): any;
    poll(status?: boolean): any;
}
import EventEmitter = require("events");
import { SerialPort } from "serialport/dist/serialport";
