import './GetWeather.module.css';
export default function Getweather(): JSX.Element {
	return (
		<div className="for-div-form">
			<div className="for-div-form">
				<form className="for-div-form">
					<label htmlFor="city">Введите город</label>
					<input id="city" type="text" name="city" />
					<label htmlFor="lang">Виберите язык</label>
					<select id="lang" name="lang">
						<option value="ua">Ua</option>
						<option value="ru">Ru</option>
						<option value="en">En</option>
					</select>
					<button type="submit">Получить</button>
				</form>
			</div>
			<div>
				<h1 className="h1d">Weather</h1>
			</div>
		</div>
	);
}

// function Feedback(props) {
// 	return (<form>
// 		<div>
// 			<label htmlFor="name">Ваше имя</label>
// 			<input id="name" name="name" />
// 		</div>
// 		<div>
// 			<label htmlFor="satisfaction">Выберите уровень удовлетворённости</label>
// 			<select id="satisfaction" name="satisfaction">
// 				<option value="good">Хорошо</option>
// 				<option value="bad">Плохо</option>
// 			</select>
// 		</div>
// 		<div>
// 			<label htmlFor="agreement">
// 				<input id="agreement" name="agreement" type="checkbox">
// 					Согласен на передачу перс.данных
// 				</input>
// 			</label>
// 		</div>
// 		<button type="submit">Отправить</button>
// 	</form>)
// }
