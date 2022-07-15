interface ILogging {
  setLog(...logs: string[]): void;
  getLog(): void;
}

export { ILogging };
