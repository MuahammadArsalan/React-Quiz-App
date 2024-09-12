


import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'

function App() {

let [question,setQuestion] = useState([])
let [questionState,setQuestionState] = useState(0);
let tickAnswer = useRef([])

useEffect(()=>{
  axios("https://the-trivia-api.com/v2/questions")
  .then((res)=>{
  // console.log(res.data);
  setQuestion(res.data)

  
  
  
})
.catch((err)=>{
  console.log(err);

})

},[])



function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [array[i], array[j]] = [array[j], array[i]];
  }
  
  return array;
}

function nextQuestion(index){

let checkedButton = tickAnswer.current.find(input => input.checked);

if(checkedButton ){
  let selectedValue = checkedButton.value
console.log(selectedValue);


}

if(questionState < question.length - 1){
  setQuestionState(questionState + 1 )
}

}
  return (

    <>
<h1>Quiz App</h1>

{question && question.length > 0 ? <div>

  { <h1>Q:{questionState + 1 } : {...question[questionState].question.text} </h1> }
  <ul>

{shuffleArray([...question[questionState].incorrectAnswers,question[questionState].correctAnswer]).map((item,index)=>{
  return <li key={index}>

    <input type="radio" name='choice'id={item} value={item}ref={el => tickAnswer.current[index] = el}/>
    <label htmlFor={item}>{item}</label>
  </li>
})}

  </ul>


<button onClick={()=>{nextQuestion()}}>Next </button>

</div>: <p>Loading....</p> }


</>



  )




}

export default App


