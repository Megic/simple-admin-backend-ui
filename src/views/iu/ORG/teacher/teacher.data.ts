import { BasicColumn, FormSchema } from '/@/components/Table';
import { useI18n } from '/@/hooks/web/useI18n';
import { formatToDateTime } from '/@/utils/dateUtil';
import { updateTeacher } from '/@/api/iu/teacher';
import { Switch } from 'ant-design-vue';
import { getDictionaryByName } from '/@/api/sys/dictionary';
import { h } from 'vue';
const { t } = useI18n();

export const columns: BasicColumn[] = [
  {
    title: t('iu.teacher.patientId'),
    dataIndex: 'patientId',
    width: 100,
  },
  {
    title: t('iu.teacher.name'),
    dataIndex: 'name',
    width: 100,
  },
  {
    title: t('iu.teacher.no'),
    dataIndex: 'no',
    width: 100,
  },
  {
    title: t('iu.teacher.wphone'),
    dataIndex: 'wphone',
    width: 100,
  },
  {
    title: t('iu.teacher.deparment'),
    dataIndex: 'deparment',
    width: 100,
  },
  {
    title: t('iu.teacher.faculty'),
    dataIndex: 'faculty',
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
          updateTeacher({ id: record.id, status: newStatus })
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
    label: t('iu.teacher.name'),
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'no',
    label: t('iu.teacher.no'),
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'wphone',
    label: t('iu.teacher.wphone'),
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'id',
    label: 'ID',
    component: 'InputNumber',
    show: false,
  },
  {
    field: 'divider-basic',
    component: 'Divider',
    label: '职工扩展信息',
    colProps: {
      span: 24,
    },
  },
  {
    field: 'patientId',
    label: t('iu.teacher.patientId'),
    component: 'InputNumber',
    show: false,
  },
  {
    field: 'name',
    label: t('iu.teacher.name'),
    component: 'Input',
    show: false,
  },
  {
    field: 'faculty',
    label: t('iu.teacher.faculty'),
    required: true,
    component: 'ApiSelect',
    componentProps: {
      api: getDictionaryByName,
      params: {
        name: 'Faculty',
      },
      showSearch:true,
      resultField: 'data.data',
      labelField: 'title',
      valueField: 'title',
    }
  },
  {
    field: 'no',
    label: t('iu.teacher.no'),
    component: 'Input',
    // required: true,
  },
  {
    field: 'wphone',
    label: t('iu.teacher.wphone'),
    component: 'Input',
    // required: true,
  },
  {
    field: 'deparment',
    label: t('iu.teacher.deparment'),
    component: 'Input',
    // required: true,
  },
  {
    field: 'status',
    label: t('iu.teacher.status'),
    component: 'RadioButtonGroup',
    show: false,
    defaultValue: 1,
    componentProps: {
      options: [
        { label: t('common.on'), value: 1 },
        { label: t('common.off'), value: 2 },
      ],
    },
  },
];
