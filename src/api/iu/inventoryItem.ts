import { defHttp } from '/@/utils/http/axios';
import { ErrorMessageMode } from '/#/axios';
import { BaseDataResp, BaseListReq, BaseResp, BaseIDsReq, BaseIDReq } from '/@/api/model/baseModel';
import { InventoryItemInfo, InventoryItemListResp } from './model/inventoryItemModel';

enum Api {
  CreateInventoryItem = '/iu-api/INF/inventory_item/create',
  UpdateInventoryItem = '/iu-api/INF/inventory_item/update',
  GetInventoryItemList = '/iu-api/INF/inventory_item/list',
  DeleteInventoryItem = '/iu-api/INF/inventory_item/delete',
  GetInventoryItemById = '/iu-api/INF/inventory_item',
}

/**
 * @description: Get inventory item list
 */

export const getInventoryItemList = (params: BaseListReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseDataResp<InventoryItemListResp>>(
    { url: Api.GetInventoryItemList, params },
    { errorMessageMode: mode },
  );
};

/**
 *  @description: Create a new inventory item
 */
export const createInventoryItem = (params: InventoryItemInfo, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.CreateInventoryItem, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Update the inventory item
 */
export const updateInventoryItem = (params: InventoryItemInfo, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.UpdateInventoryItem, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Delete inventory items
 */
export const deleteInventoryItem = (params: BaseIDsReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.DeleteInventoryItem, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Get inventory item By ID
 */
export const getInventoryItemById = (params: BaseIDReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseDataResp<InventoryItemInfo>>(
    { url: Api.GetInventoryItemById, params: params },
    {
      errorMessageMode: mode,
    },
  );
};
