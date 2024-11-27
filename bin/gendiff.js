#!/usr/bin/env node

import { Command } from 'commander';
import readFile from '../src/utils.js';
import parse from '../src/parser.js';

const program = new Command();

program
  .description('Compares two configuration files and shows a difference.')
  .helpOption('-h, --help', 'output usage information')
  .version('0.0.1', '-V, --version', 'output the version number')
  .option('-f, --format [type]', 'output format')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .action((filepath1, filepath2) => {
    const result1 = readFile(filepath1);
    const result2 = readFile(filepath2);
    console.log(parse(result1));
    console.log(parse(result2));
  });

program.parse();

