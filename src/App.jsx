import React, {useEffect} from 'react' 
import './App.css'
import {useStateContext} from './contexts/ContextProvider'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {FiSettings} from 'react-icons/fi'
import {TooltipComponent} from '@syncfusion/ej2-react-popups'

import {Sidebar} from './components/Sidebar'
import {Navbar} from './components/Navbar'
import {ThemeSetting} from './components/ThemeSetting'

import {Ecommerce} from  './pages/Ecommerce'
import {Orders} from './pages/Orders'
import {Employees} from './pages/Employees'
import {Customers} from './pages/Customers'
import {Kanban} from './pages/Kanban'
import {Editor} from './pages/Editor'
import {Calendar} from './pages/Calendar'
import {ColorPicker} from './pages/ColorPicker'

import {Line} from './pages/charts/Line'
import {Area} from './pages/charts/Area'
import {Bar} from './pages/charts/Bar'
import {Pie} from './pages/charts/Pie'
import {Financial} from './pages/charts/Financial'
import {ColorMapping} from './pages/charts/ColorMapping'
import {Pyramid} from './pages/charts/Pyramid'
import {Stacked} from './pages/charts/Stacked'

function App() {
  const {activeMenu, themeSettings, setThemeSettings, currentColor} = useStateContext()

  return (
    <div>
      <Router>
        <div className="flex relative dark:bg-main-dark-bg">
          <div 
            className='fixed right-4 bottom-4'
            style={{zIndex:'1000'}}
          >
            <TooltipComponent 
              content="Settings"
              position="Top"
            >
              <button 
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
                style={{ background: {currentColor}, borderRadius: '50%' }}
                onClick={() => setThemeSettings(true)}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>

          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          ):(
            <div className='w-0 dark:bg-secondary-dark-bg'>
              <Sidebar />
            </div>
          )}
          <div className={activeMenu ? 
            'dark:bg-main-dark-bg bg-main-bg min-h-screen md:ml-72 w-full' : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2'}
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>
          </div>

          <div>
            {themeSettings && <ThemeSetting />}
            
            <Routes>
              {/* dashboard  */}
              <Route path="/" element={<Ecommerce />} />
              <Route path="/ecommerce" element={<Ecommerce />} />

              {/* pages  */}
              <Route path="/orders" element={<Orders />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/customers" element={<Customers />} />

              {/* apps  */}
              <Route path="/kanban" element={<Kanban />} />
              <Route path="/editor" element={<Editor />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/color-picker" element={<ColorPicker />} />

              {/* charts  */}
              <Route path="/line" element={<Line />} />
              <Route path="/area" element={<Area />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/financial" element={<Financial />} />
              <Route path="/color-mapping" element={<ColorMapping />} />
              <Route path="/pyramid" element={<Pyramid />} />
              <Route path="/stacked" element={<Stacked />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  )
}

export default App
