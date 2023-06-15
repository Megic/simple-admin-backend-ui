import { defHttp } from '/@/utils/http/axios';
import { ErrorMessageMode } from '/#/axios';
import { BaseDataResp, BaseListReq, BaseResp, BaseIDsReq, BaseIDReq } from '/@/api/model/baseModel';
import { DiagnosisTypeInfo, DiagnosisTypeListResp } from './model/diagnosisTypeModel';

enum Api {
  CreateDiagnosisType = '/iu-api/OPD/diagnosis_type/create',
  UpdateDiagnosisType = '/iu-api/OPD/diagnosis_type/update',
  GetDiagnosisTypeList = '/iu-api/OPD/diagnosis_type/list',
  DeleteDiagnosisType = '/iu-api/OPD/diagnosis_type/delete',
  GetDiagnosisTypeById = '/iu-api/OPD/diagnosis_type',
}

/**
 * @description: Get diagnosis type list
 */

export const getDiagnosisTypeList = (params: BaseListReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseDataResp<DiagnosisTypeListResp>>(
    { url: Api.GetDiagnosisTypeList, params },
    { errorMessageMode: mode },
  );
};

/**
 *  @description: Create a new diagnosis type
 */
export const createDiagnosisType = (params: DiagnosisTypeInfo, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.CreateDiagnosisType, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Update the diagnosis type
 */
export const updateDiagnosisType = (params: DiagnosisTypeInfo, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.UpdateDiagnosisType, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Delete diagnosis types
 */
export const deleteDiagnosisType = (params: BaseIDsReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.DeleteDiagnosisType, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Get diagnosis type By ID
 */
export const getDiagnosisTypeById = (params: BaseIDReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseDataResp<DiagnosisTypeInfo>>(
    { url: Api.GetDiagnosisTypeById, params: params },
    {
      errorMessageMode: mode,
    },
  );
};
