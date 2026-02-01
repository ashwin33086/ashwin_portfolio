export default function Home() {
  return (
    <main style={styles.container}>
      <h1 style={styles.name}>Ashwin Mishra</h1>
      <p style={styles.subtitle}>
        Product • Strategy • Decision Systems
      </p>

      <p style={styles.description}>
        I build product and decision systems that optimize long-term value,
        not just short-term metrics.
      </p>

      <h2 style={styles.sectionTitle}>Projects</h2>

      <div style={styles.project}>
        <h3>Dynamic Pricing Sensitivity & LTV Optimization</h3>
        <p>
          Company-level pricing decision system focused on elasticity,
          churn, and long-term Lifetime Value (LTV).
        </p>
        <a
          href="https://github.com/ashwin33086/Dynamic-Pricing-Decision-System-LTV-optimization-"
          target="_blank"
        >
          View on GitHub →
        </a>
      </div>

      <div style={styles.project}>
        <h3>Automated Resume Relevance Scoring (n8n)</h3>
        <p>
          Workflow automation system to score resumes against job
          descriptions using structured logic.
        </p>
        <a
          href="https://github.com/ashwin33086/Automated-Resume-Relevance-Scoring-Workflow-Using-n8n"
          target="_blank"
        >
          View on GitHub →
        </a>
      </div>

      <div style={styles.project}>
        <h3>OPD Appointment Queue Automation</h3>
        <p>
          Queue optimization and scheduling automation for hospital OPD
          workflows.
        </p>
        <a
          href="https://github.com/ashwin33086/opd-appointment-queue-automation-n8n"
          target="_blank"
        >
          View on GitHub →
        </a>
      </div>
    </main>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "4rem 1.5rem",
    fontFamily: "system-ui, sans-serif",
  },
  name: {
    fontSize: "2.5rem",
    fontWeight: 600,
  },
  subtitle: {
    marginTop: "0.5rem",
    color: "#555",
  },
  description: {
    marginTop: "1.5rem",
    lineHeight: 1.6,
  },
  sectionTitle: {
    marginTop: "3rem",
    fontSize: "1.5rem",
  },
  project: {
    marginTop: "1.5rem",
    padding: "1rem",
    border: "1px solid #ddd",
    borderRadius: "6px",
  },
};

