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
exports.DevelopmentInformation = void 0;
class DevelopmentInformation {
    constructor(client) {
        this.client = client;
    }
    storeDevelopmentInformation(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: '/rest/devinfo/0.10/bulk',
                method: 'POST',
                data: {
                    repositories: parameters.repositories,
                    preventTransitions: parameters.preventTransitions,
                    properties: parameters.properties,
                    providerMetadata: parameters.providerMetadata,
                },
            };
            return this.client.sendRequest(config, callback, {
                methodName: 'agile.developmentInformation.storeDevelopmentInformation',
            });
        });
    }
    getRepository(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/devinfo/0.10/repository/${parameters.repositoryId}`,
                method: 'GET',
            };
            return this.client.sendRequest(config, callback, { methodName: 'agile.developmentInformation.getRepository' });
        });
    }
    deleteRepository(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/devinfo/0.10/repository/${parameters.repositoryId}`,
                method: 'DELETE',
                params: {
                    _updateSequenceId: parameters._updateSequenceId || parameters.updateSequenceId,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'agile.developmentInformation.deleteRepository' });
        });
    }
    deleteByProperties(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: '/rest/devinfo/0.10/bulkByProperties',
                method: 'DELETE',
                params: {
                    _updateSequenceId: parameters._updateSequenceId || parameters.updateSequenceId,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'agile.developmentInformation.deleteByProperties' });
        });
    }
    existsByProperties(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: '/rest/devinfo/0.10/existsByProperties',
                method: 'GET',
                params: {
                    _updateSequenceId: parameters._updateSequenceId || parameters.updateSequenceId,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'agile.developmentInformation.existsByProperties' });
        });
    }
    deleteEntity(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/devinfo/0.10/repository/${parameters.repositoryId}/${parameters.entityType}/${parameters.entityId}`,
                method: 'DELETE',
                params: {
                    _updateSequenceId: parameters._updateSequenceId || parameters.updateSequenceId,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'agile.developmentInformation.deleteEntity' });
        });
    }
}
exports.DevelopmentInformation = DevelopmentInformation;
//# sourceMappingURL=developmentInformation.js.map