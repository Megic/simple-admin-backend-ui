import { defHttp } from '/@/utils/http/axios';
import { ErrorMessageMode } from '/#/axios';
import { BaseDataResp, BaseListReq, BaseResp, BaseIDsReq, BaseIDReq } from '/@/api/model/baseModel';
import { AttentionTypeInfo, AttentionTypeListResp } from './model/attentionTypeModel';

enum Api {
  CreateAttentionType = '/iu-api/OPD/attention_type/create',
  UpdateAttentionType = '/iu-api/OPD/attention_type/update',
  GetAttentionTypeList = '/iu-api/OPD/attention_type/list',
  DeleteAttentionType = '/iu-api/OPD/attention_type/delete',
  GetAttentionTypeById = '/iu-api/OPD/attention_type',
}

/**
 * @description: Get attention type list
 */

export const getAttentionTypeList = (params: BaseListReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseDataResp<AttentionTypeListResp>>(
    { url: Api.GetAttentionTypeList, params },
    { errorMessageMode: mode },
  );
};

/**
 *  @description: Create a new attention type
 */
export const createAttentionType = (params: AttentionTypeInfo, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.CreateAttentionType, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Update the attention type
 */
export const updateAttentionType = (params: AttentionTypeInfo, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.UpdateAttentionType, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Delete attention types
 */
export const deleteAttentionType = (params: BaseIDsReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.DeleteAttentionType, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Get attention type By ID
 */
export const getAttentionTypeById = (params: BaseIDReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseDataResp<AttentionTypeInfo>>(
    { url: Api.GetAttentionTypeById, params: params },
    {
      errorMessageMode: mode,
    },
  );
};
