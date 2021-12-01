import { env, rollup, plugin } from '@brixtol/rollup-config';

export default rollup(
  {
    input: 'src/index.ts',
    output: [
      {
        format: 'cjs',
        file: 'package/index.js',
        exports: 'named'
      },
      {
        format: 'es',
        file: 'package/index.es.js',
        exports: 'named',
        preferConst: true
      }
    ],
    plugins: env.if('dev')(
      [
        plugin.ts()
      ]
    )(
      [
        plugin.esminify(),
        plugin.filesize()
      ]
    )
  }
);
