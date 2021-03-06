/* @flow */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getTrack } from '../../api/SpotifyWebAPI';
import TrackPageHeader from './TrackPageHeader';

const TrackPage = () => {
    const [track, setTrack] = useState({});
    const { id } = useParams();

    useEffect(() => {
        async function getTrackFromAPI() {
            const trackResponse = await getTrack(id);
            setTrack(trackResponse);
        }

        getTrackFromAPI();
    }, []);

    return track.name ? <TrackPageHeader track={track} /> : <div />;
};

export default TrackPage;
