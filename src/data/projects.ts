import type { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: 'printnparcel',

    title: 'PrintNParcel',

    role: 'Backend Architect & Full Stack Developer',

    summary:
      'Printing and logistics aggregation platform with vendor onboarding, payment splitting, shipping integration, and order lifecycle management.',

    problem:
      'Traditional print shops operate independently with no unified ordering, vendor management, or logistics workflow.',

    solution:
      'Designed a multi-vendor architecture supporting product catalogs, Razorpay payments, automatic revenue sharing, vendor dashboards, and shipment tracking.',

    impact:
      'Created a scalable platform capable of onboarding multiple vendors while centralizing payments and fulfillment.',

    technologies: ['Node.js', 'Express', 'MongoDB', 'Next.js', 'TypeScript', 'Razorpay'],

    architecture: [
      'Multi-vendor architecture',
      'Payment splitting',
      'Order state machine',
      'Role-based authentication',
      'REST APIs',
    ],

    featured: true,

    caseStudySlug: 'printnparcel',
  },

  {
    id: 'opsnav-crm',

    title: 'OpsNav CRM',

    role: 'Backend Architect',

    summary:
      'Modular CRM designed around a single customer identity with scalable workflows and unified customer data.',

    problem:
      'Customer information was duplicated across modules, causing inconsistent business workflows.',

    solution:
      'Designed a normalized data model with reusable customer entities and modular CRM architecture.',

    impact: 'Reduced duplication while improving maintainability and future scalability.',

    technologies: ['Node.js', 'MongoDB', 'Express', 'JWT'],

    architecture: ['Domain-driven modules', 'Normalized schema', 'REST API', 'Scalable CRM design'],

    featured: true,

    caseStudySlug: 'opsnav-crm',
  },

  {
    id: 'waterdrop-iot',

    title: 'IoT Water Management Platform',

    role: 'Backend Engineer',

    summary:
      'Backend platform powering connected hydration stations with real-time telemetry and device synchronization.',

    problem:
      'Thousands of IoT devices needed reliable backend communication and telemetry processing.',

    solution:
      'Developed scalable backend APIs and optimized MongoDB schema for high-frequency device communication.',

    impact:
      'Supported thousands of daily transactions while improving response time through indexing and optimized queries.',

    technologies: ['Node.js', 'MongoDB', 'Express', 'Docker'],

    architecture: [
      'IoT backend',
      'Telemetry APIs',
      'Optimized indexing',
      'Distributed device sync',
    ],

    featured: true,

    caseStudySlug: 'waterdrop-iot',
  },

  {
    id: 'adigo-ecommerce',

    title: 'Adigo Multi-Vendor E-Commerce Backend',

    role: 'Backend Engineer',

    summary:
      'Production-oriented multi-vendor e-commerce backend supporting secure payments, vendor isolation, and scalable order management.',

    problem:
      'Traditional e-commerce platforms require secure payment processing, independent vendor operations, and reliable order workflows while maintaining a unified customer experience.',

    solution:
      'Designed a modular REST API architecture separating authentication, products, carts, payments, and orders into independent domains. Integrated Razorpay with server-side signature verification and persisted orders only after successful payment confirmation.',

    impact:
      'Demonstrates production-grade backend engineering through secure payment workflows, multi-vendor architecture, role-based authorization, and scalable business logic suitable for real-world marketplace applications.',

    technologies: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'Mongoose',
      'JWT',
      'Razorpay',
      'REST API',
      'Postman',
    ],

    architecture: [
      'Multi-vendor marketplace architecture',
      'Role-based access control (Admin, Vendor, Customer)',
      'Modular service-controller architecture',
      'JWT authentication',
      'Server-side payment verification',
      'Vendor-wise order segregation',
      'Order lifecycle management',
      'RESTful API design',
    ],

    featured: true,

    caseStudySlug: 'adigo-ecommerce',
  },

  {
    id: 'payment-platform',

    title: 'Payment & Ledger Engine',

    role: 'Backend Developer',

    summary:
      'Unified payment integration supporting Razorpay, Paytm, and Stripe with reconciliation and ledger management.',

    problem: 'Payment failures and reconciliation mismatches created operational overhead.',

    solution:
      'Built a centralized payment service with automated reconciliation, ledgers, and failure alerts.',

    impact: 'Improved payment reliability and reduced manual financial verification.',

    technologies: ['Node.js', 'MongoDB', 'Stripe', 'Razorpay', 'Paytm'],

    architecture: [
      'Payment abstraction',
      'Ledger service',
      'Webhook processing',
      'Transaction reconciliation',
    ],

    featured: true,

    caseStudySlug: 'payment-platform',
  },

  {
    id: 'microservices-platform',

    title: 'Scalable Backend Microservices',

    role: 'Technical Lead',

    summary:
      'Designed and maintained production backend microservices with Docker, GCP, GitHub Actions, JWT authentication, and CI/CD automation.',

    problem:
      'Growing product complexity required modular services and reliable deployment pipelines.',

    solution:
      'Implemented containerized services, CI/CD automation, authentication, and engineering standards for the development team.',

    impact:
      'Improved delivery speed, code quality, and engineering scalability while mentoring a team of developers.',

    technologies: ['Node.js', 'Docker', 'Google Cloud', 'GitHub Actions', 'JWT'],

    architecture: [
      'Microservices',
      'CI/CD',
      'Containerization',
      'Authentication',
      'Agile architecture',
    ],

    featured: true,

    caseStudySlug: 'microservices-platform',
  },
];
