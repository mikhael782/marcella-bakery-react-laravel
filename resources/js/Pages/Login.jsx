import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../Api/auth";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventdefault();
        try {
            const res = await login({ email, password });
            localStorage.setItem("token", res.data.access_token);
            navigate("/");
        } catch (err) {
            setError(err.response?.data?.message || "Login gagal");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-pink-100">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm">
                <h2 className="text-2xl font-bold text-pink-500 mb-6 text-center">Login</h2>
                {error && <p className="text-red-500 mb-4">{error}</p>}
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
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full mb-6 px-3 py-2 border rounded-lg"
                    required
                />

                <button
                    type="submit"
                    className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-700 transition"
                >
                    Login
                </button>

                <p className="mt-4 text-center text-pink-500">
                    Belum punya akun? <span className="text-pink-500 cursor-pointer" onClick={() => navigate("/register")}>Register</span>
                </p>
            </form>
        </div>
    );
}