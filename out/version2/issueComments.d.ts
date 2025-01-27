import * as Models from './models';
import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback } from '../callback';
export declare class IssueComments {
    private client;
    constructor(client: Client);
    /**
     * Returns a [paginated](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#pagination) list of just
     * the comments for a list of comments specified by comment IDs.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * Comments are returned where the user:
     *
     * - Has *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the comment.
     * - If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission
     *   to view the issue.
     * - If the comment has visibility restrictions, belongs to the group or has the role visibility is restricted to.
     */
    getCommentsByIds<T = Models.PageBeanComment>(parameters: Parameters.GetCommentsByIds | undefined, callback: Callback<T>): Promise<void>;
    /**
     * Returns a [paginated](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#pagination) list of just
     * the comments for a list of comments specified by comment IDs.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * Comments are returned where the user:
     *
     * - Has *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the comment.
     * - If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission
     *   to view the issue.
     * - If the comment has visibility restrictions, belongs to the group or has the role visibility is restricted to.
     */
    getCommentsByIds<T = Models.PageBeanComment>(parameters?: Parameters.GetCommentsByIds, callback?: never): Promise<T>;
    /**
     * Returns all comments for an issue.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * Comments are included in the response where the user has:
     *
     * - *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the comment.
     * - If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission
     *   to view the issue.
     * - If the comment has visibility restrictions, belongs to the group or has the role visibility is role visibility is
     *   restricted to.
     */
    getComments<T = Models.PageOfComments>(parameters: Parameters.GetComments, callback: Callback<T>): Promise<void>;
    /**
     * Returns all comments for an issue.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * Comments are included in the response where the user has:
     *
     * - *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the comment.
     * - If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission
     *   to view the issue.
     * - If the comment has visibility restrictions, belongs to the group or has the role visibility is role visibility is
     *   restricted to.
     */
    getComments<T = Models.PageOfComments>(parameters: Parameters.GetComments, callback?: never): Promise<T>;
    /**
     * Adds a comment to an issue.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     *
     * - *Browse projects* and *Add comments* [ project permission](https://confluence.atlassian.com/x/yodKLg) for the
     *   project that the issue containing the comment is in.
     * - If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission
     *   to view the issue.
     */
    addComment<T = Models.Comment>(parameters: Parameters.AddComment, callback: Callback<T>): Promise<void>;
    /**
     * Adds a comment to an issue.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     *
     * - *Browse projects* and *Add comments* [ project permission](https://confluence.atlassian.com/x/yodKLg) for the
     *   project that the issue containing the comment is in.
     * - If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission
     *   to view the issue.
     */
    addComment<T = Models.Comment>(parameters: Parameters.AddComment, callback?: never): Promise<T>;
    /**
     * Returns a comment.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     *
     * - *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the comment.
     * - If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission
     *   to view the issue.
     * - If the comment has visibility restrictions, the user belongs to the group or has the role visibility is restricted to.
     */
    getComment<T = Models.Comment>(parameters: Parameters.GetComment, callback: Callback<T>): Promise<void>;
    /**
     * Returns a comment.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     *
     * - *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the comment.
     * - If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission
     *   to view the issue.
     * - If the comment has visibility restrictions, the user belongs to the group or has the role visibility is restricted to.
     */
    getComment<T = Models.Comment>(parameters: Parameters.GetComment, callback?: never): Promise<T>;
    /**
     * Updates a comment.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     *
     * - *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue
     *   containing the comment is in.
     * - If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission
     *   to view the issue.
     * - *Edit all comments*[ project permission](https://confluence.atlassian.com/x/yodKLg) to update any comment or *Edit
     *   own comments* to update comment created by the user.
     * - If the comment has visibility restrictions, the user belongs to the group or has the role visibility is restricted to.
     */
    updateComment<T = Models.Comment>(parameters: Parameters.UpdateComment, callback: Callback<T>): Promise<void>;
    /**
     * Updates a comment.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     *
     * - *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue
     *   containing the comment is in.
     * - If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission
     *   to view the issue.
     * - *Edit all comments*[ project permission](https://confluence.atlassian.com/x/yodKLg) to update any comment or *Edit
     *   own comments* to update comment created by the user.
     * - If the comment has visibility restrictions, the user belongs to the group or has the role visibility is restricted to.
     */
    updateComment<T = Models.Comment>(parameters: Parameters.UpdateComment, callback?: never): Promise<T>;
    /**
     * Deletes a comment.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     *
     * - *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue
     *   containing the comment is in.
     * - If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission
     *   to view the issue.
     * - *Delete all comments*[ project permission](https://confluence.atlassian.com/x/yodKLg) to delete any comment or
     *   *Delete own comments* to delete comment created by the user,
     * - If the comment has visibility restrictions, the user belongs to the group or has the role visibility is restricted to.
     */
    deleteComment<T = void>(parameters: Parameters.DeleteComment, callback: Callback<T>): Promise<void>;
    /**
     * Deletes a comment.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     *
     * - *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue
     *   containing the comment is in.
     * - If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission
     *   to view the issue.
     * - *Delete all comments*[ project permission](https://confluence.atlassian.com/x/yodKLg) to delete any comment or
     *   *Delete own comments* to delete comment created by the user,
     * - If the comment has visibility restrictions, the user belongs to the group or has the role visibility is restricted to.
     */
    deleteComment<T = void>(parameters: Parameters.DeleteComment, callback?: never): Promise<T>;
}
