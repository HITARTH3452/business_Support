
import "./App.css";
import LeftSection from './LeftSection';
import RightSection from './RightSection';

function App() {
  return (
    <div className="app">
      <div className="left-section">
        <LeftSection />
      </div>
      <div className="right-section">
        <RightSection />
      </div>
    </div>
  );
}

export default App;
