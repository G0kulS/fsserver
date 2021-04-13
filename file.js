const fs = require('fs');
const path = require('path');
const express = require('express')
const app = express();
const cors = require("cors");
app.use(cors())
app.listen(process.env.PORT || 4000);


 /* 
    }*/
app.post("/",(req,res)=>{
    if(fs.existsSync("/files"))
    {
     console.log("message:folder already exist");
    }
    else
    {
        fs.mkdir("/files",(err)=>{
            if(err) throw console.log(err) ; 
        console.log("message:folder already exist");
    })}
        let dt = new Date();
        let time = dt.getHours()+"_"+dt.getMinutes();
       let date = dt.getDate()+"_"+(+dt.getMonth()+1)+"_"+dt.getFullYear();
        console.log(time,date);
     
        
        
        if(fs.existsSync("/files/"+date+"-"+time+".txt"))
    {
        {
            res.json({"message":"file already exist"});
        }
    }
    else
    {   
        let data = "File created at "+dt.getDate()+"."+(+dt.getMonth()+1)+"."+dt.getFullYear()+"-"+dt.getHours()+":"+dt.getMinutes();
        let path = date+"-"+time+".txt";
        fs.writeFile(`/files/${path}`,data,(err)=>{
            if(err) throw err ; 
            {
                res.json({"message":"filecreated"});
               }
        });
    }
         

})

app.get("/",(req,res)=>{
        let r = "<div>";
   fs.readdir("/files/", {withFileTypes:true},(err,files)=>{
    if(err) throw err ; 
    let re = [];
    console.log(files);
for(let i =0 ; i< files.length;i++)
{
    let format = path.extname("/files/"+files[i].name) ;
           if(files[i].isDirectory()===true)
            {
            
            r = r+ "<div style=\"position:relative;display:inline-block;margin-left:10px;margin-bottom:10px;height:60px;width:250px;border:0.4px solid slategray;border-radius:10px;text-align:center\"><img src=\"https://cdn4.iconfinder.com/data/icons/small-n-flat/24/folder-blue-512.png\" height=\"40\" width=\"40\" style=\"position:absolute;left:20px;bottom:10px;\"><span style= \"position:relative;top:20px;font-size:18px;font-family:Calibri;\">"+files[i]+"</span></div>";
             re.push({
                 name: files[i].name,
                 isFolder : true 
             });
            }
        
            if(format===".txt")
            {
                r = r+ "<div style=\"position:relative;display:inline-block;margin-left:10px;margin-bottom:10px;height:60px;width:250px;border:0.4px solid slategray;border-radius:10px;text-align:center\"><img src=\"https://www.computerhope.com/jargon/t/text-file.png\" height=\"40\" width=\"40\" style=\"position:absolute;left:20px;bottom:10px;\"><span style= \"position:relative;top:20px;font-size:18px;left:10px;font-family:Calibri;\">"+files[i]+"</span></div>";
                re.push({
                    name: files[i].name,
                    isFolder : false 
                });
            }
           //console.log(path.extname("/React apps/node/files/"+files[i]));
             if(format===".mp3")
            {  
                r = r+ "<div style=\"position:relative;display:inline-block;margin-left:10px;margin-bottom:10px;height:60px;width:250px;border:0.4px solid slategray;border-radius:10px;text-align:center\"><img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy8yuYohMWnKHexeElGPSlU7VudrntmfklXw&usqp=CAU\" height=\"40\" width=\"40\" style=\"position:absolute;left:20px;bottom:10px;\"><span style= \"position:relative;top:20px;font-size:18px;left:10px;font-family:Calibri;\">"+files[i]+"</span></div>";
                re.push({
                    name: files[i].name,
                    isFolder : false 
                });
            }
            if(format===".mp4")
            {  
                re.push({
                    name: files[i].name,
                    isFolder : false 
                });
                r = r+ "<div style=\"position:relative;display:inline-block;margin-left:10px;margin-bottom:10px;height:60px;width:250px;border:0.4px solid slategray;border-radius:10px;text-align:center\"><img src=\"https://cdn.iconscout.com/icon/free/png-512/mp4-file-1821267-1543969.png\" height=\"40\" width=\"40\" style=\"position:absolute;left:20px;bottom:10px;\"><span style= \"position:relative;top:20px;font-size:18px;left:10px;font-family:Calibri;\">"+files[i]+"</span></div>";
            }
            if(format===".docx")
            { 
                re.push({
                    name: files[i].name,
                    isFolder : false 
                });  
                r = r+ "<div style=\"position:relative;display:inline-block;margin-left:10px;margin-bottom:10px;height:60px;width:250px;border:0.4px solid slategray;border-radius:10px;text-align:center\"><img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/.docx_icon.svg/1200px-.docx_icon.svg.png\" height=\"40\" width=\"40\" style=\"position:absolute;left:20px;bottom:10px;\"><span style= \"position:relative;top:20px;font-size:18px;left:10px;font-family:Calibri;\">"+files[i]+"</span></div>";
            }
            if(format===".xlsx")
            {   
                re.push({
                    name: files[i].name,
                    isFolder : false 
                });
                r = r+ "<div style=\"position:relative;display:inline-block;margin-left:10px;margin-bottom:10px;height:60px;width:250px;border:0.4px solid slategray;border-radius:10px;text-align:center\"><img src=\"https://img.icons8.com/color/452/microsoft-excel-2019--v1.png\" height=\"40\" width=\"40\" style=\"position:absolute;left:20px;bottom:10px;\"><span style= \"position:relative;top:20px;font-size:18px;left:10px;font-family:Calibri;\">"+files[i]+"</span></div>";
            }
        }
        //r = r+"</div>";
       // console.log(r);
        res.json(re);  
})

})






