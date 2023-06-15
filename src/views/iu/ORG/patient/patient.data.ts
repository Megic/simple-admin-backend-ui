import { BasicColumn, FormSchema } from '/@/components/Table';
import { useI18n } from '/@/hooks/web/useI18n';
import { formatToDateTime,formatToDate } from '/@/utils/dateUtil';
import { updatePatient } from '/@/api/iu/patient';
import { Switch } from 'ant-design-vue';
import { getDictionaryByName } from '/@/api/sys/dictionary';
import { h } from 'vue';
import * as filter from '/@/utils/common/filter';
const { t } = useI18n();

export const columns: BasicColumn[] = [

  {
    title: t('iu.patient.type'),
    dataIndex: 'type',
    width: 100,
  },
  {
    title: t('iu.patient.name'),
    dataIndex: 'name',
    width: 100,
  },
  {
    title: t('iu.patient.sex'),
    dataIndex: 'sex',
    width: 100,
    format:(text: string, record: any, index: number) =>{
      return filter.sex(Number(text))
    },
  },
  {
    title: t('iu.patient.key'),
    dataIndex: 'key',
    width: 100,
  },
  {
    title: t('iu.patient.cardType'),
    dataIndex: 'cardType',
    width: 100,
    // slots: { customRender: 'dict',dictType: 'IDType'}
    // format: async (text: string, record: any, index: number) =>{
    //   return await filter.dict('IDType',text)
    // },
  },
  {
    title: t('iu.patient.cardNo'),
    dataIndex: 'cardNo',
    width: 100,
  },
  {
    title: t('iu.patient.birth'),
    dataIndex: 'birth',
    width: 180,
    customRender: ({ record }) => {
      return formatToDate(record.birth) +`(${filter.age(record.birth)})`;
    },
    // format:(text: string, record: any, index: number) =>{
    //   return filter.birth(text)
    // },
  },
  {
    title: t('iu.patient.height'),
    dataIndex: 'height',
    width: 100,
  },
  {
    title: t('iu.patient.nation'),
    dataIndex: 'nation',
    width: 100,
  },
  {
    title: t('iu.patient.nativePlace'),
    dataIndex: 'nativePlace',
    width: 100,
  },
  {
    title: t('iu.patient.country'),
    dataIndex: 'country',
    width: 100,
  },
  {
    title: t('iu.patient.address'),
    dataIndex: 'address',
    width: 100,
  },
  // {
  //   title: t('iu.patient.addressArea'),
  //   dataIndex: 'addressArea',
  //   width: 100,
  // },
  // {
  //   title: t('iu.patient.addressStreet'),
  //   dataIndex: 'addressStreet',
  //   width: 100,
  // },
  // {
  //   title: t('iu.patient.addressCommunity'),
  //   dataIndex: 'addressCommunity',
  //   width: 100,
  // },
  // {
  //   title: t('iu.patient.address2'),
  //   dataIndex: 'address2',
  //   width: 100,
  // },
  // {
  //   title: t('iu.patient.medicalHistory'),
  //   dataIndex: 'medicalHistory',
  //   width: 100,
  // },
  // {
  //   title: t('iu.patient.allergyHistory'),
  //   dataIndex: 'allergyHistory',
  //   width: 100,
  // },
  {
    title: t('common.status'),
    dataIndex: 'status',
    width: 80,
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
          updatePatient({ id: record.id, status: newStatus })
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
    field: 'key',
    label: t('iu.patient.key'),
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'name',
    label: t('iu.patient.name'),
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'cardNo',
    label: t('iu.patient.cardNo'),
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
    label: t('iu.patient.type'),
    component: 'RadioButtonGroup',
    defaultValue: 1,
    componentProps: {
      options: [
        { label: t('iu.patient.type1'), value: 1 },
        { label: t('iu.patient.type2'), value: 2 },
        { label: t('iu.patient.type3'), value: 3 },
      ],
    },
  },
  {
    field: 'key',
    label: t('iu.patient.key'),
    component: 'Input',
    // required: true,
  },
  {
    field: 'status',
    label: t('iu.patient.status'),
    component: 'RadioButtonGroup',
    defaultValue: 1,
    componentProps: {
      options: [
        { label: t('common.on'), value: 1 },
        { label: t('common.off'), value: 2 },
      ],
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
    field: 'name',
    label: t('iu.patient.name'),
    component: 'Input',
    required: true
  },
  {
    field: 'sex',
    label: t('iu.patient.sex'),
    component: 'RadioButtonGroup',
    defaultValue: 1,
    componentProps: {
      options: [
        { label: t('iu.patient.sex1'), value: 1 },
        { label: t('iu.patient.sex2'), value: 2 },
      ],
    },
  },
  {
    field: 'birth',
    label: t('iu.patient.birth'),
    component: 'DatePicker',
    // required: true,
  },
  {
    field: 'phone',
    label: t('iu.patient.phone'),
    component: 'Input',
    // required: true,
  },
  {
    field: 'cardType',
    label: t('iu.patient.cardType'),
    // required: true,
    defaultValue: 1,
    component: 'ApiSelect',
    componentProps: {
      stringToNumber:true,
      api: getDictionaryByName,
      params: {
        name: 'IDType',
      },
      showSearch:true,
      resultField: 'data.data',
      labelField: 'title',
      valueField: 'value',
    },
  },
  {
    field: 'cardNo',
    label: t('iu.patient.cardNo'),
    component: 'Input',
    // required: true,
  },

  {
    field: 'height',
    label: t('iu.patient.height'),
    component: 'InputNumber',
    componentProps: {
      'addon-after':"cm",
      min:0
      }
  },
  {
    field: 'nation',
    label: t('iu.patient.nation'),
    component: 'Input',
    colProps: {
      span: 8,
    },
  },
  {
    field: 'nativePlace',
    label: t('iu.patient.nativePlace'),
    component: 'Input',
    colProps: {
      span: 8,
    },
  },
  {
    field: 'country',
    label: t('iu.patient.country'),
    component: 'Input',
    colProps: {
      span: 8,
    },
  },
  {
    field: 'address',
    label: t('iu.patient.address'),
    component: 'Input',
    colProps: {
      span: 12,
    },
  },
  // {
  //   field: 'addressArea',
  //   label: t('iu.patient.addressArea'),
  //   component: 'Input',
  //   required: true,
  // },
  {
    field: 'addressStreet',
    label: t('iu.patient.addressStreet'),
    component: 'Input',
    // required: true,
  },
  {
    field: 'addressCommunity',
    label: t('iu.patient.addressCommunity'),
    component: 'Input',
    // required: true,
  },
  {
    field: 'address2',
    label: t('iu.patient.address2'),
    component: 'Input',
    colProps: {
      span: 12,
    },
  },
  {
    field: 'medicalHistory',
    label: t('iu.patient.medicalHistory'),
    component: 'ApiSelect',
    componentProps: {
      mode:'tags',
      api: getDictionaryByName,
      params: {
        name: 'Allergen',
      },
      showSearch:true,
      resultField: 'data.data',
      labelField: 'title',
      valueField: 'title',
    },
    colProps: {
      span: 12,
    },
  },
  {
    field: 'allergyHistory',
    label: t('iu.patient.allergyHistory'),
    component: 'ApiSelect',
    componentProps: {
      mode:'tags',
      api: getDictionaryByName,
      params: {
        name: 'MedicalHistory',
      },
      showSearch:true,
      resultField: 'data.data',
      labelField: 'title',
      valueField: 'title',
    },
    colProps: {
      span: 12,
    },
  },
];
