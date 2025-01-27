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
exports.IssueFields = void 0;
class IssueFields {
    constructor(client) {
        this.client = client;
    }
    getFields(callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: '/rest/api/2/field',
                method: 'GET',
            };
            return this.client.sendRequest(config, callback, { methodName: 'version2.issueFields.getFields' });
        });
    }
    createCustomField(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: '/rest/api/2/field',
                method: 'POST',
                data: {
                    name: parameters === null || parameters === void 0 ? void 0 : parameters.name,
                    description: parameters === null || parameters === void 0 ? void 0 : parameters.description,
                    type: parameters === null || parameters === void 0 ? void 0 : parameters.type,
                    searcherKey: parameters === null || parameters === void 0 ? void 0 : parameters.searcherKey,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'version2.issueFields.createCustomField' });
        });
    }
    getFieldsPaginated(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: '/rest/api/2/field/search',
                method: 'GET',
                params: {
                    startAt: parameters === null || parameters === void 0 ? void 0 : parameters.startAt,
                    maxResults: parameters === null || parameters === void 0 ? void 0 : parameters.maxResults,
                    type: parameters === null || parameters === void 0 ? void 0 : parameters.type,
                    id: parameters === null || parameters === void 0 ? void 0 : parameters.id,
                    query: parameters === null || parameters === void 0 ? void 0 : parameters.query,
                    orderBy: parameters === null || parameters === void 0 ? void 0 : parameters.orderBy,
                    expand: parameters === null || parameters === void 0 ? void 0 : parameters.expand,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'version2.issueFields.getFieldsPaginated' });
        });
    }
    updateCustomField(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/2/field/${parameters.fieldId}`,
                method: 'PUT',
                data: {
                    name: parameters.name,
                    description: parameters.description,
                    searcherKey: parameters.searcherKey,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'version2.issueFields.updateCustomField' });
        });
    }
    getContextsForFieldDeprecated(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/2/field/${parameters.fieldId}/contexts`,
                method: 'GET',
                params: {
                    startAt: parameters.startAt,
                    maxResults: parameters.maxResults,
                },
            };
            return this.client.sendRequest(config, callback, {
                methodName: 'version2.issueFields.getContextsForFieldDeprecated',
            });
        });
    }
}
exports.IssueFields = IssueFields;
//# sourceMappingURL=issueFields.js.map