import { BaseListResp } from '/@/api/model/baseModel';

/**
 *  @description: IsolationTpl info response
 */
export interface IsolationTplInfo {
  id: number;
  createdAt?: number;
  updatedAt?: number;
  status?: number;
  title?: string;
  key?: string;
  content?: string;
}

/**
 *  @description: IsolationTpl list response
 */

export type IsolationTplListResp = BaseListResp<IsolationTplInfo>;
