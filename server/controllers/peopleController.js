import * as PersonModel from '../models/personModel.js';

export const getAllPeople = async (req, res) => {
  try {
    const people = await PersonModel.getAllPeople();
    res.status(200).json(people);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getPerson = async (req, res) => {
  try {
    const { id } = req.params;
    const person = await PersonModel.getPersonById(id);

    if (!person) {
      return res.status(404).json({ error: 'Person not found' });
    }

    res.status(200).json(person);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createPerson = async (req, res) => {
  try {
    const { name, phone, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }

    const person = await PersonModel.createPerson(name, phone, email);
    res.status(201).json(person);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updatePerson = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, phone, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }

    const existingPerson = await PersonModel.getPersonById(id);
    if (!existingPerson) {
      return res.status(404).json({ error: 'Person not found' });
    }

    const person = await PersonModel.updatePerson(id, name, phone, email);
    res.status(200).json(person);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deletePerson = async (req, res) => {
  try {
    const { id } = req.params;

    const existingPerson = await PersonModel.getPersonById(id);
    if (!existingPerson) {
      return res.status(404).json({ error: 'Person not found' });
    }

    const result = await PersonModel.deletePerson(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
