import { Routes, Route } from 'react-router-dom';
import { HomePage, TicTacToeGuestPage, TicTacToePage, TicTacToeHotseatPage, TicTacToeGamePage, TicTacToeBotPage, TicTacToeBotGamePage } from './pages';
import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Menu } from './components/menu/menu';


export default function App() {

  const location = useLocation();

  const redirectToInputMenu = useSelector(store => store.ticTacToe.redirectToInputMenu)
  const navigate = useNavigate()

  React.useEffect(() => {
    if (!redirectToInputMenu && (location.pathname === '/tic-tac-toe/guest-mode/hotseat/game')) {
      navigate('/tic-tac-toe')
    }
  }, [redirectToInputMenu])

  return (
    <>
      <Menu />
      <Routes location={location}>
        <Route path="/" element={<HomePage />} />
        <Route path="/tic-tac-toe" element={<TicTacToePage />} />
        <Route path="/tic-tac-toe/guest-mode" element={<TicTacToeGuestPage />} />
        <Route path="/tic-tac-toe/guest-mode/hotseat" element={<TicTacToeHotseatPage />} />
        {redirectToInputMenu && <Route path="/tic-tac-toe/guest-mode/hotseat/game" element={<TicTacToeGamePage />} />}
        <Route path="/tic-tac-toe/guest-mode/bot" element={<TicTacToeBotPage />} />
        <Route path="/tic-tac-toe/guest-mode/bot/game" element={<TicTacToeBotGamePage />} />
      </Routes>
    </>
  );
}