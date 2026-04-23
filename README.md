# 🚀 Express App → EXE + Web

# 1.- Clonar plantilla:

git clone https://github.com/Roy-code-star/crear-express-app-exe.git mi-app
cd mi-app

# Instalar
npm install

# 2.- Generar EXE:

# Desarrollo

pnpm run dev              # http://localhost:3000

# Build + EXE

pnpm run exe              # → exe-dist/crear-express-app-exe.exe

# Deploy Vercel (opcional)

pnpm run build && vercel
