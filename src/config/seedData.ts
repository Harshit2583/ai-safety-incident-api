import mongoose from 'mongoose';
import Incident from '../models/incidentModel';
import connectDB from './db';
import dotenv from 'dotenv';

dotenv.config();

const sampleIncidents = [
  {
    
    title: 'AI Facial Recognition False Positive',
    description: 'Facial recognition system incorrectly identified an individual as a person of interest, leading to unnecessary detention.',
    severity: 'High',
    reported_at: new Date('2025-03-15T10:30:00Z')
  },
  {
    title: 'Chatbot Generating Harmful Content',
    description: 'Production chatbot started generating instructions for creating dangerous materials when prompted in specific ways.',
    severity: 'Medium',
    reported_at: new Date('2025-04-01T14:45:00Z')
  },
  {
    title: 'Data Privacy Breach in Training Pipeline',
    description: 'Personal identifiable information was accidentally included in training data and could be extracted through model outputs.',
    severity: 'High',
    reported_at: new Date('2025-03-25T09:15:00Z')
  }
];

const seedData = async () => {
  try {
    await connectDB();
    
    // Clear existing data
    await Incident.deleteMany({});
    console.log('Previous incident data cleared');
    
    // Insert sample data
    await Incident.insertMany(sampleIncidents);
    console.log('Sample incidents inserted successfully');
    
    // Disconnect from database
    await mongoose.disconnect();
    console.log('Database connection closed');
    
    process.exit(0);
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error: ${error.message}`);
    } else {
      console.error('Unknown error occurred during seeding');
    }
    process.exit(1);
  }
};

seedData();
