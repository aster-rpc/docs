import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import CodeBlock from '@theme/CodeBlock';
import {
  siDotnet,
  siGo,
  siKotlin,
  siOpenjdk,
  siPython,
  siRust,
  siTypescript,
} from 'simple-icons';
import ConceptCard from '../components/ConceptCard';
import ArchitectureDiagram from '../components/ArchitectureDiagram';

const HERO_SNIPPETS = [
  'dial("peer:pubk:9q4m...")',
  '@service class InvoiceStream',
  'schema = blake3(service_schema)',
  '$ aster shell peer://agent.mesh',
  'resolve credential -> capability',
  'relay fallback: enabled',
  'HelloService:say_hello(name="world")',
  'session-scoped service attached',
];

const HERO_NODES = [
  { id: 'client-a', label: 'PY', x: 14, y: 26, size: 'sm' },
  { id: 'client-b', label: 'TS', x: 20, y: 72, size: 'sm' },
  { id: 'gateway', label: 'Aster', x: 50, y: 50, size: 'lg' },
  { id: 'agent', label: 'MCP', x: 78, y: 20, size: 'md' },
  { id: 'edge', label: 'EDGE', x: 84, y: 64, size: 'md' },
  { id: 'runtime', label: 'AI', x: 58, y: 84, size: 'sm' },
];

const HERO_LINKS = [
  ['client-a', 'gateway'],
  ['client-b', 'gateway'],
  ['gateway', 'agent'],
  ['gateway', 'edge'],
  ['gateway', 'runtime'],
  ['agent', 'edge'],
];

const POSITION_BY_ID = Object.fromEntries(
  HERO_NODES.map((node) => [node.id, { x: node.x, y: node.y }]),
);

const HERO_METRICS = [
  { label: 'iroh', value: 'QUIC + NAT traversal' },
  { label: 'Apache Fory', value: 'Cross-language wire format' },
  { label: 'BLAKE3', value: 'Content-addressed contracts' },
  { label: 'Four-gate auth', value: 'Offline root key' },
];

const LANGUAGE_SUPPORT = [
  { id: 'python', label: 'Python', state: 'shipping', href: '/docs/bindings/python' },
  { id: 'typescript', label: 'TypeScript', state: 'shipping', href: '/docs/bindings/typescript' },
  { id: 'golang', label: 'Go', state: 'in-progress' },
  { id: 'java', label: 'Java', state: 'in-progress' },
  { id: 'kotlin', label: 'Kotlin', state: 'in-progress' },
  { id: 'dotnet', label: '.NET', state: 'in-progress' },
  { id: 'rust', label: 'Rust', state: 'planned' },
] as const;

const LANGUAGE_ICONS = {
  python: siPython,
  typescript: siTypescript,
  rust: siRust,
  golang: siGo,
  java: siOpenjdk,
  kotlin: siKotlin,
  dotnet: siDotnet,
} as const;

function FeatureBlock({
  kicker,
  title,
  children,
  code,
  codeLanguage,
  codeTitle,
  link,
  linkLabel,
  reverse,
}: {
  kicker: string;
  title: string;
  children: React.ReactNode;
  code: string;
  codeLanguage?: string;
  codeTitle?: string;
  link: string;
  linkLabel: string;
  reverse?: boolean;
}) {
  return (
    <div className={`asterFeature ${reverse ? 'asterFeature--reverse' : ''}`}>
      <div className="asterFeature__text">
        <span className="asterKicker">{kicker}</span>
        <h3>{title}</h3>
        <div className="asterFeature__body">{children}</div>
        <Link className="asterFeature__link" to={link}>
          {linkLabel} &rarr;
        </Link>
      </div>
      <div className="asterFeature__code">
        <CodeBlock language={codeLanguage || 'python'} title={codeTitle}>
          {code}
        </CodeBlock>
      </div>
    </div>
  );
}

const PYTHON_CODE = `from dataclasses import dataclass
from aster.decorators import service, rpc

@dataclass
class HelloRequest:
    name: str = ""

@dataclass
class HelloResponse:
    message: str = ""

@service
class HelloService:
    @rpc
    async def say_hello(self, req: HelloRequest) -> HelloResponse:
        return HelloResponse(message=f"Hello, {req.name}!")`;

const TYPESCRIPT_CODE = `import { Service, Rpc, WireType } from '@aster-rpc/aster';

@WireType("hello/HelloRequest")
class HelloRequest {
  name = "";
  constructor(init?: Partial<HelloRequest>) { if (init) Object.assign(this, init); }
}

@WireType("hello/HelloResponse")
class HelloResponse {
  message = "";
  constructor(init?: Partial<HelloResponse>) { if (init) Object.assign(this, init); }
}

@Service({ name: "Hello", version: 1 })
class HelloService {
  @Rpc()
  async sayHello(req: HelloRequest): Promise<HelloResponse> {
    return new HelloResponse({ message: \`Hello, \${req.name}!\` });
  }
}`;

