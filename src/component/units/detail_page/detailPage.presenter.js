import * as S from "./detailPage.style.js";

export default function DetailPresenter(props) {
    return (
        <S.container>
            <S.userWrap>
            <S.rankWrap>
                <S.rankImg></S.rankImg>
            </S.rankWrap>
            <S.userInfo>
                <div>{props.nickName}</div>
                <div>{props.level}</div>
            </S.userInfo>
            </S.userWrap>
            {/* {matchArr.length !== 0 ? matchArr.map((el) => (
                <div key={el}>{el}</div>
            )) : 
            <div>경기 결과가 없습니다.</div>
            } */}
        </S.container>
    )
}