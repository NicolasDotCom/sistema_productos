import { Router } from 'express';
import pool from '../config/db.js';

export const productosRouter = Router();

// Obtener todos los productos activos
productosRouter.get('/', async (req, res) => {
  try {
    const [productos] = await pool.query(
      'SELECT * FROM productos WHERE estado = 1'
    );
    res.json(productos);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener productos' });
  }
});

// Crear nuevo producto
productosRouter.post('/', async (req, res) => {
  try {
    const { nombre, codigo, inventario, marca, valor } = req.body;
    const [result] = await pool.query(
      'INSERT INTO productos (nombre, codigo, inventario, marca, valor, estado) VALUES (?, ?, ?, ?, ?, 1)',
      [nombre, codigo, inventario, marca, valor]
    );
    res.status(201).json({ id: result.insertId, ...req.body });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear producto' });
  }
});

// Actualizar producto
productosRouter.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, codigo, inventario, marca, valor } = req.body;
    await pool.query(
      'UPDATE productos SET nombre = ?, codigo = ?, inventario = ?, marca = ?, valor = ? WHERE id = ?',
      [nombre, codigo, inventario, marca, valor, id]
    );
    res.json({ mensaje: 'Producto actualizado' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar producto' });
  }
});

// Eliminar producto (cambiar estado)
productosRouter.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query(
      'UPDATE productos SET estado = 0 WHERE id = ?',
      [id]
    );
    res.json({ mensaje: 'Producto eliminado' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar producto' });
  }
});