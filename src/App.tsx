import Header from './templates/Header';
import Footer from './templates/Footer';
import Content from './templates/Content';

function App() {
  return (
    <div className="flex flex-col min-h-screen max-h-screen">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
