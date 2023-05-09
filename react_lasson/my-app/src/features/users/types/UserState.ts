import User from './User';

export default interface UserState {
	users: User[];
	erors?: string;
}
