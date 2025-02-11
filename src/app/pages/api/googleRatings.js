// pages/api/googleRatings.js

import axios from 'axios';

export default async function handler(req, res) {
    const { GOOGLE_API_KEY, PLACE_ID } = process.env;
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&key=${GOOGLE_API_KEY}`;

    try {
        const response = await axios.get(url);
        const rating = response.data.result.rating;
        const userRatingsTotal = response.data.result.user_ratings_total;

        res.status(200).json({ rating, userRatingsTotal });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch Google ratings' });
    }
}
