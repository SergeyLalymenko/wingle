// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath, URL } from 'node:url';

export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    alias: {
        "~": fileURLToPath(new URL('.', import.meta.url))
    },
    modules: ['@pinia/nuxt', '@nuxt/fonts'],
    imports: {
        dirs: ['stores']
    },
    css: ['~/assets/styles/index.scss'],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `
                        @use "~/assets/styles/variables.scss" as *;
                    `
                }
            }
        }
    },
    devServer: {
        port: 8000
    },
    fonts: {
        families: [
            {
                name: 'montserrat',
                provider: 'google'
            },
        ]
    }
})