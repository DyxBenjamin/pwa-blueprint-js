import '@styles/globals.css'
import {ThemeProvider} from "@mui/material";
import defaultTheme from "@styles/themes/defaultTheme";
import Serverless from "@srclib/devclusters/ServerlessConector";
import {useEffect} from "react";


export default function App({Component, pageProps}) {
	useEffect(() => {
		Serverless.status().then( (res) => {
			console.info('Serverless Status: ', res)
		} )
	}, []);

	const getLayout = Component.getLayout || ((page) => page)
	return (
		<ThemeProvider theme={defaultTheme}>
				{ getLayout(<Component {...pageProps} />) }
		</ThemeProvider>
	)
}
