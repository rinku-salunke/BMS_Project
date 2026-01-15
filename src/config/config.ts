/**
 * Configuration Module
 * Loads and exports application configuration
 */

export interface BatteryConfig {
  maxVoltage: number;
  minVoltage: number;
  maxCurrent: number;
}

export interface Config {
  port: number;
  nodeEnv: string;
  batteryConfig: BatteryConfig;
}

export const config: Config = {
  port: parseInt(process.env.PORT || '3000', 10),
  nodeEnv: process.env.NODE_ENV || 'development',
  batteryConfig: {
    maxVoltage: parseFloat(process.env.MAX_VOLTAGE || '4.2'),
    minVoltage: parseFloat(process.env.MIN_VOLTAGE || '3.0'),
    maxCurrent: parseFloat(process.env.MAX_CURRENT || '10.0'),
  },
};
