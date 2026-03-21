export function isSuccess<T>(
  response: any
): response is { status: 'success'; data: T } {
  return response.status === 'success';
}

export function isError<T>(
  response: any
): response is { status: 'error'; error: { code: string; message: string } } {
  return response.status === 'error';
}

// Usage
export function processResponse<T>(response: any) {
  if (isSuccess<T>(response)) {
    console.log(response.data);
  }

  if (isError(response)) {
    console.log(response.error);
  }
}