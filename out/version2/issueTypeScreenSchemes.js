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
exports.IssueTypeScreenSchemes = void 0;
class IssueTypeScreenSchemes {
    constructor(client) {
        this.client = client;
    }
    getIssueTypeScreenSchemes(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: '/rest/api/2/issuetypescreenscheme',
                method: 'GET',
                params: {
                    startAt: parameters === null || parameters === void 0 ? void 0 : parameters.startAt,
                    maxResults: parameters === null || parameters === void 0 ? void 0 : parameters.maxResults,
                    id: parameters === null || parameters === void 0 ? void 0 : parameters.id,
                },
            };
            return this.client.sendRequest(config, callback, {
                methodName: 'version2.issueTypeScreenSchemes.getIssueTypeScreenSchemes',
            });
        });
    }
    createIssueTypeScreenScheme(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: '/rest/api/2/issuetypescreenscheme',
                method: 'POST',
                data: {
                    name: parameters === null || parameters === void 0 ? void 0 : parameters.name,
                    description: parameters === null || parameters === void 0 ? void 0 : parameters.description,
                    issueTypeMappings: parameters === null || parameters === void 0 ? void 0 : parameters.issueTypeMappings,
                },
            };
            return this.client.sendRequest(config, callback, {
                methodName: 'version2.issueTypeScreenSchemes.createIssueTypeScreenScheme',
            });
        });
    }
    getIssueTypeScreenSchemeMappings(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: '/rest/api/2/issuetypescreenscheme/mapping',
                method: 'GET',
                params: {
                    startAt: parameters === null || parameters === void 0 ? void 0 : parameters.startAt,
                    maxResults: parameters === null || parameters === void 0 ? void 0 : parameters.maxResults,
                    issueTypeScreenSchemeId: parameters === null || parameters === void 0 ? void 0 : parameters.issueTypeScreenSchemeId,
                },
            };
            return this.client.sendRequest(config, callback, {
                methodName: 'version2.issueTypeScreenSchemes.getIssueTypeScreenSchemeMappings',
            });
        });
    }
    getIssueTypeScreenSchemeProjectAssociations(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: '/rest/api/2/issuetypescreenscheme/project',
                method: 'GET',
                params: {
                    startAt: parameters.startAt,
                    maxResults: parameters.maxResults,
                    projectId: parameters.projectId,
                },
            };
            return this.client.sendRequest(config, callback, {
                methodName: 'version2.issueTypeScreenSchemes.getIssueTypeScreenSchemeProjectAssociations',
            });
        });
    }
    assignIssueTypeScreenSchemeToProject(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: '/rest/api/2/issuetypescreenscheme/project',
                method: 'PUT',
                data: {
                    issueTypeScreenSchemeId: parameters === null || parameters === void 0 ? void 0 : parameters.issueTypeScreenSchemeId,
                    projectId: parameters === null || parameters === void 0 ? void 0 : parameters.projectId,
                },
            };
            return this.client.sendRequest(config, callback, {
                methodName: 'version2.issueTypeScreenSchemes.assignIssueTypeScreenSchemeToProject',
            });
        });
    }
    updateIssueTypeScreenScheme(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/2/issuetypescreenscheme/${parameters.issueTypeScreenSchemeId}`,
                method: 'PUT',
                data: {
                    name: parameters.name,
                    description: parameters.description,
                },
            };
            return this.client.sendRequest(config, callback, {
                methodName: 'version2.issueTypeScreenSchemes.updateIssueTypeScreenScheme',
            });
        });
    }
    deleteIssueTypeScreenScheme(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/2/issuetypescreenscheme/${parameters.issueTypeScreenSchemeId}`,
                method: 'DELETE',
            };
            return this.client.sendRequest(config, callback, {
                methodName: 'version2.issueTypeScreenSchemes.deleteIssueTypeScreenScheme',
            });
        });
    }
    appendMappingsForIssueTypeScreenScheme(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/2/issuetypescreenscheme/${parameters.issueTypeScreenSchemeId}/mapping`,
                method: 'PUT',
                data: {
                    issueTypeMappings: parameters.issueTypeMappings,
                },
            };
            return this.client.sendRequest(config, callback, {
                methodName: 'version2.issueTypeScreenSchemes.appendMappingsForIssueTypeScreenScheme',
            });
        });
    }
    updateDefaultScreenScheme(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/2/issuetypescreenscheme/${parameters.issueTypeScreenSchemeId}/mapping/default`,
                method: 'PUT',
                data: {
                    screenSchemeId: parameters.screenSchemeId,
                },
            };
            return this.client.sendRequest(config, callback, {
                methodName: 'version2.issueTypeScreenSchemes.updateDefaultScreenScheme',
            });
        });
    }
    removeMappingsFromIssueTypeScreenScheme(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/2/issuetypescreenscheme/${parameters.issueTypeScreenSchemeId}/mapping/remove`,
                method: 'POST',
                data: {
                    issueTypeIds: parameters.issueTypeIds,
                },
            };
            return this.client.sendRequest(config, callback, {
                methodName: 'version2.issueTypeScreenSchemes.removeMappingsFromIssueTypeScreenScheme',
            });
        });
    }
}
exports.IssueTypeScreenSchemes = IssueTypeScreenSchemes;
//# sourceMappingURL=issueTypeScreenSchemes.js.map