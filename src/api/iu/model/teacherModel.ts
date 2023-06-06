import { BaseListResp } from '/@/api/model/baseModel';

/**
 *  @description: Teacher info response
 */
export interface TeacherInfo {
  id: number;
  createdAt?: number;
  updatedAt?: number;
  status?: number;
  patientId?: number;
  name?: string;
  no?: string;
  wphone?: string;
  deparment?: string;
  faculty?: string;
}

/**
 *  @description: Teacher list response
 */

export type TeacherListResp = BaseListResp<TeacherInfo>;
