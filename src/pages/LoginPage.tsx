import React, { useState } from 'react'
import './LoginPage.css'
import backgroundImage from '../img/login.avif';
import { ILoginRequest } from '../models/ILoginRequest';
import { useDispatch } from 'react-redux';
import { CineHubDispatch } from '../store';
import { useNavigate } from 'react-router-dom';
import { fetchLogin } from '../store/feature/authSlice';
import swal from 'sweetalert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function LoginPage() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const dispatch = useDispatch<CineHubDispatch>();

    const navigate = useNavigate();

    const login = () => {

        const loginModel: ILoginRequest = {
            username: username,
            password: password
        }
        
        dispatch(fetchLogin(loginModel)).then(data => {
            if(data.payload.code === 200){
                swal('Başarı!', 'Giriş İşleminiz Başarılı.', 'success').then(() => {
                    navigate('/');
                })
            }
            else{
                swal('Hata!', data.payload.message, 'error');
            }
        })
    }

    return (
        <div className="login-container">
            <div className="form-section">
                <h2>CineHub'a Giriş Yap</h2>
                <p>Favori filmlerini keşfetmeye bir adım kaldı!</p>
                <div className="input-container">
                    <input type="text" placeholder="Kullanıcı Adınız" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <div className="password-container">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Şifreniz"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <FontAwesomeIcon
                            icon={showPassword ?  faEye : faEyeSlash }
                            className="toggle-password-icon"
                            onClick={() => setShowPassword(!showPassword)}
                        />
                    </div>
                    <button type="button" onClick={login}>Giriş Yap</button>
                </div>
            </div>
            <div className="image-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
              
            </div>
        </div>
    )
}

export default LoginPage
