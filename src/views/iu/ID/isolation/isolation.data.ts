import { BasicColumn, FormSchema } from '/@/components/Table';
import { useI18n } from '/@/hooks/web/useI18n';
import { formatToDateTime } from '/@/utils/dateUtil';
import { updateIsolation } from '/@/api/iu/isolation';
import { Switch } from 'ant-design-vue';
import { h } from 'vue';
const { t } = useI18n();

export const columns: BasicColumn[] = [
  {
    title: t('iu.isolation.title'),
    dataIndex: 'title',
    width: 100,
  },
  {
    title: t('iu.isolation.describe'),
    dataIndex: 'describe',
    width: 100,
  },
  {
    title: t('iu.isolation.note'),
    dataIndex: 'note',
    width: 100,
  },
  {
    title: t('iu.isolation.guidelines'),
    dataIndex: 'guidelines',
    width: 100,
  },
  {
    title: t('iu.isolation.days'),
    dataIndex: 'days',
    width: 100,
  },
  {
    title: t('iu.isolation.recordTitle'),
    dataIndex: 'recordTitle',
    width: 100,
  },
  {
    title: t('iu.isolation.recordItem'),
    dataIndex: 'recordItem',
    width: 100,
  },
  {
    title: t('iu.isolation.tpl'),
    dataIndex: 'tpl',
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
          updateIsolation({ id: record.id, status: newStatus })
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
    width: 150,
    customRender: ({ record }) => {
      return formatToDateTime(record.createdAt);
    },
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'title',
    label: t('iu.isolation.title'),
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'describe',
    label: t('iu.isolation.describe'),
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'note',
    label: t('iu.isolation.note'),
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
    field: 'title',
    label: t('iu.isolation.title'),
    component: 'Input',
    required: true,
  },
  {
    field: 'describe',
    label: t('iu.isolation.describe'),
    component: 'Input',
    required: true,
  },
  {
    field: 'note',
    label: t('iu.isolation.note'),
    component: 'Input',
    required: true,
  },
  {
    field: 'guidelines',
    label: t('iu.isolation.guidelines'),
    component: 'Input',
    required: true,
  },
  {
    field: 'days',
    label: t('iu.isolation.days'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'recordTitle',
    label: t('iu.isolation.recordTitle'),
    component: 'Input',
    required: true,
  },
  {
    field: 'recordItem',
    label: t('iu.isolation.recordItem'),
    component: 'Input',
    required: true,
  },
  {
    field: 'tpl',
    label: t('iu.isolation.tpl'),
    component: 'Input',
    required: true,
  },
  {
    field: 'status',
    label: t('iu.isolation.status'),
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
