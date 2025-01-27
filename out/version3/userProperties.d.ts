import * as Models from './models';
import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback } from '../callback';
export declare class UserProperties {
    private client;
    constructor(client: Client);
    /**
     * Returns the keys of all properties for a user.
     *
     * Note: This operation does not access the [user properties](https://confluence.atlassian.com/x/8YxjL) created and
     * maintained in Jira.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     *
     * - *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg), to access the property keys on any user.
     * - Access to Jira, to access the calling user's property keys.
     */
    getUserPropertyKeys<T = Models.PropertyKeys>(parameters: Parameters.GetUserPropertyKeys | undefined, callback: Callback<T>): Promise<void>;
    /**
     * Returns the keys of all properties for a user.
     *
     * Note: This operation does not access the [user properties](https://confluence.atlassian.com/x/8YxjL) created and
     * maintained in Jira.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     *
     * - *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg), to access the property keys on any user.
     * - Access to Jira, to access the calling user's property keys.
     */
    getUserPropertyKeys<T = Models.PropertyKeys>(parameters?: Parameters.GetUserPropertyKeys, callback?: never): Promise<T>;
    /**
     * Returns the value of a user's property. If no property key is provided [Get user property
     * keys](#api-rest-api-3-user-properties-get) is called.
     *
     * Note: This operation does not access the [user properties](https://confluence.atlassian.com/x/8YxjL) created and
     * maintained in Jira.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     *
     * - *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg), to get a property from any user.
     * - Access to Jira, to get a property from the calling user's record.
     */
    getUserProperty<T = Models.EntityProperty>(parameters: Parameters.GetUserProperty, callback: Callback<T>): Promise<void>;
    /**
     * Returns the value of a user's property. If no property key is provided [Get user property
     * keys](#api-rest-api-3-user-properties-get) is called.
     *
     * Note: This operation does not access the [user properties](https://confluence.atlassian.com/x/8YxjL) created and
     * maintained in Jira.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     *
     * - *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg), to get a property from any user.
     * - Access to Jira, to get a property from the calling user's record.
     */
    getUserProperty<T = Models.EntityProperty>(parameters: Parameters.GetUserProperty, callback?: never): Promise<T>;
    /**
     * Sets the value of a user's property. Use this resource to store custom data against a user.
     *
     * Note: This operation does not access the [user properties](https://confluence.atlassian.com/x/8YxjL) created and
     * maintained in Jira.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     *
     * - *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg), to set a property on any user.
     * - Access to Jira, to set a property on the calling user's record.
     */
    setUserProperty<T = unknown>(parameters: Parameters.SetUserProperty, callback: Callback<T>): Promise<void>;
    /**
     * Sets the value of a user's property. Use this resource to store custom data against a user.
     *
     * Note: This operation does not access the [user properties](https://confluence.atlassian.com/x/8YxjL) created and
     * maintained in Jira.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     *
     * - *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg), to set a property on any user.
     * - Access to Jira, to set a property on the calling user's record.
     */
    setUserProperty<T = unknown>(parameters: Parameters.SetUserProperty, callback?: never): Promise<T>;
    /**
     * Deletes a property from a user.
     *
     * Note: This operation does not access the [user properties](https://confluence.atlassian.com/x/8YxjL) created and
     * maintained in Jira.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     *
     * - *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg), to delete a property from any user.
     * - Access to Jira, to delete a property from the calling user's record.
     */
    deleteUserProperty<T = void>(parameters: Parameters.DeleteUserProperty, callback: Callback<T>): Promise<void>;
    /**
     * Deletes a property from a user.
     *
     * Note: This operation does not access the [user properties](https://confluence.atlassian.com/x/8YxjL) created and
     * maintained in Jira.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     *
     * - *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg), to delete a property from any user.
     * - Access to Jira, to delete a property from the calling user's record.
     */
    deleteUserProperty<T = void>(parameters: Parameters.DeleteUserProperty, callback?: never): Promise<T>;
}
