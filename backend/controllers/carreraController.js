const pool = require('../db');

const getCarreras = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM carrera ORDER BY nombre_carrera');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const createCarrera = async (req, res) => {
    const { nombre_carrera, cod_facultad } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO carrera (nombre_carrera, cod_facultad) VALUES ($1, $2) RETURNING *',
            [nombre_carrera, cod_facultad]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const updateCarrera = async (req, res) => {
    const { id } = req.params;
    const { nombre_carrera, cod_facultad } = req.body;
    try {
        const result = await pool.query(
            'UPDATE carrera SET nombre_carrera = $1, cod_facultad = $2 WHERE id_carrera = $3 RETURNING *',
            [nombre_carrera, cod_facultad, id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Carrera no encontrada' });
        }
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const deleteCarrera = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query(
            'DELETE FROM carrera WHERE id_carrera = $1 RETURNING *',
            [id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Carrera no encontrada' });
        }
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getCarreraById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT * FROM carrera WHERE id_carrera = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Carrera no encontrada' });
        }
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    getCarreras,
    createCarrera,
    updateCarrera,
    deleteCarrera,
    getCarreraById
};
