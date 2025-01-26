import RootNavigationStack from './routes/RootNavigationStack';
import { ThemeProvider } from './constants/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <RootNavigationStack />
    </ThemeProvider>
  );
};
export default App;
