
function Login() {
  return (
    <div className="flex justify-center mt-16">
      <div className="w-96 p-8 shadow-lg rounded-xl">
        <h2 className="text-2xl font-bold text-center mb-6">
          Login
        </h2>

        <input
          type="email"
          placeholder="Enter Email"
          className="w-full border p-3 rounded-lg mb-4"
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="w-full border p-3 rounded-lg mb-4"
        />

        <button className="w-full bg-green-600 text-white p-3 rounded-lg">
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
