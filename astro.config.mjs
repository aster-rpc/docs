import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://sdk.getaster.now',
  build: { assets: '_docs' },
  integrations: [starlight({
    title: 'Aster',
    description: 'Documentation for the Aster peer-to-peer application SDK preview.',
    logo: { src: './src/assets/aster-mark.svg', alt: 'Aster' },
    favicon: '/img/favicon.ico',
    customCss: ['./src/styles/aster.css'],
    components: { Footer: './src/components/DocsFooter.astro' },
    social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/aster-rpc/aster-rpc' }],
    sidebar: [
  {
    "label": "Start here",
    "items": [
      {
        "label": "Introduction",
        "slug": "docs"
      },
      {
        "label": "Language and package compatibility",
        "slug": "docs/reference/compatibility"
      },
      {
        "label": "Your first Rust service",
        "slug": "docs/quickstart/rust"
      },
      {
        "label": "Your first Python or TypeScript service",
        "slug": "docs/quickstart/python"
      },
      {
        "label": "Next steps",
        "slug": "docs/quickstart/first-service"
      }
    ],
    "collapsed": false
  },
  {
    "label": "Understand Aster",
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
        "label": "Aster and gRPC",
        "slug": "docs/overview/aster-vs-grpc"
      },
      {
        "label": "Architecture",
        "slug": "docs/reference/architecture"
      },
      {
        "label": "Peer connectivity",
        "slug": "docs/concepts/transport"
      },
      {
        "label": "Trust model",
        "slug": "docs/concepts/trust-model"
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
    "label": "Languages",
    "items": [
      {
        "label": "Choose a language",
        "slug": "docs/bindings"
      },
      {
        "label": "Rust",
        "collapsed": true,
        "items": [
          {
            "label": "Overview",
            "slug": "docs/bindings/rust"
          },
          {
            "label": "Server",
            "slug": "docs/bindings/rust/server"
          },
          {
            "label": "Client",
            "slug": "docs/bindings/rust/client"
          },
          {
            "label": "First service",
            "slug": "docs/quickstart/rust"
          }
        ]
      },
      {
        "label": "Python",
        "collapsed": true,
        "items": [
          {
            "label": "Overview",
            "slug": "docs/bindings/python"
          },
          {
            "label": "Server",
            "slug": "docs/bindings/python/server"
          },
          {
            "label": "Client",
            "slug": "docs/bindings/python/client"
          },
          {
            "label": "First service",
            "slug": "docs/quickstart/python"
          }
        ]
      },
      {
        "label": "TypeScript",
        "collapsed": true,
        "items": [
          {
            "label": "Overview",
            "slug": "docs/bindings/typescript"
          },
          {
            "label": "Server",
            "slug": "docs/bindings/typescript/server"
          },
          {
            "label": "Client",
            "slug": "docs/bindings/typescript/client"
          },
          {
            "label": "First service",
            "slug": "docs/quickstart/python"
          }
        ]
      },
      {
        "label": "Go",
        "collapsed": true,
        "items": [
          {
            "label": "Overview",
            "slug": "docs/bindings/go"
          },
          {
            "label": "Server",
            "slug": "docs/bindings/go/server"
          },
          {
            "label": "Client",
            "slug": "docs/bindings/go/client"
          },
          {
            "label": "First service",
            "slug": "docs/quickstart/go"
          }
        ]
      },
      {
        "label": "Java and Kotlin",
        "collapsed": true,
        "items": [
          {
            "label": "Overview",
            "slug": "docs/bindings/java"
          },
          {
            "label": "Server",
            "slug": "docs/bindings/java/server"
          },
          {
            "label": "Client",
            "slug": "docs/bindings/java/client"
          },
          {
            "label": "First service",
            "slug": "docs/quickstart/java"
          },
          {
            "label": "Kotlin",
            "slug": "docs/bindings/java/kotlin"
          }
        ]
      },
      {
        "label": ".NET",
        "collapsed": true,
        "items": [
          {
            "label": "Overview",
            "slug": "docs/bindings/dotnet"
          },
          {
            "label": "Server",
            "slug": "docs/bindings/dotnet/server"
          },
          {
            "label": "Client",
            "slug": "docs/bindings/dotnet/client"
          },
          {
            "label": "First service",
            "slug": "docs/quickstart/dotnet"
          }
        ]
      }
    ],
    "collapsed": true
  },
  {
    "label": "Build services",
    "items": [
      {
        "label": "Services and types",
        "slug": "docs/guides/services"
      },
      {
        "label": "Define a service",
        "slug": "docs/guides/define-a-service"
      },
      {
        "label": "Dial a service",
        "slug": "docs/guides/dial-a-service"
      },
      {
        "label": "TypeScript build setup",
        "slug": "docs/guides/typescript-build-setup"
      },
      {
        "label": "Baseline services",
        "slug": "docs/guides/baseline-services"
      },
      {
        "label": "HTTPS and WebTransport",
        "slug": "docs/guides/http"
      },
      {
        "label": "Expose an HTTP service",
        "slug": "docs/guides/expose"
      },
      {
        "label": "AI agent integration (MCP)",
        "slug": "docs/guides/mcp-integration"
      },
      {
        "label": "Port from gRPC",
        "slug": "docs/guides/port-from-grpc"
      }
    ],
    "collapsed": true
  },
  {
    "label": "Data and coordination",
    "items": [
      {
        "label": "Blobs, documents, and gossip",
        "slug": "docs/guides/data"
      },
      {
        "label": "Replicated coordination",
        "slug": "docs/guides/coordination"
      },
      {
        "label": "Fenced leases",
        "slug": "docs/guides/leases"
      },
      {
        "label": "Topology and placement",
        "slug": "docs/guides/topology"
      },
      {
        "label": "Sealed grants",
        "slug": "docs/guides/sealed-grants"
      }
    ],
    "collapsed": true
  },
  {
    "label": "Operate",
    "items": [
      {
        "label": "Operating a node",
        "slug": "docs/guides/operations"
      },
      {
        "label": "Observability",
        "slug": "docs/guides/observability"
      },
      {
        "label": "Configuration",
        "slug": "docs/reference/configuration"
      }
    ],
    "collapsed": true
  },
  {
    "label": "Examples",
    "items": [
      {
        "label": "MissionControl",
        "slug": "docs/quickstart/mission-control"
      },
      {
        "label": "Hello service",
        "slug": "docs/examples/hello-service"
      },
      {
        "label": "Cross-language interop",
        "slug": "docs/examples/cross-language"
      },
      {
        "label": "Python ROW mode",
        "slug": "docs/examples/data-heavy-row-mode"
      }
    ],
    "collapsed": true
  },
  {
    "label": "Reference",
    "items": [
      {
        "label": "API index",
        "slug": "docs/reference/api"
      },
      {
        "label": "CLI",
        "slug": "docs/reference/cli"
      },
      {
        "label": "Python API",
        "link": "https://sdk.getaster.now/api/python/aster/public.html"
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
