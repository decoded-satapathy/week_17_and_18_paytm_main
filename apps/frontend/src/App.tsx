import axios from "axios";
function App() {

  return (
    <div className='w-screen h-screen flex justify-center items-center bg-gray-900'>
      <div className='w-80 h-full'>
        <div className='flex flex-col justify-center items-center gap-5 w-full h-full'>
          <div className="text-white text-6xl font-bold">HDFC Bank</div>
          <div className="text-white text-lg font-medium italic">Trusted by millions</div>
          <input placeholder='Enter ID' className="w-full rounded-xl px-4 py-2 text-xl bg-indigo-950 border-gray-500 focus:border-white border-2"></input>
          <input placeholder='Enter password' className="w-full rounded-xl px-4 py-2 text-xl bg-indigo-950 border-gray-500 focus:border-white border-2"></input>
          <button className="bg-indigo-800 text-white text-xl py-2 w-9/12 rounded-xl border-indigo-500 border-2"
            onClick={async () => {
              axios.post("http://localhost:3003/paymentresponse")
            }}
          >Proceed</button>
        </div>
      </div>
    </div>
  )
}

export default App
