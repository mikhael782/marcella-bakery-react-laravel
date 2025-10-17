import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../Api/auth";

export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await register({ 
                name, email, password, password_confirmation: passwordConfirmation 
            });
            navigate("/login"); // redirect ke login setelah berhasil
        } catch (err) {
            setError(err.response?.data?.message || "Register gagal");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-pink-50">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm">
                <h2 className="text-2xl font-bold text-pink-500 mb-6 text-center">Register</h2>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <input
                    type="text"
                    placeholder="Nama"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full mb-4 px-3 py-2 border rounded-lg"
                    required
                />

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full mb-4 px-3 py-2 border rounded-lg"
                    required
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full mb-4 px-3 py-2 border rounded-lg"
                    required
                />

                <input
                    type="password"
                    placeholder="Konfirmasi Password"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                    className="w-full mb-6 px-3 py-2 border rounded-lg"
                    required
                />

                <button
                    type="submit"
                    className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-700 transition"
                >
                    Register
                </button>
                
                <p className="mt-4 text-center text-gray-500">
                    Sudah punya akun? <span className="text-pink-500 cursor-pointer" onClick={() => navigate("/login")}>Login</span>
                </p>
            </form>
        </div>
    );
}