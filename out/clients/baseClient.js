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
exports.BaseClient = void 0;
const axios_1 = require("axios");
const telemetry_jira_js_1 = require("telemetry.jira.js");
const authenticationService_1 = require("../services/authenticationService");
const STRICT_GDPR_FLAG = 'x-atlassian-force-account-id';
const ATLASSIAN_TOKEN_CHECK_FLAG = 'X-Atlassian-Token';
const ATLASSIAN_TOKEN_CHECK_NOCHECK_VALUE = 'no-check';
class BaseClient {
    constructor(config) {
        var _a;
        this.config = config;
        this.instance = axios_1.default.create(Object.assign(Object.assign({ paramsSerializer: this.paramSerializer.bind(this) }, config.baseRequestConfig), { baseURL: config.host, headers: this.removeUndefinedProperties(Object.assign({ [STRICT_GDPR_FLAG]: config.strictGDPR, [ATLASSIAN_TOKEN_CHECK_FLAG]: config.noCheckAtlassianToken ? ATLASSIAN_TOKEN_CHECK_NOCHECK_VALUE : undefined }, (_a = config.baseRequestConfig) === null || _a === void 0 ? void 0 : _a.headers)) }));
    }
    paramSerializer(parameters) {
        const parts = [];
        Object.entries(parameters).forEach(([key, value]) => {
            if (value === null || typeof value === 'undefined') {
                return undefined;
            }
            if (Array.isArray(value)) {
                // eslint-disable-next-line no-param-reassign
                value = value.join(',');
            }
            if (value instanceof Date) {
                // eslint-disable-next-line no-param-reassign
                value = value.toISOString();
            }
            else if (value !== null && typeof value === 'object') {
                // eslint-disable-next-line no-param-reassign
                value = JSON.stringify(value);
            }
            parts.push(`${this.encode(key)}=${this.encode(value)}`);
            return undefined;
        });
        return parts.join('&');
    }
    encode(value) {
        return encodeURIComponent(value)
            .replace(/%3A/gi, ':')
            .replace(/%24/g, '$')
            .replace(/%2C/gi, ',')
            .replace(/%20/g, '+')
            .replace(/%5B/gi, '[')
            .replace(/%5D/gi, ']');
    }
    removeUndefinedProperties(obj) {
        return Object.entries(obj)
            .filter(([, value]) => typeof value !== 'undefined')
            .reduce((accumulator, [key, value]) => (Object.assign(Object.assign({}, accumulator), { [key]: value })), {});
    }
    sendRequest(requestConfig, callback) {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const modifiedRequestConfig = Object.assign(Object.assign({}, requestConfig), { headers: this.removeUndefinedProperties(Object.assign({ Authorization: yield authenticationService_1.AuthenticationService.getAuthenticationToken(this.config.authentication, {
                            baseURL: this.config.host,
                            url: this.instance.getUri(requestConfig),
                            method: requestConfig.method,
                        }) }, requestConfig.headers)) });
                const response = yield this.instance.request(modifiedRequestConfig);
                const callbackResponseHandler = callback && ((data) => callback(null, data));
                const defaultResponseHandler = (data) => data;
                const responseHandler = callbackResponseHandler !== null && callbackResponseHandler !== void 0 ? callbackResponseHandler : defaultResponseHandler;
                (_b = (_a = this.config.middlewares) === null || _a === void 0 ? void 0 : _a.onResponse) === null || _b === void 0 ? void 0 : _b.call(_a, response.data);
                return responseHandler(response.data);
            }
            catch (e) {
                const callbackErrorHandler = callback && ((error) => callback(error));
                const defaultErrorHandler = (error) => {
                    throw error;
                };
                const errorHandler = callbackErrorHandler !== null && callbackErrorHandler !== void 0 ? callbackErrorHandler : defaultErrorHandler;
                (_d = (_c = this.config.middlewares) === null || _c === void 0 ? void 0 : _c.onError) === null || _d === void 0 ? void 0 : _d.call(_c, e);
                return errorHandler(e);
            }
        });
    }
    get authenticationType() {
        const { authentication } = this.config;
        if (!authentication) {
            return telemetry_jira_js_1.Authentication.None;
        }
        if (authentication.basic) {
            return telemetry_jira_js_1.Authentication.Basic;
        }
        if (authentication.oauth) {
            return telemetry_jira_js_1.Authentication.OAuth;
        }
        if (authentication.oauth2) {
            return telemetry_jira_js_1.Authentication.OAuth2;
        }
        if (authentication.jwt) {
            return telemetry_jira_js_1.Authentication.JWT;
        }
        return telemetry_jira_js_1.Authentication.NA;
    }
}
exports.BaseClient = BaseClient;
//# sourceMappingURL=baseClient.js.map