#!/bin/bash

# Check if ImageMagick is installed
if ! command -v convert &> /dev/null; then
    echo "ImageMagick is required but not installed. Please install it first:"
    echo "brew install imagemagick"
    exit 1
fi

# Source image (using the 512x512 icon as base)
SOURCE="public/android-chrome-512x512.png"

# Generate iOS splash screens
convert "$SOURCE" -resize 2048x2732^ -gravity center -extent 2048x2732 public/apple-splash-2048-2732.png
convert "$SOURCE" -resize 1668x2388^ -gravity center -extent 1668x2388 public/apple-splash-1668-2388.png
convert "$SOURCE" -resize 1536x2048^ -gravity center -extent 1536x2048 public/apple-splash-1536-2048.png
convert "$SOURCE" -resize 1290x2796^ -gravity center -extent 1290x2796 public/apple-splash-1290-2796.png
convert "$SOURCE" -resize 1179x2556^ -gravity center -extent 1179x2556 public/apple-splash-1179-2556.png

echo "PWA assets generated successfully!" 