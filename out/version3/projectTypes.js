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
exports.ProjectTypes = void 0;
class ProjectTypes {
    constructor(client) {
        this.client = client;
    }
    getAllProjectTypes(callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: '/rest/api/3/project/type',
                method: 'GET',
            };
            return this.client.sendRequest(config, callback, { methodName: 'version3.projectTypes.getAllProjectTypes' });
        });
    }
    getAllAccessibleProjectTypes(callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: '/rest/api/3/project/type/accessible',
                method: 'GET',
            };
            return this.client.sendRequest(config, callback, {
                methodName: 'version3.projectTypes.getAllAccessibleProjectTypes',
            });
        });
    }
    getProjectTypeByKey(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/3/project/type/${parameters.projectTypeKey}`,
                method: 'GET',
            };
            return this.client.sendRequest(config, callback, { methodName: 'version3.projectTypes.getProjectTypeByKey' });
        });
    }
    getAccessibleProjectTypeByKey(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/3/project/type/${parameters.projectTypeKey}/accessible`,
                method: 'GET',
            };
            return this.client.sendRequest(config, callback, {
                methodName: 'version3.projectTypes.getAccessibleProjectTypeByKey',
            });
        });
    }
}
exports.ProjectTypes = ProjectTypes;
//# sourceMappingURL=projectTypes.js.map