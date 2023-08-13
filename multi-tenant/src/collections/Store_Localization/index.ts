// collections/StoreLocalizationCollection.ts

import { CollectionConfig } from "payload/types";
import { tenant } from '../fields/tenant'
import { loggedIn } from './access/loggedIn'
import { tenantAdmins } from './access/tenantAdmins'
import { tenants } from './access/tenants'

export const StoreLocalizationCollection: CollectionConfig = {
  slug: "store-localization-collection",
  access: { read: tenants,
    create: loggedIn,
    update: tenantAdmins,
    delete: tenantAdmins,
  },
  fields: [
    {
      name: "languages",
      type: "array",
      label: "Languages",
      fields: [
        {
          name: "languageCode",
          type: "text",
          label: "Language Code",
        },
        {
          name: "languageName",
          type: "text",
          label: "Language Name",
        },
      ],
    },
    {
      name: "currencies",
      type: "array",
      label: "Currencies",
      fields: [
        {
          name: "currencyCode",
          type: "text",
          label: "Currency Code",
        },
        {
          name: "currencySymbol",
          type: "text",
          label: "Currency Symbol",
        },
      ],
    },
    {
      name: "localizedContent",
      type: "array",
      label: "Localized Content",
      fields: [
        {
          name: "language",
          type: "relationship",
          relationTo: "store-localization-collection",
          label: "Language",
        },
        {
          name: "currency",
          type: "relationship",
          relationTo: "store-localization-collection",
          label: "Currency",
        },
        {
          name: "localizedTitle",
          type: "text",
          label: "Localized Title",
        },
        {
          name: "localizedDescription",
          type: "textarea",
          label: "Localized Description",
        },
        // Add more fields for other localized content
      ],
    },tenant
  ],
};
