import { BasicColumn, FormSchema } from '/@/components/Table';
import { useI18n } from '/@/hooks/web/useI18n';
import { formatToDateTime } from '/@/utils/dateUtil';
import { updateAttentionType } from '/@/api/iu/attentionType';
import { Switch } from 'ant-design-vue';
import { h } from 'vue';
const { t } = useI18n();

export const columns: BasicColumn[] = [
  {
    title: t('iu.attentionType.name'),
    dataIndex: 'name',
    width: 100,
  },
  {
    title: t('iu.attentionType.level'),
    dataIndex: 'level',
    width: 100,
  },
  {
    title: t('iu.attentionType.isReferral'),
    dataIndex: 'isReferral',
    width: 100,
  },
  {
    title: t('iu.attentionType.is120'),
    dataIndex: 'is120',
    width: 100,
  },
  {
    title: t('iu.attentionType.isIsolation'),
    dataIndex: 'isIsolation',
    width: 100,
  },
  {
    title: t('iu.attentionType.isObserve'),
    dataIndex: 'isObserve',
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
          updateAttentionType({ id: record.id, status: newStatus })
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
    field: 'name',
    label: t('iu.attentionType.name'),
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
    field: 'name',
    label: t('iu.attentionType.name'),
    component: 'Input',
    required: true,
    colProps: {
      span: 24,
    },
  },
  {
    field: 'level',
    label: t('iu.attentionType.level'),
    colProps: {
      span: 23,
    },
    component: 'Slider',
    defaultValue: 0,
    componentProps: {
      min: 0,
      max: 10,
      marks: {
        0: '等级0',
        5: '等级5',
        10: '等级10',
      },
    },
    // required: true,
  },
  {
    field: 'isReferral',
    label: t('iu.attentionType.isReferral'),
    defaultValue: 0,
    component: 'RadioButtonGroup',
    componentProps: {
      options: [
        { label: t('common.yes'), value: 1 },
        { label: t('common.no'), value: 0 },
      ],
    },
  },
  {
    field: 'is120',
    label: t('iu.attentionType.is120'),
    defaultValue: 0,
    component: 'RadioButtonGroup',
    componentProps: {
      options: [
        { label: t('common.yes'), value: 1 },
        { label: t('common.no'), value: 0 },
      ],
    },
  },
  {
    field: 'isIsolation',
    label: t('iu.attentionType.isIsolation'),
    defaultValue: 0,
    component: 'RadioButtonGroup',
    componentProps: {
      options: [
        { label: t('common.yes'), value: 1 },
        { label: t('common.no'), value: 0 },
      ],
    },
  },
  {
    field: 'isObserve',
    label: t('iu.attentionType.isObserve'),
    defaultValue: 0,
    component: 'RadioButtonGroup',
    componentProps: {
      options: [
        { label: t('common.yes'), value: 1 },
        { label: t('common.no'), value: 0 },
      ],
    },
  },
  {
    field: 'status',
    label: t('iu.attentionType.status'),
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
