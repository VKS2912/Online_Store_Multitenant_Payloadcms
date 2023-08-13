export interface Config {
  collections: {
    users: User;
    pages: Page;
    tenants: Tenant;
    'product-collection': ProductCollection;
    media: Media;
    category: Category;
    'order-collection': OrderCollection;
    attribute: Attribute;
    'reports-analytics-collection': ReportsAnalyticsCollection;
    'third-party-integration': ThirdPartyIntegration;
    'store-maintenance': StoreMaintenance;
    'store-localization-collection': StoreLocalizationCollection;
    'storefront-customization': StorefrontCustomization;
    'social-media-integration': SocialMediaIntegration;
    'shipping-fulfillment-collection': ShippingFulfillmentCollection;
    'seo-collection': SeoCollection;
    'returns-refunds-collection': ReturnsRefundsCollection;
    'payment-gateway-integration-collection': PaymentGatewayIntegrationCollection;
    'inventory-collection': InventoryCollection;
    'data-security-collection': DataSecurityCollection;
    'customer-service-collection': CustomerServiceCollection;
    'customer-communication-collection': CustomerCommunicationCollection;
    'customer-collection': CustomerCollection;
  };
  globals: {};
}
export interface User {
  id: string;
  firstName?: string;
  lastName?: string;
  roles: ('super-admin' | 'user')[];
  tenants?: {
    tenant: string | Tenant;
    roles: ('admin' | 'user')[];
    id?: string;
  }[];
  lastLoggedInTenant?: string | Tenant;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string;
  resetPasswordExpiration?: string;
  salt?: string;
  hash?: string;
  loginAttempts?: number;
  lockUntil?: string;
  password?: string;
}
export interface Tenant {
  id: string;
  storename: string;
  domains?: {
    domain: string;
    id?: string;
  }[];
  aboutus?: string;
  contactInfo?: {
    addresses?: {
      addressGroup?: {
        city?: string;
        state?: string;
        pincode?: string;
        postoffice?: string;
        addressGroup?: {
          addressLine?: string;
        };
      };
      id?: string;
    }[];
    email?: string;
    phoneNumbers?: {
      phoneNumber?: string;
      id?: string;
    }[];
    socialMedia?: {
      instagram?: string;
      facebook?: string;
      twitter?: string;
    };
  };
  storePolicies?: {
    returnsRefunds?: {
      policyText?: string;
      id?: string;
    }[];
    shippingDelivery?: {
      policyText?: string;
      id?: string;
    }[];
    privacyPolicy?: {
      policyText?: string;
      id?: string;
    }[];
    termsConditions?: {
      policyText?: string;
      id?: string;
    }[];
  };
  faqItems?: {
    faqGroup?: {
      question?: string;
      answers?: {
        answer?: string;
        id?: string;
      }[];
    };
    id?: string;
  }[];
  customerReviews?: {
    reviewGroup?: {
      name?: string;
      username?: string;
      reviews?: {
        reviewText?: string;
        id?: string;
      }[];
    };
    id?: string;
  }[];
  opening?: {
    openingHoursGroup?: {
      name?: string;
      city?: string;
      opening?: string;
      closing?: string;
      openingday?: string;
      closingday?: string;
    };
    id?: string;
  }[];
  events?: {
    eventGroup?: {
      eventName?: string;
      eventDescription?: string;
    };
    id?: string;
  }[];
  paymentOptions?: {
    optionName?: string;
    id?: string;
  }[];
  specialNotices?: {
    noticeGroup?: {
      noticeTitle?: string;
      noticeDetails?: string;
    };
    id?: string;
  }[];
  updatedAt: string;
  createdAt: string;
}
export interface Page {
  id: string;
  title: string;
  slug?: string;
  tenant?: string | Tenant;
  richText: {
    [k: string]: unknown;
  }[];
  updatedAt: string;
  createdAt: string;
}
export interface ProductCollection {
  id: string;
  products?: {
    productGroup?: {
      title?: string;
      description?: string;
      price?: number;
      images?: {
        image?: string | Media;
        id?: string;
      }[];
      categories?: string[] | Category[];
      attributes?: string[] | Attribute[];
      variants?: {
        variantGroup?: {
          size?: string;
          color?: string;
        };
        id?: string;
      }[];
      availability?: 'InStock' | 'OutOfStock';
      inventory?: number;
      regularPrice?: number;
      salePrice?: number;
      discountCodes?: {
        code?: string;
        percentageOff?: number;
        id?: string;
      }[];
      bulkPricing?: {
        bulkPricingGroup?: {
          minQuantity?: number;
          price?: number;
        };
        id?: string;
      }[];
    };
    id?: string;
  }[];
  tenant?: string | Tenant;
  updatedAt: string;
  createdAt: string;
}
export interface Media {
  id: string;
  file: string | Media;
  caption?: string;
  updatedAt: string;
  createdAt: string;
}
export interface Category {
  id: string;
  title: string;
  updatedAt: string;
  createdAt: string;
}
export interface Attribute {
  id: string;
  name: string;
  values: string;
  updatedAt: string;
  createdAt: string;
}
export interface OrderCollection {
  id: string;
  orderNumber?: string;
  customer?: string | CustomerCollection;
  products?: string[] | ProductCollection[];
  status?: 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';
  totalAmount?: number;
  shippingAddress?: {
    addressLine1?: string;
    addressLine2?: string;
    city?: string;
    state?: string;
    zipCode?: string;
    country?: string;
  };
  notes?: string;
  packingSlip?: string | Media;
  invoice?: string | Media;
  updatedAt: string;
  createdAt: string;
}
export interface CustomerCollection {
  id: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
  address?: {
    addressLine1?: string;
    addressLine2?: string;
    city?: string;
    state?: string;
    zipCode?: string;
    country?: string;
  };
  updatedAt: string;
  createdAt: string;
}
export interface ReportsAnalyticsCollection {
  id: string;
  salesReports?: {
    reportName?: string;
    reportType?: 'Daily' | 'Weekly' | 'Monthly';
    salesTotal?: number;
    revenue?: number;
    profit?: number;
    id?: string;
  }[];
  productPerformance?: {
    productName?: string;
    unitsSold?: number;
    totalRevenue?: number;
    topSeller?: boolean;
    id?: string;
  }[];
  customerBehavior?: {
    customerName?: string;
    lastPurchaseDate?: string;
    averageOrderValue?: number;
    shoppingTrends?: string;
    id?: string;
  }[];
  updatedAt: string;
  createdAt: string;
}
export interface ThirdPartyIntegration {
  id: string;
  analytics?: {
    googleAnalytics?: string;
    facebookPixel?: string;
  };
  emailMarketing?: {
    mailchimp?: string;
    sendGrid?: string;
  };
  inventoryManagement?: {
    shopify?: string;
    woocommerce?: string;
  };
  updatedAt: string;
  createdAt: string;
}
export interface StoreMaintenance {
  id: string;
  issueTitle: string;
  issueDescription: string;
  priority: 'Low' | 'Medium' | 'High';
  status: 'Open' | 'InProgress' | 'Resolved';
  assignedTo?: string;
  reportedBy: string;
  createdAt: string;
  updatedAt: string;
}
export interface StoreLocalizationCollection {
  id: string;
  languages?: {
    languageCode?: string;
    languageName?: string;
    id?: string;
  }[];
  currencies?: {
    currencyCode?: string;
    currencySymbol?: string;
    id?: string;
  }[];
  localizedContent?: {
    language?: string | StoreLocalizationCollection;
    currency?: string | StoreLocalizationCollection;
    localizedTitle?: string;
    localizedDescription?: string;
    id?: string;
  }[];
  updatedAt: string;
  createdAt: string;
}
export interface StorefrontCustomization {
  id: string;
  theme?: 'Light' | 'Dark' | 'Custom';
  layout?: string;
  colors?: string;
  fonts?: {
    name?: string;
    style?: string;
    id?: string;
  }[];
  content: {
    [k: string]: unknown;
  }[];
  updatedAt: string;
  createdAt: string;
}
export interface SocialMediaIntegration {
  id: string;
  shareButtons?: {
    platform: 'Facebook' | 'Twitter' | 'Instagram' | 'LinkedIn' | 'Pinterest' | 'Other';
    label: string;
    icon?: string | Media;
    link: string;
    id?: string;
  }[];
  userPromotion?: {
    promotionMessage?: {
      [k: string]: unknown;
    }[];
    promotionImage?: string | Media;
    hashtags?: string;
  };
  updatedAt: string;
  createdAt: string;
}
export interface ShippingFulfillmentCollection {
  id: string;
  carrier?: string;
  shippingOptions?: {
    option?: string;
    rate?: number;
    id?: string;
  }[];
  trackingNumber?: string;
  status?: 'Processing' | 'Shipped' | 'Delivered';
  fulfillmentDate?: string;
  updatedAt: string;
  createdAt: string;
}
export interface SeoCollection {
  id: string;
  pageName?: {
    value?: string;
    id?: string;
  }[];
  pageTitle?: {
    value?: string;
    id?: string;
  }[];
  metaDescription?: {
    value?: string;
    id?: string;
  }[];
  metaKeywords?: {
    value?: string;
    id?: string;
  }[];
  openGraphTitle?: {
    value?: string;
    id?: string;
  }[];
  openGraphDescription?: {
    value?: string;
    id?: string;
  }[];
  openGraphImage?: {
    value?: string | Media;
    id?: string;
  }[];
  updatedAt: string;
  createdAt: string;
}
export interface ReturnsRefundsCollection {
  id: string;
  policies?: {
    policyName?: string;
    policyDescription?: string;
    id?: string;
  }[];
  returnsExchanges?: {
    orderNumber?: string;
    returnType?: 'Return' | 'Exchange';
    returnReason?: string;
    returnStatus?: 'Initiated' | 'Received' | 'Refunded';
    returnInstructions?: string;
    id?: string;
  }[];
  refundsCredits?: {
    orderNumber?: string;
    refundAmount?: number;
    refundStatus?: 'Pending' | 'Processed';
    creditIssued?: boolean;
    id?: string;
  }[];
  updatedAt: string;
  createdAt: string;
}
export interface PaymentGatewayIntegrationCollection {
  id: string;
  gatewayName?: string;
  paymentMethods?: {
    method?: string;
    supportedCurrencies?: {
      currency?: string;
      id?: string;
    }[];
    id?: string;
  }[];
  security?: {
    pciCompliance?: string;
    encryption?: string;
  };
  updatedAt: string;
  createdAt: string;
}
export interface InventoryCollection {
  id: string;
  product?: string | ProductCollection;
  stockLevel?: number;
  threshold?: number;
  alertsEnabled?: boolean;
  updatedAt: string;
  createdAt: string;
}
export interface DataSecurityCollection {
  id: string;
  customerDataProtection?: {
    description?: string;
    id?: string;
  }[];
  privacyRegulations?: {
    description?: string;
    id?: string;
  }[];
  secureCheckout?: {
    description?: string;
    id?: string;
  }[];
  paymentProcessing?: {
    description?: string;
    id?: string;
  }[];
  updatedAt: string;
  createdAt: string;
}
export interface CustomerServiceCollection {
  id: string;
  inquiries?: {
    subject?: string;
    message?: string;
    status?: 'Open' | 'Pending' | 'Resolved';
    id?: string;
  }[];
  orderUpdates?: {
    orderNumber?: string;
    status?: 'Processing' | 'Shipped' | 'Delivered' | 'Canceled';
    updateMessage?: string;
    id?: string;
  }[];
  supportChannels?: {
    channel?: string;
    details?: string;
    id?: string;
  }[];
  knowledgeBase?: string;
  updatedAt: string;
  createdAt: string;
}
export interface CustomerCommunicationCollection {
  id: string;
  orderConfirmationEmails?: {
    emailSubject?: string;
    emailContent?: {
      [k: string]: unknown;
    }[];
    id?: string;
  }[];
  shippingNotifications?: {
    notificationType?: 'ShippingConfirmation' | 'TrackingUpdate';
    notificationContent?: {
      [k: string]: unknown;
    }[];
    id?: string;
  }[];
  marketingEmails?: {
    campaignName?: string;
    emailSubject?: string;
    emailContent?: {
      [k: string]: unknown;
    }[];
    userConsent?: boolean;
    id?: string;
  }[];
  updatedAt: string;
  createdAt: string;
}
