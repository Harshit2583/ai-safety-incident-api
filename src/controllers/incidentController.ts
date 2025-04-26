import { Request, Response, NextFunction } from 'express';
import Incident, { IIncident } from '../models/incidentModel';
import { incidentValidationSchema } from '../validation/incidentValidation';
import { ApiError } from '../middleware/errorHandler';
import mongoose from 'mongoose';
import { getNextSequence } from '../utils/getNextSequence';


// Get all incidents
export const getIncidents = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const incidents = await Incident.find();
    res.status(200).json(incidents);
  } catch (error) {
    next(error);
  }
};

// Get incident by ID
export const getIncidentById = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const id = parseInt(req.params.id, 10);
      if (isNaN(id)) throw new ApiError('Invalid incident ID', 400);
  
      const incident = await Incident.findOne({ id });
      if (!incident) throw new ApiError('Incident not found', 404);
  
      res.status(200).json(incident);
    } catch (error) {
      next(error);
    }
  };

// Create new incident
export const createIncident = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      // Validate request body
      const { error, value } = incidentValidationSchema.validate(req.body);
      if (error) {
        throw new ApiError(error.details[0].message, 400);
      }
  
      // Get next sequence value for 'incidentid'
      const nextId = await getNextSequence('incidentid');
  
      const newIncident = await Incident.create({
        id: nextId,
        ...value,
        reported_at: new Date()
      });
  
      res.status(201).json(newIncident);
    } catch (error) {
      next(error);
    }
  };

// Delete incident by ID
export const deleteIncident = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const id = parseInt(req.params.id, 10);
      if (isNaN(id)) throw new ApiError('Invalid incident ID', 400);
  
      const incident = await Incident.findOneAndDelete({ id });
      if (!incident) throw new ApiError('Incident not found', 404);
  
      res.status(200).json({ message: 'Incident deleted successfully' });
    } catch (error) {
      next(error);
    }
  };
  