import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  feedback: {
    type: String,
    minlength: [10, 'Feedback must be at least 10 characters']
  },
  rating: {
    type: Number,
    required: [true, 'Rating is required'],
    min: [1, 'Rating must be between 1 and 5'],
    max: [5, 'Rating must be between 1 and 5']
  },
}, { timestamps: true });

const Review = mongoose.model('Review', reviewSchema);
export default Review;