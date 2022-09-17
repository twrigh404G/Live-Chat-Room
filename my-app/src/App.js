import './styles/index.css'

export default function App() {
  const userlogedin = false;
  return (
  <div>
    <div>
      {!userlogedin ? (
        <form>
        <input type="text" name="text" class="input" placeholder="Type something here...."></input>
      </form>
      ):(
        <div>
          chat room
        </div>
      )}
    </div>
  </div>
  );
}