function CodeFirstFeature() {
  const [lang, setLang] = useState<'python' | 'typescript'>('python');
  return (
    <div className="asterFeature">
      <div className="asterFeature__text">
        <span className="asterKicker">Code-first</span>
        <h3>Define services in code. No .proto files. No generation step.</h3>
        <div className="asterFeature__body">
          <p>
            Decorate a class with <code>@service</code> / <code>@Service</code> and
            its methods with <code>@rpc</code> / <code>@Rpc</code>. Aster scans the
            type signatures, generates a content-addressed service schema, and
            handles serialization across languages. Your types are the schema.
          </p>
        </div>
        <Link className="asterFeature__link" to={lang === 'python' ? '/docs/quickstart/python' : '/docs/quickstart/python'}>
          Quickstart &rarr;
        </Link>
      </div>
      <div className="asterFeature__code">
        <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '0.5rem' }}>
          <button
            onClick={() => setLang('python')}
            style={{
              padding: '0.25rem 0.75rem',
              border: 'none',
              borderRadius: '4px 4px 0 0',
              cursor: 'pointer',
              fontSize: '0.85rem',
              fontWeight: lang === 'python' ? 600 : 400,
              background: lang === 'python' ? 'var(--ifm-color-primary)' : 'var(--ifm-background-surface-color)',
              color: lang === 'python' ? '#fff' : 'var(--ifm-font-color-base)',
            }}>
            Python
          </button>
          <button
            onClick={() => setLang('typescript')}
            style={{
              padding: '0.25rem 0.75rem',
              border: 'none',
              borderRadius: '4px 4px 0 0',
              cursor: 'pointer',
              fontSize: '0.85rem',
              fontWeight: lang === 'typescript' ? 600 : 400,
              background: lang === 'typescript' ? 'var(--ifm-color-primary)' : 'var(--ifm-background-surface-color)',
              color: lang === 'typescript' ? '#fff' : 'var(--ifm-font-color-base)',
            }}>
            TypeScript
          </button>
        </div>
        <CodeBlock
          language={lang === 'python' ? 'python' : 'typescript'}
          title={lang === 'python' ? 'hello_service.py' : 'hello_service.ts'}>
          {lang === 'python' ? PYTHON_CODE : TYPESCRIPT_CODE}
        </CodeBlock>
      </div>
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="asterHeroVisual" aria-hidden="true">
      <div className="asterHeroVisual__backdrop" />
      <div className="asterHeroVisual__beam" />

      <div className="asterCodeRail asterCodeRail--left">
        {HERO_SNIPPETS.map((snippet, index) => (
          <span
            key={`left-${snippet}`}
            className="asterCodeRail__item"
            style={{ animationDelay: `${index * 1.2}s` }}>
            {snippet}
          </span>
        ))}
      </div>

      <div className="asterCodeRail asterCodeRail--right">
        {[...HERO_SNIPPETS].reverse().map((snippet, index) => (
          <span
            key={`right-${snippet}`}
            className="asterCodeRail__item"
            style={{ animationDelay: `${index * 1.1}s` }}>
            {snippet}
          </span>
        ))}
      </div>

      <div className="asterSignalField">
        <svg
          className="asterSignalField__grid"
          viewBox="0 0 100 100"
          preserveAspectRatio="none">
          {HERO_LINKS.map(([from, to], index) => {
            const start = POSITION_BY_ID[from];
            const end = POSITION_BY_ID[to];
            return (
              <line
                key={`${from}-${to}`}
                className="asterSignalField__link"
                style={{ animationDelay: `${index * 0.35}s` }}
                x1={start.x}
                y1={start.y}
                x2={end.x}
                y2={end.y}
              />
            );
          })}
        </svg>

        {HERO_NODES.map((node, index) => (
          <div
            key={node.id}
            className={`asterSignalNode asterSignalNode--${node.size}`}
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              animationDelay: `${index * 0.4}s`,
            }}>
            <span>{node.label}</span>
          </div>
        ))}

        <div className="asterSignalPanel">
          <span className="asterSignalPanel__label">routing plane</span>
          <div className="asterSignalPanel__title">Verify peer, load schema, attach service.</div>
          <div className="asterSignalPanel__meta">
            <span>nat traversal</span>
            <span>relay fallback</span>
            <span>typed tools</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function LanguageBadgeIcon({ id }: { id: (typeof LANGUAGE_SUPPORT)[number]['id'] }) {
  const icon = LANGUAGE_ICONS[id];
  return (
    <svg
      viewBox="0 0 24 24"
      className="asterLanguageBadge__iconSvg"
      aria-hidden="true"
      style={{ color: `#${icon.hex}` }}>
      <path d={icon.path} />
    </svg>
  );
}

