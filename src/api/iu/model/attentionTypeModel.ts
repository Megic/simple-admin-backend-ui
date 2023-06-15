import { BaseListResp } from '/@/api/model/baseModel';

/**
 *  @description: AttentionType info response
 */
export interface AttentionTypeInfo {
  id: number;
  createdAt?: number;
  updatedAt?: number;
  status?: number;
  name?: string;
  level?: number;
  isReferral?: number;
  is120?: number;
  isIsolation?: number;
  isObserve?: number;
}

/**
 *  @description: AttentionType list response
 */

export type AttentionTypeListResp = BaseListResp<AttentionTypeInfo>;
