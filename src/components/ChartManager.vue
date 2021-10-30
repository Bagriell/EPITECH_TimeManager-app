<template>
  <div class="chartManager">
      <h1 class="title">Chart Manager</h1>
    <div class="chart-container">
      <line-chart class="chart" :data="{ '2017-05-13': 2, '2017-05-14': 5 }"></line-chart>
      <select v-model="linechart.size.width">
        <option>With - {{ linechart.size.width }}</option>
      </select>
      <select v-model="linechart.size.height">
        <option>With - {{ linechart.size.height }}</option>
      </select>
    </div>
    <div class="chart-container">
      <pie-chart
      class="chart"
        :data="[
          ['Blueberry', 44],
          ['Strawberry', 23],
        ]"
      ></pie-chart>
      <select v-model="linechart.size.width">
        <option>With - {{ linechart.size.width }}</option>
      </select>
      <select v-model="linechart.size.width">
        <option>With - {{ linechart.size.width }}</option>
      </select>
    </div>
    <div class="chart-container">
      <column-chart
      class="chart"
        :data="[
          ['Sun', 32],
          ['Mon', 46],
          ['Tue', 28],
        ]"
      ></column-chart>
      <select v-model="linechart.size.width">
        <option>With - {{ linechart.size.width }}</option>
      </select>
      <select v-model="linechart.size.width">
        <option>With - {{ linechart.size.width }}</option>
      </select>
    </div>
  </div>
</template>
<script>
export default {
  name: "ChartManager",
  components: {},
  methods: {},
  data() {
    return {
      linechart: {
        size: {
          width: 0,
          height: 0,
        },
      },
    };
  },
};
</script>
<style>
.chartManager {
  background-color: #21618c;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

.chart-container {
  width: fit-content;
  height: fit-content;
  background-color: #E5E5E5;
}

.title {

}

.chart {

}

.chart-elem {
  width: fit-content;
}

select {
  font-weight: bold;
}
</style>