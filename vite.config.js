/*
 * @Descripttion: 
 * @version: 
 * @Author: Bailinxiang
 * @Date: 2023-05-25 15:07:31
 * @LastEditors: sueRimn
 * @LastEditTime: 2023-06-01 09:40:20
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteMockServe } from 'vite-plugin-mock'
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  // base: "/",
  // alias config
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src")
    }
  },
  preprocessorOptions: {
    less: {
      javascriptEnabled: true,
      additionalData: `@import "@/styles/var.less";`
    }
  },
  plugins: [
    react(),
    viteMockServe({
      mockPath: "mock",
    })],
})
