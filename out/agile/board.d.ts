import * as Models from './models';
import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback } from '../callback';
import { Paginated } from '../paginated';
export declare class Board {
    private client;
    constructor(client: Client);
    /** Returns all boards. This only includes boards that the user has permission to view. */
    getAllBoards<T = Models.GetAllBoards>(parameters: Parameters.GetAllBoards | undefined, callback: Callback<T>): Promise<void>;
    /** Returns all boards. This only includes boards that the user has permission to view. */
    getAllBoards<T = Models.GetAllBoards>(parameters?: Parameters.GetAllBoards, callback?: never): Promise<T>;
    /**
     * Creates a new board. Board name, type and filter ID is required. <ul> <li><code>name</code> - Must be less than 255 characters.</li>
     *  <li><code>type</code> - Valid values: scrum, kanban</li>
     *  <li><code>filterId</code> - ID of a filter that the user has permissions to view. Note, if the user does not have the 'Create shared objects'
     *  permission and tries to create a shared board, a private board will be created instead (remember that board sharing depends on the filter sharing).</li>
     *  <li><code>location</code> - The container that the board will be located in. <code>location</code> must include the <code>type</code> property (Valid values: project, user).
     *  If choosing 'project', then a project must be specified by a <code>projectKeyOrId</code> property in <code>location</code>.
     *  If choosing 'user', the current user is chosen by default. The <code>projectKeyOrId</code> property should not be provided.
     *  </li>
     *  </ul>
     *  <p>
     *  Note:
     *  <ul>
     *  <li>
     *  If you want to create a new project with an associated board, use the <a href="https://docs.atlassian.com/jira/REST/latest">Jira platform REST API</a>.
     *  For more information, see the <a href="#api-rest-api-<ver>-project-post">Create project</a> method.
     *  The <code>projectTypeKey</code> for software boards must be 'software' and the <code>projectTemplateKey</code> must be either
     *  <code>com.pyxis.greenhopper.jira:gh-kanban-template</code> or <code>com.pyxis.greenhopper.jira:gh-scrum-template</code>.
     *  </li>
     *  <li>
     *  You can create a filter using the <a href="https://docs.atlassian.com/jira/REST/latest">Jira REST API</a>.
     *  For more information, see the <a href="#api-rest-api-<ver>-filter-post">Create filter</a> method.
     *  </li>
     *  <li>
     *  If you do not ORDER BY the Rank field for the filter of your board, you will not be able to reorder issues on the board.
     *  </li>
     *  </ul>
     */
    createBoard<T = Models.CreateBoard>(parameters: Parameters.CreateBoard, callback: Callback<T>): Promise<void>;
    /**
     * Creates a new board. Board name, type and filter ID is required. <ul> <li><code>name</code> - Must be less than 255 characters.</li>
     *  <li><code>type</code> - Valid values: scrum, kanban</li>
     *  <li><code>filterId</code> - ID of a filter that the user has permissions to view. Note, if the user does not have the 'Create shared objects'
     *  permission and tries to create a shared board, a private board will be created instead (remember that board sharing depends on the filter sharing).</li>
     *  <li><code>location</code> - The container that the board will be located in. <code>location</code> must include the <code>type</code> property (Valid values: project, user).
     *  If choosing 'project', then a project must be specified by a <code>projectKeyOrId</code> property in <code>location</code>.
     *  If choosing 'user', the current user is chosen by default. The <code>projectKeyOrId</code> property should not be provided.
     *  </li>
     *  </ul>
     *  <p>
     *  Note:
     *  <ul>
     *  <li>
     *  If you want to create a new project with an associated board, use the <a href="https://docs.atlassian.com/jira/REST/latest">Jira platform REST API</a>.
     *  For more information, see the <a href="#api-rest-api-<ver>-project-post">Create project</a> method.
     *  The <code>projectTypeKey</code> for software boards must be 'software' and the <code>projectTemplateKey</code> must be either
     *  <code>com.pyxis.greenhopper.jira:gh-kanban-template</code> or <code>com.pyxis.greenhopper.jira:gh-scrum-template</code>.
     *  </li>
     *  <li>
     *  You can create a filter using the <a href="https://docs.atlassian.com/jira/REST/latest">Jira REST API</a>.
     *  For more information, see the <a href="#api-rest-api-<ver>-filter-post">Create filter</a> method.
     *  </li>
     *  <li>
     *  If you do not ORDER BY the Rank field for the filter of your board, you will not be able to reorder issues on the board.
     *  </li>
     *  </ul>
     */
    createBoard<T = Models.CreateBoard>(parameters: Parameters.CreateBoard, callback?: never): Promise<T>;
    /**
     * Returns any boards which use the provided filter id. This method can be executed by users without a valid software
     * license in order to find which boards are using a particular filter.
     */
    getBoardByFilterId<T = Models.GetBoardByFilterId>(parameters: Parameters.GetBoardByFilterId, callback: Callback<T>): Promise<void>;
    /**
     * Returns any boards which use the provided filter id. This method can be executed by users without a valid software
     * license in order to find which boards are using a particular filter.
     */
    getBoardByFilterId<T = Models.GetBoardByFilterId>(parameters: Parameters.GetBoardByFilterId, callback?: never): Promise<T>;
    /**
     * Returns the board for the given board ID. This board will only be returned if the user has permission to view it.
     * Admins without the view permission will see the board as a private one, so will see only a subset of the board's
     * data (board location for instance).
     */
    getBoard<T = Models.GetBoard>(parameters: Parameters.GetBoard, callback: Callback<T>): Promise<void>;
    /**
     * Returns the board for the given board ID. This board will only be returned if the user has permission to view it.
     * Admins without the view permission will see the board as a private one, so will see only a subset of the board's
     * data (board location for instance).
     */
    getBoard<T = Models.GetBoard>(parameters: Parameters.GetBoard, callback?: never): Promise<T>;
    /** Deletes the board. Admin without the view permission can still remove the board. */
    deleteBoard<T = void>(parameters: Parameters.DeleteBoard, callback: Callback<T>): Promise<void>;
    /** Deletes the board. Admin without the view permission can still remove the board. */
    deleteBoard<T = void>(parameters: Parameters.DeleteBoard, callback?: never): Promise<T>;
    /**
     * Returns all issues from the board's backlog, for the given board ID. This only includes issues that the user has
     * permission to view. The backlog contains incomplete issues that are not assigned to any future or active sprint.
     * Note, if the user does not have permission to view the board, no issues will be returned at all. Issues returned
     * from this resource include Agile fields, like sprint, closedSprints, flagged, and epic. By default, the returned
     * issues are ordered by rank.
     */
    getIssuesForBacklog<T = Models.SearchResultsBean>(parameters: Parameters.GetIssuesForBacklog, callback: Callback<T>): Promise<void>;
    /**
     * Returns all issues from the board's backlog, for the given board ID. This only includes issues that the user has
     * permission to view. The backlog contains incomplete issues that are not assigned to any future or active sprint.
     * Note, if the user does not have permission to view the board, no issues will be returned at all. Issues returned
     * from this resource include Agile fields, like sprint, closedSprints, flagged, and epic. By default, the returned
     * issues are ordered by rank.
     */
    getIssuesForBacklog<T = Models.SearchResultsBean>(parameters: Parameters.GetIssuesForBacklog, callback?: never): Promise<T>;
    /**
     * Get the board configuration. The response contains the following fields: <ul> <li><code>id</code> - ID of the board.</li>
     *  <li><code>name</code> - Name of the board.</li>
     *  <li><code>filter</code> - Reference to the filter used by the given board.</li>
     *  <li><code>location</code> - Reference to the container that the board is located in.
     *  Includes the container type (Valid values: project, user).
     *  </li>
     *  <li><code>subQuery</code> (Kanban only) - JQL subquery used by the given board.</li>
     *  <li><code>columnConfig</code> - The column configuration lists the columns for the board, in the order defined in the column configuration.
     *  For each column, it shows the issue status mapping
     *  as well as the constraint type (Valid values: none, issueCount, issueCountExclSubs) for the min/max number of issues.
     *  Note, the last column with statuses mapped to it is treated as the "Done" column,
     *  which means that issues in that column will be marked as already completed.</li>
     *  <li><code>estimation</code> (Scrum only) - Contains information about type of estimation used for the board. Valid values: none, issueCount, field.
     *  If the estimation type is "field", the ID and display name of the field used for estimation is also returned.
     *  Note, estimates for an issue can be updated by a PUT /rest/api/~ver~/issue/{issueIdOrKey} request, however the fields must be on the screen.
     *  "timeoriginalestimate" field will never be on the screen, so in order to update it "originalEstimate" in "timetracking" field should be updated.
     *  </li>
     *  <li><code>ranking</code> - Contains information about custom field used for ranking in the given board.</li>
     *  </ul>
     */
    getConfiguration<T = Models.GetConfiguration>(parameters: Parameters.GetConfiguration, callback: Callback<T>): Promise<void>;
    /**
     * Get the board configuration. The response contains the following fields: <ul> <li><code>id</code> - ID of the board.</li>
     *  <li><code>name</code> - Name of the board.</li>
     *  <li><code>filter</code> - Reference to the filter used by the given board.</li>
     *  <li><code>location</code> - Reference to the container that the board is located in.
     *  Includes the container type (Valid values: project, user).
     *  </li>
     *  <li><code>subQuery</code> (Kanban only) - JQL subquery used by the given board.</li>
     *  <li><code>columnConfig</code> - The column configuration lists the columns for the board, in the order defined in the column configuration.
     *  For each column, it shows the issue status mapping
     *  as well as the constraint type (Valid values: none, issueCount, issueCountExclSubs) for the min/max number of issues.
     *  Note, the last column with statuses mapped to it is treated as the "Done" column,
     *  which means that issues in that column will be marked as already completed.</li>
     *  <li><code>estimation</code> (Scrum only) - Contains information about type of estimation used for the board. Valid values: none, issueCount, field.
     *  If the estimation type is "field", the ID and display name of the field used for estimation is also returned.
     *  Note, estimates for an issue can be updated by a PUT /rest/api/~ver~/issue/{issueIdOrKey} request, however the fields must be on the screen.
     *  "timeoriginalestimate" field will never be on the screen, so in order to update it "originalEstimate" in "timetracking" field should be updated.
     *  </li>
     *  <li><code>ranking</code> - Contains information about custom field used for ranking in the given board.</li>
     *  </ul>
     */
    getConfiguration<T = Models.GetConfiguration>(parameters: Parameters.GetConfiguration, callback?: never): Promise<T>;
    /**
     * Returns all epics from the board, for the given board ID. This only includes epics that the user has permission to
     * view. Note, if the user does not have permission to view the board, no epics will be returned at all.
     */
    getEpics<T = Paginated<Models.Epic>>(parameters: Parameters.GetEpics, callback: Callback<T>): Promise<void>;
    /**
     * Returns all epics from the board, for the given board ID. This only includes epics that the user has permission to
     * view. Note, if the user does not have permission to view the board, no epics will be returned at all.
     */
    getEpics<T = Paginated<Models.Epic>>(parameters: Parameters.GetEpics, callback?: never): Promise<T>;
    /**
     * Returns all issues that do not belong to any epic on a board, for a given board ID. This only includes issues that
     * the user has permission to view. Issues returned from this resource include Agile fields, like sprint,
     * closedSprints, flagged, and epic. By default, the returned issues are ordered by rank.
     */
    getIssuesWithoutEpicForBoard<T = Models.SearchResultsBean>(parameters: Parameters.GetIssuesWithoutEpicForBoard, callback: Callback<T>): Promise<void>;
    /**
     * Returns all issues that do not belong to any epic on a board, for a given board ID. This only includes issues that
     * the user has permission to view. Issues returned from this resource include Agile fields, like sprint,
     * closedSprints, flagged, and epic. By default, the returned issues are ordered by rank.
     */
    getIssuesWithoutEpicForBoard<T = Models.SearchResultsBean>(parameters: Parameters.GetIssuesWithoutEpicForBoard, callback?: never): Promise<T>;
    /**
     * Returns all issues that belong to an epic on the board, for the given epic ID and the board ID. This only includes
     * issues that the user has permission to view. Issues returned from this resource include Agile fields, like sprint,
     * closedSprints, flagged, and epic. By default, the returned issues are ordered by rank.
     */
    getBoardIssuesForEpic<T = Models.SearchResultsBean>(parameters: Parameters.GetBoardIssuesForEpic, callback: Callback<T>): Promise<void>;
    /**
     * Returns all issues that belong to an epic on the board, for the given epic ID and the board ID. This only includes
     * issues that the user has permission to view. Issues returned from this resource include Agile fields, like sprint,
     * closedSprints, flagged, and epic. By default, the returned issues are ordered by rank.
     */
    getBoardIssuesForEpic<T = Models.SearchResultsBean>(parameters: Parameters.GetBoardIssuesForEpic, callback?: never): Promise<T>;
    getFeaturesForBoard<T = Models.GetFeaturesForBoard>(parameters: Parameters.GetFeaturesForBoard, callback: Callback<T>): Promise<void>;
    getFeaturesForBoard<T = Models.GetFeaturesForBoard>(parameters: Parameters.GetFeaturesForBoard, callback?: never): Promise<T>;
    toggleFeatures<T = Models.ToggleFeatures>(parameters: Parameters.ToggleFeatures, callback: Callback<T>): Promise<void>;
    toggleFeatures<T = Models.ToggleFeatures>(parameters: Parameters.ToggleFeatures, callback?: never): Promise<T>;
    /**
     * Returns all issues from a board, for a given board ID. This only includes issues that the user has permission to
     * view. An issue belongs to the board if its status is mapped to the board's column. Epic issues do not belongs to
     * the scrum boards. Note, if the user does not have permission to view the board, no issues will be returned at all.
     * Issues returned from this resource include Agile fields, like sprint, closedSprints, flagged, and epic. By default,
     * the returned issues are ordered by rank.
     */
    getIssuesForBoard<T = Models.SearchResultsBean>(parameters: Parameters.GetIssuesForBoard, callback: Callback<T>): Promise<void>;
    /**
     * Returns all issues from a board, for a given board ID. This only includes issues that the user has permission to
     * view. An issue belongs to the board if its status is mapped to the board's column. Epic issues do not belongs to
     * the scrum boards. Note, if the user does not have permission to view the board, no issues will be returned at all.
     * Issues returned from this resource include Agile fields, like sprint, closedSprints, flagged, and epic. By default,
     * the returned issues are ordered by rank.
     */
    getIssuesForBoard<T = Models.SearchResultsBean>(parameters: Parameters.GetIssuesForBoard, callback?: never): Promise<T>;
    /**
     * Move issues from the backog to the board (if they are already in the backlog of that board).
     *
     * This operation either moves an issue(s) onto a board from the backlog (by adding it to the issueList for the board)
     * Or transitions the issue(s) to the first column for a kanban board with backlog. At most 50 issues may be moved at once.
     */
    moveIssuesToBoard<T = void>(parameters: Parameters.MoveIssuesToBoard, callback: Callback<T>): Promise<void>;
    /**
     * Move issues from the backog to the board (if they are already in the backlog of that board).
     *
     * This operation either moves an issue(s) onto a board from the backlog (by adding it to the issueList for the board)
     * Or transitions the issue(s) to the first column for a kanban board with backlog. At most 50 issues may be moved at once.
     */
    moveIssuesToBoard<T = void>(parameters: Parameters.MoveIssuesToBoard, callback?: never): Promise<T>;
    /**
     * Returns all projects that are associated with the board, for the given board ID. If the user does not have
     * permission to view the board, no projects will be returned at all. Returned projects are ordered by the name. </p>
     * A project is associated with a board if the board filter contains reference the project or there is an issue from
     * the project that belongs to the board. </p>
     *  The board filter contains reference the project only if JQL query guarantees that returned issues
     *  will be returned from the project set defined in JQL.
     *  For instance the query <code>project in (ABC, BCD) AND reporter = admin</code> have reference to ABC and BCD projects
     *  but query <code>project in (ABC, BCD) OR reporter = admin</code> doesn't have reference to any project.
     *  </p>
     *  An issue belongs to the board if its status is mapped to the board's column.
     *  Epic issues do not belongs to the scrum boards.
     *  </p>
     */
    getProjects<T = Paginated<Models.Projects>>(parameters: Parameters.GetProjects, callback: Callback<T>): Promise<void>;
    /**
     * Returns all projects that are associated with the board, for the given board ID. If the user does not have
     * permission to view the board, no projects will be returned at all. Returned projects are ordered by the name. </p>
     * A project is associated with a board if the board filter contains reference the project or there is an issue from
     * the project that belongs to the board. </p>
     *  The board filter contains reference the project only if JQL query guarantees that returned issues
     *  will be returned from the project set defined in JQL.
     *  For instance the query <code>project in (ABC, BCD) AND reporter = admin</code> have reference to ABC and BCD projects
     *  but query <code>project in (ABC, BCD) OR reporter = admin</code> doesn't have reference to any project.
     *  </p>
     *  An issue belongs to the board if its status is mapped to the board's column.
     *  Epic issues do not belongs to the scrum boards.
     *  </p>
     */
    getProjects<T = Paginated<Models.Projects>>(parameters: Parameters.GetProjects, callback?: never): Promise<T>;
    /**
     * Returns all projects that are statically associated with the board, for the given board ID. Returned projects are
     * ordered by the name. </p> A project is associated with a board if the board filter contains reference the project. </p>
     *  The board filter contains reference the project only if JQL query guarantees that returned issues
     *  will be returned from the project set defined in JQL.
     *  For instance the query <code>project in (ABC, BCD) AND reporter = admin</code> have reference to ABC and BCD projects
     *  but query <code>project in (ABC, BCD) OR reporter = admin</code> doesn't have reference to any project.
     *  </p>
     */
    getProjectsFull<T = Models.Projects[]>(parameters: Parameters.GetProjectsFull, callback: Callback<T>): Promise<void>;
    /**
     * Returns all projects that are statically associated with the board, for the given board ID. Returned projects are
     * ordered by the name. </p> A project is associated with a board if the board filter contains reference the project. </p>
     *  The board filter contains reference the project only if JQL query guarantees that returned issues
     *  will be returned from the project set defined in JQL.
     *  For instance the query <code>project in (ABC, BCD) AND reporter = admin</code> have reference to ABC and BCD projects
     *  but query <code>project in (ABC, BCD) OR reporter = admin</code> doesn't have reference to any project.
     *  </p>
     */
    getProjectsFull<T = Models.Projects[]>(parameters: Parameters.GetProjectsFull, callback?: never): Promise<T>;
    /**
     * Returns the keys of all properties for the board identified by the id. The user who retrieves the property keys is
     * required to have permissions to view the board.
     */
    getBoardPropertyKeys<T = unknown>(parameters: Parameters.GetBoardPropertyKeys, callback: Callback<T>): Promise<void>;
    /**
     * Returns the keys of all properties for the board identified by the id. The user who retrieves the property keys is
     * required to have permissions to view the board.
     */
    getBoardPropertyKeys<T = unknown>(parameters: Parameters.GetBoardPropertyKeys, callback?: never): Promise<T>;
    /**
     * Returns the value of the property with a given key from the board identified by the provided id. The user who
     * retrieves the property is required to have permissions to view the board.
     */
    getBoardProperty<T = unknown>(parameters: Parameters.GetBoardProperty, callback: Callback<T>): Promise<void>;
    /**
     * Returns the value of the property with a given key from the board identified by the provided id. The user who
     * retrieves the property is required to have permissions to view the board.
     */
    getBoardProperty<T = unknown>(parameters: Parameters.GetBoardProperty, callback?: never): Promise<T>;
    /**
     * Sets the value of the specified board's property. <p> You can use this resource to store a custom data against the
     * board identified by the id. The user who stores the data is required to have permissions to modify the board. </p>
     */
    setBoardProperty<T = unknown>(parameters: Parameters.SetBoardProperty, callback: Callback<T>): Promise<void>;
    /**
     * Sets the value of the specified board's property. <p> You can use this resource to store a custom data against the
     * board identified by the id. The user who stores the data is required to have permissions to modify the board. </p>
     */
    setBoardProperty<T = unknown>(parameters: Parameters.SetBoardProperty, callback?: never): Promise<T>;
    /**
     * Removes the property from the board identified by the id. Ths user removing the property is required to have
     * permissions to modify the board.
     */
    deleteBoardProperty<T = void>(parameters: Parameters.DeleteBoardProperty, callback: Callback<T>): Promise<void>;
    /**
     * Removes the property from the board identified by the id. Ths user removing the property is required to have
     * permissions to modify the board.
     */
    deleteBoardProperty<T = void>(parameters: Parameters.DeleteBoardProperty, callback?: never): Promise<T>;
    /** Returns all quick filters from a board, for a given board ID. */
    getAllQuickFilters<T = Models.GetAllQuickFilters>(parameters: Parameters.GetAllQuickFilters, callback: Callback<T>): Promise<void>;
    /** Returns all quick filters from a board, for a given board ID. */
    getAllQuickFilters<T = Models.GetAllQuickFilters>(parameters: Parameters.GetAllQuickFilters, callback?: never): Promise<T>;
    /**
     * Returns the quick filter for a given quick filter ID. The quick filter will only be returned if the user can view
     * the board that the quick filter belongs to.
     */
    getQuickFilter<T = Models.GetQuickFilter>(parameters: Parameters.GetQuickFilter, callback: Callback<T>): Promise<void>;
    /**
     * Returns the quick filter for a given quick filter ID. The quick filter will only be returned if the user can view
     * the board that the quick filter belongs to.
     */
    getQuickFilter<T = Models.GetQuickFilter>(parameters: Parameters.GetQuickFilter, callback?: never): Promise<T>;
    getReportsForBoard<T = Models.GetReportsForBoard>(parameters: Parameters.GetReportsForBoard, callback: Callback<T>): Promise<void>;
    getReportsForBoard<T = Models.GetReportsForBoard>(parameters: Parameters.GetReportsForBoard, callback?: never): Promise<T>;
    /** Returns all sprints from a board, for a given board ID. This only includes sprints that the user has permission to view. */
    getAllSprints<T = Paginated<Models.Sprint>>(parameters: Parameters.GetAllSprints, callback: Callback<T>): Promise<void>;
    /** Returns all sprints from a board, for a given board ID. This only includes sprints that the user has permission to view. */
    getAllSprints<T = Paginated<Models.Sprint>>(parameters: Parameters.GetAllSprints, callback?: never): Promise<T>;
    /**
     * Get all issues you have access to that belong to the sprint from the board. Issue returned from this resource
     * contains additional fields like: sprint, closedSprints, flagged and epic. Issues are returned ordered by rank. JQL
     * order has higher priority than default rank.
     */
    getBoardIssuesForSprint<T = unknown>(parameters: Parameters.GetBoardIssuesForSprint, callback: Callback<T>): Promise<void>;
    /**
     * Get all issues you have access to that belong to the sprint from the board. Issue returned from this resource
     * contains additional fields like: sprint, closedSprints, flagged and epic. Issues are returned ordered by rank. JQL
     * order has higher priority than default rank.
     */
    getBoardIssuesForSprint<T = unknown>(parameters: Parameters.GetBoardIssuesForSprint, callback?: never): Promise<T>;
    /**
     * Returns all versions from a board, for a given board ID. This only includes versions that the user has permission
     * to view. Note, if the user does not have permission to view the board, no versions will be returned at all.
     * Returned versions are ordered by the name of the project from which they belong and then by sequence defined by user.
     */
    getAllVersions<T = Paginated<Models.Version>>(parameters: Parameters.GetAllVersions, callback: Callback<T>): Promise<void>;
    /**
     * Returns all versions from a board, for a given board ID. This only includes versions that the user has permission
     * to view. Note, if the user does not have permission to view the board, no versions will be returned at all.
     * Returned versions are ordered by the name of the project from which they belong and then by sequence defined by user.
     */
    getAllVersions<T = Paginated<Models.Version>>(parameters: Parameters.GetAllVersions, callback?: never): Promise<T>;
}
