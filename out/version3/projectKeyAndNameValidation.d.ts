import * as Models from './models';
import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback } from '../callback';
export declare class ProjectKeyAndNameValidation {
    private client;
    constructor(client: Client);
    /**
     * Validates a project key by confirming the key is a valid string and not in use.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:** None.
     */
    validateProjectKey<T = Models.ErrorCollection>(parameters: Parameters.ValidateProjectKey | undefined, callback: Callback<T>): Promise<void>;
    /**
     * Validates a project key by confirming the key is a valid string and not in use.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:** None.
     */
    validateProjectKey<T = Models.ErrorCollection>(parameters?: Parameters.ValidateProjectKey, callback?: never): Promise<T>;
    /**
     * Validates a project key and, if the key is invalid or in use, generates a valid random string for the project key.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:** None.
     */
    getValidProjectKey<T = unknown>(parameters: Parameters.GetValidProjectKey | undefined, callback: Callback<T>): Promise<void>;
    /**
     * Validates a project key and, if the key is invalid or in use, generates a valid random string for the project key.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:** None.
     */
    getValidProjectKey<T = unknown>(parameters?: Parameters.GetValidProjectKey, callback?: never): Promise<T>;
    /**
     * Checks that a project name isn't in use. If the name isn't in use, the passed string is returned. If the name is in
     * use, this operation attempts to generate a valid project name based on the one supplied, usually by adding a
     * sequence number. If a valid project name cannot be generated, a 404 response is returned.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:** None.
     */
    getValidProjectName<T = unknown>(parameters: Parameters.GetValidProjectName, callback: Callback<T>): Promise<void>;
    /**
     * Checks that a project name isn't in use. If the name isn't in use, the passed string is returned. If the name is in
     * use, this operation attempts to generate a valid project name based on the one supplied, usually by adding a
     * sequence number. If a valid project name cannot be generated, a 404 response is returned.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:** None.
     */
    getValidProjectName<T = unknown>(parameters: Parameters.GetValidProjectName, callback?: never): Promise<T>;
}
