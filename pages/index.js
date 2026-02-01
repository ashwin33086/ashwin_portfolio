export default function Home() {
  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <header style={styles.header}>
          <h1 style={styles.name}>Ashwin Mishra</h1>
          <p style={styles.role}>Product • Strategy • Decision Systems</p>
          <p style={styles.tagline}>
            I design company-level decision systems that optimize long-term value,
            not just short-term metrics.
          </p>
        </header>

        <section>
          <h2 style={styles.sectionTitle}>Selected Projects</h2>

          <div style={styles.project}>
            <h3>Dynamic Pricing Sensitivity & LTV Optimization</h3>
            <p>
              A pricing decision system that learns user elasticity, controls price
              shocks, and protects long-term Lifetime Value (LTV).
            </p>
            <a
              href="https://github.com/ashwin33086/Dynamic-Pricing-Decision-System-LTV-optimization-"
              target="_blank"
            >
              View project →
            </a>
          </div>

          <div style={styles.project}>
            <h3>Automated Resume Relevance Scoring (n8n)</h3>
            <p>
              Workflow automation to score resumes against job descriptions using
              structured decision logic.
            </p>
            <a
              href="https://github.com/ashwin33086/Automated-Resume-Relevance-Scoring-Workflow-Using-n8n"
              target="_blank"
            >
              View project →
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
              View project →
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

const styles = {
  page: {
    backgroundColor: "#fafafa",
    minHeight: "100vh",
  },
  container: {
    maxWidth: "760px",
    margin: "0 auto",
    padding: "5rem 1.5rem",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
    color: "#111",
  },
  header: {
    marginBottom: "4rem",
  },
  name: {
    fontSize: "2.6rem",
    fontWeight: 600,
    marginBottom: "0.5rem",
  },
  role: {
    fontSize: "1.1rem",
    color: "#555",
    marginBottom: "1.2rem",
  },
  tagline: {
    fontSize: "1rem",
    lineHeight: 1.6,
    color: "#333",
    maxWidth: "640px",
  },
  sectionTitle: {
    fontSize: "1.4rem",
    marginBottom: "1.5rem",
  },
  project: {
    padding: "1.4rem 1.2rem",
    border: "1px solid #e5e5e5",
    borderRadius: "8px",
    marginBottom: "1.2rem",
  },
};

