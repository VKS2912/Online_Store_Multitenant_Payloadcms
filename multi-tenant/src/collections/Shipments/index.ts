// collections/ShippingAndFulfillmentCollection.ts

import { CollectionConfig } from "payload/types";
import { tenant } from '../fields/tenant'
import { loggedIn } from './access/loggedIn'
import { tenantAdmins } from './access/tenantAdmins'
import { tenants } from './access/tenants'

export const ShippingAndFulfillmentCollection: CollectionConfig = {
  slug: "shipping-fulfillment-collection",
  access: { read: tenants,
    create: loggedIn,
    update: tenantAdmins,
    delete: tenantAdmins,
  },
  fields: [
    {
      name: "carrier",
      type: "text",
      label: "Shipping Carrier",
    },
    {
      name: "shippingOptions",
      type: "array",
      label: "Shipping Options",
      fields: [
        {
          name: "option",
          type: "text",
          label: "Shipping Option",
        },
        {
          name: "rate",
          type: "number",
          label: "Shipping Rate",
        },
      ],
    },
    {
      name: "trackingNumber",
      type: "text",
      label: "Tracking Number",
    },
    {
      name: "status",
      type: "select",
      label: "Order Status",
      options: ["Processing", "Shipped", "Delivered"],
    },
    {
      name: "fulfillmentDate",
      type: "date",
      label: "Fulfillment Date",
    },tenant
  ],
};
