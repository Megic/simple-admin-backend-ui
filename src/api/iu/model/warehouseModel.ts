import { BaseListResp } from '/@/api/model/baseModel';

/**
 *  @description: Warehouse info response
 */
export interface WarehouseInfo {
  id: number;
  createdAt?: number;
  updatedAt?: number;
  createdBy?: number;
  updatedBy?: number;
  tenantId?: string;
  appId?: string;
  status?: number;
  name?: string;
  key?: string;
  address?: string;
  description?: string;
}

/**
 *  @description: Warehouse list response
 */

export type WarehouseListResp = BaseListResp<WarehouseInfo>;
