import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import CodeBlock from '@theme/CodeBlock';
import ConceptCard from '../components/ConceptCard';
import ArchitectureDiagram from '../components/ArchitectureDiagram';

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
            type signatures, generates a content-addressed contract, and handles
            serialization across languages. Your types are the schema.
          </p>
        </div>
        <Link className="asterFeature__link" to={lang === 'python' ? '/docs/quickstart/python' : '/docs/quickstart/typescript'}>
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

export default function Home(): JSX.Element {
  return (
    <Layout
      title="RPC after hostnames."
      description="Identity-first connectivity, content-addressed contracts, and cross-language services for real distributed systems.">
      <main className="asterHome">
        {/* ── Hero ───────────────────────────────────────────────── */}
        <section className="asterHero">
          <div className="container">
            <div className="asterEyebrow">IDENTITY-FIRST DISTRIBUTED SYSTEMS SUBSTRATE</div>
            <h1>Aster</h1>
            <p className="asterHero__tagline">RPC after hostnames.</p>
            <p className="asterHero__lead">
              Identity-first connectivity, content-addressed contracts, and
              cross-language services for real distributed systems.
            </p>
            <p className="asterHero__sublead">
              Built for AI runtimes, edge deployments, and multi-language
              services that cannot assume static addresses or bolt-on trust.
            </p>
            <div className="asterHero__actions">
              <Link className="button button--primary button--lg" to="/docs/quickstart/python">
                Start with Python
              </Link>
              <Link className="button button--primary button--lg" to="/docs/quickstart/typescript">
                Start with TypeScript
              </Link>
              <Link className="button button--secondary button--lg" to="/docs/overview/aster-vs-grpc">
                Aster vs gRPC
              </Link>
            </div>
          </div>
        </section>

        {/* ── Code-first services ────────────────────────────────── */}
        <section className="asterSection asterSection--paper">
          <div className="container">
            <CodeFirstFeature />
          </div>
        </section>

        {/* ── Aster Shell ────────────────────────────────────────── */}
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
                like a filesystem. Browse methods, inspect contracts, and invoke RPCs
                interactively &mdash; <strong>no local type definitions needed</strong>.
              </p>
              <p>
                Tab completion, streaming output, session subshells, and
                non-interactive CLI equivalents for scripting.
              </p>
            </FeatureBlock>
          </div>
        </section>

        {/* ── MCP Integration ────────────────────────────────────── */}
        <section className="asterSection asterSection--paper">
          <div className="container">
            <FeatureBlock
              kicker="AI-native"
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
                as tools with full type information. No OpenAPI specs, no REST
                gateways, no SDK generation &mdash; the contract <em>is</em> the tool definition.
              </p>
              <p>
                Three-layer security model: credential-based filtering, allow/deny patterns,
                and human-in-the-loop confirmation.
              </p>
            </FeatureBlock>
          </div>
        </section>

        {/* ── What Aster changes ─────────────────────────────────── */}
        <section className="asterSection">
          <div className="container">
            <div className="asterSection__intro">
              <span className="asterKicker">What Aster changes</span>
              <h2>Hostname-first RPC no longer matches the systems we actually build.</h2>
            </div>
            <div className="asterCards">
              <ConceptCard title="Dial by identity" href="/docs/concepts/transport">
                Connect to verified peers by public key, not hostnames. NAT traversal and relay fallback built in.
              </ConceptCard>
              <ConceptCard title="Portable contracts" href="/docs/concepts/contract-identity">
                Interface definitions are content-addressed artifacts with deterministic identity.
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

        {/* ── Architecture ───────────────────────────────────────── */}
        <section className="asterSection asterSection--paper">
          <div className="container">
            <div className="asterSection__intro">
              <span className="asterKicker">Three layers, one system</span>
              <h2>Transport, serialization, and contract &mdash; intentionally separable.</h2>
            </div>
            <ArchitectureDiagram />
          </div>
        </section>

        {/* ── CTA ────────────────────────────────────────────────── */}
        <section className="asterSection">
          <div className="container">
            <div className="asterSection__intro" style={{ textAlign: 'center', maxWidth: '36rem', margin: '0 auto' }}>
              <span className="asterKicker">Get started</span>
              <h2>Built for the systems that come after cloud-native defaults.</h2>
              <p>
                AI runtimes, edge deployments, sovereign meshes, and multi-language services
                need a different foundation.
              </p>
              <div className="asterHero__actions" style={{ justifyContent: 'center', marginTop: '1.5rem' }}>
                <Link className="button button--primary button--lg" to="/docs/quickstart/python">
                  Python
                </Link>
                <Link className="button button--primary button--lg" to="/docs/quickstart/typescript">
                  TypeScript
                </Link>
                <Link className="button button--secondary button--lg" to="/docs/overview/why-aster">
                  Why Aster?
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
