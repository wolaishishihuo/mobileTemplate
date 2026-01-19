import ApplicationNavigator from '@/navigation/Application';
import { ThemeProvider } from '@/themes/ThemeProvider';
import './src/global.css';

function App() {
  return (
    <ThemeProvider>
      <ApplicationNavigator />
    </ThemeProvider>
  );
}

export default App;
