import { BaseListResp } from '/@/api/model/baseModel';

/**
 *  @description: Absence info response
 */
export interface AbsenceInfo {
  id: number;
  createdAt?: number;
  updatedAt?: number;
  status?: number;
  studentName?: string;
  studentNo?: string;
  isStay?: number;
  class?: string;
  grade?: string;
  schoolSection?: string;
  faculty?: string;
  checkDay?: number;
  dailyDay?: number;
  reportDay?: number;
  onsetDay?: number;
  absenceDay?: number;
  temperature?: number;
  backDay?: number;
  backFiles?: string;
  diagnosis?: string;
  doctorName?: string;
  doctorKey?: number;
  isolationId?: number;
}

/**
 *  @description: Absence list response
 */

export type AbsenceListResp = BaseListResp<AbsenceInfo>;
