import * as Models from './models';
import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback } from '../callback';
export declare class Issue {
    private client;
    constructor(client: Client);
    /**
     * Moves (ranks) issues before or after a given issue. At most 50 issues may be ranked at once. <p>
     *  This operation may fail for some issues, although this will be rare.
     *  In that case the 207 status code is returned for the whole response and
     *  detailed information regarding each issue is available in the response body.
     *  </p>
     *  <p>
     *  If rankCustomFieldId is not defined, the default rank field will be used.
     *  </p>
     */
    rankIssues<T = void>(parameters: Parameters.RankIssues | undefined, callback: Callback<T>): Promise<void>;
    /**
     * Moves (ranks) issues before or after a given issue. At most 50 issues may be ranked at once. <p>
     *  This operation may fail for some issues, although this will be rare.
     *  In that case the 207 status code is returned for the whole response and
     *  detailed information regarding each issue is available in the response body.
     *  </p>
     *  <p>
     *  If rankCustomFieldId is not defined, the default rank field will be used.
     *  </p>
     */
    rankIssues<T = void>(parameters?: Parameters.RankIssues, callback?: never): Promise<T>;
    /**
     * Returns a single issue, for a given issue ID or issue key.
     *
     * Issues returned from this resource include Agile fields, like sprint, closedSprints, flagged, and epic.
     */
    getIssue<T = Models.IssueBean>(parameters: Parameters.GetIssue, callback: Callback<T>): Promise<void>;
    /**
     * Returns a single issue, for a given issue ID or issue key.
     *
     * Issues returned from this resource include Agile fields, like sprint, closedSprints, flagged, and epic.
     */
    getIssue<T = Models.IssueBean>(parameters: Parameters.GetIssue, callback?: never): Promise<T>;
    /**
     * Returns the estimation of the issue and a fieldId of the field that is used for it. <code>boardId</code> param is
     * required. This param determines which field will be updated on a issue. <p>
     *  Original time internally stores and returns the estimation as a number of seconds.
     *  </p>
     *  <p>
     *  The field used for estimation on the given board can be obtained from <a href="#agile/1.0/board-getConfiguration">board configuration resource</a>.
     *  More information about the field are returned by
     *  <a href="#api-rest-api-<ver>-issue-getEditIssueMeta">edit meta resource</a>
     *  or <a href="#api-rest-api-<ver>-field-get">field resource</a>.
     *  </p>
     */
    getIssueEstimationForBoard<T = unknown>(parameters: Parameters.GetIssueEstimationForBoard, callback: Callback<T>): Promise<void>;
    /**
     * Returns the estimation of the issue and a fieldId of the field that is used for it. <code>boardId</code> param is
     * required. This param determines which field will be updated on a issue. <p>
     *  Original time internally stores and returns the estimation as a number of seconds.
     *  </p>
     *  <p>
     *  The field used for estimation on the given board can be obtained from <a href="#agile/1.0/board-getConfiguration">board configuration resource</a>.
     *  More information about the field are returned by
     *  <a href="#api-rest-api-<ver>-issue-getEditIssueMeta">edit meta resource</a>
     *  or <a href="#api-rest-api-<ver>-field-get">field resource</a>.
     *  </p>
     */
    getIssueEstimationForBoard<T = unknown>(parameters: Parameters.GetIssueEstimationForBoard, callback?: never): Promise<T>;
    /**
     * Updates the estimation of the issue. boardId param is required. This param determines which field will be updated on a issue. <p>
     *  Note that this resource changes the estimation field of the issue regardless of appearance the field on the screen.
     *  </p>
     *  <p>
     *  Original time tracking estimation field accepts estimation in formats like "1w", "2d", "3h", "20m" or number which represent number of minutes.
     *  However, internally the field stores and returns the estimation as a number of seconds.
     *  </p>
     *  <p>
     *  The field used for estimation on the given board can be obtained from <a href="#agile/1.0/board-getConfiguration">board configuration resource</a>.
     *  More information about the field are returned by
     *  <a href="#api-rest-api-<ver>-issue-issueIdOrKey-editmeta-get">edit meta resource</a>
     *  or <a href="#api-rest-api-<ver>-field-get">field resource</a>.
     *  </p>
     */
    estimateIssueForBoard<T = unknown>(parameters: Parameters.EstimateIssueForBoard, callback: Callback<T>): Promise<void>;
    /**
     * Updates the estimation of the issue. boardId param is required. This param determines which field will be updated on a issue. <p>
     *  Note that this resource changes the estimation field of the issue regardless of appearance the field on the screen.
     *  </p>
     *  <p>
     *  Original time tracking estimation field accepts estimation in formats like "1w", "2d", "3h", "20m" or number which represent number of minutes.
     *  However, internally the field stores and returns the estimation as a number of seconds.
     *  </p>
     *  <p>
     *  The field used for estimation on the given board can be obtained from <a href="#agile/1.0/board-getConfiguration">board configuration resource</a>.
     *  More information about the field are returned by
     *  <a href="#api-rest-api-<ver>-issue-issueIdOrKey-editmeta-get">edit meta resource</a>
     *  or <a href="#api-rest-api-<ver>-field-get">field resource</a>.
     *  </p>
     */
    estimateIssueForBoard<T = unknown>(parameters: Parameters.EstimateIssueForBoard, callback?: never): Promise<T>;
}