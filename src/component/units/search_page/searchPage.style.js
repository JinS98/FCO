import styled from "@emotion/styled";

export const Background = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: #07553B;
`;
export const Logo = styled.div`
width: 350px;
height: 200px;
background-image: url('/FCO_logo.png');
background-size: 100% 100%;
margin-bottom: 50px;
`
export const Wrapper = styled.div`
    width: 50%;
    height: 68px;
    display: flex;
    border-radius: 30px ;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    padding-left: 50px;
    padding-right: 30px;
`
export const InputWrap = styled.div`
    width: 90%;
    height: 70%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`
export const Text = styled.div`
    font-size: 13px;
`
export const Input =styled.input`
    width: 90%;
    /* height: 80%; */
    border: none;
    font-size: 20px;
    :focus {
        outline: none;
    }
`
export const Btn = styled.button`
    width: 10%;
    height: 100%;
    font-weight: bold;
    background-color: white;
    background-image: url('/FCO.png');
    background-size: cover;
    border: none;
    background-position-y:-7px ;
    cursor: pointer;
    /* border: none; */
`