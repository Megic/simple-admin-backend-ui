<template>
  <RegionGroup 
  language="cn"
  :city="true"
          :area="true"
          :town="true"
           v-model="region" @change="change" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { RegionGroup } from 'v-region'
defineProps(['value'])
const region = ref({
  province: '350000',
  city: '350100',
  area: '350104',
  town: '350104008'
})
function change (data) {
  console.log(data)
}
</script>