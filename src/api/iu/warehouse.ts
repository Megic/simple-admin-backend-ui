import { defHttp } from '/@/utils/http/axios';
import { ErrorMessageMode } from '/#/axios';
import { BaseDataResp, BaseListReq, BaseResp, BaseIDsReq, BaseIDReq } from '/@/api/model/baseModel';
import { WarehouseInfo, WarehouseListResp } from './model/warehouseModel';

enum Api {
  CreateWarehouse = '/iu-api/INF/warehouse/create',
  UpdateWarehouse = '/iu-api/INF/warehouse/update',
  GetWarehouseList = '/iu-api/INF/warehouse/list',
  DeleteWarehouse = '/iu-api/INF/warehouse/delete',
  GetWarehouseById = '/iu-api/INF/warehouse',
}

/**
 * @description: Get warehouse list
 */

export const getWarehouseList = (params: BaseListReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseDataResp<WarehouseListResp>>(
    { url: Api.GetWarehouseList, params },
    { errorMessageMode: mode },
  );
};

/**
 *  @description: Create a new warehouse
 */
export const createWarehouse = (params: WarehouseInfo, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.CreateWarehouse, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Update the warehouse
 */
export const updateWarehouse = (params: WarehouseInfo, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.UpdateWarehouse, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Delete warehouses
 */
export const deleteWarehouse = (params: BaseIDsReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.DeleteWarehouse, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Get warehouse By ID
 */
export const getWarehouseById = (params: BaseIDReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseDataResp<WarehouseInfo>>(
    { url: Api.GetWarehouseById, params: params },
    {
      errorMessageMode: mode,
    },
  );
};
