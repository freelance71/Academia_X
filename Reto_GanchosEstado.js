function Acordion({ pregunta, texto }) {

	const [oculto, setOculto] = useState(true);

	return (
		<div>
			<h5>{pregunta}</h5>
			{oculto ? (
				<button onClick={() => setOculto(false)}>+</button>
			) : (
				<button onClick={() => setOculto(true)}>-</button>
			)}
			{oculto && <div>{texto}</div>}
		</div>
	);
}

ReactDOM.render(
	<Acordion
		pregunta="¿Tienen cursos gratuitos?"
		texto="Si deseas tutoriales y conocimientos gratuitos, Programador X los comparte todos los viernes en su canal de YouTube en programadorX.com"
	/>,
	document.querySelector('#root')
);