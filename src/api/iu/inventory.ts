import { defHttp } from '/@/utils/http/axios';
import { ErrorMessageMode } from '/#/axios';
import { BaseDataResp, BaseListReq, BaseResp, BaseIDsReq, BaseIDReq } from '/@/api/model/baseModel';
import { InventoryInfo, InventoryListResp } from './model/inventoryModel';

enum Api {
  CreateInventory = '/iu-api/INF/inventory/create',
  UpdateInventory = '/iu-api/INF/inventory/update',
  GetInventoryList = '/iu-api/INF/inventory/list',
  DeleteInventory = '/iu-api/INF/inventory/delete',
  GetInventoryById = '/iu-api/INF/inventory',
}

/**
 * @description: Get inventory list
 */

export const getInventoryList = (params: BaseListReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseDataResp<InventoryListResp>>(
    { url: Api.GetInventoryList, params },
    { errorMessageMode: mode },
  );
};

/**
 *  @description: Create a new inventory
 */
export const createInventory = (params: InventoryInfo, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.CreateInventory, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Update the inventory
 */
export const updateInventory = (params: InventoryInfo, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.UpdateInventory, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Delete inventorys
 */
export const deleteInventory = (params: BaseIDsReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.DeleteInventory, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Get inventory By ID
 */
export const getInventoryById = (params: BaseIDReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseDataResp<InventoryInfo>>(
    { url: Api.GetInventoryById, params: params },
    {
      errorMessageMode: mode,
    },
  );
};
