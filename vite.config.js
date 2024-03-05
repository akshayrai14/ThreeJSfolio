import { defineConfig } from 'vite';
import dotenv from 'dotenv';
import react from '@vitejs/plugin-react'

// Load environment variables from .env file
dotenv.config();

export default defineConfig({
    plugins: [react()],
    assetsInclude: ['**/*.glb']
})