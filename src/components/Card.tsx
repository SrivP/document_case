export default function Card() {
  return (
    <div className="card">
      <img src="src\assets\bull.jpg" alt="Project" className="card-image" />
      <div className="card-overlay">
        <div className="card-backdrop"></div>
        <div className="card-backdrop-edge"></div>
        <p className="card-category">Full Stack</p>
        <h2 className="card-title">Project Title</h2>
      </div>
    </div>
  );
}
