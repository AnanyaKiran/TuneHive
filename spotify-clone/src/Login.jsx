import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
        console.log('Logged in');
    } catch (error) {
        console.error('Login failed:', error);
    }
};
