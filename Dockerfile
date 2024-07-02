# Use the official Node.js image based on Alpine Linux
FROM node:alpine

# Set the working directory

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 80

# Command to run the application
CMD ["node", "server.js"]
