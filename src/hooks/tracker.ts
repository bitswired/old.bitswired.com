declare global {
  interface Window {
    dataLayer: Record<string, any>[];
  }
}

interface NewsletterSubscriptionSuccessEvent {
  email: string;
  firstName: string;
  lastName: string;
}

const tracker = {
  trackNewsletterSubscriptionSuccess: (data: NewsletterSubscriptionSuccessEvent) => {
    window.dataLayer = window.dataLayer || [];

    window.dataLayer.push({
      event: 'newsletter_subscription_success',
      ...data
    });
  }
};

export function useTracker() {
  return tracker;
}
