import * as Models from './models';
import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback } from '../callback';
export declare class WorkflowSchemeProjectAssociations {
    private client;
    constructor(client: Client);
    /**
     * Returns a list of the workflow schemes associated with a list of projects. Each returned workflow scheme includes a
     * list of the requested projects associated with it. Any next-gen or non-existent projects in the request are ignored
     * and no errors are returned.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    getWorkflowSchemeProjectAssociations<T = Models.ContainerOfWorkflowSchemeAssociations>(parameters: Parameters.GetWorkflowSchemeProjectAssociations, callback: Callback<T>): Promise<void>;
    /**
     * Returns a list of the workflow schemes associated with a list of projects. Each returned workflow scheme includes a
     * list of the requested projects associated with it. Any next-gen or non-existent projects in the request are ignored
     * and no errors are returned.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    getWorkflowSchemeProjectAssociations<T = Models.ContainerOfWorkflowSchemeAssociations>(parameters: Parameters.GetWorkflowSchemeProjectAssociations, callback?: never): Promise<T>;
    /**
     * @deprecated Assigns a workflow scheme to a project. This operation is performed only when there are no issues in the project.
     *
     *   Workflow schemes can only be assigned to classic projects.
     *
     *   **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     *   *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    associateSchemeWithProject<T = void>(parameters: Parameters.AssociateSchemeWithProject | undefined, callback: Callback<T>): Promise<void>;
    /**
     * @deprecated Assigns a workflow scheme to a project. This operation is performed only when there are no issues in the project.
     *
     *   Workflow schemes can only be assigned to classic projects.
     *
     *   **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     *   *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    associateSchemeWithProject<T = void>(parameters?: Parameters.AssociateSchemeWithProject, callback?: never): Promise<T>;
    /**
     * Assigns a workflow scheme to a project. This operation is performed only when there are no issues in the project.
     *
     * Workflow schemes can only be assigned to classic projects.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    assignSchemeToProject<T = void>(parameters: Parameters.AssignSchemeToProject | undefined, callback: Callback<T>): Promise<void>;
    /**
     * Assigns a workflow scheme to a project. This operation is performed only when there are no issues in the project.
     *
     * Workflow schemes can only be assigned to classic projects.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    assignSchemeToProject<T = void>(parameters?: Parameters.AssignSchemeToProject, callback?: never): Promise<T>;
}
