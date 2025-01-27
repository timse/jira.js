import * as Models from './models';
import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback } from '../callback';
export declare class Groups {
    private client;
    constructor(client: Client);
    /**
     * @deprecated This operation is deprecated, use
     *   [`group/member`](https://developer.atlassian.com/cloud/jira/platform/rest/v2/api-group-groups/#api-rest-api-2-group-member-get).
     *
     *   Returns all users in a group.
     *
     *   **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     *   *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    getGroup<T = Models.Group>(parameters: Parameters.GetGroup, callback: Callback<T>): Promise<void>;
    /**
     * @deprecated This operation is deprecated, use
     *   [`group/member`](https://developer.atlassian.com/cloud/jira/platform/rest/v2/api-group-groups/#api-rest-api-2-group-member-get).
     *
     *   Returns all users in a group.
     *
     *   **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     *   *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    getGroup<T = Models.Group>(parameters: Parameters.GetGroup, callback?: never): Promise<T>;
    /**
     * Creates a group.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:** Site
     * administration (that is, member of the *site-admin* [group](https://confluence.atlassian.com/x/24xjL)).
     */
    createGroup<T = Models.Group>(parameters: Parameters.CreateGroup | undefined, callback: Callback<T>): Promise<void>;
    /**
     * Creates a group.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:** Site
     * administration (that is, member of the *site-admin* [group](https://confluence.atlassian.com/x/24xjL)).
     */
    createGroup<T = Models.Group>(parameters?: Parameters.CreateGroup, callback?: never): Promise<T>;
    /**
     * Deletes a group.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:** Site
     * administration (that is, member of the *site-admin* strategic [group](https://confluence.atlassian.com/x/24xjL)).
     */
    removeGroup<T = string>(parameters: Parameters.RemoveGroup, callback: Callback<T>): Promise<void>;
    /**
     * Deletes a group.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:** Site
     * administration (that is, member of the *site-admin* strategic [group](https://confluence.atlassian.com/x/24xjL)).
     */
    removeGroup<T = string>(parameters: Parameters.RemoveGroup, callback?: never): Promise<T>;
    /**
     * Returns a [paginated](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#pagination) list of groups.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:** *Browse
     * users and groups* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    bulkGetGroups<T = Models.PageBeanGroupDetails>(parameters: Parameters.BulkGetGroups | undefined, callback: Callback<T>): Promise<void>;
    /**
     * Returns a [paginated](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#pagination) list of groups.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:** *Browse
     * users and groups* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    bulkGetGroups<T = Models.PageBeanGroupDetails>(parameters?: Parameters.BulkGetGroups, callback?: never): Promise<T>;
    /**
     * Returns a [paginated](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#pagination) list of all
     * users in a group.
     *
     * Note that users are ordered by username, however the username is not returned in the results due to privacy reasons.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    getUsersFromGroup<T = Models.PageBeanUserDetails>(parameters: Parameters.GetUsersFromGroup, callback: Callback<T>): Promise<void>;
    /**
     * Returns a [paginated](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#pagination) list of all
     * users in a group.
     *
     * Note that users are ordered by username, however the username is not returned in the results due to privacy reasons.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    getUsersFromGroup<T = Models.PageBeanUserDetails>(parameters: Parameters.GetUsersFromGroup, callback?: never): Promise<T>;
    /**
     * Adds a user to a group.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:** Site
     * administration (that is, member of the *site-admin* [group](https://confluence.atlassian.com/x/24xjL)).
     */
    addUserToGroup<T = Models.Group>(parameters: Parameters.AddUserToGroup, callback: Callback<T>): Promise<void>;
    /**
     * Adds a user to a group.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:** Site
     * administration (that is, member of the *site-admin* [group](https://confluence.atlassian.com/x/24xjL)).
     */
    addUserToGroup<T = Models.Group>(parameters: Parameters.AddUserToGroup, callback?: never): Promise<T>;
    /**
     * Removes a user from a group.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:** Site
     * administration (that is, member of the *site-admin* [group](https://confluence.atlassian.com/x/24xjL)).
     */
    removeUserFromGroup<T = unknown>(parameters: Parameters.RemoveUserFromGroup, callback: Callback<T>): Promise<void>;
    /**
     * Removes a user from a group.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:** Site
     * administration (that is, member of the *site-admin* [group](https://confluence.atlassian.com/x/24xjL)).
     */
    removeUserFromGroup<T = unknown>(parameters: Parameters.RemoveUserFromGroup, callback?: never): Promise<T>;
    /**
     * Returns a list of groups whose names contain a query string. A list of group names can be provided to exclude
     * groups from the results.
     *
     * The primary use case for this resource is to populate a group picker suggestions list. To this end, the returned
     * object includes the `html` field where the matched query term is highlighted in the group name with the HTML strong
     * tag. Also, the groups list is wrapped in a response object that contains a header for use in the picker,
     * specifically *Showing X of Y matching groups*.
     *
     * The list returns with the groups sorted. If no groups match the list criteria, an empty list is returned.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:** *Browse
     * projects* [project permission](https://confluence.atlassian.com/x/yodKLg). Anonymous calls and calls by users
     * without the required permission return an empty list.
     */
    findGroups<T = Models.FoundGroups>(parameters: Parameters.FindGroups | undefined, callback: Callback<T>): Promise<void>;
    /**
     * Returns a list of groups whose names contain a query string. A list of group names can be provided to exclude
     * groups from the results.
     *
     * The primary use case for this resource is to populate a group picker suggestions list. To this end, the returned
     * object includes the `html` field where the matched query term is highlighted in the group name with the HTML strong
     * tag. Also, the groups list is wrapped in a response object that contains a header for use in the picker,
     * specifically *Showing X of Y matching groups*.
     *
     * The list returns with the groups sorted. If no groups match the list criteria, an empty list is returned.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:** *Browse
     * projects* [project permission](https://confluence.atlassian.com/x/yodKLg). Anonymous calls and calls by users
     * without the required permission return an empty list.
     */
    findGroups<T = Models.FoundGroups>(parameters?: Parameters.FindGroups, callback?: never): Promise<T>;
}
