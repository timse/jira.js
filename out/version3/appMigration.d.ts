import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback } from '../callback';
export declare class AppMigration {
    private client;
    constructor(client: Client);
    /**
     * Updates the value of a custom field added by Connect apps on one or more issues. The values of up to 200 custom
     * fields can be updated.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:** Only
     * Connect apps can make this request.
     */
    updateIssueFields<T = unknown>(parameters: Parameters.UpdateIssueFields, callback: Callback<T>): Promise<void>;
    /**
     * Updates the value of a custom field added by Connect apps on one or more issues. The values of up to 200 custom
     * fields can be updated.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:** Only
     * Connect apps can make this request.
     */
    updateIssueFields<T = unknown>(parameters: Parameters.UpdateIssueFields, callback?: never): Promise<T>;
    /**
     * Updates the values of multiple entity properties for an object. This operation is for use by Connect apps during
     * app migration.
     */
    updateEntityPropertiesValue<T = unknown>(parameters: Parameters.UpdateEntityPropertiesValue, callback: Callback<T>): Promise<void>;
    /**
     * Updates the values of multiple entity properties for an object. This operation is for use by Connect apps during
     * app migration.
     */
    updateEntityPropertiesValue<T = unknown>(parameters: Parameters.UpdateEntityPropertiesValue, callback?: never): Promise<T>;
}
