export = ESSPProtocolParser;
declare class ESSPProtocolParser extends Transform {
    constructor(options: any);
    id: any;
    buffer: Buffer;
    packet: {
        stx: number;
        seqSlaveId: number;
        length: number;
        data: any;
        crcl: number;
        crch: number;
    };
    dataPosition: number;
    packetStartFound: boolean;
    state: number;
    prevByte: any;
    _transform(chunk: any, encoding: any, cb: any): void;
    resetState(): void;
    _flush(cb: any): void;
}
import { Transform } from "stream";
