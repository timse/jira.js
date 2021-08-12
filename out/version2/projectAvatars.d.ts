import * as Models from './models';
import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback } from '../callback';
export declare class ProjectAvatars {
    private client;
    constructor(client: Client);
    /**
     * Sets the avatar displayed for a project.
     *
     * Use [Load project avatar](#api-rest-api-2-project-projectIdOrKey-avatar2-post) to store avatars against the
     * project, before using this operation to set the displayed avatar.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg).
     */
    updateProjectAvatar<T = void>(parameters: Parameters.UpdateProjectAvatar, callback: Callback<T>): Promise<void>;
    /**
     * Sets the avatar displayed for a project.
     *
     * Use [Load project avatar](#api-rest-api-2-project-projectIdOrKey-avatar2-post) to store avatars against the
     * project, before using this operation to set the displayed avatar.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg).
     */
    updateProjectAvatar<T = void>(parameters: Parameters.UpdateProjectAvatar, callback?: never): Promise<T>;
    /**
     * Deletes a custom avatar from a project. Note that system avatars cannot be deleted.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg).
     */
    deleteProjectAvatar<T = void>(parameters: Parameters.DeleteProjectAvatar, callback: Callback<T>): Promise<void>;
    /**
     * Deletes a custom avatar from a project. Note that system avatars cannot be deleted.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg).
     */
    deleteProjectAvatar<T = void>(parameters: Parameters.DeleteProjectAvatar, callback?: never): Promise<T>;
    /**
     * Loads an avatar for a project.
     *
     * Specify the avatar's local file location in the body of the request. Also, include the following headers:
     *
     * - `X-Atlassian-Token: no-check` To prevent XSRF protection blocking the request, for more information see [Special
     *   Headers](#special-request-headers).
     * - `Content-Type: image/image type` Valid image types are JPEG, GIF, or PNG.
     *
     * For example: `curl --request POST `
     *
     * `--user email@example.com:<api_token> `
     *
     * `--header 'X-Atlassian-Token: no-check' `
     *
     * `--header 'Content-Type: image/< image_type>' `
     *
     * `--data-binary "<@/path/to/file/with/your/avatar>" `
     *
     * `--url 'https://your-domain.atlassian.net/rest/api/2/project/{projectIdOrKey}/avatar2'`
     *
     * The avatar is cropped to a square. If no crop parameters are specified, the square originates at the top left of
     * the image. The length of the square's sides is set to the smaller of the height or width of the image.
     *
     * The cropped image is then used to create avatars of 16x16, 24x24, 32x32, and 48x48 in size.
     *
     * After creating the avatar use [Set project avatar](#api-rest-api-2-project-projectIdOrKey-avatar-put) to set it as
     * the project's displayed avatar.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg).
     */
    createProjectAvatar<T = Models.Avatar>(parameters: Parameters.CreateProjectAvatar, callback: Callback<T>): Promise<void>;
    /**
     * Loads an avatar for a project.
     *
     * Specify the avatar's local file location in the body of the request. Also, include the following headers:
     *
     * - `X-Atlassian-Token: no-check` To prevent XSRF protection blocking the request, for more information see [Special
     *   Headers](#special-request-headers).
     * - `Content-Type: image/image type` Valid image types are JPEG, GIF, or PNG.
     *
     * For example: `curl --request POST `
     *
     * `--user email@example.com:<api_token> `
     *
     * `--header 'X-Atlassian-Token: no-check' `
     *
     * `--header 'Content-Type: image/< image_type>' `
     *
     * `--data-binary "<@/path/to/file/with/your/avatar>" `
     *
     * `--url 'https://your-domain.atlassian.net/rest/api/2/project/{projectIdOrKey}/avatar2'`
     *
     * The avatar is cropped to a square. If no crop parameters are specified, the square originates at the top left of
     * the image. The length of the square's sides is set to the smaller of the height or width of the image.
     *
     * The cropped image is then used to create avatars of 16x16, 24x24, 32x32, and 48x48 in size.
     *
     * After creating the avatar use [Set project avatar](#api-rest-api-2-project-projectIdOrKey-avatar-put) to set it as
     * the project's displayed avatar.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg).
     */
    createProjectAvatar<T = Models.Avatar>(parameters: Parameters.CreateProjectAvatar, callback?: never): Promise<T>;
    /**
     * Returns all project avatars, grouped by system and custom avatars.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:** *Browse
     * projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.
     */
    getAllProjectAvatars<T = Models.ProjectAvatars>(parameters: Parameters.GetAllProjectAvatars, callback: Callback<T>): Promise<void>;
    /**
     * Returns all project avatars, grouped by system and custom avatars.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:** *Browse
     * projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.
     */
    getAllProjectAvatars<T = Models.ProjectAvatars>(parameters: Parameters.GetAllProjectAvatars, callback?: never): Promise<T>;
}