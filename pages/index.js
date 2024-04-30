import * as S from "../src/component/units/search_page/searchPage.style.js";
import { useState } from "react";
import { useRouter } from "next/router";


export default function Home() {
  const router = useRouter();
  const [nickName, setNickName] = useState("")
  const api_key = "test_d99136a6620b8c3ae3cbfaea65967ed20cc5a83097ceae1ea44b5f833640c03df4fb540bb2355b6feb0a9fa1aa98e676"
  const urlString = ""


  const onClickBtn = async () => {
    urlString = "https://open.api.nexon.com/fconline/v1/id?nickname="
    const answer = await fetch(urlString + nickName, {
      headers:{
        "x-nxopen-api-key": api_key
      }
    })
    try{
      const data = await answer.json();
      router.push(`/${data.ouid}`);
    }catch(error){
      if (error instanceof Error) alert(error.message);
    }
   
  }
  const onChangeNickName = (e) => {
    setNickName(e.target.value)
  }

  return (
    <>
      <S.Background>
        <S.Logo></S.Logo>
        <S.Wrapper>
          <S.InputWrap>
            <S.Text>검색</S.Text>
            <S.Input
          placeholder="구단주명"
          onChange={onChangeNickName}
          // onKeyDown={onChangeNickName}
          onKeyDown={(e) => e.code === 'Enter' ? onClickBtn(): ""}
          />
          </S.InputWrap>
          <S.Btn onClick={onClickBtn}>
          </S.Btn>
        </S.Wrapper>
      </S.Background>
    </>
  )
}
