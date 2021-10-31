<template>
  <div class="main-div">
    <div class="chartManager">
      <h1 class="title">Chart Manager</h1>
      <div class="chart-container">
        <h3>Linechart</h3>
        <line-chart class="chart" :data="linechart.data"></line-chart>
        <select v-model="linechart.size.width">
          <option value="0">Witdh: {{ linechart.size.width }}</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <select v-model="linechart.size.height">
          <option value="0">Height: {{ linechart.size.height }}</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <select v-model="linechart.color">
          <option value="none">Color: {{ linechart.color }}</option>
          <option value="black">1</option>
          <option value="red">2</option>
          <option value="yellow">3</option>
        </select>
      </div>
      <div class="chart-container">
        <h3>Piechart</h3>
        <pie-chart class="chart" :data="piechart.data"></pie-chart>
        <select v-model="piechart.size.width">
          <option value="0">Width - {{ piechart.size.width }}</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <select v-model="piechart.size.height">
          <option value="0">Height - {{ piechart.size.height }}</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <select v-model="piechart.color">
          <option value="none">Color: {{ piechart.color }}</option>
          <option value="black">1</option>
          <option value="red">2</option>
          <option value="yellow">3</option>
        </select>
      </div>
      <div class="chart-container">
        <h3>Columnchart</h3>
        <column-chart class="chart" :data="columnchart.data"></column-chart>
        <select v-model="columnchart.size.width">
          <option value="0">Width - {{ columnchart.size.width }}</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <select v-model="columnchart.size.height">
          <option value="0">Height - {{ columnchart.size.width }}</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <select v-model="columnchart.color">
          <option value="none">Color: {{ columnchart.color }}</option>
          <option value="black">1</option>
          <option value="red">2</option>
          <option value="yellow">3</option>
        </select>
      </div>

      <div class="chart-container">
        <h3>Areachart</h3>
        <area-chart :data="areachart.data"></area-chart>
        <select v-model="areachart.size.width">
          <option value="0">Width - {{ areachart.size.width }}</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <select v-model="areachart.size.height">
          <option value="0">Height - {{ areachart.size.width }}</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <select v-model="areachart.color">
          <option value="none">Color: {{ areachart.color }}</option>
          <option value="black">1</option>
          <option value="red">2</option>
          <option value="yellow">3</option>
        </select>
      </div>

      <div class="chart-container">
        <h3>Barchart</h3>
        <bar-chart :data="barchart.data"></bar-chart>
        <select v-model="barchart.size.width">
          <option value="0">Width - {{ barchart.size.width }}</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <select v-model="barchart.size.height">
          <option value="0">Height - {{ barchart.size.width }}</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <select v-model="barchart.color">
          <option value="none">Color: {{ barchart.color }}</option>
          <option value="black">1</option>
          <option value="red">2</option>
          <option value="yellow">3</option>
        </select>
      </div>

      <div class="chart-container">
        <h3>Scatterchart</h3>
        <scatter-chart
          :data="scatterchart.data"
          xtitle="Size"
          ytitle="Population"
        ></scatter-chart>
        <select v-model="scatterchart.size.width">
          <option value="0">Width - {{ scatterchart.size.width }}</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <select v-model="scatterchart.size.height">
          <option value="0">Height - {{ scatterchart.size.width }}</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <select v-model="scatterchart.color">
          <option value="none">Color: {{ scatterchart.color }}</option>
          <option value="black">1</option>
          <option value="red">2</option>
          <option value="yellow">3</option>
        </select>
      </div>
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
        data: { "2017-05-13": 2, "2017-05-14": 5 },
        color: "none",
      },
      columnchart: {
        size: {
          width: 0,
          height: 0,
        },
        data: [
          ["Sun", 32],
          ["Mon", 46],
          ["Tue", 28],
        ],
        color: "none"
      },
      piechart: {
        size: {
          width: 0,
          height: 0,
        },
        data: [
          ["Blueberry", 44],
          ["Strawberry", 23],
        ],
        color: "none",
      },
      areachart: {
        size: {
          width: 0,
          height: 0,
        },
        data: {
          "2017-01-01 00:00:00 -0800": 2,
          "2017-01-01 00:01:00 -0800": 5,
        },
        color: "none",
      },
      barchart: {
        size: {
          width: 0,
          height: 0,
        },
        data: [
          ["X-Small", 5],
          ["Small", 27],
        ],
        color: "none",
      },
      scatterchart: {
        size: {
          width: 0,
          height: 0,
        },
        data: [
          [250.0, 80.0],
          [176.5, 82.3],
          [122.5, 25.3],
          [110.5, 64.3],
          [155.5, 24.3],
          [195.5, 97.3],
        ],
        color: "none",
      },
    };
  },
};
</script>
<style>
.main-div {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
}

.chartManager {
  background-color: #21618c;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}

.chart-container {
  transition: all .2s ease-in-out;
  margin: 100px;
  flex: 1 0 20%;
  width: fit-content;
  height: fit-content;
  background-color: #e5e5e5;
  border-radius: 15% 15% 2% 2%;
}

.chart-container:hover {
  transform: scale(1.1);
}

.title {
  color: #e5e5e5;
  text-align: center;
  flex: 1 0 100%;
}

.chart {
}

.chart-elem {
  width: fit-content;
}

select {
  font-weight: bold;
}

h3 {
  text-align: center;
}
</style>