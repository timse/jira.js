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
exports.IssueNavigatorSettings = void 0;
class IssueNavigatorSettings {
    constructor(client) {
        this.client = client;
    }
    getIssueNavigatorDefaultColumns(callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: '/rest/api/3/settings/columns',
                method: 'GET',
            };
            return this.client.sendRequest(config, callback, {
                methodName: 'version3.issueNavigatorSettings.getIssueNavigatorDefaultColumns',
            });
        });
    }
    setIssueNavigatorDefaultColumns(callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: '/rest/api/3/settings/columns',
                method: 'PUT',
            };
            return this.client.sendRequest(config, callback, {
                methodName: 'version3.issueNavigatorSettings.setIssueNavigatorDefaultColumns',
            });
        });
    }
}
exports.IssueNavigatorSettings = IssueNavigatorSettings;
//# sourceMappingURL=issueNavigatorSettings.js.map