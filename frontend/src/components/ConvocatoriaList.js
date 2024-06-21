// src/components/ConvocatoriaList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ConvocatoriaList = () => {
    const [convocatorias, setConvocatorias] = useState([]);

    useEffect(() => {
        const fetchConvocatorias = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/convocatorias');
                setConvocatorias(response.data);
            } catch (error) {
                console.error('Error al obtener convocatorias:', error);
            }
        };

        fetchConvocatorias();
    }, []);
    
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/convocatorias/${id}`);
            setConvocatorias(convocatorias.filter(convocatoria => convocatoria.id_convocatoria !== id));
        } catch (error) {
            console.error('Error al eliminar la convocatoria:', error);
        }
    };

    return (
        <div>
            <h2>Lista de Convocatorias</h2>
            <ul>
                {convocatorias.map((convocatoria) => (
                    <li key={convocatoria.id_convocatoria}>
                        {convocatoria.Nombre} 
                        <Link to={`/convocatorias/${convocatoria.id_convocatoria}/edit`}>Editar</Link>
                        <button onClick={() => handleDelete(convocatoria.id_convocatoria)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ConvocatoriaList;
