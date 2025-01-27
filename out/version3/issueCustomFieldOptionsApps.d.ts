import * as Models from './models';
import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback } from '../callback';
export declare class IssueCustomFieldOptionsApps {
    private client;
    constructor(client: Client);
    /**
     * Returns a [paginated](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#pagination) list of all
     * the options of a select list issue field. A select list issue field is a type of [issue
     * field](https://developer.atlassian.com/cloud/jira/platform/modules/issue-field/) that enables a user to select a
     * value from a list of options.
     *
     * Note that this operation **only works for issue field select list options added by Connect apps**, it cannot be
     * used with issue field select list options created in Jira or using operations from the [Issue custom field
     * options](#api-group-Issue-custom-field-options) resource.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). Jira permissions are not required
     * for the app providing the field.
     */
    getAllIssueFieldOptions<T = Models.PageBeanIssueFieldOption>(parameters: Parameters.GetAllIssueFieldOptions, callback: Callback<T>): Promise<void>;
    /**
     * Returns a [paginated](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#pagination) list of all
     * the options of a select list issue field. A select list issue field is a type of [issue
     * field](https://developer.atlassian.com/cloud/jira/platform/modules/issue-field/) that enables a user to select a
     * value from a list of options.
     *
     * Note that this operation **only works for issue field select list options added by Connect apps**, it cannot be
     * used with issue field select list options created in Jira or using operations from the [Issue custom field
     * options](#api-group-Issue-custom-field-options) resource.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). Jira permissions are not required
     * for the app providing the field.
     */
    getAllIssueFieldOptions<T = Models.PageBeanIssueFieldOption>(parameters: Parameters.GetAllIssueFieldOptions, callback?: never): Promise<T>;
    /**
     * Creates an option for a select list issue field.
     *
     * Note that this operation **only works for issue field select list options added by Connect apps**, it cannot be
     * used with issue field select list options created in Jira or using operations from the [Issue custom field
     * options](#api-group-Issue-custom-field-options) resource.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). Jira permissions are not required
     * for the app providing the field.
     */
    createIssueFieldOption<T = Models.IssueFieldOption>(parameters: Parameters.CreateIssueFieldOption, callback: Callback<T>): Promise<void>;
    /**
     * Creates an option for a select list issue field.
     *
     * Note that this operation **only works for issue field select list options added by Connect apps**, it cannot be
     * used with issue field select list options created in Jira or using operations from the [Issue custom field
     * options](#api-group-Issue-custom-field-options) resource.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). Jira permissions are not required
     * for the app providing the field.
     */
    createIssueFieldOption<T = Models.IssueFieldOption>(parameters: Parameters.CreateIssueFieldOption, callback?: never): Promise<T>;
    /**
     * Returns a [paginated](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#pagination) list of
     * options for a select list issue field that can be viewed and selected by the user.
     *
     * Note that this operation **only works for issue field select list options added by Connect apps**, it cannot be
     * used with issue field select list options created in Jira or using operations from the [Issue custom field
     * options](#api-group-Issue-custom-field-options) resource.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * Permission to access Jira.
     */
    getSelectableIssueFieldOptions<T = Models.PageBeanIssueFieldOption>(parameters: Parameters.GetSelectableIssueFieldOptions, callback: Callback<T>): Promise<void>;
    /**
     * Returns a [paginated](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#pagination) list of
     * options for a select list issue field that can be viewed and selected by the user.
     *
     * Note that this operation **only works for issue field select list options added by Connect apps**, it cannot be
     * used with issue field select list options created in Jira or using operations from the [Issue custom field
     * options](#api-group-Issue-custom-field-options) resource.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * Permission to access Jira.
     */
    getSelectableIssueFieldOptions<T = Models.PageBeanIssueFieldOption>(parameters: Parameters.GetSelectableIssueFieldOptions, callback?: never): Promise<T>;
    /**
     * Returns a [paginated](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#pagination) list of
     * options for a select list issue field that can be viewed by the user.
     *
     * Note that this operation **only works for issue field select list options added by Connect apps**, it cannot be
     * used with issue field select list options created in Jira or using operations from the [Issue custom field
     * options](#api-group-Issue-custom-field-options) resource.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * Permission to access Jira.
     */
    getVisibleIssueFieldOptions<T = Models.PageBeanIssueFieldOption>(parameters: Parameters.GetVisibleIssueFieldOptions, callback: Callback<T>): Promise<void>;
    /**
     * Returns a [paginated](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#pagination) list of
     * options for a select list issue field that can be viewed by the user.
     *
     * Note that this operation **only works for issue field select list options added by Connect apps**, it cannot be
     * used with issue field select list options created in Jira or using operations from the [Issue custom field
     * options](#api-group-Issue-custom-field-options) resource.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * Permission to access Jira.
     */
    getVisibleIssueFieldOptions<T = Models.PageBeanIssueFieldOption>(parameters: Parameters.GetVisibleIssueFieldOptions, callback?: never): Promise<T>;
    /**
     * Returns an option from a select list issue field.
     *
     * Note that this operation **only works for issue field select list options added by Connect apps**, it cannot be
     * used with issue field select list options created in Jira or using operations from the [Issue custom field
     * options](#api-group-Issue-custom-field-options) resource.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). Jira permissions are not required
     * for the app providing the field.
     */
    getIssueFieldOption<T = Models.IssueFieldOption>(parameters: Parameters.GetIssueFieldOption, callback: Callback<T>): Promise<void>;
    /**
     * Returns an option from a select list issue field.
     *
     * Note that this operation **only works for issue field select list options added by Connect apps**, it cannot be
     * used with issue field select list options created in Jira or using operations from the [Issue custom field
     * options](#api-group-Issue-custom-field-options) resource.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). Jira permissions are not required
     * for the app providing the field.
     */
    getIssueFieldOption<T = Models.IssueFieldOption>(parameters: Parameters.GetIssueFieldOption, callback?: never): Promise<T>;
    /**
     * Updates or creates an option for a select list issue field. This operation requires that the option ID is provided
     * when creating an option, therefore, the option ID needs to be specified as a path and body parameter. The option ID
     * provided in the path and body must be identical.
     *
     * Note that this operation **only works for issue field select list options added by Connect apps**, it cannot be
     * used with issue field select list options created in Jira or using operations from the [Issue custom field
     * options](#api-group-Issue-custom-field-options) resource.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). Jira permissions are not required
     * for the app providing the field.
     */
    updateIssueFieldOption<T = Models.IssueFieldOption>(parameters: Parameters.UpdateIssueFieldOption, callback: Callback<T>): Promise<void>;
    /**
     * Updates or creates an option for a select list issue field. This operation requires that the option ID is provided
     * when creating an option, therefore, the option ID needs to be specified as a path and body parameter. The option ID
     * provided in the path and body must be identical.
     *
     * Note that this operation **only works for issue field select list options added by Connect apps**, it cannot be
     * used with issue field select list options created in Jira or using operations from the [Issue custom field
     * options](#api-group-Issue-custom-field-options) resource.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). Jira permissions are not required
     * for the app providing the field.
     */
    updateIssueFieldOption<T = Models.IssueFieldOption>(parameters: Parameters.UpdateIssueFieldOption, callback?: never): Promise<T>;
    /**
     * Deletes an option from a select list issue field.
     *
     * Note that this operation **only works for issue field select list options added by Connect apps**, it cannot be
     * used with issue field select list options created in Jira or using operations from the [Issue custom field
     * options](#api-group-Issue-custom-field-options) resource.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). Jira permissions are not required
     * for the app providing the field.
     */
    deleteIssueFieldOption<T = void>(parameters: Parameters.DeleteIssueFieldOption, callback: Callback<T>): Promise<void>;
    /**
     * Deletes an option from a select list issue field.
     *
     * Note that this operation **only works for issue field select list options added by Connect apps**, it cannot be
     * used with issue field select list options created in Jira or using operations from the [Issue custom field
     * options](#api-group-Issue-custom-field-options) resource.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). Jira permissions are not required
     * for the app providing the field.
     */
    deleteIssueFieldOption<T = void>(parameters: Parameters.DeleteIssueFieldOption, callback?: never): Promise<T>;
    /**
     * Deselects an issue-field select-list option from all issues where it is selected. A different option can be
     * selected to replace the deselected option. The update can also be limited to a smaller set of issues by using a JQL query.
     *
     * This is an [asynchronous operation](#async). The response object contains a link to the long-running task.
     *
     * Note that this operation **only works for issue field select list options added by Connect apps**, it cannot be
     * used with issue field select list options created in Jira or using operations from the [Issue custom field
     * options](#api-group-Issue-custom-field-options) resource.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). Jira permissions are not required
     * for the app providing the field.
     */
    replaceIssueFieldOption<T = Models.TaskProgressBeanRemoveOptionFromIssuesResult>(parameters: Parameters.ReplaceIssueFieldOption, callback: Callback<T>): Promise<void>;
    /**
     * Deselects an issue-field select-list option from all issues where it is selected. A different option can be
     * selected to replace the deselected option. The update can also be limited to a smaller set of issues by using a JQL query.
     *
     * This is an [asynchronous operation](#async). The response object contains a link to the long-running task.
     *
     * Note that this operation **only works for issue field select list options added by Connect apps**, it cannot be
     * used with issue field select list options created in Jira or using operations from the [Issue custom field
     * options](#api-group-Issue-custom-field-options) resource.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). Jira permissions are not required
     * for the app providing the field.
     */
    replaceIssueFieldOption<T = Models.TaskProgressBeanRemoveOptionFromIssuesResult>(parameters: Parameters.ReplaceIssueFieldOption, callback?: never): Promise<T>;
}
