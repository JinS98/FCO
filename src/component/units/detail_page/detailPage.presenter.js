import * as S from "./detailPage.style.js";

export default function DetailPresenter(props) {
    return (
        <S.container>
            <S.userWrap>
            <S.rankWrap>
                <S.rankImg
                    style={{
                        backgroundImage: `url(/tier/${props.tier}.png)`
                      }}
                ></S.rankImg>
                        <S.level>{props.level}</S.level>
            </S.rankWrap>
            <S.userInfo>
                <S.nickName>{props.nickName}</S.nickName>
                <S.tier>{props.tier}</S.tier>
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