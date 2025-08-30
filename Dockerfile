# Use official Node.js image
FROM node:24.4.1-slim

# Set working directory
WORKDIR /app

RUN apt-get update && apt-get install -y \
    libnss3 \
    libatk-bridge2.0-0 \
    libxss1 \
    libasound2 \
    libxshmfence1 \
    libgbm1 \
    libgtk-3-0 \
    libdrm2 \
    libxcomposite1 \
    libxrandr2 \
    libxdamage1 \
    libpango-1.0-0 \
    libpangocairo-1.0-0 \
    libgdk-pixbuf2.0-0 \
    libx11-xcb1 \
    fonts-liberation \
    curl \
    && rm -rf /var/lib/apt/lists/*


# Copy package.json and install dependencies (if needed)
COPY package*.json ./
RUN npm install

#Install playwright and browsers
RUN npx -y playwright@1.54.0 install --with-deps

RUN npx playwright install chromium

COPY . .

RUN chmod +x node_modules/.bin/*

# Run tests
CMD ["sh", "-c", "npm run test; npm run performance"]
