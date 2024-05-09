import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import DetailPresenter from "./detailPage.presenter.js";

export default function DetailContainer() {
    const [road, setRoad] = useState(false)
    const router = useRouter();
    const [ouid, setOuid] = useState("")
    const [level, setLevel] = useState(0)
    const [tier, setTier] = useState("")
    const [offset, setOffset] = useState(0)
    const [limit, setLimit] = useState(10)
    const [matchArr, setMatchArr] = useState([])
    const [matchDetailArr, setMatchDetailArr] = useState([])
    const [nickName, setNickname] = useState("")
    const api_key = "test_d99136a6620b8c3ae3cbfaea65967ed20cc5a83097ceae1ea44b5f833640c03df4fb540bb2355b6feb0a9fa1aa98e676"
    let urlString = ""

    useEffect(() => {
        setOuid (router.query.player)
        if(ouid) {
            async function fetchUser() {
                urlString = `https://open.api.nexon.com/fconline/v1/user/basic?ouid=`
                const answer = await fetch(urlString + ouid ,{
                    headers:{
                      "x-nxopen-api-key": api_key
                    }
                  })
                  const answer_rank = await fetch(`https://open.api.nexon.com/fconline/v1/user/maxdivision?ouid=${ouid}`,{
                    headers:{
                      "x-nxopen-api-key": api_key
                    }
                  })
                const answer_match = await fetch(`https://open.api.nexon.com/fconline/v1/user/match?ouid=${ouid}&matchtype=50&offset=${offset}&limit=${limit}` ,{
                    headers:{
                      "x-nxopen-api-key": api_key
                    }
                  })
                  try{
                    const data_match = answer_match.json()
                    const data =  answer.json();
                    const data_rank = answer_rank.json()
                    data.then(el => {
                        setNickname(el.nickname)
                        setLevel(el.level)
                    });
                    data_rank.then((el) => {
                        el.forEach((el_rank) => {
                            if(el_rank.matchType === 50) {
                                if(el_rank.division === 800) {
                                    setTier("슈퍼챔피언스")
                                 }else if(el_rank.division === 900) {
                                    setTier("챔피언스")
                                 }else if(el_rank.division === 1000) {
                                    setTier("슈퍼챌린지")
                                 }else if(el_rank.division === 1100) {
                                    setTier("챌린지1")
                                 }else if(el_rank.division === 1200) {
                                    setTier("챌린지2")
                                 }else if(el_rank.division === 1300) {
                                    setTier("챌린지3")
                                 }else if(el_rank.division === 2000) {
                                    setTier("월드클래스1")
                                 }else if(el_rank.division === 2100) {
                                    setTier("월드클래스2")
                                 }else if(el_rank.division === 2200) {
                                    setTier("월드클래스3")
                                 }else if(el_rank.division === 2300) {
                                   setTier("프로1")
                                 }else if(el_rank.division === 2400) {
                                   setTier("프로2")
                                 }else if(el_rank.division === 2500) {
                                   setTier("프로3")
                                 }else if(el_rank.division === 2600) {
                                   setTier("세미프로1")
                                 }else if(el_rank.division === 2700) {
                                   setTier("세미프로2")
                                 }else if(el_rank.division === 2800) {
                                   setTier("세미프로3")
                                 }else if(el_rank.division === 2900) {
                                   setTier("유망주1")
                                 }else if(el_rank.division === 3000) {
                                   setTier("유망주2")
                                 }else if(el_rank.division === 3100) {
                                   setTier("유망주3")
                                 }
                            }
                        })
                    })
                    data_match.then((el) => {
                        setMatchArr(el)
                    })
                  }catch(error){
                    if (error instanceof Error) alert(error.message);
                  }
            }
            fetchUser()
        }else{
            setRoad(!road)
        }
    },[road])
    

    if(matchArr.length !== 0) {(async function () {
            const response = matchArr
              .map((el) => fetch(`https://open.api.nexon.com/fconline/v1/match-detail?matchid=${el}`,{
                headers:{
                            "x-nxopen-api-key": api_key
                        }
              })
              .then((res) => res.json()));
              console.log(response)
          })();

    }
        
    
    return (
        <>
           <DetailPresenter 
            level = {level}
            nickName = {nickName}
            tier = {tier}
           />
        </>
    )

}