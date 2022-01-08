import { Routing } from "../../../router/routing";
import { Link } from "react-router-dom";


export const SignIn = () => {

  return (
    <div>
      <p>ログインページ</p>
      <Link to={Routing.signUp.path}>SignUpページはこちら</Link>
      <Link to={Routing.top.path}>ホームに戻る</Link>
    </div>
  );
};
