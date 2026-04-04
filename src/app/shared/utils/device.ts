export function isMobile(): boolean {
    const ua = navigator.userAgent;

    // New API
    if ((navigator as any).userAgentData?.mobile !== undefined) {
        return (navigator as any).userAgentData.mobile;
    }

    // iPad detection
    const isIpad = /Macintosh/i.test(ua) && 'ontouchend' in document;

    return /Android|iPhone|iPod/i.test(ua) || isIpad;
}

export function isTouchDevice(): boolean {
    return window.matchMedia('(pointer: coarse)').matches || navigator.maxTouchPoints > 0;
}