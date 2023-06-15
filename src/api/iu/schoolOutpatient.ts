import { defHttp } from '/@/utils/http/axios';
import { ErrorMessageMode } from '/#/axios';
import { BaseDataResp, BaseListReq, BaseResp, BaseIDsReq, BaseIDReq } from '/@/api/model/baseModel';
import { SchoolOutpatientInfo, SchoolOutpatientListResp } from './model/schoolOutpatientModel';

enum Api {
  CreateSchoolOutpatient = '/iu-api/OPD/school_outpatient/create',
  UpdateSchoolOutpatient = '/iu-api/OPD/school_outpatient/update',
  GetSchoolOutpatientList = '/iu-api/OPD/school_outpatient/list',
  DeleteSchoolOutpatient = '/iu-api/OPD/school_outpatient/delete',
  GetSchoolOutpatientById = '/iu-api/OPD/school_outpatient',
}

/**
 * @description: Get school outpatient list
 */

export const getSchoolOutpatientList = (params: BaseListReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseDataResp<SchoolOutpatientListResp>>(
    { url: Api.GetSchoolOutpatientList, params },
    { errorMessageMode: mode },
  );
};

/**
 *  @description: Create a new school outpatient
 */
export const createSchoolOutpatient = (params: SchoolOutpatientInfo, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.CreateSchoolOutpatient, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Update the school outpatient
 */
export const updateSchoolOutpatient = (params: SchoolOutpatientInfo, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.UpdateSchoolOutpatient, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Delete school outpatients
 */
export const deleteSchoolOutpatient = (params: BaseIDsReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.DeleteSchoolOutpatient, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Get school outpatient By ID
 */
export const getSchoolOutpatientById = (params: BaseIDReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseDataResp<SchoolOutpatientInfo>>(
    { url: Api.GetSchoolOutpatientById, params: params },
    {
      errorMessageMode: mode,
    },
  );
};
