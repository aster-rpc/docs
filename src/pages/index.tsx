import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import ConceptCard from '../components/ConceptCard';
import ArchitectureDiagram from '../components/ArchitectureDiagram';

export default function Home(): JSX.Element {
  return (
    <Layout
      title="RPC after hostnames."
      description="Identity-first connectivity, content-addressed contracts, and cross-language services for real distributed systems.">
      <main className="asterHome">
        <section className="asterHero">
          <div className="container">
            <div className="asterEyebrow">IDENTITY-FIRST · CONNECT ANYWHERE</div>
            <h1>Aster</h1>
            <p className="asterHero__tagline">RPC after hostnames.</p>
            <p className="asterHero__lead">
              Identity-first connectivity, content-addressed contracts, and cross-language services for real distributed systems.
            </p>
            <p className="asterHero__sublead">
              Built for AI, edge, and multi-runtime systems that cannot assume static addresses, central control planes, or bolt-on trust.
            </p>
            <div className="asterHero__actions">
              <Link className="button button--primary button--lg" to="/docs/quickstart/python">
                Start with Python
              </Link>
              <Link className="button button--secondary button--lg" to="/docs/overview/aster-vs-grpc">
                What about gRPC?
              </Link>
            </div>
          </div>
        </section>

        <section className="asterSection asterSection--paper">
          <div className="container">
            <div className="asterSection__intro">
              <span className="asterKicker">The old assumptions are broken</span>
              <h2>Hostname-first RPC no longer matches the systems we actually build.</h2>
              <p>
                Stable infra, central control planes, and generator-heavy contract-first workflows are not a natural fit for AI systems,
                edge deployments, private meshes, or multi-runtime services operating across real networks.
              </p>
            </div>
            <div className="asterCards">
              <ConceptCard title="Why Aster" href="/docs/overview/why-aster">
                Code-first ergonomics and a more integrated path from service definition to deployment.
              </ConceptCard>
              <ConceptCard title="Aster vs gRPC" href="/docs/overview/aster-vs-grpc">
                gRPC excels on stable infrastructure. Aster is built for identity-first reachability and real-world networks.
              </ConceptCard>
            </div>
          </div>
        </section>

        <section className="asterSection">
          <div className="container">
            <span className="asterKicker">What Aster changes</span>
            <div className="asterGrid asterGrid--five">
              <div className="asterPill">Identity-first transport</div>
              <div className="asterPill">Content-addressed contracts</div>
              <div className="asterPill">Language-native APIs</div>
              <div className="asterPill">Decentralised registry</div>
              <div className="asterPill">Session-scoped services</div>
            </div>
          </div>
        </section>

        <section className="asterSection asterSection--paper">
          <div className="container">
            <span className="asterKicker">Three layers, one system</span>
            <ArchitectureDiagram />
          </div>
        </section>
      </main>
    </Layout>
  );
}
