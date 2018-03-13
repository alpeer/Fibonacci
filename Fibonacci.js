/* 
	Fibonacci Dizisi
	Telif Hakkı (c) 2018
		Alper Kürşat Ünver 
		alper @ ilgilenio.com
	Lisans : MIT (https://github.com/alpeer/Fibonacci/)
*/
let Fibonacci=new Proxy({ratio:(Math.sqrt(5)+1)/2},{
    get:function(n,num){
    	if(['oran','ratio','Sayısı','Number'].indexOf(num)>-1){return n.ratio;}
    	return (Math.pow(n.ratio,num=Number(num)+1)-Math.pow(-n.ratio,-num))/Math.sqrt(5)
    }
})
Math.PHI=Fibonacci.Sayısı;