import * as Models from './models';
import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback } from '../callback';
export declare class IssueLinkTypes {
    private client;
    constructor(client: Client);
    /**
     * Returns a list of all issue link types.
     *
     * To use this operation, the site must have [issue linking](https://confluence.atlassian.com/x/yoXKM) enabled.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:** *Browse
     * projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for a project in the site.
     */
    getIssueLinkTypes<T = Models.IssueLinkTypes>(callback: Callback<T>): Promise<void>;
    /**
     * Returns a list of all issue link types.
     *
     * To use this operation, the site must have [issue linking](https://confluence.atlassian.com/x/yoXKM) enabled.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:** *Browse
     * projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for a project in the site.
     */
    getIssueLinkTypes<T = Models.IssueLinkTypes>(callback?: never): Promise<T>;
    /**
     * Creates an issue link type. Use this operation to create descriptions of the reasons why issues are linked. The
     * issue link type consists of a name and descriptions for a link's inward and outward relationships.
     *
     * To use this operation, the site must have [issue linking](https://confluence.atlassian.com/x/yoXKM) enabled.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    createIssueLinkType<T = Models.IssueLinkType>(parameters: Parameters.CreateIssueLinkType | undefined, callback: Callback<T>): Promise<void>;
    /**
     * Creates an issue link type. Use this operation to create descriptions of the reasons why issues are linked. The
     * issue link type consists of a name and descriptions for a link's inward and outward relationships.
     *
     * To use this operation, the site must have [issue linking](https://confluence.atlassian.com/x/yoXKM) enabled.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    createIssueLinkType<T = Models.IssueLinkType>(parameters?: Parameters.CreateIssueLinkType, callback?: never): Promise<T>;
    /**
     * Returns an issue link type.
     *
     * To use this operation, the site must have [issue linking](https://confluence.atlassian.com/x/yoXKM) enabled.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:** *Browse
     * projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for a project in the site.
     */
    getIssueLinkType<T = Models.IssueLinkType>(parameters: Parameters.GetIssueLinkType, callback: Callback<T>): Promise<void>;
    /**
     * Returns an issue link type.
     *
     * To use this operation, the site must have [issue linking](https://confluence.atlassian.com/x/yoXKM) enabled.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:** *Browse
     * projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for a project in the site.
     */
    getIssueLinkType<T = Models.IssueLinkType>(parameters: Parameters.GetIssueLinkType, callback?: never): Promise<T>;
    /**
     * Updates an issue link type.
     *
     * To use this operation, the site must have [issue linking](https://confluence.atlassian.com/x/yoXKM) enabled.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    updateIssueLinkType<T = Models.IssueLinkType>(parameters: Parameters.UpdateIssueLinkType, callback: Callback<T>): Promise<void>;
    /**
     * Updates an issue link type.
     *
     * To use this operation, the site must have [issue linking](https://confluence.atlassian.com/x/yoXKM) enabled.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    updateIssueLinkType<T = Models.IssueLinkType>(parameters: Parameters.UpdateIssueLinkType, callback?: never): Promise<T>;
    /**
     * Deletes an issue link type.
     *
     * To use this operation, the site must have [issue linking](https://confluence.atlassian.com/x/yoXKM) enabled.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    deleteIssueLinkType<T = void>(parameters: Parameters.DeleteIssueLinkType, callback: Callback<T>): Promise<void>;
    /**
     * Deletes an issue link type.
     *
     * To use this operation, the site must have [issue linking](https://confluence.atlassian.com/x/yoXKM) enabled.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    deleteIssueLinkType<T = void>(parameters: Parameters.DeleteIssueLinkType, callback?: never): Promise<T>;
}
