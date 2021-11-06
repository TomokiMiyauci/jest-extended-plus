const predict = (received: unknown): boolean =>
  typeof received === 'number' || received === null

export { predict }
