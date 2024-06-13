import './App.css'
import MainGrid from './components/MainGrid';

interface AppStaticComponentsProps {
  children: React.ReactNode;
}

const AppStaticComponents = ({ children }: AppStaticComponentsProps) => (
  <>
    {children}
  </>
);

function App() {
  return (
    <>
      <AppStaticComponents>
        <MainGrid />
      </AppStaticComponents>
    </>
  )
}

export default App
