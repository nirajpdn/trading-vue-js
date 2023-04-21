<template>
  <trading-vue
    ref="tvjs"
    :data="chart"
    :width="width"
    :height="height"
    title-txt="The King"
    :toolbar="true"
    :color-back="colors.colorBack"
    :color-grid="colors.colorGrid"
    :color-text="colors.colorText"
  />
</template>

<script>
import TradingVue from '../../src/TradingVue.vue';
import Data from '../data/data_tools.json';
import DataCube from '../../src/helpers/datacube.js';

export default {
  name: 'Toolbar',
  icon: '🔪',
  description: 'Toolbar & drawing tools',
  components: {
    TradingVue,
  },
  props: ['night'],
  data() {
    return {
      chart: new DataCube(Data),
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  computed: {
    colors() {
      return this.$props.night ? {} : {
        colorBack: '#fff',
        colorGrid: '#eee',
        colorText: '#333',
      };
    },
  },
  mounted() {
    window.addEventListener('resize', this.onResize);
    this.onResize();
    window.dc = this.chart;
    window.tv = this.$refs.tvjs;
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },
  methods: {
    onResize(event) {
      this.width = window.innerWidth;
      this.height = window.innerHeight - 50;
    },
  },
};
</script>

<style>

</style>
