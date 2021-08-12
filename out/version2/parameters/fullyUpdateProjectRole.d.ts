import { CreateUpdateRoleRequestBean } from '../models';
export interface FullyUpdateProjectRole extends CreateUpdateRoleRequestBean {
    /** The ID of the project role. Use [Get all project roles](#api-rest-api-2-role-get) to get a list of project role IDs. */
    id: number;
}
