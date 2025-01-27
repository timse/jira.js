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
exports.IssueAttachments = void 0;
const FormData = require("form-data");
class IssueAttachments {
    constructor(client) {
        this.client = client;
    }
    getAttachmentMeta(callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: '/rest/api/2/attachment/meta',
                method: 'GET',
            };
            return this.client.sendRequest(config, callback, { methodName: 'version2.issueAttachments.getAttachmentMeta' });
        });
    }
    getAttachment(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/2/attachment/${parameters.id}`,
                method: 'GET',
            };
            return this.client.sendRequest(config, callback, { methodName: 'version2.issueAttachments.getAttachment' });
        });
    }
    removeAttachment(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/2/attachment/${parameters.id}`,
                method: 'DELETE',
            };
            return this.client.sendRequest(config, callback, { methodName: 'version2.issueAttachments.removeAttachment' });
        });
    }
    expandAttachmentForHumans(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/2/attachment/${parameters.id}/expand/human`,
                method: 'GET',
            };
            return this.client.sendRequest(config, callback, {
                methodName: 'version2.issueAttachments.expandAttachmentForHumans',
            });
        });
    }
    expandAttachmentForMachines(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/2/attachment/${parameters.id}/expand/raw`,
                method: 'GET',
            };
            return this.client.sendRequest(config, callback, {
                methodName: 'version2.issueAttachments.expandAttachmentForMachines',
            });
        });
    }
    addAttachment(parameters, callback) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const formData = new FormData();
            const attachments = Array.isArray(parameters.attachment) ? parameters.attachment : [parameters.attachment];
            attachments.forEach((attachment) => formData.append('file', attachment.file, attachment.filename));
            const config = {
                url: `/rest/api/2/issue/${parameters.issueIdOrKey}/attachments`,
                method: 'POST',
                headers: Object.assign({ 'Content-Type': 'multipart/form-data' }, (_a = formData.getHeaders) === null || _a === void 0 ? void 0 : _a.call(formData)),
                data: formData,
            };
            return this.client.sendRequest(config, callback, { methodName: 'version2.issueAttachments.addAttachment' });
        });
    }
}
exports.IssueAttachments = IssueAttachments;
//# sourceMappingURL=issueAttachments.js.map