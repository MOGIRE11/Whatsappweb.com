
const SignIn = () => {
  return (
    <>
      <div className="signin-wrapper w-full max-w-[20rem] border bg-white overflow-hidden rounded-lg shadow-lg p-4 text-black tracking-wide">
        <h2 className="underline underline-offset-2 font-semibold text-lg">
          Sign in to continue
        </h2>

        <form className="mt-4 space-y-4">
          <div className="email-input">
            <label htmlFor="email" className="text-sm">
              Enter email Address
            </label>
            <input
              type="email"
              className="h-10 border border-neutral-300 w-full rounded-md mt-1 outline-none focus:border-blue-400 px-2 placeholder:text-xs bg-white"
              id="email"
              name="User-email"
              placeholder="johndoe@gmail.com"
              required
            />
          </div>

          <div className="password-input">
            <label htmlFor="password" className="text-sm">
              Enter Password
            </label>
            <input
              type="email"
              className="h-10 border border-neutral-300 w-full rounded-md mt-1 mb-2 outline-none focus:border-blue-400 px-2 placeholder:text-xs bg-white"
              id="password"
              name="User-password"
              placeholder="Password"
              required
            />
            <a
              href="/forgot password"
              className="text-xs text-blue-500 underline underline-offset-2"
            >
              Forgot Password ?
            </a>
          </div>

          <div className="flex items-center gap-2 text-sm text-neutral-700">
            <span className="h-[1px] bg-neutral-200 w-full"></span>
            OR
            <span className="h-[1px] bg-neutral-200 w-full"></span>
          </div>

          <div className="sign-in-with-google">
            <input
              type="button"
              className="h-10 border border-neutral-300 w-full rounded-md mt-1 outline-none focus:border-blue-600 px-2 text-sm bg-white hover:bg-neutral-100 cursor-pointer transition-colors"
              id="google-sign-in"
              name="sign-in-with-google"
              value="Sign in with Google"
            />
          </div>

          <div className="submit">
            <section className="flex items-center text-sm gap-2 text-neutral-700">
              <input
                type="checkbox"
                className="accent-blue-500 cursor-pointer"
                id="remember-me"
              />
              <label htmlFor="remember-me">Remember me</label>
            </section>
            <input
              type="submit"
              className="h-10 bg-blue-600 hover:bg-blue-700 transition-colors active:bg-blue-700 active:translate-y-[2px] font-semibold text-white w-full rounded-md mt-2 outline-none px-2 text-sm cursor-pointer"
              id="sign-in"
              name="sign-in"
              value="Sign in"
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default SignIn
