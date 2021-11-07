let score = 0;
let count=0;
let count1=0;
let count2=0;
let cs;
let name;

let k = document.getElementById("sc");
const scorecard2=()=>{
   
    let j=timescheck2();

    if(j==true)
 {
    score=score+1;

    k.innerHTML=score;
}
else{
    k.innerHTML=score;

}

}

const scorecard1=()=>{
   
    let j=timescheck1();

    if(j==true)
 {
    score=score+1;

    k.innerHTML=score;
}
else{
    k.innerHTML=score;

}

}

const scorecard=()=>{
 let a=timescheck();

 if(a==true)
 {
    score=score+1;

    k.innerHTML=score;
}
else{
    k.innerHTML=score;

}

}
const timescheck=()=>{
  count++;
  if(count==1)
  {
      return true;
  }
  else
  {
      return false;
  }

}
const timescheck1=()=>{
    count1++;
    if(count1==1)
    {
        return true;
    }
    else
    {
        return false;
    }
  
  }
  const timescheck2=()=>{
    count2++;
    if(count2==1)
    {
        return true;
    }
    else
    {
        return false;
    }
  
  }

  const clearscore=()=>{
      score=0;
      count=0;
      count1=0;
      count2=0;

      k.innerHTML=score;
  }
  const currentscore=()=>{
      let data ={
        email:document.getElementById('email').value,
        cs:score
     
      }
      console.log(data);
      let method = "POST";
      let url = " https://09bc-2405-201-8011-c01d-d571-2bf8-59e-8ccd.ngrok.io/user/scoredata";
      let xhr = new XMLHttpRequest();
      xhr.open(method, url, true);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.send(JSON.stringify(data));
      xhr.onreadystatechange = function () {
          if (xhr.readyState == 4 && xhr.status == 200) {
               alert('Your Score Submitted Succesfully');
             window.location.href="http://127.0.0.1:5500/public/end.html";
  
          }
      }

     
      
  }

