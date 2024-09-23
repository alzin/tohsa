import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage'; 
import AboutPage from './pages/AboutPage'; 
import OntologiesPage from './pages/OntologiesPage';
import NotationsPage from './pages/NotationsPage';
import LearnPage from './pages/LearnPage';
import DiscoveryPage from './pages/DiscoveryPage';
import AccessPage from './pages/AccessPage';
import ContactPage from './pages/ContactPage';
import HelpPage from './pages/HelpFAQPage';
import GlycanVisualization from './components/GlycanVisualization';
import SearchResultsPage from './pages/SearchResultsPage';
import GlycanDetailsPage from './pages/GlycanDetailsPage';
// Import the sub-components of AboutPage
import { MissionVision, History, Team, Partners, FAQs } from './pages/AboutPage';


function App() {
  return (
    <Router>
      <CssBaseline />
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <main style={{ flexGrow: 1 }}>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />}>
              <Route path="mission" element={<MissionVision />} />
              <Route path="history" element={<History />} />
              <Route path="team" element={<Team />} />
              <Route path="partners" element={<Partners />} />
              <Route path="faqs" element={<FAQs />} />
              <Route
                index
                element={
                  <div>Please select a section from the navigation above.</div>
                }
              />
            </Route>
            <Route path="/discovery" element={<DiscoveryPage />} />
            <Route path="/access" element={<AccessPage />} />
            <Route path="/standards/ontologies" element={<OntologiesPage />} />
            <Route path="/standards/notations" element={<NotationsPage />} />
            <Route path="/learn" element={<LearnPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/help" element={<HelpPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/glycan-visualization" element={<GlycanVisualization />} />
            <Route path="/search" element={<SearchResultsPage />} />
            <Route path="/glycan/:id" element={<GlycanDetailsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;