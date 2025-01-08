import React, { useContext, useState } from 'react'
import { Context } from '../store/appContext';


export const Modal = () => {
    const { actions, store } = useContext(Context);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = () => {

        if (store.modal === 'register') {
            actions.handlerRegister({ email, password })
        }

        if (store.modal === 'login') {
            actions.handlerLogin({ email, password })
        }

        setEmail('')
        setPassword('')
    }

    return (
        <div className="modal" tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">

                    <div className="modal-header">
                        <h5 className="modal-title">{store.modal === 'login' ? 'Login' : 'Register'}</h5>
                        <button onClick={actions.onRemoveModal} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">

                        <div>
                            <input name='email' type="email" placeholder='email' value={email} onChange={(evt) => setEmail(evt.target.value)} />
                            <input name='password' type="password" placeholder='password' value={password} onChange={(evt) => setPassword(evt.target.value)} />
                        </div>


                    </div>
                    <div className="modal-footer">
                        <button onClick={actions.onRemoveModal} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button onClick={onSubmit} type="button" className="btn btn-primary">{store.modal === 'login' ? 'Login' : 'Register'}</button>
                    </div>
                </div>
            </div>
        </div >
    )
}