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
exports.ProjectRoleActors = void 0;
class ProjectRoleActors {
    constructor(client) {
        this.client = client;
    }
    addActorUsers(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/2/project/${parameters.projectIdOrKey}/role/${parameters.id}`,
                method: 'POST',
                data: {
                    user: parameters.user,
                    group: parameters.group,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'version2.projectRoleActors.addActorUsers' });
        });
    }
    setActors(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/2/project/${parameters.projectIdOrKey}/role/${parameters.id}`,
                method: 'PUT',
                data: {
                    categorisedActors: parameters.categorisedActors,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'version2.projectRoleActors.setActors' });
        });
    }
    deleteActor(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/2/project/${parameters.projectIdOrKey}/role/${parameters.id}`,
                method: 'DELETE',
                params: {
                    user: parameters.user,
                    group: parameters.group,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'version2.projectRoleActors.deleteActor' });
        });
    }
    getProjectRoleActorsForRole(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/2/role/${parameters.id}/actors`,
                method: 'GET',
            };
            return this.client.sendRequest(config, callback, {
                methodName: 'version2.projectRoleActors.getProjectRoleActorsForRole',
            });
        });
    }
    addProjectRoleActorsToRole(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/2/role/${parameters.id}/actors`,
                method: 'POST',
                data: {
                    user: parameters.user,
                    group: parameters.group,
                },
            };
            return this.client.sendRequest(config, callback, {
                methodName: 'version2.projectRoleActors.addProjectRoleActorsToRole',
            });
        });
    }
    deleteProjectRoleActorsFromRole(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/2/role/${parameters.id}/actors`,
                method: 'DELETE',
                params: {
                    user: parameters.user,
                    group: parameters.group,
                },
            };
            return this.client.sendRequest(config, callback, {
                methodName: 'version2.projectRoleActors.deleteProjectRoleActorsFromRole',
            });
        });
    }
}
exports.ProjectRoleActors = ProjectRoleActors;
//# sourceMappingURL=projectRoleActors.js.map