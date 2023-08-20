import { Outlet, NavLink } from "react-router-dom"

export default function HelpLayout (){
  return (
	<div className="help-layout">
	  <h2>Website Help</h2>
	  <p>Lorem Ipsum</p>

	  <nav>
		<NavLink to="faq">View the FAQ</NavLink>
	  </nav>
	  <nav>
		<NavLink to="contact">Contact Us</NavLink>
	  </nav>

	  <Outlet/>
	</div>
  );
}
