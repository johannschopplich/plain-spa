/**
 * @param targetElement - The element to watch for entry into the viewport
 * @param threshold - The threshold at which to trigger the Intersection event. Must be between 0 and 1. 0 indicates first pixel in viewport. 1 indicates every pixel of element in viewport.
 * @returns {Promise<IntersectionObserverEntry>}
 */
export default (targetElement, threshold = 0) =>
  new Promise((resolve, reject) => {
    if (!targetElement) {
      throw new Error('Must specify a target element.')
    }

    if (!isThresholdValid(threshold)) {
      throw new Error('Threshold must be between 0 and 1 inclusive.')
    }

    const options = {
      root: null, // Document viewport
      rootMargin: '0px',
      threshold // Visible amount of item shown in relation to root. 1.0 dictates that every pixel of element is visible.
    }

    const observer = new IntersectionObserver((entries, observer) => {
      /**
       * When the IntersectionObserver is instantiated the callback is ran once
       * as a detection for whether the element is in view or not
       * and if its intersection ratio exceeds the given threshold.
       */
      if (
        !entries[0].isIntersecting ||
        entries[0].intersectionRatio < threshold
      ) {
        return
      }

      observer.disconnect()

      return resolve(entries[0])
    }, options)

    observer.observe(targetElement)
  })

const isThresholdValid = threshold =>
  Number(threshold) === threshold && threshold >= 0 && threshold <= 1
