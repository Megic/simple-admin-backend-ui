import { BaseListResp } from '/@/api/model/baseModel';

/**
 *  @description: ProductTag info response
 */
export interface ProductTagInfo {
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
  remark?: string;
}

/**
 *  @description: ProductTag list response
 */

export type ProductTagListResp = BaseListResp<ProductTagInfo>;
