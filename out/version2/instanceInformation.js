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
exports.InstanceInformation = void 0;
class InstanceInformation {
    constructor(client) {
        this.client = client;
    }
    getLicense(callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: '/rest/api/2/instance/license',
                method: 'GET',
            };
            return this.client.sendRequest(config, callback, { methodName: 'version2.instanceInformation.getLicense' });
        });
    }
}
exports.InstanceInformation = InstanceInformation;
//# sourceMappingURL=instanceInformation.js.map