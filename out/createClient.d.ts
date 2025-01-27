import { Config } from './config';
import { AgileClient } from './agile';
import { Version2Client } from './version2';
import { Version3Client } from './version3';
export declare enum ClientType {
    Agile = "agile",
    Version2 = "version2",
    Version3 = "version3"
}
export declare function createClient(clientType: ClientType.Agile, config: Config): AgileClient;
export declare function createClient(clientType: ClientType.Version2, config: Config): Version2Client;
export declare function createClient(clientType: ClientType.Version3, config: Config): Version3Client;
