// backend/controllers/materiaController.js
const pool = require('../db');

const getMaterias = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM materia ORDER BY nombre');
        res.json(result.rows);
    } catch (error) {
        res.status(500).send('Error al obtener materias');
    }
};

const createMateria = async (req, res) => {
    const { codigomateria, nombre } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO materia (codigomateria, nombre) VALUES ($1, $2) RETURNING *',
            [codigomateria, nombre]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const updateMateria = async (req, res) => {
    const { id } = req.params;
    const { codigomateria, nombre } = req.body;
    try {
        const result = await pool.query(
            'UPDATE materia SET codigomateria = $1, nombre = $2 WHERE id_materia = $3 RETURNING *',
            [codigomateria, nombre, id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Materia no encontrada' });
        }
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const deleteMateria = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('DELETE FROM materia WHERE id_materia = $1 RETURNING *', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Materia no encontrada' });
        }
        res.json({ message: 'Materia eliminada' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getMateriaById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT * FROM materia WHERE id_materia = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Materia no encontrada' });
        }
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    getMaterias,
    createMateria,
    updateMateria,
    deleteMateria,
    getMateriaById
};