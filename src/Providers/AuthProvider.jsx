import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";
const googleProvider = new GoogleAuthProvider();


export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const axiosPublic = useAxiosPublic();

    // create user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // login/sign in
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // google signIn
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)

    };

    // logout/signOut
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }


    // observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log('current user', currentUser)
            if (currentUser) {

                // get token and store client
                const userInfo = { email: currentUser.email }
                axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token);
                            setUser(currentUser);
                            setLoading(false);
                        }
                    })
            }
            else {
                // todo: remove token
                localStorage.removeItem('access-token');
                setUser(null);
                setLoading(false);
            }
            // setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    }, [axiosPublic]);


    // Update users profile
    const updateUserProfile = (name, image) => {

        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image
        }

        )
    }
    // console.log(user)


    const authInfo = { user, loading, setUser, createUser, signIn, logOut, googleSignIn, updateUserProfile }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;