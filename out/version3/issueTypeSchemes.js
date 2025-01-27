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
exports.IssueTypeSchemes = void 0;
class IssueTypeSchemes {
    constructor(client) {
        this.client = client;
    }
    getAllIssueTypeSchemes(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: '/rest/api/3/issuetypescheme',
                method: 'GET',
                params: {
                    startAt: parameters === null || parameters === void 0 ? void 0 : parameters.startAt,
                    maxResults: parameters === null || parameters === void 0 ? void 0 : parameters.maxResults,
                    id: parameters === null || parameters === void 0 ? void 0 : parameters.id,
                },
            };
            return this.client.sendRequest(config, callback, {
                methodName: 'version3.issueTypeSchemes.getAllIssueTypeSchemes',
            });
        });
    }
    createIssueTypeScheme(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: '/rest/api/3/issuetypescheme',
                method: 'POST',
                data: {
                    name: parameters === null || parameters === void 0 ? void 0 : parameters.name,
                    description: parameters === null || parameters === void 0 ? void 0 : parameters.description,
                    defaultIssueTypeId: parameters === null || parameters === void 0 ? void 0 : parameters.defaultIssueTypeId,
                    issueTypeIds: parameters === null || parameters === void 0 ? void 0 : parameters.issueTypeIds,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'version3.issueTypeSchemes.createIssueTypeScheme' });
        });
    }
    getIssueTypeSchemesMapping(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: '/rest/api/3/issuetypescheme/mapping',
                method: 'GET',
                params: {
                    startAt: parameters === null || parameters === void 0 ? void 0 : parameters.startAt,
                    maxResults: parameters === null || parameters === void 0 ? void 0 : parameters.maxResults,
                    issueTypeSchemeId: parameters === null || parameters === void 0 ? void 0 : parameters.issueTypeSchemeId,
                },
            };
            return this.client.sendRequest(config, callback, {
                methodName: 'version3.issueTypeSchemes.getIssueTypeSchemesMapping',
            });
        });
    }
    getIssueTypeSchemeForProjects(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: '/rest/api/3/issuetypescheme/project',
                method: 'GET',
                params: {
                    startAt: parameters.startAt,
                    maxResults: parameters.maxResults,
                    projectId: parameters.projectId,
                },
            };
            return this.client.sendRequest(config, callback, {
                methodName: 'version3.issueTypeSchemes.getIssueTypeSchemeForProjects',
            });
        });
    }
    assignIssueTypeSchemeToProject(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: '/rest/api/3/issuetypescheme/project',
                method: 'PUT',
                data: {
                    issueTypeSchemeId: parameters === null || parameters === void 0 ? void 0 : parameters.issueTypeSchemeId,
                    projectId: parameters === null || parameters === void 0 ? void 0 : parameters.projectId,
                },
            };
            return this.client.sendRequest(config, callback, {
                methodName: 'version3.issueTypeSchemes.assignIssueTypeSchemeToProject',
            });
        });
    }
    updateIssueTypeScheme(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/3/issuetypescheme/${parameters.issueTypeSchemeId}`,
                method: 'PUT',
                data: {
                    name: parameters.name,
                    description: parameters.description,
                    defaultIssueTypeId: parameters.defaultIssueTypeId,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'version3.issueTypeSchemes.updateIssueTypeScheme' });
        });
    }
    deleteIssueTypeScheme(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/3/issuetypescheme/${parameters.issueTypeSchemeId}`,
                method: 'DELETE',
            };
            return this.client.sendRequest(config, callback, { methodName: 'version3.issueTypeSchemes.deleteIssueTypeScheme' });
        });
    }
    addIssueTypesToIssueTypeScheme(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/3/issuetypescheme/${parameters.issueTypeSchemeId}/issuetype`,
                method: 'PUT',
                data: {
                    issueTypeIds: parameters.issueTypeIds,
                },
            };
            return this.client.sendRequest(config, callback, {
                methodName: 'version3.issueTypeSchemes.addIssueTypesToIssueTypeScheme',
            });
        });
    }
    reorderIssueTypesInIssueTypeScheme(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/3/issuetypescheme/${parameters.issueTypeSchemeId}/issuetype/move`,
                method: 'PUT',
                data: {
                    issueTypeIds: parameters.issueTypeIds,
                    after: parameters.after,
                    position: parameters.position,
                },
            };
            return this.client.sendRequest(config, callback, {
                methodName: 'version3.issueTypeSchemes.reorderIssueTypesInIssueTypeScheme',
            });
        });
    }
    removeIssueTypeFromIssueTypeScheme(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/3/issuetypescheme/${parameters.issueTypeSchemeId}/issuetype/${parameters.issueTypeId}`,
                method: 'DELETE',
            };
            return this.client.sendRequest(config, callback, {
                methodName: 'version3.issueTypeSchemes.removeIssueTypeFromIssueTypeScheme',
            });
        });
    }
}
exports.IssueTypeSchemes = IssueTypeSchemes;
//# sourceMappingURL=issueTypeSchemes.js.map