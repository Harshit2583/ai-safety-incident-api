import mongoose, { Document, Schema } from 'mongoose';

export interface IIncident extends Document {
  id: number;
  title: string;
  description: string;
  severity: 'Low' | 'Medium' | 'High';
  reported_at: Date;
}

const incidentSchema = new Schema<IIncident>({
  id: { type: Number, required: true, unique: true }, // <-- Add this line
  title: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
  severity: { type: String, required: true, enum: ['Low', 'Medium', 'High'] },
  reported_at: { type: Date, default: Date.now }
});

export default mongoose.model<IIncident>('Incident', incidentSchema);
