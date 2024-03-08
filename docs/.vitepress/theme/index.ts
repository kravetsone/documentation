// https://vitepress.dev/guide/custom-theme
import DefaultTheme from 'vitepress/theme'
import Layout from './layout.vue'
import './custom.css'
import { Theme } from 'vitepress'
import TwoslashFloatingVue from "@shikijs/vitepress-twoslash/client";
import "@shikijs/vitepress-twoslash/style.css";

export default {
    extends: DefaultTheme,
    enhanceApp({app}) {
        // @ts-expect-error
        app.use(TwoslashFloatingVue)
    },
    Layout
} satisfies Theme
