import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
  storage:
    process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_KEYSTATIC_GITHUB_REPO
      ? {
          kind: 'github',
          repo: {
            owner: process.env.NEXT_PUBLIC_KEYSTATIC_GITHUB_OWNER || 'albertmartinjoseph',
            name: process.env.NEXT_PUBLIC_KEYSTATIC_GITHUB_REPO || 'Xanamedtecweb',
          },
        }
      : {
          kind: 'local',
        },
  collections: {
    pages: collection({
      label: 'Pages',
      slugField: 'title',
      path: 'src/content/pages/*',
      format: { data: 'json' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        metaTitle: fields.text({ label: 'Meta Title' }),
        metaDescription: fields.text({ label: 'Meta Description', multiline: true }),
      },
    }),
    tests: collection({
      label: 'Health Tests',
      slugField: 'name',
      path: 'src/content/tests/*',
      format: { data: 'json' },
      schema: {
        name: fields.slug({ name: { label: 'Test Name' } }),
        tagline: fields.text({ label: 'Tagline' }),
        category: fields.text({ label: 'Category' }),
        description: fields.text({ label: 'Description', multiline: true }),
        price: fields.text({ label: 'Price' }),
      },
    }),
    testimonials: collection({
      label: 'Client Testimonials',
      slugField: 'name',
      path: 'src/content/testimonials/*',
      format: { data: 'json' },
      schema: {
        name: fields.slug({ name: { label: 'Reviewer Name' } }),
        quote: fields.text({ label: 'Review Text / Experience', multiline: true }),
        rating: fields.integer({ label: 'Star Rating (1-5)', defaultValue: 5 }),
      },
    }),
  },
  singletons: {
    navigation: singleton({
      label: 'Navigation Menu Configuration',
      path: 'src/content/navigation',
      format: { data: 'json' },
      schema: {
        showMyProfile: fields.checkbox({
          label: 'Show "My Profile" Dropdown in Menu',
          description: 'Toggle visibility of the My Profile navigation item',
          defaultValue: true,
        }),
        portalUrl: fields.text({
          label: 'External Patient Portal URL (Optional)',
          description: 'If set, Login/Register and My Profile link here. If blank, redirects to homepage.',
          defaultValue: '',
        }),
      },
    }),
    siteSettings: singleton({
      label: 'Site Settings & Contact',
      path: 'src/content/settings',
      format: { data: 'json' },
      schema: {
        companyName: fields.text({ label: 'Company Name', defaultValue: 'Xana Medtec Ltd' }),
        address: fields.text({
          label: 'Address',
          defaultValue: 'Xana Medtec Ltd, Bartle House, Oxford Court, Manchester, M2 3WQ',
        }),
        contactEmail: fields.text({ label: 'Contact Email', defaultValue: 'info@xanamedtec.com' }),
        linkedinUrl: fields.text({
          label: 'LinkedIn URL',
          defaultValue: 'https://www.linkedin.com/company/xana-medtec/home/',
        }),
        xUrl: fields.text({ label: 'X (Twitter) URL', defaultValue: 'https://x.com/XanaMedtec' }),
      },
    }),
  },
});

