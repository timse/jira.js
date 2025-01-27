import * as Models from './models';
import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback } from '../callback';
export declare class DynamicModules {
    private client;
    constructor(client: Client);
    /**
     * Returns all modules registered dynamically by the calling app.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:** Only
     * Connect apps can make this request.
     */
    getModules<T = Models.ConnectModules>(callback: Callback<T>): Promise<void>;
    /**
     * Returns all modules registered dynamically by the calling app.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:** Only
     * Connect apps can make this request.
     */
    getModules<T = Models.ConnectModules>(callback?: never): Promise<T>;
    /**
     * Registers a list of modules.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:** Only
     * Connect apps can make this request.
     */
    registerModules<T = unknown>(parameters: Parameters.RegisterModules | undefined, callback: Callback<T>): Promise<void>;
    /**
     * Registers a list of modules.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:** Only
     * Connect apps can make this request.
     */
    registerModules<T = unknown>(parameters?: Parameters.RegisterModules, callback?: never): Promise<T>;
    /**
     * Remove all or a list of modules registered by the calling app.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:** Only
     * Connect apps can make this request.
     */
    removeModules<T = void>(parameters: Parameters.RemoveModules | undefined, callback: Callback<T>): Promise<void>;
    /**
     * Remove all or a list of modules registered by the calling app.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:** Only
     * Connect apps can make this request.
     */
    removeModules<T = void>(parameters?: Parameters.RemoveModules, callback?: never): Promise<T>;
}
