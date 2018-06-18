
const express= require('express'),
	 path = require('path');

const app =express();


app.use(express.static('./YOUR_APP_NAME/dummy'));

app.get('/*', (req,res)=>{
    
res.sendFile(path.join(__dirname,'/dist/YOUR_APP_NAME/index.html'));

});

app.listen(process.env.PORT || 8080, ()=>{
console.log('Server started');
})
