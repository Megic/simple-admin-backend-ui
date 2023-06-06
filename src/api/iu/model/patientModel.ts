import { BaseListResp } from '/@/api/model/baseModel';

/**
 *  @description: Patient info response
 */
export interface PatientInfo {
  id: number;
  createdAt?: number;
  updatedAt?: number;
  status?: number;
  key?: string;
  type?: number;
  name?: string;
  sex?: number;
  cardType?: number;
  cardNo?: string;
  birth?: string;
  height?: number;
  nation?: string;
  nativePlace?: string;
  country?: string;
  address?: string;
  addressArea?: string;
  addressStreet?: string;
  addressCommunity?: string;
  address2?: string;
  medicalHistory?: string;
  allergyHistory?: string;
}

/**
 *  @description: Patient list response
 */

export type PatientListResp = BaseListResp<PatientInfo>;
