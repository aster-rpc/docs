import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import TerminalCastDemo from '../components/TerminalCastDemo';

export default function TerminalDemo(): React.JSX.Element {
  return (
    <Layout
      title="Terminal Animation Demo"
      description="Isolated Aster terminal animation prototype driven by a polished asciicast recording.">
      <main id="main-content" className="asterHome asterTerminalDemoPage">
        <section className="asterSection">
          <div className="container">
            <div className="asterTerminalDemoPage__header">
              <span className="asterKicker">Internal prototype</span>
              <h1>Cast-driven terminal animation</h1>
              <p>
                A standalone place to iterate on the Flox-style terminal treatment
                before we decide whether it belongs on the landing page.
              </p>
              <Link className="asterFeature__link" to="/">
                Back to landing page &rarr;
              </Link>
            </div>

            <div className="asterTerminalDemoPage__grid">
              <TerminalCastDemo
                castPath="/demo-polished-01.cast"
                title="server / python"
                status="producer online"
                insight={{
                  label: 'Step 01',
                  title: 'Define the service and run it',
                  meta: 'Typed schema, live peer address',
                }}
              />
              <TerminalCastDemo
                castPath="/demo-polished-02.cast"
                title="caller / anywhere"
                status="42ms rpc"
                insight={{
                  label: 'Step 02',
                  title: 'Paste the address and call it',
                  meta: 'No DNS, certs, or proto files',
                }}
              />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
