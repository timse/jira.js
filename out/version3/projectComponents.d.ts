import * as Models from './models';
import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback } from '../callback';
export declare class ProjectComponents {
    private client;
    constructor(client: Client);
    /**
     * Creates a component. Use components to provide containers for issues within a project.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project in which the
     * component is created or *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    createComponent<T = Models.Component>(parameters: Parameters.CreateComponent | undefined, callback: Callback<T>): Promise<void>;
    /**
     * Creates a component. Use components to provide containers for issues within a project.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project in which the
     * component is created or *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    createComponent<T = Models.Component>(parameters?: Parameters.CreateComponent, callback?: never): Promise<T>;
    /**
     * Returns a component.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:** *Browse
     * projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for project containing the component.
     */
    getComponent<T = Models.Component>(parameters: Parameters.GetComponent, callback: Callback<T>): Promise<void>;
    /**
     * Returns a component.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:** *Browse
     * projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for project containing the component.
     */
    getComponent<T = Models.Component>(parameters: Parameters.GetComponent, callback?: never): Promise<T>;
    /**
     * Updates a component. Any fields included in the request are overwritten. If `leadAccountId` is an empty string ("")
     * the component lead is removed.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing
     * the component or *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    updateComponent<T = Models.Component>(parameters: Parameters.UpdateComponent, callback: Callback<T>): Promise<void>;
    /**
     * Updates a component. Any fields included in the request are overwritten. If `leadAccountId` is an empty string ("")
     * the component lead is removed.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing
     * the component or *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    updateComponent<T = Models.Component>(parameters: Parameters.UpdateComponent, callback?: never): Promise<T>;
    /**
     * Deletes a component.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing
     * the component or *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    deleteComponent<T = void>(parameters: Parameters.DeleteComponent, callback: Callback<T>): Promise<void>;
    /**
     * Deletes a component.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing
     * the component or *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    deleteComponent<T = void>(parameters: Parameters.DeleteComponent, callback?: never): Promise<T>;
    /**
     * Returns the counts of issues assigned to the component.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:** None.
     */
    getComponentRelatedIssues<T = Models.ComponentIssuesCount>(parameters: Parameters.GetComponentRelatedIssues, callback: Callback<T>): Promise<void>;
    /**
     * Returns the counts of issues assigned to the component.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:** None.
     */
    getComponentRelatedIssues<T = Models.ComponentIssuesCount>(parameters: Parameters.GetComponentRelatedIssues, callback?: never): Promise<T>;
    /**
     * Returns a [paginated](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#pagination) list of all
     * components in a project. See the [Get project components](#api-rest-api-3-project-projectIdOrKey-components-get)
     * resource if you want to get a full list of versions without pagination.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:** *Browse
     * Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.
     */
    getProjectComponentsPaginated<T = Models.PageBeanComponentWithIssueCount>(parameters: Parameters.GetProjectComponentsPaginated, callback: Callback<T>): Promise<void>;
    /**
     * Returns a [paginated](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#pagination) list of all
     * components in a project. See the [Get project components](#api-rest-api-3-project-projectIdOrKey-components-get)
     * resource if you want to get a full list of versions without pagination.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:** *Browse
     * Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.
     */
    getProjectComponentsPaginated<T = Models.PageBeanComponentWithIssueCount>(parameters: Parameters.GetProjectComponentsPaginated, callback?: never): Promise<T>;
    /**
     * Returns all components in a project. See the [Get project components
     * paginated](#api-rest-api-3-project-projectIdOrKey-component-get) resource if you want to get a full list of
     * components with pagination.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:** *Browse
     * Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.
     */
    getProjectComponents<T = Models.Component[]>(parameters: Parameters.GetProjectComponents, callback: Callback<T>): Promise<void>;
    /**
     * Returns all components in a project. See the [Get project components
     * paginated](#api-rest-api-3-project-projectIdOrKey-component-get) resource if you want to get a full list of
     * components with pagination.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:** *Browse
     * Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.
     */
    getProjectComponents<T = Models.Component[]>(parameters: Parameters.GetProjectComponents, callback?: never): Promise<T>;
}
