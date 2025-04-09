import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetWind3,
} from 'unocss';

export default defineConfig({
  presets: [
    presetWind3({ important: '#root' }), // 添加 UnoCSS 的默认样式预设
    presetAttributify(),
    presetIcons(),
  ],
});
