import { HashRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Collection } from './pages/Collection';
import { HardwareDetail } from './pages/HardwareDetail';
import { Schedule } from './pages/Schedule';
import { Admin } from './pages/Admin';
import { StudentProjects } from './pages/StudentProjects';

export default function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/acervo" element={<Collection />} />
          <Route path="/peca/:id" element={<HardwareDetail />} />
          <Route path="/agendar" element={<Schedule />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/trabalhos" element={<StudentProjects />} />
        </Routes>
      </Layout>
      <Toaster position="top-right" richColors />
    </HashRouter>
  );
}
