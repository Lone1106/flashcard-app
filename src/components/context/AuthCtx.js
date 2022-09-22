import { useState, useEffect, createContext } from "react";

export const AuthContext = createContext();

function AuthProvider({children}) {
	const [currentUser, setCurrentUser] = useState(null);

	// useEffect(() => {
	// 	setCurrentUser();
	// }, [])

	return (
		<AuthContext.Provider value={currentUser}>{children}</AuthContext.Provider>
	);
}

export default AuthProvider;
