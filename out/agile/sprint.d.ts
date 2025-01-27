import * as Models from './models';
import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback } from '../callback';
export declare class Sprint {
    private client;
    constructor(client: Client);
    /**
     * Creates a future sprint. Sprint name and origin board id are required. Start date, end date, and goal are optional. <p>
     *  Note that the sprint name is trimmed. Also, when starting sprints from the UI, the "endDate" set through this
     *  call is ignored and instead the last sprint's duration is used to fill the form.
     *  </p>
     */
    createSprint<T = Models.Sprint>(parameters: Parameters.CreateSprint, callback: Callback<T>): Promise<void>;
    /**
     * Creates a future sprint. Sprint name and origin board id are required. Start date, end date, and goal are optional. <p>
     *  Note that the sprint name is trimmed. Also, when starting sprints from the UI, the "endDate" set through this
     *  call is ignored and instead the last sprint's duration is used to fill the form.
     *  </p>
     */
    createSprint<T = Models.Sprint>(parameters: Parameters.CreateSprint, callback?: never): Promise<T>;
    /**
     * Returns the sprint for a given sprint ID. The sprint will only be returned if the user can view the board that the
     * sprint was created on, or view at least one of the issues in the sprint.
     */
    getSprint<T = Models.Sprint>(parameters: Parameters.GetSprint, callback: Callback<T>): Promise<void>;
    /**
     * Returns the sprint for a given sprint ID. The sprint will only be returned if the user can view the board that the
     * sprint was created on, or view at least one of the issues in the sprint.
     */
    getSprint<T = Models.Sprint>(parameters: Parameters.GetSprint, callback?: never): Promise<T>;
    /**
     * Performs a partial update of a sprint. A partial update means that fields not present in the request JSON will not
     * be updated. <p>Notes:</p>
     *  <ul>
     *  <li>Sprints that are in a closed state cannot be updated.</li>
     *  <li>A sprint can be started by updating the state to 'active'. This requires the sprint to
     *  be in the 'future' state and have a startDate and endDate set.</li>
     *  <li>A sprint can be completed by updating the state to 'closed'. This action requires the sprint to be in the 'active' state.
     *  This sets the completeDate to the time of the request.</li>
     *  <li>Other changes to state are not allowed.</li>
     *  <li>The completeDate field cannot be updated manually.</li>
     *  </ul>
     */
    partiallyUpdateSprint<T = Models.Sprint>(parameters: Parameters.PartiallyUpdateSprint, callback: Callback<T>): Promise<void>;
    /**
     * Performs a partial update of a sprint. A partial update means that fields not present in the request JSON will not
     * be updated. <p>Notes:</p>
     *  <ul>
     *  <li>Sprints that are in a closed state cannot be updated.</li>
     *  <li>A sprint can be started by updating the state to 'active'. This requires the sprint to
     *  be in the 'future' state and have a startDate and endDate set.</li>
     *  <li>A sprint can be completed by updating the state to 'closed'. This action requires the sprint to be in the 'active' state.
     *  This sets the completeDate to the time of the request.</li>
     *  <li>Other changes to state are not allowed.</li>
     *  <li>The completeDate field cannot be updated manually.</li>
     *  </ul>
     */
    partiallyUpdateSprint<T = Models.Sprint>(parameters: Parameters.PartiallyUpdateSprint, callback?: never): Promise<T>;
    /**
     * Performs a full update of a sprint. A full update means that the result will be exactly the same as the request
     * body. Any fields not present in the request JSON will be set to null. <p>Notes:</p>
     *  <ul>
     *  <li>Sprints that are in a closed state cannot be updated.</li>
     *  <li>A sprint can be started by updating the state to 'active'. This requires the sprint to
     *  be in the 'future' state and have a startDate and endDate set.</li>
     *  <li>A sprint can be completed by updating the state to 'closed'. This action requires the sprint to be in the 'active' state.
     *  This sets the completeDate to the time of the request.</li>
     *  <li>Other changes to state are not allowed.</li>
     *  <li>The completeDate field cannot be updated manually.</li>
     *  </ul>
     */
    updateSprint<T = Models.Sprint>(parameters: Parameters.UpdateSprint, callback: Callback<T>): Promise<void>;
    /**
     * Performs a full update of a sprint. A full update means that the result will be exactly the same as the request
     * body. Any fields not present in the request JSON will be set to null. <p>Notes:</p>
     *  <ul>
     *  <li>Sprints that are in a closed state cannot be updated.</li>
     *  <li>A sprint can be started by updating the state to 'active'. This requires the sprint to
     *  be in the 'future' state and have a startDate and endDate set.</li>
     *  <li>A sprint can be completed by updating the state to 'closed'. This action requires the sprint to be in the 'active' state.
     *  This sets the completeDate to the time of the request.</li>
     *  <li>Other changes to state are not allowed.</li>
     *  <li>The completeDate field cannot be updated manually.</li>
     *  </ul>
     */
    updateSprint<T = Models.Sprint>(parameters: Parameters.UpdateSprint, callback?: never): Promise<T>;
    /** Deletes a sprint. Once a sprint is deleted, all open issues in the sprint will be moved to the backlog. */
    deleteSprint<T = void>(parameters: Parameters.DeleteSprint, callback: Callback<T>): Promise<void>;
    /** Deletes a sprint. Once a sprint is deleted, all open issues in the sprint will be moved to the backlog. */
    deleteSprint<T = void>(parameters: Parameters.DeleteSprint, callback?: never): Promise<T>;
    /**
     * Returns all issues in a sprint, for a given sprint ID. This only includes issues that the user has permission to
     * view. By default, the returned issues are ordered by rank.
     */
    getIssuesForSprint<T = Models.SearchResultsBean>(parameters: Parameters.GetIssuesForSprint, callback: Callback<T>): Promise<void>;
    /**
     * Returns all issues in a sprint, for a given sprint ID. This only includes issues that the user has permission to
     * view. By default, the returned issues are ordered by rank.
     */
    getIssuesForSprint<T = Models.SearchResultsBean>(parameters: Parameters.GetIssuesForSprint, callback?: never): Promise<T>;
    /**
     * Moves issues to a sprint, for a given sprint ID. Issues can only be moved to open or active sprints. The maximum
     * number of issues that can be moved in one operation is 50.
     */
    moveIssuesToSprintAndRank<T = void>(parameters: Parameters.MoveIssuesToSprintAndRank, callback: Callback<T>): Promise<void>;
    /**
     * Moves issues to a sprint, for a given sprint ID. Issues can only be moved to open or active sprints. The maximum
     * number of issues that can be moved in one operation is 50.
     */
    moveIssuesToSprintAndRank<T = void>(parameters: Parameters.MoveIssuesToSprintAndRank, callback?: never): Promise<T>;
    /**
     * Returns the keys of all properties for the sprint identified by the id. The user who retrieves the property keys is
     * required to have permissions to view the sprint.
     */
    getPropertiesKeys<T = unknown>(parameters: Parameters.GetPropertiesKeys, callback: Callback<T>): Promise<void>;
    /**
     * Returns the keys of all properties for the sprint identified by the id. The user who retrieves the property keys is
     * required to have permissions to view the sprint.
     */
    getPropertiesKeys<T = unknown>(parameters: Parameters.GetPropertiesKeys, callback?: never): Promise<T>;
    /**
     * Returns the value of the property with a given key from the sprint identified by the provided id. The user who
     * retrieves the property is required to have permissions to view the sprint.
     */
    getProperty<T = unknown>(parameters: Parameters.GetProperty, callback: Callback<T>): Promise<void>;
    /**
     * Returns the value of the property with a given key from the sprint identified by the provided id. The user who
     * retrieves the property is required to have permissions to view the sprint.
     */
    getProperty<T = unknown>(parameters: Parameters.GetProperty, callback?: never): Promise<T>;
    /**
     * Sets the value of the specified sprint's property. <p>
     *      You can use this resource to store a custom data against the sprint identified by the id. The user
     *      who stores the data is required to have permissions to modify the sprint.
     *  </p>
     */
    setProperty<T = unknown>(parameters: Parameters.SetProperty, callback: Callback<T>): Promise<void>;
    /**
     * Sets the value of the specified sprint's property. <p>
     *      You can use this resource to store a custom data against the sprint identified by the id. The user
     *      who stores the data is required to have permissions to modify the sprint.
     *  </p>
     */
    setProperty<T = unknown>(parameters: Parameters.SetProperty, callback?: never): Promise<T>;
    /**
     * Removes the property from the sprint identified by the id. Ths user removing the property is required to have
     * permissions to modify the sprint.
     */
    deleteProperty<T = void>(parameters: Parameters.DeleteProperty, callback: Callback<T>): Promise<void>;
    /**
     * Removes the property from the sprint identified by the id. Ths user removing the property is required to have
     * permissions to modify the sprint.
     */
    deleteProperty<T = void>(parameters: Parameters.DeleteProperty, callback?: never): Promise<T>;
    /** Swap the position of the sprint with the second sprint. */
    swapSprint<T = void>(parameters: Parameters.SwapSprint, callback: Callback<T>): Promise<void>;
    /** Swap the position of the sprint with the second sprint. */
    swapSprint<T = void>(parameters: Parameters.SwapSprint, callback?: never): Promise<T>;
}
