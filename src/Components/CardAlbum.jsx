/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { SpotifyContext } from '../Context/SpotifyContext';

function CardAlbum({ data }) {

	const { loading } = useContext(SpotifyContext);

	return (
		loading ? null && data !== undefined
			: (
				<Link to={ `/album/${data.collectionId}` } style={ {textDecoration: 'none'} } >
					<Card className='card-album'>
						<Card.Img variant="top" src={data.artworkUrl100} />
						<Card.Body>
							<Card.Title className='cardTitle-album'>{ data.collectionName }</Card.Title>
						</Card.Body>
						<Card.Footer className='cardFoot-album'>
							<p className="text-muted">{ data.artistName }</p>
						</Card.Footer>
					</Card>
				</Link>
				
			)
	);
}

export default CardAlbum;