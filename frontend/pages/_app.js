import '../styles/global.css'
import React from "react";
import Head from 'next/head'
import Layout from "../components/Layout";
import {wrapper} from '../redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'

function App({Component, pageProps}) {
	return (
		<>
			<Head>
				<meta charSet="utf-8"/>
				<meta name="viewport" content="width=device-width, initial-scale=1"/>
				<meta name="description" content="hyecheon lee web"/>
				<title>hyecheonlee web</title>
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	)
}

export default wrapper.withRedux(App)