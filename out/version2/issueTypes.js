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
exports.IssueTypes = void 0;
class IssueTypes {
    constructor(client) {
        this.client = client;
    }
    getIssueAllTypes(callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: '/rest/api/2/issuetype',
                method: 'GET',
            };
            return this.client.sendRequest(config, callback, { methodName: 'version2.issueTypes.getIssueAllTypes' });
        });
    }
    createIssueType(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: '/rest/api/2/issuetype',
                method: 'POST',
                data: {
                    name: parameters === null || parameters === void 0 ? void 0 : parameters.name,
                    description: parameters === null || parameters === void 0 ? void 0 : parameters.description,
                    type: parameters === null || parameters === void 0 ? void 0 : parameters.type,
                    hierarchyLevel: parameters === null || parameters === void 0 ? void 0 : parameters.hierarchyLevel,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'version2.issueTypes.createIssueType' });
        });
    }
    getIssueTypesForProject(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: '/rest/api/2/issuetype/project',
                method: 'GET',
                params: {
                    projectId: parameters.projectId,
                    level: parameters.level,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'version2.issueTypes.getIssueTypesForProject' });
        });
    }
    getIssueType(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/2/issuetype/${parameters.id}`,
                method: 'GET',
            };
            return this.client.sendRequest(config, callback, { methodName: 'version2.issueTypes.getIssueType' });
        });
    }
    updateIssueType(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/2/issuetype/${parameters.id}`,
                method: 'PUT',
                data: {
                    name: parameters.name,
                    description: parameters.description,
                    avatarId: parameters.avatarId,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'version2.issueTypes.updateIssueType' });
        });
    }
    deleteIssueType(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/2/issuetype/${parameters.id}`,
                method: 'DELETE',
                params: {
                    alternativeIssueTypeId: parameters.alternativeIssueTypeId,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'version2.issueTypes.deleteIssueType' });
        });
    }
    getAlternativeIssueTypes(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/2/issuetype/${parameters.id}/alternatives`,
                method: 'GET',
            };
            return this.client.sendRequest(config, callback, { methodName: 'version2.issueTypes.getAlternativeIssueTypes' });
        });
    }
    createIssueTypeAvatar(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/2/issuetype/${parameters.id}/avatar2`,
                method: 'POST',
                params: {
                    x: parameters.x,
                    y: parameters.y,
                    size: parameters.size,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'version2.issueTypes.createIssueTypeAvatar' });
        });
    }
}
exports.IssueTypes = IssueTypes;
//# sourceMappingURL=issueTypes.js.map