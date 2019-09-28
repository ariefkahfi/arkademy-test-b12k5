const express = require('express')
const app = express()
const {connection} = require('./models/db')


app.use(express.json())
app.use(express.urlencoded())


app.use('/assets/js',
    express.static(__dirname + '/node_modules/jquery/dist/'),
    express.static(__dirname + '/assets/js')
)
app.use('/assets/css',
    express.static(__dirname + '/assets/css')
)
app.use('/assets/img',
    express.static(__dirname + '/assets/img')
)



app.set('view engine','pug')

app.post('/add',(req,res)=>{
        connection.query("insert into name (name,id_work,id_salary) values (?,?,?)" , [req.body.name , req.body.id_work , req.body.id_salary] , err=>{
            if(err){
                console.error("ERR /add" , err)
                res.status(500).json({
                    code:500,
                    data:"Error, tidak bisa menambahkan data baru"
                })
                return;
            }
            res.json({
                code:200,
                data:`Tambah data berhasil`
            })
        })
})

app.get('/delete/:name/:id',(req,res)=>{
    connection.query("delete from name where id = ?" , [req.params.id] , err=>{
        if(err){
            console.error("ERR /delete" , err)
            res.status(500).json({
                code:500,
                data:"Error, tidak bisa menghapus data"
            })
            return;
        }
        res.json({
            code:200,
            data:`Data ${req.params.name} telah berhasil dihapus`
        })
    })
})

app.post('/edit/:id',(req,res)=>{
    connection.query("update name set name = ?, id_work = ? , id_salary = ?  where id = ? " , [req.body.name, req.body.id_work, req.body.id_salary , req.params.id] , err=>{
        if(err){
            console.error("ERR /edit" , err)
            res.status(500).json({
                code:500,
                data:"Error, tidak bisa mengupdate data"
            })
            return;
        }
        res.json({
            code:200,
            data:`Update data berhasil`
        })
    })
})


app.get("/data-work",(req,res)=>{
    connection.query("select * from work", (err,result)=>{
        if(err) {
            res.status(500)
                .json({
                    code:500,
                    data:[]
                })
            return;
        }
        res.json({
            code:200,
            data:result
        })
    })
})


app.get("/data-category",(req,res)=>{
    connection.query("select * from category", (err,result)=>{
        if(err) {
            res.status(500)
                .json({
                    code:500,
                    data:[]
                })
            return;
        }
        res.json({
            code:200,
            data:result
        })
    })
})

app.get('/listdata',(req,res)=>{
    connection.query("select * from tampil_data",(err,result)=>{
        if(err){
            console.error('ERR /listdata',err)
            res.status(500).json({
                code:500,
                data:[]
            })
            return;
        }
        res.json({
            code:200,
            data:result
        })
    })
})



app.get('/',(req,res)=>{
    res.render('index')
})

connection.connect(err=>{
    if(err){
        console.error("Error connection to database server",err.stack)
        return;
    }
    console.log("connected to database server")
    app.listen(9999 , _=>{
        console.log('listening on port 9999')
    })
})
