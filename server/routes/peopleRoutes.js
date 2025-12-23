import express from 'express';
import * as PeopleController from '../controllers/peopleController.js';

const router = express.Router();

router.get('/people', PeopleController.getAllPeople);
router.get('/people/:id', PeopleController.getPerson);
router.post('/people', PeopleController.createPerson);
router.put('/people/:id', PeopleController.updatePerson);
router.delete('/people/:id', PeopleController.deletePerson);

export default router;
