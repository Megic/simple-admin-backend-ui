import { defHttp } from '/@/utils/http/axios';
import { ErrorMessageMode } from '/#/axios';
import { BaseDataResp, BaseListReq, BaseResp, BaseIDsReq, BaseIDReq } from '/@/api/model/baseModel';
import { PatientInfo, PatientListResp } from './model/patientModel';

enum Api {
  CreatePatient = '/iu-api/ORG/patient/create',
  UpdatePatient = '/iu-api/ORG/patient/update',
  GetPatientList = '/iu-api/ORG/patient/list',
  DeletePatient = '/iu-api/ORG/patient/delete',
  GetPatientById = '/iu-api/ORG/patient',
}

/**
 * @description: Get patient list
 */

export const getPatientList = (params: BaseListReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseDataResp<PatientListResp>>(
    { url: Api.GetPatientList, params },
    { errorMessageMode: mode },
  );
};

/**
 *  @description: Create a new patient
 */
export const createPatient = (params: PatientInfo, mode: ErrorMessageMode = 'notice') => {
  params.allergyHistory=JSON.stringify(params.allergyHistory)
  params.medicalHistory=JSON.stringify(params.medicalHistory)
  return defHttp.post<BaseResp>(
    { url: Api.CreatePatient, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Update the patient
 */
export const updatePatient = (params: PatientInfo, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.UpdatePatient, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Delete patients
 */
export const deletePatient = (params: BaseIDsReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.DeletePatient, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Get patient By ID
 */
export const getPatientById = (params: BaseIDReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseDataResp<PatientInfo>>(
    { url: Api.GetPatientById, params: params },
    {
      errorMessageMode: mode,
    },
  );
};
