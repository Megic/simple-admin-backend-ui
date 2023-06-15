import { BaseListResp } from '/@/api/model/baseModel';

/**
 *  @description: SchoolOutpatient info response
 */
export interface SchoolOutpatientInfo {
  id: number;
  createdAt?: number;
  updatedAt?: number;
  status?: number;
  no?: string;
  patientType?: number;
  patientKey?: string;
  patientName?: string;
  patientSex?: number;
  patientAge?: string;
  patientClass?: string;
  patientGrade?: string;
  patientSchoolSection?: string;
  patientFaculty?: string;
  patientDeptName?: string;
  patientDeptKey?: number;
  doctorName?: string;
  doctorKey?: number;
  roomName?: string;
  roomId?: number;
  deptName?: string;
  deptKey?: number;
  time?: number;
  height?: number;
  weight?: number;
  diastolic?: number;
  systolic?: number;
  breathe?: number;
  pulse?: number;
  oxygen?: number;
  temperature?: number;
  examine?: string;
  diagnosisType?: string;
  symptom?: string;
  treat?: string;
  attentionName?: string;
  attentionId?: string;
}

/**
 *  @description: SchoolOutpatient list response
 */

export type SchoolOutpatientListResp = BaseListResp<SchoolOutpatientInfo>;
