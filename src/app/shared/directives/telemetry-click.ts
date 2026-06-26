import { Directive, HostListener, inject, input } from '@angular/core';
import { Telemetry } from '../../core/services/telemetry';
import { TelemetryActivity } from '../interfaces/telemetry';

@Directive({
  selector: '[appTelemetryClick]',
})
export class TelemetryClick {
  appTelemetryClick = input.required<string>();
  telemetryData = input<TelemetryActivity>({});

  private telemetry = inject(Telemetry);

  @HostListener('click')
  onClick(): void {
    this.telemetry.collectActivity({
      name: this.appTelemetryClick(),
      type: 'CLICK',
      activity: this.telemetryData(),
    });
  }
}
