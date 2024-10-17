// src/utils/responseHandler.js
exports.successResponse = (res, data) => {
  res.status(200).json({ success: true, data });
};
exports.errorResponse = (res, error) => {
  res.status(500).json({ success: false, message: error.message });
};
