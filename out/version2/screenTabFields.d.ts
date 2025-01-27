import * as Models from './models';
import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback } from '../callback';
export declare class ScreenTabFields {
    private client;
    constructor(client: Client);
    /**
     * Returns all fields for a screen tab.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     *
     * - *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * - *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg) when the project key is
     *   specified, providing that the screen is associated with the project through a Screen Scheme and Issue Type Screen Scheme.
     */
    getAllScreenTabFields<T = Models.ScreenableField[]>(parameters: Parameters.GetAllScreenTabFields, callback: Callback<T>): Promise<void>;
    /**
     * Returns all fields for a screen tab.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     *
     * - *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * - *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg) when the project key is
     *   specified, providing that the screen is associated with the project through a Screen Scheme and Issue Type Screen Scheme.
     */
    getAllScreenTabFields<T = Models.ScreenableField[]>(parameters: Parameters.GetAllScreenTabFields, callback?: never): Promise<T>;
    /**
     * Adds a field to a screen tab.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    addScreenTabField<T = Models.ScreenableField>(parameters: Parameters.AddScreenTabField, callback: Callback<T>): Promise<void>;
    /**
     * Adds a field to a screen tab.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    addScreenTabField<T = Models.ScreenableField>(parameters: Parameters.AddScreenTabField, callback?: never): Promise<T>;
    /**
     * Removes a field from a screen tab.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    removeScreenTabField<T = void>(parameters: Parameters.RemoveScreenTabField, callback: Callback<T>): Promise<void>;
    /**
     * Removes a field from a screen tab.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    removeScreenTabField<T = void>(parameters: Parameters.RemoveScreenTabField, callback?: never): Promise<T>;
    /**
     * Moves a screen tab field.
     *
     * If `after` and `position` are provided in the request, `position` is ignored.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    moveScreenTabField<T = void>(parameters: Parameters.MoveScreenTabField, callback: Callback<T>): Promise<void>;
    /**
     * Moves a screen tab field.
     *
     * If `after` and `position` are provided in the request, `position` is ignored.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    moveScreenTabField<T = void>(parameters: Parameters.MoveScreenTabField, callback?: never): Promise<T>;
}
