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
        'bindings/rust/index',
        'bindings/jvm/index',
        'bindings/dotnet/index',
        'bindings/go/index',
        'bindings/javascript/index',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      items: [
        'reference/configuration',
        'reference/cli',
      ],
    },
    {
      type: 'category',
      label: 'Examples',
      items: [
        'examples/hello-service',
        'examples/cross-language',
        'examples/data-heavy-row-mode',
      ],
    },
  ],
};

export default sidebars;
