import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback } from '../callback';
export declare class IssueCustomFieldValuesApps {
    private client;
    constructor(client: Client);
    /**
     * Updates the value of a custom field on one or more issues. Custom fields can only be updated by the Forge app that
     * created them.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:** Only
     * the app that created the custom field can update its values with this operation.
     */
    updateCustomFieldValue<T = void>(parameters: Parameters.UpdateCustomFieldValue, callback: Callback<T>): Promise<void>;
    /**
     * Updates the value of a custom field on one or more issues. Custom fields can only be updated by the Forge app that
     * created them.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:** Only
     * the app that created the custom field can update its values with this operation.
     */
    updateCustomFieldValue<T = void>(parameters: Parameters.UpdateCustomFieldValue, callback?: never): Promise<T>;
}
