import { ErrorHandler, Injectable, inject } from '@angular/core';
import { Telemetry } from './telemetry';

const MAX_ERROR_DETAIL_LENGTH = 2000;
const MAX_ERROR_STACK_LENGTH = 4000;

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  private telemetry = inject(Telemetry);

  handleError(error: unknown): void {
    this.telemetry.collectActivity({
      name: 'runtime_error',
      type: 'ERROR',
      activity: {
        message: this.getErrorMessage(error),
        stack: this.getErrorStack(error),
        details: this.getErrorDetails(error),
      },
    });

    console.error(error);
  }

  private getErrorMessage(error: unknown): string {
    if (error instanceof Error) {
      return error.message;
    }

    return String(error);
  }

  private getErrorStack(error: unknown): string | undefined {
    if (!(error instanceof Error) || !error.stack) {
      return undefined;
    }

    return this.truncate(error.stack, MAX_ERROR_STACK_LENGTH);
  }

  private getErrorDetails(error: unknown): string {
    try {
      return this.truncate(JSON.stringify(error), MAX_ERROR_DETAIL_LENGTH);
    } catch {
      return this.truncate(String(error), MAX_ERROR_DETAIL_LENGTH);
    }
  }

  private truncate(value: string, maxLength: number): string {
    return value.length > maxLength ? value.slice(0, maxLength) : value;
  }
}
