/** @type {import('next').NextConfig} */

// Define el nombre de tu repositorio aquí
const repo = 'lupes-bbq'

// Configura el prefijo de assets y la ruta base para producción
const assetPrefix = `/${repo}/`
const basePath = `/${repo}`

const nextConfig = {
  // Habilita la exportación estática
  output: 'export',
  
  // Configura las rutas solo para el despliegue en producción (GitHub Pages)
  assetPrefix: process.env.NODE_ENV === 'production' ? assetPrefix : undefined,
  basePath: process.env.NODE_ENV === 'production' ? basePath : undefined,
  
  // Necesario para que las imágenes funcionen en la exportación estática
  images: {
    unoptimized: true,
  },
  
  // Opciones para ignorar errores de lint y typescript durante la construcción
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig

