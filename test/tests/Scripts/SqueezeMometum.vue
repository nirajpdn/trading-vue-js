<script>

import Overlay from '../../../src/mixins/overlay.js';
import SqueezeMometum from './lazybear.js';


export default {
  name: 'SqueezeMometum',
  mixins: [Overlay],
  data() {
    return {
      COLORS:
        [
          '#42B28A', '#5691CE', '#612FF9',
          '#D50B90', '#FF2316',
        ],
    };
  },
  // Define internal setting & constants here
  computed: {
    sett() {
      return this.$props.settings;
    },
    line_width() {
      return this.sett.lineWidth || 0.75;
    },
    color() {
      const n = this.$props.num % 5;
      return this.sett.color || this.COLORS[n];
    },
    data_index() {
      return this.sett.dataIndex || 1;
    },
  },
  methods: {
    meta_info() {
      return { author: 'C451/LazyBear', version: '1.0.0' };
    },
    draw(ctx) {
      ctx.lineWidth = this.line_width;
      ctx.strokeStyle = this.color;
      ctx.beginPath();

      const layout = this.$props.layout;
      const i = this.data_index;

      for (var p of this.$props.data) {
        let x = layout.t2screen(p[0]);
        let y = layout.$2screen(p[i]);
        ctx.lineTo(x, y);
      }
      ctx.stroke();
    },

    use_for() {
      return ['SqueezeMometum', 'EMA', 'SMA'];
    },
    data_colors() {
      return [this.color];
    },
    calc() {
      return {
        props: {
          'length': { def: 20 },
          'mult': { def: 2.0 },
          'lengthKC': { def: 20 },
          'multKC': { def: 1.5 },
          'useTrueRange': { def: true },
        },
        conf: {
          'renderer': 'Splines',
          'plugin1.setting1': 1000,
        },
        init: `
                    console.log('init script')
                `,
        update: SqueezeMometum,
      };
    },
  },

};
</script>
