import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer';
import TaskApp from './components/Task/TaskApp';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <Header />
      <main className="flex-1">
        <TaskApp />
      </main>
      <Footer />
    </div>
  );
}

export default App;
