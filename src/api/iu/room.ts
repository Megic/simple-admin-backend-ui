import { defHttp } from '/@/utils/http/axios';
import { ErrorMessageMode } from '/#/axios';
import { BaseDataResp, BaseListReq, BaseResp, BaseIDsReq, BaseIDReq } from '/@/api/model/baseModel';
import { RoomInfo, RoomListResp } from './model/roomModel';

enum Api {
  CreateRoom = '/iu-api/OPD/room/create',
  UpdateRoom = '/iu-api/OPD/room/update',
  GetRoomList = '/iu-api/OPD/room/list',
  DeleteRoom = '/iu-api/OPD/room/delete',
  GetRoomById = '/iu-api/OPD/room',
}

/**
 * @description: Get room list
 */

export const getRoomList = (params: BaseListReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseDataResp<RoomListResp>>(
    { url: Api.GetRoomList, params },
    { errorMessageMode: mode },
  );
};

/**
 *  @description: Create a new room
 */
export const createRoom = (params: RoomInfo, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.CreateRoom, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Update the room
 */
export const updateRoom = (params: RoomInfo, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.UpdateRoom, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Delete rooms
 */
export const deleteRoom = (params: BaseIDsReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.DeleteRoom, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Get room By ID
 */
export const getRoomById = (params: BaseIDReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseDataResp<RoomInfo>>(
    { url: Api.GetRoomById, params: params },
    {
      errorMessageMode: mode,
    },
  );
};
