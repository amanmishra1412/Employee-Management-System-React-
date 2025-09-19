import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import AuthContext from './context/AuthContext'

createRoot(document.getElementById('root')).render(
    <AuthContext>
        <App />
    </AuthContext>
)
