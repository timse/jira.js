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
exports.ProjectComponents = void 0;
class ProjectComponents {
    constructor(client) {
        this.client = client;
    }
    createComponent(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: '/rest/api/2/component',
                method: 'POST',
                data: {
                    self: parameters === null || parameters === void 0 ? void 0 : parameters.self,
                    id: parameters === null || parameters === void 0 ? void 0 : parameters.id,
                    name: parameters === null || parameters === void 0 ? void 0 : parameters.name,
                    description: parameters === null || parameters === void 0 ? void 0 : parameters.description,
                    lead: parameters === null || parameters === void 0 ? void 0 : parameters.lead,
                    leadUserName: parameters === null || parameters === void 0 ? void 0 : parameters.leadUserName,
                    leadAccountId: parameters === null || parameters === void 0 ? void 0 : parameters.leadAccountId,
                    assigneeType: parameters === null || parameters === void 0 ? void 0 : parameters.assigneeType,
                    assignee: parameters === null || parameters === void 0 ? void 0 : parameters.assignee,
                    realAssigneeType: parameters === null || parameters === void 0 ? void 0 : parameters.realAssigneeType,
                    realAssignee: parameters === null || parameters === void 0 ? void 0 : parameters.realAssignee,
                    isAssigneeTypeValid: parameters === null || parameters === void 0 ? void 0 : parameters.isAssigneeTypeValid,
                    project: parameters === null || parameters === void 0 ? void 0 : parameters.project,
                    projectId: parameters === null || parameters === void 0 ? void 0 : parameters.projectId,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'version2.projectComponents.createComponent' });
        });
    }
    getComponent(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/2/component/${parameters.id}`,
                method: 'GET',
            };
            return this.client.sendRequest(config, callback, { methodName: 'version2.projectComponents.getComponent' });
        });
    }
    updateComponent(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/2/component/${parameters.id}`,
                method: 'PUT',
                data: {
                    name: parameters.name,
                    description: parameters.description,
                    leadUserName: parameters.leadUserName,
                    leadAccountId: parameters.leadAccountId,
                    assigneeType: parameters.assigneeType,
                    project: parameters.project,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'version2.projectComponents.updateComponent' });
        });
    }
    deleteComponent(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/2/component/${parameters.id}`,
                method: 'DELETE',
                params: {
                    moveIssuesTo: parameters.moveIssuesTo,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'version2.projectComponents.deleteComponent' });
        });
    }
    getComponentRelatedIssues(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/2/component/${parameters.id}/relatedIssueCounts`,
                method: 'GET',
            };
            return this.client.sendRequest(config, callback, {
                methodName: 'version2.projectComponents.getComponentRelatedIssues',
            });
        });
    }
    getProjectComponentsPaginated(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/2/project/${parameters.projectIdOrKey}/component`,
                method: 'GET',
                params: {
                    startAt: parameters.startAt,
                    maxResults: parameters.maxResults,
                    orderBy: parameters.orderBy,
                    query: parameters.query,
                },
            };
            return this.client.sendRequest(config, callback, {
                methodName: 'version2.projectComponents.getProjectComponentsPaginated',
            });
        });
    }
    getProjectComponents(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/2/project/${parameters.projectIdOrKey}/components`,
                method: 'GET',
            };
            return this.client.sendRequest(config, callback, { methodName: 'version2.projectComponents.getProjectComponents' });
        });
    }
}
exports.ProjectComponents = ProjectComponents;
//# sourceMappingURL=projectComponents.js.map