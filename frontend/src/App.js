//frontend/src/componets/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CarreraList from './components/CarreraList';
import CarreraForm from './components/CarreraForm';
import CarreraEdit from './components/CarreraEdit';
import FacultadList from './components/FacultadList';
import FacultadEdit from './components/FacultadEdit';
import FacultadForm from './components/FacultadForm';
import ConvocatoriaList from './components/ConvocatoriaList';
import ConvocatoriaForm from './components/ConvocatoriaForm';
import ConvocatoriaEdit from './components/ConvocatoriaEdit';
import TipoconvocatoriaList from './components/TipoconvocatoriaList';
import TipoconvocatoriaForm from './components/TipoconvocatoriaForm';
import TipoconvocatoriaEdit from './components/TipoconvocatoriaEdit';
import NavBar from './components/NavBar';

const App = () => {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route exact path="/carreras" element={<CarreraList />} />
                <Route path="/carreras/new" element={<CarreraForm />} />
                <Route path="/carreras/edit/:id" element={<CarreraEdit />} />
                <Route path="/facultades/" element={<FacultadList />} />
                <Route path="/facultades/edit/:id" element={<FacultadEdit />} />
                <Route path="/facultades/new/" element={<FacultadForm />} />
                <Route exact path="/convocatorias" element={<ConvocatoriaList />} />
                <Route path="/convocatorias/new" element={<ConvocatoriaForm />} />
                <Route path="/convocatorias/edit/:id" element={<ConvocatoriaEdit />} />
                <Route exact path="/tipoconvocatorias" element={<TipoconvocatoriaList />} />
                <Route path="/tipoconvocatorias/new" element={<TipoconvocatoriaForm />} />
                <Route path="/tipoconvocatorias/edit/:id" element={<TipoconvocatoriaEdit />} />
            </Routes>
        </Router>
    );
};

export default App;