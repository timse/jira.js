import * as Models from './models';
import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback } from '../callback';
export declare class Screens {
    private client;
    constructor(client: Client);
    /**
     * Returns a [paginated](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#pagination) list of the
     * screens a field is used in.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    getScreensForField<T = Models.PageBeanScreenWithTab>(parameters: Parameters.GetScreensForField, callback: Callback<T>): Promise<void>;
    /**
     * Returns a [paginated](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#pagination) list of the
     * screens a field is used in.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    getScreensForField<T = Models.PageBeanScreenWithTab>(parameters: Parameters.GetScreensForField, callback?: never): Promise<T>;
    /**
     * Returns a [paginated](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#pagination) list of all
     * screens or those specified by one or more screen IDs.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    getScreens<T = Models.PageBeanScreen>(parameters: Parameters.GetScreens | undefined, callback: Callback<T>): Promise<void>;
    /**
     * Returns a [paginated](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#pagination) list of all
     * screens or those specified by one or more screen IDs.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    getScreens<T = Models.PageBeanScreen>(parameters?: Parameters.GetScreens, callback?: never): Promise<T>;
    /**
     * Creates a screen with a default field tab.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    createScreen<T = Models.Screen>(parameters: Parameters.CreateScreen | undefined, callback: Callback<T>): Promise<void>;
    /**
     * Creates a screen with a default field tab.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    createScreen<T = Models.Screen>(parameters?: Parameters.CreateScreen, callback?: never): Promise<T>;
    /**
     * Adds a field to the default tab of the default screen.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    addFieldToDefaultScreen<T = unknown>(parameters: Parameters.AddFieldToDefaultScreen, callback: Callback<T>): Promise<void>;
    /**
     * Adds a field to the default tab of the default screen.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    addFieldToDefaultScreen<T = unknown>(parameters: Parameters.AddFieldToDefaultScreen, callback?: never): Promise<T>;
    /**
     * Updates a screen. Only screens used in classic projects can be updated.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    updateScreen<T = Models.Screen>(parameters: Parameters.UpdateScreen, callback: Callback<T>): Promise<void>;
    /**
     * Updates a screen. Only screens used in classic projects can be updated.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    updateScreen<T = Models.Screen>(parameters: Parameters.UpdateScreen, callback?: never): Promise<T>;
    /**
     * Deletes a screen. A screen cannot be deleted if it is used in a screen scheme, workflow, or workflow draft.
     *
     * Only screens used in classic projects can be deleted.
     */
    deleteScreen<T = void>(parameters: Parameters.DeleteScreen, callback: Callback<T>): Promise<void>;
    /**
     * Deletes a screen. A screen cannot be deleted if it is used in a screen scheme, workflow, or workflow draft.
     *
     * Only screens used in classic projects can be deleted.
     */
    deleteScreen<T = void>(parameters: Parameters.DeleteScreen, callback?: never): Promise<T>;
    /**
     * Returns the fields that can be added to a tab on a screen.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    getAvailableScreenFields<T = Models.ScreenableField[]>(parameters: Parameters.GetAvailableScreenFields, callback: Callback<T>): Promise<void>;
    /**
     * Returns the fields that can be added to a tab on a screen.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    getAvailableScreenFields<T = Models.ScreenableField[]>(parameters: Parameters.GetAvailableScreenFields, callback?: never): Promise<T>;
}