function LanguageSupportStrip() {
  return (
    <section className="asterLanguageSupport">
      <div className="container">
        <div className="asterLanguageSupport__intro">
          <span className="asterKicker">Language support</span>
          <p>Python and TypeScript are shipping 0.1.2 as first-class bindings. Go, Java, Kotlin, and .NET are in progress. Rust is planned.</p>
        </div>

        <div className="asterLanguageSupport__grid">
          {LANGUAGE_SUPPORT.map((language) => {
            const content = (
              <>
                <span className={`asterLanguageBadge__icon asterLanguageBadge__icon--${language.id}`}>
                  <LanguageBadgeIcon id={language.id} />
                </span>
                <span className="asterLanguageBadge__copy">
                  <strong>{language.label}</strong>
                  <span
                    className={`asterLanguageBadge__state ${
                      language.state === 'shipping'
                        ? 'asterLanguageBadge__state--shipping'
                        : language.state === 'in-progress'
                          ? 'asterLanguageBadge__state--progress'
                          : 'asterLanguageBadge__state--soon'
                    }`}>
                    {language.state === 'shipping'
                      ? 'Shipping 0.1.2'
                      : language.state === 'in-progress'
                        ? 'In progress'
                        : 'Planned'}
                  </span>
                </span>
              </>
            );

            if ('href' in language && language.href) {
              return (
                <Link key={language.id} className="asterLanguageBadge asterLanguageBadge--linked" to={language.href}>
                  {content}
                </Link>
              );
            }

            return (
              <div key={language.id} className="asterLanguageBadge">
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function Home(): React.JSX.Element {
  return (
    <Layout
      title="Machines authenticate to machines, on behalf of users."
      description="Peer-to-peer RPC framework with identity in the connection. Capability-based auth, cross-language wire format, built on iroh QUIC.">
      <main id="main-content" className="asterHome">
        <section className="asterHero">
          <div className="container asterHero__container">
            <div className="asterHero__content">
              <div className="asterEyebrow">PEER-TO-PEER RPC FRAMEWORK</div>
              <h1>Aster</h1>
              <p className="asterHero__tagline">Machines authenticate to machines, on behalf of users.</p>
              <p className="asterHero__lead">
                Safely &mdash; without a central authority and without shared secrets.
                No DNS, no load balancer, no certificate authority, no OAuth proxy
                in the middle. Identity is in the connection, not bolted on.
              </p>
              <p className="asterHero__sublead">
                The 2026 example: AI agents calling tools on remote machines without
                a hosted proxy or shared secrets. The same engineering covers IoT
                fleets, edge compute, and multi-tenant microservices &mdash; anywhere
                a machine is the principal and the user is the delegating authority.
              </p>
              <div className="asterHero__actions">
                <Link className="button button--primary button--lg" to="/docs/quickstart/mission-control">
                  Build Mission Control
                </Link>
                <Link className="button button--secondary button--lg" to="/docs/quickstart/python">
                  Try it in 60 seconds
                </Link>
              </div>

              <div className="asterHero__metrics">
                {HERO_METRICS.map((metric) => (
                  <div key={metric.label} className="asterHeroMetric">
                    <span className="asterHeroMetric__label">{metric.label}</span>
                    <strong>{metric.value}</strong>
                  </div>
                ))}
              </div>
            </div>

            <HeroVisual />
          </div>
        </section>

        <section className="asterProof">
          <div className="container">
            <div className="asterProof__row">
              <p>
                Built for AI runtimes, edge deployments, sovereign meshes, and
                multi-language services where addresses are unstable but identity
                and intent still need to hold.
              </p>
              <div className="asterProof__links">
                <Link to="/docs/quickstart/mission-control">Mission Control walkthrough</Link>
                <Link to="/docs/overview/why-aster">Why Aster</Link>
                <Link to="/docs/guides/mcp-integration">MCP integration</Link>
              </div>
            </div>
          </div>
        </section>

        <LanguageSupportStrip />

        <section className="asterSection asterSection--paper">
          <div className="container">
            <CodeFirstFeature />
          </div>
        </section>

        <section className="asterSection">
          <div className="container">
            <FeatureBlock
              kicker="Explore &amp; debug"
              title="Browse, inspect, and invoke any service from the shell."
              code={`$ aster shell <endpoint-addr>

producer:/$ cd services/HelloService
producer:/services/HelloService$ ls
  Method       Pattern    Signature
  say_hello    unary      (HelloRequest) -> HelloResponse

producer:/services/HelloService$ ./say_hello name="World"
-> HelloService.say_hello(name='World')
(42ms)
{
  "message": "Hello, World!"
}`}
              codeLanguage="bash"
              link="/docs/guides/dial-a-service"
              linkLabel="Shell guide"
              reverse
            >
              <p>
                The Aster shell connects to any peer and lets you navigate services
                like a filesystem. Browse methods, inspect schemas, and invoke
                RPCs interactively without pausing to generate or vendor client stubs.
              </p>
              <p>
                Tab completion, streaming output, session subshells, and
                non-interactive CLI equivalents for scripting.
              </p>
            </FeatureBlock>
          </div>
        </section>

        <section className="asterSection asterSection--paper">
          <div className="container">
            <FeatureBlock
              kicker="MCP integration"
              title="Connect any AI agent to your services in one command."
              code={`# Expose your service to Claude or any MCP-compatible agent
$ aster mcp <endpoint-addr>

# The agent sees typed tools automatically:
#   HelloService:say_hello
#     - name (string, required)
#     - greeting (string, default: "Hello")
#
#   FileStore:list (server_stream, returns array)
#   FileStore:upload (client_stream, accepts _items array)`}
              codeLanguage="bash"
              link="/docs/guides/mcp-integration"
              linkLabel="MCP integration guide"
            >
              <p>
                <code>aster mcp</code> runs an MCP server that exposes your services
                as tools with full type information. No OpenAPI mirror, no REST
                gateway, no SDK assembly line. The service schema <em>is</em> the tool definition.
              </p>
              <p>
                Layer in credential filters, allow/deny patterns, and human confirmation
                without splitting your operational surface across another stack.
              </p>
            </FeatureBlock>
          </div>
        </section>

        <section className="asterSection">
          <div className="container">
            <div className="asterSection__intro">
              <span className="asterKicker">What Aster changes</span>
              <h2>Make the transport, typed schema, and tool surface feel like one system.</h2>
              <p>
                Aster is strongest when the network is messy, the service graph is
                alive, and your team refuses to accept a pile of adapters as architecture.
              </p>
            </div>
            <div className="asterCards">
              <ConceptCard title="Dial by identity" href="/docs/concepts/transport">
                Connect to verified peers by public key, not hostnames. NAT traversal and relay fallback built in.
              </ConceptCard>
              <ConceptCard title="Portable schemas" href="/docs/concepts/contract-identity">
                Service schemas are content-addressed artifacts with deterministic identity.
              </ConceptCard>
              <ConceptCard title="Language-native APIs" href="/docs/guides/define-a-service">
                Keep the developer surface idiomatic. Your types are the schema.
              </ConceptCard>
              <ConceptCard title="Decentralised discovery" href="/docs/concepts/discovery">
                Publish and resolve services without central infrastructure servers.
              </ConceptCard>
              <ConceptCard title="Session-scoped services" href="/docs/concepts/session-scoped-services">
                Stateful, typed interactions for AI agents, collaborative editing, and real-time systems.
              </ConceptCard>
              <ConceptCard title="Trust model" href="/docs/concepts/trust-model">
                Four-gate authorization with root keys, credentials, and epochal deauthorization.
              </ConceptCard>
            </div>
          </div>
        </section>

        <section className="asterSection asterSection--paper">
          <div className="container">
            <div className="asterSection__intro">
              <span className="asterKicker">Three layers, one runtime story</span>
              <h2>Transport, serialization, and schemas are separable in theory and coherent in practice.</h2>
              <p>
                You can reason about each layer independently, but the developer experience
                still feels singular from service definition to peer invocation.
              </p>
            </div>
            <ArchitectureDiagram />
          </div>
        </section>

        <section className="asterSection">
          <div className="container">
            <div className="asterLaunchpad">
              <div className="asterLaunchpad__copy">
                <span className="asterKicker">Get started</span>
                <h2>Pick a language, define a service, and see the network shape around it.</h2>
                <p>
                  The fastest way to feel Aster is to stand up a small service, dial it
                  from another runtime, and inspect it from the shell or an MCP client.
                </p>
              </div>

              <div className="asterLaunchpad__actions">
                <Link className="button button--primary button--lg" to="/docs/quickstart/mission-control">
                  Build Mission Control
                </Link>
                <Link className="button button--primary button--lg" to="/docs/quickstart/python">
                  60-second quickstart
                </Link>
                <Link className="button button--secondary button--lg" to="/docs/guides/define-a-service">
                  Define a service
                </Link>
                <Link className="button button--secondary button--lg" to="/docs/overview/aster-vs-grpc">
                  Aster vs gRPC
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
