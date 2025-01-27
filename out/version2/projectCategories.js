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
exports.ProjectCategories = void 0;
class ProjectCategories {
    constructor(client) {
        this.client = client;
    }
    getAllProjectCategories(callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: '/rest/api/2/projectCategory',
                method: 'GET',
            };
            return this.client.sendRequest(config, callback, {
                methodName: 'version2.projectCategories.getAllProjectCategories',
            });
        });
    }
    createProjectCategory(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: '/rest/api/2/projectCategory',
                method: 'POST',
                data: {
                    self: parameters === null || parameters === void 0 ? void 0 : parameters.self,
                    id: parameters === null || parameters === void 0 ? void 0 : parameters.id,
                    name: parameters === null || parameters === void 0 ? void 0 : parameters.name,
                    description: parameters === null || parameters === void 0 ? void 0 : parameters.description,
                },
            };
            return this.client.sendRequest(config, callback, {
                methodName: 'version2.projectCategories.createProjectCategory',
            });
        });
    }
    getProjectCategoryById(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/2/projectCategory/${parameters.id}`,
                method: 'GET',
            };
            return this.client.sendRequest(config, callback, {
                methodName: 'version2.projectCategories.getProjectCategoryById',
            });
        });
    }
    updateProjectCategory(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/2/projectCategory/${parameters.id}`,
                method: 'PUT',
                data: {
                    name: parameters.name,
                    description: parameters.description,
                },
            };
            return this.client.sendRequest(config, callback, {
                methodName: 'version2.projectCategories.updateProjectCategory',
            });
        });
    }
    removeProjectCategory(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/2/projectCategory/${parameters.id}`,
                method: 'DELETE',
            };
            return this.client.sendRequest(config, callback, {
                methodName: 'version2.projectCategories.removeProjectCategory',
            });
        });
    }
}
exports.ProjectCategories = ProjectCategories;
//# sourceMappingURL=projectCategories.js.map