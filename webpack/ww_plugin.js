// Plugin for saving compiled webworker
// for further use as a Blob content (see script_ww_api.js)

const fs = require('fs');
const lz = require('lz-string');

const PATH = `./src/helpers/tmp/`;

module.exports = class WWPlugin {
  apply(compiler) {
    compiler.hooks.afterEmit.tap('AfterEmitPlugin', async () => {
      try {
        const response = await fetch(`http://localhost:${global.port}/script_ww.worker.js`);
        const text = await response.text();
        const data = lz.compressToBase64(text);
        let json = JSON.stringify([data]);
        let prev;
        try {
          prev = fs.readFileSync(PATH + 'ww$$$.json');
        } catch (e) {
        }

        // Write new compiled ww only if the src changed
        if (json != prev) {
          fs.writeFileSync(PATH + 'ww$$$.json', json);
        }
        console.log('File is ready');
        process.exit();
      } catch (err) {
        console.log('Error: ' + err.message);
        console.log(err);
      }
    });
  }
};
