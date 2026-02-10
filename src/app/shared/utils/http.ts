import { HttpParams } from "@angular/common/http";

// Converts a object into HttpParams
export function toHttpParams(obj: Record<string, any>): HttpParams {
    let params = new HttpParams();
    Object.entries(obj).forEach(([key, value]) => {
        if (value) {
            params = params.set(key, value.toString()); // `set(key, value)` Adds a new value for the key.
        }
    });
    return params;
}