import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="container">
      <div className="row justify-content-center min-vh-100 align-items-center">
        <div className="col-md-6 col-lg-4">
          <div className="card auth-card shadow-lg p-4">
            <h2 className="text-center mb-3 fw-bold">Create Account</h2>
            <p className="text-center text-muted mb-4">
              Join our community today
            </p>

            <form>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                />
              </div>

              <div className="mb-4">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Create strong password"
                />
              </div>

              <button className="btn btn-primary w-100 mb-3">Sign Up</button>

              <div className="text-center">
                <span className="text-muted">Already a member? </span>
                <Link
                  to="/signin"
                  className="text-decoration-none text-primary fw-semibold"
                >
                  Sign In
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
