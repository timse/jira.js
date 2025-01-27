import * as Models from './models';
import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback } from '../callback';
export declare class IssueWorklogs {
    private client;
    constructor(client: Client);
    /**
     * Returns worklogs for an issue, starting from the oldest worklog or from the worklog started on or after a date and time.
     *
     * Time tracking must be enabled in Jira, otherwise this operation returns an error. For more information, see
     * [Configuring time tracking](https://confluence.atlassian.com/x/qoXKM).
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * Workloads are only returned where the user has:
     *
     * - *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
     * - If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission
     *   to view the issue.
     * - If the worklog has visibility restrictions, belongs to the group or has the role visibility is restricted to.
     */
    getIssueWorklog<T = Models.PageOfWorklogs>(parameters: Parameters.GetIssueWorklog, callback: Callback<T>): Promise<void>;
    /**
     * Returns worklogs for an issue, starting from the oldest worklog or from the worklog started on or after a date and time.
     *
     * Time tracking must be enabled in Jira, otherwise this operation returns an error. For more information, see
     * [Configuring time tracking](https://confluence.atlassian.com/x/qoXKM).
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * Workloads are only returned where the user has:
     *
     * - *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
     * - If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission
     *   to view the issue.
     * - If the worklog has visibility restrictions, belongs to the group or has the role visibility is restricted to.
     */
    getIssueWorklog<T = Models.PageOfWorklogs>(parameters: Parameters.GetIssueWorklog, callback?: never): Promise<T>;
    /**
     * Adds a worklog to an issue.
     *
     * Time tracking must be enabled in Jira, otherwise this operation returns an error. For more information, see
     * [Configuring time tracking](https://confluence.atlassian.com/x/qoXKM).
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     *
     * - *Browse projects* and *Work on issues* [project permission](https://confluence.atlassian.com/x/yodKLg) for the
     *   project that the issue is in.
     * - If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission
     *   to view the issue.
     */
    addWorklog<T = Models.Worklog>(parameters: Parameters.AddWorklog, callback: Callback<T>): Promise<void>;
    /**
     * Adds a worklog to an issue.
     *
     * Time tracking must be enabled in Jira, otherwise this operation returns an error. For more information, see
     * [Configuring time tracking](https://confluence.atlassian.com/x/qoXKM).
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     *
     * - *Browse projects* and *Work on issues* [project permission](https://confluence.atlassian.com/x/yodKLg) for the
     *   project that the issue is in.
     * - If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission
     *   to view the issue.
     */
    addWorklog<T = Models.Worklog>(parameters: Parameters.AddWorklog, callback?: never): Promise<T>;
    /**
     * Returns a worklog.
     *
     * Time tracking must be enabled in Jira, otherwise this operation returns an error. For more information, see
     * [Configuring time tracking](https://confluence.atlassian.com/x/qoXKM).
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     *
     * - *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
     * - If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission
     *   to view the issue.
     * - If the worklog has visibility restrictions, belongs to the group or has the role visibility is restricted to.
     */
    getWorklog<T = Models.Worklog>(parameters: Parameters.GetWorklog, callback: Callback<T>): Promise<void>;
    /**
     * Returns a worklog.
     *
     * Time tracking must be enabled in Jira, otherwise this operation returns an error. For more information, see
     * [Configuring time tracking](https://confluence.atlassian.com/x/qoXKM).
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     *
     * - *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
     * - If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission
     *   to view the issue.
     * - If the worklog has visibility restrictions, belongs to the group or has the role visibility is restricted to.
     */
    getWorklog<T = Models.Worklog>(parameters: Parameters.GetWorklog, callback?: never): Promise<T>;
    /**
     * Updates a worklog.
     *
     * Time tracking must be enabled in Jira, otherwise this operation returns an error. For more information, see
     * [Configuring time tracking](https://confluence.atlassian.com/x/qoXKM).
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     *
     * - *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
     * - If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission
     *   to view the issue.
     * - *Edit all worklogs*[ project permission](https://confluence.atlassian.com/x/yodKLg) to update any worklog or *Edit
     *   own worklogs* to update worklogs created by the user.
     * - If the worklog has visibility restrictions, belongs to the group or has the role visibility is restricted to.
     */
    updateWorklog<T = Models.Worklog>(parameters: Parameters.UpdateWorklog, callback: Callback<T>): Promise<void>;
    /**
     * Updates a worklog.
     *
     * Time tracking must be enabled in Jira, otherwise this operation returns an error. For more information, see
     * [Configuring time tracking](https://confluence.atlassian.com/x/qoXKM).
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     *
     * - *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
     * - If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission
     *   to view the issue.
     * - *Edit all worklogs*[ project permission](https://confluence.atlassian.com/x/yodKLg) to update any worklog or *Edit
     *   own worklogs* to update worklogs created by the user.
     * - If the worklog has visibility restrictions, belongs to the group or has the role visibility is restricted to.
     */
    updateWorklog<T = Models.Worklog>(parameters: Parameters.UpdateWorklog, callback?: never): Promise<T>;
    /**
     * Deletes a worklog from an issue.
     *
     * Time tracking must be enabled in Jira, otherwise this operation returns an error. For more information, see
     * [Configuring time tracking](https://confluence.atlassian.com/x/qoXKM).
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     *
     * - *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
     * - If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission
     *   to view the issue.
     * - *Delete all worklogs*[ project permission](https://confluence.atlassian.com/x/yodKLg) to delete any worklog or
     *   *Delete own worklogs* to delete worklogs created by the user,
     * - If the worklog has visibility restrictions, belongs to the group or has the role visibility is restricted to.
     */
    deleteWorklog<T = void>(parameters: Parameters.DeleteWorklog, callback: Callback<T>): Promise<void>;
    /**
     * Deletes a worklog from an issue.
     *
     * Time tracking must be enabled in Jira, otherwise this operation returns an error. For more information, see
     * [Configuring time tracking](https://confluence.atlassian.com/x/qoXKM).
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     *
     * - *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
     * - If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission
     *   to view the issue.
     * - *Delete all worklogs*[ project permission](https://confluence.atlassian.com/x/yodKLg) to delete any worklog or
     *   *Delete own worklogs* to delete worklogs created by the user,
     * - If the worklog has visibility restrictions, belongs to the group or has the role visibility is restricted to.
     */
    deleteWorklog<T = void>(parameters: Parameters.DeleteWorklog, callback?: never): Promise<T>;
    /**
     * Returns a list of IDs and delete timestamps for worklogs deleted after a date and time.
     *
     * This resource is paginated, with a limit of 1000 worklogs per page. Each page lists worklogs from oldest to
     * youngest. If the number of items in the date range exceeds 1000, `until` indicates the timestamp of the youngest
     * item on the page. Also, `nextPage` provides the URL for the next page of worklogs. The `lastPage` parameter is set
     * to true on the last page of worklogs.
     *
     * This resource does not return worklogs deleted during the minute preceding the request.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * Permission to access Jira.
     */
    getIdsOfWorklogsDeletedSince<T = Models.ChangedWorklogs>(parameters: Parameters.GetIdsOfWorklogsDeletedSince | undefined, callback: Callback<T>): Promise<void>;
    /**
     * Returns a list of IDs and delete timestamps for worklogs deleted after a date and time.
     *
     * This resource is paginated, with a limit of 1000 worklogs per page. Each page lists worklogs from oldest to
     * youngest. If the number of items in the date range exceeds 1000, `until` indicates the timestamp of the youngest
     * item on the page. Also, `nextPage` provides the URL for the next page of worklogs. The `lastPage` parameter is set
     * to true on the last page of worklogs.
     *
     * This resource does not return worklogs deleted during the minute preceding the request.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * Permission to access Jira.
     */
    getIdsOfWorklogsDeletedSince<T = Models.ChangedWorklogs>(parameters?: Parameters.GetIdsOfWorklogsDeletedSince, callback?: never): Promise<T>;
    /**
     * Returns worklog details for a list of worklog IDs.
     *
     * The returned list of worklogs is limited to 1000 items.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * Permission to access Jira, however, worklogs are only returned where either of the following is true:
     *
     * - The worklog is set as *Viewable by All Users*.
     * - The user is a member of a project role or group with permission to view the worklog.
     */
    getWorklogsForIds<T = Models.Worklog[]>(parameters: Parameters.GetWorklogsForIds | undefined, callback: Callback<T>): Promise<void>;
    /**
     * Returns worklog details for a list of worklog IDs.
     *
     * The returned list of worklogs is limited to 1000 items.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * Permission to access Jira, however, worklogs are only returned where either of the following is true:
     *
     * - The worklog is set as *Viewable by All Users*.
     * - The user is a member of a project role or group with permission to view the worklog.
     */
    getWorklogsForIds<T = Models.Worklog[]>(parameters?: Parameters.GetWorklogsForIds, callback?: never): Promise<T>;
    /**
     * Returns a list of IDs and update timestamps for worklogs updated after a date and time.
     *
     * This resource is paginated, with a limit of 1000 worklogs per page. Each page lists worklogs from oldest to
     * youngest. If the number of items in the date range exceeds 1000, `until` indicates the timestamp of the youngest
     * item on the page. Also, `nextPage` provides the URL for the next page of worklogs. The `lastPage` parameter is set
     * to true on the last page of worklogs.
     *
     * This resource does not return worklogs updated during the minute preceding the request.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * Permission to access Jira, however, worklogs are only returned where either of the following is true:
     *
     * - The worklog is set as *Viewable by All Users*.
     * - The user is a member of a project role or group with permission to view the worklog.
     */
    getIdsOfWorklogsModifiedSince<T = Models.ChangedWorklogs>(parameters: Parameters.GetIdsOfWorklogsModifiedSince | undefined, callback: Callback<T>): Promise<void>;
    /**
     * Returns a list of IDs and update timestamps for worklogs updated after a date and time.
     *
     * This resource is paginated, with a limit of 1000 worklogs per page. Each page lists worklogs from oldest to
     * youngest. If the number of items in the date range exceeds 1000, `until` indicates the timestamp of the youngest
     * item on the page. Also, `nextPage` provides the URL for the next page of worklogs. The `lastPage` parameter is set
     * to true on the last page of worklogs.
     *
     * This resource does not return worklogs updated during the minute preceding the request.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * Permission to access Jira, however, worklogs are only returned where either of the following is true:
     *
     * - The worklog is set as *Viewable by All Users*.
     * - The user is a member of a project role or group with permission to view the worklog.
     */
    getIdsOfWorklogsModifiedSince<T = Models.ChangedWorklogs>(parameters?: Parameters.GetIdsOfWorklogsModifiedSince, callback?: never): Promise<T>;
}
