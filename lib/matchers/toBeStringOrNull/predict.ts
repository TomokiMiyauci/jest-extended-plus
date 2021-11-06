const predict = (received: unknown): boolean =>
  typeof received === 'string' || received === null

export { predict }
