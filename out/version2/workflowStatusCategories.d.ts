import * as Models from './models';
import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback } from '../callback';
export declare class WorkflowStatusCategories {
    private client;
    constructor(client: Client);
    /**
     * Returns a list of all status categories.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * Permission to access Jira.
     */
    getStatusCategories<T = Models.StatusCategory[]>(callback: Callback<T>): Promise<void>;
    /**
     * Returns a list of all status categories.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * Permission to access Jira.
     */
    getStatusCategories<T = Models.StatusCategory[]>(callback?: never): Promise<T>;
    /**
     * Returns a status category. Status categories provided a mechanism for categorizing
     * [statuses](#api-rest-api-2-status-idOrName-get).
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * Permission to access Jira.
     */
    getStatusCategory<T = Models.StatusCategory>(parameters: Parameters.GetStatusCategory, callback: Callback<T>): Promise<void>;
    /**
     * Returns a status category. Status categories provided a mechanism for categorizing
     * [statuses](#api-rest-api-2-status-idOrName-get).
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * Permission to access Jira.
     */
    getStatusCategory<T = Models.StatusCategory>(parameters: Parameters.GetStatusCategory, callback?: never): Promise<T>;
}
