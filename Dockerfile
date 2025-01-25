# Use the official Node.js image
FROM node

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your application code
COPY . .

# Expose the port your app runs on
EXPOSE 8000

# Command to run your app
CMD ["node", "server.js"]