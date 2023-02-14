export function parseData(data: any, currentCommand: any, protocolVersion: any, deviceUnitType: any): {
    success: boolean;
    status: any;
    command: any;
    info: {};
};
export function randomInt(min: any, max: any): any;
export function CRC16(source: any): number[];
export function randHexArray(length?: number): any[];
export function argsToByte(command: any, args: any, protocolVersion: any): any[] | Buffer;
export function int64LE(number: any): Buffer;
