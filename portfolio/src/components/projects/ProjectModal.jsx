import "./ProjectModal.css";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="project-modal-overlay" onClick={onClose}>
      <div
        className="project-modal"
        onClick={e => e.stopPropagation()}
      >
        {/* HEADER */}
        <header className="project-modal-header">
          <h3>{project.title}</h3>
          <button onClick={onClose}>✕</button>
        </header>

        {/* BODY */}
        <div className="project-modal-body">
          <p className="modal-desc">{project.description}</p>

          <ul className="modal-meta">
            <li>
              <strong>역할</strong>
              <span>{project.role}</span>
            </li>
            <li>
              <strong>기술</strong>
              <span>{project.tech}</span>
            </li>
          </ul>

          {/* PDF PREVIEW */}
          <div className="pdf-preview">
            <iframe
              src={project.pdf}
              title={`${project.title} PDF`}
            />
          </div>
        </div>

        {/* FOOTER */}
        <footer className="project-modal-footer">
          <a href={project.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={project.pdf} target="_blank" rel="noreferrer">
            PDF 새 창으로 보기
          </a>
        </footer>
      </div>
    </div>
  );
}
