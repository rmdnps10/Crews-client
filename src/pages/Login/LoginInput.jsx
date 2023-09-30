import { useState } from "react";
import { Text } from "components/atoms";

export const LoginInput = ({showPW})=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const onSumitHanlder=(e)=>{
        e.preventDefault();
        if(email.trim() === ""){
            alert("아이디를 입력하세요");
        }
        else if(password.trim() === ""){
            alert("비밀번호를 입력하세요");
        }
        else{//아이디 비번 input 초기화, api는 나중에
            console.log(email);
            console.log(password);
            setEmail("");
            setPassword("");
        }
    }
    return(
        <form onSubmit={onSumitHanlder}>
            <label>
                <Text>
                    아이디
                </Text><br/>
                <input type='email' value={email} onChange={(e)=>(setEmail(e.target.value))}/>
            </label>
            <br/>      
            <label>
                <Text>
                    비밀번호
                </Text><br/>
                <input type={showPW? "text":"password"} value={password} onChange={(e)=>(setPassword(e.target.value))}/>
            </label>
            <br/>
            <button type="submit"><Text>로그인</Text></button>
        </form>
    );
}
