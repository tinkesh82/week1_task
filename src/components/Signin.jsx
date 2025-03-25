import { Link } from "react-router-dom";

export default function Signin() {
  return (
    <div className="container">
      <div className="row justify-content-center min-vh-100 align-items-center">
        <div className="col-md-6 col-lg-4">
          <div className="card auth-card shadow-lg p-4">
            <h2 className="text-center mb-3 fw-bold">Welcome Back!</h2>
            <p className="text-center text-muted mb-4">
              Sign in to continue exploring
            </p>

            <form>
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
                  placeholder="••••••••"
                />
              </div>

              <button className="btn btn-primary w-100 mb-3">Sign In</button>

              <div className="text-center">
                <span className="text-muted">New here? </span>
                <Link
                  to="/signup"
                  className="text-decoration-none text-primary fw-semibold"
                >
                  Create Account
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
