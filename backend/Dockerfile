FROM node:18.16.0-alpine

# Create a working directory
WORKDIR /app

# Copy source code to working directory
COPY . /app/

# Install packages
RUN npm i

# Expose port 3000
EXPOSE 3000

# Run npm start at container launch
CMD ["npm", "run", "start"]