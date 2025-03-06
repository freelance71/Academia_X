import React from 'react';
import ReactDOM from 'react-dom';

const Post = (props) => {
    	return (
		<div>
			<div>
				<img src={props.imagen}/>
			</div>
			<div>
				<h1>{props.usuario}    </h1>
				<p>{props.info}</p>
                 			</div>
			<div>
				{props.children}
                			</div>
			<div>
				<button>Recomendar</button>
                				<button>Comentar</button>
                				<button>Compartir</button>
                				<button>Enviar</button>
    			</div>
		</div>
	);
}
const Seccion = () => {
    	return (
		<Post
			imagen="#"
			usuario="Jorge Sanchez"
			info="Estudiante de desarrollo de software"
		>
			<div>
				<p>Mi primera página web con React</p>
				<img    src="#"/>
			</div>
		</Post>
	);
}
ReactDOM.render(<Seccion />, document.getElementById('root'));