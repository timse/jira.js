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
exports.AppMigration = void 0;
class AppMigration {
    constructor(client) {
        this.client = client;
    }
    updateIssueFields(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: '/rest/atlassian-connect/1/migration/field',
                method: 'PUT',
                headers: {
                    'Atlassian-Transfer-Id': parameters.transferId,
                    'Atlassian-Account-Id': parameters.accountId,
                },
                data: {
                    updateValueList: parameters.updateValueList,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'version2.appMigration.updateIssueFields' });
        });
    }
    updateEntityPropertiesValue(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/atlassian-connect/1/migration/properties/${parameters.entityType}`,
                method: 'PUT',
                headers: {
                    'Atlassian-Transfer-Id': parameters.transferId,
                },
                data: parameters.body,
            };
            return this.client.sendRequest(config, callback, {
                methodName: 'version2.appMigration.updateEntityPropertiesValue',
            });
        });
    }
}
exports.AppMigration = AppMigration;
//# sourceMappingURL=appMigration.js.map