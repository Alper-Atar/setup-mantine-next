/** @type {import('next').NextConfig} */

// Translate
const nextTranslate = require('next-translate-plugin') 
const i18n = require('./i18n.json');
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  i18n,
  eslint: {
    ignoreDuringBuilds: true
  },
  ...nextTranslate()
}

module.exports = nextConfig
