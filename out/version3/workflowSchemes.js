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
exports.WorkflowSchemes = void 0;
class WorkflowSchemes {
    constructor(client) {
        this.client = client;
    }
    getAllWorkflowSchemes(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: '/rest/api/3/workflowscheme',
                method: 'GET',
                params: {
                    startAt: parameters === null || parameters === void 0 ? void 0 : parameters.startAt,
                    maxResults: parameters === null || parameters === void 0 ? void 0 : parameters.maxResults,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'version3.workflowSchemes.getAllWorkflowSchemes' });
        });
    }
    createWorkflowScheme(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: '/rest/api/3/workflowscheme',
                method: 'POST',
                data: {
                    id: parameters === null || parameters === void 0 ? void 0 : parameters.id,
                    name: parameters === null || parameters === void 0 ? void 0 : parameters.name,
                    description: parameters === null || parameters === void 0 ? void 0 : parameters.description,
                    defaultWorkflow: parameters === null || parameters === void 0 ? void 0 : parameters.defaultWorkflow,
                    issueTypeMappings: parameters === null || parameters === void 0 ? void 0 : parameters.issueTypeMappings,
                    originalDefaultWorkflow: parameters === null || parameters === void 0 ? void 0 : parameters.originalDefaultWorkflow,
                    originalIssueTypeMappings: parameters === null || parameters === void 0 ? void 0 : parameters.originalIssueTypeMappings,
                    draft: parameters === null || parameters === void 0 ? void 0 : parameters.draft,
                    lastModifiedUser: parameters === null || parameters === void 0 ? void 0 : parameters.lastModifiedUser,
                    lastModified: parameters === null || parameters === void 0 ? void 0 : parameters.lastModified,
                    self: parameters === null || parameters === void 0 ? void 0 : parameters.self,
                    updateDraftIfNeeded: parameters === null || parameters === void 0 ? void 0 : parameters.updateDraftIfNeeded,
                    issueTypes: parameters === null || parameters === void 0 ? void 0 : parameters.issueTypes,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'version3.workflowSchemes.createWorkflowScheme' });
        });
    }
    getWorkflowScheme(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/3/workflowscheme/${parameters.id}`,
                method: 'GET',
                params: {
                    returnDraftIfExists: parameters.returnDraftIfExists,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'version3.workflowSchemes.getWorkflowScheme' });
        });
    }
    updateWorkflowScheme(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/3/workflowscheme/${parameters.id}`,
                method: 'PUT',
                data: {
                    name: parameters.name,
                    description: parameters.description,
                    defaultWorkflow: parameters.defaultWorkflow,
                    issueTypeMappings: parameters.issueTypeMappings,
                    updateDraftIfNeeded: parameters.updateDraftIfNeeded,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'version3.workflowSchemes.updateWorkflowScheme' });
        });
    }
    deleteWorkflowScheme(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/3/workflowscheme/${parameters.id}`,
                method: 'DELETE',
            };
            return this.client.sendRequest(config, callback, { methodName: 'version3.workflowSchemes.deleteWorkflowScheme' });
        });
    }
    getDefaultWorkflow(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/3/workflowscheme/${parameters.id}/default`,
                method: 'GET',
                params: {
                    returnDraftIfExists: parameters.returnDraftIfExists,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'version3.workflowSchemes.getDefaultWorkflow' });
        });
    }
    updateDefaultWorkflow(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/3/workflowscheme/${parameters.id}/default`,
                method: 'PUT',
                data: {
                    workflow: parameters.workflow,
                    updateDraftIfNeeded: parameters.updateDraftIfNeeded,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'version3.workflowSchemes.updateDefaultWorkflow' });
        });
    }
    deleteDefaultWorkflow(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/3/workflowscheme/${parameters.id}/default`,
                method: 'DELETE',
                params: {
                    updateDraftIfNeeded: parameters.updateDraftIfNeeded,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'version3.workflowSchemes.deleteDefaultWorkflow' });
        });
    }
    getWorkflowSchemeIssueType(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/3/workflowscheme/${parameters.id}/issuetype/${parameters.issueType}`,
                method: 'GET',
                params: {
                    returnDraftIfExists: parameters.returnDraftIfExists,
                },
            };
            return this.client.sendRequest(config, callback, {
                methodName: 'version3.workflowSchemes.getWorkflowSchemeIssueType',
            });
        });
    }
    setWorkflowSchemeIssueType(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/3/workflowscheme/${parameters.id}/issuetype/${parameters.issueType}`,
                method: 'PUT',
                data: parameters.body,
            };
            return this.client.sendRequest(config, callback, {
                methodName: 'version3.workflowSchemes.setWorkflowSchemeIssueType',
            });
        });
    }
    deleteWorkflowSchemeIssueType(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/3/workflowscheme/${parameters.id}/issuetype/${parameters.issueType}`,
                method: 'DELETE',
                params: {
                    updateDraftIfNeeded: parameters.updateDraftIfNeeded,
                },
            };
            return this.client.sendRequest(config, callback, {
                methodName: 'version3.workflowSchemes.deleteWorkflowSchemeIssueType',
            });
        });
    }
    getWorkflow(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/3/workflowscheme/${parameters.id}/workflow`,
                method: 'GET',
                params: {
                    workflowName: parameters.workflowName,
                    returnDraftIfExists: parameters.returnDraftIfExists,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'version3.workflowSchemes.getWorkflow' });
        });
    }
    updateWorkflowMapping(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/3/workflowscheme/${parameters.id}/workflow`,
                method: 'PUT',
                params: {
                    workflowName: parameters.workflowName,
                },
                data: {
                    workflow: parameters.workflow,
                    issueTypes: parameters.issueTypes,
                    defaultMapping: parameters.defaultMapping,
                    updateDraftIfNeeded: parameters.updateDraftIfNeeded,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'version3.workflowSchemes.updateWorkflowMapping' });
        });
    }
    deleteWorkflowMapping(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/3/workflowscheme/${parameters.id}/workflow`,
                method: 'DELETE',
                params: {
                    workflowName: parameters.workflowName,
                    updateDraftIfNeeded: parameters.updateDraftIfNeeded,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'version3.workflowSchemes.deleteWorkflowMapping' });
        });
    }
}
exports.WorkflowSchemes = WorkflowSchemes;
//# sourceMappingURL=workflowSchemes.js.map