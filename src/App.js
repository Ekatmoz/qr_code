import './css/style.css'
import QRCode from 'react-qr-code';

function App() {
  return (
    <div className="w-full min-h-screen grid place-content-center bg-[#181818]">
      <div className='w-[23rem] p-7 space-y-8 text-slate-300'>
        <div className='w-full h-[18rem] border border-neutral-200 rounded-3xl grid place-content-center bg-[#202020]'>
          <span>None</span>
        </div>
        <form className='space-y-5'>
            <div>
              <input className='bg-[#252525] rounded w-full p-2' placeholder='text or yourlink.com'></input>
            </div>
            <button className='w-full py-3 flex justify-center bg-[#252525] hover:bg-neutral-600 duration-200 rounded'>
              Create
            </button>
          </form>
      </div>
    </div>
  );
}

export default App;