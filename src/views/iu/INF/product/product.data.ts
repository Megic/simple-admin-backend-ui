import { BasicColumn, FormSchema } from '/@/components/Table';
import { useI18n } from '/@/hooks/web/useI18n';
import { formatToDateTime } from '/@/utils/dateUtil';
import { updateProduct } from '/@/api/iu/product';
import { Switch } from 'ant-design-vue';
import { getProductTagList } from '/@/api/iu/productTag';
import { h } from 'vue';
const { t } = useI18n();
import { getDictionaryByName } from '/@/api/sys/dictionary';

export const columns: BasicColumn[] = [
  {
    title: t('iu.product.createdBy'),
    dataIndex: 'createdBy',
    width: 100,
  },
  {
    title: t('iu.product.updatedBy'),
    dataIndex: 'updatedBy',
    width: 100,
  },
  {
    title: t('iu.product.tenantId'),
    dataIndex: 'tenantId',
    width: 100,
  },
  {
    title: t('iu.product.appId'),
    dataIndex: 'appId',
    width: 100,
  },
  {
    title: t('iu.product.type'),
    dataIndex: 'type',
    width: 100,
  },
  {
    title: t('iu.product.tag'),
    dataIndex: 'tag',
    width: 100,
  },
  {
    title: t('iu.product.dose'),
    dataIndex: 'dose',
    width: 100,
  },
  {
    title: t('iu.product.doseUnit'),
    dataIndex: 'doseUnit',
    width: 100,
  },
  {
    title: t('iu.product.activeIngredient'),
    dataIndex: 'activeIngredient',
    width: 100,
  },
  {
    title: t('iu.product.activeIngredientUnit'),
    dataIndex: 'activeIngredientUnit',
    width: 100,
  },
  {
    title: t('iu.product.preparation'),
    dataIndex: 'preparation',
    width: 100,
  },
  {
    title: t('iu.product.preparationUnit'),
    dataIndex: 'preparationUnit',
    width: 100,
  },
  {
    title: t('iu.product.package'),
    dataIndex: 'package',
    width: 100,
  },
  {
    title: t('iu.product.price'),
    dataIndex: 'price',
    width: 100,
  },
  {
    title: t('iu.product.splitable'),
    dataIndex: 'splitable',
    width: 100,
  },
  {
    title: t('iu.product.splitPrice'),
    dataIndex: 'splitPrice',
    width: 100,
  },
  {
    title: t('iu.product.genericName'),
    dataIndex: 'genericName',
    width: 100,
  },
  {
    title: t('iu.product.manufacturer'),
    dataIndex: 'manufacturer',
    width: 100,
  },
  {
    title: t('iu.product.category'),
    dataIndex: 'category',
    width: 100,
  },
  {
    title: t('iu.product.dosageForm'),
    dataIndex: 'dosageForm',
    width: 100,
  },
  {
    title: t('iu.product.productName'),
    dataIndex: 'productName',
    width: 100,
  },
  {
    title: t('iu.product.approvalNumber'),
    dataIndex: 'approvalNumber',
    width: 100,
  },
  {
    title: t('iu.product.barcode'),
    dataIndex: 'barcode',
    width: 100,
  },
  {
    title: t('iu.product.usage'),
    dataIndex: 'usage',
    width: 100,
  },
  {
    title: t('iu.product.pharmacologicalClassification'),
    dataIndex: 'pharmacologicalClassification',
    width: 100,
  },
  {
    title: t('iu.product.prescription'),
    dataIndex: 'prescription',
    width: 100,
  },
  {
    title: t('iu.product.skinTest'),
    dataIndex: 'skinTest',
    width: 100,
  },
  {
    title: t('iu.product.instructions'),
    dataIndex: 'instructions',
    width: 100,
  },
  {
    title: t('iu.product.costCount'),
    dataIndex: 'costCount',
    width: 100,
  },
  {
    title: t('iu.product.enabled'),
    dataIndex: 'enabled',
    width: 100,
  },
  {
    title: t('iu.product.location'),
    dataIndex: 'location',
    width: 100,
  },
  {
    title: t('iu.product.stockThreshold'),
    dataIndex: 'stockThreshold',
    width: 100,
  },
  {
    title: t('common.status'),
    dataIndex: 'status',
    width: 50,
    customRender: ({ record }) => {
      if (!Reflect.has(record, 'pendingStatus')) {
        record.pendingStatus = false;
      }
      return h(Switch, {
        checked: record.status === 1,
        checkedChildren: t('common.on'),
        unCheckedChildren: t('common.off'),
        loading: record.pendingStatus,
        onChange(checked, _) {
          record.pendingStatus = true;
          const newStatus = checked ? 1 : 2;
          updateProduct({ id: record.id, status: newStatus })
            .then(() => {
              record.status = newStatus;
            })
            .finally(() => {
              record.pendingStatus = false;
            });
        },
      });
    },
  },
  {
    title: t('common.createTime'),
    dataIndex: 'createdAt',
    width: 70,
    customRender: ({ record }) => {
      return formatToDateTime(record.createdAt);
    },
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'tenantId',
    label: t('iu.product.tenantId'),
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'appId',
    label: t('iu.product.appId'),
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'tag',
    label: t('iu.product.tag'),
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const formSchema: FormSchema[] = [

  {
    field: 'id',
    label: 'ID',
    component: 'Input',
    show: false,
  },

  // {
  //   field: 'createdBy',
  //   label: t('iu.product.createdBy'),
  //   component: 'InputNumber',
  //   required: true,
  // },
  // {
  //   field: 'updatedBy',
  //   label: t('iu.product.updatedBy'),
  //   component: 'InputNumber',
  //   required: true,
  // },
  // {
  //   field: 'tenantId',
  //   label: t('iu.product.tenantId'),
  //   component: 'Input',
  //   required: true,
  // },
  // {
  //   field: 'appId',
  //   label: t('iu.product.appId'),
  //   component: 'Input',
  //   required: true,
  // },
  {
    field: 'type',
    label: t('iu.product.type'),
    component: 'RadioButtonGroup',
    defaultValue: 1,
    componentProps: {
      options: [
        { label: t('iu.product.type1'), value: 1 },
        { label: t('iu.product.type2'), value: 2 },
        { label: t('iu.product.type3'), value: 3 },
      ],
    },
    colProps: {
      span: 12,
    },
  },
  {
    field: 'tag',
    label: t('iu.product.tag'),
    colProps: {
      span: 12,
    },
    component: 'ApiSelect',
    componentProps: {
      api: getProductTagList,
      params: {
        page: 1,
        pageSize: 1000,
      },
      resultField: 'data.data',
      labelField: 'name',
      valueField: 'name',
    },
  },
  {
    field: 'divider-basic',
    component: 'Divider',
    label: '基础信息',
    colProps: {
      span: 24,
    },
  },
  {
    field: 'category',
    label: t('iu.product.category'),
    required: true,
    component: 'ApiSelect',
    componentProps: {
      api: getDictionaryByName,
      params: {
        name: 'DrugType',
      },
      resultField: 'data.data',
      labelField: 'title',
      valueField: 'title',
    },
  },
  {
    field: 'dosageForm',
    label: t('iu.product.dosageForm'),
    required: true,
    component: 'ApiSelect',
    componentProps: {
      api: getDictionaryByName,
      params: {
        name: 'DrugForm',
      },
      resultField: 'data.data',
      labelField: 'title',
      valueField: 'title',
    },
  },
  {
    field: 'genericName',
    label: t('iu.product.genericName'),
    component: 'Input',
    required: true,
  },
  {
    field: 'productName',
    label: t('iu.product.productName'),
    colProps: {
      span: 12,
    },
    component: 'Input',
  },
  {
    field: 'manufacturer',
    label: t('iu.product.manufacturer'),
    colProps: {
      span: 12,
    },
    component: 'Input',
  },
  {
    field: 'approvalNumber',
    label: t('iu.product.approvalNumber'),
    colProps: {
      span: 12,
    },
    component: 'Input',
  },
  {
    field: 'barcode',
    label: t('iu.product.barcode'),
    colProps: {
      span: 12,
    },
    component: 'Input',
  },
  {
    field: 'pharmacologicalClassification',
    label: t('iu.product.pharmacologicalClassification'),
    component: 'ApiSelect',
    componentProps: {
      api: getDictionaryByName,
      params: {
        name: 'PharmacologicalType',
      },
      resultField: 'data.data',
      labelField: 'title',
      valueField: 'value',
    },
  },
  {
    field: 'usage',
    label: t('iu.product.usage'),
    component: 'ApiSelect',
    labelWidth:50,
    componentProps: {
      api: getDictionaryByName,
      params: {
        name: 'UsageType',
      },
      resultField: 'data.data',
      labelField: 'title',
      valueField: 'title',
    },
  },
  {
    field: 'prescription',
    label: t('iu.product.prescription'),
    component: 'RadioButtonGroup',
    defaultValue: 0,
    componentProps: {
      options: [
        { label: t('common.yes'), value: 1 },
        { label: t('common.no'), value: 0 },
      ],
    },
  },
  {
    field: 'skinTest',
    label: t('iu.product.skinTest'),
    component: 'RadioButtonGroup',
    defaultValue: 0,
    componentProps: {
      options: [
        { label: t('common.yes'), value: 1 },
        { label: t('common.no'), value: 0 },
      ],
    },
  },
  {
    field: 'instructions',
    label: t('iu.product.instructions'),
    component: 'InputTextArea',
    colProps: {
      span: 24,
    },
  },
  {
    field: 'divider-api-select',
    component: 'Divider',
    label: '规格信息',
    colProps: {
      span: 24,
    },
  },
  {
    field: 'dose',
    label: t('iu.product.dose'),
    component: 'InputNumber',
    componentProps: {
    min:0
    }
  },
  {
    field: 'doseUnit',
    label: '',
    component: 'ApiSelect',
    componentProps: {
      placeholder: '单位',
      api: getDictionaryByName,
      params: {
        name: 'DoseUnit',
      },
      resultField: 'data.data',
      labelField: 'title',
      valueField: 'title',
    },
  },
  {
    field: 'activeIngredient',
    label: t('iu.product.activeIngredient'),
    component: 'InputNumber',
    componentProps: {
    min:0
    }
  },
  {
    field: 'activeIngredientUnit',
    label: '',
    component: 'ApiSelect',
    componentProps: {
      placeholder: '单位',
      api: getDictionaryByName,
      params: {
        name: 'DoseUnit',
      },
      resultField: 'data.data',
      labelField: 'title',
      valueField: 'title',
    },
  },
  {
    field: 'preparation',
    label: t('iu.product.preparation'),
    required: true,
    component: 'InputNumber',
    componentProps: {
    min:0
    }
  },
  {
    field: 'preparationUnit',
    label: '',
    required: true,
    component: 'ApiSelect',
    componentProps: {
      placeholder: '单位',
      api: getDictionaryByName,
      params: {
        name: 'PackageType',
      },
      resultField: 'data.data',
      labelField: 'title',
      valueField: 'title',
    },
  },
  {
    field: 'package',
    label: t('iu.product.package'),
    required: true,
    component: 'ApiSelect',
    componentProps: {
      api: getDictionaryByName,
      params: {
        name: 'PackageType',
      },
      resultField: 'data.data',
      labelField: 'title',
      valueField: 'title',
    },
  },
  {
    field: 'divider-api-select',
    component: 'Divider',
    label: '扩展信息',
    colProps: {
      span: 24,
    },
  },
  {
    field: 'price',
    label: t('iu.product.price'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'splitable',
    label: t('iu.product.splitable'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'splitPrice',
    label: t('iu.product.splitPrice'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'costCount',
    label: t('iu.product.costCount'),
    component: 'RadioButtonGroup',
    defaultValue: 0,
    componentProps: {
      options: [
        { label: t('common.yes'), value: 1 },
        { label: t('common.no'), value: 0 },
      ],
    },
  },
  {
    field: 'enabled',
    label: t('iu.product.enabled'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'location',
    label: t('iu.product.location'),
    component: 'Input',
  },
  {
    field: 'stockThreshold',
    label: t('iu.product.stockThreshold'),
    defaultValue: 0,
    component: 'InputNumber',
    componentProps: {
    min:0
    },
  },
  {
    field: 'status',
    label: t('iu.product.status'),
    component: 'RadioButtonGroup',
    defaultValue: 1,
    componentProps: {
      options: [
        { label: t('common.on'), value: 1 },
        { label: t('common.off'), value: 2 },
      ],
    },
  },
];
