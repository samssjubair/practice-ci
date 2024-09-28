FROM node:18-alpine as base

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# RUN adduser -u 1001 --disabled-password --gecos "" appuser && chown -R appuser /app
# USER appuser

FROM base as debugger

RUN npm install --save-dev vitest

CMD ["vitest", "--ui"]

# Test runner image
FROM base as test

RUN npm install vitest --save-dev

# # Command to run tests
CMD ["npm", "run", "test"]


# Production image
FROM base as prod

RUN npm run build

CMD ["npm", "run", "start"]
