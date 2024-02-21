import React from 'react';
import {Link} from "react-router-dom";

const Sidebar = () => {
  return (
    <>
    <Link to="/todo">
        <div class="mt-2 px-1 py-2 d-flex side-menu">
            <img
            class="mr-2"
            src="https://cdn-icons-png.flaticon.com/128/7246/7246748.png"
            style={{ maxHeight: "30px" }}
            />
            <h5 style={{color: "white"}}>Tasks</h5>
        </div>
    </Link>
    <Link to="/history">
        <div class="mt-2 px-1 py-2 d-flex side-menu">
            <img
            class="mr-2"
            src="https://cdn-icons-png.flaticon.com/128/4215/4215285.png"
            style={{ maxHeight: "30px" }}
            />
            <h5 style={{color: "white"}}>History</h5>
        </div>
    </Link>
    <Link to="/dashboard">
        <div class="mt-2 px-1 py-2 d-flex side-menu">
            <img
            class="mr-2"
            src="https://cdn-icons-png.flaticon.com/128/3408/3408591.png"
            style={{ maxHeight: "30px" }}
            />
            <h5 style={{color: "white"}}>Dashboard</h5>
        </div>
    </Link>
    </>
  )
}

export default Sidebar