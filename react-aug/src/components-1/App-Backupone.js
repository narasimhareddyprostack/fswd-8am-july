import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header bg-primary">
                <h4>Image Header</h4>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h4>Image Header</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
