import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    {
      type: 'category',
      label: 'Overview',
      items: [
        'overview/what-is-aster',
        'overview/why-aster',
        'overview/aster-vs-grpc',
      ],
    },
    {
      type: 'category',
      label: 'Quickstart',
      items: [
        'quickstart/python',
        'quickstart/mission-control',
        'quickstart/first-service',
      ],
    },
    {
      type: 'category',
      label: 'Concepts',
      items: [
        'concepts/transport',
        'concepts/contract-identity',
        'concepts/serialization',
        'concepts/discovery',
        'concepts/session-scoped-services',
        'concepts/trust-model',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        'guides/services',
        'guides/define-a-service',
        'guides/dial-a-service',
        'guides/observability',
        'guides/mcp-integration',
        'guides/port-from-grpc',
      ],
    },
    {
      type: 'category',
      label: 'Bindings',
      items: [
        {
          type: 'category',
          label: 'Python',
          link: { type: 'doc', id: 'bindings/python/index' },
          items: [
            'bindings/python/server',
            'bindings/python/client',
          ],
        },
        {
          type: 'category',
          label: 'TypeScript',
          link: { type: 'doc', id: 'bindings/javascript/index' },
          items: [
            'bindings/javascript/ts-server',
            'bindings/javascript/ts-client',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      items: [
        'reference/api',
        'reference/architecture',
        'reference/configuration',
        'reference/cli',
        {
          type: 'link',
          label: 'Python API (pdoc)',
          href: 'https://docs.aster.site/api/python/',
        },
        {
          type: 'link',
          label: 'TypeScript API (TypeDoc)',
          href: 'https://docs.aster.site/api/typescript/',
        },
      ],
    },
  ],
};

export default sidebars;
