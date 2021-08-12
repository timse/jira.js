"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Version2Client = void 0;
const clients_1 = require("../../clients");
const __1 = require("..");
class Version2Client extends clients_1.BaseClient {
    constructor() {
        super(...arguments);
        this.applicationRoles = new __1.ApplicationRoles(this);
        this.appMigration = new __1.AppMigration(this);
        this.appProperties = new __1.AppProperties(this);
        this.auditRecords = new __1.AuditRecords(this);
        this.avatars = new __1.Avatars(this);
        this.dashboards = new __1.Dashboards(this);
        this.dynamicModules = new __1.DynamicModules(this);
        this.filters = new __1.Filters(this);
        this.filterSharing = new __1.FilterSharing(this);
        this.groupAndUserPicker = new __1.GroupAndUserPicker(this);
        this.groups = new __1.Groups(this);
        this.instanceInformation = new __1.InstanceInformation(this);
        this.issueAttachments = new __1.IssueAttachments(this);
        this.issueCommentProperties = new __1.IssueCommentProperties(this);
        this.issueComments = new __1.IssueComments(this);
        this.issueCustomFieldConfigurationApps = new __1.IssueCustomFieldConfigurationApps(this);
        this.issueCustomFieldContexts = new __1.IssueCustomFieldContexts(this);
        this.issueCustomFieldOptions = new __1.IssueCustomFieldOptions(this);
        this.issueCustomFieldOptionsApps = new __1.IssueCustomFieldOptionsApps(this);
        this.issueCustomFieldValuesApps = new __1.IssueCustomFieldValuesApps(this);
        this.issueFieldConfigurations = new __1.IssueFieldConfigurations(this);
        this.issueFields = new __1.IssueFields(this);
        this.issueLinks = new __1.IssueLinks(this);
        this.issueLinkTypes = new __1.IssueLinkTypes(this);
        this.issueNavigatorSettings = new __1.IssueNavigatorSettings(this);
        this.issueNotificationSchemes = new __1.IssueNotificationSchemes(this);
        this.issuePriorities = new __1.IssuePriorities(this);
        this.issueProperties = new __1.IssueProperties(this);
        this.issueRemoteLinks = new __1.IssueRemoteLinks(this);
        this.issueResolutions = new __1.IssueResolutions(this);
        this.issues = new __1.Issues(this);
        this.issueSearch = new __1.IssueSearch(this);
        this.issueSecurityLevel = new __1.IssueSecurityLevel(this);
        this.issueSecuritySchemes = new __1.IssueSecuritySchemes(this);
        this.issueTypeProperties = new __1.IssueTypeProperties(this);
        this.issueTypes = new __1.IssueTypes(this);
        this.issueTypeSchemes = new __1.IssueTypeSchemes(this);
        this.issueTypeScreenSchemes = new __1.IssueTypeScreenSchemes(this);
        this.issueVotes = new __1.IssueVotes(this);
        this.issueWatchers = new __1.IssueWatchers(this);
        this.issueWorklogProperties = new __1.IssueWorklogProperties(this);
        this.issueWorklogs = new __1.IssueWorklogs(this);
        this.jiraExpressions = new __1.JiraExpressions(this);
        this.jiraSettings = new __1.JiraSettings(this);
        this.jql = new __1.JQL(this);
        this.labels = new __1.Labels(this);
        this.myself = new __1.Myself(this);
        this.permissions = new __1.Permissions(this);
        this.permissionSchemes = new __1.PermissionSchemes(this);
        this.projectAvatars = new __1.ProjectAvatars(this);
        this.projectCategories = new __1.ProjectCategories(this);
        this.projectComponents = new __1.ProjectComponents(this);
        this.projectEmail = new __1.ProjectEmail(this);
        this.projectFeatures = new __1.ProjectFeatures(this);
        this.projectKeyAndNameValidation = new __1.ProjectKeyAndNameValidation(this);
        this.projectPermissionSchemes = new __1.ProjectPermissionSchemes(this);
        this.projectProperties = new __1.ProjectProperties(this);
        this.projectRoleActors = new __1.ProjectRoleActors(this);
        this.projectRoles = new __1.ProjectRoles(this);
        this.projects = new __1.Projects(this);
        this.projectTypes = new __1.ProjectTypes(this);
        this.projectVersions = new __1.ProjectVersions(this);
        this.screens = new __1.Screens(this);
        this.screenSchemes = new __1.ScreenSchemes(this);
        this.screenTabFields = new __1.ScreenTabFields(this);
        this.screenTabs = new __1.ScreenTabs(this);
        this.serverInfo = new __1.ServerInfo(this);
        this.tasks = new __1.Tasks(this);
        this.timeTracking = new __1.TimeTracking(this);
        this.userProperties = new __1.UserProperties(this);
        this.users = new __1.Users(this);
        this.userSearch = new __1.UserSearch(this);
        this.webhooks = new __1.Webhooks(this);
        this.workflows = new __1.Workflows(this);
        this.workflowSchemeDrafts = new __1.WorkflowSchemeDrafts(this);
        this.workflowSchemeProjectAssociations = new __1.WorkflowSchemeProjectAssociations(this);
        this.workflowSchemes = new __1.WorkflowSchemes(this);
        this.workflowStatusCategories = new __1.WorkflowStatusCategories(this);
        this.workflowStatuses = new __1.WorkflowStatuses(this);
        this.workflowTransitionProperties = new __1.WorkflowTransitionProperties(this);
        this.workflowTransitionRules = new __1.WorkflowTransitionRules(this);
    }
}
exports.Version2Client = Version2Client;
//# sourceMappingURL=version2Client.js.map