import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Jumbotron } from "../component/jumbotron";
import { Modal } from "../component/modal";

import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Card } from "../component/card";

export const Home = () => {
	const { store } = useContext(Context);

	const { films, modal } = store;

	return (
		<div className="text-center mt-5">

			<h1>Nuevo Proyecto</h1>
			<div className="p-5 mt-3">
				<Jumbotron title="Mi app de starwars" image={'https://as1.ftcdn.net/v2/jpg/02/98/94/38/1000_F_298943877_A4W7tVyZPCu6gNGuGXJUerZbXsWmblLb.jpg'} />
			</div>
			<div className="mt-4 p-4">
				Cartas de star wars
				<div className="container d-flex flex-wrap justify-content-around">
					{
						films.map(film =>
							<Card title={film.title} episodeId={film.episode_id} />
						)
					}
				</div>
			</div>

			{
				modal === 'login' && <Modal />
			}
			{
				modal === 'register' && <Modal />
			}

		</div>
	);
};
