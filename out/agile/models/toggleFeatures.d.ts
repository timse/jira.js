export interface ToggleFeatures {
    features?: {
        boardFeature?: string;
        boardId?: number;
        state?: string;
        localisedName?: string;
        localisedDescription?: string;
        learnMoreLink?: string;
        imageUri?: string;
        toggleLocked?: boolean;
    }[];
}
