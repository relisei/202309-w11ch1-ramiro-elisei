class CustomError extends Error {
  constructor(
    message: string,
    public readonly statusCode: number,
    public privateMessage?: string,
  ) {
    super(message);
  }
}

export default CustomError;
