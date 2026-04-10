import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import {
  siDotnet,
  siGo,
  siKotlin,
  siOpenjdk,
  siPython,
  siRust,
  siTypescript,
} from 'simple-icons';
import TerminalCastDemo from '../components/TerminalCastDemo';

const LANGUAGE_SUPPORT = [
  { id: 'python', label: 'Python', state: 'alpha', href: '/docs/quickstart/python' },
  { id: 'typescript', label: 'TypeScript', state: 'alpha', href: '/docs/quickstart/python' },
  { id: 'rust', label: 'Rust', state: 'planned' },
  { id: 'golang', label: 'Golang', state: 'planned' },
  { id: 'java', label: 'Java', state: 'planned' },
  { id: 'kotlin', label: 'Kotlin', state: 'planned' },
  { id: 'dotnet', label: '.NET', state: 'planned' },
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

function LanguageSupportMini() {
  return (
    <div className="asterTerminalLanding__languages" aria-label="Language support">
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
                  language.state === 'alpha'
                    ? 'asterLanguageBadge__state--alpha'
                    : 'asterLanguageBadge__state--soon'
                }`}>
                {language.state === 'alpha' ? 'Alpha' : 'Planned'}
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
  );
}

export default function TerminalLanding(): React.JSX.Element {
  return (
    <Layout
      title="Terminal Landing Prototype"
      description="Alternative Aster landing page concept using a focused terminal animation hero.">
      <main className="asterHome asterTerminalLandingPage">
        <section className="asterTerminalLandingHero">
          <div className="container asterTerminalLandingHero__container">
            <div className="asterTerminalLandingHero__copy">
              <div className="asterEyebrow">LANDING PAGE PROTOTYPE</div>
              <h1>Aster</h1>
              <p className="asterHero__tagline">Typed service calls, without the platform tax.</p>
              <p className="asterHero__lead">
                Define a service in Python. Call it from anywhere. No DNS,
                certs, protobuf plumbing, or shared infrastructure.
              </p>
              <div className="asterHero__actions">
                <Link className="button button--primary button--lg" to="/docs/quickstart/python">
                  Start with Python
                </Link>
                <Link className="button button--secondary button--lg" to="/terminal-demo">
                  View terminal demo
                </Link>
              </div>
              <div className="asterTerminalLandingHero__compare">
                <Link to="/">Current homepage</Link>
                <Link to="/terminal-demo">Full cast prototype</Link>
              </div>
            </div>

            <TerminalCastDemo
              className="asterTerminalStage--landingHero"
              castPath="/demo-polished.cast"
              title="aster / typed service"
              status="live peer"
            />
          </div>
        </section>

        <section className="asterTerminalLandingSupport">
          <div className="container">
            <div className="asterTerminalLandingSupport__intro">
              <span className="asterKicker">Language support</span>
              <p>Ship today with Python and TypeScript. The next bindings are already mapped out.</p>
            </div>
            <LanguageSupportMini />
          </div>
        </section>
      </main>
    </Layout>
  );
}
