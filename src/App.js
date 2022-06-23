import { Routes, Route } from 'react-router-dom'
import Posts from './pages/Posts'
import Users from './pages/Users'
import './style/App.scss';

function App() {
  return (
    <Routes>
      <Route />
      <Route path="/" element={<Users />} />
      <Route path="/posts" element={<Posts />} />
    </Routes>
  )

}

export default App;
