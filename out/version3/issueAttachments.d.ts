import * as Models from './models';
import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback } from '../callback';
export declare class IssueAttachments {
    private client;
    constructor(client: Client);
    /**
     * Returns the attachment settings, that is, whether attachments are enabled and the maximum attachment size allowed.
     *
     * Note that there are also [project permissions](https://confluence.atlassian.com/x/yodKLg) that restrict whether
     * users can create and delete attachments.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:** None.
     */
    getAttachmentMeta<T = Models.AttachmentSettings>(callback: Callback<T>): Promise<void>;
    /**
     * Returns the attachment settings, that is, whether attachments are enabled and the maximum attachment size allowed.
     *
     * Note that there are also [project permissions](https://confluence.atlassian.com/x/yodKLg) that restrict whether
     * users can create and delete attachments.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:** None.
     */
    getAttachmentMeta<T = Models.AttachmentSettings>(callback?: never): Promise<T>;
    /**
     * Returns the metadata for an attachment. Note that the attachment itself is not returned.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     *
     * - *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
     * - If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission
     *   to view the issue.
     */
    getAttachment<T = Models.AttachmentMetadata>(parameters: Parameters.GetAttachment, callback: Callback<T>): Promise<void>;
    /**
     * Returns the metadata for an attachment. Note that the attachment itself is not returned.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     *
     * - *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
     * - If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission
     *   to view the issue.
     */
    getAttachment<T = Models.AttachmentMetadata>(parameters: Parameters.GetAttachment, callback?: never): Promise<T>;
    /**
     * Deletes an attachment from an issue.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:** For the
     * project holding the issue containing the attachment:
     *
     * - *Delete own attachments* [project permission](https://confluence.atlassian.com/x/yodKLg) to delete an attachment
     *   created by the calling user.
     * - *Delete all attachments* [project permission](https://confluence.atlassian.com/x/yodKLg) to delete an attachment
     *   created by any user.
     */
    removeAttachment<T = void>(parameters: Parameters.RemoveAttachment, callback: Callback<T>): Promise<void>;
    /**
     * Deletes an attachment from an issue.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:** For the
     * project holding the issue containing the attachment:
     *
     * - *Delete own attachments* [project permission](https://confluence.atlassian.com/x/yodKLg) to delete an attachment
     *   created by the calling user.
     * - *Delete all attachments* [project permission](https://confluence.atlassian.com/x/yodKLg) to delete an attachment
     *   created by any user.
     */
    removeAttachment<T = void>(parameters: Parameters.RemoveAttachment, callback?: never): Promise<T>;
    /**
     * Returns the metadata for the contents of an attachment, if it is an archive, and metadata for the attachment
     * itself. For example, if the attachment is a ZIP archive, then information about the files in the archive is
     * returned and metadata for the ZIP archive. Currently, only the ZIP archive format is supported.
     *
     * Use this operation to retrieve data that is presented to the user, as this operation returns the metadata for the
     * attachment itself, such as the attachment's ID and name. Otherwise, use [ Get contents metadata for an expanded
     * attachment](#api-rest-api-3-attachment-id-expand-raw-get), which only returns the metadata for the attachment's contents.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:** For the
     * issue containing the attachment:
     *
     * - *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
     * - If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission
     *   to view the issue.
     */
    expandAttachmentForHumans<T = Models.AttachmentArchiveMetadataReadable>(parameters: Parameters.ExpandAttachmentForHumans, callback: Callback<T>): Promise<void>;
    /**
     * Returns the metadata for the contents of an attachment, if it is an archive, and metadata for the attachment
     * itself. For example, if the attachment is a ZIP archive, then information about the files in the archive is
     * returned and metadata for the ZIP archive. Currently, only the ZIP archive format is supported.
     *
     * Use this operation to retrieve data that is presented to the user, as this operation returns the metadata for the
     * attachment itself, such as the attachment's ID and name. Otherwise, use [ Get contents metadata for an expanded
     * attachment](#api-rest-api-3-attachment-id-expand-raw-get), which only returns the metadata for the attachment's contents.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:** For the
     * issue containing the attachment:
     *
     * - *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
     * - If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission
     *   to view the issue.
     */
    expandAttachmentForHumans<T = Models.AttachmentArchiveMetadataReadable>(parameters: Parameters.ExpandAttachmentForHumans, callback?: never): Promise<T>;
    /**
     * Returns the metadata for the contents of an attachment, if it is an archive. For example, if the attachment is a
     * ZIP archive, then information about the files in the archive is returned. Currently, only the ZIP archive format is
     * supported.
     *
     * Use this operation if you are processing the data without presenting it to the user, as this operation only returns
     * the metadata for the contents of the attachment. Otherwise, to retrieve data to present to the user, use [ Get all
     * metadata for an expanded attachment](#api-rest-api-3-attachment-id-expand-human-get) which also returns the
     * metadata for the attachment itself, such as the attachment's ID and name.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:** For the
     * issue containing the attachment:
     *
     * - *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
     * - If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission
     *   to view the issue.
     */
    expandAttachmentForMachines<T = Models.AttachmentArchiveImpl>(parameters: Parameters.ExpandAttachmentForMachines, callback: Callback<T>): Promise<void>;
    /**
     * Returns the metadata for the contents of an attachment, if it is an archive. For example, if the attachment is a
     * ZIP archive, then information about the files in the archive is returned. Currently, only the ZIP archive format is
     * supported.
     *
     * Use this operation if you are processing the data without presenting it to the user, as this operation only returns
     * the metadata for the contents of the attachment. Otherwise, to retrieve data to present to the user, use [ Get all
     * metadata for an expanded attachment](#api-rest-api-3-attachment-id-expand-human-get) which also returns the
     * metadata for the attachment itself, such as the attachment's ID and name.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:** For the
     * issue containing the attachment:
     *
     * - *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
     * - If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission
     *   to view the issue.
     */
    expandAttachmentForMachines<T = Models.AttachmentArchiveImpl>(parameters: Parameters.ExpandAttachmentForMachines, callback?: never): Promise<T>;
    /**
     * Adds one or more attachments to an issue. Attachments are posted as multipart/form-data ([RFC
     * 1867](https://www.ietf.org/rfc/rfc1867.txt)).
     *
     * Note that:
     *
     * - The request must have a `X-Atlassian-Token: no-check` header, if not it is blocked. See [Special
     *   headers](#special-request-headers) for more information.
     * - The name of the multipart/form-data parameter that contains the attachments must be `file`.
     *
     * The following example uploads a file called *myfile.txt* to the issue *TEST-123*:
     *
     * `curl -D- -u admin:admin -X POST -H "X-Atlassian-Token: no-check" -F "file=@myfile.txt"
     * https://your-domain.atlassian.net/rest/api/3/issue/TEST-123/attachments`
     *
     * Tip: Use a client library. Many client libraries have classes for handling multipart POST operations. For example,
     * in Java, the Apache HTTP Components library provides a
     * [MultiPartEntity](http://hc.apache.org/httpcomponents-client-ga/httpmime/apidocs/org/apache/http/entity/mime/MultipartEntity.html)
     * class for multipart POST operations.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     *
     * - *Browse Projects* and *Create attachments* [ project permission](https://confluence.atlassian.com/x/yodKLg) for the
     *   project that the issue is in.
     * - If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission
     *   to view the issue.
     */
    addAttachment<T = Models.Attachment[]>(parameters: Parameters.AddAttachment, callback: Callback<T>): Promise<void>;
    /**
     * Adds one or more attachments to an issue. Attachments are posted as multipart/form-data ([RFC
     * 1867](https://www.ietf.org/rfc/rfc1867.txt)).
     *
     * Note that:
     *
     * - The request must have a `X-Atlassian-Token: no-check` header, if not it is blocked. See [Special
     *   headers](#special-request-headers) for more information.
     * - The name of the multipart/form-data parameter that contains the attachments must be `file`.
     *
     * The following example uploads a file called *myfile.txt* to the issue *TEST-123*:
     *
     * `curl -D- -u admin:admin -X POST -H "X-Atlassian-Token: no-check" -F "file=@myfile.txt"
     * https://your-domain.atlassian.net/rest/api/3/issue/TEST-123/attachments`
     *
     * Tip: Use a client library. Many client libraries have classes for handling multipart POST operations. For example,
     * in Java, the Apache HTTP Components library provides a
     * [MultiPartEntity](http://hc.apache.org/httpcomponents-client-ga/httpmime/apidocs/org/apache/http/entity/mime/MultipartEntity.html)
     * class for multipart POST operations.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     *
     * - *Browse Projects* and *Create attachments* [ project permission](https://confluence.atlassian.com/x/yodKLg) for the
     *   project that the issue is in.
     * - If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission
     *   to view the issue.
     */
    addAttachment<T = Models.Attachment[]>(parameters: Parameters.AddAttachment, callback?: never): Promise<T>;
}
