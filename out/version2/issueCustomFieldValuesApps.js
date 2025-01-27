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
exports.IssueCustomFieldValuesApps = void 0;
class IssueCustomFieldValuesApps {
    constructor(client) {
        this.client = client;
    }
    updateCustomFieldValue(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/2/app/field/${parameters.fieldIdOrKey}/value`,
                method: 'PUT',
                params: {
                    generateChangelog: parameters.generateChangelog,
                },
                data: {
                    updates: parameters.updates,
                },
            };
            return this.client.sendRequest(config, callback, {
                methodName: 'version2.issueCustomFieldValuesApps.updateCustomFieldValue',
            });
        });
    }
}
exports.IssueCustomFieldValuesApps = IssueCustomFieldValuesApps;
//# sourceMappingURL=issueCustomFieldValuesApps.js.map