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
exports.ScreenTabs = void 0;
class ScreenTabs {
    constructor(client) {
        this.client = client;
    }
    getAllScreenTabs(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/3/screens/${parameters.screenId}/tabs`,
                method: 'GET',
                params: {
                    projectKey: parameters.projectKey,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'version3.screenTabs.getAllScreenTabs' });
        });
    }
    addScreenTab(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/3/screens/${parameters.screenId}/tabs`,
                method: 'POST',
                data: {
                    id: parameters.id,
                    name: parameters.name,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'version3.screenTabs.addScreenTab' });
        });
    }
    renameScreenTab(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/3/screens/${parameters.screenId}/tabs/${parameters.tabId}`,
                method: 'PUT',
                data: {
                    id: parameters.id,
                    name: parameters.name,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'version3.screenTabs.renameScreenTab' });
        });
    }
    deleteScreenTab(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/3/screens/${parameters.screenId}/tabs/${parameters.tabId}`,
                method: 'DELETE',
            };
            return this.client.sendRequest(config, callback, { methodName: 'version3.screenTabs.deleteScreenTab' });
        });
    }
    moveScreenTab(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/3/screens/${parameters.screenId}/tabs/${parameters.tabId}/move/${parameters.pos}`,
                method: 'POST',
            };
            return this.client.sendRequest(config, callback, { methodName: 'version3.screenTabs.moveScreenTab' });
        });
    }
}
exports.ScreenTabs = ScreenTabs;
//# sourceMappingURL=screenTabs.js.map