import Contact from '../models/Contact.js';

export const submitContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Please provide name, email and message"
      });
    }

    const contact = new Contact(req.body);
    const saved = await contact.save();

    res.status(201).json({
      success: true,
      data: saved,
      message: "Contact form submitted successfully"
    });

  } catch (error) {
    console.error('Submit contact error:', error);
    res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
};