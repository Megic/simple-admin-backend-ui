import { BaseListResp } from '/@/api/model/baseModel';

/**
 *  @description: Inbound info response
 */
export interface InboundInfo {
  id: number;
  createdAt?: number;
  updatedAt?: number;
  status?: number;
  type?: string;
  batchNo?: string;
  factory?: string;
  serialNo?: string;
  productionDate?: number;
  expirationDate?: number;
  unitPrice?: number;
  quantity?: number;
  remark?: string;
  inboundDate?: number;
  originalOutboundId?: string;
  productId?: number;
  warehouseId?: number;
}

/**
 *  @description: Inbound list response
 */

export type InboundListResp = BaseListResp<InboundInfo>;
