import logo from './logo.svg';
import './App.css';
import contactsFromJSON from './contacts.json';
import React, { useState } from 'react';

function App() {
	const firstFive = contactsFromJSON.slice(0, 5);

	const [contacts, setContacts] = useState(firstFive);

	const addRandom = () => {
		if (contacts.length === contactsFromJSON.length) {
			console.log('reached the end of list');
			return;
		}

		let remaining = contactsFromJSON.filter(contact => !contacts.includes(contact));

		const randomIndex = Math.floor(Math.random() * remaining.length);

		setContacts(prevContacts => [...prevContacts, remaining[randomIndex]]);
	};

	return (
		<div className='App'>
			<h1> IronContacts </h1>

			<div className='btn-group'>
				<button onClick={() => addRandom()}> Add Random Contact </button>
				<button> Sort A - Z </button>
				<button> Sort Z - A </button>
				<button> Sort by Ascending popularity </button>
				<button> Sort by Descending popularity </button>
			</div>

			<table>
				<thead>
					<tr>
						<th>Picture</th>
						<th>Name</th>
						<th>Popularity</th>
						<th>Won an Oscar</th>
						<th>Won an Emmy</th>
					</tr>
				</thead>

				<tbody>
					{contacts.map(contact => (
						<tr key={contact.id}>
							<td>
								<img src={contact.pictureUrl} alt={contact.name} className='actor-pic' />
							</td>
							<td> {contact.name} </td>
							<td> {contact.popularity} </td>
							<td> {contact.wonOscar ? '🏆' : null} </td>
							<td> {contact.wonEmmy ? '🏆' : null} </td>
							<td>
								<button>Delete</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default App;
