import { Routing } from "../../../router/routing";
import { Link } from "react-router-dom";


export const SignUp = () => {

  return (
    <div>
      <p>SignUpページ</p>
      <Link to={Routing.signIn.path}>ログインページはこちら</Link>
      <Link to={Routing.top.path}>ホームに戻る</Link>
    </div>
  );
};
