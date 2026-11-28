
function Register() {
  return (
    <div className="flex justify-center mt-12">
      <div className="w-96 p-8 shadow-lg rounded-xl">
        <h2 className="text-2xl font-bold text-center mb-6">
          Create Account
        </h2>

        <input type="text" placeholder="Full Name"
          className="w-full border p-3 rounded-lg mb-4" />

        <input type="email" placeholder="Email"
          className="w-full border p-3 rounded-lg mb-4" />

        <input type="password" placeholder="Password"
          className="w-full border p-3 rounded-lg mb-4" />

        <select className="w-full border p-3 rounded-lg mb-4">
          <option value="">Select Role</option>
          <option value="farmer">Farmer</option>
          <option value="buyer">Buyer</option>
        </select>

        <button className="w-full bg-green-600 text-white p-3 rounded-lg">
          Register
        </button>
      </div>
    </div>
  );
}

export default Register;
