import Career from '../models/Career.js';

export const getAllCareers = async (req, res) => {
  try {
    const careers = await Career.find();
    res.status(200).json({
      success: true,
      data: careers
    });
  } catch (error) {
    console.error('Get all careers error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};

export const getCareerById = async (req, res) => {
  try {
    const career = await Career.findById(req.params.id);
    if (!career) {
      return res.status(404).json({
        success: false,
        message: 'Career not found'
      });
    }
    res.status(200).json({
      success: true,
      data: career
    });
  } catch (error) {
    console.error('Get career by ID error:', error);
    res.status(500).json({
      success: false, 
      message: 'Internal server error'
    });
  }
};

export const createCareer = async (req, res) => {
  try {
    const career = new Career(req.body);
    const created = await career.save();
    res.status(201).json({
      success: true,
      data: created
    });
  } catch (error) {
    console.error('Create career error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};

export const updateCareer = async (req, res) => {
  try {
    const career = await Career.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!career) {
      return res.status(404).json({
        success: false,
        message: 'Career not found'
      });
    }

    res.status(200).json({
      success: true,
      data: career
    });
  } catch (error) {
    console.error('Update career error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};

export const deleteCareer = async (req, res) => {
  try {
    const career = await Career.findByIdAndDelete(req.params.id);
    
    if (!career) {
      return res.status(404).json({
        success: false,
        message: 'Career not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Career deleted successfully'
    });
  } catch (error) {
    console.error('Delete career error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};