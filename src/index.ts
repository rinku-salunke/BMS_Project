/**
 * BMS Project - Main Entry Point
 * Battery Management System Application
 */

import { BatteryMonitor } from './modules/BatteryMonitor';
import { config } from './config/config';

async function main() {
  console.log('Starting Battery Management System...');
  console.log(`Configuration: PORT=${config.port}, Environment=${config.nodeEnv}`);
  
  const monitor = new BatteryMonitor(config.batteryConfig);
  
  console.log('BMS initialized successfully');
  console.log('System ready for monitoring');
}

main().catch((error) => {
  console.error('Failed to start BMS:', error);
  process.exit(1);
});
