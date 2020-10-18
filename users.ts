export interface User {
	id: string;
	username: string;
	password: string;
}

const users: Array<User> = [
	{
		id: '1',
		username: 'dito',
		password: 'dito',
	},
	{
		id: '2',
		username: 'cahya',
		password: 'cahya',
	},
];

export default users;
