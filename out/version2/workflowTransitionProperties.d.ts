import * as Models from './models';
import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback } from '../callback';
export declare class WorkflowTransitionProperties {
    private client;
    constructor(client: Client);
    /**
     * Returns the properties on a workflow transition. Transition properties are used to change the behavior of a
     * transition. For more information, see [Transition
     * properties](https://confluence.atlassian.com/x/zIhKLg#Advancedworkflowconfiguration-transitionproperties) and
     * [Workflow properties](https://confluence.atlassian.com/x/JYlKLg).
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    getWorkflowTransitionProperties<T = Models.WorkflowTransitionProperty>(parameters: Parameters.GetWorkflowTransitionProperties, callback: Callback<T>): Promise<void>;
    /**
     * Returns the properties on a workflow transition. Transition properties are used to change the behavior of a
     * transition. For more information, see [Transition
     * properties](https://confluence.atlassian.com/x/zIhKLg#Advancedworkflowconfiguration-transitionproperties) and
     * [Workflow properties](https://confluence.atlassian.com/x/JYlKLg).
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    getWorkflowTransitionProperties<T = Models.WorkflowTransitionProperty>(parameters: Parameters.GetWorkflowTransitionProperties, callback?: never): Promise<T>;
    /**
     * Adds a property to a workflow transition. Transition properties are used to change the behavior of a transition.
     * For more information, see [Transition
     * properties](https://confluence.atlassian.com/x/zIhKLg#Advancedworkflowconfiguration-transitionproperties) and
     * [Workflow properties](https://confluence.atlassian.com/x/JYlKLg).
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    createWorkflowTransitionProperty<T = Models.WorkflowTransitionProperty>(parameters: Parameters.CreateWorkflowTransitionProperty, callback: Callback<T>): Promise<void>;
    /**
     * Adds a property to a workflow transition. Transition properties are used to change the behavior of a transition.
     * For more information, see [Transition
     * properties](https://confluence.atlassian.com/x/zIhKLg#Advancedworkflowconfiguration-transitionproperties) and
     * [Workflow properties](https://confluence.atlassian.com/x/JYlKLg).
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    createWorkflowTransitionProperty<T = Models.WorkflowTransitionProperty>(parameters: Parameters.CreateWorkflowTransitionProperty, callback?: never): Promise<T>;
    /**
     * Updates a workflow transition by changing the property value. Trying to update a property that does not exist
     * results in a new property being added to the transition. Transition properties are used to change the behavior of a
     * transition. For more information, see [Transition
     * properties](https://confluence.atlassian.com/x/zIhKLg#Advancedworkflowconfiguration-transitionproperties) and
     * [Workflow properties](https://confluence.atlassian.com/x/JYlKLg).
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    updateWorkflowTransitionProperty<T = Models.WorkflowTransitionProperty>(parameters: Parameters.UpdateWorkflowTransitionProperty, callback: Callback<T>): Promise<void>;
    /**
     * Updates a workflow transition by changing the property value. Trying to update a property that does not exist
     * results in a new property being added to the transition. Transition properties are used to change the behavior of a
     * transition. For more information, see [Transition
     * properties](https://confluence.atlassian.com/x/zIhKLg#Advancedworkflowconfiguration-transitionproperties) and
     * [Workflow properties](https://confluence.atlassian.com/x/JYlKLg).
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    updateWorkflowTransitionProperty<T = Models.WorkflowTransitionProperty>(parameters: Parameters.UpdateWorkflowTransitionProperty, callback?: never): Promise<T>;
    /**
     * Deletes a property from a workflow transition. Transition properties are used to change the behavior of a
     * transition. For more information, see [Transition
     * properties](https://confluence.atlassian.com/x/zIhKLg#Advancedworkflowconfiguration-transitionproperties) and
     * [Workflow properties](https://confluence.atlassian.com/x/JYlKLg).
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    deleteWorkflowTransitionProperty<T = unknown>(parameters: Parameters.DeleteWorkflowTransitionProperty, callback: Callback<T>): Promise<void>;
    /**
     * Deletes a property from a workflow transition. Transition properties are used to change the behavior of a
     * transition. For more information, see [Transition
     * properties](https://confluence.atlassian.com/x/zIhKLg#Advancedworkflowconfiguration-transitionproperties) and
     * [Workflow properties](https://confluence.atlassian.com/x/JYlKLg).
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    deleteWorkflowTransitionProperty<T = unknown>(parameters: Parameters.DeleteWorkflowTransitionProperty, callback?: never): Promise<T>;
}
