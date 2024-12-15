import React from 'react';

// components
import Dashboard from 'src/components/_admin/dashboard';

// Meta information
export const metadata = {
  title: 'Seodrra - Dashboard',
  description: 'Welcome to the Seodrra Dashboard. Manage your e-commerce operations with ease.',
  applicationName: 'Seodrra Dashboard',
  authors: 'Seodrra',
  keywords: 'dashboard, e-commerce, management, Seodrra',
  icons: {
    icon: '/favicon.png'
  }
};

export default function page() {
  return (
    <>
      <Dashboard isVendor />
    </>
  );
}
