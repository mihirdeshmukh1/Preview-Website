#!/usr/bin/env bash

# Echo commands for debugging
set -x

echo "Starting setup script..."

# Navigate to project root
cd /workspaces/Preview-Website

# Run install-all
echo "Running npm install-all..."
npm run install-all

# Navigate to raaghu-pages
echo "Changing directory to raaghu-react/raaghu-pages..."
cd raaghu-react/raaghu-pages

# Start the development server
echo "Starting development server..."
npm run dev