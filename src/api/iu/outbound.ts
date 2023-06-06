import { defHttp } from '/@/utils/http/axios';
import { ErrorMessageMode } from '/#/axios';
import { BaseDataResp, BaseListReq, BaseResp, BaseIDsReq, BaseIDReq } from '/@/api/model/baseModel';
import { OutboundInfo, OutboundListResp } from './model/outboundModel';

enum Api {
  CreateOutbound = '/iu-api/INF/outbound/create',
  UpdateOutbound = '/iu-api/INF/outbound/update',
  GetOutboundList = '/iu-api/INF/outbound/list',
  DeleteOutbound = '/iu-api/INF/outbound/delete',
  GetOutboundById = '/iu-api/INF/outbound',
}

/**
 * @description: Get outbound list
 */

export const getOutboundList = (params: BaseListReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseDataResp<OutboundListResp>>(
    { url: Api.GetOutboundList, params },
    { errorMessageMode: mode },
  );
};

/**
 *  @description: Create a new outbound
 */
export const createOutbound = (params: OutboundInfo, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.CreateOutbound, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Update the outbound
 */
export const updateOutbound = (params: OutboundInfo, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.UpdateOutbound, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Delete outbounds
 */
export const deleteOutbound = (params: BaseIDsReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.DeleteOutbound, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Get outbound By ID
 */
export const getOutboundById = (params: BaseIDReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseDataResp<OutboundInfo>>(
    { url: Api.GetOutboundById, params: params },
    {
      errorMessageMode: mode,
    },
  );
};
