import "./login.scss";

export default function Admin() {
  return (
    <form className="form">
      <div>
        <img
          src="https://tse2.mm.bing.net/th?id=OIP.1KxrDUTiC_bpuKYczAn4_AHaFO&pid=Api&P=0&h=220"
          alt=""
          className="logo"
        />
      </div>
      <div className="head">
        <h1>Login</h1>
        <label htmlFor="">E-Mail</label>
        <br />
        <input type="text" placeholder="Placerholder content" />
        <br />
        <br />
        <label htmlFor="">Password</label>
        <br />
        <input type="text" placeholder="Placerholder content" />
        <br />
        <br />
        <div className="pass">
          <b>Fogot password?</b>
        </div>
        <br />
        <button className="btn">Login </button>
        <br />
        <br />

        <br />
        <button className="btn1">Register now</button>
      </div>
    </form>
  );
}
