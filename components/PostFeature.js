import React from "react"
import {useEffect} from "react";
import styles from "./CPostFeature.module.css"

function PostFeature(){
    Check()
    return(
    <div>
    
    <div className = {styles["news_feed_title"]}>Whats the latest News?</div>
     <div id="output">

     </div>
     </div>
        
    )
}

function Check(){
    useEffect(() => { 
    
     fetch('https://cors-anywhere.herokuapp.com/http://newsapi.org/v2/top-headlines?country=ca&apikey=0d2cd629e60b490db2dee429b4ad52e5', {headers: new Headers({"X-Requested-With":"newsasdwa"})})
    .then(a => a.json())
    .then(response =>{
         for(var i=0; i< response.articles.length; i++){
             if(response.articles[i].url == null){
                 continue;
             }
             document.getElementById("output").innerHTML +=
           // "<div style='padding-top:20px;'><img style='float:center; width: 150px;'src='"+response.articles[i].urlToImage+"'><h1>"+response.articles[i].description+"</h1> <a href='"+response.articles[i].url+"'target='_blank'>Click To Read Full Article...</a></div>";
            "<div style='margin:20px; justify-items: center;  text-align: left;' ><img style=' border: solid black 1px; float:center; width: 40%;'src='"+response.articles[i].urlToImage+"'><h1 style='font-weight: bold; padding-top: 5px;'>"+response.articles[i].description+"</h1> <a href='"+response.articles[i].url+"'target='_blank'>Click To Read Full Article...</a></div>";
        }
    })
        
        /*
        var createPostArea = document.getElementById("createPostArea");
        var postButton = document.getElementById("postButton");
        var viewPostArea = document.getElementById("viewPostArea");

        postButton.onclick = () =>{
           console.log("testing post feature")
           createPostArea.innerHTML = createPostArea.value
           viewPostArea.innerText += createPostArea.innerHTML
          */

        
    }, []);




}

export default PostFeature
