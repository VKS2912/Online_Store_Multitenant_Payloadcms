import { buildConfig } from 'payload/config';
import path from 'path';

import { Pages } from './collections/Pages'
import { Tenants } from './collections/Tenants'
import { Users } from './collections/Users'
import { Products } from './collections/Products/index'
import { Media } from './collections/media/index'
import {Attribute} from './collections/Attributes/index'
import {Category } from './collections/Category/index'
import { CustomerCollection } from './collections/Customer/index'
import { CustomerCommunicationCollection } from './collections/Customer_Communication/index'
import { CustomerServiceCollection } from './collections/Customerservice/index'
import { DataSecurityCollection } from './collections/Data_Security/index'
import { InventoryCollection } from './collections/Inventory/index'
import { PaymentGatewayIntegrationCollection } from './collections/Payments/index'
import { ReturnsRefundsCollection } from './collections/Returns&Refunds/index'
import { SEOCollection } from './collections/SEO_optimization/index'
import { ShippingAndFulfillmentCollection } from './collections/Shipments/index'
import { SocialMediaIntegrationCollection } from './collections/Social_Media_Integration/index'
import { StorefrontCustomizationCollection } from './collections/Store_Front_Customization/index'
import { StoreLocalizationCollection } from './collections/Store_Localization/index'
import { StoreMaintenanceCollection } from './collections/Store_maintenance/index'
import { ThirdPartyIntegrationCollection } from './collections/Third_party_services/index'
import { ReportsAnalyticsCollection } from './collections/reports&analytics/index'
import { OrderCollection } from './collections/order/index'

export default buildConfig({
  serverURL: 'http://localhost:3000',
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,Pages, Tenants, Products, Media, Category,OrderCollection, Attribute, ReportsAnalyticsCollection,ThirdPartyIntegrationCollection, StoreMaintenanceCollection, StoreLocalizationCollection, StorefrontCustomizationCollection, SocialMediaIntegrationCollection, ShippingAndFulfillmentCollection, SEOCollection, ReturnsRefundsCollection, PaymentGatewayIntegrationCollection, InventoryCollection, DataSecurityCollection, CustomerServiceCollection, CustomerCommunicationCollection , CustomerCollection
    // Add Collections here
    // Examples,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
})
