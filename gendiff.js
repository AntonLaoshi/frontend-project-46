#!/usr/bin/env node

import { Command } from 'commander';
const program = new Command();

program
  .description('Compares two configuration files and shows a difference.')
  .helpOption('-h, --help', 'output usage information')
  .version('0.0.1', '-v, --version', 'output the version number');

program.parse();

