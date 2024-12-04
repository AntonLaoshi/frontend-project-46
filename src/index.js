import readFile from '../src/utils.js';
import parse from '../src/parser.js';

const status = {
  "added": "+",
  "deleted": "-",
  "equal": " "
};

const genDiff = (filepath1, filepath2) => {
  const fileData1 = readFile(filepath1);
  const fileData2 = readFile(filepath2);
  const parsedFile1 = parse(fileData1);
  const parsedFile2 = parse(fileData2);
  let result = '';
  const keys1 = Object.keys(parsedFile1);
  const keys2 = Object.keys(parsedFile2);
  const keys = keys1.concat(keys2);
  const uniqueKeys = [... new Set(keys)].sort();
  for (const key of uniqueKeys) {
    if (!Object.hasOwn(parsedFile2, key)) {
      result = result + `\n${status.deleted} ${key}: ${parsedFile1[key]}`;
    } else if (!Object.hasOwn(parsedFile1, key)) {
      result = result + `\n${status.added} ${key}: ${parsedFile2[key]}`;
    } else if (parsedFile1[key] === parsedFile2[key]) {
      result = result + `\n${status.equal} ${key}: ${parsedFile1[key]}`;
    } else if (parsedFile1[key] !== parsedFile2[key]) {
      result = result + `\n${status.deleted} ${key}: ${parsedFile1[key]}`;
      result = result + `\n${status.added} ${key}: ${parsedFile2[key]}`;
    }
  };
  return result;
}

export default genDiff;