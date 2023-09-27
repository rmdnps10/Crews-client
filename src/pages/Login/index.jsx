import { Flex, Space, Text } from "components/atoms";
import { useEffect, useState } from "react";
import { CollaboCrews } from "./CollaboCrews";

export const Login = ()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [idStore, setIdStore] = useState(false);
    const [showPW, setShowPW] = useState(false);
    const toggleShowPW = (e)=>{
        const isChecked = e.target.checked;
        setShowPW(isChecked);
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
        <div>   
            <Flex direction="column">
                <Text>동아리 리크루팅과 지원을 한번에,<br/></Text><Text color="#3172EA"> Crews🚢</Text>
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
                <input type="checkbox"/>
                <Text>아이디 저장</Text>
                <input type="checkbox" checked={showPW} onChange={toggleShowPW}></input>
                <Text>비밀번호 표시</Text>
                <Text>아직 회원이 아니신가요?</Text>
                <Text color="#3172EA" cursor="pointer" onClick={()=>{alert("아직 미구현, 회원가입으로 navigate")}}>회원가입</Text>
                <Space height={"2rem"}/>
                <CollaboCrews/>
            </Flex>
        </div>
    );    
}