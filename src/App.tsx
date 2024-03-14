import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

const LazyCustomLayout = lazy(() => import('./components/Layout/Layout'));
const LazyHomePage = lazy(() => import('./pages/HomePage/HomePage'));
const LazyPostsPage = lazy(() => import('./pages/PostsPage/PostsPage'));
const LazyAlbumsPage = lazy(() => import('./pages/AlbumsPage/AlbumsPage'));
const LazyTodoPage = lazy(() => import('./pages/TodoPage/TodoPage'));

const App = () => {
	return (
		<BrowserRouter>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path="/" element={<LazyCustomLayout />}>
						<Route index path="" element={<LazyHomePage />} />
						<Route path="posts" element={<LazyPostsPage />} />
						<Route path="albums" element={<LazyAlbumsPage />} />
						<Route path="todos" element={<LazyTodoPage />} />
					</Route>
				</Routes>
			</Suspense>
		</BrowserRouter>
	);
};

export default App;
