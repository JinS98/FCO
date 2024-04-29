import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function DetailContainer() {
    const router = useRouter();
    const [ouid, setOuid] = useState("")
    const [level, setLevel] = useState(0)
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
                  try{
                    const data =  answer.json();
                    data.then(el => {
                        setNickname(el.nickname)
                        setLevel(el.level)
                });
                  }catch(error){
                    if (error instanceof Error) alert(error.message);
                  }
            }
            fetchUser()
        }
    },)

    return (
        <>
            <div>{level}</div>
            <div>{nickName}</div>
        </>
    )

}