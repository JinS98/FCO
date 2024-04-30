import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function DetailContainer() {
    const [road, setRoad] = useState(false)
    const router = useRouter();
    const [ouid, setOuid] = useState("")
    const [level, setLevel] = useState(0)
    const [offset, setOffset] = useState(0)
    const [limit, setLimit] = useState(10)
    const [matchArr, setMatchArr] = useState([])
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
                const answer_match = await fetch(`https://open.api.nexon.com/fconline/v1/user/match?ouid=${ouid}&matchtype=50&offset=${offset}&limit=${limit}` ,{
                    headers:{
                      "x-nxopen-api-key": api_key
                    }
                  })
                  try{
                    const data_match = answer_match.json()
                    const data =  answer.json();
                    data.then(el => {
                        setNickname(el.nickname)
                        setLevel(el.level)
                    });
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
    if(matchArr.length !== 0) {
        //    matchArr.forEach((el) => {
        //     const answer_match_detail =  fetch(`https://open.api.nexon.com/fconline/v1/match-detail?matchid=${el}` ,{
        //         headers:{
        //                 "x-nxopen-api-key": api_key
        //                 }
        //         })
        //         // const data_match_detail = answer_match_detail.json()
        //         console.log(answer_match_detail)
        //         })
    }
        
    
    return (
        <>
            <div>{level}</div>
            <div>{nickName}</div>
            {matchArr.length !== 0 ? matchArr.map((el) => (
                <div key={el}>{el}</div>
            )) : 
            <div>경기 결과가 없습니다.</div>
            }
        </>
    )

}