import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Project title is required']
  },
  description: {
    type: String, 
    required: [true, 'Project description is required'],
    minlength: [10, 'Description must be at least 10 characters']
  },
  technologies: [{
    type: String,
    required: true
  }],
  link: {
    type: String,
    required: [true, 'Project link is required'],
  },
  active: {
    type: Boolean,
    default: true
  }
}, { timestamps: true });

const Project = mongoose.model('Project', projectSchema);
export default Project;