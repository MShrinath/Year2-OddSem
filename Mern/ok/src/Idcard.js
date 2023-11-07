import React, { useState } from 'react';
import log from './logo512.png'


const IDCardApp = () => {
	const [name, setName] = useState('');
	const [photo, setPhoto] = useState('');
	const [contact, setContact] = useState('');

	const handleNameChange = (event) => {
		setName(event.target.value);
	};

	const handlePhotoChange = (event) => {
		setPhoto(event.target.value);
	};

	const handleContactChange = (event) => {
		setContact(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		// Here, you can perform any further actions with the submitted data,
		// such as printing or saving it.
		console.log('Submitted:', { name, photo, contact });
	};

	return (
		<div>
			<h1 align="center">ID Card Creator</h1>
			<form onSubmit={handleSubmit} align="center">
				<label htmlFor="name">Name:</label>
				<input type="text" id="name" value={name} onChange={handleNameChange} required />
				<br />
				<label htmlFor="photo">URL:</label>
				<input type="text" id="photo" value={photo} onChange={handlePhotoChange} required />
				<br />
				<label htmlFor="contact">Phone:</label>
				<textarea id="contact" value={contact} onChange={handleContactChange} required />
				<br />
				<button type="submit">Create ID Card</button>
			</form>

			<div className="id-card">
				<h2>{name}</h2>
				<img src={log} alt="User's Photo" height={200} />
				<p>Contact: {contact}</p>
			</div>
		</div>
	);
};

export default IDCardApp;