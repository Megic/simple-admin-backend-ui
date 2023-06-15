import { defHttp } from '/@/utils/http/axios';
import { ErrorMessageMode } from '/#/axios';
import { BaseDataResp, BaseListReq, BaseResp, BaseIDsReq, BaseIDReq } from '/@/api/model/baseModel';
import { DiagnosticTplInfo, DiagnosticTplListResp } from './model/diagnosticTplModel';

enum Api {
  CreateDiagnosticTpl = '/iu-api/OPD/diagnostic_tpl/create',
  UpdateDiagnosticTpl = '/iu-api/OPD/diagnostic_tpl/update',
  GetDiagnosticTplList = '/iu-api/OPD/diagnostic_tpl/list',
  DeleteDiagnosticTpl = '/iu-api/OPD/diagnostic_tpl/delete',
  GetDiagnosticTplById = '/iu-api/OPD/diagnostic_tpl',
}

/**
 * @description: Get diagnostic tpl list
 */

export const getDiagnosticTplList = (params: BaseListReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseDataResp<DiagnosticTplListResp>>(
    { url: Api.GetDiagnosticTplList, params },
    { errorMessageMode: mode },
  );
};

/**
 *  @description: Create a new diagnostic tpl
 */
export const createDiagnosticTpl = (params: DiagnosticTplInfo, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.CreateDiagnosticTpl, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Update the diagnostic tpl
 */
export const updateDiagnosticTpl = (params: DiagnosticTplInfo, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.UpdateDiagnosticTpl, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Delete diagnostic tpls
 */
export const deleteDiagnosticTpl = (params: BaseIDsReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.DeleteDiagnosticTpl, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Get diagnostic tpl By ID
 */
export const getDiagnosticTplById = (params: BaseIDReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseDataResp<DiagnosticTplInfo>>(
    { url: Api.GetDiagnosticTplById, params: params },
    {
      errorMessageMode: mode,
    },
  );
};
