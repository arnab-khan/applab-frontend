import { ErrorHandler, Injectable, inject } from '@angular/core';
import { Telemetry } from './telemetry';

const MAX_ERROR_DETAIL_LENGTH = 2000;
const MAX_ERROR_STACK_LENGTH = 4000;

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  private telemetry = inject(Telemetry);
  private collectedErrorKeys = new Set<string>();

  handleError(error: unknown): void {
    const message = this.getErrorMessage(error);
    const stack = this.getErrorStack(error);
    const details = this.getErrorDetails(error);
    const errorKey = JSON.stringify({ message, stack, details });

    if (this.collectedErrorKeys.has(errorKey)) {
      console.error(error);
      return;
    }

    this.collectedErrorKeys.add(errorKey);
    this.telemetry.collectActivity({
      name: 'runtime_error',
      type: 'ERROR',
      activity: {
        message,
        stack,
        details,
      },
    });

    console.error(error);
  }

  private getErrorMessage(error: unknown): string {
    if (error instanceof Error) {
      const message = `${error.name}: ${error.message}`;

      if (error.cause) {
        return `${message}; cause: ${String(error.cause)}`;
      }

      return message;
    }

    if (typeof error === 'object' && error !== null) {
      const errorRecord = error as Record<string, unknown>;
      const messageParts = [
        errorRecord['name'],
        errorRecord['message'],
        errorRecord['reason'],
        errorRecord['status'],
        errorRecord['statusText'],
      ].filter((item) => item !== undefined && item !== null && item !== '');

      if (messageParts.length) {
        return messageParts.map((item) => String(item)).join(' ');
      }
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
