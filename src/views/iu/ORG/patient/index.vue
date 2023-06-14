<template>
  <div>
    <BasicTable @register="registerTable">
      <template #tableTitle>
        <Button type="primary" danger v-if="showDeleteButton" @click="handleBatchDelete()">
          <template #icon><DeleteOutlined /></template>
          {{ t('common.delete') }}
        </Button>
      </template>
      <template #toolbar>
        <a-button type="primary" @click="handleCreate">
          {{ t('iu.patient.addPatient') }}
        </a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'cardType'">
         <span>{{ dict.IDType[record.cardType] }}</span>
        </template>
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'clarity:note-edit-line',
                onClick: handleEdit.bind(null, record),
              },
              {
                icon: 'ant-design:delete-outlined',
                color: 'error',
                popConfirm: {
                  title: t('common.deleteConfirm'),
                  placement: 'left',
                  confirm: handleDelete.bind(null, record),
                },
              },
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <PatientDrawer @register="registerDrawer" @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
  import { createVNode, defineComponent, ref,reactive } from 'vue';
  import { Button, Modal } from 'ant-design-vue';
  import { ExclamationCircleOutlined, DeleteOutlined } from '@ant-design/icons-vue/lib/icons';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  // import Dict from '/@/components/common/Dict.vue';
  import { useDrawer } from '/@/components/Drawer';
  import PatientDrawer from './PatientDrawer.vue';
  import { useI18n } from 'vue-i18n';
  import { useDictionaryStore } from '/@/store/modules/dictionary';
  import { columns, searchFormSchema } from './patient.data';
  import { getPatientList, deletePatient } from '/@/api/iu/patient';
  import { useComponentRegister } from '@/components/Form/index';

import { Address } from '@/components/common/address';

useComponentRegister('Address', Address);

  export default defineComponent({
    name: 'PatientManagement',
    components: { BasicTable, PatientDrawer, TableAction, Button, DeleteOutlined },
    setup() {
      const { t } = useI18n();
      const selectedIds = ref<number[] | string[]>();
      const showDeleteButton = ref<boolean>(false);

      const [registerDrawer, { openDrawer }] = useDrawer();
      const [registerTable, { reload }] = useTable({
        title: t('iu.patient.patientList'),
        api: getPatientList,
        columns,
        formConfig: {
          labelWidth: 120,
          schemas: searchFormSchema,
        },
        useSearchForm: true,
        showTableSetting: true,
        bordered: true,
        showIndexColumn: false,
        clickToRowSelect: false,
        actionColumn: {
          width: 80,
          title: t('common.action'),
          dataIndex: 'action',
          fixed: 'right',
        },
        rowKey: 'id',
        rowSelection: {
          type: 'checkbox',
          onChange: (selectedRowKeys, _selectedRows) => {
            selectedIds.value = selectedRowKeys as number[];
            showDeleteButton.value = selectedRowKeys.length > 0;
          },
        },
      });

      function handleCreate() {
        openDrawer(true, {
          isUpdate: false,
        });
      }

      function handleEdit(record: Recordable) {
        openDrawer(true, {
          record,
          isUpdate: true,
        });
      }

      async function handleDelete(record: Recordable) {
        const result = await deletePatient({ ids: [record.id] });
        if (result.code === 0) {
          await reload();
        }
      }

      async function handleBatchDelete() {
        Modal.confirm({
          title: t('common.deleteConfirm'),
          icon: createVNode(ExclamationCircleOutlined),
          async onOk() {
            const result = await deletePatient({ ids: selectedIds.value as number[] });
            if (result.code === 0) {
              showDeleteButton.value = false;
              await reload();
            }
          },
          onCancel() {
            console.log('Cancel');
          },
        });
      }

      async function handleSuccess() {
        await reload();
      }
      const dictStore = useDictionaryStore();
      // let IDType=ref({})
      let dicobj: any = {};
      (async () => {
        dicobj.IDType = await dictStore.getDictionary('IDType',true);
      })()
      const dict= reactive(dicobj)
      return {
        dict,
        t,
        registerTable,
        registerDrawer,
        handleCreate,
        handleEdit,
        handleDelete,
        handleSuccess,
        handleBatchDelete,
        showDeleteButton,
      };
    },
  });
</script>
