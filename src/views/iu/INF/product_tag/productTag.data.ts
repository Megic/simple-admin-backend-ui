import { BasicColumn, FormSchema } from '/@/components/Table';
import { useI18n } from '/@/hooks/web/useI18n';
import { formatToDateTime } from '/@/utils/dateUtil';
import { updateProductTag } from '/@/api/iu/productTag';
import { Switch } from 'ant-design-vue';
import { h } from 'vue';
const { t } = useI18n();

export const columns: BasicColumn[] = [
  // {
  //   title: t('iu.productTag.createdBy'),
  //   dataIndex: 'createdBy',
  //   width: 100,
  // },
  // {
  //   title: t('iu.productTag.updatedBy'),
  //   dataIndex: 'updatedBy',
  //   width: 100,
  // },
  // {
  //   title: t('iu.productTag.tenantId'),
  //   dataIndex: 'tenantId',
  //   width: 100,
  // },
  // {
  //   title: t('iu.productTag.appId'),
  //   dataIndex: 'appId',
  //   width: 100,
  // },
  {
    title: t('iu.productTag.name'),
    dataIndex: 'name',
    width: 100,
  },
  {
    title: t('iu.productTag.key'),
    dataIndex: 'key',
    width: 100,
  },
  {
    title: t('iu.productTag.remark'),
    dataIndex: 'remark',
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
          updateProductTag({ id: record.id, status: newStatus })
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
  // {
  //   field: 'tenantId',
  //   label: t('iu.productTag.tenantId'),
  //   component: 'Input',
  //   colProps: { span: 8 },
  // },
  // {
  //   field: 'appId',
  //   label: t('iu.productTag.appId'),
  //   component: 'Input',
  //   colProps: { span: 8 },
  // },
  {
    field: 'name',
    label: t('iu.productTag.name'),
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
  //   label: t('iu.productTag.createdBy'),
  //   component: 'InputNumber',
  //   required: true,
  // },
  // {
  //   field: 'updatedBy',
  //   label: t('iu.productTag.updatedBy'),
  //   component: 'InputNumber',
  //   required: true,
  // },
  // {
  //   field: 'tenantId',
  //   label: t('iu.productTag.tenantId'),
  //   component: 'Input',
  //   required: true,
  // },
  // {
  //   field: 'appId',
  //   label: t('iu.productTag.appId'),
  //   component: 'Input',
  //   required: true,
  // },
  {
    field: 'name',
    label: t('iu.productTag.name'),
    component: 'Input',
    required: true,
  },
  {
    field: 'key',
    label: t('iu.productTag.key'),
    component: 'Input',
    required: false,
  },
  {
    field: 'remark',
    label: t('iu.productTag.remark'),
    component: 'Input',
    required: false,
  },
  {
    field: 'status',
    label: t('iu.productTag.status'),
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
