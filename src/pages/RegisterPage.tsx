import React, { useState } from 'react'
import img from '../img/about-us-image.jpg'
import './RegisterPage.css'
import backgroundImage from '../img/movie-theme-bg.avif';
import { IRegisterRequest } from '../models/IRegisterRequest';
import { useDispatch } from 'react-redux';
import { CineHubDispatch } from '../store';
import { fetchRegister } from '../store/feature/authSlice';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


function RegisterPage() {

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');

    const [showPassword, setShowPassword] = useState(false);
    const [showRePassword, setShowRePassword] = useState(false);

    const dispatch = useDispatch<CineHubDispatch>();
    const navigate = useNavigate();

    const handleSubmit = () => {

        const registerModel: IRegisterRequest = {
            firstName: name,
            lastName: surname,
            email: email,
            username: username,
            password: password,
        }

        dispatch(fetchRegister(registerModel)).then(data => {
            if (data.payload.code === 200) {
                swal('Başarılı!', 'Kayıt Olma İşleminiz Başarılı! Lütfen Mail Adresinizi Kontrol Ediniz...', 'success').then(() => {
                    navigate('/login');
                })
            }
            else {
                swal('Hata!', data.payload.message, 'error');
            }
        })

    }


    return (
        <div className="register-container">
            <div className="form-section">
                <h2>CineHub'a Katıl</h2>
                <p>Favori filmlerini keşfet ve paylaş</p>
                <div className="input-container">
                    <input type="text" placeholder="Adınız" value={name} onChange={(e) => setName(e.target.value)} />
                    <input type="text" placeholder="Soyadınız" value={surname} onChange={(e) => setSurname(e.target.value)} />
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="text" placeholder="Kullanıcı Adınız" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <div className="password-container">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Şifreniz"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <FontAwesomeIcon
                            icon={showPassword ? faEye : faEyeSlash}
                            className="toggle-password-icon"
                            onClick={() => setShowPassword(!showPassword)}
                        />
                        
                    </div>
                    <div className="password-container">
                    <input
                            type={showRePassword ? "text" : "password"}
                            placeholder="Şifreniz"
                            value={rePassword}
                            onChange={(e) => setRePassword(e.target.value)}
                        />
                        <FontAwesomeIcon
                            icon={showRePassword ? faEye : faEyeSlash}
                            className="toggle-password-icon"
                            onClick={() => setShowRePassword(!showRePassword)}
                        />
                    </div>
                   
                    <button onClick={handleSubmit}>Kayıt Ol</button>
                </div>
            </div>
            <div className="image-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className="overlay">
                    <h1>CineHub</h1>
                    <p>Sinema dünyasına adım at!</p>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage