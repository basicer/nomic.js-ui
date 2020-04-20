import React from "react";

export function If({check, children}) {
	if ( check ) return <>{children}</>;
	else return <></>;
}