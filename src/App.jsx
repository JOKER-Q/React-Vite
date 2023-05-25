/*
 * @Descripttion:
 * @version:
 * @Author: Bailinxiang
 * @Date: 2023-05-24 16:07:46
 * @LastEditors: sueRimn
 * @LastEditTime: 2023-05-25 13:46:47
 */
import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TestPage from "./pages/testPage";

function App() {
	const [count, setCount] = useState(0);

	useEffect(() => {
		console.log("123");
		debugger;
	}, []);

	return (
		<>
			<div>
				<a href="https://vitejs.dev" target="_blank" rel="noreferrer">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank" rel="noreferrer">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={() => setCount(count => count + 1)}>count is {count}</button>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">Click on the Vite and React logos to learn more</p>
			<TestPage></TestPage>
		</>
	);
}
export default App;
