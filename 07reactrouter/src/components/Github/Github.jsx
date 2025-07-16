import React, { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"
function Github() {
  const data = useLoaderData()
  // const [data,setData]=useState([])
  // useEffect(() => {
  //   fetch("https://api.github.com/users/jatinPrakash2720")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data)
  //       setData(data)
  //     })
  // })
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github Follower: {data.followers}
      <img width="300px" alt="Git Picture" src={data.avatar_url} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const res = await fetch("https://api.github.com/users/jatinPrakash2720")
  return res.json()
}
