import { defHttp } from '/@/utils/http/axios';
import { ErrorMessageMode } from '/#/axios';
import { BaseDataResp, BaseListReq, BaseResp, BaseIDsReq, BaseIDReq } from '/@/api/model/baseModel';
import { AbsenceInfo, AbsenceListResp } from './model/absenceModel';

enum Api {
  CreateAbsence = '/iu-api/ID/absence/create',
  UpdateAbsence = '/iu-api/ID/absence/update',
  GetAbsenceList = '/iu-api/ID/absence/list',
  DeleteAbsence = '/iu-api/ID/absence/delete',
  GetAbsenceById = '/iu-api/ID/absence',
}

/**
 * @description: Get absence list
 */

export const getAbsenceList = (params: BaseListReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseDataResp<AbsenceListResp>>(
    { url: Api.GetAbsenceList, params },
    { errorMessageMode: mode },
  );
};

/**
 *  @description: Create a new absence
 */
export const createAbsence = (params: AbsenceInfo, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.CreateAbsence, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Update the absence
 */
export const updateAbsence = (params: AbsenceInfo, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.UpdateAbsence, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Delete absences
 */
export const deleteAbsence = (params: BaseIDsReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.DeleteAbsence, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Get absence By ID
 */
export const getAbsenceById = (params: BaseIDReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseDataResp<AbsenceInfo>>(
    { url: Api.GetAbsenceById, params: params },
    {
      errorMessageMode: mode,
    },
  );
};
