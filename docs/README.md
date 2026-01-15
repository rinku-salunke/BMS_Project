# BMS Project Documentation

## Architecture

The BMS Project is structured with the following components:

### Core Modules

#### BatteryMonitor
- Monitors battery voltage, current, and temperature
- Validates safety thresholds
- Provides real-time status updates

### Configuration

Configuration is managed through environment variables. See `.env.example` for available options.

### Safety Features

- Voltage range monitoring (MIN_VOLTAGE to MAX_VOLTAGE)
- Current limiting (MAX_CURRENT)
- Real-time alerts for out-of-range conditions

## API Reference

### BatteryMonitor

```typescript
class BatteryMonitor {
  constructor(config: BatteryConfig)
  isVoltageSafe(voltage: number): boolean
  isCurrentSafe(current: number): boolean
  getStatus(): string
}
```

## Development

### Adding New Features

1. Create new module in `src/modules/`
2. Import and integrate in `src/index.ts`
3. Add tests in `tests/`
4. Update documentation

### Testing

```bash
npm test
```

## Troubleshooting

### Common Issues

- **Port already in use**: Change PORT in .env file
- **Dependencies not found**: Run `npm install`
