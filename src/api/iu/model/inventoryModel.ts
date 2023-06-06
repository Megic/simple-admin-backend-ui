import { BaseListResp } from '/@/api/model/baseModel';

/**
 *  @description: Inventory info response
 */
export interface InventoryInfo {
  id: number;
  createdAt?: number;
  updatedAt?: number;
  status?: number;
  totalCount?: number;
  splitQty?: string;
  quantity?: number;
  stockThreshold?: number;
  productId?: number;
  warehouseId?: number;
}

/**
 *  @description: Inventory list response
 */

export type InventoryListResp = BaseListResp<InventoryInfo>;
