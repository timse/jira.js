import * as Models from './models';
import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback } from '../callback';
export declare class ScreenTabs {
    private client;
    constructor(client: Client);
    /**
     * Returns the list of tabs for a screen.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     *
     * - *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * - *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg) when the project key is
     *   specified, providing that the screen is associated with the project through a Screen Scheme and Issue Type Screen Scheme.
     */
    getAllScreenTabs<T = Models.ScreenableTab[]>(parameters: Parameters.GetAllScreenTabs, callback: Callback<T>): Promise<void>;
    /**
     * Returns the list of tabs for a screen.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     *
     * - *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * - *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg) when the project key is
     *   specified, providing that the screen is associated with the project through a Screen Scheme and Issue Type Screen Scheme.
     */
    getAllScreenTabs<T = Models.ScreenableTab[]>(parameters: Parameters.GetAllScreenTabs, callback?: never): Promise<T>;
    /**
     * Creates a tab for a screen.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    addScreenTab<T = Models.ScreenableTab>(parameters: Parameters.AddScreenTab, callback: Callback<T>): Promise<void>;
    /**
     * Creates a tab for a screen.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    addScreenTab<T = Models.ScreenableTab>(parameters: Parameters.AddScreenTab, callback?: never): Promise<T>;
    /**
     * Updates the name of a screen tab.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    renameScreenTab<T = Models.ScreenableTab>(parameters: Parameters.RenameScreenTab, callback: Callback<T>): Promise<void>;
    /**
     * Updates the name of a screen tab.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    renameScreenTab<T = Models.ScreenableTab>(parameters: Parameters.RenameScreenTab, callback?: never): Promise<T>;
    /**
     * Deletes a screen tab.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    deleteScreenTab<T = void>(parameters: Parameters.DeleteScreenTab, callback: Callback<T>): Promise<void>;
    /**
     * Deletes a screen tab.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    deleteScreenTab<T = void>(parameters: Parameters.DeleteScreenTab, callback?: never): Promise<T>;
    /**
     * Moves a screen tab.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    moveScreenTab<T = void>(parameters: Parameters.MoveScreenTab, callback: Callback<T>): Promise<void>;
    /**
     * Moves a screen tab.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    moveScreenTab<T = void>(parameters: Parameters.MoveScreenTab, callback?: never): Promise<T>;
}
