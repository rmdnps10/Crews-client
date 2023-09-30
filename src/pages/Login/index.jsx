import { Flex, Space, Text } from "components/atoms";
import { useState } from "react";
import { CollaboCrews } from "./CollaboCrews";
import { LoginInput } from "./LoginInput";
import { useCookies } from "react-cookie";
export const Login = ()=>{
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
    
    return(
        <div>   
            <Flex direction="column">
                <Text>동아리 리크루팅과 지원을 한번에,<br/></Text><Text color="#3172EA"> Crews🚢</Text>
                <LoginInput  /*더 나은 방법 없나...*/ 
                    showPW={showPW}
                     email = {email}
                     setEmail = {setEmail}
                     password = {password}
                     setPassword = {setPassword}
                />
                <input type="checkbox" checked={storeId} onChange={toggleStoreId}/>
                <Text>아이디 저장</Text>
                <input type="checkbox" checked={showPW} onChange={toggleShowPW}></input>
                <Text>비밀번호 표시</Text>
                <Text>아직 회원이 아니신가요?</Text>
                <Text color="#3172EA" cursor="pointer" onClick={()=>{alert("아직 미구현, 회원가입으로 navigate")}}>회원가입</Text>
                <Space height={"2rem"}/>
                <Text>Crews와 함께하는 동아리</Text>
                <CollaboCrews/>
            </Flex>
        </div>
    );    
}