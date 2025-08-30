# Use official Node.js image
FROM node:24.4.1-slim

# Set working directory
WORKDIR /app

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
