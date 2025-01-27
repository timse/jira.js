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
exports.Deployments = void 0;
class Deployments {
    constructor(client) {
        this.client = client;
    }
    submitDeployments(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: '/rest/deployments/0.1/bulk',
                method: 'POST',
                data: {
                    properties: parameters === null || parameters === void 0 ? void 0 : parameters.properties,
                    deployments: parameters === null || parameters === void 0 ? void 0 : parameters.deployments,
                    providerMetadata: parameters === null || parameters === void 0 ? void 0 : parameters.providerMetadata,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'agile.deployments.submitDeployments' });
        });
    }
    deleteDeploymentsByProperty(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: '/rest/deployments/0.1/bulkByProperties',
                method: 'DELETE',
                params: {
                    _updateSequenceNumber: (parameters === null || parameters === void 0 ? void 0 : parameters._updateSequenceNumber) || (parameters === null || parameters === void 0 ? void 0 : parameters.updateSequenceNumber),
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'agile.deployments.deleteDeploymentsByProperty' });
        });
    }
    getDeploymentByKey(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/deployments/0.1/pipelines/${parameters.pipelineId}/environments/${parameters.environmentId}/deployments/${parameters.deploymentSequenceNumber}`,
                method: 'GET',
            };
            return this.client.sendRequest(config, callback, { methodName: 'agile.deployments.getDeploymentByKey' });
        });
    }
    deleteDeploymentByKey(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/deployments/0.1/pipelines/${parameters.pipelineId}/environments/${parameters.environmentId}/deployments/${parameters.deploymentSequenceNumber}`,
                method: 'DELETE',
                params: {
                    _updateSequenceNumber: parameters._updateSequenceNumber || parameters.updateSequenceNumber,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'agile.deployments.deleteDeploymentByKey' });
        });
    }
    getDeploymentGatingStatusByKey(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/deployments/0.1/pipelines/${parameters.pipelineId}/environments/${parameters.environmentId}/deployments/${parameters.deploymentSequenceNumber}/gating-status`,
                method: 'GET',
            };
            return this.client.sendRequest(config, callback, {
                methodName: 'agile.deployments.getDeploymentGatingStatusByKey',
            });
        });
    }
}
exports.Deployments = Deployments;
//# sourceMappingURL=deployments.js.map