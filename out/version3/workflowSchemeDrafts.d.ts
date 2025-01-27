import * as Models from './models';
import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback } from '../callback';
export declare class WorkflowSchemeDrafts {
    private client;
    constructor(client: Client);
    /**
     * Create a draft workflow scheme from an active workflow scheme, by copying the active workflow scheme. Note that an
     * active workflow scheme can only have one draft workflow scheme.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    createWorkflowSchemeDraftFromParent<T = Models.WorkflowScheme>(parameters: Parameters.CreateWorkflowSchemeDraftFromParent, callback: Callback<T>): Promise<void>;
    /**
     * Create a draft workflow scheme from an active workflow scheme, by copying the active workflow scheme. Note that an
     * active workflow scheme can only have one draft workflow scheme.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    createWorkflowSchemeDraftFromParent<T = Models.WorkflowScheme>(parameters: Parameters.CreateWorkflowSchemeDraftFromParent, callback?: never): Promise<T>;
    /**
     * Returns the draft workflow scheme for an active workflow scheme. Draft workflow schemes allow changes to be made to
     * the active workflow schemes: When an active workflow scheme is updated, a draft copy is created. The draft is
     * modified, then the changes in the draft are copied back to the active workflow scheme. See [Configuring workflow
     * schemes](https://confluence.atlassian.com/x/tohKLg) for more information. Note that:
     *
     * - Only active workflow schemes can have draft workflow schemes.
     * - An active workflow scheme can only have one draft workflow scheme.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    getWorkflowSchemeDraft<T = Models.WorkflowScheme>(parameters: Parameters.GetWorkflowSchemeDraft, callback: Callback<T>): Promise<void>;
    /**
     * Returns the draft workflow scheme for an active workflow scheme. Draft workflow schemes allow changes to be made to
     * the active workflow schemes: When an active workflow scheme is updated, a draft copy is created. The draft is
     * modified, then the changes in the draft are copied back to the active workflow scheme. See [Configuring workflow
     * schemes](https://confluence.atlassian.com/x/tohKLg) for more information. Note that:
     *
     * - Only active workflow schemes can have draft workflow schemes.
     * - An active workflow scheme can only have one draft workflow scheme.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    getWorkflowSchemeDraft<T = Models.WorkflowScheme>(parameters: Parameters.GetWorkflowSchemeDraft, callback?: never): Promise<T>;
    /**
     * Updates a draft workflow scheme. If a draft workflow scheme does not exist for the active workflow scheme, then a
     * draft is created. Note that an active workflow scheme can only have one draft workflow scheme.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    updateWorkflowSchemeDraft<T = Models.WorkflowScheme>(parameters: Parameters.UpdateWorkflowSchemeDraft, callback: Callback<T>): Promise<void>;
    /**
     * Updates a draft workflow scheme. If a draft workflow scheme does not exist for the active workflow scheme, then a
     * draft is created. Note that an active workflow scheme can only have one draft workflow scheme.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    updateWorkflowSchemeDraft<T = Models.WorkflowScheme>(parameters: Parameters.UpdateWorkflowSchemeDraft, callback?: never): Promise<T>;
    /**
     * Deletes a draft workflow scheme.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    deleteWorkflowSchemeDraft<T = void>(parameters: Parameters.DeleteWorkflowSchemeDraft, callback: Callback<T>): Promise<void>;
    /**
     * Deletes a draft workflow scheme.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    deleteWorkflowSchemeDraft<T = void>(parameters: Parameters.DeleteWorkflowSchemeDraft, callback?: never): Promise<T>;
    /**
     * Returns the default workflow for a workflow scheme's draft. The default workflow is the workflow that is assigned
     * any issue types that have not been mapped to any other workflow. The default workflow has *All Unassigned Issue
     * Types* listed in its issue types for the workflow scheme in Jira.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    getDraftDefaultWorkflow<T = Models.DefaultWorkflow>(parameters: Parameters.GetDraftDefaultWorkflow, callback: Callback<T>): Promise<void>;
    /**
     * Returns the default workflow for a workflow scheme's draft. The default workflow is the workflow that is assigned
     * any issue types that have not been mapped to any other workflow. The default workflow has *All Unassigned Issue
     * Types* listed in its issue types for the workflow scheme in Jira.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    getDraftDefaultWorkflow<T = Models.DefaultWorkflow>(parameters: Parameters.GetDraftDefaultWorkflow, callback?: never): Promise<T>;
    /**
     * Sets the default workflow for a workflow scheme's draft.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    updateDraftDefaultWorkflow<T = Models.WorkflowScheme>(parameters: Parameters.UpdateDraftDefaultWorkflow, callback: Callback<T>): Promise<void>;
    /**
     * Sets the default workflow for a workflow scheme's draft.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    updateDraftDefaultWorkflow<T = Models.WorkflowScheme>(parameters: Parameters.UpdateDraftDefaultWorkflow, callback?: never): Promise<T>;
    /**
     * Resets the default workflow for a workflow scheme's draft. That is, the default workflow is set to Jira's system
     * workflow (the *jira* workflow).
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    deleteDraftDefaultWorkflow<T = Models.WorkflowScheme>(parameters: Parameters.DeleteDraftDefaultWorkflow, callback: Callback<T>): Promise<void>;
    /**
     * Resets the default workflow for a workflow scheme's draft. That is, the default workflow is set to Jira's system
     * workflow (the *jira* workflow).
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    deleteDraftDefaultWorkflow<T = Models.WorkflowScheme>(parameters: Parameters.DeleteDraftDefaultWorkflow, callback?: never): Promise<T>;
    /**
     * Returns the issue type-workflow mapping for an issue type in a workflow scheme's draft.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    getWorkflowSchemeDraftIssueType<T = Models.IssueTypeWorkflowMapping>(parameters: Parameters.GetWorkflowSchemeDraftIssueType, callback: Callback<T>): Promise<void>;
    /**
     * Returns the issue type-workflow mapping for an issue type in a workflow scheme's draft.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    getWorkflowSchemeDraftIssueType<T = Models.IssueTypeWorkflowMapping>(parameters: Parameters.GetWorkflowSchemeDraftIssueType, callback?: never): Promise<T>;
    /**
     * Sets the workflow for an issue type in a workflow scheme's draft.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    setWorkflowSchemeDraftIssueType<T = Models.WorkflowScheme>(parameters: Parameters.SetWorkflowSchemeDraftIssueType, callback: Callback<T>): Promise<void>;
    /**
     * Sets the workflow for an issue type in a workflow scheme's draft.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    setWorkflowSchemeDraftIssueType<T = Models.WorkflowScheme>(parameters: Parameters.SetWorkflowSchemeDraftIssueType, callback?: never): Promise<T>;
    /**
     * Deletes the issue type-workflow mapping for an issue type in a workflow scheme's draft.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    deleteWorkflowSchemeDraftIssueType<T = Models.WorkflowScheme>(parameters: Parameters.DeleteWorkflowSchemeDraftIssueType, callback: Callback<T>): Promise<void>;
    /**
     * Deletes the issue type-workflow mapping for an issue type in a workflow scheme's draft.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    deleteWorkflowSchemeDraftIssueType<T = Models.WorkflowScheme>(parameters: Parameters.DeleteWorkflowSchemeDraftIssueType, callback?: never): Promise<T>;
    /**
     * Publishes a draft workflow scheme.
     *
     * Where the draft workflow includes new workflow statuses for an issue type, mappings are provided to update issues
     * with the original workflow status to the new workflow status.
     *
     * This operation is [asynchronous](#async). Follow the `location` link in the response to determine the status of the
     * task and use [Get task](#api-rest-api-3-task-taskId-get) to obtain updates.
     *
     * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    publishDraftWorkflowScheme<T = void>(parameters: Parameters.PublishDraftWorkflowScheme, callback: Callback<T>): Promise<void>;
    /**
     * Publishes a draft workflow scheme.
     *
     * Where the draft workflow includes new workflow statuses for an issue type, mappings are provided to update issues
     * with the original workflow status to the new workflow status.
     *
     * This operation is [asynchronous](#async). Follow the `location` link in the response to determine the status of the
     * task and use [Get task](#api-rest-api-3-task-taskId-get) to obtain updates.
     *
     * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    publishDraftWorkflowScheme<T = void>(parameters: Parameters.PublishDraftWorkflowScheme, callback?: never): Promise<T>;
    /**
     * Returns the workflow-issue type mappings for a workflow scheme's draft.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    getDraftWorkflow<T = Models.IssueTypesWorkflowMapping>(parameters: Parameters.GetDraftWorkflow, callback: Callback<T>): Promise<void>;
    /**
     * Returns the workflow-issue type mappings for a workflow scheme's draft.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    getDraftWorkflow<T = Models.IssueTypesWorkflowMapping>(parameters: Parameters.GetDraftWorkflow, callback?: never): Promise<T>;
    /**
     * Sets the issue types for a workflow in a workflow scheme's draft. The workflow can also be set as the default
     * workflow for the draft workflow scheme. Unmapped issues types are mapped to the default workflow.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    updateDraftWorkflowMapping<T = Models.WorkflowScheme>(parameters: Parameters.UpdateDraftWorkflowMapping, callback: Callback<T>): Promise<void>;
    /**
     * Sets the issue types for a workflow in a workflow scheme's draft. The workflow can also be set as the default
     * workflow for the draft workflow scheme. Unmapped issues types are mapped to the default workflow.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    updateDraftWorkflowMapping<T = Models.WorkflowScheme>(parameters: Parameters.UpdateDraftWorkflowMapping, callback?: never): Promise<T>;
    /**
     * Deletes the workflow-issue type mapping for a workflow in a workflow scheme's draft.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    deleteDraftWorkflowMapping<T = unknown>(parameters: Parameters.DeleteDraftWorkflowMapping, callback: Callback<T>): Promise<void>;
    /**
     * Deletes the workflow-issue type mapping for a workflow in a workflow scheme's draft.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    deleteDraftWorkflowMapping<T = unknown>(parameters: Parameters.DeleteDraftWorkflowMapping, callback?: never): Promise<T>;
}
