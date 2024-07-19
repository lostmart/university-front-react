import { useNavigate } from "react-router-dom"
import { useContext, useEffect } from "react"
import { UserContext } from "../context/UserContext"

import { useIsAuthenticated } from "../hooks/useIsAuthenticated"
import { Link } from "react-router-dom"

const ProfilePage = () => {
	useIsAuthenticated()

	const navigate = useNavigate()

	// empty valued user
	const initialUser = {
		username: "Guest",
		logged: false,
	}

	const { user, setUser } = useContext(UserContext)

	useEffect(() => {
		if (!user.logged) {
			navigate("/")
		}
	}, [user, navigate])

	return (
		<main className="container">
			<section className="profile_section p-4">
				<h2>Profile page</h2>
				<div className="row g-4 pt-4">
					<div className="col-md-6 position-relative text-center">
						<article className="p-3 mt-4 rounded-2">
							{user && (
								<>
									<img
										className="profile-pic"
										src={user.image}
										alt={user.username}
									/>
									<h3 style={{ marginTop: "100px" }}>
										{user.firstName} {user.lastName}
									</h3>
									<p> {user.username}</p>
								</>
							)}
							<button
								className="btn btn-outline-primary mt-4"
								onClick={() => {
									navigate("/")
									sessionStorage.clear()
									return setUser(initialUser)
								}}
							>
								log out
							</button>
						</article>
					</div>
					<div className="col-md-6">
						<article className="p-3 mt-md-4 rounded-2">
							<h3>Courses</h3>
							{/* <div className="spinner-border text-light" role="status">
								<span className="visually-hidden">Loading...</span>
							</div> */}
							<table className="table text-bg-dark">
								<thead>
									<tr>
										<th scope="col">Year</th>
										<th scope="col">Subject</th>
										<th scope="col">Credits</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<th scope="row">Freshman</th>
										<td>Math</td>
										<td>14</td>
									</tr>
									<tr>
										<th scope="row">Freshman</th>
										<td>Science</td>
										<td>32</td>
									</tr>
									<tr>
										<th scope="row">Freshman</th>
										<td>Biology</td>
										<td>12</td>
									</tr>
								</tbody>
							</table>
						</article>
					</div>
				</div>
				<div className="row g-4 pt-4">
					<div className="col-md-6">
						<article className="p-3 rounded-2">
							<h3>Contacts</h3>
							<div className="list-group list-group-flush">
								<Link
									to="/contact/123"
									className="list-group-item list-group-item-action text-bg-dark d-flex justify-content-between align-items-center"
									aria-current="true"
								>
									UserName
									<img
										src="https://dummyjson.com/icon/sophiab/128"
										alt=""
										className="friends-avatar"
									/>
								</Link>
								<a
									href="#"
									className="list-group-item list-group-item-action text-bg-dark"
								>
									A second link item
								</a>
							</div>
						</article>
					</div>
				</div>
			</section>
		</main>
	)
}

export default ProfilePage
