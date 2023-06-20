# Use an official Node.js runtime as a base image
FROM node:14

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Bundle the app source inside the Docker image
COPY . .

# Expose port 8080 for the app to be accessible externally
EXPOSE 8080

# Define the command to run the app
CMD [ "npm", "start" ]
