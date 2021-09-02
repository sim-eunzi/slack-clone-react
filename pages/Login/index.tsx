import React from 'react'

const Login = () => {
  return (
    <div id="container">
      <header>슬리액</header>
      <form>
        <label id="lb-email">이메일</label>
        <input type="text" name="email" id="email"/>

        <label id="lb-password">비밀번호</label>
        <input type="password" name="password" id="password"/>
      </form>
    </div>
  )
}

export default Login