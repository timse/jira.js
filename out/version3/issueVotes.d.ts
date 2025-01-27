import * as Models from './models';
import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback } from '../callback';
export declare class IssueVotes {
    private client;
    constructor(client: Client);
    /**
     * Returns details about the votes on an issue.
     *
     * This operation requires the **Allow users to vote on issues** option to be *ON*. This option is set in General
     * configuration for Jira. See [Configuring Jira application options](https://confluence.atlassian.com/x/uYXKM) for details.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     *
     * - *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is ini
     * - If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission
     *   to view the issue.
     *
     * Note that users with the necessary permissions for this operation but without the *View voters and watchers*
     * project permissions are not returned details in the `voters` field.
     */
    getVotes<T = Models.Votes>(parameters: Parameters.GetVotes, callback: Callback<T>): Promise<void>;
    /**
     * Returns details about the votes on an issue.
     *
     * This operation requires the **Allow users to vote on issues** option to be *ON*. This option is set in General
     * configuration for Jira. See [Configuring Jira application options](https://confluence.atlassian.com/x/uYXKM) for details.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     *
     * - *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is ini
     * - If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission
     *   to view the issue.
     *
     * Note that users with the necessary permissions for this operation but without the *View voters and watchers*
     * project permissions are not returned details in the `voters` field.
     */
    getVotes<T = Models.Votes>(parameters: Parameters.GetVotes, callback?: never): Promise<T>;
    /**
     * Adds the user's vote to an issue. This is the equivalent of the user clicking *Vote* on an issue in Jira.
     *
     * This operation requires the **Allow users to vote on issues** option to be *ON*. This option is set in General
     * configuration for Jira. See [Configuring Jira application options](https://confluence.atlassian.com/x/uYXKM) for details.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     *
     * - *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
     * - If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission
     *   to view the issue.
     */
    addVote<T = void>(parameters: Parameters.AddVote, callback: Callback<T>): Promise<void>;
    /**
     * Adds the user's vote to an issue. This is the equivalent of the user clicking *Vote* on an issue in Jira.
     *
     * This operation requires the **Allow users to vote on issues** option to be *ON*. This option is set in General
     * configuration for Jira. See [Configuring Jira application options](https://confluence.atlassian.com/x/uYXKM) for details.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     *
     * - *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
     * - If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission
     *   to view the issue.
     */
    addVote<T = void>(parameters: Parameters.AddVote, callback?: never): Promise<T>;
    /**
     * Deletes a user's vote from an issue. This is the equivalent of the user clicking *Unvote* on an issue in Jira.
     *
     * This operation requires the **Allow users to vote on issues** option to be *ON*. This option is set in General
     * configuration for Jira. See [Configuring Jira application options](https://confluence.atlassian.com/x/uYXKM) for details.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     *
     * - *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
     * - If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission
     *   to view the issue.
     */
    removeVote<T = void>(parameters: Parameters.RemoveVote, callback: Callback<T>): Promise<void>;
    /**
     * Deletes a user's vote from an issue. This is the equivalent of the user clicking *Unvote* on an issue in Jira.
     *
     * This operation requires the **Allow users to vote on issues** option to be *ON*. This option is set in General
     * configuration for Jira. See [Configuring Jira application options](https://confluence.atlassian.com/x/uYXKM) for details.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     *
     * - *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
     * - If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission
     *   to view the issue.
     */
    removeVote<T = void>(parameters: Parameters.RemoveVote, callback?: never): Promise<T>;
}
