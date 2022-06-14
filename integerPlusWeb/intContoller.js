function makeNewRandNum(numList, num){
    if(numList==null){ console.error("makeNewRandNum에서 비어있는 매게변수를 받았습니다.");}
    for(var i=0; i<num; i++){
        var flag = Math.floor(Math.random() * 20);
        //console.log("플래그값:"+flag.toString());
        numList[i]= Math.floor(Math.random() * 20)+1;
        if(flag%2==1){
            //console.log(i.toString()+"번째에서 음수생성");
            numList[i]*=(-1);
        }
    }

}

function makeQuiz(randNumList, len ,quizStringList, ansList){
    var j=0;
    var temp1="";
    var temp2="";

    for (var i =0 ; i< len ; i+=2){
        if(randNumList[i]>0){ temp1="(+"+randNumList[i].toString()+")";}else{ temp1="("+randNumList[i].toString()+")";}
        if(randNumList[i+1]>0){ temp2="(+"+randNumList[i+1].toString()+")";}else{ temp2="("+randNumList[i+1].toString()+")";}

        quizStringList[j]= "Q "+temp1.toString() + " + "+temp2.toString()+"  = ";
        ansList[j]= randNumList[i]+randNumList[i+1];
        j++
    }

}








myNum = new Array();
new makeNewRandNum(myNum,10);
/*
console.log("난수확인");
for(var i=0 ; i<10; i++)
    console.log(myNum[i]);
*/

quizStringList = new Array();
var ansList=new Array();
new makeQuiz(myNum,10, quizStringList,ansList);

/*
console.log("지문확인");
for(var i=0 ; i<5; i++)
    console.log(quizStringList[i]);
*/


Q= new Array();
for(var i=0 ; i<5; i++){
    var key ="l"+(i+1).toString(); 
    Q[i] = document.getElementById(key);
    Q[i].innerText= quizStringList[i];
}



var obj = document.createElement("input");
obj.type ="button";
obj.id ="mbtn";
obj.value="제출"



obj.onclick = function (){
    //console.log("처리시작");
    var A=new Array();
    var temp;
    var score =0;
    for(var i=0 ; i<5; i++){
        var key ="A"+(i+1).toString(); 
        temp= document.getElementById(key);
        A[i]=temp.value;
        console.log(A[i]);
        
    }
    //console.log("처리끝");
    document.body.remove();
    for(var i=0; i<5; i++){
        document.write(quizStringList[i]); //지문찍기
        document.write(A[i]); //학생의 답변적기
        if( parseInt(A[i])==ansList[i] ){
            document.write("   O 정답");
            score+=20;
        }
        else{
            document.write("   X 오답 -> 정답:"+ansList[i].toString());
            
        }

        document.write("<br/>"); //학생의 답변적기
    };


    
    
    document.write("<br/>총점:"+score.toString()); //총점 공지
    document.write("<br/>");
    if(score>=80){

        document.write("비밀번호공개<br/>");
        filePaht = "./openkey.html";
        var src= "<iframe src="+filePaht+" width=\'400\' heigth=\'300\'></iframe> ";
        document.write(src);

    }



};

var fm= document.getElementById("QNA");
fm.appendChild(obj);
