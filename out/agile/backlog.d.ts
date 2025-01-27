import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback } from '../callback';
export declare class Backlog {
    private client;
    constructor(client: Client);
    /**
     * Move issues to the backlog.
     *
     * This operation is equivalent to remove future and active sprints from a given set of issues. At most 50 issues may
     * be moved at once.
     */
    moveIssuesToBacklog<T = void>(parameters: Parameters.MoveIssuesToBacklog, callback: Callback<T>): Promise<void>;
    /**
     * Move issues to the backlog.
     *
     * This operation is equivalent to remove future and active sprints from a given set of issues. At most 50 issues may
     * be moved at once.
     */
    moveIssuesToBacklog<T = void>(parameters: Parameters.MoveIssuesToBacklog, callback?: never): Promise<T>;
    /**
     * Move issues to the backlog of a particular board (if they are already on that board).
     *
     * This operation is equivalent to remove future and active sprints from a given set of issues if the board has
     * sprints If the board does not have sprints this will put the issues back into the backlog from the board. At most
     * 50 issues may be moved at once.
     */
    moveIssuesToBacklogForBoard<T = void>(parameters: Parameters.MoveIssuesToBacklogForBoard, callback: Callback<T>): Promise<void>;
    /**
     * Move issues to the backlog of a particular board (if they are already on that board).
     *
     * This operation is equivalent to remove future and active sprints from a given set of issues if the board has
     * sprints If the board does not have sprints this will put the issues back into the backlog from the board. At most
     * 50 issues may be moved at once.
     */
    moveIssuesToBacklogForBoard<T = void>(parameters: Parameters.MoveIssuesToBacklogForBoard, callback?: never): Promise<T>;
}
