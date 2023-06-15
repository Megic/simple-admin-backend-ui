import { defHttp } from '/@/utils/http/axios';
import { ErrorMessageMode } from '/#/axios';
import { BaseDataResp, BaseListReq, BaseResp, BaseIDsReq, BaseIDReq } from '/@/api/model/baseModel';
import { IsolationInfo, IsolationListResp } from './model/isolationModel';

enum Api {
  CreateIsolation = '/iu-api/ID/isolation/create',
  UpdateIsolation = '/iu-api/ID/isolation/update',
  GetIsolationList = '/iu-api/ID/isolation/list',
  DeleteIsolation = '/iu-api/ID/isolation/delete',
  GetIsolationById = '/iu-api/ID/isolation',
}

/**
 * @description: Get isolation list
 */

export const getIsolationList = (params: BaseListReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseDataResp<IsolationListResp>>(
    { url: Api.GetIsolationList, params },
    { errorMessageMode: mode },
  );
};

/**
 *  @description: Create a new isolation
 */
export const createIsolation = (params: IsolationInfo, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.CreateIsolation, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Update the isolation
 */
export const updateIsolation = (params: IsolationInfo, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.UpdateIsolation, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Delete isolations
 */
export const deleteIsolation = (params: BaseIDsReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.DeleteIsolation, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Get isolation By ID
 */
export const getIsolationById = (params: BaseIDReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseDataResp<IsolationInfo>>(
    { url: Api.GetIsolationById, params: params },
    {
      errorMessageMode: mode,
    },
  );
};
