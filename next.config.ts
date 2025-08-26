import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Legacy calculator URL redirects
      {
        source: '/calculators/sip',
        destination: '/calculators/investment/sip',
        permanent: true,
      },
      {
        source: '/calculators/emi',
        destination: '/calculators/loan/emi',
        permanent: true,
      },
      {
        source: '/calculators/ppf',
        destination: '/calculators/investment/ppf',
        permanent: true,
      },
      {
        source: '/calculators/lumpsum',
        destination: '/calculators/investment/lumpsum',
        permanent: true,
      },
      {
        source: '/calculators/home-loan',
        destination: '/calculators/loan/home-loan',
        permanent: true,
      },
      {
        source: '/calculators/personal-loan',
        destination: '/calculators/loan/personal-loan',
        permanent: true,
      },
      {
        source: '/calculators/budget-planner',
        destination: '/calculators/planning/budget-planner',
        permanent: true,
      },
      {
        source: '/calculators/retirement',
        destination: '/calculators/planning/retirement',
        permanent: true,
      },
      {
        source: '/calculators/goal-planning',
        destination: '/calculators/planning/goal-planning',
        permanent: true,
      },
      // Add any other legacy patterns here
      {
        source: '/calculators/fd',
        destination: '/calculators/investment/ppf',
        permanent: true,
      }
    ];
  },
};

export default nextConfig;
