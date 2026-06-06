export interface ScrollIntoViewParams {
  element: HTMLElement;
  scrollOptions?: ScrollIntoViewOptions;
  onComplete?: () => void;
}

export function scrollIntoView(params: ScrollIntoViewParams) {
  const { element, scrollOptions, onComplete } = params;

  if (onComplete) {
    let completed = false;
    const complete = () => {
      if (completed) {
        return;
      }

      completed = true;
      window.removeEventListener('scrollend', complete);
      onComplete();
    };

    window.addEventListener('scrollend', complete, { once: true });
    setTimeout(complete, 600);
  }

  element.scrollIntoView(scrollOptions);
}
