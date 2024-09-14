import React from 'react';
import { Link } from 'react-router-dom';

function ModuleCard({ module }) {
  return (
    <div className="module-card">
      <h3>{module.title}</h3>
      <p>{module.description}</p>
      <Link to={`/module/${module.id}`}>Acessar Módulo</Link>
    </div>
  );
}

export default ModuleCard;
