import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navigate } from 'react-router'

import PostsContainer from './components/Container/PostsContainer'
import PostsHeader from './components/PostsHeader/PostsHeader'
import { headerIcons } from './assets/headerIcons'
import Header from './components/Header/Header'
import Wrapper from './components/Wrapper/Wrapper'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Wrapper>
        <Routes>
          {headerIcons.map((item) => (
            <Route
              key={item.id}
              path={item.path}
              element={<PostsHeader logo={item.logo} lang={item.lang} />}
            />
          ))}
          <Route path="/" element={<Navigate to="/js" />} />
        </Routes>
        <PostsContainer />
      </Wrapper>
    </BrowserRouter>
  )
}

export default App
