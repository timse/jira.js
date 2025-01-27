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
exports.WorkflowSchemeProjectAssociations = void 0;
class WorkflowSchemeProjectAssociations {
    constructor(client) {
        this.client = client;
    }
    getWorkflowSchemeProjectAssociations(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: '/rest/api/2/workflowscheme/project',
                method: 'GET',
                params: {
                    projectId: parameters.projectId,
                },
            };
            return this.client.sendRequest(config, callback, {
                methodName: 'version2.workflowSchemeProjectAssociations.getWorkflowSchemeProjectAssociations',
            });
        });
    }
    associateSchemeWithProject(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            // @ts-ignore
            return this.assignSchemeToProject(parameters, callback);
        });
    }
    assignSchemeToProject(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: '/rest/api/2/workflowscheme/project',
                method: 'PUT',
                data: {
                    workflowSchemeId: parameters === null || parameters === void 0 ? void 0 : parameters.workflowSchemeId,
                    projectId: parameters === null || parameters === void 0 ? void 0 : parameters.projectId,
                },
            };
            return this.client.sendRequest(config, callback, {
                methodName: 'version2.workflowSchemeProjectAssociations.assignSchemeToProject',
            });
        });
    }
}
exports.WorkflowSchemeProjectAssociations = WorkflowSchemeProjectAssociations;
//# sourceMappingURL=workflowSchemeProjectAssociations.js.map