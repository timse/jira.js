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
exports.IssueCustomFieldContexts = void 0;
class IssueCustomFieldContexts {
    constructor(client) {
        this.client = client;
    }
    getContextsForField(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/2/field/${parameters.fieldId}/context`,
                method: 'GET',
                params: {
                    isAnyIssueType: parameters.isAnyIssueType,
                    isGlobalContext: parameters.isGlobalContext,
                    contextId: parameters.contextId,
                    startAt: parameters.startAt,
                    maxResults: parameters.maxResults,
                },
            };
            return this.client.sendRequest(config, callback, {
                methodName: 'version2.issueCustomFieldContexts.getContextsForField',
            });
        });
    }
    createCustomFieldContext(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/2/field/${parameters.fieldId}/context`,
                method: 'POST',
                data: {
                    id: parameters.id,
                    name: parameters.name,
                    description: parameters.description,
                    projectIds: parameters.projectIds,
                    issueTypeIds: parameters.issueTypeIds,
                },
            };
            return this.client.sendRequest(config, callback, {
                methodName: 'version2.issueCustomFieldContexts.createCustomFieldContext',
            });
        });
    }
    getDefaultValues(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/2/field/${parameters.fieldId}/context/defaultValue`,
                method: 'GET',
                params: {
                    contextId: parameters.contextId,
                    startAt: parameters.startAt,
                    maxResults: parameters.maxResults,
                },
            };
            return this.client.sendRequest(config, callback, {
                methodName: 'version2.issueCustomFieldContexts.getDefaultValues',
            });
        });
    }
    setDefaultValues(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/2/field/${parameters.fieldId}/context/defaultValue`,
                method: 'PUT',
                data: {
                    defaultValues: parameters.defaultValues,
                },
            };
            return this.client.sendRequest(config, callback, {
                methodName: 'version2.issueCustomFieldContexts.setDefaultValues',
            });
        });
    }
    getIssueTypeMappingsForContexts(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/2/field/${parameters.fieldId}/context/issuetypemapping`,
                method: 'GET',
                params: {
                    contextId: parameters.contextId,
                    startAt: parameters.startAt,
                    maxResults: parameters.maxResults,
                },
            };
            return this.client.sendRequest(config, callback, {
                methodName: 'version2.issueCustomFieldContexts.getIssueTypeMappingsForContexts',
            });
        });
    }
    getCustomFieldContextsForProjectsAndIssueTypes(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/2/field/${parameters.fieldId}/context/mapping`,
                method: 'POST',
                params: {
                    startAt: parameters.startAt,
                    maxResults: parameters.maxResults,
                },
                data: {
                    mappings: parameters.mappings,
                },
            };
            return this.client.sendRequest(config, callback, {
                methodName: 'version2.issueCustomFieldContexts.getCustomFieldContextsForProjectsAndIssueTypes',
            });
        });
    }
    getProjectContextMapping(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/2/field/${parameters.fieldId}/context/projectmapping`,
                method: 'GET',
                params: {
                    contextId: parameters.contextId,
                    startAt: parameters.startAt,
                    maxResults: parameters.maxResults,
                },
            };
            return this.client.sendRequest(config, callback, {
                methodName: 'version2.issueCustomFieldContexts.getProjectContextMapping',
            });
        });
    }
    updateCustomFieldContext(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/2/field/${parameters.fieldId}/context/${parameters.contextId}`,
                method: 'PUT',
                data: {
                    name: parameters.name,
                    description: parameters.description,
                },
            };
            return this.client.sendRequest(config, callback, {
                methodName: 'version2.issueCustomFieldContexts.updateCustomFieldContext',
            });
        });
    }
    deleteCustomFieldContext(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/2/field/${parameters.fieldId}/context/${parameters.contextId}`,
                method: 'DELETE',
            };
            return this.client.sendRequest(config, callback, {
                methodName: 'version2.issueCustomFieldContexts.deleteCustomFieldContext',
            });
        });
    }
    addIssueTypesToContext(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/2/field/${parameters.fieldId}/context/${parameters.contextId}/issuetype`,
                method: 'PUT',
                data: {
                    issueTypeIds: parameters.issueTypeIds,
                },
            };
            return this.client.sendRequest(config, callback, {
                methodName: 'version2.issueCustomFieldContexts.addIssueTypesToContext',
            });
        });
    }
    removeIssueTypesFromContext(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/2/field/${parameters.fieldId}/context/${parameters.contextId}/issuetype/remove`,
                method: 'POST',
                data: {
                    issueTypeIds: parameters.issueTypeIds,
                },
            };
            return this.client.sendRequest(config, callback, {
                methodName: 'version2.issueCustomFieldContexts.removeIssueTypesFromContext',
            });
        });
    }
    assignProjectsToCustomFieldContext(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/2/field/${parameters.fieldId}/context/${parameters.contextId}/project`,
                method: 'PUT',
                data: {
                    projectIds: parameters.projectIds,
                },
            };
            return this.client.sendRequest(config, callback, {
                methodName: 'version2.issueCustomFieldContexts.assignProjectsToCustomFieldContext',
            });
        });
    }
    removeCustomFieldContextFromProjects(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/2/field/${parameters.fieldId}/context/${parameters.contextId}/project/remove`,
                method: 'POST',
                data: {
                    projectIds: parameters.projectIds,
                },
            };
            return this.client.sendRequest(config, callback, {
                methodName: 'version2.issueCustomFieldContexts.removeCustomFieldContextFromProjects',
            });
        });
    }
}
exports.IssueCustomFieldContexts = IssueCustomFieldContexts;
//# sourceMappingURL=issueCustomFieldContexts.js.map