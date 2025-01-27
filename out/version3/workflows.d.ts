import * as Models from './models';
import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback } from '../callback';
export declare class Workflows {
    private client;
    constructor(client: Client);
    /**
     * @deprecated
     * Returns all workflows in Jira or a workflow. Deprecated, use [Get workflows paginated](#api-rest-api-3-workflow-search-get).
     *
     * If the `workflowName` parameter is specified, the workflow is returned as an object (not in an array). Otherwise,
     * an array of workflow objects is returned.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    getAllWorkflows<T = Models.DeprecatedWorkflow[]>(parameters: Parameters.GetAllWorkflows | undefined, callback: Callback<T>): Promise<void>;
    /**
     * @deprecated
     * Returns all workflows in Jira or a workflow. Deprecated, use [Get workflows paginated](#api-rest-api-3-workflow-search-get).
     *
     * If the `workflowName` parameter is specified, the workflow is returned as an object (not in an array). Otherwise,
     * an array of workflow objects is returned.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    getAllWorkflows<T = Models.DeprecatedWorkflow[]>(parameters?: Parameters.GetAllWorkflows, callback?: never): Promise<T>;
    /**
     * Creates a workflow. Workflow transitions are created with the default system transition rules.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    createWorkflow<T = Models.WorkflowId>(parameters: Parameters.CreateWorkflow | undefined, callback: Callback<T>): Promise<void>;
    /**
     * Creates a workflow. Workflow transitions are created with the default system transition rules.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    createWorkflow<T = Models.WorkflowId>(parameters?: Parameters.CreateWorkflow, callback?: never): Promise<T>;
    /**
     * Returns a [paginated](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#pagination) list of
     * published classic workflows. When workflow names are specified, details of those workflows are returned. Otherwise,
     * all published classic workflows are returned.
     *
     * This operation does not return next-gen workflows.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    getWorkflowsPaginated<T = Models.PageBeanWorkflow>(parameters: Parameters.GetWorkflowsPaginated | undefined, callback: Callback<T>): Promise<void>;
    /**
     * Returns a [paginated](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#pagination) list of
     * published classic workflows. When workflow names are specified, details of those workflows are returned. Otherwise,
     * all published classic workflows are returned.
     *
     * This operation does not return next-gen workflows.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    getWorkflowsPaginated<T = Models.PageBeanWorkflow>(parameters?: Parameters.GetWorkflowsPaginated, callback?: never): Promise<T>;
    /**
     * Deletes a workflow.
     *
     * The workflow cannot be deleted if it is:
     *
     * - An active workflow.
     * - A system workflow.
     * - Associated with any workflow scheme.
     * - Associated with any draft workflow scheme.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    deleteInactiveWorkflow<T = void>(parameters: Parameters.DeleteInactiveWorkflow, callback: Callback<T>): Promise<void>;
    /**
     * Deletes a workflow.
     *
     * The workflow cannot be deleted if it is:
     *
     * - An active workflow.
     * - A system workflow.
     * - Associated with any workflow scheme.
     * - Associated with any draft workflow scheme.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    deleteInactiveWorkflow<T = void>(parameters: Parameters.DeleteInactiveWorkflow, callback?: never): Promise<T>;
}
