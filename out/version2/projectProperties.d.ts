import * as Models from './models';
import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback } from '../callback';
export declare class ProjectProperties {
    private client;
    constructor(client: Client);
    /**
     * Returns all [project
     * property](https://developer.atlassian.com/cloud/jira/platform/storing-data-without-a-database/#a-id-jira-entity-properties-a-jira-entity-properties)
     * keys for the project.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:** *Browse
     * Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.
     */
    getProjectPropertyKeys<T = Models.PropertyKeys>(parameters: Parameters.GetProjectPropertyKeys, callback: Callback<T>): Promise<void>;
    /**
     * Returns all [project
     * property](https://developer.atlassian.com/cloud/jira/platform/storing-data-without-a-database/#a-id-jira-entity-properties-a-jira-entity-properties)
     * keys for the project.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:** *Browse
     * Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.
     */
    getProjectPropertyKeys<T = Models.PropertyKeys>(parameters: Parameters.GetProjectPropertyKeys, callback?: never): Promise<T>;
    /**
     * Returns the value of a [project
     * property](https://developer.atlassian.com/cloud/jira/platform/storing-data-without-a-database/#a-id-jira-entity-properties-a-jira-entity-properties).
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:** *Browse
     * Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the property.
     */
    getProjectProperty<T = Models.EntityProperty>(parameters: Parameters.GetProjectProperty, callback: Callback<T>): Promise<void>;
    /**
     * Returns the value of a [project
     * property](https://developer.atlassian.com/cloud/jira/platform/storing-data-without-a-database/#a-id-jira-entity-properties-a-jira-entity-properties).
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:** *Browse
     * Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the property.
     */
    getProjectProperty<T = Models.EntityProperty>(parameters: Parameters.GetProjectProperty, callback?: never): Promise<T>;
    /**
     * Sets the value of the [project
     * property](https://developer.atlassian.com/cloud/jira/platform/storing-data-without-a-database/#a-id-jira-entity-properties-a-jira-entity-properties).
     * You can use project properties to store custom data against the project.
     *
     * The value of the request body must be a [valid](http://tools.ietf.org/html/rfc4627), non-empty JSON blob. The
     * maximum length is 32768 characters.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) or *Administer Projects* [project
     * permission](https://confluence.atlassian.com/x/yodKLg) for the project in which the property is created.
     */
    setProjectProperty<T = unknown>(parameters: Parameters.SetProjectProperty, callback: Callback<T>): Promise<void>;
    /**
     * Sets the value of the [project
     * property](https://developer.atlassian.com/cloud/jira/platform/storing-data-without-a-database/#a-id-jira-entity-properties-a-jira-entity-properties).
     * You can use project properties to store custom data against the project.
     *
     * The value of the request body must be a [valid](http://tools.ietf.org/html/rfc4627), non-empty JSON blob. The
     * maximum length is 32768 characters.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) or *Administer Projects* [project
     * permission](https://confluence.atlassian.com/x/yodKLg) for the project in which the property is created.
     */
    setProjectProperty<T = unknown>(parameters: Parameters.SetProjectProperty, callback?: never): Promise<T>;
    /**
     * Deletes the
     * [property](https://developer.atlassian.com/cloud/jira/platform/storing-data-without-a-database/#a-id-jira-entity-properties-a-jira-entity-properties)
     * from a project.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) or *Administer Projects* [project
     * permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the property.
     */
    deleteProjectProperty<T = void>(parameters: Parameters.DeleteProjectProperty, callback: Callback<T>): Promise<void>;
    /**
     * Deletes the
     * [property](https://developer.atlassian.com/cloud/jira/platform/storing-data-without-a-database/#a-id-jira-entity-properties-a-jira-entity-properties)
     * from a project.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) or *Administer Projects* [project
     * permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the property.
     */
    deleteProjectProperty<T = void>(parameters: Parameters.DeleteProjectProperty, callback?: never): Promise<T>;
}
