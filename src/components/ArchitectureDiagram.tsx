import React from 'react';

export default function ArchitectureDiagram() {
  return (
    <div className="asterDiagram">
      <div className="asterDiagram__layer">
        <div className="asterDiagram__label">Transport</div>
        <p>Identity-first connectivity, NAT-tolerant reachability, real-world networks.</p>
      </div>
      <div className="asterDiagram__layer">
        <div className="asterDiagram__label">Serialization</div>
        <p>High-performance cross-platform payloads, including row-oriented modes for data-heavy workloads.</p>
      </div>
      <div className="asterDiagram__layer">
        <div className="asterDiagram__label">Contract</div>
        <p>Code-first services and content-addressed contract identity.</p>
      </div>
    </div>
  );
}
