import React, { Suspense, lazy } from 'react';
import Loader from './Loader';
import { Provider } from 'react-redux';
import store from './store';
import '../css/main.css';

const MainContainer = lazy(() => import('./MainContainer'));

const App = () => (
	<Suspense fallback={<Loader />}>
		<Provider store={store}>
			<MainContainer />
		</Provider>
	</Suspense>
);

export default App;
