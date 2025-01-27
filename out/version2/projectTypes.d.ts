import * as Models from './models';
import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback } from '../callback';
export declare class ProjectTypes {
    private client;
    constructor(client: Client);
    /**
     * Returns all [project types](https://confluence.atlassian.com/x/Var1Nw), whether or not the instance has a valid
     * license for each type.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:** None.
     */
    getAllProjectTypes<T = Models.ProjectType[]>(callback: Callback<T>): Promise<void>;
    /**
     * Returns all [project types](https://confluence.atlassian.com/x/Var1Nw), whether or not the instance has a valid
     * license for each type.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:** None.
     */
    getAllProjectTypes<T = Models.ProjectType[]>(callback?: never): Promise<T>;
    /** Returns all [project types](https://confluence.atlassian.com/x/Var1Nw) with a valid license. */
    getAllAccessibleProjectTypes<T = Models.ProjectType[]>(callback: Callback<T>): Promise<void>;
    /** Returns all [project types](https://confluence.atlassian.com/x/Var1Nw) with a valid license. */
    getAllAccessibleProjectTypes<T = Models.ProjectType[]>(callback?: never): Promise<T>;
    /**
     * Returns a [project type](https://confluence.atlassian.com/x/Var1Nw).
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:** None.
     */
    getProjectTypeByKey<T = Models.ProjectType>(parameters: Parameters.GetProjectTypeByKey, callback: Callback<T>): Promise<void>;
    /**
     * Returns a [project type](https://confluence.atlassian.com/x/Var1Nw).
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:** None.
     */
    getProjectTypeByKey<T = Models.ProjectType>(parameters: Parameters.GetProjectTypeByKey, callback?: never): Promise<T>;
    /**
     * Returns a [project type](https://confluence.atlassian.com/x/Var1Nw) if it is accessible to the user.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * Permission to access Jira.
     */
    getAccessibleProjectTypeByKey<T = Models.ProjectType>(parameters: Parameters.GetAccessibleProjectTypeByKey, callback: Callback<T>): Promise<void>;
    /**
     * Returns a [project type](https://confluence.atlassian.com/x/Var1Nw) if it is accessible to the user.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * Permission to access Jira.
     */
    getAccessibleProjectTypeByKey<T = Models.ProjectType>(parameters: Parameters.GetAccessibleProjectTypeByKey, callback?: never): Promise<T>;
}
