import Body from "./components/Body";
import Header from "./components/Header";
import { Provider } from "react-redux";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import MyVideoContainer from "./components/MyVideosContainer";
const appRouter = createBrowserRouter([{
  path:"/",
  element:<Body></Body>,
  children:[
    {
      path:"/",
      element:<MainContainer/>
    },
    {
      path:"/watch",
      element:<WatchPage/>
    },
    {
      path:"/myVideos",
      element:<MyVideoContainer></MyVideoContainer>
    }
  ]
}
]);
function App() {
  return (
    <Provider store = {store}>
    <div>
      <Header/>
      <RouterProvider router = {appRouter}></RouterProvider>
      <Body/>
      {/**
       *Header
       *Body
       *   Sidebar
       *     MenuItems
       *   MainContainer
       *     ButtonsList
       *     VideoContainer
       *        VideoCard
       */

      }
    </div>
    </Provider>
  );
}

export default App;
