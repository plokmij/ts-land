import { OutputTarget } from '../Summary';

export class ConsoleReport implements OutputTarget {
  print(input: string): void {
    console.log(input);
  }
}
