import * as Models from './models';
import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback } from '../callback';
export declare class IssuePriorities {
    private client;
    constructor(client: Client);
    /**
     * Returns the list of all issue priorities.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * Permission to access Jira.
     */
    getPriorities<T = Models.Priority[]>(callback: Callback<T>): Promise<void>;
    /**
     * Returns the list of all issue priorities.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * Permission to access Jira.
     */
    getPriorities<T = Models.Priority[]>(callback?: never): Promise<T>;
    /**
     * Returns an issue priority.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * Permission to access Jira.
     */
    getPriority<T = Models.Priority>(parameters: Parameters.GetPriority, callback: Callback<T>): Promise<void>;
    /**
     * Returns an issue priority.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * Permission to access Jira.
     */
    getPriority<T = Models.Priority>(parameters: Parameters.GetPriority, callback?: never): Promise<T>;
}
