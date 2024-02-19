import { Button } from '@arco-design/web-react'

import Versions from './components/Versions'

function App(): JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <>
      <div className="text-red-500 mt-5">tailwindcss</div>
      <div className="action">
        <a target="_blank" rel="noreferrer" onClick={ipcHandle}>
          Send IPC
        </a>
      </div>
      <Button type="primary">click</Button>
      <Versions></Versions>
    </>
  )
}

export default App
