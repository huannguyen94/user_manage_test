import './App.css';
import Headers from './components/layout/Headers';
import Sidebar from './components/layout/Sidebar';
import DieuHanh from './components/DieuHanh';
import NhanHang from './components/NhanHang';
import {Route, Switch} from "react-router-dom";

function App() {
	return (
		<div className="back">
			<div className="contents" style={{display:'flex'}} >
				<Sidebar />
				<div style={{width:"100%"}}>
					<Headers />
					<Route path="/dieu_hanh" exact component={DieuHanh} />
					<Route path="/nhan_hang" exact component={NhanHang} />
				</div>
				<div>
				</div>
			</div>
		</div>
	);
}

export default App;
