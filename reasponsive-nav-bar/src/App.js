import React, {useState} from 'react';
import HeaderToolBar from './components/header-toolbar.component'

import SlideDrawer from './components/slideDrawer.component'

import Backdrop from './components/backdrop.component';

function App() {

  const [slideDrawerOpen, setSlideDrawerOpen] = useState (false)

  const handleOnclick = () => {
    setSlideDrawerOpen((prevState) => !prevState )
  }

  const handleCloseDrawer = () => {
    setSlideDrawerOpen(false)
  }

  let backdrop;

  if(slideDrawerOpen) {
    backdrop = <Backdrop handleCloseDrawer = {handleCloseDrawer}/>
  }

  return (
    <div style ={{height:'100%'}}>
      <HeaderToolBar handleOnclick = {handleOnclick}/>
      <SlideDrawer onShow = {slideDrawerOpen}/>
      {backdrop}
      <main style ={{marginTop: '64px'}}>
      <p>This is the content area!</p>
      </main>

      
    </div>
  );
}

export default App;
