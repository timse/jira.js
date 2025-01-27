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
exports.Issues = void 0;
class Issues {
    constructor(client) {
        this.client = client;
    }
    createIssue(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: '/rest/api/3/issue',
                method: 'POST',
                params: {
                    updateHistory: parameters === null || parameters === void 0 ? void 0 : parameters.updateHistory,
                },
                data: {
                    transition: parameters === null || parameters === void 0 ? void 0 : parameters.transition,
                    fields: parameters === null || parameters === void 0 ? void 0 : parameters.fields,
                    update: parameters === null || parameters === void 0 ? void 0 : parameters.update,
                    historyMetadata: parameters === null || parameters === void 0 ? void 0 : parameters.historyMetadata,
                    properties: parameters === null || parameters === void 0 ? void 0 : parameters.properties,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'version3.issues.createIssue' });
        });
    }
    createIssues(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: '/rest/api/3/issue/bulk',
                method: 'POST',
                data: {
                    issueUpdates: parameters === null || parameters === void 0 ? void 0 : parameters.issueUpdates,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'version3.issues.createIssues' });
        });
    }
    getCreateIssueMeta(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: '/rest/api/3/issue/createmeta',
                method: 'GET',
                params: {
                    projectIds: parameters === null || parameters === void 0 ? void 0 : parameters.projectIds,
                    projectKeys: parameters === null || parameters === void 0 ? void 0 : parameters.projectKeys,
                    issuetypeIds: parameters === null || parameters === void 0 ? void 0 : parameters.issuetypeIds,
                    issuetypeNames: parameters === null || parameters === void 0 ? void 0 : parameters.issuetypeNames,
                    expand: parameters === null || parameters === void 0 ? void 0 : parameters.expand,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'version3.issues.getCreateIssueMeta' });
        });
    }
    getIssue(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/3/issue/${parameters.issueIdOrKey}`,
                method: 'GET',
                params: {
                    fields: parameters.fields,
                    fieldsByKeys: parameters.fieldsByKeys,
                    expand: parameters.expand,
                    properties: parameters.properties,
                    updateHistory: parameters.updateHistory,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'version3.issues.getIssue' });
        });
    }
    editIssue(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/3/issue/${parameters.issueIdOrKey}`,
                method: 'PUT',
                params: {
                    notifyUsers: parameters.notifyUsers,
                    overrideScreenSecurity: parameters.overrideScreenSecurity,
                    overrideEditableFlag: parameters.overrideEditableFlag,
                },
                data: {
                    transition: parameters.transition,
                    fields: parameters.fields,
                    update: parameters.update,
                    historyMetadata: parameters.historyMetadata,
                    properties: parameters.properties,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'version3.issues.editIssue' });
        });
    }
    deleteIssue(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/3/issue/${parameters.issueIdOrKey}`,
                method: 'DELETE',
                params: {
                    deleteSubtasks: parameters.deleteSubtasks,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'version3.issues.deleteIssue' });
        });
    }
    assignIssue(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/3/issue/${parameters.issueIdOrKey}/assignee`,
                method: 'PUT',
                data: {
                    self: parameters.self,
                    key: parameters.key,
                    accountId: parameters.accountId,
                    accountType: parameters.accountType,
                    name: parameters.name,
                    emailAddress: parameters.emailAddress,
                    avatarUrls: parameters.avatarUrls,
                    displayName: parameters.displayName,
                    active: parameters.active,
                    timeZone: parameters.timeZone,
                    locale: parameters.locale,
                    groups: parameters.groups,
                    applicationRoles: parameters.applicationRoles,
                    expand: parameters.expand,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'version3.issues.assignIssue' });
        });
    }
    getChangeLogs(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/3/issue/${parameters.issueIdOrKey}/changelog`,
                method: 'GET',
                params: {
                    startAt: parameters.startAt,
                    maxResults: parameters.maxResults,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'version3.issues.getChangeLogs' });
        });
    }
    getChangeLogsByIds(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/3/issue/${parameters.issueIdOrKey}/changelog/list`,
                method: 'POST',
                data: {
                    changelogIds: parameters.changelogIds,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'version3.issues.getChangeLogsByIds' });
        });
    }
    getEditIssueMeta(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/3/issue/${parameters.issueIdOrKey}/editmeta`,
                method: 'GET',
                params: {
                    overrideScreenSecurity: parameters.overrideScreenSecurity,
                    overrideEditableFlag: parameters.overrideEditableFlag,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'version3.issues.getEditIssueMeta' });
        });
    }
    notify(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/3/issue/${parameters.issueIdOrKey}/notify`,
                method: 'POST',
                data: {
                    subject: parameters.subject,
                    textBody: parameters.textBody,
                    htmlBody: parameters.htmlBody,
                    to: parameters.to,
                    restrict: parameters.restrict,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'version3.issues.notify' });
        });
    }
    getTransitions(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/3/issue/${parameters.issueIdOrKey}/transitions`,
                method: 'GET',
                params: {
                    expand: parameters.expand,
                    transitionId: parameters.transitionId,
                    skipRemoteOnlyCondition: parameters.skipRemoteOnlyCondition,
                    includeUnavailableTransitions: parameters.includeUnavailableTransitions,
                    sortByOpsBarAndStatus: parameters.sortByOpsBarAndStatus,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'version3.issues.getTransitions' });
        });
    }
    doTransition(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/3/issue/${parameters.issueIdOrKey}/transitions`,
                method: 'POST',
                data: {
                    transition: parameters.transition,
                    fields: parameters.fields,
                    update: parameters.update,
                    historyMetadata: parameters.historyMetadata,
                    properties: parameters.properties,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'version3.issues.doTransition' });
        });
    }
}
exports.Issues = Issues;
//# sourceMappingURL=issues.js.map