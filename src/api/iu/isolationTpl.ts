import { defHttp } from '/@/utils/http/axios';
import { ErrorMessageMode } from '/#/axios';
import { BaseDataResp, BaseListReq, BaseResp, BaseIDsReq, BaseIDReq } from '/@/api/model/baseModel';
import { IsolationTplInfo, IsolationTplListResp } from './model/isolationTplModel';

enum Api {
  CreateIsolationTpl = '/iu-api/ID/isolation_tpl/create',
  UpdateIsolationTpl = '/iu-api/ID/isolation_tpl/update',
  GetIsolationTplList = '/iu-api/ID/isolation_tpl/list',
  DeleteIsolationTpl = '/iu-api/ID/isolation_tpl/delete',
  GetIsolationTplById = '/iu-api/ID/isolation_tpl',
}

/**
 * @description: Get isolation tpl list
 */

export const getIsolationTplList = (params: BaseListReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseDataResp<IsolationTplListResp>>(
    { url: Api.GetIsolationTplList, params },
    { errorMessageMode: mode },
  );
};

/**
 *  @description: Create a new isolation tpl
 */
export const createIsolationTpl = (params: IsolationTplInfo, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.CreateIsolationTpl, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Update the isolation tpl
 */
export const updateIsolationTpl = (params: IsolationTplInfo, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.UpdateIsolationTpl, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Delete isolation tpls
 */
export const deleteIsolationTpl = (params: BaseIDsReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.DeleteIsolationTpl, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Get isolation tpl By ID
 */
export const getIsolationTplById = (params: BaseIDReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseDataResp<IsolationTplInfo>>(
    { url: Api.GetIsolationTplById, params: params },
    {
      errorMessageMode: mode,
    },
  );
};
