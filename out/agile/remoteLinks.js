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
exports.RemoteLinks = void 0;
class RemoteLinks {
    constructor(client) {
        this.client = client;
    }
    submitRemoteLinks(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: '/rest/remotelinks/1.0/bulk',
                method: 'POST',
                data: {
                    properties: parameters === null || parameters === void 0 ? void 0 : parameters.properties,
                    remoteLinks: parameters === null || parameters === void 0 ? void 0 : parameters.remoteLinks,
                    providerMetadata: parameters === null || parameters === void 0 ? void 0 : parameters.providerMetadata,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'agile.remoteLinks.submitRemoteLinks' });
        });
    }
    deleteRemoteLinksByProperty(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: '/rest/remotelinks/1.0/bulkByProperties',
                method: 'DELETE',
                params: {
                    _updateSequenceNumber: (parameters === null || parameters === void 0 ? void 0 : parameters._updateSequenceNumber) || (parameters === null || parameters === void 0 ? void 0 : parameters.updateSequenceNumber),
                    params: parameters === null || parameters === void 0 ? void 0 : parameters.params,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'agile.remoteLinks.deleteRemoteLinksByProperty' });
        });
    }
    getRemoteLinkById(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/remotelinks/1.0/remotelink/${parameters.remoteLinkId}`,
                method: 'GET',
            };
            return this.client.sendRequest(config, callback, { methodName: 'agile.remoteLinks.getRemoteLinkById' });
        });
    }
    deleteRemoteLinkById(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/remotelinks/1.0/remotelink/${parameters.remoteLinkId}`,
                method: 'DELETE',
                params: {
                    _updateSequenceNumber: parameters._updateSequenceNumber || parameters.updateSequenceNumber,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'agile.remoteLinks.deleteRemoteLinkById' });
        });
    }
}
exports.RemoteLinks = RemoteLinks;
//# sourceMappingURL=remoteLinks.js.map