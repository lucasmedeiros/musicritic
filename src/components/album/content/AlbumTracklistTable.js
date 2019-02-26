/* @flow */

import React from 'react';
import { Album, Track } from 'spotify-web-sdk';
import _ from 'lodash';

import './AlbumTracklistTable.css';

type Props = {
    album: Album,
};

const AlbumTracklistTable = ({ album }: Props) => {
    const body = _.get(album, 'tracks.items', []).map((track, index) =>
        <AlbumTracklistTableRow track={track} trackIndex={index} />);

    return (
        <table className="table album-tracklist-table table-striped border">
            <tbody>
                {body}
            </tbody>
        </table>
    );
};

type AlbumTracklistTableRowProps = {
    track: Track,
    trackIndex: number,
}

const AlbumTracklistTableRow = ({
    track, trackIndex,
}: AlbumTracklistTableRowProps) => (
    <tr>
        <th className="album-tracklist-tr__track-index text-muted" scope="row">
            {`${trackIndex + 1}`}
        </th>
        <td>
            {track.name}
        </td>
        <td className="album-tracklist-tr__track-length text-muted">
            {track.length}
        </td>
    </tr>
);

export default AlbumTracklistTable;
