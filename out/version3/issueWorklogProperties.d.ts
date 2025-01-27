import * as Models from './models';
import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback } from '../callback';
export declare class IssueWorklogProperties {
    private client;
    constructor(client: Client);
    /**
     * Returns the keys of all properties for a worklog.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     *
     * - *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
     * - If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission
     *   to view the issue.
     * - If the worklog has visibility restrictions, belongs to the group or has the role visibility is restricted to.
     */
    getWorklogPropertyKeys<T = Models.PropertyKeys>(parameters: Parameters.GetWorklogPropertyKeys, callback: Callback<T>): Promise<void>;
    /**
     * Returns the keys of all properties for a worklog.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     *
     * - *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
     * - If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission
     *   to view the issue.
     * - If the worklog has visibility restrictions, belongs to the group or has the role visibility is restricted to.
     */
    getWorklogPropertyKeys<T = Models.PropertyKeys>(parameters: Parameters.GetWorklogPropertyKeys, callback?: never): Promise<T>;
    /**
     * Returns the value of a worklog property.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     *
     * - *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
     * - If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission
     *   to view the issue.
     * - If the worklog has visibility restrictions, belongs to the group or has the role visibility is restricted to.
     */
    getWorklogProperty<T = Models.EntityProperty>(parameters: Parameters.GetWorklogProperty, callback: Callback<T>): Promise<void>;
    /**
     * Returns the value of a worklog property.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     *
     * - *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
     * - If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission
     *   to view the issue.
     * - If the worklog has visibility restrictions, belongs to the group or has the role visibility is restricted to.
     */
    getWorklogProperty<T = Models.EntityProperty>(parameters: Parameters.GetWorklogProperty, callback?: never): Promise<T>;
    /**
     * Sets the value of a worklog property. Use this operation to store custom data against the worklog.
     *
     * The value of the request body must be a [valid](http://tools.ietf.org/html/rfc4627), non-empty JSON blob. The
     * maximum length is 32768 characters.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     *
     * - *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
     * - If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission
     *   to view the issue.
     * - *Edit all worklogs*[ project permission](https://confluence.atlassian.com/x/yodKLg) to update any worklog or *Edit
     *   own worklogs* to update worklogs created by the user.
     * - If the worklog has visibility restrictions, belongs to the group or has the role visibility is restricted to.
     */
    setWorklogProperty<T = unknown>(parameters: Parameters.SetWorklogProperty, callback: Callback<T>): Promise<void>;
    /**
     * Sets the value of a worklog property. Use this operation to store custom data against the worklog.
     *
     * The value of the request body must be a [valid](http://tools.ietf.org/html/rfc4627), non-empty JSON blob. The
     * maximum length is 32768 characters.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     *
     * - *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
     * - If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission
     *   to view the issue.
     * - *Edit all worklogs*[ project permission](https://confluence.atlassian.com/x/yodKLg) to update any worklog or *Edit
     *   own worklogs* to update worklogs created by the user.
     * - If the worklog has visibility restrictions, belongs to the group or has the role visibility is restricted to.
     */
    setWorklogProperty<T = unknown>(parameters: Parameters.SetWorklogProperty, callback?: never): Promise<T>;
    /**
     * Deletes a worklog property.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     *
     * - *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
     * - If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission
     *   to view the issue.
     * - If the worklog has visibility restrictions, belongs to the group or has the role visibility is restricted to.
     */
    deleteWorklogProperty<T = void>(parameters: Parameters.DeleteWorklogProperty, callback: Callback<T>): Promise<void>;
    /**
     * Deletes a worklog property.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     *
     * - *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
     * - If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission
     *   to view the issue.
     * - If the worklog has visibility restrictions, belongs to the group or has the role visibility is restricted to.
     */
    deleteWorklogProperty<T = void>(parameters: Parameters.DeleteWorklogProperty, callback?: never): Promise<T>;
}
