import { BasicColumn, FormSchema } from '/@/components/Table';
import { useI18n } from '/@/hooks/web/useI18n';
import { formatToDateTime } from '/@/utils/dateUtil';
import { updateOutbound } from '/@/api/iu/outbound';
import { Switch } from 'ant-design-vue';
import { h } from 'vue';
const { t } = useI18n();

export const columns: BasicColumn[] = [
  {
    title: t('iu.outbound.type'),
    dataIndex: 'type',
    width: 100,
  },
  {
    title: t('iu.outbound.outboundDate'),
    dataIndex: 'outboundDate',
    width: 100,
  },
  {
    title: t('iu.outbound.quantity'),
    dataIndex: 'quantity',
    width: 100,
  },
  {
    title: t('iu.outbound.productId'),
    dataIndex: 'productId',
    width: 100,
  },
  {
    title: t('iu.outbound.useByName'),
    dataIndex: 'useByName',
    width: 100,
  },
  {
    title: t('iu.outbound.useByKey'),
    dataIndex: 'useByKey',
    width: 100,
  },
  {
    title: t('iu.outbound.receivedDeptName'),
    dataIndex: 'receivedDeptName',
    width: 100,
  },
  {
    title: t('iu.outbound.receivedDeptKey'),
    dataIndex: 'receivedDeptKey',
    width: 100,
  },
  {
    title: t('iu.outbound.receivedName'),
    dataIndex: 'receivedName',
    width: 100,
  },
  {
    title: t('iu.outbound.receivedBy'),
    dataIndex: 'receivedBy',
    width: 100,
  },
  {
    title: t('iu.outbound.remark'),
    dataIndex: 'remark',
    width: 100,
  },
  {
    title: t('iu.outbound.prescriptionNo'),
    dataIndex: 'prescriptionNo',
    width: 100,
  },
  {
    title: t('iu.outbound.inventoryListId'),
    dataIndex: 'inventoryListId',
    width: 100,
  },
  {
    title: t('iu.outbound.warehouseId'),
    dataIndex: 'warehouseId',
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
          updateOutbound({ id: record.id, status: newStatus })
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
    field: 'type',
    label: t('iu.outbound.type'),
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'useByName',
    label: t('iu.outbound.useByName'),
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'receivedDeptName',
    label: t('iu.outbound.receivedDeptName'),
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

  {
    field: 'type',
    label: t('iu.outbound.type'),
    component: 'Input',
    required: true,
  },
  {
    field: 'outboundDate',
    label: t('iu.outbound.outboundDate'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'quantity',
    label: t('iu.outbound.quantity'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'productId',
    label: t('iu.outbound.productId'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'useByName',
    label: t('iu.outbound.useByName'),
    component: 'Input',
    required: true,
  },
  {
    field: 'useByKey',
    label: t('iu.outbound.useByKey'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'receivedDeptName',
    label: t('iu.outbound.receivedDeptName'),
    component: 'Input',
    required: true,
  },
  {
    field: 'receivedDeptKey',
    label: t('iu.outbound.receivedDeptKey'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'receivedName',
    label: t('iu.outbound.receivedName'),
    component: 'Input',
    required: true,
  },
  {
    field: 'receivedBy',
    label: t('iu.outbound.receivedBy'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'remark',
    label: t('iu.outbound.remark'),
    component: 'Input',
    required: true,
  },
  {
    field: 'prescriptionNo',
    label: t('iu.outbound.prescriptionNo'),
    component: 'Input',
    required: true,
  },
  {
    field: 'inventoryListId',
    label: t('iu.outbound.inventoryListId'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'warehouseId',
    label: t('iu.outbound.warehouseId'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'status',
    label: t('iu.outbound.status'),
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
