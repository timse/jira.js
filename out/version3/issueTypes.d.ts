import * as Models from './models';
import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback } from '../callback';
export declare class IssueTypes {
    private client;
    constructor(client: Client);
    /**
     * Returns all issue types.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:** Issue
     * types are only returned as follows:
     *
     * - If the user has the *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg), all issue
     *   types are returned.
     * - If the user has the *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for one or
     *   more projects, the issue types associated with the projects the user has permission to browse are returned.
     */
    getIssueAllTypes<T = Models.IssueTypeDetails[]>(callback: Callback<T>): Promise<void>;
    /**
     * Returns all issue types.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:** Issue
     * types are only returned as follows:
     *
     * - If the user has the *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg), all issue
     *   types are returned.
     * - If the user has the *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for one or
     *   more projects, the issue types associated with the projects the user has permission to browse are returned.
     */
    getIssueAllTypes<T = Models.IssueTypeDetails[]>(callback?: never): Promise<T>;
    /**
     * Creates an issue type and adds it to the default issue type scheme.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    createIssueType<T = Models.IssueTypeDetails>(parameters: Parameters.CreateIssueType | undefined, callback: Callback<T>): Promise<void>;
    /**
     * Creates an issue type and adds it to the default issue type scheme.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    createIssueType<T = Models.IssueTypeDetails>(parameters?: Parameters.CreateIssueType, callback?: never): Promise<T>;
    /**
     * Returns issue types for a project.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](#permissions) required:** *Browse projects* [project
     * permission](https://confluence.atlassian.com/x/yodKLg) in the relevant project or *Administer Jira* [global
     * permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    getIssueTypesForProject<T = Array<Models.IssueTypeDetails>>(parameters: Parameters.GetIssueTypesForProject, callback: Callback<T>): Promise<void>;
    /**
     * Returns issue types for a project.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](#permissions) required:** *Browse projects* [project
     * permission](https://confluence.atlassian.com/x/yodKLg) in the relevant project or *Administer Jira* [global
     * permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    getIssueTypesForProject<T = Array<Models.IssueTypeDetails>>(parameters: Parameters.GetIssueTypesForProject, callback?: never): Promise<T>;
    /**
     * Returns an issue type.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:** *Browse
     * projects* [project permission](https://confluence.atlassian.com/x/yodKLg) in a project the issue type is associated
     * with or *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    getIssueType<T = Models.IssueTypeDetails>(parameters: Parameters.GetIssueType, callback: Callback<T>): Promise<void>;
    /**
     * Returns an issue type.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:** *Browse
     * projects* [project permission](https://confluence.atlassian.com/x/yodKLg) in a project the issue type is associated
     * with or *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    getIssueType<T = Models.IssueTypeDetails>(parameters: Parameters.GetIssueType, callback?: never): Promise<T>;
    /**
     * Updates the issue type.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    updateIssueType<T = Models.IssueTypeDetails>(parameters: Parameters.UpdateIssueType, callback: Callback<T>): Promise<void>;
    /**
     * Updates the issue type.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    updateIssueType<T = Models.IssueTypeDetails>(parameters: Parameters.UpdateIssueType, callback?: never): Promise<T>;
    /**
     * Deletes the issue type. If the issue type is in use, all uses are updated with the alternative issue type
     * (`alternativeIssueTypeId`). A list of alternative issue types are obtained from the [Get alternative issue
     * types](#api-rest-api-3-issuetype-id-alternatives-get) resource.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    deleteIssueType<T = void>(parameters: Parameters.DeleteIssueType, callback: Callback<T>): Promise<void>;
    /**
     * Deletes the issue type. If the issue type is in use, all uses are updated with the alternative issue type
     * (`alternativeIssueTypeId`). A list of alternative issue types are obtained from the [Get alternative issue
     * types](#api-rest-api-3-issuetype-id-alternatives-get) resource.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    deleteIssueType<T = void>(parameters: Parameters.DeleteIssueType, callback?: never): Promise<T>;
    /**
     * Returns a list of issue types that can be used to replace the issue type. The alternative issue types are those
     * assigned to the same workflow scheme, field configuration scheme, and screen scheme.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:** None.
     */
    getAlternativeIssueTypes<T = Models.IssueTypeDetails[]>(parameters: Parameters.GetAlternativeIssueTypes, callback: Callback<T>): Promise<void>;
    /**
     * Returns a list of issue types that can be used to replace the issue type. The alternative issue types are those
     * assigned to the same workflow scheme, field configuration scheme, and screen scheme.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:** None.
     */
    getAlternativeIssueTypes<T = Models.IssueTypeDetails[]>(parameters: Parameters.GetAlternativeIssueTypes, callback?: never): Promise<T>;
    /**
     * Loads an avatar for the issue type.
     *
     * Specify the avatar's local file location in the body of the request. Also, include the following headers:
     *
     * - `X-Atlassian-Token: no-check` To prevent XSRF protection blocking the request, for more information see [Special
     *   Headers](#special-request-headers).
     * - `Content-Type: image/image type` Valid image types are JPEG, GIF, or PNG.
     *
     * For example: `curl --request POST \ --user email@example.com:<api_token> \ --header 'X-Atlassian-Token: no-check' \
     * --header 'Content-Type: image/< image_type>' \ --data-binary "<@/path/to/file/with/your/avatar>" \ --url
     * 'https://your-domain.atlassian.net/rest/api/3/issuetype/{issueTypeId}'This`
     *
     * The avatar is cropped to a square. If no crop parameters are specified, the square originates at the top left of
     * the image. The length of the square's sides is set to the smaller of the height or width of the image.
     *
     * The cropped image is then used to create avatars of 16x16, 24x24, 32x32, and 48x48 in size.
     *
     * After creating the avatar, use [ Update issue type](#api-rest-api-3-issuetype-id-put) to set it as the issue type's
     * displayed avatar.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    createIssueTypeAvatar<T = Models.Avatar>(parameters: Parameters.CreateIssueTypeAvatar, callback: Callback<T>): Promise<void>;
    /**
     * Loads an avatar for the issue type.
     *
     * Specify the avatar's local file location in the body of the request. Also, include the following headers:
     *
     * - `X-Atlassian-Token: no-check` To prevent XSRF protection blocking the request, for more information see [Special
     *   Headers](#special-request-headers).
     * - `Content-Type: image/image type` Valid image types are JPEG, GIF, or PNG.
     *
     * For example: `curl --request POST \ --user email@example.com:<api_token> \ --header 'X-Atlassian-Token: no-check' \
     * --header 'Content-Type: image/< image_type>' \ --data-binary "<@/path/to/file/with/your/avatar>" \ --url
     * 'https://your-domain.atlassian.net/rest/api/3/issuetype/{issueTypeId}'This`
     *
     * The avatar is cropped to a square. If no crop parameters are specified, the square originates at the top left of
     * the image. The length of the square's sides is set to the smaller of the height or width of the image.
     *
     * The cropped image is then used to create avatars of 16x16, 24x24, 32x32, and 48x48 in size.
     *
     * After creating the avatar, use [ Update issue type](#api-rest-api-3-issuetype-id-put) to set it as the issue type's
     * displayed avatar.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    createIssueTypeAvatar<T = Models.Avatar>(parameters: Parameters.CreateIssueTypeAvatar, callback?: never): Promise<T>;
}
