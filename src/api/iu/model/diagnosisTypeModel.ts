import { BaseListResp } from '/@/api/model/baseModel';

/**
 *  @description: DiagnosisType info response
 */
export interface DiagnosisTypeInfo {
  id: number;
  createdAt?: number;
  updatedAt?: number;
  status?: number;
  name?: string;
  level?: number;
  description?: string;
}

/**
 *  @description: DiagnosisType list response
 */

export type DiagnosisTypeListResp = BaseListResp<DiagnosisTypeInfo>;
