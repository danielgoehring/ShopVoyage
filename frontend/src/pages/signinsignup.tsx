const SigninSignup = () => {
  return (
    <section className="flex justify-center pt-20">
      <form className="w-[560px] bg-white rounded-sm">
        <div className="px-8 py-12">
          <h1 className="mb-8 text-3xl font-semibold">Sign Up</h1>
          <div className="flex flex-col gap-6 mb-4">
            <input
              className="p-4 border-solid border-2 border-gray-300"
              type="text"
              placeholder="Name"
            />
            <input
              className="p-4 border-solid border-2 border-gray-300"
              type="email"
              placeholder="Email"
            />
            <input
              className="p-4 border-solid border-2 border-gray-300"
              type="password"
              placeholder="Password"
            />
          </div>
          <button className="my-5 py-4 border-none rounded-sm w-full bg-zinc-950 text-white text-xl font-semibold">
            Submit
          </button>
          <div className="flex">
            <p>Already have an account?</p>{" "}
            <span className="ml-2 font-semibold">Login</span>
          </div>
          <div className="flex mt-4 gap-3">
            <input type="checkbox" name="" id="" />
            <p>By continuing, I agree to the terms of service.</p>
          </div>
        </div>
      </form>
    </section>
  );
};

export default SigninSignup;
