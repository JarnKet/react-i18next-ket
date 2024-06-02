import "./App.css";
import { useTranslation } from "react-i18next";

function App() {
	const { t, i18n } = useTranslation();

	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
	};

	return (
		<>
			<div className="App">
				<header className="App-header">
					<p>{t("hello")}</p>
					<button type="button" onClick={() => changeLanguage("la")}>
						Lao
					</button>
					<button type="button" onClick={() => changeLanguage("th")}>
						thai
					</button>
				</header>
			</div>
		</>
	);
}

export default App;
