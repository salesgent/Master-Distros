import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { PulseLoader } from "react-spinners";

///
import styles from "../styles/password.module.scss";
import { RiLockPasswordFill, RiLockPasswordLine } from "react-icons/ri";
import { BiError } from "react-icons/bi";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { resetPassword } from "../src/AsyncFunctions/Auth";

const ForgetPassword = ({ showForm,email,token }) => {
  const router = useRouter();
  const [password, setPassword] = useState({
    pass: "",
    confirmPass: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    resetPassword(
      password.pass,
      password.confirmPass,
      email,
      token
    )(dispatch).then((data) => {
      setLoading(false);
      if (data) router.push("/");
    });
  };

  return (
    <div className={styles.container}>
      {showForm ? (
        <form className={styles.resetCard} onSubmit={(e) => handleSubmit(e)}>
          <h6>Reset password</h6>
          <p>
            <b> Hint:</b> The password should be at least 8 characters long. To
            make it stronger, use upper and lower case letter, number and
            symbols like ! &ldquo; ? $ % ^ & ).
          </p>

          <div className={styles.inputBx}>
            <span className={styles.icon}>
              <RiLockPasswordLine />
            </span>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password *"
              required
              minLength={8}
              value={password?.pass}
              onChange={(e) => {
                setPassword({ ...password, pass: e.target.value });
              }}
            />
            <span
              className={styles.showPassBtn}
              onClick={() => {
                setShowPassword((open) => !open);
              }}
              style={{ fontSize: "1.5rem" }}
            >
              {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
            </span>
          </div>
          <div className={styles.inputBx}>
            <span className={styles.icon}>
              <RiLockPasswordFill />
            </span>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Confirm Password *"
              required
              minLength={8}
              value={password?.confirmPass}
              onChange={(e) => {
                setPassword({ ...password, confirmPass: e.target.value });
              }}
            />
          </div>

          <div className={styles.btnRow}>
            <button
              type="submit"
              disabled={loading}
              className={styles.loginBtn}
            >
              {loading ? (
                <PulseLoader color="#ffffff" />
              ) : (
                <span>Reset password</span>
              )}
            </button>
          </div>
        </form>
      ) : (
        <div className={styles.error}>
          <BiError className={styles.errIcon} />{" "}
          <h3>You reset password link in not vaild.</h3>
        </div>
      )}
    </div>
  );
};

export default ForgetPassword;

export async function getServerSideProps(context) {
  const status = await fetch(
    `${process.env.DOMAIN_BASE_URL}${context?.resolvedUrl}`
  ).then((res) => {
    return res.status;
  });

  return {
    props: {
      showForm: status === 200 ? true : false,
      email: context.query?.email,
      token: context.query?.token,
    },
  };
}
