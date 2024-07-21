/** @type {import('next').NextConfig} */
import path from 'path'
import { fileURLToPath } from 'url';
const newPath = fileURLToPath(import.meta.url)
const __dirname = path.dirname(newPath)

const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'src')],
    },
};

export default nextConfig;
