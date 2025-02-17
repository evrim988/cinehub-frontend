import React, { useState } from "react";
import logo from "../../img/Admin1.png";
import "./AdminLogin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { IAdminLoginRequest } from "../../models/IAdminLoginRequest";
import { useDispatch } from "react-redux";
import { CineHubDispatch } from "../../store";
import { fetchAdminLogin } from "../../store/feature/adminSlice";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
    const [showPassword, setShowPassword] = useState(false);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch<CineHubDispatch>();
    const navigate = useNavigate();

    const login = () => {

        const loginModel: IAdminLoginRequest = {
            username: username,
            password: password
        }

        if(username !== '' || password !== ''){
            dispatch(fetchAdminLogin(loginModel)).then(data => {
                if(data.payload.code === 200){
                    toast.success("Giriş İşleminiz Başarılı!", {
                        position: "top-right"
                    });
                    setTimeout(() => {
                        navigate('/admin');
                    }, 2000);
                }
                else {
                    toast.error(data.payload.message, {
                        position: "top-right"
                    });
                }
            })
        }
        else {
            toast.warning("Lütfen istenilen değerleri boş bırakmayınız...", {
                position: "top-right"
            });
        }
    }


    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
             <ToastContainer />
            <div className="login-card">
                <div className="text-center">
                    <img src={logo} className="x-logo" alt="Admin Logo" />
                    <h6 className="signup-title">Admin Paneline Giriş Yap</h6>
                </div>
                <div className="form-group">
                    <label className="input-label">Kullanıcı Adınız</label>
                    <input type="text" className="form-control x-input" value={username} onChange={evt => setUsername(evt.target.value)}/>
                </div>
                <div className="form-group position-relative">
                    <label className="input-label">Şifreniz</label>
                    <input
                        type={showPassword ? "text" : "password"}
                        className="form-control x-input"
                        value={password}
                        onChange={evt => setPassword(evt.target.value)}
                    />
                    <FontAwesomeIcon
                        icon={showPassword ? faEye : faEyeSlash}
                        className="password-icon"
                        onClick={() => setShowPassword(!showPassword)}
                    />
                </div>
                <button className="btn btn-dark w-100 mt-4" onClick={login}>Giriş Yap</button>
            </div>
        </div>
    );
}

export default AdminLogin;
