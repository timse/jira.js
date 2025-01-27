import * as Models from './models';
import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback } from '../callback';
export declare class ProjectEmail {
    private client;
    constructor(client: Client);
    /**
     * Returns the [project's sender email address](https://confluence.atlassian.com/x/dolKLg).
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:** *Browse
     * projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.
     */
    getProjectEmail<T = Models.ProjectEmailAddress>(parameters: Parameters.GetProjectEmail, callback: Callback<T>): Promise<void>;
    /**
     * Returns the [project's sender email address](https://confluence.atlassian.com/x/dolKLg).
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:** *Browse
     * projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.
     */
    getProjectEmail<T = Models.ProjectEmailAddress>(parameters: Parameters.GetProjectEmail, callback?: never): Promise<T>;
    /**
     * Sets the [project's sender email address](https://confluence.atlassian.com/x/dolKLg).
     *
     * If `emailAddress` is an empty string, the default email address is restored.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:** *Browse
     * projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.
     */
    updateProjectEmail<T = void>(parameters: Parameters.UpdateProjectEmail, callback: Callback<T>): Promise<void>;
    /**
     * Sets the [project's sender email address](https://confluence.atlassian.com/x/dolKLg).
     *
     * If `emailAddress` is an empty string, the default email address is restored.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:** *Browse
     * projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.
     */
    updateProjectEmail<T = void>(parameters: Parameters.UpdateProjectEmail, callback?: never): Promise<T>;
}
