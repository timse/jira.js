import * as Models from './models';
import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback } from '../callback';
export declare class ProjectCategories {
    private client;
    constructor(client: Client);
    /**
     * Returns all project categories.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * Permission to access Jira.
     */
    getAllProjectCategories<T = Models.ProjectCategory[]>(callback: Callback<T>): Promise<void>;
    /**
     * Returns all project categories.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * Permission to access Jira.
     */
    getAllProjectCategories<T = Models.ProjectCategory[]>(callback?: never): Promise<T>;
    /**
     * Creates a project category.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    createProjectCategory<T = Models.ProjectCategory>(parameters: Parameters.CreateProjectCategory | undefined, callback: Callback<T>): Promise<void>;
    /**
     * Creates a project category.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    createProjectCategory<T = Models.ProjectCategory>(parameters?: Parameters.CreateProjectCategory, callback?: never): Promise<T>;
    /**
     * Returns a project category.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * Permission to access Jira.
     */
    getProjectCategoryById<T = Models.ProjectCategory>(parameters: Parameters.GetProjectCategoryById, callback: Callback<T>): Promise<void>;
    /**
     * Returns a project category.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * Permission to access Jira.
     */
    getProjectCategoryById<T = Models.ProjectCategory>(parameters: Parameters.GetProjectCategoryById, callback?: never): Promise<T>;
    /**
     * Updates a project category.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    updateProjectCategory<T = Models.UpdatedProjectCategory>(parameters: Parameters.UpdateProjectCategory, callback: Callback<T>): Promise<void>;
    /**
     * Updates a project category.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    updateProjectCategory<T = Models.UpdatedProjectCategory>(parameters: Parameters.UpdateProjectCategory, callback?: never): Promise<T>;
    /**
     * Deletes a project category.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    removeProjectCategory<T = void>(parameters: Parameters.RemoveProjectCategory, callback: Callback<T>): Promise<void>;
    /**
     * Deletes a project category.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    removeProjectCategory<T = void>(parameters: Parameters.RemoveProjectCategory, callback?: never): Promise<T>;
}
