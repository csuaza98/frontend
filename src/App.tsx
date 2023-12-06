import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { SnackbarProvider } from 'notistack';

import ThemeConfig from '@/theme/ThemeConfig';
import RouterConfig from '@/routes/RouterConfig';
import store, { persistor } from '@/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeConfig>
          <SnackbarProvider
            autoHideDuration={3000}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          >
            <RouterConfig />
          </SnackbarProvider>
        </ThemeConfig>
      </PersistGate>
    </Provider>
  );
};

export default App;
