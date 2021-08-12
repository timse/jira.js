import * as Models from './models';
import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback } from '../callback';
export declare class ProjectRoles {
    private client;
    constructor(client: Client);
    /**
     * Returns a list of [project roles](https://confluence.atlassian.com/x/3odKLg) for the project returning the name and
     * self URL for each role.
     *
     * Note that all project roles are shared with all projects in Jira Cloud. See [Get all project
     * roles](#api-rest-api-2-role-get) for more information.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for any project on the site
     * or *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    getProjectRoles<T = Record<string, string>>(parameters: Parameters.GetProjectRoles, callback: Callback<T>): Promise<void>;
    /**
     * Returns a list of [project roles](https://confluence.atlassian.com/x/3odKLg) for the project returning the name and
     * self URL for each role.
     *
     * Note that all project roles are shared with all projects in Jira Cloud. See [Get all project
     * roles](#api-rest-api-2-role-get) for more information.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for any project on the site
     * or *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    getProjectRoles<T = Record<string, string>>(parameters: Parameters.GetProjectRoles, callback?: never): Promise<T>;
    /**
     * Returns a project role's details and actors associated with the project. The list of actors is sorted by display name.
     *
     * To check whether a user belongs to a role based on their group memberships, use [Get
     * user](#api-rest-api-2-user-get) with the `groups` expand parameter selected. Then check whether the user keys and
     * groups match with the actors returned for the project.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project or
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    getProjectRole<T = Models.ProjectRole>(parameters: Parameters.GetProjectRole, callback: Callback<T>): Promise<void>;
    /**
     * Returns a project role's details and actors associated with the project. The list of actors is sorted by display name.
     *
     * To check whether a user belongs to a role based on their group memberships, use [Get
     * user](#api-rest-api-2-user-get) with the `groups` expand parameter selected. Then check whether the user keys and
     * groups match with the actors returned for the project.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project or
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    getProjectRole<T = Models.ProjectRole>(parameters: Parameters.GetProjectRole, callback?: never): Promise<T>;
    /**
     * Returns all [project roles](https://confluence.atlassian.com/x/3odKLg) and the details for each role. Note that the
     * list of project roles is common to all projects.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) or *Administer projects* [project
     * permission](https://confluence.atlassian.com/x/yodKLg) for the project.
     */
    getProjectRoleDetails<T = Models.ProjectRoleDetails[]>(parameters: Parameters.GetProjectRoleDetails, callback: Callback<T>): Promise<void>;
    /**
     * Returns all [project roles](https://confluence.atlassian.com/x/3odKLg) and the details for each role. Note that the
     * list of project roles is common to all projects.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) or *Administer projects* [project
     * permission](https://confluence.atlassian.com/x/yodKLg) for the project.
     */
    getProjectRoleDetails<T = Models.ProjectRoleDetails[]>(parameters: Parameters.GetProjectRoleDetails, callback?: never): Promise<T>;
    /**
     * Gets a list of all project roles, complete with project role details and default actors.
     *
     * ### About project roles
     *
     * [Project roles](https://confluence.atlassian.com/x/3odKLg) are a flexible way to to associate users and groups with
     * projects. In Jira Cloud, the list of project roles is shared globally with all projects, but each project can have
     * a different set of actors associated with it (unlike groups, which have the same membership throughout all Jira
     * applications).
     *
     * Project roles are used in [permission schemes](#api-rest-api-2-permissionscheme-get), [email notification
     * schemes](#api-rest-api-2-notificationscheme-get), [issue security
     * levels](#api-rest-api-2-issuesecurityschemes-get), [comment visibility](#api-rest-api-2-comment-list-post), and
     * workflow conditions.
     *
     * #### Members and actors
     *
     * In the Jira REST API, a member of a project role is called an *actor*. An *actor* is a group or user associated
     * with a project role.
     *
     * Actors may be set as [default
     * members](https://confluence.atlassian.com/x/3odKLg#Managingprojectroles-Specifying'defaultmembers'foraprojectrole)
     * of the project role or set at the project level:
     *
     * - Default actors: Users and groups that are assigned to the project role for all newly created projects. The default
     *   actors can be removed at the project level later if desired.
     * - Actors: Users and groups that are associated with a project role for a project, which may differ from the default
     *   actors. This enables you to assign a user to different roles in different projects.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    getAllProjectRoles<T = Models.ProjectRole[]>(callback: Callback<T>): Promise<void>;
    /**
     * Gets a list of all project roles, complete with project role details and default actors.
     *
     * ### About project roles
     *
     * [Project roles](https://confluence.atlassian.com/x/3odKLg) are a flexible way to to associate users and groups with
     * projects. In Jira Cloud, the list of project roles is shared globally with all projects, but each project can have
     * a different set of actors associated with it (unlike groups, which have the same membership throughout all Jira
     * applications).
     *
     * Project roles are used in [permission schemes](#api-rest-api-2-permissionscheme-get), [email notification
     * schemes](#api-rest-api-2-notificationscheme-get), [issue security
     * levels](#api-rest-api-2-issuesecurityschemes-get), [comment visibility](#api-rest-api-2-comment-list-post), and
     * workflow conditions.
     *
     * #### Members and actors
     *
     * In the Jira REST API, a member of a project role is called an *actor*. An *actor* is a group or user associated
     * with a project role.
     *
     * Actors may be set as [default
     * members](https://confluence.atlassian.com/x/3odKLg#Managingprojectroles-Specifying'defaultmembers'foraprojectrole)
     * of the project role or set at the project level:
     *
     * - Default actors: Users and groups that are assigned to the project role for all newly created projects. The default
     *   actors can be removed at the project level later if desired.
     * - Actors: Users and groups that are associated with a project role for a project, which may differ from the default
     *   actors. This enables you to assign a user to different roles in different projects.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    getAllProjectRoles<T = Models.ProjectRole[]>(callback?: never): Promise<T>;
    /**
     * Creates a new project role with no [default actors](#api-rest-api-2-resolution-get). You can use the [Add default
     * actors to project role](#api-rest-api-2-role-id-actors-post) operation to add default actors to the project role
     * after creating it.
     *
     * *Note that although a new project role is available to all projects upon creation, any default actors that are
     * associated with the project role are not added to projects that existed prior to the role being created.*<
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    createProjectRole<T = Models.ProjectRole>(parameters: Parameters.CreateProjectRole | undefined, callback: Callback<T>): Promise<void>;
    /**
     * Creates a new project role with no [default actors](#api-rest-api-2-resolution-get). You can use the [Add default
     * actors to project role](#api-rest-api-2-role-id-actors-post) operation to add default actors to the project role
     * after creating it.
     *
     * *Note that although a new project role is available to all projects upon creation, any default actors that are
     * associated with the project role are not added to projects that existed prior to the role being created.*<
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    createProjectRole<T = Models.ProjectRole>(parameters?: Parameters.CreateProjectRole, callback?: never): Promise<T>;
    /**
     * Gets the project role details and the default actors associated with the role. The list of default actors is sorted
     * by display name.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    getProjectRoleById<T = Models.ProjectRole>(parameters: Parameters.GetProjectRoleById, callback: Callback<T>): Promise<void>;
    /**
     * Gets the project role details and the default actors associated with the role. The list of default actors is sorted
     * by display name.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    getProjectRoleById<T = Models.ProjectRole>(parameters: Parameters.GetProjectRoleById, callback?: never): Promise<T>;
    /**
     * Updates either the project role's name or its description.
     *
     * You cannot update both the name and description at the same time using this operation. If you send a request with a
     * name and a description only the name is updated.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    partialUpdateProjectRole<T = Models.ProjectRole>(parameters: Parameters.PartialUpdateProjectRole, callback: Callback<T>): Promise<void>;
    /**
     * Updates either the project role's name or its description.
     *
     * You cannot update both the name and description at the same time using this operation. If you send a request with a
     * name and a description only the name is updated.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    partialUpdateProjectRole<T = Models.ProjectRole>(parameters: Parameters.PartialUpdateProjectRole, callback?: never): Promise<T>;
    /**
     * Updates the project role's name and description. You must include both a name and a description in the request.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    fullyUpdateProjectRole<T = Models.ProjectRole>(parameters: Parameters.FullyUpdateProjectRole, callback: Callback<T>): Promise<void>;
    /**
     * Updates the project role's name and description. You must include both a name and a description in the request.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    fullyUpdateProjectRole<T = Models.ProjectRole>(parameters: Parameters.FullyUpdateProjectRole, callback?: never): Promise<T>;
    /**
     * Deletes a project role. You must specify a replacement project role if you wish to delete a project role that is in use.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    deleteProjectRole<T = void>(parameters: Parameters.DeleteProjectRole, callback: Callback<T>): Promise<void>;
    /**
     * Deletes a project role. You must specify a replacement project role if you wish to delete a project role that is in use.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    deleteProjectRole<T = void>(parameters: Parameters.DeleteProjectRole, callback?: never): Promise<T>;
}
