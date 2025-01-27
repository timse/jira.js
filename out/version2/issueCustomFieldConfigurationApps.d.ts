import * as Models from './models';
import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback } from '../callback';
export declare class IssueCustomFieldConfigurationApps {
    private client;
    constructor(client: Client);
    /**
     * Returns a [paginated](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#pagination) list of
     * configurations for a custom field created by a [Forge app](https://developer.atlassian.com/platform/forge/).
     *
     * The result can be filtered by `contextId` or `issueId`, otherwise all configurations are returned. Invalid IDs are ignored.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). Jira permissions are not required
     * for the Forge app that created the custom field.
     */
    getCustomFieldConfiguration<T = Models.PageContextualConfiguration>(parameters: Parameters.GetCustomFieldConfiguration, callback: Callback<T>): Promise<void>;
    /**
     * Returns a [paginated](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#pagination) list of
     * configurations for a custom field created by a [Forge app](https://developer.atlassian.com/platform/forge/).
     *
     * The result can be filtered by `contextId` or `issueId`, otherwise all configurations are returned. Invalid IDs are ignored.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). Jira permissions are not required
     * for the Forge app that created the custom field.
     */
    getCustomFieldConfiguration<T = Models.PageContextualConfiguration>(parameters: Parameters.GetCustomFieldConfiguration, callback?: never): Promise<T>;
    /**
     * Update the configuration for contexts of a custom field created by a [Forge
     * app](https://developer.atlassian.com/platform/forge/).
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). Jira permissions are not required
     * for the Forge app that created the custom field.
     */
    updateCustomFieldConfiguration<T = unknown>(parameters: Parameters.UpdateCustomFieldConfiguration, callback: Callback<T>): Promise<void>;
    /**
     * Update the configuration for contexts of a custom field created by a [Forge
     * app](https://developer.atlassian.com/platform/forge/).
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). Jira permissions are not required
     * for the Forge app that created the custom field.
     */
    updateCustomFieldConfiguration<T = unknown>(parameters: Parameters.UpdateCustomFieldConfiguration, callback?: never): Promise<T>;
}
