import { withSentryConfig } from '@sentry/nextjs';

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
};

// Make sure adding Sentry options is the last code to run before exporting
export default withSentryConfig(nextConfig, {
  org: 'individual-5c',
  project: 'javascript-nextjs',

  // An auth token is required for uploading source maps.
  authToken: process.env.SENTRY_AUTH_TOKEN,
  telemetry: false,
  silent: false, // Can be used to suppress logs
});
