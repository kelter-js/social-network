import React, { useState, useEffect } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import * as yup from "yup";
import { ErrorMessage } from "@hookform/error-message";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {
  TextField,
  Alert,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@mui/material";

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup
      .string()
      .required("No password provided")
      .min(8, "Password is too short - should be 8 chars minimum"),
    rememberMe: yup.boolean(),
    captcha: yup.string(),
  })
  .required();

const LoginForm = ({ isLoading, handler, isLoginFailed, captchaUrl }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const [error, setError] = useState(isLoginFailed);

  useEffect(() => {
    setError(isLoginFailed);
  }, [isLoginFailed]);

  const onChange = () => {
    if (error) {
      setError(null);
    }
  };

  return (
    <form
      onSubmit={handleSubmit((data) => {
        setError(null);
        handler(data);
      })}
      data-testid="login-form"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <TextField
        {...register("email", { onChange })}
        style={{ marginBottom: 15 }}
        data-testid="login-email"
        label="User login"
        type="email"
        id="login"
      />
      <ErrorMessage errors={errors} name="email" />

      <TextField
        {...register("password", { onChange })}
        data-testid="login-password"
        label="User password"
        type="password"
        id="pass"
      />
      <ErrorMessage errors={errors} name="password" />

      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              {...register("rememberMe")}
              data-testid="login-remember-me"
            />
          }
          label="Remember me"
        />
      </FormGroup>

      {captchaUrl && (
        <div className="login__captchaContainer">
          <img
            src={captchaUrl}
            alt="your security captcha"
            width={200}
            height={50}
          />

          <TextField
            {...register("captcha", { onChange })}
            data-testid="captcha-code"
            label="Captcha code"
            type="text"
            id="captcha"
          />
        </div>
      )}

      {error && (
        <Alert severity="error" data-testid="login-error-container">
          {error}
        </Alert>
      )}

      <LoadingButton
        style={{ backgroundColor: "#00308F", marginTop: 25 }}
        variant="contained"
        type="submit"
        data-testid="login-button"
        loading={isLoading}
      >
        Log in
      </LoadingButton>
    </form>
  );
};

export default LoginForm;
