# BMS_Project

Battery Management System (BMS) Project - A TypeScript-based application for monitoring and managing battery systems.

## Overview

This project provides a framework for building battery management solutions with features for monitoring voltage, current, temperature, and other critical parameters.

## Features

- Real-time battery monitoring
- Voltage and current tracking
- Temperature monitoring
- State of charge (SOC) calculation
- Battery health analysis

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Copy environment configuration
cp .env.example .env

# Build the project
npm run build

# Run the application
npm start
```

### Development

```bash
# Run in development mode
npm run dev
```

## Project Structure

```
BMS_Project/
├── src/              # Source code
│   ├── index.ts      # Application entry point
│   ├── config/       # Configuration files
│   └── modules/      # Core modules
├── tests/            # Test files
├── docs/             # Documentation
└── dist/             # Compiled output
```

## Configuration

Edit the `.env` file to configure your BMS settings:
- `PORT` - Application port
- `MAX_VOLTAGE` - Maximum safe voltage
- `MIN_VOLTAGE` - Minimum safe voltage
- `MAX_CURRENT` - Maximum current threshold

## License

ISC