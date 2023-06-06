import { BaseListResp } from '/@/api/model/baseModel';

/**
 *  @description: Outbound info response
 */
export interface OutboundInfo {
  id: number;
  createdAt?: number;
  updatedAt?: number;
  status?: number;
  type?: string;
  outboundDate?: number;
  quantity?: number;
  productId?: number;
  useByName?: string;
  useByKey?: number;
  receivedDeptName?: string;
  receivedDeptKey?: number;
  receivedName?: string;
  receivedBy?: number;
  remark?: string;
  prescriptionNo?: string;
  inventoryListId?: number;
  warehouseId?: number;
}

/**
 *  @description: Outbound list response
 */

export type OutboundListResp = BaseListResp<OutboundInfo>;
