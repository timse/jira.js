import * as Models from './models';
import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback } from '../callback';
export declare class IssueSecurityLevel {
    private client;
    constructor(client: Client);
    /**
     * Returns issue security level members.
     *
     * Only issue security level members in context of classic projects are returned.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    getIssueSecurityLevelMembers<T = Models.PageBeanIssueSecurityLevelMember>(parameters: Parameters.GetIssueSecurityLevelMembers, callback: Callback<T>): Promise<void>;
    /**
     * Returns issue security level members.
     *
     * Only issue security level members in context of classic projects are returned.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    getIssueSecurityLevelMembers<T = Models.PageBeanIssueSecurityLevelMember>(parameters: Parameters.GetIssueSecurityLevelMembers, callback?: never): Promise<T>;
    /**
     * Returns details of an issue security level.
     *
     * Use [Get issue security scheme](#api-rest-api-2-issuesecurityschemes-id-get) to obtain the IDs of issue security
     * levels associated with the issue security scheme.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:** None.
     */
    getIssueSecurityLevel<T = Models.SecurityLevel>(parameters: Parameters.GetIssueSecurityLevel, callback: Callback<T>): Promise<void>;
    /**
     * Returns details of an issue security level.
     *
     * Use [Get issue security scheme](#api-rest-api-2-issuesecurityschemes-id-get) to obtain the IDs of issue security
     * levels associated with the issue security scheme.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:** None.
     */
    getIssueSecurityLevel<T = Models.SecurityLevel>(parameters: Parameters.GetIssueSecurityLevel, callback?: never): Promise<T>;
}
