import { Navigate } from "react-router-dom";

export function ProtectRoute({ userObj, children }) {
	if (!userObj) {
		return <Navigate to="/home" replace />;
	}

	return children;
}
