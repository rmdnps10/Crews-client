import { useState } from "react";
import { Text } from "components/atoms";
import { useCookies } from "react-cookie";

export const LoginInput = ()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPW, setShowPW] = useState(false);
    //user id pw 쿠키
    const [cookies, setCookie, removeCookie] = useCookies(["userCookie"]);
    //id 저장할건지 체크박스 유무
    const [storeId, setStoreId] = useState(false);
    const toggleShowPW = (e)=>{
        const isShowed = e.target.checked;
        setShowPW(isShowed);
    }
    const toggleStoreId = (e)=>{
        const storeIdChecked = e.target.checked;
        setStoreId(storeIdChecked);
    }
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
        <>
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
            <input type="checkbox" checked={storeId} onChange={toggleStoreId}/>
            <Text>아이디 저장</Text>
            <input type="checkbox" checked={showPW} onChange={toggleShowPW}></input>
            <Text>비밀번호 표시</Text>
        </>
    );
}
