export interface SubmitRemoteLinks {
    /**
     * Properties assigned to Remote Link data that can then be used for delete / query operations.
     *
     * Examples might be an account or user ID that can then be used to clean up data if an account is removed from the
     * Provider system.
     *
     * Properties are supplied as key/value pairs, a maximum of 5 properties can be supplied, and keys must not contain
     * ':' or start with '_'.
     */
    properties?: {};
    /**
     * A list of Remote Links to submit to Jira.
     *
     * Each Remote Link may be associated with one or more Jira issue keys, and will be associated with any properties
     * included in this request.
     */
    remoteLinks?: {
        /**
         * The schema version used for this data.
         *
         * Placeholder to support potential schema changes in the future.
         */
        schemaVersion?: string;
        /** The identifier for the Remote Link. Must be unique for a given Provider. */
        id: string;
        /**
         * An ID used to apply an ordering to updates for this Remote Link in the case of out-of-order receipt of update requests.
         *
         * It must be a monotonically increasing number. For example, epoch time could be one way to generate the
         * `updateSequenceNumber`.
         *
         * Updates for a Remote Link that is received with an `updateSqeuenceNumber` less than or equal to what is currently
         * stored will be ignored.
         */
        updateSequenceNumber: number;
        /**
         * The human-readable name for the Remote Link.
         *
         * Will be shown in the UI.
         */
        displayName: string;
        /** The URL to this Remote Link in your system. */
        url: string;
        /**
         * The type of the Remote Link. The current supported types are 'document', 'alert', 'test', 'security', 'logFile',
         * 'prototype', 'coverage', 'bugReport' and 'other'
         */
        type: string;
        /**
         * An optional description to attach to this Remote Link.
         *
         * This may be anything that makes sense in your system.
         */
        description?: string;
        /** The last-updated timestamp to present to the user as a summary of when Remote Link was last updated. */
        lastUpdated: string;
        /** The entities to associate the Remote Link information with. */
        associations?: {}[];
        /** The status of a Remote Link. */
        status?: {
            /**
             * Appearance is a fixed set of appearance types affecting the colour of the status lozenge in the UI. The colours
             * they correspond to are equivalent to atlaskit's [Lozenge](https://atlaskit.atlassian.com/packages/core/lozenge)
             * component.
             */
            appearance: string;
            /**
             * The human-readable description for the Remote Link status.
             *
             * Will be shown in the UI.
             */
            label: string;
        };
        /**
         * Optional list of actionIds. They are associated with the actions the provider is able to provide when they
         * registered. Indicates which actions this Remote Link has.
         *
         * If any actions have a templateUrl that requires string substitution, then `attributeMap` must be passed in.
         */
        actionIds?: string[];
        /**
         * Map of key/values (string to string mapping). This is used to build the urls for actions from the templateUrl the
         * provider registered their available actions with.
         */
        attributeMap?: {};
    }[];
    /**
     * Information about the provider. This is useful for auditing, logging, debugging, and other internal uses. It is not
     * considered private information. Hence, it may not contain personally identifiable information.
     */
    providerMetadata?: {
        /** An optional name of the source of the Remote Links data. */
        product?: string;
    };
}
