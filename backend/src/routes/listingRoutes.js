const express = require('express');
const { createListing, deleteListing, getUploadImageUrl,
    getAllListings, getFilteredListings, getListing } = require('../controllers/listingController');

const router = express.Router();

// Define routes
router.post('/create', createListing);
router.post('/delete', deleteListing);
router.get('/upload-image-url', getUploadImageUrl);
router.get('/all', getAllListings);
router.get('/filter', getFilteredListings);
router.get('/:id', getListing);

module.exports = router;