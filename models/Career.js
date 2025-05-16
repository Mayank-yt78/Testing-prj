import mongoose from 'mongoose';

const careerSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Job title is required'],
  },
  description: {
    type: String,
    required: [true, 'Job description is required'],
    minlength: [10, 'Description must be at least 10 characters']
  },
  location: {
    type: String,
    required: [true, 'Job location is required'],
  },
  type: {
    type: String,
    required: [true, 'Employment type is required'],
    enum: {
      values: ['Full-time', 'Part-time', 'Contract', 'Internship'],
    }
  },
  salary: {
    type: String,
  },
  requirements: [{
    type: String,
    required: true
  }],
  active: {
    type: Boolean,
    default: true
  }
}, { timestamps: true });

const Career = mongoose.model('Career', careerSchema);
export default Career;