<template>
  <div id="chart">
   
    <apexchart type="pie" :options="chartOptions" :series="series" />
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
  
  const props = defineProps({
    chartPart_Count: Array,
    chartPart_Name: Array,
  
  });

const series = props.chartPart_Count
const chartOptions = ref({
  labels: props.chartPart_Name,
  chart: {
    width: 380,
    type: 'pie'
  },
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 300
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
});
</script>

<style>
/* 필요한 경우 차트 크기 조정 */
#chart {
  max-width: 500px;
}
</style>