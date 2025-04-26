import express from 'express';
import {
  getIncidents,
  getIncidentById,
  createIncident,
  deleteIncident
} from '../controllers/incidentController';

const router = express.Router();

router.route('/').get(getIncidents).post(createIncident);
router.route('/:id').get(getIncidentById).delete(deleteIncident);

export default router;
