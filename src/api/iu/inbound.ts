import { defHttp } from '/@/utils/http/axios';
import { ErrorMessageMode } from '/#/axios';
import { BaseDataResp, BaseListReq, BaseResp, BaseIDsReq, BaseIDReq } from '/@/api/model/baseModel';
import { InboundInfo, InboundListResp } from './model/inboundModel';

enum Api {
  CreateInbound = '/iu-api/INF/inbound/create',
  UpdateInbound = '/iu-api/INF/inbound/update',
  GetInboundList = '/iu-api/INF/inbound/list',
  DeleteInbound = '/iu-api/INF/inbound/delete',
  GetInboundById = '/iu-api/INF/inbound',
}

/**
 * @description: Get inbound list
 */

export const getInboundList = (params: BaseListReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseDataResp<InboundListResp>>(
    { url: Api.GetInboundList, params },
    { errorMessageMode: mode },
  );
};

/**
 *  @description: Create a new inbound
 */
export const createInbound = (params: InboundInfo, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.CreateInbound, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Update the inbound
 */
export const updateInbound = (params: InboundInfo, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.UpdateInbound, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Delete inbounds
 */
export const deleteInbound = (params: BaseIDsReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.DeleteInbound, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Get inbound By ID
 */
export const getInboundById = (params: BaseIDReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseDataResp<InboundInfo>>(
    { url: Api.GetInboundById, params: params },
    {
      errorMessageMode: mode,
    },
  );
};
