import { BaseListResp } from '/@/api/model/baseModel';

/**
 *  @description: Student info response
 */
export interface StudentInfo {
  id: number;
  createdAt?: number;
  updatedAt?: number;
  status?: number;
  patientId?: number;
  name?: string;
  no?: string;
  studentNo?: string;
  pname?: string;
  phone?: string;
  pname2?: string;
  phone2?: string;
  isStay?: number;
  cansport?: number;
  class?: string;
  grade?: string;
  schoolSection?: string;
  faculty?: string;
}

/**
 *  @description: Student list response
 */

export type StudentListResp = BaseListResp<StudentInfo>;
