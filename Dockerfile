# Use an official Node.js runtime as a base image
FROM node:18

# Set the working directory in the container to /app
WORKDIR /app

# Only copy package.json when it's changed
COPY package.json .

# Install the application dependencies
RUN npm install

# Bundle the app source inside the Docker image
COPY . .

RUN npm run compile

# Expose port 3000 for the app to be accessible externally
EXPOSE 3000

# Define the command to run the app
CMD [ "npm", "start" ]
