# Base image for Node.js
FROM node:18-alpine as base

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies, including dev dependencies (like Vitest)
RUN npm install --include=dev

# Copy the rest of the app files
COPY . .

# Create a non-root user and give permissions
RUN adduser -u 1001 --disabled-password --gecos "" appuser && chown -R appuser /app
USER appuser

# Test runner image
FROM base as test

# Install Vitest if it's not already installed (if needed for specific cases)
RUN npm install vitest --save-dev

# Command to run tests
CMD ["npm", "run", "test"]
