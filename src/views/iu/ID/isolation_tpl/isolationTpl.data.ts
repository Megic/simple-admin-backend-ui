import { BasicColumn, FormSchema } from '/@/components/Table';
import { useI18n } from '/@/hooks/web/useI18n';
import { formatToDateTime } from '/@/utils/dateUtil';
import { updateIsolationTpl } from '/@/api/iu/isolationTpl';
import { Switch } from 'ant-design-vue';
import { h } from 'vue';
const { t } = useI18n();

export const columns: BasicColumn[] = [
  {
    title: t('iu.isolationTpl.title'),
    dataIndex: 'title',
    width: 100,
  },
  {
    title: t('iu.isolationTpl.key'),
    dataIndex: 'key',
    width: 100,
  },
  {
    title: t('iu.isolationTpl.content'),
    dataIndex: 'content',
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
          updateIsolationTpl({ id: record.id, status: newStatus })
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
    label: t('iu.isolationTpl.title'),
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'key',
    label: t('iu.isolationTpl.key'),
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'content',
    label: t('iu.isolationTpl.content'),
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
    label: t('iu.isolationTpl.title'),
    component: 'Input',
    required: true,
  },
  {
    field: 'key',
    label: t('iu.isolationTpl.key'),
    component: 'Input',
    required: true,
  },
  {
    field: 'content',
    label: t('iu.isolationTpl.content'),
    component: 'Input',
    required: true,
  },
  {
    field: 'status',
    label: t('iu.isolationTpl.status'),
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
