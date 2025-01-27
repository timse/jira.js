"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeatureFlags = void 0;
class FeatureFlags {
    constructor(client) {
        this.client = client;
    }
    submitFeatureFlags(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: '/rest/featureflags/0.1/bulk',
                method: 'POST',
                data: {
                    properties: parameters === null || parameters === void 0 ? void 0 : parameters.properties,
                    flags: parameters === null || parameters === void 0 ? void 0 : parameters.flags,
                    providerMetadata: parameters === null || parameters === void 0 ? void 0 : parameters.providerMetadata,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'agile.featureFlags.submitFeatureFlags' });
        });
    }
    deleteFeatureFlagsByProperty(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: '/rest/featureflags/0.1/bulkByProperties',
                method: 'DELETE',
                params: {
                    _updateSequenceId: (parameters === null || parameters === void 0 ? void 0 : parameters._updateSequenceId) || (parameters === null || parameters === void 0 ? void 0 : parameters.updateSequenceId),
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'agile.featureFlags.deleteFeatureFlagsByProperty' });
        });
    }
    getFeatureFlagById(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/featureflags/0.1/flag/${parameters.featureFlagId}`,
                method: 'GET',
            };
            return this.client.sendRequest(config, callback, { methodName: 'agile.featureFlags.getFeatureFlagById' });
        });
    }
    deleteFeatureFlagById(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/featureflags/0.1/flag/${parameters.featureFlagId}`,
                method: 'DELETE',
                params: {
                    _updateSequenceId: parameters._updateSequenceId || parameters.updateSequenceId,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'agile.featureFlags.deleteFeatureFlagById' });
        });
    }
}
exports.FeatureFlags = FeatureFlags;
//# sourceMappingURL=featureFlags.js.map