import * as Models from './models';
import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback } from '../callback';
export declare class WorkflowSchemes {
    private client;
    constructor(client: Client);
    /**
     * Returns a [paginated](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#pagination) list of all
     * workflow schemes, not including draft workflow schemes.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    getAllWorkflowSchemes<T = Models.PageBeanWorkflowScheme>(parameters: Parameters.GetAllWorkflowSchemes | undefined, callback: Callback<T>): Promise<void>;
    /**
     * Returns a [paginated](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#pagination) list of all
     * workflow schemes, not including draft workflow schemes.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    getAllWorkflowSchemes<T = Models.PageBeanWorkflowScheme>(parameters?: Parameters.GetAllWorkflowSchemes, callback?: never): Promise<T>;
    /**
     * Creates a workflow scheme.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    createWorkflowScheme<T = Models.WorkflowScheme>(parameters: Parameters.CreateWorkflowScheme | undefined, callback: Callback<T>): Promise<void>;
    /**
     * Creates a workflow scheme.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    createWorkflowScheme<T = Models.WorkflowScheme>(parameters?: Parameters.CreateWorkflowScheme, callback?: never): Promise<T>;
    /**
     * Returns a workflow scheme.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    getWorkflowScheme<T = Models.WorkflowScheme>(parameters: Parameters.GetWorkflowScheme, callback: Callback<T>): Promise<void>;
    /**
     * Returns a workflow scheme.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    getWorkflowScheme<T = Models.WorkflowScheme>(parameters: Parameters.GetWorkflowScheme, callback?: never): Promise<T>;
    /**
     * Updates a workflow scheme, including the name, default workflow, issue type to project mappings, and more. If the
     * workflow scheme is active (that is, being used by at least one project), then a draft workflow scheme is created or
     * updated instead, provided that `updateDraftIfNeeded` is set to `true`.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    updateWorkflowScheme<T = Models.WorkflowScheme>(parameters: Parameters.UpdateWorkflowScheme, callback: Callback<T>): Promise<void>;
    /**
     * Updates a workflow scheme, including the name, default workflow, issue type to project mappings, and more. If the
     * workflow scheme is active (that is, being used by at least one project), then a draft workflow scheme is created or
     * updated instead, provided that `updateDraftIfNeeded` is set to `true`.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    updateWorkflowScheme<T = Models.WorkflowScheme>(parameters: Parameters.UpdateWorkflowScheme, callback?: never): Promise<T>;
    /**
     * Deletes a workflow scheme. Note that a workflow scheme cannot be deleted if it is active (that is, being used by at
     * least one project).
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    deleteWorkflowScheme<T = void>(parameters: Parameters.DeleteWorkflowScheme, callback: Callback<T>): Promise<void>;
    /**
     * Deletes a workflow scheme. Note that a workflow scheme cannot be deleted if it is active (that is, being used by at
     * least one project).
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    deleteWorkflowScheme<T = void>(parameters: Parameters.DeleteWorkflowScheme, callback?: never): Promise<T>;
    /**
     * Returns the default workflow for a workflow scheme. The default workflow is the workflow that is assigned any issue
     * types that have not been mapped to any other workflow. The default workflow has *All Unassigned Issue Types* listed
     * in its issue types for the workflow scheme in Jira.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    getDefaultWorkflow<T = Models.DefaultWorkflow>(parameters: Parameters.GetDefaultWorkflow, callback: Callback<T>): Promise<void>;
    /**
     * Returns the default workflow for a workflow scheme. The default workflow is the workflow that is assigned any issue
     * types that have not been mapped to any other workflow. The default workflow has *All Unassigned Issue Types* listed
     * in its issue types for the workflow scheme in Jira.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    getDefaultWorkflow<T = Models.DefaultWorkflow>(parameters: Parameters.GetDefaultWorkflow, callback?: never): Promise<T>;
    /**
     * Sets the default workflow for a workflow scheme.
     *
     * Note that active workflow schemes cannot be edited. If the workflow scheme is active, set `updateDraftIfNeeded` to
     * `true` in the request object and a draft workflow scheme is created or updated with the new default workflow. The
     * draft workflow scheme can be published in Jira.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    updateDefaultWorkflow<T = Models.WorkflowScheme>(parameters: Parameters.UpdateDefaultWorkflow, callback: Callback<T>): Promise<void>;
    /**
     * Sets the default workflow for a workflow scheme.
     *
     * Note that active workflow schemes cannot be edited. If the workflow scheme is active, set `updateDraftIfNeeded` to
     * `true` in the request object and a draft workflow scheme is created or updated with the new default workflow. The
     * draft workflow scheme can be published in Jira.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    updateDefaultWorkflow<T = Models.WorkflowScheme>(parameters: Parameters.UpdateDefaultWorkflow, callback?: never): Promise<T>;
    /**
     * Resets the default workflow for a workflow scheme. That is, the default workflow is set to Jira's system workflow
     * (the *jira* workflow).
     *
     * Note that active workflow schemes cannot be edited. If the workflow scheme is active, set `updateDraftIfNeeded` to
     * `true` and a draft workflow scheme is created or updated with the default workflow reset. The draft workflow scheme
     * can be published in Jira.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    deleteDefaultWorkflow<T = Models.WorkflowScheme>(parameters: Parameters.DeleteDefaultWorkflow, callback: Callback<T>): Promise<void>;
    /**
     * Resets the default workflow for a workflow scheme. That is, the default workflow is set to Jira's system workflow
     * (the *jira* workflow).
     *
     * Note that active workflow schemes cannot be edited. If the workflow scheme is active, set `updateDraftIfNeeded` to
     * `true` and a draft workflow scheme is created or updated with the default workflow reset. The draft workflow scheme
     * can be published in Jira.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    deleteDefaultWorkflow<T = Models.WorkflowScheme>(parameters: Parameters.DeleteDefaultWorkflow, callback?: never): Promise<T>;
    /**
     * Returns the issue type-workflow mapping for an issue type in a workflow scheme.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    getWorkflowSchemeIssueType<T = Models.IssueTypeWorkflowMapping>(parameters: Parameters.GetWorkflowSchemeIssueType, callback: Callback<T>): Promise<void>;
    /**
     * Returns the issue type-workflow mapping for an issue type in a workflow scheme.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    getWorkflowSchemeIssueType<T = Models.IssueTypeWorkflowMapping>(parameters: Parameters.GetWorkflowSchemeIssueType, callback?: never): Promise<T>;
    /**
     * Sets the workflow for an issue type in a workflow scheme.
     *
     * Note that active workflow schemes cannot be edited. If the workflow scheme is active, set `updateDraftIfNeeded` to
     * `true` in the request body and a draft workflow scheme is created or updated with the new issue type-workflow
     * mapping. The draft workflow scheme can be published in Jira.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    setWorkflowSchemeIssueType<T = Models.WorkflowScheme>(parameters: Parameters.SetWorkflowSchemeIssueType, callback: Callback<T>): Promise<void>;
    /**
     * Sets the workflow for an issue type in a workflow scheme.
     *
     * Note that active workflow schemes cannot be edited. If the workflow scheme is active, set `updateDraftIfNeeded` to
     * `true` in the request body and a draft workflow scheme is created or updated with the new issue type-workflow
     * mapping. The draft workflow scheme can be published in Jira.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    setWorkflowSchemeIssueType<T = Models.WorkflowScheme>(parameters: Parameters.SetWorkflowSchemeIssueType, callback?: never): Promise<T>;
    /**
     * Deletes the issue type-workflow mapping for an issue type in a workflow scheme.
     *
     * Note that active workflow schemes cannot be edited. If the workflow scheme is active, set `updateDraftIfNeeded` to
     * `true` and a draft workflow scheme is created or updated with the issue type-workflow mapping deleted. The draft
     * workflow scheme can be published in Jira.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    deleteWorkflowSchemeIssueType<T = Models.WorkflowScheme>(parameters: Parameters.DeleteWorkflowSchemeIssueType, callback: Callback<T>): Promise<void>;
    /**
     * Deletes the issue type-workflow mapping for an issue type in a workflow scheme.
     *
     * Note that active workflow schemes cannot be edited. If the workflow scheme is active, set `updateDraftIfNeeded` to
     * `true` and a draft workflow scheme is created or updated with the issue type-workflow mapping deleted. The draft
     * workflow scheme can be published in Jira.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    deleteWorkflowSchemeIssueType<T = Models.WorkflowScheme>(parameters: Parameters.DeleteWorkflowSchemeIssueType, callback?: never): Promise<T>;
    /**
     * Returns the workflow-issue type mappings for a workflow scheme.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    getWorkflow<T = Models.IssueTypesWorkflowMapping>(parameters: Parameters.GetWorkflow, callback: Callback<T>): Promise<void>;
    /**
     * Returns the workflow-issue type mappings for a workflow scheme.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    getWorkflow<T = Models.IssueTypesWorkflowMapping>(parameters: Parameters.GetWorkflow, callback?: never): Promise<T>;
    /**
     * Sets the issue types for a workflow in a workflow scheme. The workflow can also be set as the default workflow for
     * the workflow scheme. Unmapped issues types are mapped to the default workflow.
     *
     * Note that active workflow schemes cannot be edited. If the workflow scheme is active, set `updateDraftIfNeeded` to
     * `true` in the request body and a draft workflow scheme is created or updated with the new workflow-issue types
     * mappings. The draft workflow scheme can be published in Jira.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    updateWorkflowMapping<T = Models.WorkflowScheme>(parameters: Parameters.UpdateWorkflowMapping, callback: Callback<T>): Promise<void>;
    /**
     * Sets the issue types for a workflow in a workflow scheme. The workflow can also be set as the default workflow for
     * the workflow scheme. Unmapped issues types are mapped to the default workflow.
     *
     * Note that active workflow schemes cannot be edited. If the workflow scheme is active, set `updateDraftIfNeeded` to
     * `true` in the request body and a draft workflow scheme is created or updated with the new workflow-issue types
     * mappings. The draft workflow scheme can be published in Jira.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    updateWorkflowMapping<T = Models.WorkflowScheme>(parameters: Parameters.UpdateWorkflowMapping, callback?: never): Promise<T>;
    /**
     * Deletes the workflow-issue type mapping for a workflow in a workflow scheme.
     *
     * Note that active workflow schemes cannot be edited. If the workflow scheme is active, set `updateDraftIfNeeded` to
     * `true` and a draft workflow scheme is created or updated with the workflow-issue type mapping deleted. The draft
     * workflow scheme can be published in Jira.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    deleteWorkflowMapping<T = unknown>(parameters: Parameters.DeleteWorkflowMapping, callback: Callback<T>): Promise<void>;
    /**
     * Deletes the workflow-issue type mapping for a workflow in a workflow scheme.
     *
     * Note that active workflow schemes cannot be edited. If the workflow scheme is active, set `updateDraftIfNeeded` to
     * `true` and a draft workflow scheme is created or updated with the workflow-issue type mapping deleted. The draft
     * workflow scheme can be published in Jira.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    deleteWorkflowMapping<T = unknown>(parameters: Parameters.DeleteWorkflowMapping, callback?: never): Promise<T>;
}
