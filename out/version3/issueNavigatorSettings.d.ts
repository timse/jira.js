import * as Models from './models';
import { Client } from '../clients';
import { Callback } from '../callback';
export declare class IssueNavigatorSettings {
    private client;
    constructor(client: Client);
    /**
     * Returns the default issue navigator columns.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    getIssueNavigatorDefaultColumns<T = Models.ColumnItem[]>(callback: Callback<T>): Promise<void>;
    /**
     * Returns the default issue navigator columns.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    getIssueNavigatorDefaultColumns<T = Models.ColumnItem[]>(callback?: never): Promise<T>;
    /**
     * Sets the default issue navigator columns.
     *
     * The `columns` parameter accepts a navigable field value and is expressed as HTML form data. To specify multiple
     * columns, pass multiple `columns` parameters. For example, in curl:
     *
     * `curl -X PUT -d columns=summary -d columns=description https://your-domain.atlassian.net/rest/api/3/settings/columns`
     *
     * If no column details are sent, then all default columns are removed.
     *
     * A navigable field is one that can be used as a column on the issue navigator. Find details of navigable issue
     * columns using [Get fields](#api-rest-api-3-field-get).
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    setIssueNavigatorDefaultColumns<T = unknown>(callback: Callback<T>): Promise<void>;
    /**
     * Sets the default issue navigator columns.
     *
     * The `columns` parameter accepts a navigable field value and is expressed as HTML form data. To specify multiple
     * columns, pass multiple `columns` parameters. For example, in curl:
     *
     * `curl -X PUT -d columns=summary -d columns=description https://your-domain.atlassian.net/rest/api/3/settings/columns`
     *
     * If no column details are sent, then all default columns are removed.
     *
     * A navigable field is one that can be used as a column on the issue navigator. Find details of navigable issue
     * columns using [Get fields](#api-rest-api-3-field-get).
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    setIssueNavigatorDefaultColumns<T = unknown>(callback?: never): Promise<T>;
}
