import { BaseListResp } from '/@/api/model/baseModel';

/**
 *  @description: Room info response
 */
export interface RoomInfo {
  id: number;
  createdAt?: number;
  updatedAt?: number;
  status?: number;
  name?: string;
  address?: string;
  description?: string;
  deptName?: string;
  deptKey?: number;
}

/**
 *  @description: Room list response
 */

export type RoomListResp = BaseListResp<RoomInfo>;
