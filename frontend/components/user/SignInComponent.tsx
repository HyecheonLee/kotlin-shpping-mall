import React, { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../../redux/reducer";
import { singInAction } from "../../redux/reducer/user";
import { isAdmin } from "../../actions/auth";

const SignInComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter()
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (user.id !== -1) {
      if (isAdmin()) {
        router.push("/admin")
      } else {
        router.push("/user")
      }
    }
  }, [user])
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await dispatch(singInAction(email, password));
  }
  
  
  const handleChange = func => (e) => {
    func(e.target.value)
  }
  const singInForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input value={email} name="email" onChange={handleChange(setEmail)} type="email" className="form-control" placeholder="이메일을 입력해 주세요"/>
        </div>
        <div className="form-group">
          <input value={password} name="password" onChange={handleChange(setPassword)} type="password" className="form-control" placeholder="비밀번호을 입력해 주세요"/>
        </div>
        <div>
          <button className="btn btn-primary">로그인</button>
        </div>
      </form>
    )
  }
  const showLoading = () => loading ? <div className="alert alert-info">Loading...</div> : ''
  const showError = () => error ? <div className="alert alert-danger">{error}</div> : ''
  
  return (
    <>
      {showError()}
      {showLoading()}
      {singInForm()}
    </>
  );
};

export default SignInComponent;