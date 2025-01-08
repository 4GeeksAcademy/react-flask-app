const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			films: [],
			modal: null,
			authToken: ''
		},
		actions: {
			onLogin: () => {
				setStore({ modal: 'login' })
			},
			onRegister: () => {
				setStore({ modal: 'register' })
			},
			handlerLogin: async (body) => {
				try {
					const auth = await fetch(`${process.env.BACKEND_URL}api/auth`, {
						method: 'POST',
						body: JSON.stringify(body),
						headers: {
							'Content-Type': 'application/json'
						}
					})

					if (!auth.ok) throw Error();

					const authJson = await auth.json();

					setStore({ authToken: authJson.token })
					localStorage.setItem('token', authJson.token)
					console.log(authJson);
				} catch {
					console.log('Error')
				}
			},
			handlerRegister: async (body) => {
				try {
					const register = await fetch(`${process.env.BACKEND_URL}api/signup`, {
						method: 'POST',
						body: JSON.stringify(body),
						headers: {
							'Content-Type': 'application/json'
						}
					})

					if (!register.ok) throw Error();

					const registerJson = await register.json();
					console.log(registerJson);
				} catch {
					console.log('Error')
				}


			},
			onRemoveModal: () => {
				setStore({ modal: null })
			},
			getFilms: async () => {
				await fetch('https://swapi.py4e.com/api/films/')
					.then(result => result.json())
					.then(results => setStore({ films: results.results }))
			},

		}
	};
};

export default getState;
