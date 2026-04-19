import { resolve } from 'path';
import createFontSlice from 'font-slice';

createFontSlice({
  fontPath: resolve('../public/GlowSansSC-Normal-Bold.otf'),
  outputDir: resolve('../public/GlowSans'),
});
