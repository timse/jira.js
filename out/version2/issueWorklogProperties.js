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
exports.IssueWorklogProperties = void 0;
class IssueWorklogProperties {
    constructor(client) {
        this.client = client;
    }
    getWorklogPropertyKeys(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/2/issue/${parameters.issueIdOrKey}/worklog/${parameters.worklogId}/properties`,
                method: 'GET',
            };
            return this.client.sendRequest(config, callback, {
                methodName: 'version2.issueWorklogProperties.getWorklogPropertyKeys',
            });
        });
    }
    getWorklogProperty(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/2/issue/${parameters.issueIdOrKey}/worklog/${parameters.worklogId}/properties/${parameters.propertyKey}`,
                method: 'GET',
            };
            return this.client.sendRequest(config, callback, {
                methodName: 'version2.issueWorklogProperties.getWorklogProperty',
            });
        });
    }
    setWorklogProperty(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/2/issue/${parameters.issueIdOrKey}/worklog/${parameters.worklogId}/properties/${parameters.propertyKey}`,
                method: 'PUT',
            };
            return this.client.sendRequest(config, callback, {
                methodName: 'version2.issueWorklogProperties.setWorklogProperty',
            });
        });
    }
    deleteWorklogProperty(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/2/issue/${parameters.issueIdOrKey}/worklog/${parameters.worklogId}/properties/${parameters.propertyKey}`,
                method: 'DELETE',
            };
            return this.client.sendRequest(config, callback, {
                methodName: 'version2.issueWorklogProperties.deleteWorklogProperty',
            });
        });
    }
}
exports.IssueWorklogProperties = IssueWorklogProperties;
//# sourceMappingURL=issueWorklogProperties.js.map