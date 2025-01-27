import * as Models from './models';
import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback } from '../callback';
export declare class IssueCustomFieldContexts {
    private client;
    constructor(client: Client);
    /**
     * Returns a [paginated](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#pagination) list of [
     * contexts](https://confluence.atlassian.com/adminjiracloud/what-are-custom-field-contexts-991923859.html) for a
     * custom field. Contexts can be returned as follows:
     *
     * - With no other parameters set, all contexts.
     * - By defining `id` only, all contexts from the list of IDs.
     * - By defining `isAnyIssueType`, limit the list of contexts returned to either those that apply to all issue types
     *   (true) or those that apply to only a subset of issue types (false)
     * - By defining `isGlobalContext`, limit the list of contexts return to either those that apply to all projects (global
     *   contexts) (true) or those that apply to only a subset of projects (false).
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    getContextsForField<T = Models.PageBeanCustomFieldContext>(parameters: Parameters.GetContextsForField, callback: Callback<T>): Promise<void>;
    /**
     * Returns a [paginated](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#pagination) list of [
     * contexts](https://confluence.atlassian.com/adminjiracloud/what-are-custom-field-contexts-991923859.html) for a
     * custom field. Contexts can be returned as follows:
     *
     * - With no other parameters set, all contexts.
     * - By defining `id` only, all contexts from the list of IDs.
     * - By defining `isAnyIssueType`, limit the list of contexts returned to either those that apply to all issue types
     *   (true) or those that apply to only a subset of issue types (false)
     * - By defining `isGlobalContext`, limit the list of contexts return to either those that apply to all projects (global
     *   contexts) (true) or those that apply to only a subset of projects (false).
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    getContextsForField<T = Models.PageBeanCustomFieldContext>(parameters: Parameters.GetContextsForField, callback?: never): Promise<T>;
    /**
     * Creates a custom field context.
     *
     * If `projectIds` is empty, a global context is created. A global context is one that applies to all project. If
     * `issueTypeIds` is empty, the context applies to all issue types.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    createCustomFieldContext<T = Models.CreateCustomFieldContext>(parameters: Parameters.CreateCustomFieldContext, callback: Callback<T>): Promise<void>;
    /**
     * Creates a custom field context.
     *
     * If `projectIds` is empty, a global context is created. A global context is one that applies to all project. If
     * `issueTypeIds` is empty, the context applies to all issue types.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    createCustomFieldContext<T = Models.CreateCustomFieldContext>(parameters: Parameters.CreateCustomFieldContext, callback?: never): Promise<T>;
    /**
     * Returns a [paginated](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#pagination) list of
     * defaults for a custom field. The results can be filtered by `contextId`, otherwise all values are returned. If no
     * defaults are set for a context, nothing is returned. The returned object depends on type of the custom field:
     *
     * - `CustomFieldContextDefaultValueSingleOption` (type `option.single`) for single choice select lists and radio buttons.
     * - `CustomFieldContextDefaultValueMultipleOption` (type `option.multiple`) for multiple choice select lists and checkboxes.
     * - `CustomFieldContextDefaultValueCascadingOption` (type `option.cascading`) for cascading select lists.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    getDefaultValues<T = Models.PageBeanCustomFieldContextDefaultValue>(parameters: Parameters.GetDefaultValues, callback: Callback<T>): Promise<void>;
    /**
     * Returns a [paginated](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#pagination) list of
     * defaults for a custom field. The results can be filtered by `contextId`, otherwise all values are returned. If no
     * defaults are set for a context, nothing is returned. The returned object depends on type of the custom field:
     *
     * - `CustomFieldContextDefaultValueSingleOption` (type `option.single`) for single choice select lists and radio buttons.
     * - `CustomFieldContextDefaultValueMultipleOption` (type `option.multiple`) for multiple choice select lists and checkboxes.
     * - `CustomFieldContextDefaultValueCascadingOption` (type `option.cascading`) for cascading select lists.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    getDefaultValues<T = Models.PageBeanCustomFieldContextDefaultValue>(parameters: Parameters.GetDefaultValues, callback?: never): Promise<T>;
    /**
     * Sets default for contexts of a custom field. Default are defined using these objects:
     *
     * - `CustomFieldContextDefaultValueSingleOption` (type `option.single`) for single choice select lists and radio buttons.
     * - `CustomFieldContextDefaultValueMultipleOption` (type `option.multiple`) for multiple choice select lists and checkboxes.
     * - `CustomFieldContextDefaultValueCascadingOption` (type `option.cascading`) for cascading select lists.
     *
     * Only one type of default object can be included in a request. To remove a default for a context, set the default
     * parameter to `null`.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    setDefaultValues<T = void>(parameters: Parameters.SetDefaultValues, callback: Callback<T>): Promise<void>;
    /**
     * Sets default for contexts of a custom field. Default are defined using these objects:
     *
     * - `CustomFieldContextDefaultValueSingleOption` (type `option.single`) for single choice select lists and radio buttons.
     * - `CustomFieldContextDefaultValueMultipleOption` (type `option.multiple`) for multiple choice select lists and checkboxes.
     * - `CustomFieldContextDefaultValueCascadingOption` (type `option.cascading`) for cascading select lists.
     *
     * Only one type of default object can be included in a request. To remove a default for a context, set the default
     * parameter to `null`.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    setDefaultValues<T = void>(parameters: Parameters.SetDefaultValues, callback?: never): Promise<T>;
    /**
     * Returns a [paginated](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#pagination) list of
     * context to issue type mappings for a custom field. Mappings are returned for all contexts or a list of contexts.
     * Mappings are ordered first by context ID and then by issue type ID.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    getIssueTypeMappingsForContexts<T = Models.PageBeanIssueTypeToContextMapping>(parameters: Parameters.GetIssueTypeMappingsForContexts, callback: Callback<T>): Promise<void>;
    /**
     * Returns a [paginated](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#pagination) list of
     * context to issue type mappings for a custom field. Mappings are returned for all contexts or a list of contexts.
     * Mappings are ordered first by context ID and then by issue type ID.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    getIssueTypeMappingsForContexts<T = Models.PageBeanIssueTypeToContextMapping>(parameters: Parameters.GetIssueTypeMappingsForContexts, callback?: never): Promise<T>;
    /**
     * Returns a [paginated](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#pagination) list of
     * project and issue type mappings and, for each mapping, the ID of a [custom field
     * context](https://confluence.atlassian.com/x/k44fOw) that applies to the project and issue type.
     *
     * If there is no custom field context assigned to the project then, if present, the custom field context that applies
     * to all projects is returned if it also applies to the issue type or all issue types. If a custom field context is
     * not found, the returned custom field context ID is `null`.
     *
     * Duplicate project and issue type mappings cannot be provided in the request.
     *
     * The order of the returned values is the same as provided in the request.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    getCustomFieldContextsForProjectsAndIssueTypes<T = Models.PageBeanContextForProjectAndIssueType>(parameters: Parameters.GetCustomFieldContextsForProjectsAndIssueTypes, callback: Callback<T>): Promise<void>;
    /**
     * Returns a [paginated](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#pagination) list of
     * project and issue type mappings and, for each mapping, the ID of a [custom field
     * context](https://confluence.atlassian.com/x/k44fOw) that applies to the project and issue type.
     *
     * If there is no custom field context assigned to the project then, if present, the custom field context that applies
     * to all projects is returned if it also applies to the issue type or all issue types. If a custom field context is
     * not found, the returned custom field context ID is `null`.
     *
     * Duplicate project and issue type mappings cannot be provided in the request.
     *
     * The order of the returned values is the same as provided in the request.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    getCustomFieldContextsForProjectsAndIssueTypes<T = Models.PageBeanContextForProjectAndIssueType>(parameters: Parameters.GetCustomFieldContextsForProjectsAndIssueTypes, callback?: never): Promise<T>;
    /**
     * Returns a [paginated](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#pagination) list of
     * context to project mappings for a custom field. The result can be filtered by `contextId`, or otherwise all
     * mappings are returned. Invalid IDs are ignored.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    getProjectContextMapping<T = Models.PageBeanCustomFieldContextProjectMapping>(parameters: Parameters.GetProjectContextMapping, callback: Callback<T>): Promise<void>;
    /**
     * Returns a [paginated](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#pagination) list of
     * context to project mappings for a custom field. The result can be filtered by `contextId`, or otherwise all
     * mappings are returned. Invalid IDs are ignored.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    getProjectContextMapping<T = Models.PageBeanCustomFieldContextProjectMapping>(parameters: Parameters.GetProjectContextMapping, callback?: never): Promise<T>;
    /**
     * Updates a [ custom field
     * context](https://confluence.atlassian.com/adminjiracloud/what-are-custom-field-contexts-991923859.html).
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    updateCustomFieldContext<T = void>(parameters: Parameters.UpdateCustomFieldContext, callback: Callback<T>): Promise<void>;
    /**
     * Updates a [ custom field
     * context](https://confluence.atlassian.com/adminjiracloud/what-are-custom-field-contexts-991923859.html).
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    updateCustomFieldContext<T = void>(parameters: Parameters.UpdateCustomFieldContext, callback?: never): Promise<T>;
    /**
     * Deletes a [ custom field
     * context](https://confluence.atlassian.com/adminjiracloud/what-are-custom-field-contexts-991923859.html).
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    deleteCustomFieldContext<T = void>(parameters: Parameters.DeleteCustomFieldContext, callback: Callback<T>): Promise<void>;
    /**
     * Deletes a [ custom field
     * context](https://confluence.atlassian.com/adminjiracloud/what-are-custom-field-contexts-991923859.html).
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    deleteCustomFieldContext<T = void>(parameters: Parameters.DeleteCustomFieldContext, callback?: never): Promise<T>;
    /**
     * Adds issue types to a custom field context, appending the issue types to the issue types list.
     *
     * A custom field context without any issue types applies to all issue types. Adding issue types to such a custom
     * field context would result in it applying to only the listed issue types.
     *
     * If any of the issue types exists in the custom field context, the operation fails and no issue types are added.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    addIssueTypesToContext<T = void>(parameters: Parameters.AddIssueTypesToContext, callback: Callback<T>): Promise<void>;
    /**
     * Adds issue types to a custom field context, appending the issue types to the issue types list.
     *
     * A custom field context without any issue types applies to all issue types. Adding issue types to such a custom
     * field context would result in it applying to only the listed issue types.
     *
     * If any of the issue types exists in the custom field context, the operation fails and no issue types are added.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    addIssueTypesToContext<T = void>(parameters: Parameters.AddIssueTypesToContext, callback?: never): Promise<T>;
    /**
     * Removes issue types from a custom field context.
     *
     * A custom field context without any issue types applies to all issue types.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    removeIssueTypesFromContext<T = void>(parameters: Parameters.RemoveIssueTypesFromContext, callback: Callback<T>): Promise<void>;
    /**
     * Removes issue types from a custom field context.
     *
     * A custom field context without any issue types applies to all issue types.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    removeIssueTypesFromContext<T = void>(parameters: Parameters.RemoveIssueTypesFromContext, callback?: never): Promise<T>;
    /**
     * Assigns a custom field context to projects.
     *
     * If any project in the request is assigned to any context of the custom field, the operation fails.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    assignProjectsToCustomFieldContext<T = void>(parameters: Parameters.AssignProjectsToCustomFieldContext, callback: Callback<T>): Promise<void>;
    /**
     * Assigns a custom field context to projects.
     *
     * If any project in the request is assigned to any context of the custom field, the operation fails.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    assignProjectsToCustomFieldContext<T = void>(parameters: Parameters.AssignProjectsToCustomFieldContext, callback?: never): Promise<T>;
    /**
     * Removes a custom field context from projects.
     *
     * A custom field context without any projects applies to all projects. Removing all projects from a custom field
     * context would result in it applying to all projects.
     *
     * If any project in the request is not assigned to the context, or the operation would result in two global contexts
     * for the field, the operation fails.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    removeCustomFieldContextFromProjects<T = void>(parameters: Parameters.RemoveCustomFieldContextFromProjects, callback: Callback<T>): Promise<void>;
    /**
     * Removes a custom field context from projects.
     *
     * A custom field context without any projects applies to all projects. Removing all projects from a custom field
     * context would result in it applying to all projects.
     *
     * If any project in the request is not assigned to the context, or the operation would result in two global contexts
     * for the field, the operation fails.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    removeCustomFieldContextFromProjects<T = void>(parameters: Parameters.RemoveCustomFieldContextFromProjects, callback?: never): Promise<T>;
}
