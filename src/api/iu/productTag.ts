import { defHttp } from '/@/utils/http/axios';
import { ErrorMessageMode } from '/#/axios';
import { BaseDataResp, BaseListReq, BaseResp, BaseIDsReq, BaseIDReq } from '/@/api/model/baseModel';
import { ProductTagInfo, ProductTagListResp } from './model/productTagModel';

enum Api {
  CreateProductTag = '/iu-api/INF/product_tag/create',
  UpdateProductTag = '/iu-api/INF/product_tag/update',
  GetProductTagList = '/iu-api/INF/product_tag/list',
  DeleteProductTag = '/iu-api/INF/product_tag/delete',
  GetProductTagById = '/iu-api/INF/product_tag',
}

/**
 * @description: Get product tag list
 */

export const getProductTagList = (params: BaseListReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseDataResp<ProductTagListResp>>(
    { url: Api.GetProductTagList, params },
    { errorMessageMode: mode },
  );
};

/**
 *  @description: Create a new product tag
 */
export const createProductTag = (params: ProductTagInfo, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.CreateProductTag, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Update the product tag
 */
export const updateProductTag = (params: ProductTagInfo, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.UpdateProductTag, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Delete product tags
 */
export const deleteProductTag = (params: BaseIDsReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.DeleteProductTag, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Get product tag By ID
 */
export const getProductTagById = (params: BaseIDReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseDataResp<ProductTagInfo>>(
    { url: Api.GetProductTagById, params: params },
    {
      errorMessageMode: mode,
    },
  );
};
