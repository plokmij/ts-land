import { read } from 'fs';
import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';
import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { Console } from 'console';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { Summary } from './Summary';
import { HtmlReport } from './reportTargets/HtmlReport';

const csvFileReader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);

matchReader.load();

const matches = matchReader.matches;

const winsAnalysis = new WinsAnalysis('Man United');

const consolrReport = new ConsoleReport();
const htmlReport = new HtmlReport();
const sum = new Summary(winsAnalysis, htmlReport);
sum.buildAndPrintReport(matches);