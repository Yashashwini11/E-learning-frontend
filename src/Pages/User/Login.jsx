import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '@/services/Api';  // Adjust import path as necessary
import { toast } from 'react-toastify';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');  // Use lowercase for state variable
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
    
        try {
            const response = await login(email, password, role);
    
            if (response.status === 200) {
                
                toast.success("Login Successul");
                const data = response.data;
                console.log(response.data);
                localStorage.setItem('token', data.token);
                localStorage.setItem('role', data.role);
                localStorage.setItem('userId', data.id);
                localStorage.setItem('username',data.name) ;   
                const userId = localStorage.getItem('userId');
                const token = localStorage.getItem('token');
                const role = localStorage.getItem('role');
                const name=localStorage.getItem('username');
                
                console.log(token);
                console.log(userId);
                console.log(role);
                console.log(name);
                
                
                if (role === 'USER') {
                    navigate('/user/dashboard');
                } else if (role === 'ADMIN' && email==='admin@gmail.com' && password==="admin") {
                    navigate('/admin/dashboard');
                } else if (role === 'INSTRUCTOR') {
                    navigate('/tutor/dashboard');
                }
            } else {
                setError('Invalid credentials');
                toast.error("Invalid credentials");
            }
        } catch (error) {
            console.error('Error:', error);
            setError(error.response?.data?.message || 'An error occurred. Please try again.');
        }
    };
    

    return (
        <div className="h-screen flex">
            <div
                className="w-1/2 h-full bg-no-repeat bg-left bg-contain"
                style={{ backgroundImage: 'url(/src/assets/images/login.png)' }}
            >
            </div>
            <div className="w-1/2 h-full flex flex-col items-center justify-center p-8">
                <div className="w-full max-w-md p-8 space-y-6 border-2 border-blue-200 shadow-md rounded-lg dark:bg-slate-700 bg-white">
                    <h2 className="text-2xl font-bold text-center dark:text-white">LOGIN</h2>
                    {error && <p className="text-red-500 text-center">{error}</p>}
                    <form className="space-y-6" onSubmit={handleLogin}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium dark:text-white">Email address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium dark:text-white">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        </div>
                        <div>
                            <label htmlFor="role" className="block text-sm font-medium dark:text-white">Role</label> {/* Updated htmlFor */}
                            <select
                                id="role"  // Updated id to match htmlFor
                                name="role"  // Updated name to match state variable
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                                required
                                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            >
                                <option value="user">USER</option>
                                <option value="admin">ADMIN</option>
                                <option value="tutor">INSTRUCTOR</option>
                            </select>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input id="remember_me" name="remember_me" type="checkbox" className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                                <label htmlFor="remember_me" className="block ml-2 text-sm dark:text-white">Remember me</label>
                            </div>
                            <div className="text-sm">
                                <a href="#" className="font-medium text-blue-600 hover:text-blue-500">Forgot your password?</a>
                            </div>
                        </div>
                        <div>
                            <button type="submit" className="w-full px-4 py-2 text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none">Sign in</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
