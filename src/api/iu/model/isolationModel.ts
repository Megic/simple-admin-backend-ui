import { BaseListResp } from '/@/api/model/baseModel';

/**
 *  @description: Isolation info response
 */
export interface IsolationInfo {
  id: number;
  createdAt?: number;
  updatedAt?: number;
  status?: number;
  title?: string;
  describe?: string;
  note?: string;
  guidelines?: string;
  days?: number;
  recordTitle?: string;
  recordItem?: string;
  tpl?: string;
}

/**
 *  @description: Isolation list response
 */

export type IsolationListResp = BaseListResp<IsolationInfo>;
