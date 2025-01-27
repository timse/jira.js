import * as Models from './models';
import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback } from '../callback';
export declare class ScreenSchemes {
    private client;
    constructor(client: Client);
    /**
     * Returns a [paginated](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#pagination) list of screen schemes.
     *
     * Only screen schemes used in classic projects are returned.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    getScreenSchemes<T = Models.PageBeanScreenScheme>(parameters: Parameters.GetScreenSchemes | undefined, callback: Callback<T>): Promise<void>;
    /**
     * Returns a [paginated](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#pagination) list of screen schemes.
     *
     * Only screen schemes used in classic projects are returned.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    getScreenSchemes<T = Models.PageBeanScreenScheme>(parameters?: Parameters.GetScreenSchemes, callback?: never): Promise<T>;
    /**
     * Creates a screen scheme.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    createScreenScheme<T = Models.ScreenSchemeId>(parameters: Parameters.CreateScreenScheme | undefined, callback: Callback<T>): Promise<void>;
    /**
     * Creates a screen scheme.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    createScreenScheme<T = Models.ScreenSchemeId>(parameters?: Parameters.CreateScreenScheme, callback?: never): Promise<T>;
    /**
     * Updates a screen scheme. Only screen schemes used in classic projects can be updated.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    updateScreenScheme<T = void>(parameters: Parameters.UpdateScreenScheme, callback: Callback<T>): Promise<void>;
    /**
     * Updates a screen scheme. Only screen schemes used in classic projects can be updated.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    updateScreenScheme<T = void>(parameters: Parameters.UpdateScreenScheme, callback?: never): Promise<T>;
    /**
     * Deletes a screen scheme. A screen scheme cannot be deleted if it is used in an issue type screen scheme.
     *
     * Only screens schemes used in classic projects can be deleted.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    deleteScreenScheme<T = void>(parameters: Parameters.DeleteScreenScheme, callback: Callback<T>): Promise<void>;
    /**
     * Deletes a screen scheme. A screen scheme cannot be deleted if it is used in an issue type screen scheme.
     *
     * Only screens schemes used in classic projects can be deleted.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    deleteScreenScheme<T = void>(parameters: Parameters.DeleteScreenScheme, callback?: never): Promise<T>;
}
