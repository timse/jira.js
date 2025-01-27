import * as Models from './models';
import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback } from '../callback';
export declare class DevelopmentInformation {
    private client;
    constructor(client: Client);
    /**
     * Stores development information provided in the request to make it available when viewing issues in Jira. Existing
     * repository and entity data for the same ID will be replaced if the updateSequenceId of existing data is less than
     * the incoming data. Submissions are performed asynchronously. Submitted data will eventually be available in Jira;
     * most updates are available within a short period of time, but may take some time during peak load and/or maintenance times.
     */
    storeDevelopmentInformation<T = Models.StoreDevelopmentInformation>(parameters: Parameters.StoreDevelopmentInformation, callback: Callback<T>): Promise<void>;
    /**
     * Stores development information provided in the request to make it available when viewing issues in Jira. Existing
     * repository and entity data for the same ID will be replaced if the updateSequenceId of existing data is less than
     * the incoming data. Submissions are performed asynchronously. Submitted data will eventually be available in Jira;
     * most updates are available within a short period of time, but may take some time during peak load and/or maintenance times.
     */
    storeDevelopmentInformation<T = Models.StoreDevelopmentInformation>(parameters: Parameters.StoreDevelopmentInformation, callback?: never): Promise<T>;
    /**
     * For the specified repository ID, retrieves the repository and the most recent 400 development information entities.
     * The result will be what is currently stored, ignoring any pending updates or deletes.
     */
    getRepository<T = Models.GetRepository>(parameters: Parameters.GetRepository, callback: Callback<T>): Promise<void>;
    /**
     * For the specified repository ID, retrieves the repository and the most recent 400 development information entities.
     * The result will be what is currently stored, ignoring any pending updates or deletes.
     */
    getRepository<T = Models.GetRepository>(parameters: Parameters.GetRepository, callback?: never): Promise<T>;
    /**
     * Deletes the repository data stored by the given ID and all related development information entities. Deletion is
     * performed asynchronously.
     */
    deleteRepository<T = unknown>(parameters: Parameters.DeleteRepository, callback: Callback<T>): Promise<void>;
    /**
     * Deletes the repository data stored by the given ID and all related development information entities. Deletion is
     * performed asynchronously.
     */
    deleteRepository<T = unknown>(parameters: Parameters.DeleteRepository, callback?: never): Promise<T>;
    /**
     * Deletes development information entities which have all the provided properties. Entities will be deleted that
     * match ALL of the properties (i.e. treated as an AND). For example if request is `DELETE
     * bulk?accountId=123&projectId=ABC` entities which have properties `accountId=123` and `projectId=ABC` will be
     * deleted. Special property `_updateSequenceId` can be used to delete all entities with updateSequenceId less or
     * equal than the value specified. In addition to the optional `_updateSequenceId`, one or more query params must be
     * supplied to specify properties to delete by. Deletion is performed asynchronously: specified entities will
     * eventually be removed from Jira.
     */
    deleteByProperties<T = unknown>(parameters: Parameters.DeleteByProperties, callback: Callback<T>): Promise<void>;
    /**
     * Deletes development information entities which have all the provided properties. Entities will be deleted that
     * match ALL of the properties (i.e. treated as an AND). For example if request is `DELETE
     * bulk?accountId=123&projectId=ABC` entities which have properties `accountId=123` and `projectId=ABC` will be
     * deleted. Special property `_updateSequenceId` can be used to delete all entities with updateSequenceId less or
     * equal than the value specified. In addition to the optional `_updateSequenceId`, one or more query params must be
     * supplied to specify properties to delete by. Deletion is performed asynchronously: specified entities will
     * eventually be removed from Jira.
     */
    deleteByProperties<T = unknown>(parameters: Parameters.DeleteByProperties, callback?: never): Promise<T>;
    /**
     * Checks if development information which have all the provided properties exists. For example, if request is `GET
     * existsByProperties?accountId=123&projectId=ABC` then result will be positive only if there is at least one entity
     * or repository with both properties `accountId=123` and `projectId=ABC`. Special property `_updateSequenceId` can be
     * used to filter all entities with updateSequenceId less or equal than the value specified. In addition to the
     * optional `_updateSequenceId`, one or more query params must be supplied to specify properties to search by.
     */
    existsByProperties<T = Models.ExistsByProperties>(parameters: Parameters.ExistsByProperties, callback: Callback<T>): Promise<void>;
    /**
     * Checks if development information which have all the provided properties exists. For example, if request is `GET
     * existsByProperties?accountId=123&projectId=ABC` then result will be positive only if there is at least one entity
     * or repository with both properties `accountId=123` and `projectId=ABC`. Special property `_updateSequenceId` can be
     * used to filter all entities with updateSequenceId less or equal than the value specified. In addition to the
     * optional `_updateSequenceId`, one or more query params must be supplied to specify properties to search by.
     */
    existsByProperties<T = Models.ExistsByProperties>(parameters: Parameters.ExistsByProperties, callback?: never): Promise<T>;
    /** Deletes particular development information entity. Deletion is performed asynchronously. */
    deleteEntity<T = unknown>(parameters: Parameters.DeleteEntity, callback: Callback<T>): Promise<void>;
    /** Deletes particular development information entity. Deletion is performed asynchronously. */
    deleteEntity<T = unknown>(parameters: Parameters.DeleteEntity, callback?: never): Promise<T>;
}
