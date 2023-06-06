import { BaseListResp } from '/@/api/model/baseModel';

/**
 *  @description: InventoryItem info response
 */
export interface InventoryItemInfo {
  id: number;
  createdAt?: number;
  updatedAt?: number;
  status?: number;
  splitQty?: string;
  quantity?: number;
  batchNo?: string;
  factory?: string;
  productionDate?: number;
  expirationDate?: number;
  unitPrice?: number;
  inboundId?: number;
  productId?: number;
  warehouseId?: number;
}

/**
 *  @description: InventoryItem list response
 */

export type InventoryItemListResp = BaseListResp<InventoryItemInfo>;
