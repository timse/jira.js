import * as Models from './models';
import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback } from '../callback';
export declare class WorkflowTransitionRules {
    private client;
    constructor(client: Client);
    /**
     * Returns a [paginated](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#pagination) list of
     * workflows with transition rules. The workflows can be filtered to return only those containing workflow transition rules:
     *
     * - Of one or more transition rule types, such as [workflow post
     *   functions](https://developer.atlassian.com/cloud/jira/platform/modules/workflow-post-function/).
     * - Matching one or more transition rule keys.
     *
     * Only workflows containing transition rules created by the calling Connect app are returned. However, if a workflow
     * is returned all transition rules that match the filters are returned for that workflow.
     *
     * Due to server-side optimizations, workflows with an empty list of rules may be returned; these workflows can be ignored.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:** Only
     * Connect apps can use this operation.
     */
    getWorkflowTransitionRuleConfigurations<T = Models.PageBeanWorkflowTransitionRules>(parameters: Parameters.GetWorkflowTransitionRuleConfigurations, callback: Callback<T>): Promise<void>;
    /**
     * Returns a [paginated](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#pagination) list of
     * workflows with transition rules. The workflows can be filtered to return only those containing workflow transition rules:
     *
     * - Of one or more transition rule types, such as [workflow post
     *   functions](https://developer.atlassian.com/cloud/jira/platform/modules/workflow-post-function/).
     * - Matching one or more transition rule keys.
     *
     * Only workflows containing transition rules created by the calling Connect app are returned. However, if a workflow
     * is returned all transition rules that match the filters are returned for that workflow.
     *
     * Due to server-side optimizations, workflows with an empty list of rules may be returned; these workflows can be ignored.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:** Only
     * Connect apps can use this operation.
     */
    getWorkflowTransitionRuleConfigurations<T = Models.PageBeanWorkflowTransitionRules>(parameters: Parameters.GetWorkflowTransitionRuleConfigurations, callback?: never): Promise<T>;
    /**
     * Updates configuration of workflow transition rules. The following rule types are supported:
     *
     * - [post functions](https://developer.atlassian.com/cloud/jira/platform/modules/workflow-post-function/)
     * - [conditions](https://developer.atlassian.com/cloud/jira/platform/modules/workflow-condition/)
     * - [validators](https://developer.atlassian.com/cloud/jira/platform/modules/workflow-validator/)
     *
     * Only rules created by the calling Connect app can be updated.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:** Only
     * Connect apps can use this operation.
     */
    updateWorkflowTransitionRuleConfigurations<T = Models.WorkflowTransitionRulesUpdateErrors>(parameters: Parameters.UpdateWorkflowTransitionRuleConfigurations | undefined, callback: Callback<T>): Promise<void>;
    /**
     * Updates configuration of workflow transition rules. The following rule types are supported:
     *
     * - [post functions](https://developer.atlassian.com/cloud/jira/platform/modules/workflow-post-function/)
     * - [conditions](https://developer.atlassian.com/cloud/jira/platform/modules/workflow-condition/)
     * - [validators](https://developer.atlassian.com/cloud/jira/platform/modules/workflow-validator/)
     *
     * Only rules created by the calling Connect app can be updated.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:** Only
     * Connect apps can use this operation.
     */
    updateWorkflowTransitionRuleConfigurations<T = Models.WorkflowTransitionRulesUpdateErrors>(parameters?: Parameters.UpdateWorkflowTransitionRuleConfigurations, callback?: never): Promise<T>;
    /**
     * Deletes workflow transition rules from one or more workflows. These rule types are supported:
     *
     * - [post functions](https://developer.atlassian.com/cloud/jira/platform/modules/workflow-post-function/)
     * - [conditions](https://developer.atlassian.com/cloud/jira/platform/modules/workflow-condition/)
     * - [validators](https://developer.atlassian.com/cloud/jira/platform/modules/workflow-validator/)
     *
     * Only rules created by the calling Connect app can be deleted.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:** Only
     * Connect apps can use this operation.
     */
    deleteWorkflowTransitionRuleConfigurations<T = Models.WorkflowTransitionRulesUpdateErrors>(parameters: Parameters.DeleteWorkflowTransitionRuleConfigurations | undefined, callback: Callback<T>): Promise<void>;
    /**
     * Deletes workflow transition rules from one or more workflows. These rule types are supported:
     *
     * - [post functions](https://developer.atlassian.com/cloud/jira/platform/modules/workflow-post-function/)
     * - [conditions](https://developer.atlassian.com/cloud/jira/platform/modules/workflow-condition/)
     * - [validators](https://developer.atlassian.com/cloud/jira/platform/modules/workflow-validator/)
     *
     * Only rules created by the calling Connect app can be deleted.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:** Only
     * Connect apps can use this operation.
     */
    deleteWorkflowTransitionRuleConfigurations<T = Models.WorkflowTransitionRulesUpdateErrors>(parameters?: Parameters.DeleteWorkflowTransitionRuleConfigurations, callback?: never): Promise<T>;
}
