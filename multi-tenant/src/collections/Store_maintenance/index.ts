import { CollectionConfig } from 'payload/types';
import { tenant } from '../fields/tenant'
import { loggedIn } from './access/loggedIn'
import { tenantAdmins } from './access/tenantAdmins'
import { tenants } from './access/tenants'

export const StoreMaintenanceCollection: CollectionConfig = {
  slug: 'store-maintenance',
  labels: {
    singular: 'Store Maintenance',
    plural: 'Store Maintenance',
  },access: { read: tenants,
    create: loggedIn,
    update: tenantAdmins,
    delete: tenantAdmins,
  },
  fields: [
    {
      name: 'issueTitle',
      type: 'text',
      label: 'Issue Title',
      required: true,
    },
    {
      name: 'issueDescription',
      type: 'textarea',
      label: 'Issue Description',
      required: true,
    },
    {
      name: 'priority',
      type: 'select',
      label: 'Priority',
      options: ['Low', 'Medium', 'High'],
      required: true,
    },
    {
      name: 'status',
      type: 'select',
      label: 'Status',
      options: ['Open', 'InProgress', 'Resolved'],
      required: true,
    },
    {
      name: 'assignedTo',
      type: 'text',
      label: 'Assigned To',
    },
    {
      name: 'reportedBy',
      type: 'text',
      label: 'Reported By',
      required: true,
    },
    {
      name: 'createdAt',
      type: 'date',
      label: 'Created At',
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'updatedAt',
      type: 'date',
      label: 'Updated At',
      admin: {
        readOnly: true,
      },
    },tenant
  ],
};
