import * as Models from './models';
import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback } from '../callback';
export declare class TimeTracking {
    private client;
    constructor(client: Client);
    /**
     * Returns the time tracking provider that is currently selected. Note that if time tracking is disabled, then a
     * successful but empty response is returned.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    getSelectedTimeTrackingImplementation<T = void>(callback: Callback<T>): Promise<void>;
    /**
     * Returns the time tracking provider that is currently selected. Note that if time tracking is disabled, then a
     * successful but empty response is returned.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    getSelectedTimeTrackingImplementation<T = void>(callback?: never): Promise<T>;
    /**
     * Selects a time tracking provider.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    selectTimeTrackingImplementation<T = void>(parameters: Parameters.SelectTimeTrackingImplementation | undefined, callback: Callback<T>): Promise<void>;
    /**
     * Selects a time tracking provider.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    selectTimeTrackingImplementation<T = void>(parameters?: Parameters.SelectTimeTrackingImplementation, callback?: never): Promise<T>;
    /**
     * Returns all time tracking providers. By default, Jira only has one time tracking provider: *JIRA provided time
     * tracking*. However, you can install other time tracking providers via apps from the Atlassian Marketplace. For more
     * information on time tracking providers, see the documentation for the [ Time Tracking
     * Provider](https://developer.atlassian.com/cloud/jira/platform/modules/time-tracking-provider/) module.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    getAvailableTimeTrackingImplementations<T = Models.TimeTrackingProvider[]>(callback: Callback<T>): Promise<void>;
    /**
     * Returns all time tracking providers. By default, Jira only has one time tracking provider: *JIRA provided time
     * tracking*. However, you can install other time tracking providers via apps from the Atlassian Marketplace. For more
     * information on time tracking providers, see the documentation for the [ Time Tracking
     * Provider](https://developer.atlassian.com/cloud/jira/platform/modules/time-tracking-provider/) module.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    getAvailableTimeTrackingImplementations<T = Models.TimeTrackingProvider[]>(callback?: never): Promise<T>;
    /**
     * Returns the time tracking settings. This includes settings such as the time format, default time unit, and others.
     * For more information, see [Configuring time tracking](https://confluence.atlassian.com/x/qoXKM).
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    getSharedTimeTrackingConfiguration<T = Models.TimeTrackingConfiguration>(callback: Callback<T>): Promise<void>;
    /**
     * Returns the time tracking settings. This includes settings such as the time format, default time unit, and others.
     * For more information, see [Configuring time tracking](https://confluence.atlassian.com/x/qoXKM).
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    getSharedTimeTrackingConfiguration<T = Models.TimeTrackingConfiguration>(callback?: never): Promise<T>;
    /**
     * Sets the time tracking settings.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    setSharedTimeTrackingConfiguration<T = Models.TimeTrackingConfiguration>(parameters: Parameters.SetSharedTimeTrackingConfiguration | undefined, callback: Callback<T>): Promise<void>;
    /**
     * Sets the time tracking settings.
     *
     * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:**
     * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     */
    setSharedTimeTrackingConfiguration<T = Models.TimeTrackingConfiguration>(parameters?: Parameters.SetSharedTimeTrackingConfiguration, callback?: never): Promise<T>;
}
