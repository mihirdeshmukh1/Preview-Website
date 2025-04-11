#!/bin/bash
set -e

# Install NVM for more flexible Node.js version management
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Install the required Node.js version
nvm install 18.22.2
nvm use 18.22.2

# Check if the installation was successful
node -v
echo "Node.js $(node -v) installed successfully"

# Run the install-all command
echo "Running npm run install-all..."
npm run install-all || { echo "Error during npm run install-all"; exit 1; }

# Navigate to the raaghu-pages directory and start the dev server
echo "Changing directory to raaghu-react/raaghu-pages..."
cd raaghu-react/raaghu-pages || { echo "Error: Directory not found"; exit 1; }

# Create a background service to run the dev server
echo "Starting development server..."
npm run dev &
echo "Development server started"