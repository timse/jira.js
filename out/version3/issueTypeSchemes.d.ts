import * as Models from './models';
import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback } from '../callback';
export declare class IssueTypeSchemes {
    private client;
    constructor(client: Client);
    /**
     * Returns a [paginated](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#pagination) list of issue
     * type schemes.
     *
     * Only issue type schemes used in classic projects are returned.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    getAllIssueTypeSchemes<T = Models.PageBeanIssueTypeScheme>(parameters: Parameters.GetAllIssueTypeSchemes | undefined, callback: Callback<T>): Promise<void>;
    /**
     * Returns a [paginated](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#pagination) list of issue
     * type schemes.
     *
     * Only issue type schemes used in classic projects are returned.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    getAllIssueTypeSchemes<T = Models.PageBeanIssueTypeScheme>(parameters?: Parameters.GetAllIssueTypeSchemes, callback?: never): Promise<T>;
    /**
     * Creates an issue type scheme.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    createIssueTypeScheme<T = Models.IssueTypeSchemeID>(parameters: Parameters.CreateIssueTypeScheme | undefined, callback: Callback<T>): Promise<void>;
    /**
     * Creates an issue type scheme.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    createIssueTypeScheme<T = Models.IssueTypeSchemeID>(parameters?: Parameters.CreateIssueTypeScheme, callback?: never): Promise<T>;
    /**
     * Returns a [paginated](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#pagination) list of issue
     * type scheme items.
     *
     * Only issue type scheme items used in classic projects are returned.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    getIssueTypeSchemesMapping<T = Models.PageBeanIssueTypeSchemeMapping>(parameters: Parameters.GetIssueTypeSchemesMapping | undefined, callback: Callback<T>): Promise<void>;
    /**
     * Returns a [paginated](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#pagination) list of issue
     * type scheme items.
     *
     * Only issue type scheme items used in classic projects are returned.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    getIssueTypeSchemesMapping<T = Models.PageBeanIssueTypeSchemeMapping>(parameters?: Parameters.GetIssueTypeSchemesMapping, callback?: never): Promise<T>;
    /**
     * Returns a [paginated](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#pagination) list of issue
     * type schemes and, for each issue type scheme, a list of the projects that use it.
     *
     * Only issue type schemes used in classic projects are returned.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    getIssueTypeSchemeForProjects<T = Models.PageBeanIssueTypeSchemeProjects>(parameters: Parameters.GetIssueTypeSchemeForProjects, callback: Callback<T>): Promise<void>;
    /**
     * Returns a [paginated](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#pagination) list of issue
     * type schemes and, for each issue type scheme, a list of the projects that use it.
     *
     * Only issue type schemes used in classic projects are returned.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    getIssueTypeSchemeForProjects<T = Models.PageBeanIssueTypeSchemeProjects>(parameters: Parameters.GetIssueTypeSchemeForProjects, callback?: never): Promise<T>;
    /**
     * Assigns an issue type scheme to a project.
     *
     * If any issues in the project are assigned issue types not present in the new scheme, the operation will fail. To
     * complete the assignment those issues must be updated to use issue types in the new scheme.
     *
     * Issue type schemes can only be assigned to classic projects.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    assignIssueTypeSchemeToProject<T = void>(parameters: Parameters.AssignIssueTypeSchemeToProject | undefined, callback: Callback<T>): Promise<void>;
    /**
     * Assigns an issue type scheme to a project.
     *
     * If any issues in the project are assigned issue types not present in the new scheme, the operation will fail. To
     * complete the assignment those issues must be updated to use issue types in the new scheme.
     *
     * Issue type schemes can only be assigned to classic projects.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    assignIssueTypeSchemeToProject<T = void>(parameters?: Parameters.AssignIssueTypeSchemeToProject, callback?: never): Promise<T>;
    /**
     * Updates an issue type scheme.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    updateIssueTypeScheme<T = void>(parameters: Parameters.UpdateIssueTypeScheme, callback: Callback<T>): Promise<void>;
    /**
     * Updates an issue type scheme.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    updateIssueTypeScheme<T = void>(parameters: Parameters.UpdateIssueTypeScheme, callback?: never): Promise<T>;
    /**
     * Deletes an issue type scheme.
     *
     * Only issue type schemes used in classic projects can be deleted.
     *
     * Any projects assigned to the scheme are reassigned to the default issue type scheme.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    deleteIssueTypeScheme<T = void>(parameters: Parameters.DeleteIssueTypeScheme, callback: Callback<T>): Promise<void>;
    /**
     * Deletes an issue type scheme.
     *
     * Only issue type schemes used in classic projects can be deleted.
     *
     * Any projects assigned to the scheme are reassigned to the default issue type scheme.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    deleteIssueTypeScheme<T = void>(parameters: Parameters.DeleteIssueTypeScheme, callback?: never): Promise<T>;
    /**
     * Adds issue types to an issue type scheme.
     *
     * The added issue types are appended to the issue types list.
     *
     * If any of the issue types exist in the issue type scheme, the operation fails and no issue types are added.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    addIssueTypesToIssueTypeScheme<T = void>(parameters: Parameters.AddIssueTypesToIssueTypeScheme, callback: Callback<T>): Promise<void>;
    /**
     * Adds issue types to an issue type scheme.
     *
     * The added issue types are appended to the issue types list.
     *
     * If any of the issue types exist in the issue type scheme, the operation fails and no issue types are added.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    addIssueTypesToIssueTypeScheme<T = void>(parameters: Parameters.AddIssueTypesToIssueTypeScheme, callback?: never): Promise<T>;
    /**
     * Changes the order of issue types in an issue type scheme.
     *
     * The request body parameters must meet the following requirements:
     *
     * - All of the issue types must belong to the issue type scheme.
     * - Either `after` or `position` must be provided.
     * - The issue type in `after` must not be in the issue type list.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    reorderIssueTypesInIssueTypeScheme<T = void>(parameters: Parameters.ReorderIssueTypesInIssueTypeScheme, callback: Callback<T>): Promise<void>;
    /**
     * Changes the order of issue types in an issue type scheme.
     *
     * The request body parameters must meet the following requirements:
     *
     * - All of the issue types must belong to the issue type scheme.
     * - Either `after` or `position` must be provided.
     * - The issue type in `after` must not be in the issue type list.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    reorderIssueTypesInIssueTypeScheme<T = void>(parameters: Parameters.ReorderIssueTypesInIssueTypeScheme, callback?: never): Promise<T>;
    /**
     * Removes an issue type from an issue type scheme.
     *
     * This operation cannot remove:
     *
     * - Any issue type used by issues.
     * - Any issue types from the default issue type scheme.
     * - The last standard issue type from an issue type scheme.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    removeIssueTypeFromIssueTypeScheme<T = void>(parameters: Parameters.RemoveIssueTypeFromIssueTypeScheme, callback: Callback<T>): Promise<void>;
    /**
     * Removes an issue type from an issue type scheme.
     *
     * This operation cannot remove:
     *
     * - Any issue type used by issues.
     * - Any issue types from the default issue type scheme.
     * - The last standard issue type from an issue type scheme.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    removeIssueTypeFromIssueTypeScheme<T = void>(parameters: Parameters.RemoveIssueTypeFromIssueTypeScheme, callback?: never): Promise<T>;
}
