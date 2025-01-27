import * as Models from './models';
import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback } from '../callback';
export declare class ProjectRoleActors {
    private client;
    constructor(client: Client);
    /**
     * Adds actors to a project role for the project.
     *
     * To replace all actors for the project, use [Set actors for project role](#api-rest-api-3-project-projectIdOrKey-role-id-put).
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project or
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    addActorUsers<T = Models.ProjectRole>(parameters: Parameters.AddActorUsers, callback: Callback<T>): Promise<void>;
    /**
     * Adds actors to a project role for the project.
     *
     * To replace all actors for the project, use [Set actors for project role](#api-rest-api-3-project-projectIdOrKey-role-id-put).
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project or
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    addActorUsers<T = Models.ProjectRole>(parameters: Parameters.AddActorUsers, callback?: never): Promise<T>;
    /**
     * Sets the actors for a project role for a project, replacing all existing actors.
     *
     * To add actors to the project without overwriting the existing list, use [Add actors to project
     * role](#api-rest-api-3-project-projectIdOrKey-role-id-post).
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project or
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    setActors<T = Models.ProjectRole>(parameters: Parameters.SetActors, callback: Callback<T>): Promise<void>;
    /**
     * Sets the actors for a project role for a project, replacing all existing actors.
     *
     * To add actors to the project without overwriting the existing list, use [Add actors to project
     * role](#api-rest-api-3-project-projectIdOrKey-role-id-post).
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project or
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    setActors<T = Models.ProjectRole>(parameters: Parameters.SetActors, callback?: never): Promise<T>;
    /**
     * Deletes actors from a project role for the project.
     *
     * To remove default actors from the project role, use [Delete default actors from project
     * role](#api-rest-api-3-role-id-actors-delete).
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project or
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    deleteActor<T = void>(parameters: Parameters.DeleteActor, callback: Callback<T>): Promise<void>;
    /**
     * Deletes actors from a project role for the project.
     *
     * To remove default actors from the project role, use [Delete default actors from project
     * role](#api-rest-api-3-role-id-actors-delete).
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project or
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    deleteActor<T = void>(parameters: Parameters.DeleteActor, callback?: never): Promise<T>;
    /**
     * Returns the [default actors](#api-rest-api-3-resolution-get) for the project role.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    getProjectRoleActorsForRole<T = Models.ProjectRole>(parameters: Parameters.GetProjectRoleActorsForRole, callback: Callback<T>): Promise<void>;
    /**
     * Returns the [default actors](#api-rest-api-3-resolution-get) for the project role.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    getProjectRoleActorsForRole<T = Models.ProjectRole>(parameters: Parameters.GetProjectRoleActorsForRole, callback?: never): Promise<T>;
    /**
     * Adds [default actors](#api-rest-api-3-resolution-get) to a role. You may add groups or users, but you cannot add
     * groups and users in the same request.
     *
     * Changing a project role's default actors does not affect project role members for projects already created.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    addProjectRoleActorsToRole<T = Models.ProjectRole>(parameters: Parameters.AddProjectRoleActorsToRole, callback: Callback<T>): Promise<void>;
    /**
     * Adds [default actors](#api-rest-api-3-resolution-get) to a role. You may add groups or users, but you cannot add
     * groups and users in the same request.
     *
     * Changing a project role's default actors does not affect project role members for projects already created.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    addProjectRoleActorsToRole<T = Models.ProjectRole>(parameters: Parameters.AddProjectRoleActorsToRole, callback?: never): Promise<T>;
    /**
     * Deletes the [default actors](#api-rest-api-3-resolution-get) from a project role. You may delete a group or user,
     * but you cannot delete a group and a user in the same request.
     *
     * Changing a project role's default actors does not affect project role members for projects already created.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    deleteProjectRoleActorsFromRole<T = Models.ProjectRole>(parameters: Parameters.DeleteProjectRoleActorsFromRole, callback: Callback<T>): Promise<void>;
    /**
     * Deletes the [default actors](#api-rest-api-3-resolution-get) from a project role. You may delete a group or user,
     * but you cannot delete a group and a user in the same request.
     *
     * Changing a project role's default actors does not affect project role members for projects already created.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    deleteProjectRoleActorsFromRole<T = Models.ProjectRole>(parameters: Parameters.DeleteProjectRoleActorsFromRole, callback?: never): Promise<T>;
}
