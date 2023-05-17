import { BaseListResp } from '/@/api/model/baseModel';

/**
 *  @description: Product info response
 */
export interface ProductInfo {
  id: number;
  createdAt?: number;
  updatedAt?: number;
  createdBy?: number;
  updatedBy?: number;
  tenantId?: string;
  appId?: string;
  status?: number;
  type?: number;
  tag?: string;
  dose?: number;
  doseUnit?: string;
  activeIngredient?: string;
  activeIngredientUnit?: string;
  preparation?: string;
  preparationUnit?: string;
  package?: string;
  price?: number;
  splitable?: number;
  splitPrice?: number;
  genericName?: string;
  manufacturer?: string;
  category?: string;
  dosageForm?: string;
  productName?: string;
  approvalNumber?: string;
  barcode?: string;
  usage?: string;
  pharmacologicalClassification?: string;
  prescription?: number;
  skinTest?: number;
  instructions?: string;
  costCount?: number;
  enabled?: number;
  location?: string;
  stockThreshold?: number;
}

/**
 *  @description: Product list response
 */

export type ProductListResp = BaseListResp<ProductInfo>;
