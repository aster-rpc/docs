import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://docs.aster.site',
  integrations: [starlight({
    title: 'Aster',
    description: 'Documentation for the enterprise peer-to-peer application SDK.',
    logo: { src: './src/assets/aster-mark.svg', alt: 'Aster' },
    favicon: '/img/favicon.ico',
    customCss: ['./src/styles/aster.css'],
    components: { Footer: './src/components/DocsFooter.astro' },
    social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/aster-rpc/aster-rpc' }],
    sidebar: [
  {
    "label": "Getting started",
    "items": [
      {
        "label": "Introduction",
        "slug": "index"
      },
      {
        "label": "Your first service",
        "slug": "docs/quickstart/python"
      },
      {
        "label": "MissionControl",
        "slug": "docs/quickstart/mission-control"
      },
      {
        "label": "What's next",
        "slug": "docs/quickstart/first-service"
      }
    ],
    "collapsed": false
  },
  {
    "label": "Overview",
    "items": [
      {
        "label": "What is Aster?",
        "slug": "docs/overview/what-is-aster"
      },
      {
        "label": "Why Aster?",
        "slug": "docs/overview/why-aster"
      },
      {
        "label": "Aster vs gRPC",
        "slug": "docs/overview/aster-vs-grpc"
      }
    ],
    "collapsed": false
  },
  {
    "label": "Concepts",
    "items": [
      {
        "label": "Identity-first transport",
        "slug": "docs/concepts/transport"
      },
      {
        "label": "Contract identity",
        "slug": "docs/concepts/contract-identity"
      },
      {
        "label": "Serialization",
        "slug": "docs/concepts/serialization"
      },
      {
        "label": "Discovery and registry",
        "slug": "docs/concepts/discovery"
      },
      {
        "label": "Session-scoped services",
        "slug": "docs/concepts/session-scoped-services"
      }
    ],
    "collapsed": true
  },
  {
    "label": "Security",
    "items": [
      {
        "label": "Trust model",
        "slug": "docs/concepts/trust-model"
      }
    ],
    "collapsed": true
  },
  {
    "label": "Guides",
    "items": [
      {
        "label": "Defining Services and Types",
        "slug": "docs/guides/services"
      },
      {
        "label": "Define a Service",
        "slug": "docs/guides/define-a-service"
      },
      {
        "label": "Dial a Service",
        "slug": "docs/guides/dial-a-service"
      },
      {
        "label": "TypeScript Build Setup",
        "slug": "docs/guides/typescript-build-setup"
      },
      {
        "label": "Observability",
        "slug": "docs/guides/observability"
      },
      {
        "label": "AI Agent Integration (MCP)",
        "slug": "docs/guides/mcp-integration"
      },
      {
        "label": "Porting from gRPC",
        "slug": "docs/guides/port-from-grpc"
      }
    ],
    "collapsed": true
  },
  {
    "label": "Language guides",
    "items": [
      {
        "label": "Python",
        "slug": "docs/bindings/python"
      },
      {
        "label": "Python server",
        "slug": "docs/bindings/python/server"
      },
      {
        "label": "Python client",
        "slug": "docs/bindings/python/client"
      },
      {
        "label": "TypeScript",
        "slug": "docs/bindings/typescript"
      },
      {
        "label": "TypeScript server",
        "slug": "docs/bindings/typescript/server"
      },
      {
        "label": "TypeScript client",
        "slug": "docs/bindings/typescript/client"
      }
    ],
    "collapsed": true
  },
  {
    "label": "Examples",
    "items": [
      {
        "label": "Hello Service",
        "slug": "docs/examples/hello-service"
      },
      {
        "label": "Cross-Language Interop",
        "slug": "docs/examples/cross-language"
      },
      {
        "label": "Data-Heavy Row Mode",
        "slug": "docs/examples/data-heavy-row-mode"
      }
    ],
    "collapsed": true
  },
  {
    "label": "Reference",
    "items": [
      {
        "label": "API Reference",
        "slug": "docs/reference/api"
      },
      {
        "label": "Architecture",
        "slug": "docs/reference/architecture"
      },
      {
        "label": "Configuration",
        "slug": "docs/reference/configuration"
      },
      {
        "label": "CLI Reference",
        "slug": "docs/reference/cli"
      },
      {
        "label": "Python API",
        "link": "https://docs.aster.site/api/python/aster/public.html"
      },
      {
        "label": "TypeScript API",
        "link": "/api/typescript/"
      }
    ],
    "collapsed": true
  }
],
    expressiveCode: { themes: ['github-dark', 'github-light'] },
  })],
});
