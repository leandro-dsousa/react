import './App.css'
import AppHeader from './components/App_Header/App_Header'
import AppFooter from './components/App_Footer/App_Footer'
import AppContent from './components/AppContent/AppContent'

function App() {
  
  return (
    <div className="App">
      <AppHeader></AppHeader>
      <AppContent></AppContent>
      <AppFooter></AppFooter>
    </div>
  )
}

export default App